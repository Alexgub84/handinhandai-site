#!/usr/bin/env node

/**
 * Build-time guard for the built pages under /articles (dist/articles/**).
 *
 * Rule #1 from issue #108: every Hebrew page is `lang="he"` and `dir="rtl"`
 * on the `<html>` element. This can only be checked against the *built*
 * HTML (not the source `.astro` files), because the attribute is produced
 * at render time from `src/layouts/Layout.astro`'s `lang`/`dir` props — so
 * this script runs after `astro build`, scanning `dist/`, as a sibling to
 * `scripts/check-articles.mjs` (which runs before the build and only ever
 * sees frontmatter + markdown source).
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');
const articlesDistDir = join(repoRoot, 'dist', 'articles');

function findHtmlFiles(dir) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return [];
  }
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      files.push(...findHtmlFiles(fullPath));
    } else if (entry.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

function main() {
  const files = findHtmlFiles(articlesDistDir);

  if (files.length === 0) {
    console.error(
      `check-rtl: no built HTML found under ${relative(repoRoot, articlesDistDir)} — run "astro build" first.`
    );
    process.exit(1);
  }

  const violations = [];

  for (const filePath of files) {
    const fileLabel = relative(repoRoot, filePath);
    const html = readFileSync(filePath, 'utf8');
    const match = html.match(/<html\b([^>]*)>/i);

    if (!match) {
      violations.push(`${fileLabel}: no <html> element found`);
      continue;
    }

    const attrs = match[1];
    const hasLangHe = /\blang\s*=\s*"he"/i.test(attrs);
    const hasDirRtl = /\bdir\s*=\s*"rtl"/i.test(attrs);

    if (!hasLangHe) {
      violations.push(`${fileLabel}: <html> is missing lang="he"`);
    }
    if (!hasDirRtl) {
      violations.push(`${fileLabel}: <html> is missing dir="rtl"`);
    }
  }

  if (violations.length > 0) {
    console.error('check-rtl: found violations under dist/articles/:\n');
    for (const violation of violations) {
      console.error(`  - ${violation}`);
    }
    console.error(`\n${violations.length} violation(s) found.`);
    process.exit(1);
  }

  console.log(`check-rtl: ${files.length} built article page(s) checked, all lang="he" dir="rtl".`);
}

main();
