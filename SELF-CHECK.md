# Entrega / autocomprobación

- [x] Astro + Tailwind CSS + TypeScript definidos con versiones exactas.
- [x] `packageManager` fijado en `pnpm@10.26.0`.
- [x] Node fijado en `24.21.0` mediante `engines` y `.node-version`.
- [x] Sin `pnpm-workspace.yaml` (proyecto de un solo paquete).
- [x] `site` se deriva de una sola configuración (`SITE_URL`) y puede quedar vacío.
- [x] Sitemap solo se activa cuando `site` existe.
- [x] GA4 `G-HXM22WWPKP` incluido.
- [x] Escaneo de fuentes sin `example.com`, `localhost` ni `chrome-extension://`.
- [x] Logo y favicon coherentes; favicon SVG + 16/32/180 PNG.
- [x] JSON-LD TouristAttraction + FAQPage.
- [x] Google Maps con `hl=es&gl=ec`.
- [!] El entorno de ejecución no pudo resolver `registry.npmjs.org`, por lo que `pnpm install --frozen-lockfile`, `pnpm check` y `pnpm build` no pudieron ejecutarse aquí.
- [!] La misma restricción de DNS impidió descargar la foto de Wikimedia al ZIP. El sitio usa temporalmente la URL directa de Wikimedia; `IMAGE-SOURCES.md` contiene la fuente y licencia para guardarla localmente.
