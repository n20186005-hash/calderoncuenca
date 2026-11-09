import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { pageRoutes } from './src/i18n';
import { isTopicPath } from './src/data/topic-slugs';
import tailwindcss from '@tailwindcss/vite';

// Canonical site URL. Hardcoded so canonical/OG absolute URLs and the sitemap
// are always produced; can still be overridden via SITE_URL at build time.
const site = (process.env.SITE_URL?.trim() || 'https://calderoncuenca.com').replace(/\/$/, '') + '/';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !new URL(page).pathname.includes('/404'),
      serialize: (page) => {
        const pathname = new URL(page.url).pathname;
        // Existing pages have a full Spanish/English pair.
        const pair = Object.values(pageRoutes).find((p) => Object.values(p).includes(pathname));
        if (pair) {
          return {
            ...page,
            links: [
              { lang: 'es-EC', url: new URL(pair.es, site).toString() },
              { lang: 'en', url: new URL(pair.en, site).toString() },
              { lang: 'x-default', url: new URL(pair.es, site).toString() }
            ]
          };
        }
        // The 36 Spanish-only guide pages declare es-EC plus x-default; they have no English counterpart.
        if (isTopicPath(pathname)) {
          return {
            ...page,
            links: [
              { lang: 'es-EC', url: page.url },
              { lang: 'x-default', url: page.url }
            ]
          };
        }
        return page;
      }
    })
  ],
  vite: { plugins: [tailwindcss()] }
});
