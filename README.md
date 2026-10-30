# Parque Calderón — Cuenca

Guía estática en español e inglés, con páginas de inicio, horarios y transporte, construido con Astro + Tailwind CSS + TypeScript, preparado para desplegarse como assets estáticos en Cloudflare Workers.

## Dominio
La URL canónica predeterminada es `https://calderoncuenca.com/`; `SITE_URL` puede sobrescribirla. Astro genera canonical y sitemap con pares de idiomas, incluidos los slugs traducidos. El documento de error no se incluye en el sitemap.

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

## Imágenes y hechos
La portada es una ilustración simbólica local, no fotografía ni prueba del pavimento renovado. El PNG social se exporta del mismo SVG con la dependencia Sharp ya instalada. Consulta `IMAGE-SOURCES.md` y los créditos visibles. La foto remota anterior ya no se solicita.

El aviso municipal del 29 de octubre de 2026 confirma la reapertura del 28 de octubre, no un horario permanente. Maps se presenta como consulta manual fechada; cada catedral, museo o terraza tiene condiciones independientes. No se publican recomendaciones de negocios concretos ni disponibilidad de estacionamiento sin verificar.

## Privacidad y errores
Las fuentes y el aviso de privacidad están en el pie de cada página. La biblioteca GA4 y su configuración existente se solicitan automáticamente; los mapas contactan con Google. La medición del alojamiento y la posibilidad de un beacon se explican por separado, con límites de la CSP y sin inventar un interruptor.

La configuración de assets estáticos se conserva. Las rutas inexistentes devuelven 404 con documento bilingüe noindex; la entrada directa al documento `/404.html` se normaliza a `/404` y sirve 200/noindex. Esa diferencia no cambia la respuesta 404 de una ruta desconocida. Los redirects de host/HTTPS requieren verificación en el alojamiento, no se afirman a partir de la etiqueta canonical.
