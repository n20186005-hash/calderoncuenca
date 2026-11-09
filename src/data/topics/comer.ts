import type { TopicContent } from '../topic-types';

export const comerTopics: TopicContent[] = [
  {
    slug: 'cerca/restaurantes',
    group: 'comer',
    priority: 'P1',
    navTitle: 'Restaurantes cerca',
    card: 'Cómo elegir dónde comer tras la visita sin publicar nombres de locales no verificados.',
    title: 'Restaurantes cerca del Parque Calderón, Cuenca',
    description: 'Dónde comer cerca del Parque Calderón de Cuenca: cómo elegir restaurante por zona, tipo de comida, carta y horarios verificados el mismo día, y en qué orden combinar comida y visita.',
    h1: 'Comer cerca del Parque Calderón',
    lead: 'Esta guía no publica una lista de restaurantes concretos: no hemos verificado nombres, cartas, precios ni si cada local sigue abierto. En cambio, ofrece un método para elegir bien sobre el terreno, que es lo que de verdad resuelve la decisión de un visitante en el centro histórico.',
    sections: [
      {
        h2: 'Por qué no damos nombres de locales',
        paragraphs: [
          'Los negocios cambian de dueño, de horario, de carta y a veces cierran. Una recomendación sin fecha se convierte pronto en un dato falso, y en un centro turístico ese error se propaga rápido de una web a otra.',
          'La alternativa responsable es explicar qué comprobar antes de sentarte: que el local esté abierto, qué ofrece ese día, cuánto cuesta y si puede atender las necesidades de tu grupo. Eso sí es verificable en el momento.'
        ],
        note: 'Publicar un nombre de restaurante, un precio o un horario sin comprobarlo sería inventar información. Esta página es una guía de decisión, no un directorio.'
      },
      {
        h2: 'Zonas y tipos de oferta',
        paragraphs: [
          'En el entorno del parque y en las calles que bajan hacia Calle Larga y el Tomebamba es razonable encontrar opciones de comida de mediodía, cocina ecuatoriana, menús del día, cafés y locales de comida rápida. La distribución exacta cambia y debe comprobarse caminando.',
          'Piensa primero en el tipo de comida que necesitas, no en el nombre del sitio: un almuerzo completo, algo ligero entre visitas, una opción para compartir o una comida adaptada a una dieta concreta.'
        ],
        bullets: [
          'Almuerzo o menú del día: preguntar qué incluye y hasta qué hora se sirve.',
          'Cocina ecuatoriana y platos regionales: consultar la carta del día.',
          'Opciones ligeras o para llevar: útiles entre dos visitas de interior.',
          'Dietas específicas: confirmar ingredientes y preparación antes de pedir.'
        ]
      },
      {
        h2: 'Qué comprobar antes de sentarte',
        paragraphs: [
          'Cuatro comprobaciones rápidas evitan casi todas las sorpresas: que el local esté abierto en ese momento, que la carta y los precios estén visibles, que pueda atender tu número de personas y que acepte la forma de pago que llevas.',
          'Si viajas con niños o con personas con necesidades de accesibilidad, añade dos preguntas más: si hay sitio cómodo para el grupo y si el acceso y los servicios se ajustan a lo que necesitáis.'
        ],
        bullets: [
          'Horario de cocina y último turno de comida.',
          'Carta y precios del día, no de una foto antigua.',
          'Opciones para dietas, alergias o porciones infantiles.',
          'Formas de pago admitidas y si se puede pedir cuenta por separado.',
          'Acceso, asientos y servicios para tu grupo.'
        ]
      },
      {
        h2: 'Orden recomendado de la visita',
        paragraphs: [
          'Para una primera vez funciona bien visitar el parque y las catedrales por el exterior con luz de mañana, comer alrededor de la mitad del recorrido y dejar la parte final para plazas y un paseo más tranquilo.',
          'Evita fijar la comida justo antes de un recinto con horario ajustado: si hay cola o el servicio se alarga, pierdes la visita. Deja margen y usa la pausa como parte del itinerario, no como una parada rígida.'
        ]
      },
      {
        h2: 'Responsabilidad y espacio público',
        paragraphs: [
          'Si optas por comida para llevar, no bloquees pasos peatonales ni dejes residuos en la plaza: el parque es un espacio público compartido y forma parte de un centro histórico habitado.',
          'Pregunta por las normas del local y respeta la señalización de terrazas y accesos. Estas decisiones pequeñas son las que permiten que el centro siga siendo agradable para vecinos y visitantes.'
        ]
      }
    ],
    faqs: [
      { q: '¿Qué restaurantes hay junto al Parque Calderón?', a: 'Esta guía no publica nombres de locales sin haber verificado apertura, carta y precios. Recorre las calles del entorno, consulta las cartas visibles y elige según lo que necesites ese día.' },
      { q: '¿Cuánto cuesta comer cerca del parque?', a: 'No damos precios sin comprobarlos. Pide la carta con importes antes de sentarte y pregunta qué incluye el menú del día.' },
      { q: '¿Hay opciones vegetarianas o para dietas especiales?', a: 'Puede haberlas, pero depende del local y del día. Confirma ingredientes, preparación y posibles alternativas directamente antes de pedir.' },
      { q: '¿Conviene comer antes o después de visitar el parque?', a: 'Suele funcionar mejor a mitad del recorrido, con margen. Así no condicionas una visita de interior con horario ajustado a la duración de la comida.' }
    ],
    related: ['cerca/cafeterias', 'cerca/comida-tipica', 'cerca/desayunos', 'cerca/hoteles', 'ruta-medio-dia'],
    sources: ['visitCuenca', 'maps'],
    mentions: ['Parque Calderón', 'Centro Histórico de Cuenca', 'Calle Larga'],
    mapsQuery: 'restaurantes cerca del Parque Calderón, Cuenca, Ecuador'
  },
  {
    slug: 'cerca/cafeterias',
    group: 'comer',
    priority: 'P1',
    navTitle: 'Cafeterías cerca',
    card: 'Dónde hacer una pausa con café o algo dulce y qué verificar antes de sentarse.',
    title: 'Cafeterías cerca del Parque Calderón, Cuenca',
    description: 'Cafés y cafeterías cerca del Parque Calderón de Cuenca: cómo elegir una pausa con café, chocolate o algo dulce, qué horarios y cartas confirmar y cómo integrar el descanso en la ruta.',
    h1: 'Una pausa de café junto al Parque Calderón',
    lead: 'Una visita al centro histórico se disfruta más con una pausa. Esta página no enumera cafeterías concretas porque no hemos verificado nombres, aperturas ni cartas; en su lugar, explica cómo encontrar una opción adecuada y qué comprobar antes de pedir.',
    sections: [
      {
        h2: 'Qué tipo de pausa necesitas',
        paragraphs: [
          'No es lo mismo parar diez minutos a tomar un café de pie que sentarse media hora a descansar, cargar el teléfono o esperar a que pase un chubasco. Define primero la función de la pausa y después busca el tipo de local que la resuelve.',
          'Si vas con niños o con un grupo grande, la disponibilidad de mesas y de servicios pesa más que la variedad de la carta. Si viajas solo, quizá prefieras algo rápido y seguir caminando.'
        ],
        bullets: [
          'Pausa corta: bebida rápida y vuelta al paseo.',
          'Descanso largo: mesa, sombra o resguardo de la lluvia.',
          'Con grupo o niños: espacio, servicios y tiempo de espera.',
          'Trabajo o carga de dispositivos: preguntar por disponibilidad.'
        ]
      },
      {
        h2: 'Qué se suele encontrar y qué confirmar',
        paragraphs: [
          'En el centro de Cuenca es razonable esperar cafés, chocolate caliente, infusiones, jugos, bollería y dulces o postres de la cocina local. La oferta concreta, los precios y los ingredientes varían de un local a otro y de un día a otro.',
          'Pide la carta con importes y pregunta por opciones sin azúcar, sin lactosa o aptas para tu dieta si las necesitas. No des por supuesta una alternativa porque apareciera en una reseña antigua.'
        ],
        note: 'Esta guía no recomienda cafeterías por nombre ni publica precios: son datos que deben comprobarse el día de la visita.'
      },
      {
        h2: 'Dónde buscar y cómo orientarse',
        paragraphs: [
          'Las calles que rodean la plaza y los corredores hacia Calle Larga y la ribera del Tomebamba concentran buena parte del paseo turístico del centro. Un recorrido corto a pie permite comparar varias opciones antes de decidir.',
          'Usa un mapa para localizar lo que hay cerca de tu posición y contrasta la información con la carta visible en la puerta. Las fichas de mapa son orientativas: la apertura real se confirma en el lugar.'
        ]
      },
      {
        h2: 'Cuándo hacer la pausa',
        paragraphs: [
          'Tras el parque y las catedrales por el exterior suele ser un buen momento: ya has hecho la parte más expuesta al sol y todavía quedan plazas o un museo por delante.',
          'Si el cielo se cierra, adelanta la pausa y espera el chubasco bajo techo. Cuenca cambia de tiempo con rapidez y un plan rígido de horarios suele fallar precisamente por eso.'
        ]
      },
      {
        h2: 'Combinar descanso y visita',
        paragraphs: [
          'Una pausa bien colocada divide el itinerario en dos tramos claros: plaza y monumentos antes, plazas pequeñas y calles después. Las guías de rutas de este sitio incluyen descansos en los planes de media jornada y de un día.',
          'Recuerda que las catedrales y los museos tienen horarios propios; si quieres entrar a alguno, decide antes de sentarte cuánto tiempo puedes dedicar a la pausa.'
        ]
      }
    ],
    faqs: [
      { q: '¿Qué cafeterías hay junto al Parque Calderón?', a: 'Esta guía no publica nombres sin verificar apertura, carta y precios. Recorre las calles del entorno y compara las cartas visibles antes de elegir.' },
      { q: '¿Sirven opciones sin azúcar o sin lactosa?', a: 'Depende del local. Pregunta por ingredientes y alternativas antes de pedir; no des por válida una opción mencionada en una reseña antigua.' },
      { q: '¿Cuál es el mejor momento para una pausa?', a: 'Después del parque y de las catedrales por el exterior, o cuando empiece a llover. Deja margen para no perder el horario de un recinto con entrada.' },
      { q: '¿Puedo trabajar o cargar el teléfono?', a: 'Son condiciones de cada local y de cada momento. Pregunta antes de instalarte y respeta el tiempo de estancia que te indiquen.' }
    ],
    related: ['cerca/restaurantes', 'cerca/desayunos', 'cerca/comida-tipica', 'ruta-medio-dia', 'visitar-con-lluvia'],
    sources: ['visitCuenca', 'maps'],
    mentions: ['Parque Calderón', 'Calle Larga', 'río Tomebamba'],
    mapsQuery: 'cafeterías cerca del Parque Calderón, Cuenca, Ecuador'
  },
  {
    slug: 'cerca/comida-tipica',
    group: 'comer',
    priority: 'P1',
    navTitle: 'Comida típica',
    card: 'Platos de la cocina cuencana y ecuatoriana, cómo pedirlos y qué preguntar sobre ingredientes.',
    title: 'Comida típica de Cuenca cerca del Parque Calderón',
    description: 'Qué comer en Cuenca cerca del Parque Calderón: platos de la cocina cuencana y ecuatoriana, menú del día, bebidas y cómo preguntar por ingredientes, porciones y precios sin recomendaciones inventadas.',
    h1: 'Comida típica de Cuenca junto al Parque Calderón',
    lead: 'La cocina es una parte importante de una visita al centro de Cuenca. Esta página describe familias de platos y bebidas que puedes encontrar en la región y, sobre todo, cómo pedir con criterio: ingredientes, porciones, horarios y precios se comprueban en el local, no en una guía estática.',
    sections: [
      {
        h2: 'Platos que conviene conocer',
        paragraphs: [
          'En la cocina cuencana y del austro ecuatoriano aparecen preparaciones a base de maíz y papa, sopas y guisos contundentes, carnes asadas y masas rellenas. Entre los nombres que suele encontrar un visitante están el mote pillo, los llapingachos, las humitas, los tamales, el hornado, el locro y las empanadas.',
          'En temporadas y celebraciones concretas pueden aparecer platos especiales, y en la sierra también es habitual el cuy como preparación tradicional. Ninguna lista es cerrada ni obligatoria: pregunta qué se prepara ese día y elige según tu apetito y tu dieta.'
        ],
        bullets: [
          'Maíz: mote, humitas, tamales, chicha o bebidas de la zona según el local.',
          'Papa y queso: llapingachos, locros y sopas.',
          'Carnes: hornado y otras preparaciones asadas o guisadas.',
          'Masas y bocados: empanadas, panes y dulces tradicionales.',
          'Bebidas: café, jugos de fruta e infusiones.'
        ]
      },
      {
        h2: 'Menú del día y almuerzo',
        paragraphs: [
          'El almuerzo del mediodía es una buena forma de acercarse a la cocina local sin decidir plato por plato. Suele organizarse en entrada, plato principal y bebida, pero la composición, el horario y el precio dependen de cada local.',
          'Pregunta siempre qué incluye exactamente, hasta qué hora se sirve y si hay alternativas. Evita trasladar a tu visita el precio de una reseña de años anteriores.'
        ],
        note: 'No publicamos precios ni nombres de locales. La carta, las porciones y los ingredientes deben confirmarse en el establecimiento el mismo día.'
      },
      {
        h2: 'Ingredientes, dietas y alergias',
        paragraphs: [
          'Muchos platos de la sierra incluyen queso, manteca, huevo, carne o caldos. Si sigues una dieta vegetariana, vegana, sin gluten o con alergias, explícalo antes de pedir y pregunta por la preparación, no solo por el nombre del plato.',
          'Tampoco des por supuesta la intensidad del picante o del ají: suele servirse aparte o variar según la casa. Pedir que lo sirvan separado es una solución sencilla si no estás seguro.'
        ]
      },
      {
        h2: 'Dónde y cuándo comer',
        paragraphs: [
          'El entorno del Parque Calderón y las calles que bajan hacia Calle Larga y el Tomebamba concentran el paseo turístico, así que es razonable buscar allí opciones de comida. La oferta real cambia; compruébala caminando y leyendo las cartas.',
          'Coloca la comida en la mitad del itinerario, con margen por delante y por detrás. Así no condicionas la visita a un museo o a una catedral con horario propio.'
        ]
      },
      {
        h2: 'Comer con responsabilidad',
        paragraphs: [
          'Prioriza locales que muestren carta y precios claros, pregunta por el origen de los productos si te interesa y respeta las normas del establecimiento. Si pides comida para llevar, no dejes residuos en la plaza ni bloquees pasos peatonales.',
          'La cocina local también es patrimonio cultural: acercarse a ella con curiosidad y sin dar nada por supuesto suele ser la mejor parte de la visita.'
        ]
      }
    ],
    faqs: [
      { q: '¿Qué platos típicos debo probar en Cuenca?', a: 'Entre las preparaciones habituales de la cocina cuencana y del austro están el mote pillo, los llapingachos, las humitas, los tamales, el hornado, el locro y las empanadas. Pregunta en el local qué se prepara ese día.' },
      { q: '¿Hay opciones vegetarianas?', a: 'Puede haberlas, pero muchos platos llevan carne, queso, huevo o caldos. Explica tu dieta antes de pedir y pregunta por la preparación concreta.' },
      { q: '¿Cuánto cuesta un almuerzo típico?', a: 'Esta guía no publica precios sin verificarlos. Consulta la carta o el menú del día con importes en el propio establecimiento.' },
      { q: '¿Dónde encontrar comida típica cerca del parque?', a: 'Recorre las calles del entorno de la plaza y el corredor hacia Calle Larga y el Tomebamba, compara cartas visibles y elige según horario, precio y necesidades de tu grupo.' }
    ],
    related: ['cerca/restaurantes', 'cerca/desayunos', 'cerca/cafeterias', 'ruta-un-dia', 'visitar-con-lluvia'],
    sources: ['visitCuenca', 'maps'],
    mentions: ['Cuenca', 'Parque Calderón', 'Calle Larga'],
    mapsQuery: 'comida típica cerca del Parque Calderón, Cuenca, Ecuador'
  },
  {
    slug: 'cerca/desayunos',
    group: 'comer',
    priority: 'P1',
    navTitle: 'Desayunos cerca',
    card: 'Cómo empezar el día antes de la visita y qué verificar sobre horarios de cocina.',
    title: 'Desayunos cerca del Parque Calderón, Cuenca',
    description: 'Dónde desayunar cerca del Parque Calderón de Cuenca: cómo elegir la primera comida del día, horarios de cocina a confirmar, bebidas habituales y orden recomendado antes de recorrer el centro.',
    h1: 'Desayunar antes de visitar el Parque Calderón',
    lead: 'Empezar el día con un desayuno tranquilo cambia por completo un recorrido por el centro histórico. Esta guía no nombra locales ni publica precios sin verificarlos; explica qué preguntar y cómo encajar la primera comida en el plan.',
    sections: [
      {
        h2: 'Qué suele ofrecerse',
        paragraphs: [
          'En Cuenca es habitual encontrar desayunos con café, chocolate o infusiones, pan y bollería, huevos, jugos de fruta y, en algunos locales, preparaciones de maíz o platos más contundentes de la cocina regional.',
          'La oferta concreta depende del establecimiento y del día. Pide la carta con importes y pregunta si el desayuno se sirve durante toda la mañana o solo en una franja determinada.'
        ],
        bullets: [
          'Bebidas calientes: café, chocolate, infusiones.',
          'Pan, bollería y dulces de la zona.',
          'Huevos, quesos y opciones saladas.',
          'Jugos y fruta, según temporada.',
          'Opciones sin azúcar, sin lactosa o sin gluten: preguntar.'
        ]
      },
      {
        h2: 'Horarios y disponibilidad',
        paragraphs: [
          'La hora de inicio y el final del servicio de desayuno son datos de cada local y pueden cambiar en fines de semana o feriados. Si tu plan depende de desayunar antes de una visita con horario, confírmalo la tarde anterior.',
          'No uses horarios de folletos turísticos antiguos ni de reseñas sin fecha. Una ficha de mapa es orientativa; la apertura real se comprueba en la puerta.'
        ],
        note: 'Esta guía no publica nombres de locales, cartas ni precios de desayuno sin verificación.'
      },
      {
        h2: 'Dónde buscar',
        paragraphs: [
          'Las calles que rodean el Parque Calderón y los corredores hacia otras plazas del Centro Histórico son un buen punto de partida para comparar opciones antes de decidir. Si te alojas en el centro, pregunta también en la recepción: suele conocer qué abre temprano esa semana.',
          'Camina un par de calles y compara cartas visibles. Elegir con dos o tres opciones a la vista suele dar mejor resultado que fijarse en una sola recomendación.'
        ]
      },
      {
        h2: 'Orden recomendado de la mañana',
        paragraphs: [
          'Un esquema sencillo es desayunar, llegar al parque con luz de mañana, recorrer la plaza y las catedrales por el exterior, y dejar la única visita de interior para después. Así la parte más fotografiable no depende de la cola del desayuno.',
          'Si el cielo amenaza lluvia, invierte el orden: adelanta los recintos cubiertos con horario confirmado y aprovecha los claros para la plaza.'
        ]
      },
      {
        h2: 'Con niños, grupos y necesidades especiales',
        paragraphs: [
          'Con niños conviene confirmar porciones, disponibilidad de asientos y tiempo de espera antes de sentarse. Con grupos grandes, pregunta si pueden atenderos juntos en ese horario.',
          'Si necesitas una dieta específica o un acceso sin desniveles, explícalo al llegar: son condiciones de cada establecimiento y no se pueden deducir de una guía.'
        ]
      }
    ],
    faqs: [
      { q: '¿Dónde desayunar cerca del Parque Calderón?', a: 'Esta guía no publica nombres de locales sin verificarlos. Recorre las calles del entorno de la plaza, compara cartas visibles y pregunta en tu alojamiento qué abre temprano esa semana.' },
      { q: '¿A qué hora empiezan a servir desayunos?', a: 'Depende del local y del día. Confirma el horario de cocina directamente, especialmente en fines de semana o feriados.' },
      { q: '¿Hay desayunos vegetarianos o sin gluten?', a: 'Puede haberlos, pero depende de la carta. Explica tus necesidades antes de pedir y pregunta por ingredientes y preparación.' },
      { q: '¿Es mejor desayunar antes o después del parque?', a: 'Antes suele funcionar mejor: llegas a la plaza con luz de mañana y dejas las visitas de interior para más tarde. Si llueve, adelanta los recintos cubiertos.' }
    ],
    related: ['cerca/cafeterias', 'cerca/comida-tipica', 'cerca/restaurantes', 'mejor-hora-visitar', 'ruta-1-hora'],
    sources: ['visitCuenca', 'maps'],
    mentions: ['Parque Calderón', 'Centro Histórico de Cuenca'],
    mapsQuery: 'desayunos cerca del Parque Calderón, Cuenca, Ecuador'
  },
  {
    slug: 'cerca/hoteles',
    group: 'comer',
    priority: 'P1',
    navTitle: 'Hoteles cerca',
    card: 'Cómo comparar alojamiento por ubicación, ruido, accesibilidad y presupuesto, sin nombrar hoteles.',
    title: 'Hoteles y alojamiento cerca del Parque Calderón, Cuenca',
    description: 'Cómo elegir hotel cerca del Parque Calderón de Cuenca: ubicación a pie, ruido, acceso en transporte, equipaje, presupuesto y qué confirmar antes de reservar, sin listas de hoteles no verificadas.',
    h1: 'Alojarse cerca del Parque Calderón',
    lead: 'Dormir en el Centro Histórico permite salir caminando hacia el Parque Calderón, pero también implica convivir con la actividad de un centro vivo. Esta página compara criterios de decisión en lugar de publicar nombres de hoteles que no hemos verificado.',
    sections: [
      {
        h2: 'Qué ganas y qué cedes al dormir en el centro',
        paragraphs: [
          'La ventaja principal es la proximidad: puedes llegar a la plaza sin transporte, volver a pasar al final del día y combinar la visita con catedrales, plazas y Calle Larga a pie.',
          'A cambio, conviene contar con ruido de calle, actos, campanas, circulación y edificios antiguos con accesos o ascensores desiguales. No son defectos necesariamente, pero sí factores que hay que preguntar antes de reservar.'
        ],
        bullets: [
          'A pie hasta el parque y las rutas del centro.',
          'Posible ruido por tráfico, actos o celebraciones.',
          'Edificios históricos con accesibilidad variable.',
          'Puntos de descenso para taxi o app que conviene confirmar.',
          'Menos necesidad de estacionamiento propio.'
        ]
      },
      {
        h2: 'Variables para comparar opciones',
        paragraphs: [
          'Antes de mirar el precio, ordena cinco variables: distancia real a pie hasta la plaza, tipo de calle del entorno, política de ruido y horarios, condiciones de accesibilidad del edificio y facilidad para llegar con equipaje desde el aeropuerto o la terminal.',
          'Después compara el presupuesto por noche con lo que incluye: desayuno, traslados, estacionamiento o cancelación. Un precio bajo puede dejar de serlo si añades un taxi diario o no puedes dejar el coche.'
        ],
        bullets: [
          'Distancia y cruces del trayecto hasta el parque.',
          'Orientación de la habitación y ruido nocturno.',
          'Ascensor, rampas y accesos para tu caso concreto.',
          'Punto de descenso legal y ayuda con equipaje.',
          'Qué incluye la tarifa y condiciones de cancelación.'
        ]
      },
      {
        h2: 'Ruido, actos y temporada',
        paragraphs: [
          'Una plaza céntrica puede tener programación, misas, ferias o actos cívicos. Si eres sensible al ruido, pregunta por la ubicación de la habitación respecto a la calle y por las fechas de eventos antes de reservar.',
          'Las condiciones de circulación también cambian en feriados o fines de semana, lo que afecta tanto al descenso del taxi como al tiempo de llegada desde la terminal.'
        ],
        note: 'Esta guía no verifica disponibilidad, precios, servicios ni nombres de alojamientos. Toda condición debe confirmarse con el establecimiento.'
      },
      {
        h2: 'Llegada con equipaje y transporte',
        paragraphs: [
          'Tanto desde el aeropuerto como desde la Terminal Terrestre, conviene acordar un punto de descenso legal antes de salir. En calles del centro histórico puede no ser posible detenerse frente a la puerta.',
          'Si llegas de noche, pregunta al alojamiento por el acceso y por si hay recepción en ese horario. Las guías por origen de este sitio explican cómo confirmar estas condiciones sin depender de tarifas inventadas.'
        ]
      },
      {
        h2: 'Cómo decidir según tu viaje',
        paragraphs: [
          'Para una estancia corta centrada en el centro histórico, la proximidad a la plaza suele compensar. Para una estancia más larga o con coche, puede interesar una zona con mejor conexión y menos restricciones de circulación.',
          'La guía de zonas para alojarse en el Centro Histórico compara esas alternativas por tipo de viaje, y las páginas de rutas ayudan a estimar cuánto caminarás cada día.'
        ]
      }
    ],
    faqs: [
      { q: '¿Qué hoteles hay junto al Parque Calderón?', a: 'Esta guía no publica nombres de alojamientos sin verificar disponibilidad, precios y servicios. Compara opciones por distancia a pie, ruido, accesibilidad y condiciones de llegada.' },
      { q: '¿Es ruidoso dormir en el centro histórico?', a: 'Puede haber ruido de tráfico, actos, campanas o locales. Pregunta por la orientación de la habitación y por la agenda de eventos de tus fechas antes de reservar.' },
      { q: '¿Hay hoteles accesibles?', a: 'La accesibilidad varía mucho en edificios antiguos. Pregunta por ascensor, rampas, desniveles y baños adaptados para tu caso concreto antes de confirmar la reserva.' },
      { q: '¿Necesito coche si me alojo cerca del parque?', a: 'Normalmente no para visitar el centro: la plaza y las rutas se recorren a pie. Si vienes con coche, confirma estacionamiento y un punto de descenso legal con el alojamiento.' }
    ],
    related: ['donde-alojarse-centro-historico', 'cerca/restaurantes', 'desde-aeropuerto-cuenca', 'desde-terminal-terrestre', 'donde-estacionar'],
    sources: ['visitCuenca', 'inpc', 'maps'],
    mentions: ['Parque Calderón', 'Centro Histórico de Cuenca'],
    mapsQuery: 'hoteles cerca del Parque Calderón, Cuenca, Ecuador'
  },
  {
    slug: 'donde-alojarse-centro-historico',
    group: 'comer',
    priority: 'P1',
    navTitle: 'Zonas para alojarse',
    card: 'Comparación de zonas del centro y alrededores por tipo de viaje, sin recomendar hoteles concretos.',
    title: 'Dónde alojarse en el Centro Histórico de Cuenca',
    description: 'Comparativa de zonas para alojarse en Cuenca: Centro Histórico junto al Parque Calderón, entorno de Calle Larga y Tomebamba, zonas de conexión con terminal y aeropuerto, según tipo de viaje.',
    h1: 'Elegir zona para alojarse en Cuenca',
    lead: 'La pregunta útil no es «¿cuál es el mejor hotel?», sino «¿qué zona conviene a este viaje?». Esta página compara áreas por cercanía al Parque Calderón, ruido, transporte, equipaje y presupuesto, sin publicar nombres de establecimientos no verificados.',
    sections: [
      {
        h2: 'Junto al Parque Calderón',
        paragraphs: [
          'Es la opción más cómoda para quien quiere recorrer el centro a pie: la plaza, las catedrales, las plazas pequeñas y los museos quedan a distancia de paseo. Permite además volver al parque a distintas horas sin depender de transporte.',
          'A cambio, hay que aceptar la actividad de una plaza céntrica: tráfico en las calles del borde, actos, campanas y mayor afluencia. Para estancias cortas centradas en el patrimonio suele ser la mejor relación entre esfuerzo y resultados.'
        ],
        bullets: [
          'Mejor para: primera visita, estancias cortas, rutas a pie.',
          'Ventaja: llegar al parque sin transporte.',
          'A vigilar: ruido, descenso de taxi y accesibilidad del edificio.'
        ]
      },
      {
        h2: 'Hacia Calle Larga y el Tomebamba',
        paragraphs: [
          'El corredor que baja hacia Calle Larga y la ribera del río combina arquitectura, museos, cafés y vistas del barranco. Suele percibirse como una zona de paseo más que de gran plaza, y sigue estando dentro del recorrido peatonal del centro.',
          'Puede convenir a quien busca un ambiente algo más residencial sin renunciar a llegar caminando al Parque Calderón. Conviene revisar el desnivel y el trayecto concreto si se va con equipaje o con movilidad reducida.'
        ],
        bullets: [
          'Mejor para: paseos, fotografía, estancias de varios días.',
          'Ventaja: continuidad con las rutas oficiales del centro.',
          'A vigilar: pendientes y distancia real hasta la plaza.'
        ]
      },
      {
        h2: 'Zonas de conexión con terminal y aeropuerto',
        paragraphs: [
          'Si tu viaje empieza o termina muy temprano, o si llegas con mucho equipaje, puede interesar una zona con mejor conexión a la Terminal Terrestre o al aeropuerto Mariscal Lamar. Reduce la incertidumbre del traslado, aunque aleja el paseo diario hasta la plaza.',
          'En ese caso calcula el coste y el tiempo de los desplazamientos al centro antes de comparar precios de habitación. Un ahorro pequeño puede perderse en traslados repetidos.'
        ],
        bullets: [
          'Mejor para: vuelos de madrugada, llegadas tardías, mucho equipaje.',
          'Ventaja: traslados más predecibles.',
          'A vigilar: tiempo y coste de cada viaje al Centro Histórico.'
        ]
      },
      {
        h2: 'Factores que deciden más allá de la zona',
        paragraphs: [
          'Sea cual sea el área, hay cinco comprobaciones que pesan más que la dirección: punto de descenso legal, horario de recepción, accesibilidad del edificio, política de ruido y qué incluye la tarifa.',
          'Pregunta también por estacionamiento si vienes con coche y por la agenda de actos de tus fechas. Ninguna de estas condiciones se puede deducir de un mapa.'
        ],
        note: 'Esta guía no verifica disponibilidad, precios ni servicios de alojamientos. Confirma cada condición con el establecimiento.'
      },
      {
        h2: 'Relacionar alojamiento e itinerario',
        paragraphs: [
          'Elige la zona después de decidir qué quieres hacer: una ruta de medio día por el centro no exige dormir frente a la plaza, mientras que una estancia de fotografía a distintas horas sí se beneficia de la proximidad.',
          'Las guías de rutas de este sitio indican puntos de inicio y fin, y las de llegada desde el aeropuerto y la terminal explican cómo confirmar el último tramo con equipaje.'
        ]
      }
    ],
    faqs: [
      { q: '¿Cuál es la mejor zona para alojarse en Cuenca?', a: 'Depende del viaje. Para una primera visita a pie, el entorno del Parque Calderón; para paseos y fotografía, el corredor de Calle Larga y el Tomebamba; para vuelos tempranos o mucho equipaje, zonas con mejor conexión a terminal o aeropuerto.' },
      { q: '¿Es mejor dormir frente al parque?', a: 'Es lo más cómodo para ir caminando, pero implica convivir con la actividad de una plaza céntrica. Valora el ruido y las condiciones del edificio antes de decidir.' },
      { q: '¿Cómo elijo si llego de madrugada?', a: 'Prioriza una zona con traslado predecible y confirma recepción nocturna, punto de descenso y ayuda con equipaje antes de reservar.' },
      { q: '¿Necesito coche para moverme por el centro?', a: 'No para las rutas peatonales del Centro Histórico. Si vienes con coche, confirma estacionamiento y descenso legal; la guía de estacionamiento explica por qué no conviene depender de una plaza junto al parque.' }
    ],
    related: ['cerca/hoteles', 'donde-estacionar', 'ruta-un-dia', 'desde-aeropuerto-cuenca', 'centro-historico-patrimonio'],
    sources: ['visitCuenca', 'inpc', 'maps'],
    mentions: ['Centro Histórico de Cuenca', 'Parque Calderón', 'Calle Larga', 'río Tomebamba', 'Aeropuerto Mariscal Lamar'],
    mapsQuery: 'Centro Histórico de Cuenca, Ecuador'
  }
];
