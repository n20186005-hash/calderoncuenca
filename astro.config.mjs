import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Canonical site URL. Hardcoded so canonical/OG absolute URLs and the sitemap
// are always produced; can still be overridden via SITE_URL at build time.
const site = (process.env.SITE_URL?.trim() || 'https://calderoncuenca.com').replace(/\/$/, '') + '/';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] }
});
