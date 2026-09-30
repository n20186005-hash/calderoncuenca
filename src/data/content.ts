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
      { label: 'Comer', href: '/#comer' },
      { label: 'Cerca', href: '/#cerca' },
      { label: 'FAQ', href: '/#faq' }
    ],
    ids: { visita: 'visita', comer: 'comer', cerca: 'cerca', faq: 'faq' },
    hero: {
      eyebrow: 'Cuenca · Azuay · Ecuador',
      h1: 'Parque Calderón',
      subtitle: 'El salón urbano de Cuenca: árboles altos, piedra rosada, cúpulas azules y una plaza donde la ciudad histórica sigue marcando el ritmo cotidiano.',
      badges: ['Abierto 24 horas', 'Entrada gratuita', 'Centro Histórico'],
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
      stats: [['Tiempo recomendado', '45–90 min'], ['Horario', '24 h'], ['Costo', 'Gratis'], ['Altitud', '≈ 2.548 m']]
    },
    mejorMomento: {
      eyebrow: 'Mejor momento',
      h2: 'Mañana serena, tarde dorada',
      p: 'Entre primera hora de la mañana y media mañana hay menos tránsito peatonal y una luz limpia sobre la Catedral Nueva. Al final de la tarde, el parque se vuelve más social y fotogénico. Si buscas calma, evita los momentos de mayor actividad cívica o eventos especiales.',
      consejoEyebrow: 'Consejo',
      consejoH3: 'Lleva una capa ligera',
      consejoP: 'Cuenca está en altura y el clima puede cambiar rápido. Incluso en días soleados, una chaqueta liviana y protección solar hacen la caminata más cómoda.'
    },
    llegar: {
      eyebrow: 'Transporte detallado',
      h2: 'Llegar al centro, seguir a pie',
      p: [
        'A pie: si ya estás en el Centro Histórico, el parque funciona como referencia natural. Las calles Simón Bolívar, Mariscal Sucre, Benigno Malo y Luis Cordero estructuran el entorno inmediato.',
        'Taxi / app: pide “Parque Calderón” o “Catedral Nueva”; el descenso suele ser en una de las calles perimetrales, sujeto a cierres y flujo del centro.',
        'Bus urbano: varias rutas cruzan el centro. Conviene bajar en una parada cercana y completar el último tramo caminando.',
        'Bicicleta: el centro es compacto; estaciona fuera de los pasos peatonales y respeta las zonas de circulación.'
      ],
      mapTitle: 'Mapa del Parque Calderón',
      mapLinkText: 'Ver Parque Calderón en Google Maps ↗'
    },
    entradas: {
      costoEyebrow: 'Entradas / costos',
      costoH2: 'La plaza es gratuita',
      costoP: 'El acceso al Parque Calderón no requiere boleto. Iglesias, museos, miradores o terrazas cercanas pueden operar con tarifas, horarios y condiciones propias; revísalos en el lugar antes de entrar.',
      parkEyebrow: 'Estacionamiento',
      parkH2: 'Mejor fuera de la plaza',
      parkP: 'No hay parqueo dentro del parque. El Centro Histórico dispone de parqueaderos privados y zonas reguladas en calles cercanas; por calles estrechas, tránsito y posibles restricciones, suele ser más práctico estacionar a unas cuadras y caminar.'
    },
    comer: {
      eyebrow: 'Sabores alrededor',
      h2: 'Dónde comer cerca',
      subtitle: 'La plaza está rodeada de cafés y restaurantes; horarios y cartas pueden cambiar.',
      cards: [
        ['Trattoria Murano', 'Italiana', 'Frente al Parque Calderón; una opción cómoda para pasta o pizza en pleno centro.'],
        ['El Confesionario', 'Fusión / internacional', 'Cerca de la plaza, conocido por combinar comida con una vista privilegiada del entorno histórico.'],
        ['Majoni', 'Bistró', 'En la esquina de Benigno Malo y Simón Bolívar, frente al parque; buena parada para cena y postres.']
      ]
    },
    cerca: {
      eyebrow: 'A pocos pasos',
      h2: 'Qué ver alrededor',
      cards: [
        ['Catedral de la Inmaculada Concepción', 'La “Catedral Nueva”, con sus cúpulas azules, domina el costado de la plaza.'],
        ['Catedral Vieja / El Sagrario', 'Uno de los templos históricos esenciales para entender la evolución religiosa y urbana de Cuenca.'],
        ['Calle Larga y río Tomebamba', 'Un corredor ideal para enlazar arquitectura, museos, cafés y vistas hacia el barranco.']
      ]
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      h2: 'FAQ',
      items: [
        ['¿La entrada al Parque Calderón tiene costo?', 'No. Es un espacio público abierto y el acceso al parque es gratuito. Atracciones cercanas, como terrazas o museos, pueden cobrar su propia tarifa.'],
        ['¿Cuál es el mejor momento para visitarlo?', 'La mañana ofrece luz suave y un ambiente más tranquilo; al final de la tarde, la plaza gana vida y la arquitectura se ilumina con tonos cálidos.'],
        ['¿Cuánto tiempo conviene quedarse?', 'Entre 45 y 90 minutos es suficiente para recorrer el parque con calma, observar la Catedral Nueva y enlazar la visita con el Centro Histórico.'],
        ['¿Hay estacionamiento en el parque?', 'No hay estacionamiento dentro de la plaza. Conviene usar parqueaderos privados del Centro Histórico y continuar a pie.'],
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
        { title: 'A pie desde el Centro Histórico', body: 'El parque es la referencia natural del centro. Las calles Simón Bolívar, Mariscal Sucre, Benigno Malo y Luis Cordero delimitan el entorno inmediato; desde casi cualquier punto del casco histórico se llega en pocos minutos caminando.' },
        { title: 'Taxi o app de transporte', body: 'Pide “Parque Calderón” o “Catedral Nueva”. El descenso suele quedar en una de las calles perimetrales, según cierres y flujo del centro. Confirmar el precio antes de subir si no usas app.' },
        { title: 'Bus urbano', body: 'Varias rutas cruzan el centro. Baja en una parada cercana y completa el último tramo a pie; pregunta al conductor el punto más conveniente para tu ruta.' },
        { title: 'En bicicleta', body: 'El centro es compacto y plano en su núcleo. Deja la bici fuera de los pasos peatonales y respeta las zonas de circulación y las calles de terrazo.' }
      ],
      mapTitle: 'Mapa del Parque Calderón',
      mapLinkText: 'Ver Parque Calderón en Google Maps ↗',
      faqEyebrow: 'Preguntas frecuentes',
      faqH2: 'FAQ: cómo llegar',
      items_faq: [
        ['¿El Parque Calderón está lejos del aeropuerto?', 'El Aeropuerto Mariscal Lamar está a unos 10–15 minutos en taxi del centro. Desde ahí, un corto traslado te deja a pocas cuadras del parque.'],
        ['¿Se puede llegar en transporte público?', 'Sí. Varias rutas de bus urbano cruzan el Centro Histórico; baja cerca y camina el último tramo hasta la plaza.'],
        ['¿Dónde estacionar?', 'No hay parqueo dentro de la plaza. Usa parqueaderos privados del Centro Histórico y continúa a pie unas cuadras.'],
        ['¿Cuánto cuesta un taxi al centro?', 'Las tarifas varían; confirma el precio antes de subir o usa una app de transporte para evitar sorpresas.']
      ]
    },
    horarios: {
      eyebrow: 'Información práctica',
      h1: 'Horarios y datos del Parque Calderón',
      intro: 'El Parque Calderón es un espacio público y permanente. Estos son los datos prácticos que necesitas planear tu visita al corazón de Cuenca.',
      cards: [
        ['Horario', 'Abierto las 24 horas, todos los días del año.'],
        ['Entrada', 'Gratuita. No se requiere boleto para recorrer el parque.'],
        ['Mejor momento', 'Mañana temprano para luz suave; tarde para ambiente y fotos.'],
        ['Duración recomendada', '45–90 minutos para recorrerlo con calma.'],
        ['Altitud', '≈ 2.548 m sobre el nivel del mar.'],
        ['Ubicación', 'Centro Histórico de Cuenca, Azuay, Ecuador.']
      ],
      faqEyebrow: 'Preguntas frecuentes',
      faqH2: 'FAQ: horarios',
      items_faq: [
        ['¿A qué hora abre el Parque Calderón?', 'El parque es de acceso libre y está abierto las 24 horas; no tiene hora de apertura ni cierre.'],
        ['¿Hay días en que está cerrado?', 'No. Al ser un espacio público al aire libre, permanece accesible todos los días, aunque algunos servicios cercanos sí tienen horario.'],
        ['¿Cuánto tiempo conviene dedicarle?', 'Entre 45 y 90 minutos es suficiente para recorrerlo, observar la Catedral Nueva y enlazar con el casco histórico.'],
        ['¿Qué época del año es mejor?', 'Cuenca tiene clima templado todo el año; lleva una capa ligera por los cambios rápidos, sobre todo al atardecer.']
      ]
    }
  },

  en: {
    nav: [
      { label: 'Visit', href: '/en/#visit' },
      { label: 'Getting there', href: '/en/how-to-get-there/' },
      { label: 'Eat', href: '/en/#eat' },
      { label: 'Nearby', href: '/en/#nearby' },
      { label: 'FAQ', href: '/en/#faq' }
    ],
    ids: { visita: 'visit', comer: 'eat', cerca: 'nearby', faq: 'faq' },
    hero: {
      eyebrow: 'Cuenca · Azuay · Ecuador',
      h1: 'Parque Calderón',
      subtitle: 'Cuenca’s urban living room: tall trees, pink stone, blue domes and a square where the historic city still sets the daily rhythm.',
      badges: ['Open 24 hours', 'Free entry', 'Historic Center'],
      capEyebrow: 'Iconic view',
      capText: 'The square and the New Cathedral form one of Cuenca’s most recognizable scenes.'
    },
    visita: {
      eyebrow: 'Why it matters',
      h2: 'The emotional ground zero of the center',
      p: [
        'Parque Calderón sits at the heart of Cuenca’s historic layout. Civic buildings, cafés and two churches that sum up centuries of urban change cluster around it. At its center, the monument to Abdón Calderón honors the Cuencano hero of independence.',
        'More than “seeing” the park, it is worth inhabiting it for a few minutes: sit under the monkey-puzzle trees, watch the flow of people and use the square as a starting point to walk the historic center on foot.'
      ],
      stats: [['Recommended time', '45–90 min'], ['Hours', '24 h'], ['Cost', 'Free'], ['Altitude', '≈ 2,548 m']]
    },
    mejorMomento: {
      eyebrow: 'Best time',
      h2: 'Calm morning, golden afternoon',
      p: 'Between early morning and mid-morning there is less foot traffic and clean light on the New Cathedral. Late afternoon, the park becomes more social and photogenic. If you want calm, avoid peak civic events or special gatherings.',
      consejoEyebrow: 'Tip',
      consejoH3: 'Bring a light layer',
      consejoP: 'Cuenca is at altitude and the weather can change quickly. Even on sunny days, a light jacket and sun protection make the walk more comfortable.'
    },
    llegar: {
      eyebrow: 'Detailed transport',
      h2: 'Reach the center, continue on foot',
      p: [
        'On foot: if you are already in the Historic Center, the park is a natural reference point. The streets Simón Bolívar, Mariscal Sucre, Benigno Malo and Luis Cordero shape its immediate surroundings.',
        'Taxi / app: ask for “Parque Calderón” or “Catedral Nueva”; drop-off is usually on one of the perimeter streets, depending on closures and center traffic.',
        'City bus: several routes cross the center. It is best to get off at a nearby stop and walk the last stretch.',
        'Bicycle: the center is compact; park outside pedestrian crossings and respect circulation zones.'
      ],
      mapTitle: 'Map of Parque Calderón',
      mapLinkText: 'View Parque Calderón on Google Maps ↗'
    },
    entradas: {
      costoEyebrow: 'Tickets / cost',
      costoH2: 'The square is free',
      costoP: 'Access to Parque Calderón requires no ticket. Nearby churches, museums, viewpoints or terraces may have their own fees, schedules and conditions; check on site before entering.',
      parkEyebrow: 'Parking',
      parkH2: 'Better off the square',
      parkP: 'There is no parking inside the park. The Historic Center has private lots and regulated street zones nearby; with narrow streets, traffic and possible restrictions, it is usually easier to park a few blocks away and walk.'
    },
    comer: {
      eyebrow: 'Flavors around',
      h2: 'Where to eat nearby',
      subtitle: 'The square is surrounded by cafés and restaurants; schedules and menus may change.',
      cards: [
        ['Trattoria Murano', 'Italian', 'Across from Parque Calderón; a convenient spot for pasta or pizza in the heart of the center.'],
        ['El Confesionario', 'Fusion / international', 'Near the square, known for pairing food with a privileged view of the historic surroundings.'],
        ['Majoni', 'Bistro', 'On the corner of Benigno Malo and Simón Bolívar, facing the park; a good stop for dinner and desserts.']
      ]
    },
    cerca: {
      eyebrow: 'A few steps away',
      h2: 'What to see nearby',
      cards: [
        ['Catedral de la Inmaculada Concepción (New Cathedral)', 'The “Catedral Nueva”, with its blue domes, dominates one side of the square.'],
        ['Old Cathedral (El Sagrario)', 'One of the essential historic churches for understanding Cuenca’s religious and urban evolution.'],
        ['Calle Larga and the Tomebamba River', 'An ideal corridor linking architecture, museums, cafés and views over the ravine.']
      ]
    },
    faq: {
      eyebrow: 'Frequently asked questions',
      h2: 'FAQ',
      items: [
        ['Is there a cost to enter Parque Calderón?', 'No. It is an open public space and access to the park is free. Nearby attractions such as terraces or museums may charge their own fee.'],
        ['What is the best time to visit?', 'The morning offers soft light and a calmer atmosphere; late afternoon the square comes alive and the architecture glows warm.'],
        ['How long should you stay?', 'Between 45 and 90 minutes is enough to walk the park at ease, see the New Cathedral and connect with the Historic Center.'],
        ['Is there parking at the park?', 'There is no parking inside the square. Use private lots in the Historic Center and continue on foot.'],
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
        { title: 'On foot from the Historic Center', body: 'The park is the natural reference point of the center. The streets Simón Bolívar, Mariscal Sucre, Benigno Malo and Luis Cordero border its immediate surroundings; from almost anywhere in the historic center you arrive in a few minutes on foot.' },
        { title: 'Taxi or ride app', body: 'Ask for “Parque Calderón” or “Catedral Nueva”. Drop-off is usually on one of the perimeter streets, depending on closures and center traffic. Confirm the price before boarding if you are not using an app.' },
        { title: 'City bus', body: 'Several urban routes cross the center. Get off at a nearby stop and walk the last stretch; ask the driver for the most convenient point for your route.' },
        { title: 'By bicycle', body: 'The center is compact and flat at its core. Leave the bike off the pedestrian crossings and respect circulation zones and the cobbled streets.' }
      ],
      mapTitle: 'Map of Parque Calderón',
      mapLinkText: 'View Parque Calderón on Google Maps ↗',
      faqEyebrow: 'Frequently asked questions',
      faqH2: 'FAQ: getting there',
      items_faq: [
        ['Is Parque Calderón far from the airport?', 'Mariscal Lamar Airport is about 10–15 minutes by taxi from the center. From there, a short ride leaves you a few blocks from the park.'],
        ['Can you get there by public transport?', 'Yes. Several city bus routes cross the Historic Center; get off nearby and walk the last stretch to the square.'],
        ['Where to park?', 'There is no parking inside the square. Use private lots in the Historic Center and walk a few blocks.'],
        ['How much does a taxi to the center cost?', 'Fares vary; confirm the price before boarding or use a ride app to avoid surprises.']
      ]
    },
    horarios: {
      eyebrow: 'Practical information',
      h1: 'Hours and facts about Parque Calderón',
      intro: 'Parque Calderón is a permanent public space. Here are the practical details you need to plan your visit to the heart of Cuenca.',
      cards: [
        ['Hours', 'Open 24 hours, every day of the year.'],
        ['Entry', 'Free. No ticket is required to walk the park.'],
        ['Best time', 'Early morning for soft light; afternoon for atmosphere and photos.'],
        ['Recommended duration', '45–90 minutes to explore at ease.'],
        ['Altitude', '≈ 2,548 m above sea level.'],
        ['Location', 'Historic Center of Cuenca, Azuay, Ecuador.']
      ],
      faqEyebrow: 'Frequently asked questions',
      faqH2: 'FAQ: hours',
      items_faq: [
        ['What time does Parque Calderón open?', 'The park is free access and open 24 hours; it has no opening or closing time.'],
        ['Are there days it is closed?', 'No. As an open public space, it remains accessible every day, although some nearby services do keep hours.'],
        ['How much time should you spend?', 'Between 45 and 90 minutes is enough to walk it, see the New Cathedral and connect with the historic center.'],
        ['What time of year is best?', 'Cuenca has a mild climate year-round; bring a light layer for quick changes, especially at sunset.']
      ]
    }
  }
};
