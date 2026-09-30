import { localizedPath, type PageKey, type Locale } from '../i18n';
import { MAPS_URL, ADDRESS } from '../data/site';

export function attractionLd(site: string | undefined, locale: Locale) {
  const url = site ? new URL(localizedPath('home', locale), site).toString() : localizedPath('home', locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: 'Parque Calderón',
    alternateName: ['Parque Abdón Calderón', 'Plaza Abdón Calderón'],
    description: 'Historic square and urban park at the heart of the Cuenca Historic Center, Ecuador.',
    image: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Cuenca%2C_Parque_Calder%C3%B3n.jpg/1280px-Cuenca%2C_Parque_Calder%C3%B3n.jpg'],
    url,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS,
      addressLocality: 'Cuenca',
      addressRegion: 'Azuay',
      addressCountry: 'EC'
    },
    geo: { '@type': 'GeoCoordinates', latitude: -2.89741, longitude: -79.00447 },
    openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' }],
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '20570', bestRating: '5' },
    isAccessibleForFree: true,
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
