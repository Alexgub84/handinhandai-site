/**
 * /stats — the visitor dashboard, rendered at the edge.
 *
 * Locked by default. It serves a page only when one of these is configured:
 * - `ACCESS_AUD` is set, and Cloudflare Access put a JWT on the request, or
 * - `STATS_TOKEN` is set, and the request carries it as `?k=`.
 *
 * With neither configured it answers 404, so a deploy that forgot the secrets
 * never exposes the data. There is no JSON endpoint: the HTML is the only way
 * the numbers leave the edge.
 */

interface Env {
  ANALYTICS_DB?: D1Database;
  ACCESS_AUD?: string;
  STATS_TOKEN?: string;
}

interface Row {
  [key: string]: string | number | null;
}

const DAY_OPTIONS = [7, 30, 90, 180] as const;

const notFound = (): Response =>
  new Response('Not found', { status: 404, headers: { 'Cache-Control': 'no-store' } });

const escape = (value: unknown): string =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** Constant-time-ish comparison so a wrong token cannot be guessed by timing. */
const sameToken = (a: string, b: string): boolean => {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
};

const authorised = (request: Request, env: Env): boolean => {
  if (env.ACCESS_AUD && request.headers.get('cf-access-jwt-assertion')) return true;
  const token = env.STATS_TOKEN;
  if (!token) return false;
  const given = new URL(request.url).searchParams.get('k') ?? '';
  return given.length > 0 && sameToken(given, token);
};

const rowsOf = async (db: D1Database, sql: string, ...binds: unknown[]): Promise<Row[]> => {
  const result = await db
    .prepare(sql)
    .bind(...binds)
    .all<Row>();
  return result.results ?? [];
};

const num = (value: string | number | null): number =>
  typeof value === 'number' ? value : Number(value ?? 0);

/** A horizontal bar table: label, bar, value. */
const barTable = (title: string, rows: Row[], labelKey: string, valueKey: string, empty: string): string => {
  if (!rows.length) return `<section><h2>${escape(title)}</h2><p class="empty">${escape(empty)}</p></section>`;
  const max = Math.max(...rows.map((row) => num(row[valueKey])), 1);
  const body = rows
    .map((row) => {
      const value = num(row[valueKey]);
      const label = String(row[labelKey] ?? '(none)') || '(none)';
      return `<tr>
        <td class="label" title="${escape(label)}">${escape(label)}</td>
        <td class="bar"><span style="width:${((value / max) * 100).toFixed(1)}%"></span></td>
        <td class="num">${value.toLocaleString('en-US')}</td>
      </tr>`;
    })
    .join('');
  return `<section><h2>${escape(title)}</h2><div class="scroll"><table>${body}</table></div></section>`;
};

const sparkline = (rows: Row[]): string => {
  if (!rows.length) return '<p class="empty">No visits recorded yet.</p>';
  const max = Math.max(...rows.map((row) => num(row.visitors)), 1);
  const bars = rows
    .map((row) => {
      const height = Math.max(2, (num(row.visitors) / max) * 100);
      return `<span class="day" style="height:${height.toFixed(1)}%" title="${escape(row.day)}: ${num(
        row.visitors,
      )} visitors, ${num(row.views)} views"></span>`;
    })
    .join('');
  return `<div class="spark">${bars}</div>
    <p class="axis"><span>${escape(rows[0]?.day)}</span><span>${escape(rows[rows.length - 1]?.day)}</span></p>`;
};

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  if (!authorised(request, env)) return notFound();

  const db = env.ANALYTICS_DB;
  if (!db) {
    return new Response('Analytics database is not bound to this deployment.', {
      status: 503,
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
    });
  }

  const url = new URL(request.url);
  const requested = Number(url.searchParams.get('days'));
  const days = DAY_OPTIONS.includes(requested as (typeof DAY_OPTIONS)[number]) ? requested : 30;
  const since = `-${days} days`;

  try {
    const [daily, totals, sources, campaigns, entries, devices, countries, depth, reach, clicks, funnel] =
      await Promise.all([
        rowsOf(
          db,
          `SELECT day, COUNT(DISTINCT visitor) AS visitors, COUNT(DISTINCT session) AS sessions,
                  SUM(CASE WHEN type = 'view' THEN 1 ELSE 0 END) AS views
             FROM events WHERE day >= date('now', ?1) GROUP BY day ORDER BY day`,
          since,
        ),
        rowsOf(
          db,
          `SELECT COUNT(DISTINCT visitor) AS visitors, COUNT(DISTINCT session) AS sessions,
                  SUM(CASE WHEN type = 'view' THEN 1 ELSE 0 END) AS views,
                  (SELECT ROUND(AVG(best) / 1000.0) FROM (
                     SELECT MAX(value) AS best FROM events
                      WHERE type = 'end' AND day >= date('now', ?1) GROUP BY session)) AS avg_seconds,
                  (SELECT ROUND(AVG(best)) FROM (
                     SELECT MAX(value) AS best FROM events
                      WHERE type = 'depth' AND day >= date('now', ?1) GROUP BY session)) AS avg_depth
             FROM events WHERE day >= date('now', ?1)`,
          since,
        ),
        rowsOf(
          db,
          `SELECT COALESCE(NULLIF(utm_source, ''), NULLIF(ref_host, ''), 'direct') AS source,
                  COUNT(DISTINCT session) AS sessions
             FROM events WHERE type = 'view' AND day >= date('now', ?1)
            GROUP BY source ORDER BY sessions DESC LIMIT 15`,
          since,
        ),
        rowsOf(
          db,
          `SELECT utm_campaign AS campaign, COUNT(DISTINCT session) AS sessions
             FROM events WHERE type = 'view' AND utm_campaign IS NOT NULL AND day >= date('now', ?1)
            GROUP BY campaign ORDER BY sessions DESC LIMIT 10`,
          since,
        ),
        rowsOf(
          db,
          `SELECT path, COUNT(DISTINCT session) AS sessions
             FROM events WHERE type = 'view' AND day >= date('now', ?1)
            GROUP BY path ORDER BY sessions DESC LIMIT 10`,
          since,
        ),
        rowsOf(
          db,
          `SELECT COALESCE(device, 'unknown') AS device, COUNT(DISTINCT session) AS sessions
             FROM events WHERE type = 'view' AND day >= date('now', ?1)
            GROUP BY device ORDER BY sessions DESC`,
          since,
        ),
        rowsOf(
          db,
          `SELECT COALESCE(country, '??') AS country, COUNT(DISTINCT session) AS sessions
             FROM events WHERE type = 'view' AND day >= date('now', ?1)
            GROUP BY country ORDER BY sessions DESC LIMIT 10`,
          since,
        ),
        rowsOf(
          db,
          `SELECT bucket, COUNT(*) AS sessions FROM (
             SELECT CASE
                      WHEN MAX(value) >= 90 THEN '90-100%'
                      WHEN MAX(value) >= 75 THEN '75-89%'
                      WHEN MAX(value) >= 50 THEN '50-74%'
                      WHEN MAX(value) >= 25 THEN '25-49%'
                      ELSE '0-24%'
                    END AS bucket
               FROM events WHERE type = 'depth' AND day >= date('now', ?1) GROUP BY session)
            GROUP BY bucket ORDER BY bucket DESC`,
          since,
        ),
        rowsOf(
          db,
          `SELECT section, COUNT(DISTINCT session) AS sessions,
                  ROUND(AVG(NULLIF(value, 0)) / 1000.0, 1) AS avg_seconds
             FROM events WHERE type = 'section' AND section IS NOT NULL AND day >= date('now', ?1)
            GROUP BY section ORDER BY sessions DESC LIMIT 20`,
          since,
        ),
        rowsOf(
          db,
          `SELECT label, COALESCE(section, '-') AS section, COUNT(*) AS clicks,
                  COUNT(DISTINCT session) AS sessions
             FROM events WHERE type = 'click' AND day >= date('now', ?1)
            GROUP BY label, section ORDER BY clicks DESC LIMIT 20`,
          since,
        ),
        rowsOf(
          db,
          `SELECT
             COUNT(DISTINCT session) AS arrived,
             COUNT(DISTINCT CASE WHEN session IN (
               SELECT session FROM events WHERE type = 'section' AND section LIKE '%contact%'
                AND day >= date('now', ?1)) THEN session END) AS reached_contact,
             COUNT(DISTINCT CASE WHEN session IN (
               SELECT session FROM events WHERE type = 'click' AND href LIKE '%wa.me%'
                AND day >= date('now', ?1)) THEN session END) AS opened_whatsapp
             FROM events WHERE type = 'view' AND day >= date('now', ?1)`,
          since,
        ),
      ]);

    const total = totals[0] ?? {};
    const steps = funnel[0] ?? {};
    const arrived = num(steps.arrived);
    const share = (value: number): string =>
      arrived ? `${Math.round((value / arrived) * 100)}%` : '-';

    const tabs = DAY_OPTIONS.map(
      (option) =>
        `<a class="${option === days ? 'on' : ''}" href="?days=${option}${
          url.searchParams.get('k') ? `&k=${encodeURIComponent(url.searchParams.get('k') ?? '')}` : ''
        }">${option}d</a>`,
    ).join('');

    const html = `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Visitors — handinhandai.com</title>
<style>
  :root { color-scheme: light dark;
    --bg:#f2f4f6; --panel:#fff; --ink:#1b2431; --soft:#5c6878; --rule:#dbe1e8; --accent:#6f8f1f; }
  @media (prefers-color-scheme: dark) {
    :root { --bg:#11161e; --panel:#1a222e; --ink:#e6ecf3; --soft:#97a4b4; --rule:#2c3745; --accent:#b4d04f; }
  }
  * { box-sizing: border-box; }
  body { margin:0; background:var(--bg); color:var(--ink); font:15px/1.5 ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif; }
  .wrap { max-width: 68rem; margin:0 auto; padding: 2rem 1rem 4rem; display:flex; flex-direction:column; gap:1.5rem; }
  header { display:flex; flex-wrap:wrap; gap:1rem; align-items:baseline; justify-content:space-between; }
  h1 { font-size:1.4rem; margin:0; letter-spacing:-0.01em; }
  h2 { font-size:0.78rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--soft); margin:0 0 0.6rem; }
  nav { display:flex; gap:0.35rem; }
  nav a { padding:0.25rem 0.7rem; border:1px solid var(--rule); border-radius:999px; text-decoration:none; color:var(--soft); font-size:0.85rem; }
  nav a.on { background:var(--accent); border-color:var(--accent); color:#0d1117; font-weight:600; }
  section { background:var(--panel); border:1px solid var(--rule); border-radius:12px; padding:1rem 1.1rem; }
  .grid { display:grid; gap:1rem; grid-template-columns:repeat(auto-fit, minmax(17rem, 1fr)); }
  .tiles { display:grid; gap:0.75rem; grid-template-columns:repeat(auto-fit, minmax(8rem,1fr)); }
  .tile b { display:block; font-size:1.6rem; font-variant-numeric:tabular-nums; }
  .tile span { color:var(--soft); font-size:0.8rem; }
  table { border-collapse:collapse; width:100%; font-size:0.9rem; }
  td { padding:0.3rem 0.4rem 0.3rem 0; border-bottom:1px solid var(--rule); vertical-align:middle; }
  td.label { max-width:16rem; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
  td.num { text-align:right; font-variant-numeric:tabular-nums; width:5rem; }
  td.bar { width:45%; }
  td.bar span { display:block; height:8px; border-radius:4px; background:var(--accent); min-width:2px; }
  .scroll { overflow-x:auto; }
  .spark { display:flex; align-items:flex-end; gap:2px; height:90px; }
  .spark .day { flex:1; background:var(--accent); border-radius:2px 2px 0 0; min-width:3px; }
  .axis { display:flex; justify-content:space-between; color:var(--soft); font-size:0.75rem; margin:0.4rem 0 0; }
  .empty { color:var(--soft); margin:0; }
  .funnel { display:flex; flex-direction:column; gap:0.5rem; }
  .step { display:grid; grid-template-columns:11rem 1fr 4rem; gap:0.6rem; align-items:center; font-size:0.9rem; }
  .step .bar { height:22px; border-radius:5px; background:var(--accent); }
  footer { color:var(--soft); font-size:0.8rem; }
</style>
</head><body><div class="wrap">
<header>
  <h1>Visitors — handinhandai.com</h1>
  <nav>${tabs}</nav>
</header>

<section>
  <h2>Last ${days} days</h2>
  <div class="tiles">
    <div class="tile"><b>${num(total.visitors).toLocaleString('en-US')}</b><span>visitors</span></div>
    <div class="tile"><b>${num(total.sessions).toLocaleString('en-US')}</b><span>sessions</span></div>
    <div class="tile"><b>${num(total.views).toLocaleString('en-US')}</b><span>pageviews</span></div>
    <div class="tile"><b>${num(total.avg_seconds)}s</b><span>avg engaged</span></div>
    <div class="tile"><b>${num(total.avg_depth)}%</b><span>avg scroll depth</span></div>
  </div>
</section>

<section>
  <h2>Visitors per day</h2>
  ${sparkline(daily)}
</section>

<section>
  <h2>Contact funnel</h2>
  <div class="funnel">
    <div class="step"><span>Arrived</span><div class="bar" style="width:100%"></div><span>${arrived}</span></div>
    <div class="step"><span>Reached contact</span><div class="bar" style="width:${
      arrived ? (num(steps.reached_contact) / arrived) * 100 : 0
    }%"></div><span>${share(num(steps.reached_contact))}</span></div>
    <div class="step"><span>Opened WhatsApp</span><div class="bar" style="width:${
      arrived ? (num(steps.opened_whatsapp) / arrived) * 100 : 0
    }%"></div><span>${share(num(steps.opened_whatsapp))}</span></div>
  </div>
</section>

<div class="grid">
  ${barTable('Traffic sources', sources, 'source', 'sessions', 'No sessions in this window.')}
  ${barTable('Campaigns', campaigns, 'campaign', 'sessions', 'No campaign-tagged links yet.')}
  ${barTable('Landing pages', entries, 'path', 'sessions', 'No sessions in this window.')}
  ${barTable('Devices', devices, 'device', 'sessions', 'No sessions in this window.')}
  ${barTable('Countries', countries, 'country', 'sessions', 'No sessions in this window.')}
  ${barTable('Scroll depth', depth, 'bucket', 'sessions', 'No scroll data yet.')}
</div>

<section>
  <h2>Section reach</h2>
  <div class="scroll"><table>
    <tr><td class="label"><b>Section</b></td><td class="num"><b>Sessions</b></td><td class="num"><b>Avg s</b></td></tr>
    ${
      reach.length
        ? reach
            .map(
              (row) =>
                `<tr><td class="label">${escape(row.section)}</td><td class="num">${num(
                  row.sessions,
                )}</td><td class="num">${num(row.avg_seconds)}</td></tr>`,
            )
            .join('')
        : '<tr><td class="label" colspan="3">No section data yet.</td></tr>'
    }
  </table></div>
</section>

<section>
  <h2>Clicks</h2>
  <div class="scroll"><table>
    <tr><td class="label"><b>Label</b></td><td class="label"><b>Section</b></td><td class="num"><b>Clicks</b></td><td class="num"><b>Sessions</b></td></tr>
    ${
      clicks.length
        ? clicks
            .map(
              (row) =>
                `<tr><td class="label">${escape(row.label)}</td><td class="label">${escape(
                  row.section,
                )}</td><td class="num">${num(row.clicks)}</td><td class="num">${num(row.sessions)}</td></tr>`,
            )
            .join('')
        : '<tr><td class="label" colspan="4">No clicks recorded yet.</td></tr>'
    }
  </table></div>
</section>

<footer>First-party data, collected by this site only. Visitor ids rotate daily; no IP addresses, cookies or form contents are stored. Rows older than 180 days are deleted.</footer>
</div></body></html>`;

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store',
        'X-Robots-Tag': 'noindex, nofollow',
      },
    });
  } catch (error) {
    console.error('[ANALYTICS_DASHBOARD]', error instanceof Error ? error.message : error);
    return new Response('Dashboard query failed. Check that the schema is applied.', {
      status: 500,
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
    });
  }
};
