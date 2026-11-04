#!/usr/bin/env node

/**
 * Build-time guard for src/content/articles/*.md.
 *
 * Runs as a standalone script (wired into `npm run build`, before
 * `astro build`) rather than a zod `superRefine` because it has to scan the
 * rendered markdown body too, and zod only ever sees frontmatter.
 *
 * For every article where `draft` is not `true`, fails if:
 *   - `lastVerified` is missing
 *   - `relatedArticles` has fewer than 2 entries
 *   - `primaryQuery` is missing (issue #108, rule 2 — the keyword brief)
 *   - `secondaryQueries` has fewer than 2 entries (issue #108, rule 2)
 *   - the title, description or body contains a forbidden token (see below)
 *
 * Sibling-link guard (issue #120): `ArticleLayout.astro` renders a sibling
 * card for every `relatedArticles` slug that resolves to a real collection
 * entry and silently drops the rest, so a dangling slug used to ship
 * invisibly. Every article's `relatedArticles` is checked against the set
 * of real `slug` values (the fixture article, `fixture-markdown-devices-test`,
 * never counts as a resolution target, published or not). On a non-draft
 * article a dangling slug fails the build, naming the article and the slug.
 * On a draft article it only warns — the writer sees the gap the day the
 * article is written, not the day it's published — and the build passes.
 *
 * Forbidden-names check: see src/content/forbidden-tokens.json for the full
 * design rationale (committed, no plaintext name, 5-hex truncated sha256
 * prefixes only). The title/description/body are lowercased and split into
 * tokens; a hyphen is kept as part of a token (not a split character) so
 * that a hyphenated product/domain label — or this guard's own test fixture,
 * `banana-test-string` — hashes as one unit, matching how the forbidden list
 * is built.
 */

import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');
const articlesDir = join(repoRoot, 'src', 'content', 'articles');
const forbiddenTokensPath = join(repoRoot, 'src', 'content', 'forbidden-tokens.json');

/** Split on anything that is not a Hebrew letter, Latin letter, digit, or hyphen. */
const TOKEN_SPLIT = /[^a-z0-9֐-׿-]+/;

function findMarkdownFiles(dir) {
  return readdirSync(dir, { recursive: true })
    .filter((entry) => entry.endsWith('.md'))
    .map((entry) => join(dir, entry));
}

function sha256Prefix5(word) {
  return createHash('sha256').update(word).digest('hex').slice(0, 5);
}

function tokenize(text) {
  return text
    .toLowerCase()
    .split(TOKEN_SPLIT)
    .filter((token) => token.length > 0);
}

function loadForbiddenTokens() {
  const raw = JSON.parse(readFileSync(forbiddenTokensPath, 'utf8'));
  if (!Array.isArray(raw.tokens)) {
    throw new Error(`${forbiddenTokensPath} is missing a "tokens" array`);
  }
  return new Set(raw.tokens);
}

const FIXTURE_SLUG = 'fixture-markdown-devices-test';

function main() {
  const forbiddenTokens = loadForbiddenTokens();
  const files = findMarkdownFiles(articlesDir);
  const violations = [];
  const warnings = [];

  const parsed = files.map((filePath) => {
    const fileLabel = relative(repoRoot, filePath);
    const raw = readFileSync(filePath, 'utf8');
    const { data, content } = matter(raw);
    return { fileLabel, data, content };
  });

  // Real resolution targets for relatedArticles (issue #120): every article's
  // own `slug`, minus the test fixture, which never counts even though it
  // exists as a collection entry.
  const resolvableSlugs = new Set(
    parsed.filter(({ data }) => data.slug !== FIXTURE_SLUG).map(({ data }) => data.slug)
  );

  for (const { fileLabel, data, content } of parsed) {
    const relatedArticles = Array.isArray(data.relatedArticles) ? data.relatedArticles : [];
    for (const relatedSlug of relatedArticles) {
      if (resolvableSlugs.has(relatedSlug)) {
        continue;
      }
      const message = `${fileLabel}: "relatedArticles" points at "${relatedSlug}", which does not resolve to an existing article`;
      if (data.draft === true) {
        warnings.push(message);
      } else {
        violations.push(message);
      }
    }

    if (data.draft === true) {
      continue;
    }

    if (!data.lastVerified) {
      violations.push(`${fileLabel}: missing "lastVerified" (required on any non-draft article)`);
    }

    const relatedCount = Array.isArray(data.relatedArticles) ? data.relatedArticles.length : 0;
    if (relatedCount < 2) {
      violations.push(
        `${fileLabel}: "relatedArticles" has ${relatedCount} entr${relatedCount === 1 ? 'y' : 'ies'}, needs exactly 2 on a published article`
      );
    }

    if (!data.primaryQuery) {
      violations.push(
        `${fileLabel}: missing "primaryQuery" (required on any non-draft article — the keyword brief, issue #108)`
      );
    }

    const secondaryCount = Array.isArray(data.secondaryQueries) ? data.secondaryQueries.length : 0;
    if (secondaryCount < 2) {
      violations.push(
        `${fileLabel}: "secondaryQueries" has ${secondaryCount} entr${secondaryCount === 1 ? 'y' : 'ies'}, needs at least 2 on a published article`
      );
    }

    const haystack = [data.title ?? '', data.description ?? '', content].join(' ');
    const seen = new Set();
    for (const token of tokenize(haystack)) {
      if (seen.has(token)) continue;
      seen.add(token);
      const prefix = sha256Prefix5(token);
      if (forbiddenTokens.has(prefix)) {
        violations.push(
          `${fileLabel}: token "${token}" hashes to a forbidden entry (${prefix}) — reword this term or check it against the approved list`
        );
      }
    }
  }

  if (warnings.length > 0) {
    console.warn('check-articles: warnings (draft articles, build still passes):\n');
    for (const warning of warnings) {
      console.warn(`  - ${warning}`);
    }
    console.warn('');
  }

  if (violations.length > 0) {
    console.error('check-articles: found violations in src/content/articles/:\n');
    for (const violation of violations) {
      console.error(`  - ${violation}`);
    }
    console.error(`\n${violations.length} violation(s) found.`);
    process.exit(1);
  }

  console.log(`check-articles: ${files.length} article(s) checked, no violations.`);
}

main();
