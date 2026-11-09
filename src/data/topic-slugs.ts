import { MAPS_URL } from './site';

/** Date of the editorial review shared by every Spanish guide page. */
export const CHECK_DATE = '9 de noviembre de 2026';

export type TopicGroup = 'practico' | 'transporte' | 'historia' | 'cerca' | 'comer' | 'rutas';
export type Priority = 'P0' | 'P1' | 'P2';
export type SourceKey = 'municipio' | 'inpc' | 'unesco' | 'visitCuenca' | 'catedralVieja' | 'folleto' | 'maps';

export const TOPIC_GROUP_ORDER: TopicGroup[] = ['practico', 'transporte', 'historia', 'cerca', 'comer', 'rutas'];

export const TOPIC_GROUP_LABELS: Record<TopicGroup, string> = {
  practico: 'Información práctica',
  transporte: 'Transporte y accesos',
  historia: 'Historia y patrimonio',
  cerca: 'Lugares cercanos',
  comer: 'Comer y dormir cerca',
  rutas: 'Rutas y fotografía'
};

/** The 36 Spanish guide URLs. Slugs are paths relative to the site root; some live under /cerca/. */
export const TOPIC_SLUGS: string[] = [
  // A · Información práctica (P0)
  'reapertura-2026',
  'entrada-precios',
  'cuanto-tiempo-visitar',
  'mejor-hora-visitar',
  'accesibilidad',
  'visitar-con-ninos',
  // B · Transporte, estacionamiento y llegada (P0)
  'desde-aeropuerto-cuenca',
  'desde-terminal-terrestre',
  'donde-estacionar',
  'transporte-publico',
  'tranvia-y-caminata',
  'calles-y-accesos',
  // C · Historia, arquitectura y cultura (P1)
  'historia',
  'monumento-abdon-calderon',
  'glorieta-parque-calderon',
  'edificios-historicos',
  'transformaciones-historicas',
  'centro-historico-patrimonio',
  // D · Lugares cercanos (P1)
  'cerca/catedral-nueva',
  'cerca/catedral-vieja',
  'cerca/plaza-de-las-flores',
  'cerca/seminario-san-luis',
  'cerca/museo-de-las-conceptas',
  'cerca/plaza-san-francisco',
  // E · Comer, café y dormir (P1)
  'cerca/restaurantes',
  'cerca/cafeterias',
  'cerca/comida-tipica',
  'cerca/desayunos',
  'cerca/hoteles',
  'donde-alojarse-centro-historico',
  // F · Rutas y fotografía (P2)
  'ruta-30-minutos',
  'ruta-1-hora',
  'ruta-medio-dia',
  'ruta-un-dia',
  'mejores-fotos',
  'visitar-con-lluvia'
];

export function topicPath(slug: string): string {
  return `/${slug.replace(/^\/+|\/+$/g, '')}/`;
}

export function isTopicPath(pathname: string): boolean {
  return TOPIC_SLUGS.some((slug) => topicPath(slug) === pathname);
}

export interface TopicSource {
  label: string;
  url: string;
}

export const SOURCE_LINKS: Record<SourceKey, TopicSource> = {
  municipio: {
    label: 'Municipio de Cuenca: reinauguración del Parque Calderón (octubre de 2026)',
    url: 'https://www.cuenca.gob.ec/content/calderon-de-fiesta-y-tradicion-cuenca-reinauguro-su-parque-emblematico'
  },
  inpc: {
    label: 'INPC: Centro Histórico de Cuenca, parque y catedrales como bienes diferenciados',
    url: 'https://www.patrimoniocultural.gob.ec/cuenca-2/'
  },
  unesco: {
    label: 'UNESCO: Centro Histórico de Santa Ana de los Ríos de Cuenca',
    url: 'https://whc.unesco.org/en/list/863/'
  },
  visitCuenca: {
    label: 'VisitCuenca: rutas oficiales por el Centro Histórico',
    url: 'https://www.visitcuencaecuador.com.ec/en/how-long-are-you-staying/'
  },
  catedralVieja: {
    label: 'Municipio de Cuenca: Museo de Arte Religioso – Catedral Vieja',
    url: 'https://www.cuenca.gob.ec/content/museo-de-arte-religioso-%E2%80%93-catedral-vieja'
  },
  folleto: {
    label: 'Ruta Francesa, edición 2016: calles que rodean el parque',
    url: 'https://www.cuenca.com.ec/sites/default/files/Folleto%20Ruta%20Francesa%20Espanol.pdf'
  },
  maps: {
    label: 'Google Maps: Parque Calderón',
    url: MAPS_URL
  }
};

/** Hub links rendered on every guide page, in addition to its related articles. */
export const GROUP_HUB_LINKS: Record<TopicGroup, { label: string; href: string }[]> = {
  practico: [
    { label: 'Horarios y datos del parque', href: '/horarios/' },
    { label: 'Guía principal', href: '/' }
  ],
  transporte: [
    { label: 'Cómo llegar al Parque Calderón', href: '/como-llegar/' },
    { label: 'Horarios y datos del parque', href: '/horarios/' }
  ],
  historia: [
    { label: 'Guía principal', href: '/' },
    { label: 'Qué ver en la visita', href: '/#visita' }
  ],
  cerca: [
    { label: 'Qué ver alrededor', href: '/#cerca' },
    { label: 'Guía principal', href: '/' }
  ],
  comer: [
    { label: 'Dónde comer cerca', href: '/#comer' },
    { label: 'Guía principal', href: '/' }
  ],
  rutas: [
    { label: 'Cómo llegar al Parque Calderón', href: '/como-llegar/' },
    { label: 'Guía principal', href: '/' }
  ]
};
