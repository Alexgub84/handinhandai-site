// @ts-check
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'astro/config';
import matter from 'gray-matter';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import { rehypeArticleDevices, rehypeArticleParts } from './src/lib/rehype-article-devices.mjs';
import { isArticlesIndexNoindexed } from './src/lib/articles-index-noindex.mjs';

// A draft article's slug stays out of the sitemap in every build (#101) —
// even a build that includes drafts (a Cloudflare preview deploy, a local
// build, `astro dev`) only ever renders it as a noindexed page, never a
// search-engine-facing URL. `getStaticPaths` already keeps the production
// branch from building the page at all; this filter is what keeps the
// preview case out of the sitemap, since the sitemap integration only sees
// the pages a build actually produced.
const __dirname = dirname(fileURLToPath(import.meta.url));
const articlesDir = join(__dirname, 'src', 'content', 'articles');

// astro.config.mjs runs before the content-collections runtime exists, so
// it can't call getCollection() like src/pages/articles/index.astro does —
// it reads the same frontmatter straight off disk instead. One read feeds
// both the per-article draft-slug exclusion (#101) and, via
// isArticlesIndexNoindexed, the /articles index exclusion (#160): that
// shared function is the single place the "noindex" condition lives, so
// this file and the page can't drift apart on what it means.
/** @returns {{ slug: string | undefined, draft: boolean }[]} */
function articleFrontmatters() {
  /** @type {string[]} */
  let files = [];
  try {
    files = /** @type {string[]} */ (readdirSync(articlesDir, { recursive: true })).filter(
      (entry) => entry.endsWith('.md')
    );
  } catch {
    return [];
  }
  return files.map((file) => {
    const data = matter(readFileSync(join(articlesDir, file), 'utf8')).data;
    return {
      slug: typeof data.slug === 'string' ? data.slug : undefined,
      draft: data.draft === true,
    };
  });
}

const articleFrontmatter = articleFrontmatters();

const draftSlugs = new Set(
  articleFrontmatter.filter((a) => a.draft && a.slug).map((a) => /** @type {string} */ (a.slug))
);

/** @param {string} page */
function isDraftArticlePage(page) {
  const pathname = new URL(page).pathname.replace(/\/$/, '');
  const match = pathname.match(/^\/articles\/(.+)$/);
  return match ? draftSlugs.has(match[1]) : false;
}

// Mirrors src/pages/articles/index.astro's own noindex decision (#160):
// that page sets <meta name="robots" content="noindex"> when the articles
// collection has no published entry, and the sitemap must agree or Google
// gets a page that invites a crawl it then refuses.
const articlesIndexNoindexed = isArticlesIndexNoindexed(articleFrontmatter.map((a) => a.draft));

/** @param {string} page */
function isArticlesIndexPage(page) {
  return new URL(page).pathname.replace(/\/$/, '') === '/articles';
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
  // src/lib/rehype-article-devices.mjs (issue #111). rehypeArticleParts runs
  // SECOND (issue #174): it wraps each declared `parts[]` entry in
  // `<section data-track-section>`, after the table device has already
  // rewritten a GFM table into its scroll/card pair, so a part's section
  // wraps that finished markup rather than the raw table.
  markdown: {
    rehypePlugins: [rehypeArticleDevices, rehypeArticleParts],
  },

  integrations: [
    react(),
    // /app-publishing is excluded: unapproved for public discovery (old,
    // unconfirmed prices; rejected framing). Temporary — see
    // .claude/work-orders/82-hold-page.md; lifted by
    // .claude/work-orders/82-article.md.
    // Draft article pages are excluded too (#101) — see isDraftArticlePage
    // above. The /articles index itself is excluded while it has nothing
    // published (#160) — see articlesIndexNoindexed above.
    sitemap({
      filter: (page) =>
        !page.includes('/app-publishing') &&
        !isDraftArticlePage(page) &&
        !(articlesIndexNoindexed && isArticlesIndexPage(page)),
    }),
  ],
});
