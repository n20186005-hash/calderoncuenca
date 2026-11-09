import type { TopicContent } from '../topic-types';

export const transporteTopics: TopicContent[] = [
  {
    slug: 'desde-aeropuerto-cuenca',
    group: 'transporte',
    priority: 'P0',
    navTitle: 'Desde el aeropuerto',
    card: 'Opciones de traslado desde el aeropuerto de Cuenca y cómo cerrar el último tramo hasta la plaza.',
    title: 'Del aeropuerto de Cuenca al Parque Calderón: cómo llegar',
    description: 'Cómo ir del aeropuerto Mariscal Lamar de Cuenca al Parque Calderón: taxi o app, transporte autorizado, bus y último tramo a pie, con lo que hay que confirmar antes de salir.',
    h1: 'Del aeropuerto de Cuenca al Parque Calderón',
    lead: 'El aeropuerto de Cuenca está dentro del área urbana, pero el traslado hasta el Centro Histórico depende del tráfico, del horario y de las condiciones de servicio del día. Esta página organiza las opciones y, sobre todo, enumera lo que debes confirmar antes de dar por válido un tiempo o una tarifa.',
    sections: [
      {
        h2: 'Punto de partida y destino',
        paragraphs: [
          'El punto de partida es el aeropuerto Mariscal Lamar y el destino es la plaza situada en el corazón del Centro Histórico, entre las calles Simón Bolívar, Mariscal Sucre, Benigno Malo y Luis Cordero. No es un trayecto que pueda describirse como una sola línea recta: la última parte se resuelve en el entramado de calles del centro.',
          'Por eso conviene separar dos decisiones: cómo llegar al centro y dónde termina exactamente el vehículo. Un punto de descenso legal puede no estar frente a la plaza, y el tramo final suele hacerse a pie.'
        ]
      },
      {
        h2: 'Opciones de traslado',
        paragraphs: [
          'La opción más directa es un taxi o un vehículo de app, pidiendo como referencia «Parque Calderón». Acuerda el precio o verifica la estimación en la aplicación antes de subir y confirma con el conductor un punto de descenso permitido ese día.',
          'También puede haber servicios de transporte autorizados en el aeropuerto y opciones de bus urbano con combinación a pie. Esta guía no verifica una línea, un intervalo, una parada ni una tarifa vigente: son datos que cambian y que deben consultarse al operador o en la información oficial del aeropuerto.'
        ],
        bullets: [
          'Taxi o app de transporte: confirmar precio y punto de descenso.',
          'Servicios autorizados del aeropuerto: consultar disponibilidad en llegadas.',
          'Bus urbano: preguntar por ruta, parada y horario para tu origen.',
          'Traslado privado o del alojamiento: acordar la dirección exacta de bajada.'
        ]
      },
      {
        h2: 'Qué confirmar antes de salir',
        paragraphs: [
          'Cuatro datos conviene tener claros antes de abandonar la terminal: el medio de transporte elegido, el precio o la forma de calcularlo, el punto de descenso y si el destino final exige caminar por calles con restricciones. Sin ellos, un trayecto corto puede alargarse por una parada inadecuada.',
          'Si llegas con equipaje, valora dejarlo primero en el alojamiento. Moverse por el centro histórico con maletas y luego buscar dónde descender suele ser menos cómodo que ordenar el traslado en dos pasos.'
        ],
        note: 'Esta guía no publica tiempos de viaje ni tarifas actuales: dependen del tráfico, del horario y del operador, y no han sido verificados aquí.'
      },
      {
        h2: 'El último tramo a pie',
        paragraphs: [
          'Una vez en el centro, la plaza funciona como referencia visual: las cúpulas azules de la Catedral Nueva ayudan a orientarse. Revisa los cruces y el estado del pavimento, especialmente si llueve o si vas con niños, con equipaje o con movilidad reducida.',
          'La guía de calles y accesos de este sitio describe con más detalle cómo está estructurado el entorno inmediato y qué comprobar en cada cruce.'
        ]
      },
      {
        h2: 'Si el vuelo llega de noche',
        paragraphs: [
          'En llegadas nocturnas cambian dos cosas: la disponibilidad de transporte y las condiciones del último tramo a pie. Confirma antes de volar si tu alojamiento ofrece traslado y qué servicio opera a esa hora.',
          'Recuerda que la ficha de Google Maps indicaba 24 horas para el parque en una consulta de octubre de 2026, pero ese dato no garantiza iluminación, servicios ni seguridad nocturna, y el anuncio municipal de reapertura no fija un horario permanente.'
        ]
      }
    ],
    faqs: [
      { q: '¿Cuánto se tarda del aeropuerto al Parque Calderón?', a: 'No publicamos un tiempo de viaje: depende del tráfico, del medio elegido y del punto de descenso. Consulta al operador o a la aplicación de transporte el día de tu llegada y añade el tramo final a pie.' },
      { q: '¿Cuánto cuesta un taxi desde el aeropuerto?', a: 'Las tarifas varían y esta guía no ha verificado un importe vigente. Confirma el precio antes de subir o utiliza una app que muestre la estimación, y pregunta si hay recargos por horario o equipaje.' },
      { q: '¿Hay un bus directo desde el aeropuerto hasta el parque?', a: 'No verificamos aquí una línea directa, una parada ni un intervalo. Pregunta en información del aeropuerto o al operador urbano por la ruta y la parada vigentes para tu origen.' },
      { q: '¿Se puede ir caminando desde el aeropuerto?', a: 'No es la opción que esta guía recomienda como plan general: implica un trayecto urbano previo y un último tramo por calles del centro. Valora un medio de transporte hasta el centro y caminar solo el tramo final.' }
    ],
    related: ['desde-terminal-terrestre', 'transporte-publico', 'donde-estacionar', 'calles-y-accesos', 'donde-alojarse-centro-historico'],
    sources: ['municipio', 'inpc', 'maps'],
    mentions: ['Aeropuerto Mariscal Lamar', 'Parque Calderón', 'Catedral Nueva de Cuenca'],
    mapsQuery: 'Parque Calderón, Cuenca, Ecuador'
  },
  {
    slug: 'desde-terminal-terrestre',
    group: 'transporte',
    priority: 'P0',
    navTitle: 'Desde la Terminal Terrestre',
    card: 'De la terminal de buses al centro: taxi, bus urbano, equipaje y horarios que hay que consultar.',
    title: 'De la Terminal Terrestre de Cuenca al Parque Calderón',
    description: 'Cómo llegar del Terminal Terrestre de Cuenca al Parque Calderón: taxi o app, bus urbano, gestión del equipaje y qué consultar al operador antes de iniciar el trayecto.',
    h1: 'De la Terminal Terrestre al Parque Calderón',
    lead: 'Si llegas a Cuenca en bus interprovincial, el Terminal Terrestre es tu punto de partida. El centro histórico está a un trayecto urbano de distancia y la decisión práctica no es solo qué vehículo tomar, sino cómo gestionar el equipaje y el último tramo a pie.',
    sections: [
      {
        h2: 'Al llegar a la terminal',
        paragraphs: [
          'Antes de elegir transporte, ubica la salida, los servicios autorizados de taxi o app y el punto de información de la terminal. En una ciudad que recibe viajeros de muchas rutas, conviene confirmar el destino con el nombre completo: «Parque Calderón, Centro Histórico».',
          'Si tu alojamiento está en el centro, suele ser más cómodo ir primero a dejar el equipaje. Caminar por el casco histórico con maletas grandes añade cruces, bordillos y pavimento irregular a un trayecto que ya es urbano.'
        ]
      },
      {
        h2: 'Taxi o app de transporte',
        paragraphs: [
          'Es la opción más directa: pide la plaza como destino y confirma con el conductor un punto legal de descenso para ese día. Acuerda el precio antes de salir o comprueba la estimación en la aplicación; las condiciones de circulación del centro pueden obligar a bajar a unas calles de distancia.',
          'Esta guía no verifica una parada concreta, un tiempo de viaje ni una tarifa. Son datos que dependen del tráfico, de las restricciones y del operador, y deben confirmarse en el momento.'
        ]
      },
      {
        h2: 'Bus urbano y otras combinaciones',
        paragraphs: [
          'El bus urbano puede ser una alternativa, pero exige dos consultas previas: qué línea y parada sirven para tu origen ese día, y cuál es el horario vigente. Pregunta en la terminal o al operador; no des por buena una ruta copiada de una guía antigua.',
          'Después queda el tramo final a pie. Revisa los cruces y la accesibilidad de ese último recorrido si viajas con niños, con equipaje o con movilidad reducida; la guía de transporte público explica cómo plantear esa consulta.'
        ],
        bullets: [
          'Confirmar línea, parada y horario con el operador.',
          'Preguntar por el punto de descenso más cercano al centro.',
          'Revisar el tramo final a pie antes de bajar.',
          'Evitar rutas y tarifas tomadas de folletos antiguos.'
        ]
      },
      {
        h2: 'Ir a pie: por qué no es el plan directo',
        paragraphs: [
          'La distancia entre la terminal y el Centro Histórico se recorre por calles urbanas con tráfico. No es un paseo por el casco antiguo ni una ruta peatonal señalizada que esta guía pueda recomendar sin verificarla.',
          'Si quieres caminar, hazlo dentro del centro una vez llegues: desde la plaza se enlazan a pie catedrales, plazas y Calle Larga con mucho más sentido turístico.'
        ]
      },
      {
        h2: 'Horarios, llegadas nocturnas y avisos',
        paragraphs: [
          'La disponibilidad de transporte cambia según la hora del bus que te deja en Cuenca. Si llegas tarde, confirma antes del viaje qué opciones funcionan a esa hora y si tu alojamiento ofrece recogida.',
          'Ya en la plaza, recuerda que el horario de 24 horas que Google Maps mostraba en octubre de 2026 es un dato de la ficha, no un horario confirmado por la administración ni una garantía de servicios o seguridad nocturna.'
        ]
      }
    ],
    faqs: [
      { q: '¿Cuánto cuesta ir de la Terminal Terrestre al Parque Calderón?', a: 'No se publica una tarifa verificada en esta guía. Confirma el precio con el taxi o en la app antes de subir, y pregunta al operador por el coste del bus urbano el día de tu viaje.' },
      { q: '¿Qué bus urbano llega al parque?', a: 'No verificamos aquí una línea, una parada ni un intervalo. Consulta en la terminal o al operador la ruta vigente para tu origen y comprueba el último tramo a pie.' },
      { q: '¿Puedo dejar el equipaje en algún sitio?', a: 'Esta guía no verifica servicios de custodia de equipaje en la terminal ni en la plaza. Pregunta en la terminal y, si es posible, deja las maletas primero en tu alojamiento.' },
      { q: '¿Es mejor ir directo al parque o al hotel?', a: 'Si llegas con equipaje, suele ser más práctico pasar antes por el alojamiento y volver al centro a pie. Así el paseo por el casco histórico no depende de maletas ni de un punto de descenso improvisado.' }
    ],
    related: ['desde-aeropuerto-cuenca', 'transporte-publico', 'calles-y-accesos', 'donde-estacionar', 'donde-alojarse-centro-historico'],
    sources: ['municipio', 'visitCuenca', 'maps'],
    mentions: ['Terminal Terrestre de Cuenca', 'Parque Calderón', 'Centro Histórico de Cuenca'],
    mapsQuery: 'Parque Calderón, Cuenca, Ecuador'
  },
  {
    slug: 'donde-estacionar',
    group: 'transporte',
    priority: 'P0',
    navTitle: 'Dónde estacionar',
    card: 'Por qué no hay una plaza garantizada y cómo verificar tarifa, horario y descenso legal.',
    title: 'Dónde estacionar cerca del Parque Calderón, Cuenca',
    description: 'Estacionamiento cerca del Parque Calderón: no hay una plaza garantizada en la plaza. Tipos de parqueaderos, cómo verificar tarifas y horarios, descenso legal y por qué conviene llegar sin coche.',
    h1: 'Dónde estacionar cerca del Parque Calderón',
    lead: 'La respuesta honesta es que esta guía no ha confirmado una ubicación, disponibilidad, tarifa ni ruta accesible desde un aparcamiento junto al parque. En un centro histórico, prometer «hay sitio» sería engañoso. Lo útil es explicar cómo buscar una opción legal y verificarla para tu fecha.',
    sections: [
      {
        h2: 'No des por hecho que hay sitio',
        paragraphs: [
          'El Parque Calderón es una plaza pública rodeada de calles con tráfico y de edificios de uso cívico y religioso. No hay una playa de estacionamiento propia del parque que esta guía pueda documentar, y las condiciones de circulación pueden cambiar por actos, obras o instrucciones locales.',
          'La disponibilidad de plazas varía según la hora y el día. Un sitio que funcionó un martes por la mañana puede no existir un domingo con actividad en el centro, así que cualquier plan que dependa de aparcar «justo al lado» necesita una alternativa.'
        ],
        note: 'Esta guía no confirma ningún parqueadero concreto, ni su precio, ni su horario, ni que queden plazas libres. Todos esos datos deben verificarse el día de la visita.'
      },
      {
        h2: 'Tipos de opciones a considerar',
        paragraphs: [
          'Sin recomendar negocios concretos, conviene distinguir categorías: parqueaderos públicos o privados de pago, estacionamiento vinculado a un alojamiento, y zonas de aparcamiento en la periferia del centro desde las que se continúa a pie o en transporte.',
          'Cada categoría resuelve un problema distinto. El vinculado al hotel simplifica la logística si te alojas en el centro; el de la periferia reduce vueltas por calles estrechas; el de pago céntrico depende por completo de disponibilidad y de las tarifas del día.'
        ],
        bullets: [
          'Parqueaderos de pago: confirmar horario, tarifa, forma de pago y si hay cupo.',
          'Estacionamiento del alojamiento: preguntar antes de reservar si está incluido.',
          'Aparcar fuera del centro y continuar a pie, en bus o en taxi.',
          'Descenso breve de pasajeros: acordar un punto legal con el conductor.'
        ]
      },
      {
        h2: 'Cómo verificar tarifa y horario',
        paragraphs: [
          'Cuando encuentres una opción, pregunta cuatro cosas: precio por hora o por fracción, horario de atención, si admite el tipo de vehículo que llevas y qué forma de pago acepta. Pide el comprobante y conserva la hora de entrada.',
          'No uses como referencia tarifas de folletos turísticos antiguos ni precios publicados en reseñas sin fecha. En esta materia, un dato de 2016 no describe 2026.'
        ]
      },
      {
        h2: 'Descenso legal y último tramo',
        paragraphs: [
          'Si alguien te acerca en coche, pide al conductor que confirme un punto legal de descenso para ese día. Evita detenerte en pasos peatonales, esquinas o zonas señalizadas; el último tramo hasta la plaza se hace caminando.',
          'Ese tramo es relevante si viajas con niños, con movilidad reducida o con equipaje: conviene comprobar cruces, bordillos y estado del pavimento. La guía de accesibilidad y la de calles y accesos amplían este punto.'
        ]
      },
      {
        h2: 'La alternativa más sencilla: llegar sin coche',
        paragraphs: [
          'Para una visita al Centro Histórico, taxi, app, bus urbano o caminar desde el alojamiento suelen eliminar por completo el problema del estacionamiento. El centro es compacto y la plaza es un excelente punto de partida peatonal.',
          'Si vienes de fuera de la ciudad, una combinación práctica es dejar el vehículo en el alojamiento o en una zona periférica y usar transporte para el centro. Así el tiempo se invierte en el paseo y no en buscar plaza.'
        ]
      }
    ],
    faqs: [
      { q: '¿El Parque Calderón tiene estacionamiento propio?', a: 'Esta guía no ha confirmado un estacionamiento propio del parque, ni su ubicación, disponibilidad o tarifa. Consulta al conductor o a la administración local una opción legal para tu fecha.' },
      { q: '¿Cuánto cuesta aparcar cerca?', a: 'No publicamos precios sin verificar. Pregunta en el parqueadero por la tarifa del día, el horario, la forma de pago y si hay plazas disponibles antes de entrar.' },
      { q: '¿Se puede aparcar en la calle junto a la plaza?', a: 'No lo damos por supuesto. Las condiciones de circulación y estacionamiento del centro cambian y pueden estar señalizadas; respeta la señalización y confirma un punto legal de descenso.' },
      { q: '¿Dónde dejar el coche si visito el centro histórico?', a: 'Valora el estacionamiento de tu alojamiento o una zona de la periferia del centro y continúa a pie o en transporte. Reduce las vueltas por calles estrechas y evita depender de una plaza inexistente junto a la plaza.' }
    ],
    related: ['calles-y-accesos', 'transporte-publico', 'tranvia-y-caminata', 'desde-aeropuerto-cuenca', 'donde-alojarse-centro-historico'],
    sources: ['municipio', 'inpc', 'maps'],
    mentions: ['Parque Calderón', 'Centro Histórico de Cuenca'],
    mapsQuery: 'Parque Calderón, Cuenca, Ecuador'
  },
  {
    slug: 'transporte-publico',
    group: 'transporte',
    priority: 'P0',
    navTitle: 'Bus urbano',
    card: 'Cómo consultar rutas, paradas y horarios vigentes sin inventar líneas ni intervalos.',
    title: 'Llegar en bus urbano al Parque Calderón, Cuenca',
    description: 'Transporte público hasta el Parque Calderón de Cuenca: cómo consultar líneas, paradas y horarios vigentes, el último tramo a pie y alternativas cuando el bus no acerca a la plaza.',
    h1: 'Llegar al Parque Calderón en transporte público',
    lead: 'El bus urbano es una opción razonable para moverse por Cuenca, pero esta guía no verifica una línea, una parada, un intervalo ni una tarifa. Eso no es una omisión: es la decisión correcta cuando el dato cambia y no se ha comprobado. Aquí tienes el método para obtenerlo con fiabilidad.',
    sections: [
      {
        h2: 'Qué se puede afirmar sin inventar',
        paragraphs: [
          'El Parque Calderón está en el Centro Histórico y funciona como referencia del centro. Cualquier servicio urbano que te deje en las inmediaciones exigirá un tramo final a pie por calles como Simón Bolívar, Mariscal Sucre, Benigno Malo o Luis Cordero.',
          'Lo que no se puede afirmar es qué número de línea, qué parada exacta o qué frecuencia sirven para tu origen hoy. Esos datos pertenecen al operador y a la señalización vigente, no a una guía de viaje estática.'
        ],
        note: 'Si una web te da un número de línea sin fecha de consulta, trátalo como orientativo y contrástalo antes de salir.'
      },
      {
        h2: 'Cómo consultar la ruta vigente',
        paragraphs: [
          'Empieza por el canal del operador o por los puntos de información municipal y de la terminal; pregunta por una ruta que te acerque al Centro Histórico y por la parada más conveniente. Anota la hora de la consulta y, si es posible, pide el nombre de la parada por escrito.',
          'Después valida el tramo final en un mapa: desde esa parada hasta la plaza debe haber un recorrido peatonal claro, con cruces señalizados. Este paso evita bajar en un punto aparentemente cercano pero separado por una vía de circulación intensa.'
        ],
        bullets: [
          'Preguntar al operador por línea, parada y horario vigentes.',
          'Confirmar el sentido del recorrido, no solo el número.',
          'Revisar en el mapa el tramo final a pie y sus cruces.',
          'Consultar formas de pago y posibles cambios de servicio.',
          'Dejar margen si el plan depende de un horario ajustado.'
        ]
      },
      {
        h2: 'El último tramo a pie',
        paragraphs: [
          'Una vez en el centro, la plaza se reconoce por el monumento central, la glorieta y las cúpulas azules de la Catedral Nueva. Camina por pasos señalizados y respeta las zonas de circulación: el casco histórico combina tráfico, peatones y pavimento de distintas épocas.',
          'Si vas con niños, con equipaje o con movilidad reducida, revisa antes ese tramo. La guía de accesibilidad detalla qué mejoras se han comunicado y qué queda sin verificar.'
        ]
      },
      {
        h2: 'Pago, horarios y cambios de servicio',
        paragraphs: [
          'Las tarifas, los medios de pago y los horarios son datos que esta guía no confirma. Pregúntalos el mismo día: un servicio puede tener frecuencias distintas en fin de semana, feriados o actos en el centro.',
          'Tampoco se ha verificado aquí una ruta accesible completa. Si necesitas ascensos, rampas o asistencia, consúltalo directamente con el operador y con el recinto al que vayas a entrar.'
        ]
      },
      {
        h2: 'Cuándo conviene otra opción',
        paragraphs: [
          'Si llegas de noche, con lluvia, con equipaje o con un horario cerrado, un taxi o una app de transporte simplifica el trayecto y elimina la incertidumbre de la combinación. El tranvía es otra alternativa a considerar, siempre con una caminata final planificada.',
          'La página central de cómo llegar reúne todas las opciones; las guías por origen (aeropuerto, terminal, estacionamiento) desarrollan los casos concretos.'
        ]
      }
    ],
    faqs: [
      { q: '¿Qué línea de bus llega al Parque Calderón?', a: 'Esta guía no verifica una línea, parada ni intervalo concretos. Consulta al operador o a los puntos de información la ruta vigente para tu origen y revisa después el tramo final a pie.' },
      { q: '¿Cuánto cuesta el bus urbano?', a: 'No publicamos una tarifa sin comprobación. Pregunta al operador o en el punto de información por el coste y las formas de pago del día.' },
      { q: '¿El bus deja frente a la plaza?', a: 'No se puede dar por supuesto. Confirma la parada y calcula el último tramo a pie, incluidos los cruces de las calles del entorno.' },
      { q: '¿Existe una ruta en transporte público totalmente accesible?', a: 'No se ha verificado aquí una ruta accesible completa. Consulta al operador por el material y las paradas, y revisa el itinerario concreto con quien te acompañe.' }
    ],
    related: ['tranvia-y-caminata', 'desde-terminal-terrestre', 'desde-aeropuerto-cuenca', 'calles-y-accesos', 'donde-estacionar'],
    sources: ['municipio', 'visitCuenca', 'maps'],
    mentions: ['Parque Calderón', 'Centro Histórico de Cuenca'],
    mapsQuery: 'Parque Calderón, Cuenca, Ecuador'
  },
  {
    slug: 'tranvia-y-caminata',
    group: 'transporte',
    priority: 'P0',
    navTitle: 'Tranvía y caminata',
    card: 'Cómo combinar el Tranvía de Cuenca con el paseo final hasta la plaza y qué verificar en el plano oficial.',
    title: 'Tranvía de Cuenca y caminata al Parque Calderón',
    description: 'Cómo combinar el Tranvía de Cuenca con una caminata hasta el Parque Calderón: por qué no llega a la plaza, cómo planificar la combinación y qué paradas y tarifas confirmar.',
    h1: 'Del Tranvía de Cuenca al Parque Calderón a pie',
    lead: 'El Tranvía de Cuenca es una infraestructura de transporte de la ciudad, pero no deja al viajero en la puerta del Parque Calderón. La visita se resuelve como una combinación: un tramo en tranvía y un paseo final por el centro. Planificar ese último tramo es lo que hace útil esta página.',
    sections: [
      {
        h2: 'El tranvía no entra en la plaza',
        paragraphs: [
          'El trazado del tranvía discurre por ejes urbanos y sus paradas atienden otros sectores de la ciudad. La plaza pertenece al trazado histórico peatonal del centro, así que el último tramo se hace caminando, no bajando frente al monumento.',
          'Conviene decirlo con claridad porque es el error más frecuente al planificar: buscar «la parada del Parque Calderón» en el plano del tranvía puede llevar a elegir una parada cómoda para el tranvía pero poco cómoda para llegar a pie.'
        ],
        note: 'Esta guía no enumera paradas, frecuencias ni tarifas del tranvía: consúltalas en el plano y los canales oficiales del servicio antes de viajar.'
      },
      {
        h2: 'Cómo planificar la combinación',
        paragraphs: [
          'Primero identifica la parada más conveniente según tu origen en el plano oficial vigente. Después traza en un mapa el recorrido a pie desde esa parada hasta la plaza y comprueba que los cruces sean claros y estén señalizados.',
          'El orden importa: elegir la parada mirando solo la distancia en línea recta suele ignorar desniveles, vías de tráfico y calles de mayor circulación. Un recorrido unos minutos más largo pero más sencillo suele ser mejor para una primera visita.'
        ],
        bullets: [
          'Consultar el plano oficial de paradas y el sentido del recorrido.',
          'Confirmar horarios, frecuencias y forma de pago del servicio.',
          'Trazar el tramo a pie y revisar sus cruces antes de salir.',
          'Prever un plan alternativo si el servicio está limitado por actos.'
        ]
      },
      {
        h2: 'La caminata final por el centro',
        paragraphs: [
          'El tramo final es también una oportunidad: permite reconocer el cambio de escala entre los ejes urbanos y las calles del casco histórico. Las calles Simón Bolívar, Mariscal Sucre, Benigno Malo y Luis Cordero estructuran el entorno inmediato de la plaza.',
          'Camina con calma y usa las cúpulas azules de la Catedral Nueva como referencia visual. Si llueve, el pavimento puede estar resbaladizo; si hace sol, conviene llevar protección y agua para el paseo.'
        ]
      },
      {
        h2: 'Cuándo conviene y cuándo no',
        paragraphs: [
          'La combinación tranvía más caminata tiene sentido si ya usas ese medio para moverte por la ciudad o si tu alojamiento está cerca de una parada. Permite evitar buscar estacionamiento y reduce la dependencia del tráfico del centro.',
          'Si llegas con equipaje, de noche, con lluvia intensa o con movilidad reducida, un taxi o una app hasta un punto de descenso legal puede ser más sencillo. Evalúa el tramo final con tus necesidades reales, no con la distancia teórica.'
        ]
      },
      {
        h2: 'Verificación antes de salir',
        paragraphs: [
          'Paradas, horarios, tarifas y posibles modificaciones del servicio son datos del operador. Compruébalos el día de la visita y no los tomes de folletos antiguos: la Ruta Francesa de 2016 sirve aquí solo como referencia de las calles del centro.',
          'Una vez en la plaza, recuerda que el horario de 24 horas mostrado por Google Maps en octubre de 2026 no es un horario confirmado por la administración ni una garantía de condiciones nocturnas.'
        ]
      }
    ],
    faqs: [
      { q: '¿El tranvía llega hasta el Parque Calderón?', a: 'No deja al viajero en la plaza: hay que combinar con un tramo a pie. Consulta el plano oficial de paradas y traza el recorrido final antes de salir.' },
      { q: '¿Cuál es la parada más cercana?', a: 'Esta guía no verifica una parada concreta. Elige la más conveniente en el plano oficial vigente y comprueba que el tramo a pie hasta la plaza tenga cruces claros y señalizados.' },
      { q: '¿Cuánto cuesta el tranvía?', a: 'No publicamos tarifas sin verificar. Consulta los canales oficiales del servicio por el precio y la forma de pago del día.' },
      { q: '¿Es una buena opción para ir con niños o con equipaje?', a: 'Depende del tramo final. Si el paseo es corto y con cruces sencillos, puede funcionar bien; con equipaje, lluvia o necesidades de accesibilidad, valora un taxi o una app hasta un punto de descenso legal.' }
    ],
    related: ['transporte-publico', 'calles-y-accesos', 'donde-estacionar', 'desde-aeropuerto-cuenca', 'ruta-medio-dia'],
    sources: ['visitCuenca', 'folleto', 'maps'],
    mentions: ['Tranvía de Cuenca', 'Parque Calderón', 'Centro Histórico de Cuenca'],
    mapsQuery: 'Parque Calderón, Cuenca, Ecuador'
  },
  {
    slug: 'calles-y-accesos',
    group: 'transporte',
    priority: 'P0',
    navTitle: 'Calles y accesos',
    card: 'Las cuatro calles que enmarcan la plaza, cómo orientarse y qué revisar en cada cruce.',
    title: 'Calles y accesos alrededor del Parque Calderón, Cuenca',
    description: 'Calles que rodean el Parque Calderón: Simón Bolívar, Mariscal Sucre, Benigno Malo y Luis Cordero. Cómo orientarse, cruces, pavimento y accesos a los recintos del centro.',
    h1: 'Calles y accesos del Parque Calderón',
    lead: 'La plaza no está aislada: se entiende por las cuatro calles que la enmarcan y por los edificios que dan a ellas. Conocer ese marco ayuda a orientarse, a elegir por dónde entrar y a distinguir los accesos públicos de los recintos con horario propio.',
    sections: [
      {
        h2: 'Las cuatro calles de referencia',
        paragraphs: [
          'La Ruta Francesa publicada por la Fundación Municipal de Turismo para Cuenca sitúa el parque entre las calles Simón Bolívar, Mariscal Sucre, Benigno Malo y Luis Cordero. Esa referencia de 2016 se usa aquí solo para ubicar el conjunto, no como fuente de horarios o tarifas.',
          'Usarlas como brújula resuelve una duda frecuente: por qué dos personas que «están en el parque» se citan en esquinas distintas. Antes de quedar, conviene precisar el lado de la plaza y un elemento visible, como la glorieta o la fachada de la Catedral Nueva.'
        ],
        bullets: [
          'Simón Bolívar y Mariscal Sucre: ejes de referencia del entorno.',
          'Benigno Malo y Luis Cordero: completan el marco de la plaza.',
          'Punto de encuentro recomendado: un elemento visible dentro del parque.',
          'Dirección orientativa: 4X3W+26J, Mariscal Sucre, Cuenca.'
        ]
      },
      {
        h2: 'Cómo orientarse al llegar',
        paragraphs: [
          'Las cúpulas azules de la Catedral Nueva son la referencia visual más reconocible del conjunto. Desde cualquier calle del borde se puede identificar el lado de la plaza hacia el que conviene dirigirse y, a partir de ahí, decidir si se entra al parque o se rodea.',
          'Un mapa es útil para el tramo previo, pero dentro de la plaza manda la observación: monumento central, glorieta, árboles y fachadas permiten situarse sin depender de la señal del teléfono.'
        ]
      },
      {
        h2: 'Cruces, pavimento y circulación',
        paragraphs: [
          'El entorno combina circulación de vehículos, pasos peatonales y pavimento de distintas épocas. El Municipio informó de mejoras de pavimento y elementos podotáctiles en la intervención de 2026, pero eso no equivale a una auditoría de todos los cruces ni de los accesos desde cada calle.',
          'Cruza por los pasos señalizados y revisa el estado del suelo si ha llovido. Para una ruta con necesidades de accesibilidad, comprueba el itinerario concreto: la guía de accesibilidad separa lo comunicado de lo pendiente de verificar.'
        ]
      },
      {
        h2: 'Accesos a los recintos del entorno',
        paragraphs: [
          'Las puertas de la Catedral Nueva, del Museo Catedral Vieja y de otros espacios no son accesos al parque: pertenecen a recintos con administración, horarios, posibles tarifas y normas de visita propias. Que la plaza esté abierta no implica que esos interiores lo estén.',
          'Si tu plan incluye entrar, identifica la puerta correcta antes de rodear la manzana y confirma las condiciones del día. Es una comprobación breve que evita confundir dos templos que, además, suelen mezclarse en las reseñas de viaje.'
        ]
      },
      {
        h2: 'Usar la plaza como punto de partida',
        paragraphs: [
          'Una vez situado, el parque funciona como kilómetro cero de un recorrido a pie: plazas de las Flores y San Francisco, Calle Larga y la ribera del Tomebamba aparecen en las rutas oficiales de la ciudad. Elegir una dirección y mantenerla evita volver sobre los mismos pasos.',
          'Las guías de rutas de este sitio proponen puntos de inicio y fin concretos para 30 minutos, 1 hora, medio día y un día, con indicación de qué tramos son espacios públicos y cuáles dependen de horarios de recintos.'
        ]
      }
    ],
    faqs: [
      { q: '¿Entre qué calles está el Parque Calderón?', a: 'La Ruta Francesa de 2016 lo sitúa entre Simón Bolívar, Mariscal Sucre, Benigno Malo y Luis Cordero. Esa publicación se usa aquí como referencia de ubicación, no de horarios o tarifas actuales.' },
      { q: '¿Cuál es la dirección exacta?', a: 'Como referencia orientativa se usa el Plus Code 4X3W+26J, Mariscal Sucre, Cuenca, Azuay, Ecuador. Para navegar, abre la ficha de Google Maps enlazada en esta guía.' },
      { q: '¿Se puede acceder a la plaza desde cualquier lado?', a: 'El parque es un espacio público, pero los cruces y las condiciones de cada acceso pueden variar por actos, obras o señalización. Usa los pasos peatonales y comprueba el estado del tramo que vayas a recorrer.' },
      { q: '¿Las puertas de las catedrales dan al parque?', a: 'Los recintos tienen accesos propios, con horarios y posibles tarifas independientes del parque. Identifica la puerta correcta y confirma las condiciones de visita el día de tu recorrido.' }
    ],
    related: ['accesibilidad', 'donde-estacionar', 'tranvia-y-caminata', 'ruta-30-minutos', 'cerca/catedral-nueva'],
    sources: ['folleto', 'inpc', 'maps'],
    mentions: ['Parque Calderón', 'Catedral Nueva de Cuenca', 'Calle Larga'],
    mapsQuery: 'Parque Calderón, Cuenca, Ecuador'
  }
];
