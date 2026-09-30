export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const localeMeta: Record<Locale, { htmlLang: string; ogLocale: string }> = {
  es: { htmlLang: 'es-EC', ogLocale: 'es_EC' },
  en: { htmlLang: 'en', ogLocale: 'en_US' }
};

// Logical page -> path per locale. x-default points to the Spanish (default) URL.
export const pageRoutes = {
  home: { es: '/', en: '/en/' },
  comoLlegar: { es: '/como-llegar/', en: '/en/how-to-get-there/' },
  horarios: { es: '/horarios/', en: '/en/hours/' }
} as const;

export type PageKey = keyof typeof pageRoutes;

export function localizedPath(key: PageKey, locale: Locale): string {
  return pageRoutes[key][locale];
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
