import { TOPICS, getTopic, relatedTopics, groupedTopics } from '../src/data/topics';
import { placeLd, webPageLd, articleLd } from '../src/lib/schema';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';

export function run() {
  const failures: string[] = [];
  const ok = (c: boolean, m: string) => { if (!c) failures.push(m); };
  const site = 'https://calderoncuenca.com/';

  ok(TOPICS.length === 36, `expected 36 topics, got ${TOPICS.length}`);
  const slugs = TOPICS.map((t) => t.slug);
  ok(new Set(slugs).size === 36, 'duplicate slugs detected');

  for (const t of TOPICS) {
    ok(t.sections.length >= 4, `${t.slug}: fewer than 4 sections`);
    ok(t.faqs.length >= 3, `${t.slug}: fewer than 3 FAQs`);
    ok(t.related.length >= 3, `${t.slug}: fewer than 3 related links`);
    for (const r of t.related) ok(!!getTopic(r), `${t.slug}: broken related link -> ${r}`);
    ok(relatedTopics(t).length >= 3, `${t.slug}: resolved related links < 3`);
    const attractionSlugs = [
      'cerca/catedral-nueva', 'cerca/catedral-vieja', 'cerca/plaza-de-las-flores',
      'cerca/seminario-san-luis', 'cerca/museo-de-las-conceptas', 'cerca/plaza-san-francisco'
    ];
    if (attractionSlugs.includes(t.slug)) ok(!!t.placeName && !!t.placeDesc, `${t.slug}: missing placeName/placeDesc`);
    if (['historia', 'monumento-abdon-calderon', 'glorieta-parque-calderon'].includes(t.slug)) {
      ok(!!t.heroImage?.src && !!t.heroImage?.caption, `${t.slug}: missing heroImage`);
    }
  }

  ok(groupedTopics().length === 6, 'expected 6 groups');

  const w = webPageLd(site);
  ok(w['@type'] === 'WebPage' && !!w.mainEntity, 'webPageLd shape');
  const p = placeLd(site, { name: 'X', description: 'Y', path: '/cerca/catedral-nueva/' });
  ok(p['@type'] === 'Place' && (p.url as string).endsWith('/cerca/catedral-nueva/'), 'placeLd shape');
  const a = articleLd(site, { title: 't', description: 'd', path: '/historia/', dateModified: '2026-11-09', mentions: ['A'] });
  ok(a['@type'] === 'Article' && !!a.mentions, 'articleLd mentions');

  const cjk = /[一-鿿]/;
  for (const f of ['practico', 'transporte', 'historia', 'cerca', 'comer', 'rutas']) {
    const src = readFileSync(resolve(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'topics', `${f}.ts`), 'utf8');
    ok(!cjk.test(src), `CJK characters in ${f}.ts`);
  }

  return { failures };
}
