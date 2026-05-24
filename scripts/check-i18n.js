#!/usr/bin/env node
/**
 * Build-time i18n parity check.
 *
 * - Walks src/ for .astro / .ts / .tsx files
 * - Extracts every t('...') / t("...") call
 * - Parses src/i18n/ui.ts for the `he:` and `en:` blocks and collects the
 *   flat string keys present in each
 * - Reports:
 *     (a) keys referenced from code that are missing in he or en
 *     (b) keys present in one language but not the other (parity gap)
 *
 * Exit 1 on any issue, 0 otherwise.
 *
 * Pure Node, no dependencies — runs from `npm run check:i18n`.
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const SRC = join(ROOT, "src");
const UI_FILE = join(SRC, "i18n", "ui.ts");

const CODE_EXTS = new Set([".astro", ".ts", ".tsx"]);

/** Recursively collect source files we should scan. */
function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      if (entry === "node_modules" || entry.startsWith(".")) continue;
      walk(full, out);
    } else {
      const ext = entry.slice(entry.lastIndexOf("."));
      if (CODE_EXTS.has(ext)) out.push(full);
    }
  }
  return out;
}

/**
 * Extract t('key') / t("key") references from a file's source.
 * We deliberately keep this regex narrow — only literal string args.
 * Template literals or computed keys can't be statically validated, so we skip them.
 */
function extractKeys(source) {
  const keys = new Set();
  const re = /\bt\(\s*(['"])([^'"\n]+?)\1\s*[,)]/g;
  let m;
  while ((m = re.exec(source)) !== null) {
    keys.add(m[2]);
  }
  return keys;
}

/**
 * Parse src/i18n/ui.ts and return { he: Set<string>, en: Set<string> }.
 *
 * Strategy: locate `he: {` and `en: {` inside `ui = {` and slice each block
 * by tracking brace depth. Then regex-extract top-level string keys from
 * each block. ui.ts uses flat string keys exclusively, so this is reliable.
 */
function parseUi(source) {
  const uiIdx = source.indexOf("export const ui");
  if (uiIdx === -1) throw new Error("Could not find `export const ui` in ui.ts");

  function sliceBlock(label) {
    const labelRe = new RegExp(`\\b${label}\\s*:\\s*\\{`, "g");
    labelRe.lastIndex = uiIdx;
    const match = labelRe.exec(source);
    if (!match) throw new Error(`Could not find \`${label}:\` block in ui.ts`);
    let depth = 1;
    let i = match.index + match[0].length;
    while (i < source.length && depth > 0) {
      const ch = source[i];
      // skip string literals so braces inside translated text don't confuse us
      if (ch === '"' || ch === "'" || ch === "`") {
        const quote = ch;
        i++;
        while (i < source.length) {
          if (source[i] === "\\") { i += 2; continue; }
          if (source[i] === quote) { i++; break; }
          i++;
        }
        continue;
      }
      if (ch === "{") depth++;
      else if (ch === "}") {
        depth--;
        if (depth === 0) break;
      }
      i++;
    }
    return source.slice(match.index + match[0].length, i);
  }

  function keysIn(block) {
    const out = new Set();
    // Match a line that starts (after whitespace) with a double-quoted key followed by `:`
    const keyRe = /^[ \t]*"([^"\\]+)"\s*:/gm;
    let m;
    while ((m = keyRe.exec(block)) !== null) out.add(m[1]);
    return out;
  }

  return { he: keysIn(sliceBlock("he")), en: keysIn(sliceBlock("en")) };
}

// ── Main ──────────────────────────────────────────────────────────────────────

const uiSrc = readFileSync(UI_FILE, "utf8");
const { he, en } = parseUi(uiSrc);

const files = walk(SRC);
const referenced = new Map(); // key -> Set<relative file paths>
for (const f of files) {
  if (f === UI_FILE) continue;
  const src = readFileSync(f, "utf8");
  const keys = extractKeys(src);
  for (const k of keys) {
    if (!referenced.has(k)) referenced.set(k, new Set());
    referenced.get(k).add(relative(ROOT, f));
  }
}

const missing = []; // { key, lang, files }
for (const [key, fileSet] of referenced) {
  if (!he.has(key)) missing.push({ key, lang: "he", files: [...fileSet] });
  if (!en.has(key)) missing.push({ key, lang: "en", files: [...fileSet] });
}

// Parity: keys present in one language but not the other.
const onlyInHe = [...he].filter((k) => !en.has(k));
const onlyInEn = [...en].filter((k) => !he.has(k));

let hasError = false;

if (missing.length) {
  hasError = true;
  console.error("\n✖ i18n: referenced keys missing from ui.ts\n");
  for (const { key, lang, files } of missing) {
    console.error(`  [${lang}] ${key}`);
    for (const f of files) console.error(`        ↳ ${f}`);
  }
}

if (onlyInHe.length || onlyInEn.length) {
  hasError = true;
  console.error("\n✖ i18n: parity gap between he and en\n");
  if (onlyInHe.length) {
    console.error("  Missing in en (present in he):");
    for (const k of onlyInHe) console.error(`    - ${k}`);
  }
  if (onlyInEn.length) {
    console.error("  Missing in he (present in en):");
    for (const k of onlyInEn) console.error(`    - ${k}`);
  }
}

if (hasError) {
  console.error("\ni18n check failed.\n");
  process.exit(1);
}

console.log(
  `✓ i18n check: ${referenced.size} referenced keys, ${he.size} he keys, ${en.size} en keys — all in parity.`,
);
