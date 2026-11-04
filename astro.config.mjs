// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Canonical production domain. The live site is currently served at
// handinhandai.com. If/when the marketing apex flips to handinhand.ai,
// update here + public/robots.txt + Footer/Layout schema in one change.
export default defineConfig({
  site: 'https://handinhandai.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react(),
    // /app-publishing is excluded: unapproved for public discovery (old,
    // unconfirmed prices; rejected framing). Temporary — see
    // .claude/work-orders/82-hold-page.md; lifted by
    // .claude/work-orders/82-article.md.
    sitemap({
      filter: (page) => !page.includes('/app-publishing'),
    }),
  ],
});
