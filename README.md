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
pnpm check:guides
```

`check:guides` valida el resultado de `dist/`: las 36 guías, canonical y hreflang por página, datos estructurados (Article + BreadcrumbList + FAQPage), coincidencia entre FAQ visibles y JSON-LD, enlaces internos sin destinos rotos, el clúster de la portada y las 42 URL del sitemap.

## Guías temáticas en español

Se publican 36 guías independientes en español (`es-EC`), organizadas en seis grupos: información práctica, transporte, historia y patrimonio, lugares cercanos, comida y alojamiento, rutas y fotografía. No tienen versión inglesa y por eso solo declaran `hreflang="es-EC"` y `x-default`; las seis páginas bilingües originales mantienen el par `es-EC` / `en` / `x-default`.

- Registro de URL y fuentes: `src/data/topic-slugs.ts`.
- Contenido por grupo: `src/data/topics/*.ts`; `src/data/topics.ts` los reúne y resuelve los enlaces relacionados.
- Render y datos estructurados: `src/components/TopicPage.astro` y `src/lib/schema.ts`.
- Rutas estáticas: `src/pages/[...topic].astro` genera `/<slug>/`, incluidas las de `/cerca/`.
- Enlaces internos: `src/components/TopicLinks.astro` (clúster `#guias` de la portada, y bloques por grupo en `/como-llegar/` y `/horarios/`).

Las guías no publican tarifas, horarios de recintos ni nombres de restaurantes u hoteles sin verificarlos; cada página indica la fecha de revisión, sus fuentes y la distinción entre el espacio público del parque y los recintos con administración propia. El Parque Calderón se describe como parte del Centro Histórico inscrito por UNESCO, nunca como una inscripción individual.

## Cloudflare Workers
`wrangler.jsonc` sirve `./dist` como assets estáticos. Tras compilar, despliega con Wrangler desde Cloudflare o CI.

## Imágenes y hechos
La portada es una ilustración simbólica local, no fotografía ni prueba del pavimento renovado. El PNG social se exporta del mismo SVG con la dependencia Sharp ya instalada. Consulta `IMAGE-SOURCES.md` y los créditos visibles. La foto remota anterior ya no se solicita.

El aviso municipal del 29 de octubre de 2026 confirma la reapertura del 28 de octubre, no un horario permanente. Maps se presenta como consulta manual fechada; cada catedral, museo o terraza tiene condiciones independientes. No se publican recomendaciones de negocios concretos ni disponibilidad de estacionamiento sin verificar.

## Privacidad y errores
Las fuentes y el aviso de privacidad están en el pie de cada página. La biblioteca GA4 y su configuración existente se solicitan automáticamente; los mapas contactan con Google. La medición del alojamiento y la posibilidad de un beacon se explican por separado, con límites de la CSP y sin inventar un interruptor.

La configuración de assets estáticos se conserva. Las rutas inexistentes devuelven 404 con documento bilingüe noindex; la entrada directa al documento `/404.html` se normaliza a `/404` y sirve 200/noindex. Esa diferencia no cambia la respuesta 404 de una ruta desconocida. Los redirects de host/HTTPS requieren verificación en el alojamiento, no se afirman a partir de la etiqueta canonical.
