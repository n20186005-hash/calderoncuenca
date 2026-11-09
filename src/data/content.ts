import type { Locale } from '../i18n';

type Faq = [string, string];

export interface LocaleContent {
  nav: { label: string; href: string }[];
  ids: { visita: string; comer: string; cerca: string; faq: string };
  hero: {
    eyebrow: string;
    h1: string;
    subtitle: string;
    badges: string[];
    capEyebrow: string;
    capText: string;
  };
  visita: { eyebrow: string; h2: string; p: string[]; stats: [string, string][] };
  mejorMomento: {
    eyebrow: string; h2: string; p: string;
    consejoEyebrow: string; consejoH3: string; consejoP: string;
  };
  llegar: {
    eyebrow: string; h2: string; p: string[];
    mapTitle: string; mapLinkText: string;
  };
  entradas: {
    costoEyebrow: string; costoH2: string; costoP: string;
    parkEyebrow: string; parkH2: string; parkP: string;
  };
  comer: { eyebrow: string; h2: string; subtitle: string; cards: [string, string, string][] };
  cerca: { eyebrow: string; h2: string; cards: [string, string][] };
  faq: { eyebrow: string; h2: string; items: Faq[] };
  footer: { disclaimer: string; addressLabel: string };
  comoLlegar: {
    eyebrow: string; h1: string; intro: string;
    items: { title: string; body: string }[];
    mapTitle: string; mapLinkText: string;
    faqEyebrow: string; faqH2: string; items_faq: Faq[];
  };
  horarios: {
    eyebrow: string; h1: string; intro: string;
    cards: [string, string][];
    faqEyebrow: string; faqH2: string; items_faq: Faq[];
  };
}

export const content: Record<Locale, LocaleContent> = {
  es: {
    nav: [
      { label: 'Visita', href: '/#visita' },
      { label: 'Cómo llegar', href: '/como-llegar/' },
      { label: 'Horarios', href: '/horarios/' },
      { label: 'Comer', href: '/#comer' },
      { label: 'Cerca', href: '/#cerca' },
      { label: 'Guías', href: '/#guias' },
      { label: 'FAQ', href: '/#faq' }
    ],
    ids: { visita: 'visita', comer: 'comer', cerca: 'cerca', faq: 'faq' },
    hero: {
      eyebrow: 'Cuenca · Azuay · Ecuador',
      h1: 'Parque Calderón – Cuenca, Ecuador',
      subtitle: 'El salón urbano de Cuenca: árboles, edificios históricos y cúpulas azules y una plaza donde la ciudad histórica sigue marcando el ritmo cotidiano.',
      badges: ['Reapertura municipal: 28 oct 2026', '24 h: dato de Maps', 'Centro Histórico'],
      capEyebrow: 'Vista emblemática',
      capText: 'La plaza y la Catedral Nueva forman una de las escenas más reconocibles de Cuenca.'
    },
    visita: {
      eyebrow: 'Por qué importa',
      h2: 'El punto cero emocional del centro',
      p: [
        'Parque Calderón ocupa el corazón del trazado histórico de Cuenca. A su alrededor se concentran edificios cívicos, cafés y dos templos que resumen siglos de transformación urbana. En el centro, el monumento a Abdón Calderón recuerda al héroe cuencano de la independencia.',
        'Más que “ver” el parque, vale la pena habitarlo unos minutos: sentarse bajo las araucarias, mirar el paso de la gente y usar la plaza como punto de partida para recorrer el casco histórico a pie.'
      ],
      stats: [['Estimación orientativa', '45–90 min; ajustar al acceso'], ['Horario en Maps', '24 h; confirmar restricciones'], ['Entradas cercanas', 'Condiciones independientes'], ['Entorno', 'Valle andino']]
    },
    mejorMomento: {
      eyebrow: 'Mejor momento',
      h2: 'Elegir la hora de visita',
      p: 'Elige tu hora según avisos actuales, previsión y necesidades personales. La iluminación, el tránsito y las aglomeraciones varían; los actos pueden afectar el acceso.',
      consejoEyebrow: 'Consejo',
      consejoH3: 'Lleva una capa ligera',
      consejoP: 'Cuenca está en altura y el clima puede cambiar rápido. Incluso en días soleados, una chaqueta liviana y protección solar hacen la caminata más cómoda.'
    },
    llegar: {
      eyebrow: 'Transporte detallado',
      h2: 'Llegar al centro, seguir a pie',
      p: [
        'A pie: si ya estás en el Centro Histórico, el parque funciona como referencia natural. Las calles Simón Bolívar, Mariscal Sucre, Benigno Malo y Luis Cordero estructuran el entorno inmediato.',
        'Taxi / app: pide “Parque Calderón” y consulta al conductor un punto legal de descenso para ese día; aquí no se confirma una parada concreta.',
        'Bus urbano: consulta al operador la ruta, parada y horario vigentes para tu origen; esta guía no confirma una línea ni un intervalo de servicio.',
        'Bicicleta: el centro es compacto; estaciona fuera de los pasos peatonales y respeta las zonas de circulación.'
      ],
      mapTitle: 'Mapa del Parque Calderón',
      mapLinkText: 'Ver Parque Calderón en Google Maps ↗'
    },
    entradas: {
      costoEyebrow: 'Entradas / costos',
      costoH2: 'Parque y entradas cercanas: distinguir',
      costoP: 'El parque es un espacio público. No hemos confirmado un aviso actual de tarifas del operador; comprueba condiciones de actos especiales. La Catedral Nueva, sus terrazas o criptas y el Museo Catedral Vieja son visitas distintas, con horarios, posibles tarifas y restricciones propios.',
      parkEyebrow: 'Estacionamiento',
      parkH2: 'Confirmar antes de conducir',
      parkP: 'Consulta al conductor o a la administración local una opción legal de descenso y estacionamiento para tu fecha. No se ha confirmado una ubicación, disponibilidad, tarifa ni ruta accesible desde el aparcamiento.'
    },
    comer: {
      eyebrow: 'Sabores alrededor',
      h2: 'Dónde comer cerca',
      subtitle: 'Opciones no vinculadas a negocios concretos; confirma apertura, carta, precios e ingredientes.',
      cards: [['Desayuno y café', 'Planificar', 'Consulta qué locales están abiertos, su carta y los precios antes de sentarte.'], ['Comida', 'Elegir por necesidades', 'Pregunta por ingredientes, porciones y opciones de tu dieta; no se verifica aquí ningún establecimiento.'], ['Para llevar', 'Cuidar el espacio público', 'Confirma el precio y las reglas locales; no bloquees pasos ni dejes residuos.']]
    },
    cerca: {
      eyebrow: 'A pocos pasos',
      h2: 'Qué ver alrededor',
      cards: [
        ['Catedral de la Inmaculada Concepción', 'La “Catedral Nueva”, con sus cúpulas azules, domina el costado de la plaza.'],
        ['Catedral Vieja / El Sagrario', 'El Sagrario es actualmente el Museo Catedral Vieja, según el INPC; no confundirlo con la Catedral Nueva. Confirma visitas y tarifas con su administración.'],
        ['Calle Larga y río Tomebamba', 'Un corredor ideal para enlazar arquitectura, museos, cafés y vistas hacia el barranco.']
      ]
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      h2: 'FAQ',
      items: [
        ['¿La entrada al Parque Calderón tiene costo?', 'El parque es un espacio público; no hemos confirmado un aviso actual de tarifas. Actos especiales y las visitas a catedrales, museos y terrazas pueden tener condiciones y tarifas independientes.'],
        ['¿Cuál es el mejor momento para visitarlo?', 'Planifica con luz diurna tras comprobar avisos y previsión del tiempo; no se garantiza una franja sin aglomeraciones ni seguridad nocturna.'],
        ['¿Cuánto tiempo conviene quedarse?', 'Como estimación orientativa, reserva 45–90 minutos, ajustando el plan según accesos, colas y necesidades personales, para recorrer el parque con calma, observar la Catedral Nueva y enlazar la visita con el Centro Histórico.'],
        ['¿Hay estacionamiento en el parque?', 'Consulta al conductor o a la administración local una opción legal de descenso y estacionamiento para tu fecha. No se ha confirmado una ubicación, disponibilidad, tarifa ni ruta accesible desde el aparcamiento.'],
        ['¿Es una buena base para recorrer Cuenca?', 'Sí. Desde el parque se puede caminar hacia la Catedral Nueva, la Catedral Vieja, Calle Larga, plazas, cafés y museos del centro.']
      ]
    },
    footer: {
      disclaimer: 'Guía independiente de viaje. Este sitio no es el sitio oficial del Parque Calderón, del Municipio de Cuenca ni de ninguna institución pública o religiosa.',
      addressLabel: '4X3W+26J, Mariscal Sucre, Cuenca, Azuay, Ecuador'
    },
    comoLlegar: {
      eyebrow: 'Transporte y acceso',
      h1: 'Cómo llegar al Parque Calderón',
      intro: 'El Parque Calderón está en el centro de Cuenca, a pocas cuadras de las principales plazas e iglesias. Aquí tienes las formas más prácticas de llegar, sea que vienes del aeropuerto, de otro barrio o a pie desde el casco histórico.',
      items: [
        { title: 'A pie desde el Centro Histórico', body: 'El parque es la referencia natural del centro. Las calles Simón Bolívar, Mariscal Sucre, Benigno Malo y Luis Cordero delimitan el entorno inmediato; comprueba la distancia, los cruces y las condiciones de tu ruta concreta.' },
        { title: 'Taxi o app de transporte', body: 'Pide “Parque Calderón”; confirma con el conductor un punto legal de descenso y el precio antes de viajar. Las restricciones pueden cambiar; no se verifica aquí una parada concreta.' },
        { title: 'Bus urbano', body: 'Consulta al operador una ruta, parada y horario vigentes. Comprueba los cruces y la accesibilidad del tramo final antes de viajar.' },
        { title: 'En bicicleta', body: 'No se ha auditado un itinerario ciclista ni una ruta totalmente accesible. Deja la bici fuera de los pasos peatonales y respeta las zonas de circulación y las calles de terrazo.' }
      ],
      mapTitle: 'Mapa del Parque Calderón',
      mapLinkText: 'Ver Parque Calderón en Google Maps ↗',
      faqEyebrow: 'Preguntas frecuentes',
      faqH2: 'FAQ: cómo llegar',
      items_faq: [
        ['¿El Parque Calderón está lejos del aeropuerto?', 'Desde el aeropuerto, consulta al operador de transporte una ruta y un punto legal de descenso. No se ha verificado un tiempo de viaje ni una tarifa actual; dependen del tráfico y las restricciones.'],
        ['¿Se puede llegar en transporte público?', 'Consulta al operador el servicio, parada y horario actuales para tu origen; aquí no se verifica una línea, intervalo ni ruta accesible completa.'],
        ['¿Dónde estacionar?', 'Consulta al conductor o a la administración local una opción legal de descenso y estacionamiento para tu fecha. No se ha confirmado una ubicación, disponibilidad, tarifa ni ruta accesible desde el aparcamiento.'],
        ['¿Cuánto cuesta un taxi al centro?', 'Las tarifas varían; confirma el precio antes de subir o usa una app de transporte para evitar sorpresas.']
      ]
    },
    horarios: {
      eyebrow: 'Información práctica',
      h1: 'Horarios y datos del Parque Calderón',
      intro: 'El Parque Calderón es un espacio público y permanente. Estos son los datos prácticos que necesitas planear tu visita al corazón de Cuenca.',
      cards: [
        ['Horario en Maps', '24 horas, consultado el 30 de octubre de 2026; no es un horario confirmado por la administración.'],
        ['Entrada', 'Espacio público; no se ha confirmado un aviso actual de tarifas. Comprueba condiciones de actos especiales.'],
        ['Mejor momento', 'Planifica con luz diurna tras comprobar avisos y previsión; no se garantiza una franja sin aglomeraciones.'],
        ['Duración recomendada', 'Estimación orientativa de 45–90 minutos; ajustar a condiciones y acceso de cada recinto.'],
        ['Entorno', 'Valle de los Andes; no se ha medido aquí una cota precisa del parque.'],
        ['Ubicación', 'Centro Histórico de Cuenca, Azuay, Ecuador.']
      ],
      faqEyebrow: 'Preguntas frecuentes',
      faqH2: 'FAQ: horarios',
      items_faq: [
        ['¿A qué hora abre el Parque Calderón?', 'Maps indica 24 horas (30 de octubre de 2026). El Municipio anunció la reapertura del 28 de octubre tras las obras, pero esa noticia no fija un horario permanente. Confirma avisos y restricciones para tu fecha.'],
        ['¿Hay días en que está cerrado?', 'Puede haber cierres por mantenimiento, actos o instrucciones locales. La reapertura municipal de octubre de 2026 no garantiza acceso continuo; catedrales y museos tienen condiciones propias.'],
        ['¿Cuánto tiempo conviene dedicarle?', 'Como estimación orientativa, reserva 45–90 minutos, ajustando el plan según accesos, colas y necesidades personales, para recorrerlo, observar la Catedral Nueva y enlazar con el casco histórico.'],
        ['¿Qué época del año es mejor?', 'Consulta la previsión para tu fecha y adapta el plan a lluvia, sol o cambios de temperatura; no se garantiza tiempo templado durante todo el año.']
      ]
    }
  },

  en: {
    nav: [
      { label: 'Visit', href: '/en/#visit' },
      { label: 'Getting there', href: '/en/how-to-get-there/' },
      { label: 'Hours', href: '/en/hours/' },
      { label: 'Eat', href: '/en/#eat' },
      { label: 'Nearby', href: '/en/#nearby' },
      { label: 'FAQ', href: '/en/#faq' }
    ],
    ids: { visita: 'visit', comer: 'eat', cerca: 'nearby', faq: 'faq' },
    hero: {
      eyebrow: 'Cuenca · Azuay · Ecuador',
      h1: 'Parque Calderón, Cuenca, Ecuador',
      subtitle: 'Cuenca’s urban living room: trees, historic buildings and blue domes and a square where the historic city still sets the daily rhythm.',
      badges: ['Municipal reopening: 28 Oct 2026', '24h: Maps listing', 'Historic Center'],
      capEyebrow: 'Iconic view',
      capText: 'The square and the New Cathedral form one of Cuenca’s most recognizable scenes.'
    },
    visita: {
      eyebrow: 'Why it matters',
      h2: 'The emotional ground zero of the center',
      p: [
        'Parque Calderón sits at the heart of Cuenca’s historic layout. Civic buildings, cafés and two churches that sum up centuries of urban change cluster around it. At its center, the monument to Abdón Calderón honors the Cuencano hero of independence.',
        'More than “seeing” the park, it is worth inhabiting it for a few minutes: sit under the araucaria trees, watch the flow of people and use the square as a starting point to walk the historic center on foot.'
      ],
      stats: [['Rough planning estimate', '45–90 min; adjust for access'], ['Maps hours', '24h; check restrictions'], ['Nearby admission', 'Separate conditions'], ['Setting', 'Andean valley']]
    },
    mejorMomento: {
      eyebrow: 'Best time',
      h2: 'Choose a time for your visit',
      p: 'Choose your time using current notices, the forecast and your needs. Light, traffic and crowds vary; events may affect access.',
      consejoEyebrow: 'Tip',
      consejoH3: 'Bring a light layer',
      consejoP: 'Cuenca is at altitude and the weather can change quickly. Even on sunny days, a light jacket and sun protection make the walk more comfortable.'
    },
    llegar: {
      eyebrow: 'Detailed transport',
      h2: 'Reach the center, continue on foot',
      p: [
        'On foot: if you are already in the Historic Center, the park is a natural reference point. The streets Simón Bolívar, Mariscal Sucre, Benigno Malo and Luis Cordero shape its immediate surroundings.',
        'Taxi / app: ask for “Parque Calderón” and confirm a legal drop-off with your driver for that day; no specific stopping place is verified here.',
        'City bus: ask the operator about the current route, stop and timetable for your origin; this guide does not verify a service number or interval.',
        'Bicycle: the center is compact; park outside pedestrian crossings and respect circulation zones.'
      ],
      mapTitle: 'Map of Parque Calderón',
      mapLinkText: 'View Parque Calderón on Google Maps ↗'
    },
    entradas: {
      costoEyebrow: 'Tickets / cost',
      costoH2: 'Separate park and nearby admission',
      costoP: 'The park is a public space. No current operator fee notice has been confirmed here; check special-event conditions. The New Cathedral, its terraces or crypts and the Old Cathedral Museum are separate visits with their own hours, possible charges and restrictions.',
      parkEyebrow: 'Parking',
      parkH2: 'Check before driving',
      parkP: 'Ask your driver or the local authority to confirm legal drop-off and parking arrangements for your date. No location, availability, charge or accessible route from parking has been verified.'
    },
    comer: {
      eyebrow: 'Flavors around',
      h2: 'Where to eat nearby',
      subtitle: 'General food choices, not named business recommendations; confirm opening, menus, prices and ingredients.',
      cards: [['Breakfast and coffee', 'Plan ahead', 'Check which venues are open and confirm their menus and prices before sitting down.'], ['Meals', 'Choose for your needs', 'Ask about ingredients, portions and dietary options; this guide does not verify a particular venue.'], ['Takeaway', 'Respect public space', 'Confirm prices and local rules; keep crossings clear and take your litter with you.']]
    },
    cerca: {
      eyebrow: 'A few steps away',
      h2: 'What to see nearby',
      cards: [
        ['Catedral de la Inmaculada Concepción (New Cathedral)', 'The “Catedral Nueva”, with its blue domes, dominates one side of the square.'],
        ['Old Cathedral (El Sagrario)', 'El Sagrario is now the Old Cathedral Museum according to INPC; it is distinct from the New Cathedral. Confirm visits and fees with its administration.'],
        ['Calle Larga and the Tomebamba River', 'An ideal corridor linking architecture, museums, cafés and views over the ravine.']
      ]
    },
    faq: {
      eyebrow: 'Frequently asked questions',
      h2: 'FAQ',
      items: [
        ['Is there a cost to enter Parque Calderón?', 'It is a public space; no current operator fee notice has been confirmed here. Special events, cathedrals, museums and terraces may have separate conditions and charges.'],
        ['What is the best time to visit?', 'Plan a daylight visit after checking access notices and the forecast; crowd levels and night-time safety are not guaranteed.'],
        ['How long should you stay?', 'As a rough planning estimate, allow 45–90 minutes, adjusting for access, queues and personal needs, to walk the park at ease, see the New Cathedral and connect with the Historic Center.'],
        ['Is there parking at the park?', 'Ask your driver or the local authority to confirm legal drop-off and parking arrangements for your date. No location, availability, charge or accessible route from parking has been verified.'],
        ['Is it a good base to explore Cuenca?', 'Yes. From the park you can walk to the New Cathedral, the Old Cathedral, Calle Larga, plazas, cafés and museums downtown.']
      ]
    },
    footer: {
      disclaimer: 'Independent travel guide. This site is not the official site of Parque Calderón, the Municipality of Cuenca, or any public or religious institution.',
      addressLabel: '4X3W+26J, Mariscal Sucre, Cuenca, Azuay, Ecuador'
    },
    comoLlegar: {
      eyebrow: 'Transport and access',
      h1: 'How to get to Parque Calderón',
      intro: 'Parque Calderón is in the center of Cuenca, a few blocks from the main squares and churches. Here are the most practical ways to get there, whether you come from the airport, another neighborhood, or on foot from the historic center.',
      items: [
        { title: 'On foot from the Historic Center', body: 'The park is the natural reference point of the center. The streets Simón Bolívar, Mariscal Sucre, Benigno Malo and Luis Cordero border its immediate surroundings; check the distance, crossings and conditions of your actual route.' },
        { title: 'Taxi or ride app', body: 'Ask for “Parque Calderón”; confirm a legal drop-off and the price with your driver before travel. Restrictions can change; no specific stopping place is verified here.' },
        { title: 'City bus', body: 'Ask the operator for the current route, stop and timetable. Check crossings and accessibility for the final stretch before travel.' },
        { title: 'By bicycle', body: 'No cycle itinerary or fully accessible route has been audited. Leave the bike off the pedestrian crossings and respect circulation zones and the cobbled streets.' }
      ],
      mapTitle: 'Map of Parque Calderón',
      mapLinkText: 'View Parque Calderón on Google Maps ↗',
      faqEyebrow: 'Frequently asked questions',
      faqH2: 'FAQ: getting there',
      items_faq: [
        ['Is Parque Calderón far from the airport?', 'Ask your transport operator about the current route and a legal drop-off from the airport. No current journey time or fare has been verified; traffic and restrictions affect the trip.'],
        ['Can you get there by public transport?', 'Ask the operator about current services, stops and times for your origin; no specific line, interval or complete accessible route is verified here.'],
        ['Where to park?', 'Ask your driver or the local authority to confirm legal drop-off and parking arrangements for your date. No location, availability, charge or accessible route from parking has been verified.'],
        ['How much does a taxi to the center cost?', 'Fares vary; confirm the price before boarding or use a ride app to avoid surprises.']
      ]
    },
    horarios: {
      eyebrow: 'Practical information',
      h1: 'Hours and facts about Parque Calderón',
      intro: 'Parque Calderón is a permanent public space. Here are the practical details you need to plan your visit to the heart of Cuenca.',
      cards: [
        ['Maps hours', '24 hours, checked 30 October 2026; not an operator-confirmed timetable.'],
        ['Entry', 'Public space; no current operator fee notice has been confirmed. Check special-event conditions.'],
        ['Best time', 'Plan for daylight after checking notices and the forecast; no uncrowded time slot is guaranteed.'],
        ['Recommended duration', 'Rough planning estimate of 45–90 minutes; adjust to conditions and each venue’s access.'],
        ['Setting', 'Andean valley; no precise park elevation has been measured here.'],
        ['Location', 'Historic Center of Cuenca, Azuay, Ecuador.']
      ],
      faqEyebrow: 'Frequently asked questions',
      faqH2: 'FAQ: hours',
      items_faq: [
        ['What time does Parque Calderón open?', 'Maps lists 24 hours (30 October 2026). The Municipality announced reopening on 28 October after the works, but that notice does not set a permanent timetable. Check notices and restrictions for your date.'],
        ['Are there days it is closed?', 'Maintenance, events or local instructions can restrict access. The October 2026 reopening is not a guarantee of continuous access; cathedrals and museums have separate conditions.'],
        ['How much time should you spend?', 'As a rough planning estimate, allow 45–90 minutes, adjusting for access, queues and personal needs, to walk it, see the New Cathedral and connect with the historic center.'],
        ['What time of year is best?', 'Check the forecast for your date and adapt to rain, sun and temperature changes; mild weather is not guaranteed year-round.']
      ]
    }
  }
};
