// @ts-check
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'astro/config';
import matter from 'gray-matter';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import { rehypeArticleDevices } from './src/lib/rehype-article-devices.mjs';

// A draft article's slug stays out of the sitemap in every build (#101) —
// even a build that includes drafts (a Cloudflare preview deploy, a local
// build, `astro dev`) only ever renders it as a noindexed page, never a
// search-engine-facing URL. `getStaticPaths` already keeps the production
// branch from building the page at all; this filter is what keeps the
// preview case out of the sitemap, since the sitemap integration only sees
// the pages a build actually produced.
const __dirname = dirname(fileURLToPath(import.meta.url));
const articlesDir = join(__dirname, 'src', 'content', 'articles');

/** @returns {string[]} */
function draftArticleSlugs() {
  /** @type {string[]} */
  let files = [];
  try {
    files = /** @type {string[]} */ (readdirSync(articlesDir, { recursive: true })).filter(
      (entry) => entry.endsWith('.md')
    );
  } catch {
    return [];
  }
  return files
    .map((file) => matter(readFileSync(join(articlesDir, file), 'utf8')).data)
    .filter((data) => data.draft === true && typeof data.slug === 'string')
    .map((data) => /** @type {string} */ (data.slug));
}

const draftSlugs = new Set(draftArticleSlugs());

/** @param {string} page */
function isDraftArticlePage(page) {
  const pathname = new URL(page).pathname.replace(/\/$/, '');
  const match = pathname.match(/^\/articles\/(.+)$/);
  return match ? draftSlugs.has(match[1]) : false;
}

// Canonical production domain. The live site is currently served at
// handinhandai.com. If/when the marketing apex flips to handinhand.ai,
// update here + public/robots.txt + Footer/Layout schema in one change.
export default defineConfig({
  site: 'https://handinhandai.com',

  vite: {
    plugins: [tailwindcss()]
  },

  // Applies the article design's three devices (term chip, aside,
  // table + card fallback) to ordinary Markdown written by an author — see
  // src/lib/rehype-article-devices.mjs (issue #111).
  markdown: {
    rehypePlugins: [rehypeArticleDevices],
  },

  integrations: [
    react(),
    sitemap({
      filter: (page) => !isDraftArticlePage(page),
    }),
  ],
});
