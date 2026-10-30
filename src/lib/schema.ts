import { localizedPath, type Locale } from '../i18n';
import { MAPS_URL } from '../data/site';

export function attractionLd(site: string | undefined, locale: Locale) {
  const url = site ? new URL(localizedPath('home', locale), site).toString() : localizedPath('home', locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': new URL('/#attraction', site).toString(),
    name: 'Parque Calderón',
    alternateName: ['Parque Abdón Calderón', 'Plaza Abdón Calderón'],
    description: 'Historic square and urban park at the heart of the Cuenca Historic Center, Ecuador.',
    image: [new URL('/images/park-symbol.png', site).toString()],
    url,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cuenca',
      addressRegion: 'Azuay',
      addressCountry: 'EC'
    },
    geo: { '@type': 'GeoCoordinates', latitude: -2.89741, longitude: -79.00447 },
    sameAs: [MAPS_URL]
  };
}

export function faqLd(items: [string, string][]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
  };
}

export function breadcrumbLd(site: string | undefined, crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: site ? new URL(c.path, site).toString() : c.path
    }))
  };
}

export function homeBreadcrumb(site: string | undefined, locale: Locale) {
  return breadcrumbLd(site, [{ name: 'Parque Calderón', path: localizedPath('home', locale) }]);
}
