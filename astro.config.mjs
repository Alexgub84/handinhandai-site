// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Canonical production domain. The live site is currently served at
// handinhandai.com but the marketing/SEO target is handinhand.ai —
// using the .ai apex per issue #16 spec. Update here if/when the apex
// changes (also update public/robots.txt + Layout JSON-LD).
export default defineConfig({
  site: 'https://handinhand.ai',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'he',
        locales: {
          he: 'he-IL',
          en: 'en-US',
        },
      },
    }),
  ],
});
