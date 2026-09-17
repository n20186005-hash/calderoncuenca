# Parque Calderón — Cuenca

Sitio estático de una sola página construido con Astro + Tailwind CSS + TypeScript, preparado para desplegarse como assets estáticos en Cloudflare Workers.

## Dominio
La URL del sitio se configura **solo** mediante la variable de entorno `SITE_URL`, que Astro usa como `site`. Si no existe, el proyecto compila sin dominio, omite canonical/og:url absolutos y no activa sitemap.

```bash
SITE_URL=https://tudominio.ec pnpm build
```

## Comandos

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Cloudflare Workers
`wrangler.jsonc` sirve `./dist` como assets estáticos. Tras compilar, despliega con Wrangler desde Cloudflare o CI.

## Fotografías
El hero utiliza una fotografía real de Parque Calderón alojada en Wikimedia Commons (Johannes Wagenknecht, CC BY-SA 4.0). Se dejó externa únicamente porque el entorno de generación no pudo resolver `upload.wikimedia.org`; para una entrega 100% local, descarga la variante 1280px indicada en `IMAGE-SOURCES.md`, guárdala como `public/images/parque-calderon-catedral.jpg` y sustituye `heroImage` en `src/pages/index.astro` por esa ruta local.
