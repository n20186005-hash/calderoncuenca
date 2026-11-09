/**
 * Post-build QA for the Spanish guide cluster.
 * Run after `astro build`: node scripts/verify-guides.mjs
 */
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');
const failures = [];
const ok = (cond, msg) => { if (!cond) failures.push(msg); };

const slugs = [
  'reapertura-2026', 'entrada-precios', 'cuanto-tiempo-visitar', 'mejor-hora-visitar', 'accesibilidad', 'visitar-con-ninos',
  'desde-aeropuerto-cuenca', 'desde-terminal-terrestre', 'donde-estacionar', 'transporte-publico', 'tranvia-y-caminata', 'calles-y-accesos',
  'historia', 'monumento-abdon-calderon', 'glorieta-parque-calderon', 'edificios-historicos', 'transformaciones-historicas', 'centro-historico-patrimonio',
  'cerca/catedral-nueva', 'cerca/catedral-vieja', 'cerca/plaza-de-las-flores', 'cerca/seminario-san-luis', 'cerca/museo-de-las-conceptas', 'cerca/plaza-san-francisco',
  'cerca/restaurantes', 'cerca/cafeterias', 'cerca/comida-tipica', 'cerca/desayunos', 'cerca/hoteles', 'donde-alojarse-centro-historico',
  'ruta-30-minutos', 'ruta-1-hora', 'ruta-medio-dia', 'ruta-un-dia', 'mejores-fotos', 'visitar-con-lluvia'
];

const cjk = /[\u3400-\u9fff\u3040-\u30ff\uac00-\ud7af]/;
const read = (rel) => readFileSync(join(dist, rel), 'utf8');
const html = (rel) => readFileSync(join(dist, rel, 'index.html'), 'utf8');

ok(slugs.length === 36, `Expected 36 slugs, got ${slugs.length}`);

// 1. Every topic page exists and carries the expected SEO signals.
for (const slug of slugs) {
  const file = join(dist, slug, 'index.html');
  ok(existsSync(file), `Missing generated page: /${slug}/`);
  if (!existsSync(file)) continue;
  const doc = readFileSync(file, 'utf8');
  const canonical = `https://calderoncuenca.com/${slug}/`;
  ok(doc.includes(`<link rel="canonical" href="${canonical}">`), `/${slug}/: wrong canonical (want ${canonical})`);
  ok(doc.includes('<html lang="es-EC">'), `/${slug}/: html lang is not es-EC`);
  ok(doc.includes(`hreflang="es-EC" href="${canonical}"`), `/${slug}/: missing es-EC hreflang`);
  ok(doc.includes(`hreflang="x-default" href="${canonical}"`), `/${slug}/: missing x-default hreflang`);
  ok(!doc.includes('hreflang="en"'), `/${slug}/: unexpectedly points at an English counterpart`);
  ok(!doc.includes('name="robots" content="noindex'), `/${slug}/: should be indexable`);
  ok((doc.match(/<h1[\s>]/g) || []).length === 1, `/${slug}/: expected exactly one H1`);
  ok(/<title>[^<]{20,110}<\/title>/.test(doc), `/${slug}/: missing or odd-length title`);
  ok(/<meta name="description" content="[^"]{60,230}"/.test(doc), `/${slug}/: missing or odd-length description`);
  const ld = [...doc.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  ok(ld.length >= 3, `/${slug}/: expected at least 3 JSON-LD blocks, got ${ld.length}`);
  ok(ld.some((s) => s.includes('"Article"')), `/${slug}/: missing Article JSON-LD`);
  ok(ld.some((s) => s.includes('"BreadcrumbList"')), `/${slug}/: missing BreadcrumbList JSON-LD`);
  ok(ld.some((s) => s.includes('"FAQPage"')), `/${slug}/: missing FAQPage JSON-LD`);
  if (slug.startsWith('cerca/')) ok(ld.some((s) => s.includes('"Place"')), `/${slug}/: missing Place JSON-LD for the landmark`);
  if (['historia', 'monumento-abdon-calderon', 'glorieta-parque-calderon'].includes(slug)) ok(doc.includes('parque-calderon-photo.jpg'), `/${slug}/: missing hero image`);
  ok(!doc.includes('aggregateRating'), `/${slug}/: must not fabricate aggregateRating`);
  const faqBlock = ld.find((s) => s.includes('"FAQPage"'));
  const ldQuestions = faqBlock ? JSON.parse(faqBlock).mainEntity.length : 0;
  const visibleFaq = (doc.match(/<details class="group py-5">/g) || []).length;
  ok(ldQuestions >= 3 && ldQuestions === visibleFaq, `/${slug}/: FAQ mismatch (JSON-LD ${ldQuestions} / visible ${visibleFaq})`);
  const sections = (doc.match(/<section class="mt-12 first:mt-6">/g) || []).length;
  ok(sections >= 4, `/${slug}/: expected at least 4 content sections, got ${sections}`);
  const related = (doc.match(/class="topic-card /g) || []).length;
  ok(related >= 3, `/${slug}/: expected at least 3 related links, got ${related}`);
  ok(doc.includes('Fuentes y verificación'), `/${slug}/: missing sources block`);
  ok(doc.includes('Guía independiente'), `/${slug}/: missing independent-guide disclaimer`);
  ok(!cjk.test(doc), `/${slug}/: non-Spanish characters leaked into the page`);
  const visible = doc.replace(/<script[\s\S]*?<\/script>/g, '');
  ok(!/\b(Read more|Related guides|Back to|Free entry)\b/.test(visible), `/${slug}/: English UI text leaked into the Spanish page`);
}

// 2. All internal links resolve to a real generated page (dead-link check).
const internalTargets = new Set(['/404.html']);
const pages = [];
const walk = (dir, prefix = '') => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      walk(join(dir, entry.name), rel);
    } else if (entry.name === 'index.html') {
      internalTargets.add(prefix ? `/${prefix}/` : '/');
    } else if (entry.name.endsWith('.html')) {
      internalTargets.add(`/${rel}`);
      pages.push({ file: join(dir, entry.name), path: `/${rel}` });
    }
  }
  if (existsSync(join(dir, 'index.html'))) pages.push({ file: join(dir, 'index.html'), path: prefix ? `/${prefix}/` : '/' });
};
walk(dist);

let deadLinks = 0;
for (const page of pages) {
  const doc = readFileSync(page.file, 'utf8');
  for (const m of doc.matchAll(/href="(\/[^"#?]*)"/g)) {
    const href = m[1];
    if (/^\/(images|icons|logo|_)/.test(href)) continue;
    const normalized = href.endsWith('/') ? href : `${href}/`;
    if (!internalTargets.has(normalized) && !internalTargets.has(href)) {
      deadLinks += 1;
      failures.push(`Dead internal link ${href} on ${page.path}`);
    }
  }
}
ok(deadLinks === 0, `${deadLinks} dead internal link(s)`);

// 3. Homepage cluster and hub pages.
const home = html('');
ok(existsSync(join(dist, 'images', 'parque-calderon-photo.jpg')), 'Hero image not copied to dist/images');
ok(home.includes('id="guias"'), 'Homepage: missing #guias topic cluster');
ok(home.includes('"WebPage"'), 'Homepage: missing WebPage JSON-LD');
ok(home.includes('"Place"'), 'Homepage: missing Place JSON-LD');
for (const slug of slugs) ok(home.includes(`href="/${slug}/"`), `Homepage: missing link to /${slug}/`);
ok(home.includes('<title>Parque Calderón Cuenca 2026 | Qué ver, cómo llegar y horarios</title>'), 'Homepage: Spanish title does not match the report');
ok(home.includes('Descubre el Parque Calderón de Cuenca, Ecuador.'), 'Homepage: Spanish description does not match the report');
ok(home.includes('20.714 reseñas'), 'Homepage: rating snapshot not updated to 20,714');

const comoLlegar = html('como-llegar');
for (const slug of slugs.slice(6, 12)) ok(comoLlegar.includes(`href="/${slug}/"`), `/como-llegar/: missing transport link to /${slug}/`);
const horarios = html('horarios');
for (const slug of slugs.slice(0, 6)) ok(horarios.includes(`href="/${slug}/"`), `/horarios/: missing practical link to /${slug}/`);

// 4. English pages: no Spanish cluster, explicit country in titles.
for (const p of ['en', 'en/how-to-get-there', 'en/hours']) {
  const doc = html(p);
  ok(doc.includes('Cuenca, Ecuador'), `/${p}/: missing country disambiguation`);
  ok(!doc.includes('id="guias'), `/${p}/: must not render the Spanish-only cluster`);
  ok(doc.includes('hreflang="es-EC"') && doc.includes('hreflang="en"') && doc.includes('hreflang="x-default"'), `/${p}/: incomplete hreflang set`);
}

// 5. Sitemap: 43 URLs, canonical host, hreflang links, no 404.
const sitemap = read('sitemap-0.xml');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
ok(urls.length === 42, `Sitemap: expected 42 indexable URLs (6 original + 36 guides), got ${urls.length}`);
ok(urls.every((u) => u.startsWith('https://calderoncuenca.com/')), 'Sitemap: non-canonical host or protocol found');
ok(!urls.some((u) => u.includes('404')), 'Sitemap: 404 must be excluded');
for (const slug of slugs) ok(urls.includes(`https://calderoncuenca.com/${slug}/`), `Sitemap: missing /${slug}/`);
const entries = sitemap.split('<url>').slice(1);
const topicEntries = entries.filter((s) => slugs.some((g) => s.includes(`https://calderoncuenca.com/${g}/`)));
ok(topicEntries.length === 36, `Sitemap: expected 36 topic entries, got ${topicEntries.length}`);
ok(topicEntries.every((s) => s.includes('hreflang="es-EC"') && s.includes('hreflang="x-default"') && !s.includes('hreflang="en"')), 'Sitemap: topic entries have wrong alternates');
ok(read('sitemap-index.xml').includes('sitemap-0.xml'), 'sitemap-index.xml must reference sitemap-0.xml');
ok(read('robots.txt').includes('https://calderoncuenca.com/sitemap-index.xml'), 'robots.txt must point at the canonical sitemap');

// 6. Source-level language purity for the Spanish data files.
const dataFiles = ['practico', 'transporte', 'historia', 'cerca', 'comer', 'rutas'].map((n) => join(root, 'src', 'data', 'topics', `${n}.ts`));
for (const file of dataFiles) {
  const src = readFileSync(file, 'utf8');
  ok(!cjk.test(src), `${file}: CJK characters found`);
  const typos = ['Trazer', 'tarifasactuales', '计划'].filter((t) => src.includes(t));
  ok(typos.length === 0, `${file}: suspicious tokens ${typos.join(', ')}`);
}

if (failures.length) {
  console.error(`FAIL: ${failures.length} issue(s)`);
  for (const f of failures.slice(0, 60)) console.error('  - ' + f);
  if (failures.length > 60) console.error(`  ... and ${failures.length - 60} more`);
  process.exit(1);
}
console.log(`PASS: 36 guide pages, ${pages.length} HTML files, ${urls.length} sitemap URLs, 0 dead links, 0 language leaks.`);
