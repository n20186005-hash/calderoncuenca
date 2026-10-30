import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import {pageRoutes} from './src/i18n';
import tailwindcss from '@tailwindcss/vite';

// Canonical site URL. Hardcoded so canonical/OG absolute URLs and the sitemap
// are always produced; can still be overridden via SITE_URL at build time.
const site = (process.env.SITE_URL?.trim() || 'https://calderoncuenca.com').replace(/\/$/, '') + '/';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap({filter:page=>!new URL(page).pathname.includes('/404'),serialize:page=>{const pair=Object.values(pageRoutes).find(p=>Object.values(p).includes(new URL(page.url).pathname));return pair?{...page,links:[{lang:'es',url:new URL(pair.es,site).toString()},{lang:'en',url:new URL(pair.en,site).toString()},{lang:'x-default',url:new URL(pair.es,site).toString()}]}:page;}})],
  vite: { plugins: [tailwindcss()] }
});
