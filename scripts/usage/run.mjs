#!/usr/bin/env node
/**
 * Usage-review runner: fills in the versioned templates in scripts/usage/*.sql
 * with the live article list (read off src/content/articles/*.md frontmatter
 * with gray-matter, never a second hand-maintained path list), shells out to
 * `npx wrangler d1 execute hih-analytics --remote --json` for every query,
 * reuses functions/lib/github-releases.mjs directly for the GitHub download
 * counts, optionally checks the two literal strings /stats renders for a
 * missing ANALYTICS_SALT or a stale pulse, and writes a dated Markdown
 * report to local/usage/<YYYY-MM-DD>.md.
 *
 * Read-only, always: every query is asserted `changed_db: false` before its
 * rows are used (see assertReadOnly below), and this script never files a
 * GitHub issue and never edits a file under docs/ — that is the skill
 * procedure's job (~/.claude/skills/site-usage-review/), run by a human or
 * an agent reading this report, never by this file. See the work order's
 * Manager ruling 3.
 *
 * Usage: node scripts/usage/run.mjs --days N [--preview] [--dry-run]
 *   --days N     Review window in days (e.g. 7). Required.
 *   --preview    Include env='preview' rows (hidden by default, same rule
 *                functions/stats.ts applies).
 *   --dry-run    Accepted for symmetry with the skill procedure's own
 *                dry-run step; this script never files issues or edits
 *                docs/ regardless, so the flag changes nothing it does —
 *                it only prints a note saying so.
 */

import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import matter from 'gray-matter';

import { formatDownloadCount, sumDownloads } from '../../functions/lib/github-releases.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..', '..');
const usageDir = __dirname;
const articlesDir = join(repoRoot, 'src', 'content', 'articles');
const reportsDir = join(repoRoot, 'local', 'usage');
const secretsPath = join(repoRoot, 'local', 'analytics', 'secrets.md');

const DATABASE = 'hih-analytics';
const STALE_HOURS = 12; // matches functions/stats.ts's STALE_HOURS exactly.
const ZERO_REACH_MIN_ARRIVED = 20; // manager ruling 2.
const DROPPED_DAY_RATIO = 0.3; // manager ruling 2.
const DROPPED_DAY_MIN_MEDIAN = 10; // manager ruling 2.
const GITHUB_RELEASES_URL = 'https://api.github.com/repos/Alexgub84/claude-skills/releases';

// ---------------------------------------------------------------------------
// Args
// ---------------------------------------------------------------------------

/** @param {string[]} argv */
function parseArgs(argv) {
  const args = { days: null, preview: false, dryRun: false };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--days') {
      args.days = Number(argv[i + 1]);
      i += 1;
    } else if (arg === '--preview') {
      args.preview = true;
    } else if (arg === '--dry-run') {
      args.dryRun = true;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }
  if (!Number.isFinite(args.days) || args.days <= 0 || !Number.isInteger(args.days)) {
    throw new Error('--days N is required and must be a positive integer, e.g. --days 7');
  }
  return args;
}

// ---------------------------------------------------------------------------
// SQL literal escaping (same `sqlStr` rule functions/stats.ts uses) and
// template substitution.
// ---------------------------------------------------------------------------

/** @param {string} value */
function sqlStr(value) {
  return `'${String(value).replace(/'/g, "''")}'`;
}

/** @param {string[]} paths */
function pathsInList(paths) {
  return paths.map(sqlStr).join(', ');
}

/**
 * Reads one scripts/usage/<name>.sql template, strips its full-line SQL
 * comments (wrangler's CLI arg parser treats a `--command` value that
 * starts with `--` as a flag rather than the command's own value — the
 * comments are documentation for a human reading the template file, never
 * something the database needs), substitutes every token in `tokens`, and
 * fails loudly if a placeholder survives the substitution.
 *
 * @param {string} name
 * @param {Record<string,string>} tokens
 */
function buildSql(name, tokens) {
  const file = join(usageDir, `${name}.sql`);
  let sql = readFileSync(file, 'utf8')
    .replace(/^--.*$/gm, '')
    .trim();
  for (const [token, value] of Object.entries(tokens)) {
    sql = sql.split(token).join(value);
  }
  const leftover = sql.match(/\/\*[A-Z_]+\*\/|\?[12]\b/);
  if (leftover) {
    throw new Error(`${name}.sql: unresolved placeholder ${leftover[0]} — check run.mjs's token map`);
  }
  return sql;
}

/**
 * Runs one substituted query against the real remote D1 database and
 * asserts it never wrote anything before returning its rows. Every call
 * site in this file reads `scripts/usage/*.sql`, which the build's own
 * `grep -iE "insert|update|delete|alter|drop"` check (see the work order's
 * acceptance criteria) keeps free of a write statement, but this assertion
 * is the second, run-time half of the same invariant: a template that
 * somehow wrote anything aborts the whole run instead of silently
 * reporting on a mutated database.
 *
 * @param {string} name
 * @param {string} sql
 */
function execute(name, sql) {
  const raw = execFileSync(
    'npx',
    ['wrangler', 'd1', 'execute', DATABASE, '--remote', '--command', sql, '--json'],
    { encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 },
  );
  /** @type {Array<{ success: boolean; results: unknown[]; meta: { changed_db: boolean } }>} */
  const parsed = JSON.parse(raw);
  const result = parsed[0];
  if (!result || result.success !== true) {
    throw new Error(`${name}.sql: wrangler did not report success`);
  }
  if (result.meta?.changed_db) {
    throw new Error(`${name}.sql: changed_db was true for a read-only template — aborting the run`);
  }
  return { rows: /** @type {Record<string, unknown>[]} */ (result.results ?? []), meta: result.meta };
}

/**
 * @param {string} name
 * @param {Record<string,string>} tokens
 */
function runQuery(name, tokens) {
  return execute(name, buildSql(name, tokens));
}

const num = (value) => (typeof value === 'number' ? value : Number(value ?? 0));

// ---------------------------------------------------------------------------
// Article frontmatter (the live, generalized article/part/skill list)
// ---------------------------------------------------------------------------

function readArticles() {
  let files = [];
  try {
    files = readdirSync(articlesDir, { recursive: true }).filter((entry) => entry.endsWith('.md'));
  } catch {
    return [];
  }
  return files
    .map((file) => {
      const { data } = matter(readFileSync(join(articlesDir, file), 'utf8'));
      const slug = typeof data.slug === 'string' ? data.slug : null;
      if (!slug) return null;
      return {
        slug,
        path: `/articles/${slug}`,
        title: typeof data.title === 'string' ? data.title : slug,
        draft: data.draft === true,
        parts: Array.isArray(data.parts) ? data.parts : [],
        skill: typeof data.skill === 'string' ? data.skill : null,
      };
    })
    .filter((a) => a !== null);
}

// ---------------------------------------------------------------------------
// GitHub download counts (functions/lib/github-releases.mjs, read-only fetch)
// ---------------------------------------------------------------------------

/** @param {{ skill: string }[]} skillArticles */
async function fetchDownloadCounts(skillArticles) {
  if (skillArticles.length === 0) return {};
  try {
    const response = await fetch(GITHUB_RELEASES_URL, {
      headers: { 'User-Agent': 'handinhandai-site-usage-review', Accept: 'application/vnd.github+json' },
    });
    if (!response.ok) return null;
    const releases = await response.json();
    const result = {};
    for (const article of skillArticles) {
      result[article.skill] = sumDownloads(releases, `${article.skill}.zip`);
    }
    return result;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// The two /stats literals (Design, Manager ruling 1's one narrow exception).
// STATS_TOKEN is read from local/analytics/secrets.md and never printed,
// logged, or written into the report — only the two booleans derived from
// it are.
// ---------------------------------------------------------------------------

function readStatsToken() {
  if (!existsSync(secretsPath)) return null;
  const match = readFileSync(secretsPath, 'utf8').match(/^STATS_TOKEN=(\S+)/m);
  return match ? match[1] : null;
}

async function checkStatsSignals() {
  const token = readStatsToken();
  if (!token) {
    return { checked: false, note: 'STATS_TOKEN not found in local/analytics/secrets.md — /stats signals not checked.' };
  }
  try {
    const response = await fetch(`https://handinhandai.com/stats?k=${encodeURIComponent(token)}&days=30`);
    if (!response.ok) {
      return { checked: false, note: `/stats responded HTTP ${response.status} — signals not checked.` };
    }
    const html = await response.text();
    return {
      checked: true,
      saltMissing: html.includes('ANALYTICS_SALT is not set'),
      staleFlag: /class="pulse stale"/.test(html),
    };
  } catch (error) {
    return { checked: false, note: `/stats fetch failed: ${error instanceof Error ? error.message : String(error)}` };
  }
}

// ---------------------------------------------------------------------------
// Report helpers
// ---------------------------------------------------------------------------

function median(numbers) {
  if (numbers.length === 0) return null;
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

function ago(ms) {
  const diff = Date.now() - ms;
  const minutes = Math.floor(diff / 60_000);
  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 48) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

function table(headers, rows) {
  if (rows.length === 0) return '_No rows in this window._\n';
  const head = `| ${headers.join(' | ')} |`;
  const sep = `| ${headers.map(() => '---').join(' | ')} |`;
  const body = rows.map((row) => `| ${row.join(' | ')} |`).join('\n');
  return `${head}\n${sep}\n${body}\n`;
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function findPreviousReport(currentPath) {
  if (!existsSync(reportsDir)) return null;
  const files = readdirSync(reportsDir)
    .filter((f) => /^\d{4}-\d{2}-\d{2}\.md$/.test(f) && join(reportsDir, f) !== currentPath)
    .sort();
  if (files.length === 0) return null;
  const file = files[files.length - 1];
  return { file, path: join(reportsDir, file) };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const previewFlag = args.preview ? '1' : '0';
  const since = sqlStr(`-${args.days} days`);
  const common = { '?1': since, '?2': previewFlag };

  const articles = readArticles();
  const published = articles.filter((a) => !a.draft);
  const allPaths = published.map((a) => a.path);
  const partsArticles = published.filter((a) => a.parts.length > 0);
  const skillArticles = published.filter((a) => a.skill);

  const lastEvent = runQuery('last-event', { '?2': previewFlag });
  const daily = runQuery('daily-trend', common);
  // A second, wider daily-trend pull purely to compute each review-window
  // day's trailing 7-day median for the "collector dropped" check (manager
  // ruling 2) — the review window itself (e.g. 7 days) carries no history
  // before its own start to compare against.
  const dailyWithLookback = runQuery('daily-trend', { ...common, '?1': sqlStr(`-${args.days + 7} days`) });
  const totals = runQuery('totals', common);
  const sources = runQuery('sources', common);
  const campaigns = runQuery('campaigns', common);
  const landingPages = runQuery('landing-pages', common);
  const devices = runQuery('devices', common);
  const countries = runQuery('countries', common);
  const scrollDepth = runQuery('scroll-depth', common);
  const contactFunnel = runQuery('contact-funnel', common);
  const clicksByLabel = runQuery('clicks-by-label', common);

  const perArticle = allPaths.length
    ? runQuery('per-article-funnel', { ...common, '/*ARTICLE_PATHS*/': pathsInList(allPaths) })
    : { rows: [], meta: null };

  const crossPage = allPaths.length
    ? runQuery('cross-page', { ...common, '/*ARTICLE_PATHS*/': pathsInList(allPaths) })
    : { rows: [], meta: null };

  const perPart = partsArticles.length
    ? runQuery('per-part-funnel', {
        ...common,
        '/*PART_ARTICLE_PATHS*/': pathsInList(partsArticles.map((a) => a.path)),
      })
    : { rows: [], meta: null };

  const handoffClickMatch = skillArticles.length
    ? skillArticles
        .map((a) => {
          const labels = [`skill-handoff-download-${a.skill}`, 'github.com/Alexgub84/claude-skills'];
          return `(path = ${sqlStr(a.path)} AND label IN (${labels.map(sqlStr).join(', ')}))`;
        })
        .join(' OR ')
    : '0';

  const handoff = skillArticles.length
    ? runQuery('handoff-funnel', {
        ...common,
        '/*HANDOFF_ARTICLE_PATHS*/': pathsInList(skillArticles.map((a) => a.path)),
        '/*HANDOFF_CLICK_MATCH*/': handoffClickMatch,
      })
    : { rows: [], meta: null };

  const queriesRun = [
    ['last-event', lastEvent],
    ['daily-trend', daily],
    ['daily-trend (lookback)', dailyWithLookback],
    ['totals', totals],
    ['sources', sources],
    ['campaigns', campaigns],
    ['landing-pages', landingPages],
    ['devices', devices],
    ['countries', countries],
    ['scroll-depth', scrollDepth],
    ['contact-funnel', contactFunnel],
    ['clicks-by-label', clicksByLabel],
    ['per-article-funnel', perArticle],
    ['cross-page', crossPage],
    ['per-part-funnel', perPart],
    ['handoff-funnel', handoff],
  ];

  const downloadCounts = await fetchDownloadCounts(skillArticles);
  const statsSignals = await checkStatsSignals();

  // -------------------------------------------------------------------
  // "What looks broken" — manager ruling 2's thresholds, mechanically.
  // -------------------------------------------------------------------
  const broken = [];

  const lastTs = lastEvent.rows[0]?.last_ts != null ? num(lastEvent.rows[0].last_ts) : null;
  const stale = lastTs === null || Date.now() - lastTs > STALE_HOURS * 60 * 60 * 1000;
  if (stale) {
    broken.push(
      lastTs === null
        ? 'No events recorded at all — the collector may not be writing.'
        : `Last event was ${ago(lastTs)}, past the ${STALE_HOURS}h staleness threshold.`,
    );
  }
  if (statsSignals.checked && statsSignals.saltMissing) {
    broken.push('/stats reports ANALYTICS_SALT is not set — collection is paused.');
  }

  // Collector-dropped days: a day whose view count is below 30% of the
  // trailing 7-day median, only when that median is itself >= 10 (manager
  // ruling 2) — checked only for days inside the actual review window,
  // using the wider lookback pull for the preceding-7-days history.
  const lookbackByDay = new Map(dailyWithLookback.rows.map((r) => [r.day, num(r.views)]));
  const sortedDays = [...lookbackByDay.keys()].sort();
  const windowDays = new Set(daily.rows.map((r) => r.day));
  const today = todayISO(); // today's UTC day is always partial — never judged as "dropped".
  for (const day of sortedDays) {
    if (!windowDays.has(day) || day === today) continue;
    const idx = sortedDays.indexOf(day);
    if (idx < 7) continue; // not enough trailing history
    const trailing = sortedDays.slice(idx - 7, idx).map((d) => lookbackByDay.get(d));
    const med = median(trailing);
    const views = lookbackByDay.get(day) ?? 0;
    if (med !== null && med >= DROPPED_DAY_MIN_MEDIAN && views < med * DROPPED_DAY_RATIO) {
      broken.push(`${day}: ${views} views, below ${Math.round(DROPPED_DAY_RATIO * 100)}% of the trailing 7-day median (${med}) — looks like a dropped collector day.`);
    }
  }

  // Zero-reach parts: only when the article's own arrived in the window is
  // >= 20 (manager ruling 2).
  const arrivedByPath = new Map(perArticle.rows.map((r) => [r.path, num(r.arrived)]));
  for (const article of partsArticles) {
    const arrived = arrivedByPath.get(article.path) ?? 0;
    if (arrived < ZERO_REACH_MIN_ARRIVED) continue;
    for (const part of article.parts) {
      const row = perPart.rows.find((r) => r.path === article.path && r.part === part.id);
      const reach = row ? num(row.reach) : 0;
      if (reach === 0) {
        broken.push(`${article.path}: part "${part.id}" has zero reach despite ${arrived} arrivals in the window.`);
      }
    }
  }

  // Dead CTA: the homepage contact funnel's own two steps, only when the
  // funnel's own arrived is >= 20 (manager ruling 2). This review's only
  // concretely queryable CTA funnel today; see reference.md if a future
  // run needs a second CTA definition.
  const contactArrived = num(contactFunnel.rows[0]?.arrived ?? 0);
  if (contactArrived >= ZERO_REACH_MIN_ARRIVED) {
    if (num(contactFunnel.rows[0]?.reached_contact ?? 0) === 0) {
      broken.push(`Contact section was never reached despite ${contactArrived} arrivals in the window.`);
    }
    if (num(contactFunnel.rows[0]?.opened_whatsapp ?? 0) === 0) {
      broken.push(`No WhatsApp opens were recorded despite ${contactArrived} arrivals in the window — looks like a dead CTA.`);
    }
  }

  // -------------------------------------------------------------------
  // Report
  // -------------------------------------------------------------------
  const reportDate = todayISO();
  if (!existsSync(reportsDir)) mkdirSync(reportsDir, { recursive: true });
  const reportPath = join(reportsDir, `${reportDate}.md`);
  const previous = findPreviousReport(reportPath);

  const total = totals.rows[0] ?? {};
  const generatedAt = new Date().toISOString();

  const perArticleRows = published.map((a) => {
    const row = perArticle.rows.find((r) => r.path === a.path);
    return [a.path, String(row ? num(row.arrived) : 0), row ? `${num(row.avg_depth)}%` : '-', row ? `${num(row.avg_seconds)}s` : '-'];
  });

  // Cross-page: "Of N sessions, K visited another page: <path> K1, ..." per
  // published article. N is that article's own `arrived` from the
  // per-article funnel above; K is the cross-page query's own
  // '(any other page)' denominator row — never derived by summing the
  // per-other-page rows, which double-count a session that visited more
  // than one other page.
  const crossPageLines = published.map((a) => {
    const arrived = arrivedByPath.get(a.path) ?? 0;
    const otherRows = crossPage.rows.filter((r) => r.article_path === a.path && r.other_path !== '(any other page)');
    const anyOtherRow = crossPage.rows.find((r) => r.article_path === a.path && r.other_path === '(any other page)');
    const visitedAnother = anyOtherRow ? num(anyOtherRow.sessions) : 0;
    const breakdown = otherRows.map((r) => `${r.other_path} ${num(r.sessions)}`).join(', ');
    const line = visitedAnother === 0
      ? `Of ${arrived} sessions, none visited another page.`
      : `Of ${arrived} sessions, ${visitedAnother} visited another page: ${breakdown}.`;
    return `- **${a.path}**: ${line}`;
  });

  const perPartSections = partsArticles
    .map((a) => {
      const rows = a.parts.map((part) => {
        const row = perPart.rows.find((r) => r.path === a.path && r.part === part.id);
        const reach = row ? num(row.reach) : 0;
        const arrived = arrivedByPath.get(a.path) ?? 0;
        const share = arrived ? `${Math.round((reach / arrived) * 100)}%` : '-';
        return [part.id, String(reach), share, row?.median_seconds == null ? '-' : `${row.median_seconds}s`];
      });
      return `### ${a.path}\n\n${table(['Part', 'Reach', '% of arrived', 'Median dwell'], rows)}`;
    })
    .join('\n');

  const handoffRows = skillArticles.map((a) => {
    const row = handoff.rows.find((r) => r.path === a.path);
    const reached = row ? num(row.reached) : 0;
    const clicked = row ? num(row.clicked) : 0;
    const downloads = downloadCounts ? downloadCounts[a.skill] ?? null : null;
    return [a.path, String(reached), String(clicked), formatDownloadCount(downloads)];
  });

  const mismatchNotes = skillArticles
    .map((a) => {
      const row = handoff.rows.find((r) => r.path === a.path);
      const clicked = row ? num(row.clicked) : 0;
      const downloads = downloadCounts ? downloadCounts[a.skill] ?? null : null;
      if (downloads == null || downloads === clicked) return null;
      return `- ${a.path}: site recorded ${clicked} click(s) to GitHub, GitHub reports ${downloads} total download(s) of \`${a.skill}.zip\` (informational — GitHub counts every fetch, including bots; never flagged, per manager ruling 2).`;
    })
    .filter(Boolean);

  let comparison;
  if (!previous) {
    comparison = 'First report.';
  } else {
    const prevContent = readFileSync(previous.path, 'utf8');
    const prevVisitors = prevContent.match(/Visitors:\s*(\d+)/)?.[1];
    comparison = `Compared with \`${previous.file}\`: this window shows ${num(total.visitors)} visitors`
      + (prevVisitors ? ` vs. ${prevVisitors} previously.` : ' (previous report had no comparable visitor line to diff against).');
  }

  const brokenSection = broken.length ? broken.map((line) => `- ${line}`).join('\n') : 'Nothing crossed a threshold this run.';

  const queriesTable = table(
    ['Template', 'Rows', 'changed_db'],
    queriesRun.map(([name, result]) => [name, String(result.rows.length), String(Boolean(result.meta?.changed_db))]),
  );

  const markdown = `# Usage review — ${reportDate}

Window: last ${args.days} day(s) (since \`${since.slice(1, -1)}\`, UTC) ${args.preview ? '· preview rows included' : '· preview rows hidden (default)'} · generated ${generatedAt}

## Summary

- Visitors: ${num(total.visitors)} · Sessions: ${num(total.sessions)} · Pageviews: ${num(total.views)}
- Avg engaged: ${num(total.avg_seconds)}s · Avg scroll depth: ${num(total.avg_depth)}%
- Last event: ${lastTs === null ? 'no events recorded' : ago(lastTs)}${stale ? ' — STALE' : ''}
- ANALYTICS_SALT: ${statsSignals.checked ? (statsSignals.saltMissing ? 'MISSING — collection is paused' : 'set') : `unknown (${statsSignals.note})`}

## Who arrived

### Daily trend

${table(['Day', 'Visitors', 'Sessions', 'Views'], daily.rows.map((r) => [r.day, String(num(r.visitors)), String(num(r.sessions)), String(num(r.views))]))}

### Traffic sources

${table(['Source', 'Sessions'], sources.rows.map((r) => [String(r.source), String(num(r.sessions))]))}

### Campaigns

${table(['Campaign', 'Sessions'], campaigns.rows.map((r) => [String(r.campaign), String(num(r.sessions))]))}

### Landing pages

${table(['Path', 'Sessions'], landingPages.rows.map((r) => [String(r.path), String(num(r.sessions))]))}

### Devices

${table(['Device', 'Sessions'], devices.rows.map((r) => [String(r.device), String(num(r.sessions))]))}

### Countries

${table(['Country', 'Sessions'], countries.rows.map((r) => [String(r.country), String(num(r.sessions))]))}

### Scroll depth

${table(['Bucket', 'Sessions'], scrollDepth.rows.map((r) => [String(r.bucket), String(num(r.sessions))]))}

## What they read

### Per-article funnel (every published article)

${table(['Article', 'Arrived', 'Avg depth', 'Avg engaged'], perArticleRows)}

### Cross-page (did readers visit another page in the same session)

${crossPageLines.length ? crossPageLines.join('\n') : '_No published article to check._'}

### Per-part funnel (articles that declare \`parts\`)

${partsArticles.length ? perPartSections : '_No published article declares `parts`._\n'}

### Skill hand-off funnel (articles that declare \`skill\`)

${table(['Article', 'Reached hand-off', 'Clicked GitHub', 'GitHub downloads'], handoffRows)}

${mismatchNotes.length ? mismatchNotes.join('\n') : '_No download/click figures to compare this window._'}

## Homepage CTAs

### Contact funnel

${table(
  ['Arrived', 'Reached contact', 'Opened WhatsApp'],
  [[String(contactArrived), String(num(contactFunnel.rows[0]?.reached_contact ?? 0)), String(num(contactFunnel.rows[0]?.opened_whatsapp ?? 0))]],
)}

### Clicks by label

${table(['Label', 'Section', 'Clicks', 'Sessions'], clicksByLabel.rows.map((r) => [String(r.label), String(r.section), String(num(r.clicks)), String(num(r.sessions))]))}

## What looks broken

${brokenSection}

## Comparison with the previous report

${comparison}

## Search Console (hand-paste)

Not fetched by this script (see CLAUDE.md's "AI crawler access" + this
skill's Design section — Search Console has no automation in this project).
Read it by hand in the browser under \`sc-domain:handinhandai.com\`
(\`alexg@handinhandai.com\`), per the \`site-findability\` skill, and paste
the per-article rows here with the date read:

- Date read: _(fill in)_
- Per-article impressions / clicks / avg position: _(fill in, joined by
  article path to the "What they read" section above)_

## Queries run

${queriesTable}
`;

  writeFileSync(reportPath, markdown, 'utf8');
  console.log(`Wrote ${reportPath}`);
  if (args.dryRun) {
    console.log('--dry-run: this script never files a GitHub issue or edits a file under docs/ regardless — that stays a human/skill-level step.');
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.stack ?? error.message : String(error));
  process.exitCode = 1;
});
