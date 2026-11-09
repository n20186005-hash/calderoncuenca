import type { TopicContent } from '../topic-types';

export const practicoTopics: TopicContent[] = [
  {
    slug: 'reapertura-2026',
    group: 'practico',
    priority: 'P0',
    navTitle: 'Reapertura 2026',
    card: 'Fecha de la reapertura, qué obras se anunciaron y qué no confirma el aviso municipal.',
    title: 'Reapertura del Parque Calderón 2026: fecha, obras y qué confirmar',
    description: 'El Parque Calderón de Cuenca reabrió el 28 de octubre de 2026. Qué informó el Municipio el 29 de octubre, qué no dice ese anuncio y cómo verificar el acceso antes de ir.',
    h1: 'Reapertura del Parque Calderón en 2026',
    lead: 'El Parque Calderón volvió a abrir al público tras una intervención municipal en 2026. Esta página recoge la fecha, la fuente del anuncio y, sobre todo, los límites de lo que esa noticia permite afirmar: una reapertura no equivale a un horario permanente ni a la garantía de que todas las zonas estén disponibles todos los días.',
    sections: [
      {
        h2: 'La fecha y la fuente',
        paragraphs: [
          'El Municipio de Cuenca informó el 29 de octubre de 2026 que el parque había reabierto oficialmente el 28 de octubre, después de completar los trabajos en sus cuatro cuadrantes y en la glorieta. La noticia municipal es la referencia primaria para fechar este hecho; esta guía es independiente y no sustituye a los canales oficiales.',
          'Como la información de obra y acceso cambia con el tiempo, conviene conservar la fecha del aviso junto al dato. Por eso cada página de esta guía indica el día de revisión editorial y distingue entre lo anunciado, lo observado en Google Maps y lo que queda por confirmar en el lugar.'
        ],
        bullets: [
          'Reapertura oficial: 28 de octubre de 2026, según el Municipio.',
          'Publicación del anuncio municipal: 29 de octubre de 2026.',
          'Ámbito de la obra comunicado: cuatro cuadrantes y glorieta.',
          'Revisión editorial de esta página: 9 de noviembre de 2026.'
        ]
      },
      {
        h2: 'Qué confirma el anuncio y qué no',
        paragraphs: [
          'El anuncio confirma que la intervención concluyó y que el parque se reinauguró. No fija un horario de apertura permanente, no describe la programación de actos futuros y no establece las condiciones de las catedrales, museos, terrazas o criptas que rodean la plaza: son recintos con administración, horarios y posibles tarifas propias.',
          'Tampoco permite dar por garantizada la seguridad nocturna ni la ausencia de cierres puntuales. Google Maps mostraba un horario de 24 horas en la consulta manual del 30 de octubre de 2026, pero ese dato de la ficha no es un horario confirmado por la administración del parque.'
        ],
        note: 'Regla de esta guía: una fecha de reapertura es un hecho fechado, no una promesa de acceso continuo. Comprueba los avisos locales para el día concreto de tu visita.'
      },
      {
        h2: 'Qué se comunicó sobre la intervención',
        paragraphs: [
          'Entre las mejoras difundidas por el Municipio se mencionan trabajos de pavimento y elementos podotáctiles. Se trata de información general sobre la obra, no de una auditoría de accesibilidad de todo el itinerario: no describe uno por uno los cruces, desniveles, rampas ni accesos interiores.',
          'Si necesitas una ruta accesible concreta, la verificación debe hacerse sobre el recorrido que vas a realizar y, cuando haga falta, con la administración o con quien te acompañe. En la página de accesibilidad de esta guía se detalla qué está y qué no está comprobado.'
        ]
      },
      {
        h2: 'Cómo mantener el dato al día',
        paragraphs: [
          'Una noticia de octubre de 2026 puede dejar de describir la situación real si después hay mantenimiento, actos o nuevas instrucciones locales. Antes de desplazarte, contrasta tres cosas: avisos municipales recientes, la ficha del lugar en un mapa y, si tu plan incluye un recinto cerrado, el canal de ese recinto.',
          'Esta guía conserva el registro de la reapertura y su fecha en lugar de reescribirla como si fuera información permanentemente vigente. Así se evita borrar el historial y, al mismo tiempo, se evita presentar un dato antiguo como actual.'
        ],
        bullets: [
          'Avisos del Municipio de Cuenca para tu fecha.',
          'Ficha de Google Maps: orientativa y sujeta a cambios.',
          'Canales propios de catedrales y museos si entras a alguno.',
          'Señalización y personal en la plaza el día de la visita.'
        ]
      },
      {
        h2: 'Fotografías y estado actual',
        paragraphs: [
          'La fotografía de portada de este sitio fue tomada en 2017 y no documenta las reformas de 2026. Es un registro histórico de la plaza y la Catedral Nueva, útil como referencia visual del conjunto, pero no como prueba del pavimento, la glorieta o el mobiliario actuales.',
          'Para valorar el estado presente, prioriza la señalización, las fuentes oficiales fechadas y lo que veas al llegar. Ninguna imagen de archivo debería usarse para decidir si un acceso está practicable hoy.'
        ]
      }
    ],
    faqs: [
      { q: '¿Cuándo reabrió el Parque Calderón?', a: 'El Municipio de Cuenca informó el 29 de octubre de 2026 de que la reapertura oficial había tenido lugar el 28 de octubre, tras los trabajos en los cuatro cuadrantes y la glorieta. Esa es la fecha del hecho comunicado, no un calendario de acceso futuro.' },
      { q: '¿Está abierto las 24 horas desde la reapertura?', a: 'Google Maps mostraba 24 horas en una consulta manual del 30 de octubre de 2026. El anuncio municipal de reapertura no fija un horario permanente, así que conviene comprobar avisos y restricciones para tu fecha, especialmente de noche.' },
      { q: '¿La foto de la portada muestra el parque remodelado?', a: 'No. Es una fotografía de 2017, anterior a la intervención de 2026. Se conserva como imagen histórica del conjunto y está etiquetada como tal; no documenta el pavimento ni la glorieta actuales.' },
      { q: '¿Puede volver a cerrarse por actos o mantenimiento?', a: 'Sí, es posible: los espacios públicos pueden tener cierres puntuales por mantenimiento, eventos o instrucciones locales. La reapertura de octubre de 2026 no garantiza acceso continuo; revisa los avisos del día.' }
    ],
    related: ['entrada-precios', 'mejor-hora-visitar', 'accesibilidad', 'transformaciones-historicas', 'cuanto-tiempo-visitar'],
    sources: ['municipio', 'inpc', 'maps'],
    mentions: ['Parque Calderón', 'Municipio de Cuenca', 'Catedral Nueva de Cuenca']
  },
  {
    slug: 'entrada-precios',
    group: 'practico',
    priority: 'P0',
    navTitle: 'Entrada y precios',
    card: 'Diferencia entre el espacio público gratuito y los recintos cercanos con condiciones propias.',
    title: 'Entrada y precios del Parque Calderón: qué es público y qué no',
    description: '¿Cuesta entrar al Parque Calderón de Cuenca? El parque es un espacio público; las catedrales, museos, terrazas y criptas cercanas tienen horarios y posibles tarifas independientes.',
    h1: 'Entrada y precios en el Parque Calderón',
    lead: 'La respuesta corta es que el Parque Calderón es un espacio público de la ciudad y que esta guía no ha confirmado ningún aviso vigente de tarifa de acceso al propio parque. La confusión aparece porque alrededor de la plaza hay recintos que sí pueden cobrar entrada: no son el parque, tienen otra administración y se rigen por sus propias condiciones.',
    sections: [
      {
        h2: 'El parque: espacio público',
        paragraphs: [
          'La plaza se usa como lugar de paso, descanso y encuentro del Centro Histórico. No hay aquí una taquilla del parque que podamos documentar ni una tarifa de acceso que esta guía pueda afirmar como vigente. Presentar un precio sin una fuente fechada sería inventar información.',
          'Eso no significa que todo lo que ocurra en la plaza sea gratuito: ferias, actos, visitas guiadas o actividades organizadas por terceros pueden tener condiciones específicas. Lo que cuenta es quién organiza cada actividad, no el hecho de que se desarrolle junto al parque.'
        ],
        note: 'Esta guía no publica precios sin verificar. Si ves una tarifa en una web de terceros, contrástala con el canal oficial del recinto antes de presupuestarla.'
      },
      {
        h2: 'Visitas cercanas que pueden tener coste',
        paragraphs: [
          'La Catedral Nueva, sus terrazas o criptas, el Museo Catedral Vieja y otros museos del centro son visitas distintas del parque. Cada uno define sus horarios, si cobra entrada, si admite fotografía y qué zonas se pueden recorrer. Que la plaza esté abierta no implica que esos espacios lo estén.',
          'Un folleto turístico de 2016 que circula sobre las rutas del centro sirve para situar calles y monumentos, pero no es una fuente válida de horarios o tarifas de 2026. Los precios y las condiciones de visita son de los datos que antes caducan.'
        ],
        bullets: [
          'Catedral Nueva y posibles accesos a terrazas o criptas: confirmar en el recinto.',
          'Museo Catedral Vieja (El Sagrario): administración y condiciones propias.',
          'Museos del Centro Histórico: cada uno con su propia taquilla.',
          'Visitas guiadas o actividades de temporada: organizadas por terceros.'
        ]
      },
      {
        h2: 'Cómo verificar una tarifa sin inventarla',
        paragraphs: [
          'El procedimiento fiable es breve: identifica el recinto concreto, busca su canal oficial o su taquilla, pregunta por el precio del día y por qué incluye, y anota la fecha de la consulta. Si solo encuentras el dato en blogs o agregadores, trátalo como orientativo.',
          'Pregunta también por las condiciones que afectan al bolsillo: si hay descuentos por edad o condición, si se admite pago con tarjeta, si la entrada cubre todas las zonas y si hay horarios distintos para cada una. Son preguntas concretas que evitan sorpresas y no requieren publicar cifras no verificadas.'
        ]
      },
      {
        h2: 'Un presupuesto sin cifras falsas',
        paragraphs: [
          'Aunque no demos importes, sí podemos señalar las partidas que casi cualquier visita al centro tiene. Organizarlas por orden de decisión ayuda más que una lista de precios desactualizados.'
        ],
        bullets: [
          'Traslado hasta el centro: taxi, app, bus o caminata, según tu origen.',
          'Entradas opcionales a recintos: solo si decides visitarlos y tras confirmar las condiciones.',
          'Comida o café: elige según carta y precios consultados el mismo día.',
          'Compras en plazas y ferias: pregunta antes y conserva el comprobante.',
          'Margen para imprevistos: actos, cambios de horario o lluvia.'
        ]
      },
      {
        h2: 'Actos especiales y condiciones del día',
        paragraphs: [
          'En fechas de celebraciones, conciertos o actos cívicos puede cambiar el uso de la plaza y la forma de acceder a los alrededores. La reapertura municipal de octubre de 2026 no modifica esa realidad: un espacio público puede tener restricciones puntuales.',
          'Si tu visita coincide con un evento, consulta los avisos locales y deja margen en el itinerario. La información práctica de esta guía se complementa con la página de horarios, que agrupa las dudas de acceso y duración.'
        ]
      }
    ],
    faqs: [
      { q: '¿Hay que pagar por entrar al Parque Calderón?', a: 'El parque es un espacio público y esta guía no ha confirmado un aviso vigente de tarifa de acceso. Las catedrales, museos, terrazas, criptas y actividades de terceros son visitas independientes y pueden tener precios propios.' },
      { q: '¿La entrada a la Catedral Nueva es gratuita?', a: 'No lo afirmamos. Es un recinto con administración propia y posibles accesos diferenciados, como terrazas o criptas. Confirma horarios, tarifas y zonas visitables en el propio recinto o en su canal oficial.' },
      { q: '¿Los niños o las personas mayores pagan entrada?', a: 'En el parque, no hay una tarifa de acceso que podamos documentar. En los recintos cercanos, los descuentos dependen de cada administración; pregúntalos en la taquilla el día de la visita.' },
      { q: '¿Sirven los precios de un folleto turístico antiguo?', a: 'No para decidir. La Ruta Francesa de 2016 se usa aquí solo como referencia de ubicación de las calles del entorno; sus horarios y tarifas no se tratan como datos actuales.' }
    ],
    related: ['reapertura-2026', 'cuanto-tiempo-visitar', 'cerca/catedral-nueva', 'cerca/catedral-vieja', 'ruta-30-minutos'],
    sources: ['municipio', 'catedralVieja', 'inpc', 'maps'],
    mentions: ['Parque Calderón', 'Catedral Nueva de Cuenca', 'Museo Catedral Vieja']
  },
  {
    slug: 'cuanto-tiempo-visitar',
    group: 'practico',
    priority: 'P0',
    navTitle: 'Cuánto tiempo quedarse',
    card: 'De una parada de 20 minutos a media mañana con catedrales y plazas: cómo dimensionar la visita.',
    title: '¿Cuánto tiempo dedicar al Parque Calderón? Guía por duración',
    description: '¿Cuánto tiempo conviene quedarse en el Parque Calderón de Cuenca? De 20 minutos a 45–90 minutos y media mañana con los alrededores, con factores que alargan o acortan la visita.',
    h1: '¿Cuánto tiempo conviene quedarse en el Parque Calderón?',
    lead: 'El parque se puede cruzar en unos minutos, pero casi nadie viene solo a cruzarlo. La duración razonable depende de si lo usas como punto de paso, como lugar de descanso o como inicio de un recorrido por el Centro Histórico. Aquí tienes tres escalas de tiempo y los factores que las modifican.',
    sections: [
      {
        h2: '20 minutos: la plaza de paso',
        paragraphs: [
          'Si vas caminando hacia otra calle del centro, una parada breve permite reconocer el monumento central, la glorieta, las fachadas que rodean la plaza y las cúpulas azules de la Catedral Nueva. Es una escala válida cuando el objetivo es orientarse y seguir.',
          'En este caso conviene no añadir recintos cerrados: entrar a una catedral o a un museo cambia por completo la duración y obliga a comprobar horarios y posibles tarifas.'
        ]
      },
      {
        h2: '45–90 minutos: la estimación orientativa de esta guía',
        paragraphs: [
          'Como estimación orientativa, esta guía propone reservar entre 45 y 90 minutos para recorrer el parque con calma, sentarse un rato, observar con detenimiento el monumento y la glorieta, mirar la Catedral Nueva desde la plaza y decidir hacia dónde seguir.',
          'No es un mínimo obligatorio ni una medición: ajusta el plan según accesos, colas, clima, actos y necesidades personales. Si vas con niños o con una persona que necesita pausas frecuentes, el tramo largo de ese intervalo suele quedarse corto.'
        ],
        note: 'Todas las duraciones de esta página son estimaciones de planificación. No sustituyen a los horarios reales de los recintos ni a las condiciones del día.'
      },
      {
        h2: 'Media mañana: parque y alrededores',
        paragraphs: [
          'El parque funciona muy bien como punto cero de un recorrido a pie por el centro: catedrales, plazas como la de las Flores o San Francisco, Calle Larga y la ribera del Tomebamba aparecen en las rutas oficiales de la ciudad. Con una o dos visitas de interior, el plan pasa fácilmente a media mañana.',
          'La clave está en elegir qué recintos vas a abrir de verdad. Cada uno añade su propio horario, posible entrada y tiempo de cola; encadenarlos todos suele convertir un paseo agradable en una carrera.'
        ],
        bullets: [
          'Una visita de interior: suma su horario y su tiempo de recorrido.',
          'Una parada de café o comida: suma el tiempo de espera del local.',
          'Fotografías detenidas o un acto en la plaza: suma un margen amplio.',
          'Lluvia o cambios de temperatura: puede acortar la parte al aire libre.'
        ]
      },
      {
        h2: 'Qué alarga o acorta la visita',
        paragraphs: [
          'Además de los recintos, hay factores que no aparecen en ningún folleto y que determinan cuánto estarás realmente en la plaza. Conviene tenerlos en cuenta antes de fijar una hora de comida o un traslado posterior.'
        ],
        bullets: [
          'Avisos y restricciones de acceso del día.',
          'Afluencia en horas de salida de oficinas, misas o eventos.',
          'Clima de altura: sol fuerte, lluvia repentina o frío al caer la tarde.',
          'Necesidades del grupo: descansos, sombra, agua, pasos peatonales.',
          'Fotografía: esperar luz o despejar encuadres añade tiempo.'
        ]
      },
      {
        h2: 'Cómo encajarlo en un día en Cuenca',
        paragraphs: [
          'Si solo tienes una mañana, coloca el parque al inicio y reserva el resto para uno o dos lugares concretos. Si tienes el día completo, puedes volver a pasar por la plaza al final del recorrido, cuando la luz y el ambiente han cambiado.',
          'Para planes ya estructurados, esta guía publica rutas de 30 minutos, 1 hora, medio día y un día con puntos de inicio y fin, y distingue en cada una los espacios públicos de los recintos con condiciones propias.'
        ]
      }
    ],
    faqs: [
      { q: '¿Bastan 30 minutos para ver el Parque Calderón?', a: 'Sí, para reconocer la plaza, el monumento, la glorieta y las fachadas principales. Si quieres sentarte, observar con calma o entrar a un recinto cercano, la estimación orientativa de esta guía es de 45–90 minutos.' },
      { q: '¿Cuánto tiempo añade visitar una catedral o un museo?', a: 'Depende del recinto, de sus horarios, de las colas y de las zonas abiertas ese día. Compruébalo en su canal oficial o en la taquilla y añade ese tiempo al plan, en lugar de aplicar una cifra general.' },
      { q: '¿Vale la pena ir solo al parque?', a: 'Como parada breve, sí: es un buen punto de orientación del Centro Histórico. Como destino único de un día completo, gana mucho combinado con las rutas a pie por las plazas y calles cercanas.' },
      { q: '¿Cambia la duración si voy con niños?', a: 'Normalmente sí. Los descansos, el agua, la sombra y los cruces alrededor de la plaza hacen que el tramo largo de la estimación sea más realista. Consulta también la guía de visita con niños.' }
    ],
    related: ['ruta-30-minutos', 'ruta-1-hora', 'ruta-medio-dia', 'mejor-hora-visitar', 'visitar-con-ninos'],
    sources: ['visitCuenca', 'maps'],
    mentions: ['Parque Calderón', 'Calle Larga', 'río Tomebamba']
  },
  {
    slug: 'mejor-hora-visitar',
    group: 'practico',
    priority: 'P0',
    navTitle: 'Mejor hora para ir',
    card: 'Luz, afluencia, clima de Cuenca y qué puede y qué no puede garantizarse de noche.',
    title: 'Mejor hora para visitar el Parque Calderón en Cuenca',
    description: '¿Cuál es la mejor hora para visitar el Parque Calderón? Cómo decidir según luz diurna, avisos del día, clima de Cuenca y afluencia, sin prometer franjas sin gente ni seguridad nocturna.',
    h1: 'Elegir la mejor hora para el Parque Calderón',
    lead: 'No existe una hora universalmente mejor: depende de qué quieras hacer en la plaza, del clima de ese día y de los avisos vigentes. Esta página te da criterios para decidir, y señala con claridad lo que una ficha de mapa no puede garantizar.',
    sections: [
      {
        h2: 'La respuesta corta',
        paragraphs: [
          'Para una primera visita, planifica con luz diurna y después de revisar avisos locales y la previsión del tiempo. Es una recomendación de planificación, no la promesa de una franja sin aglomeraciones: la iluminación, el tránsito y los actos cambian de un día a otro.',
          'Si tu prioridad es caminar y orientarte, la mañana y las primeras horas de la tarde suelen ser más fáciles de gestionar. Si buscas fotografía, la decisión depende de la orientación de las fachadas y de la luz del momento, no de una hora fija publicada en una guía.'
        ]
      },
      {
        h2: 'Luz, sombra y fotografía',
        paragraphs: [
          'La plaza está rodeada de edificios altos y de árboles; los contrastes de luz y sombra cambian rápido. Antes de elegir hora para fotografiar, observa desde qué lado quieres la Catedral Nueva y el monumento, y deja margen para volver a pasar si la luz no acompaña.',
          'En Cuenca el sol puede ser intenso aun con temperatura fresca, y una nube cambia la escena en minutos. Llevar protección solar y una capa ligera es más útil que intentar acertar con una hora perfecta.'
        ]
      },
      {
        h2: 'Afluencia y actos',
        paragraphs: [
          'La plaza es un lugar de paso cotidiano, no un recinto con aforo controlado. Misas, actos cívicos, ferias o simplemente la salida de oficinas pueden concentrar gente y modificar los accesos. Ninguna fuente consultada por esta guía garantiza una franja vacía.',
          'Si encuentras un acto en curso, tómalo como parte de la visita o rodea la plaza y vuelve más tarde. Consultar los avisos municipales antes de salir reduce mucho las sorpresas.'
        ]
      },
      {
        h2: 'El clima de Cuenca manda',
        paragraphs: [
          'Cuenca está en un valle andino y el tiempo puede cambiar en el transcurso de un paseo corto. La lluvia, el sol fuerte y el descenso de temperatura al final de la tarde influyen más en la comodidad que la elección de una hora exacta.',
          'Consulta la previsión para tu fecha y adapta el plan: si amenaza lluvia, reserva los recintos cubiertos con horarios confirmados para la parte central del día y deja la plaza para los claros.'
        ],
        bullets: [
          'Capa ligera y protección solar incluso en días que parecen templados.',
          'Calzado cómodo para pavimento que puede estar mojado.',
          'Plan alternativo bajo techo para los chubascos.',
          'Margen extra si vas con niños o con personas que necesitan pausas.'
        ]
      },
      {
        h2: 'De noche: qué dice Maps y qué no se puede garantizar',
        paragraphs: [
          'Google Maps indicaba 24 horas en la consulta manual del 30 de octubre de 2026. Ese dato describe la ficha del lugar, no un horario confirmado por la administración, y no dice nada sobre iluminación, presencia de servicios o seguridad nocturna.',
          'La reapertura municipal anunciada en octubre de 2026 tampoco establece un horario permanente. Si piensas ir de noche, comprueba los avisos del día, valora ir acompañado y no des por supuesto que las catedrales, museos o terrazas estén abiertos.'
        ],
        note: 'Esta guía no garantiza seguridad nocturna, ausencia de aglomeraciones ni disponibilidad de servicios en ninguna franja horaria.'
      }
    ],
    faqs: [
      { q: '¿Cuál es la mejor hora para visitar el Parque Calderón?', a: 'Con luz diurna y tras comprobar avisos y previsión del tiempo. Es un criterio de planificación: esta guía no garantiza una franja sin gente, ni iluminación, ni servicios en un horario concreto.' },
      { q: '¿Está abierto de noche?', a: 'Google Maps mostraba 24 horas en una consulta manual de octubre de 2026, pero el anuncio municipal de reapertura no fija un horario permanente. Revisa los avisos para tu fecha y no des por garantizadas la seguridad ni la iluminación.' },
      { q: '¿Conviene ir temprano para evitar gente?', a: 'Puede ayudar, pero no es una garantía: actos, misas y actividad vecinal cambian la afluencia. Mejor decide según tu objetivo y deja un margen para volver a pasar por la plaza.' },
      { q: '¿Qué hago si llueve a la hora prevista?', a: 'Consulta la guía de visita con lluvia: reorganiza el día alrededor de recintos cubiertos con horarios confirmados y aprovecha los claros para la plaza.' }
    ],
    related: ['mejores-fotos', 'visitar-con-lluvia', 'ruta-30-minutos', 'cuanto-tiempo-visitar', 'reapertura-2026'],
    sources: ['municipio', 'maps', 'visitCuenca'],
    mentions: ['Parque Calderón', 'Catedral Nueva de Cuenca']
  },
  {
    slug: 'accesibilidad',
    group: 'practico',
    priority: 'P0',
    navTitle: 'Accesibilidad',
    card: 'Pavimento y elementos podotáctiles comunicados, y todo lo que aún hay que verificar sobre el terreno.',
    title: 'Accesibilidad en el Parque Calderón: lo verificado y lo que falta',
    description: 'Accesibilidad del Parque Calderón de Cuenca: mejoras de pavimento y elementos podotáctiles anunciados, entrada accesible en Maps y límites de esa información para planificar una ruta real.',
    h1: 'Accesibilidad en el Parque Calderón',
    lead: 'Hay datos positivos sobre la intervención de 2026, pero no equivalen a un itinerario accesible auditado de principio a fin. Esta página separa lo que las fuentes dicen, lo que ninguna fuente verifica y lo que conviene comprobar antes de desplazarse.',
    sections: [
      {
        h2: 'Lo que informan las fuentes',
        paragraphs: [
          'El Municipio de Cuenca comunicó mejoras de pavimento y elementos podotáctiles en la intervención que precedió a la reapertura del 28 de octubre de 2026. Google Maps, por su parte, marca una entrada accesible en la ficha del lugar.',
          'Son indicios útiles para empezar a planificar. Sin embargo, describen elementos puntuales: no constituyen una certificación de accesibilidad de toda la plaza ni de los recorridos que llevan hasta ella.'
        ],
        bullets: [
          'Pavimento renovado, según el aviso municipal de 2026.',
          'Elementos podotáctiles mencionados en la misma comunicación.',
          'Entrada accesible señalada en la ficha de Google Maps.'
        ]
      },
      {
        h2: 'Lo que ninguna fuente verifica',
        paragraphs: [
          'Ni el anuncio municipal ni la ficha de mapa describen uno por uno los cruces de las calles del entorno, los desniveles, las rampas, los accesos interiores de los edificios o los servicios. Tampoco verifican que exista una ruta continua y practicable desde un estacionamiento o una parada de transporte.',
          'Afirmar que todo el recorrido es accesible sería extrapolar. La recomendación honesta es verificar la ruta concreta que vas a hacer y la asistencia que necesitas, en lugar de dar por buena una etiqueta general.'
        ],
        note: 'Esta guía no describe el parque como «totalmente accesible». Solo recoge lo comunicado y señala lo pendiente de comprobación.'
      },
      {
        h2: 'Cómo preparar tu ruta concreta',
        paragraphs: [
          'Define primero el punto de llegada (taxi, bus, tranvía o aparcamiento) y el recorrido exacto hasta la plaza. Después comprueba los cruces de las calles Simón Bolívar, Mariscal Sucre, Benigno Malo y Luis Cordero, que estructuran el entorno inmediato.',
          'Si vas a entrar a una catedral o a un museo, pregunta por separado: cada recinto tiene sus propias condiciones de acceso, ascensores, rampas y servicios. La accesibilidad del espacio público no se traslada automáticamente al interior.'
        ],
        bullets: [
          'Identifica el punto de descenso legal más cercano a tu plan.',
          'Comprueba cruces, bordillos y estado del pavimento en el tramo final.',
          'Pregunta al recinto por rampas, ascensores y servicios adaptados.',
          'Prevé pausas, sombra y agua; la altura y el clima influyen en el esfuerzo.',
          'Confirma la asistencia disponible con quien organice tu visita.'
        ]
      },
      {
        h2: 'Descenso, estacionamiento y último tramo',
        paragraphs: [
          'Esta guía no ha confirmado una ubicación de estacionamiento, una tarifa ni una ruta accesible desde un aparcamiento. Tampoco verifica una parada concreta de taxi o bus. Conviene acordar el punto de descenso con el conductor o con la administración local para tu fecha.',
          'En la práctica, el último tramo suele resolverse a pie por calles del centro. Revisarlo con antelación en un mapa y, si es posible, con alguien que conozca la zona, evita depender de una suposición.'
        ]
      },
      {
        h2: 'Una nota sobre el Centro Histórico',
        paragraphs: [
          'El parque forma parte del conjunto histórico de Cuenca, un entorno urbano vivido y con edificaciones de distintas épocas. Eso explica que la accesibilidad sea desigual: una plaza renovada puede convivir con aceras estrechas o accesos antiguos en las calles cercanas.',
          'Las fichas del Instituto Nacional de Patrimonio Cultural y las rutas oficiales de turismo ayudan a entender el conjunto, pero no sustituyen a la comprobación del itinerario que tú vas a realizar.'
        ]
      }
    ],
    faqs: [
      { q: '¿El Parque Calderón es accesible en silla de ruedas?', a: 'El Municipio informó de mejoras de pavimento y elementos podotáctiles, y Google Maps marca una entrada accesible. Ninguna de esas fuentes verifica todos los cruces, desniveles, rampas o accesos interiores de un itinerario completo, así que confirma tu ruta concreta.' },
      { q: '¿Hay rampas y baños accesibles?', a: 'No hay una verificación publicada en las fuentes consultadas por esta guía. Pregúntalo en el recinto que vayas a visitar y comprueba el estado de los cruces del entorno antes de desplazarte.' },
      { q: '¿Se puede llegar en transporte público con una ruta accesible?', a: 'No se ha verificado aquí una línea, parada ni ruta accesible completa. Consulta al operador el servicio vigente y revisa el tramo final a pie; la guía de transporte público recoge cómo hacer esa consulta.' },
      { q: '¿A quién preguntar antes de ir?', a: 'A la administración local para avisos y condiciones de la plaza, al operador de transporte para paradas y descensos, y a cada catedral o museo para sus accesos interiores.' }
    ],
    related: ['calles-y-accesos', 'donde-estacionar', 'visitar-con-ninos', 'reapertura-2026', 'centro-historico-patrimonio'],
    sources: ['municipio', 'inpc', 'maps'],
    mentions: ['Parque Calderón', 'Centro Histórico de Cuenca']
  },
  {
    slug: 'visitar-con-ninos',
    group: 'practico',
    priority: 'P0',
    navTitle: 'Visitar con niños',
    card: 'Pausas, sombra, agua, cruces de calle y clima: lo que de verdad importa al ir en familia.',
    title: 'Visitar el Parque Calderón con niños: consejos prácticos',
    description: 'Cómo visitar el Parque Calderón de Cuenca con niños: duración corta, descansos, sombra, agua, cruces alrededor de la plaza, clima de altura y combinación con otros lugares del centro.',
    h1: 'El Parque Calderón con niños',
    lead: 'Una plaza céntrica es una parada cómoda para una familia, siempre que se planifique como parada corta y no como una sucesión de visitas de interior. Estas son las necesidades reales que conviene resolver antes de llegar.',
    sections: [
      {
        h2: 'Una parada corta que funciona',
        paragraphs: [
          'El parque ofrece espacio para caminar, sentarse y observar el movimiento de la ciudad sin comprometer a una hora concreta de entrada. Para niños pequeños suele funcionar mejor como punto de descanso entre dos tramos del paseo que como destino único.',
          'Mantén el plan flexible: la estimación orientativa de 45–90 minutos de esta guía puede quedarse corta si aparecen pausas, o larga si el grupo llega cansado. Es preferible terminar con ganas de volver que agotar el recorrido.'
        ]
      },
      {
        h2: 'Cruces y calles alrededor de la plaza',
        paragraphs: [
          'El entorno inmediato está estructurado por las calles Simón Bolívar, Mariscal Sucre, Benigno Malo y Luis Cordero. Son calles de centro histórico con tráfico y pasos peatonales: conviene cruzar por los pasos señalizados y no dejar que la plaza se interprete como una zona sin coches.',
          'Si el grupo es numeroso, acordad un punto de encuentro visible dentro de la plaza antes de separaros. Es una medida sencilla que evita búsquedas innecesarias en horas de más afluencia.'
        ],
        bullets: [
          'Cruzar siempre por pasos señalizados.',
          'Acordar un punto de encuentro dentro de la plaza.',
          'Evitar que los niños se adelanten hacia las calles del borde.',
          'Revisar el pavimento si está mojado tras la lluvia.'
        ]
      },
      {
        h2: 'Sombra, agua y pausas',
        paragraphs: [
          'Los árboles y los soportales del entorno dan sombra, pero la disponibilidad de bancos libres cambia según la hora. Lleva agua y prevé pausas cortas en lugar de una sola parada larga al final.',
          'Esta guía no verifica la existencia, ubicación ni horario de baños públicos, fuentes de agua o zonas de juego concretas en la plaza. Si son necesarios para tu plan, localízalos y confirma su estado antes de depender de ellos.'
        ],
        note: 'No damos por supuestos servicios que no hemos comprobado: baños, fuentes, juegos infantiles o zonas de cambio deben confirmarse en el lugar.'
      },
      {
        h2: 'Clima y ropa en Cuenca',
        paragraphs: [
          'Cuenca está en altura y el clima puede cambiar durante un paseo corto. Sol intenso, chubasco y descenso de temperatura al caer la tarde pueden aparecer el mismo día. Una capa ligera, protección solar y calzado cómodo resuelven la mayoría de las situaciones.',
          'Si llueve, el pavimento puede quedar resbaladizo y la plaza pierde parte de su atractivo para jugar. En ese caso, acorta la estancia al aire libre y pasa a la parte cubierta del itinerario.'
        ]
      },
      {
        h2: 'Cómo combinarlo con otros lugares',
        paragraphs: [
          'Una secuencia razonable es parque, una plaza cercana y una parada de comida o café, sin encadenar varios museos. Las rutas cortas de esta guía proponen puntos de inicio y fin claros y distinguen los espacios públicos de los recintos con horarios y posibles entradas.',
          'Si el día se complica, volver al parque al final del recorrido es un buen cierre: es un lugar de paso y no exige reserva ni compra previa.'
        ]
      }
    ],
    faqs: [
      { q: '¿Es un plan adecuado para niños?', a: 'Sí, como parada corta de descanso y orientación dentro de un paseo por el centro. Conviene ajustar la duración, prever pausas y vigilar los cruces de las calles que rodean la plaza.' },
      { q: '¿Hay juegos infantiles o zona de juegos?', a: 'Esta guía no ha verificado la existencia ni el estado de juegos infantiles en la plaza. No lo damos por supuesto: comprueba la señalización y las condiciones del lugar al llegar.' },
      { q: '¿Dónde hay baños o fuentes de agua?', a: 'No hay una ubicación verificada en las fuentes consultadas. Lleva agua y consulta en los locales o recintos que visites, que tienen sus propias condiciones de acceso.' },
      { q: '¿Es recomendable ir con niños por la noche?', a: 'No damos por garantizadas la iluminación ni la seguridad nocturna. Maps indicaba 24 horas en una consulta de octubre de 2026, pero el anuncio municipal no fija un horario permanente; mejor planificar con luz diurna.' }
    ],
    related: ['accesibilidad', 'cuanto-tiempo-visitar', 'ruta-30-minutos', 'cerca/plaza-de-las-flores', 'visitar-con-lluvia'],
    sources: ['municipio', 'maps', 'visitCuenca'],
    mentions: ['Parque Calderón', 'Centro Histórico de Cuenca']
  }
];
