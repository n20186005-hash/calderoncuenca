import type { TopicContent } from '../topic-types';

export const historiaTopics: TopicContent[] = [
  {
    slug: 'historia',
    group: 'historia',
    priority: 'P1',
    navTitle: 'Historia del parque',
    card: 'Origen de la plaza, su nombre, el papel en la traza urbana y cómo consultar fuentes fiables.',
    title: 'Historia del Parque Calderón de Cuenca: plaza y ciudad',
    description: 'Historia del Parque Calderón de Cuenca: la plaza en el trazado del Centro Histórico, el nombre de Abdón Calderón, los cambios de uso y cómo contrastar fechas en fuentes oficiales.',
    h1: 'Historia del Parque Calderón',
    lead: 'El Parque Calderón es ante todo una plaza urbana: su historia es la historia de cómo Cuenca usó su espacio central. Esta página ofrece un marco para entenderla y señala con precisión qué afirmaciones están respaldadas por fuentes institucionales y cuáles requieren consultar archivos o bibliografía especializada.',
    sections: [
      {
        h2: 'Una plaza en el trazado de Cuenca',
        paragraphs: [
          'El parque ocupa el corazón del trazado histórico de Cuenca. A su alrededor se concentran edificios cívicos y religiosos, y dos templos que suelen aparecer juntos en las descripciones de la ciudad: la Catedral Nueva y la Catedral Vieja, hoy vinculada a un museo de arte religioso.',
          'El Instituto Nacional de Patrimonio Cultural trata el Centro Histórico, el parque y las catedrales como lugares y bienes diferenciados dentro del conjunto urbano. Esa distinción es el punto de partida correcto para cualquier relato histórico: el parque no es la catedral, y el conjunto no es una suma de postales.'
        ]
      },
      {
        h2: 'El nombre: Abdón Calderón',
        paragraphs: [
          'El nombre del parque recuerda a Abdón Calderón, joven militar cuencano vinculado a la campaña independentista y a la Batalla de Pichincha de 1822. El monumento situado en el centro de la plaza es el elemento que hace visible esa memoria en el espacio público.',
          'Los detalles biográficos, las fechas exactas y la autoría o datación del monumento deben contrastarse en bibliografía y en las fichas institucionales: esta guía evita convertir relatos tradicionales no verificados en datos cerrados. La página dedicada al monumento desarrolla el tema por separado.'
        ]
      },
      {
        h2: 'Cambios de uso a lo largo del tiempo',
        paragraphs: [
          'Como ocurre con muchas plazas mayores de ciudades andinas, el espacio ha ido cambiando de función: lugar de mercado y de encuentro, escenario de actos cívicos, paseo arbolado y punto de referencia del turismo urbano. Describir cada etapa con un año concreto exige apoyarse en archivos municipales, fotografías fechadas y bibliografía local.',
          'La glorieta, los árboles y el trazado de los cuatro cuadrantes forman parte de la imagen reconocible del parque. La intervención municipal de 2026 trabajó precisamente sobre esos elementos, según el aviso de reapertura publicado el 29 de octubre.'
        ],
        note: 'Esta guía no asigna años a cada reforma sin una fuente fechada. Cuando una cronología no está documentada, se describe el cambio y se indica dónde contrastarlo.'
      },
      {
        h2: 'La remodelación de 2026 como hecho fechado',
        paragraphs: [
          'El Municipio de Cuenca informó de la reapertura oficial del parque el 28 de octubre de 2026, tras completar los trabajos en los cuatro cuadrantes y la glorieta. Entre las mejoras comunicadas se mencionan el pavimento y los elementos podotáctiles.',
          'Es un episodio reciente y verificable que conviene mantener fechado: dentro de unos años seguirá siendo parte de la historia del parque, pero no debe confundirse con los usos y transformaciones de siglos anteriores. La guía de transformaciones históricas se ocupa de ese enfoque.'
        ]
      },
      {
        h2: 'Cómo seguir investigando',
        paragraphs: [
          'Para fechas, autorías y planos, el orden recomendable es: fichas del Instituto Nacional de Patrimonio Cultural, publicaciones y archivos del Municipio de Cuenca, y la ficha UNESCO del Centro Histórico para el contexto del conjunto inscrito.',
          'Las rutas turísticas oficiales y los folletos antiguos son útiles para localizar calles y monumentos, pero no para fechar obras ni para fijar horarios o tarifas. Si encuentras una afirmación sin fuente, trátala como una pista y no como un dato.'
        ],
        bullets: [
          'INPC: fichas del Centro Histórico y de los bienes individuales.',
          'Municipio de Cuenca: avisos de obra y documentación municipal.',
          'UNESCO: contexto del conjunto histórico inscrito.',
          'VisitCuenca: rutas oficiales para relacionar lugares, no para fechar.',
          'Archivos fotográficos fechados: imprescindibles para comparar épocas.'
        ]
      }
    ],
    faqs: [
      { q: '¿Por qué se llama Parque Calderón?', a: 'El nombre recuerda a Abdón Calderón, militar cuencano vinculado a la campaña independentista y a la Batalla de Pichincha de 1822. El monumento central de la plaza hace visible esa memoria.' },
      { q: '¿De cuándo data el parque?', a: 'Esta guía no fija una fecha de fundación sin una fuente documental concreta. Para cronologías precisas, consulta las fichas del INPC y la documentación del Municipio de Cuenca.' },
      { q: '¿El parque fue siempre un parque arbolado?', a: 'Las plazas centrales cambian de uso con el tiempo: mercado, actos cívicos, paseo y encuentro. Cada etapa requiere su propia fuente; evitamos presentar una secuencia no documentada como hecho cerrado.' },
      { q: '¿El Parque Calderón es Patrimonio de la Humanidad por sí mismo?', a: 'No. Lo inscrito en la Lista del Patrimonio Mundial es el Centro Histórico de Santa Ana de los Ríos de Cuenca; el parque forma parte de ese conjunto, pero no cuenta con una declaración individual.' }
    ],
    related: ['monumento-abdon-calderon', 'glorieta-parque-calderon', 'edificios-historicos', 'transformaciones-historicas', 'centro-historico-patrimonio'],
    sources: ['inpc', 'unesco', 'municipio', 'folleto'],
    mentions: ['Parque Calderón', 'Abdón Calderón', 'Catedral Nueva de Cuenca', 'Catedral Vieja de Cuenca', 'Centro Histórico de Cuenca'],
    heroImage: {
      src: '/images/parque-calderon-photo.jpg',
      alt: 'Fotografía del Parque Calderón y la Catedral Nueva de Cuenca, tomada en 2017',
      caption: 'Fotografía de 2017; no muestra necesariamente el estado actual del parque tras la intervención de 2026.'
    }
  },
  {
    slug: 'monumento-abdon-calderon',
    group: 'historia',
    priority: 'P1',
    navTitle: 'Monumento a Abdón Calderón',
    card: 'Quién fue el personaje, qué representa el monumento central y dónde contrastar la biografía.',
    title: 'Monumento a Abdón Calderón en el Parque Calderón, Cuenca',
    description: 'El monumento a Abdón Calderón en el Parque Calderón de Cuenca: quién fue el héroe independentista, qué representa la escultura central, cómo observarla y dónde verificar los datos históricos.',
    h1: 'El monumento a Abdón Calderón',
    lead: 'En el centro de la plaza se levanta el monumento que da sentido al nombre del parque. Es el punto hacia el que convergen los cuatro cuadrantes y, a la vez, el elemento que más confusiones genera en las reseñas de viaje. Aquí se explica qué se puede afirmar y qué debe contrastarse en fuentes históricas.',
    sections: [
      {
        h2: 'Quién fue Abdón Calderón',
        paragraphs: [
          'Abdón Calderón fue un joven militar cuencano de la campaña independentista, asociado a la Batalla de Pichincha del 24 de mayo de 1822, y fallecido a consecuencia de las heridas recibidas en ese contexto. Su figura se recuerda en Cuenca como símbolo local de la independencia.',
          'Los datos biográficos concretos —fechas de nacimiento y muerte, grado, unidad y circunstancias precisas— varían de unas publicaciones a otras. Esta guía no fija cifras que no ha contrastado: para un trabajo histórico, consulta bibliografía especializada y fichas institucionales antes que reseñas turísticas.'
        ]
      },
      {
        h2: 'Qué representa el monumento',
        paragraphs: [
          'El monumento funciona como hito visual y como referencia de orientación dentro de la plaza. Está en el centro del conjunto, rodeado por los cuatro cuadrantes y la glorieta, y aparece en la mayoría de las fotografías del parque junto a las cúpulas azules de la Catedral Nueva.',
          'Más allá de su significado conmemorativo, es un elemento urbano cotidiano: punto de encuentro, fondo de fotografías y lugar de paso. Leerlo así ayuda a entender por qué aparece tanto en imágenes del centro histórico como en la vida diaria de la ciudad.'
        ],
        note: 'La autoría, la datación y los detalles iconográficos de la escultura no se afirman aquí sin una ficha de patrimonio que los respalde.'
      },
      {
        h2: 'Cómo observarlo durante la visita',
        paragraphs: [
          'Acércate por uno de los cuadrantes y rodea el monumento para ver cómo cambia el fondo: hacia un lado aparecen las fachadas cívicas, hacia otro la Catedral Nueva. Esa vuelta corta explica mejor la relación entre la plaza y su entorno que una sola fotografía frontal.',
          'Fíjate también en el pedestal, en los materiales y en la relación de escala con los árboles y la glorieta. Son observaciones que no requieren datos no verificados y que hacen la visita más interesante.'
        ],
        bullets: [
          'Rodear el monumento para ver los distintos fondos arquitectónicos.',
          'Observar el pedestal y su integración en el trazado de cuadrantes.',
          'Comparar la escala con la glorieta y el arbolado.',
          'Evitar subirse al monumento o usar elementos de apoyo para fotografías.'
        ]
      },
      {
        h2: 'Fotografía y respeto',
        paragraphs: [
          'Es uno de los motivos más fotografiados del parque. Si incluyes a personas en la toma, pide permiso cuando sea razonable hacerlo; si fotografías actos cívicos o religiosos, mantén distancia y sigue las indicaciones del lugar.',
          'La guía de mejores lugares para fotografiar recoge otros puntos de la plaza y del entorno, con criterios de luz y de composición que no dependen de horarios garantizados.'
        ]
      },
      {
        h2: 'Dónde contrastar los datos',
        paragraphs: [
          'Para pasar de la descripción a la historia documentada, empieza por las fichas del Instituto Nacional de Patrimonio Cultural sobre el Centro Histórico y por las publicaciones del Municipio de Cuenca. La ficha UNESCO aporta el contexto del conjunto, no una declaración individual del parque ni del monumento.',
          'Esta separación de fuentes es importante: un monumento puede formar parte de un conjunto inscrito sin tener por sí mismo una inscripción independiente.'
        ]
      }
    ],
    faqs: [
      { q: '¿Quién fue Abdón Calderón?', a: 'Un joven militar cuencano de la campaña independentista, vinculado a la Batalla de Pichincha de 1822 y fallecido a raíz de las heridas recibidas en ese contexto. Para fechas y grados exactos, consulta bibliografía histórica especializada.' },
      { q: '¿De qué año es el monumento?', a: 'Esta guía no fija una fecha de inauguración sin una ficha de patrimonio que la respalde. Contrástala en el INPC o en la documentación municipal antes de citarla.' },
      { q: '¿Qué representa la escultura?', a: 'Conmemora la figura de Abdón Calderón y actúa como hito central de la plaza. Es también un punto de orientación y de encuentro dentro del conjunto de cuatro cuadrantes.' },
      { q: '¿Se puede tocar o subir al monumento?', a: 'Se recomienda no subirse ni apoyarse en el pedestal: es un bien conmemorativo en un espacio público. Observa y fotografía desde el exterior, respetando las indicaciones del lugar.' }
    ],
    related: ['historia', 'glorieta-parque-calderon', 'edificios-historicos', 'centro-historico-patrimonio', 'mejores-fotos'],
    sources: ['inpc', 'unesco', 'municipio'],
    mentions: ['Abdón Calderón', 'Parque Calderón', 'Batalla de Pichincha', 'Catedral Nueva de Cuenca'],
    heroImage: {
      src: '/images/parque-calderon-photo.jpg',
      alt: 'Fotografía del Parque Calderón y la Catedral Nueva de Cuenca, tomada en 2017',
      caption: 'Fotografía de 2017; no muestra necesariamente el estado actual del parque tras la intervención de 2026.'
    }
  },
  {
    slug: 'glorieta-parque-calderon',
    group: 'historia',
    priority: 'P1',
    navTitle: 'La glorieta',
    card: 'Qué es la glorieta, su papel en la obra de 2026, sus usos y cómo fotografiarla.',
    title: 'La glorieta del Parque Calderón, Cuenca',
    description: 'La glorieta del Parque Calderón: qué es, su lugar en los cuatro cuadrantes, la intervención municipal de 2026, los usos y actos que hay que confirmar y consejos para fotografiarla.',
    h1: 'La glorieta del Parque Calderón',
    lead: 'La glorieta es uno de los elementos más reconocibles del parque y uno de los que el Municipio mencionó expresamente al comunicar la reapertura de 2026. No es un edificio visitable con taquilla: es una pieza del espacio público, y conviene describirla sin atribuirle usos o programaciones no verificados.',
    sections: [
      {
        h2: 'Qué es y dónde está',
        paragraphs: [
          'La glorieta es una construcción ligera de carácter ornamental y de reunión, situada dentro del trazado de la plaza y ligada a la imagen tradicional del parque. Junto al monumento central y al arbolado, organiza la lectura visual del conjunto.',
          'El aviso municipal de 2026 describió los trabajos en los cuatro cuadrantes y en la glorieta, lo que confirma que fue parte del ámbito de la intervención. No implica que sea un recinto cerrado, ni que tenga un horario de visita propio.'
        ]
      },
      {
        h2: 'Su papel en la intervención de 2026',
        paragraphs: [
          'El Municipio de Cuenca informó el 29 de octubre de 2026 de que el parque había reabierto el día 28 tras completar los cuatro cuadrantes y la glorieta, con mejoras de pavimento y elementos podotáctiles comunicadas en el mismo contexto.',
          'La información disponible es de carácter general: no detalla materiales, técnicas de restauración ni el estado previo de cada elemento. Para esos extremos hacen falta las fichas técnicas o la documentación de obra, no una noticia de reapertura.'
        ],
        note: 'La glorieta se describe aquí como elemento del espacio público. No se afirma que esté abierta al público en un horario determinado ni que admita visitas de interior.'
      },
      {
        h2: 'Usos y actos: qué hay que confirmar',
        paragraphs: [
          'Las glorietas de las plazas andinas suelen asociarse a música, actos cívicos y encuentros vecinales. Que un uso sea tradicional no significa que exista una programación fija: la actividad depende de la agenda municipal y de las autorizaciones del día.',
          'Si quieres coincidir con un acto, consulta los avisos oficiales para tu fecha. Si prefieres la plaza tranquila, ten presente que ninguna fuente garantiza una franja sin gente ni sin actividad.'
        ],
        bullets: [
          'Consultar la agenda municipal antes de esperar un acto.',
          'No dar por supuesta una programación semanal.',
          'Respetar las zonas acotadas cuando haya una actividad.',
          'Recordar que el anuncio de reapertura no fija horarios.'
        ]
      },
      {
        h2: 'Cómo observarla y fotografiarla',
        paragraphs: [
          'Prueba dos encuadres: uno próximo, que muestre la estructura y su relación con los árboles, y otro más amplio, que la sitúe frente a las cúpulas azules de la Catedral Nueva. Cambiar de lado de la plaza modifica por completo el fondo.',
          'La luz de la mañana y la de la tarde producen resultados distintos sobre los materiales y el arbolado; más que perseguir una hora exacta, conviene dejar margen para volver a pasar. La guía de fotografía del parque amplía estas ideas.'
        ]
      },
      {
        h2: 'No confundir la glorieta con otros elementos',
        paragraphs: [
          'En las reseñas de viaje se mezclan a veces la glorieta, el monumento a Abdón Calderón y los portales de los edificios del entorno. Son tres cosas distintas: un elemento de reunión, un hito conmemorativo y las fachadas que cierran la plaza.',
          'Distinguirlos ayuda a interpretar las fotografías antiguas y a entender qué se intervino en cada reforma. La guía de transformaciones históricas explica cómo comparar imágenes de distintas épocas sin sacar conclusiones precipitadas.'
        ]
      }
    ],
    faqs: [
      { q: '¿Qué es la glorieta del Parque Calderón?', a: 'Un elemento ornamental y de reunión dentro de la plaza, asociado a la imagen tradicional del parque. Forma parte del conjunto junto al monumento central, los cuatro cuadrantes y el arbolado.' },
      { q: '¿Se restauró en 2026?', a: 'El Municipio comunicó que la intervención previa a la reapertura del 28 de octubre de 2026 incluyó los cuatro cuadrantes y la glorieta. La noticia no detalla el alcance técnico de los trabajos.' },
      { q: '¿Se puede entrar a la glorieta?', a: 'Esta guía no verifica un acceso de interior, un horario ni unas condiciones de visita. Trátala como parte del espacio público y respeta la señalización y las zonas acotadas del día.' },
      { q: '¿Hay conciertos o actos programados?', a: 'No hay una programación fija que esta guía pueda afirmar. Consulta la agenda y los avisos municipales para tu fecha; ninguna fuente garantiza una franja sin actividad.' }
    ],
    related: ['historia', 'monumento-abdon-calderon', 'transformaciones-historicas', 'mejores-fotos', 'reapertura-2026'],
    sources: ['municipio', 'inpc', 'maps'],
    mentions: ['Parque Calderón', 'Catedral Nueva de Cuenca'],
    heroImage: {
      src: '/images/parque-calderon-photo.jpg',
      alt: 'Fotografía del Parque Calderón y la Catedral Nueva de Cuenca, tomada en 2017',
      caption: 'Fotografía de 2017; no muestra necesariamente el estado actual del parque tras la intervención de 2026.'
    }
  },
  {
    slug: 'edificios-historicos',
    group: 'historia',
    priority: 'P1',
    navTitle: 'Edificios históricos',
    card: 'El conjunto que cierra la plaza: catedrales, arquitectura civil y cómo recorrerlos sin mezclarlos.',
    title: 'Edificios históricos alrededor del Parque Calderón',
    description: 'Edificios históricos junto al Parque Calderón de Cuenca: Catedral Nueva, Catedral Vieja y arquitectura civil del centro. Cómo distinguirlos, qué visitar y cómo comprobar accesos y horarios.',
    h1: 'Los edificios históricos del Parque Calderón',
    lead: 'La plaza se lee mejor mirando hacia afuera: son las fachadas de su entorno las que le dan escala y carácter. Esta página propone un orden para reconocerlas y evita la confusión más habitual, la de tratar a los dos templos del centro como si fueran uno solo.',
    sections: [
      {
        h2: 'Un conjunto, no un edificio único',
        paragraphs: [
          'El Instituto Nacional de Patrimonio Cultural describe el Centro Histórico, el parque y las catedrales como lugares diferenciados dentro del conjunto urbano. Esa precisión es útil para el visitante: cada edificio tiene su propia historia, su administración y sus condiciones de visita.',
          'La plaza actúa como antesala de todos ellos. Reconocer primero el conjunto y después cada fachada permite decidir a qué se entra y qué se deja para otra ocasión, sin intentar abarcarlo todo en una sola parada.'
        ]
      },
      {
        h2: 'La Catedral Nueva',
        paragraphs: [
          'La Catedral de la Inmaculada Concepción, conocida como Catedral Nueva, domina un costado de la plaza con sus cúpulas azules. Es la referencia visual más citada del centro y aparece en prácticamente todas las fotografías del parque.',
          'Su interior, y especialmente los posibles accesos a terrazas o criptas, son visitas con condiciones independientes de la plaza. Esta guía no confirma horarios, tarifas ni zonas abiertas: consúltalos en el propio recinto.'
        ]
      },
      {
        h2: 'La Catedral Vieja y el museo',
        paragraphs: [
          'El antiguo templo conocido como El Sagrario está vinculado al Museo Catedral Vieja, según la documentación municipal y del INPC. No debe confundirse con la Catedral Nueva: son edificios distintos, con funciones y condiciones de visita diferentes.',
          'El Museo de Arte Religioso aparece en las publicaciones del Municipio de Cuenca como un espacio con identidad propia. Su programa, horarios y posibles entradas deben verificarse en su canal oficial antes de incluirlo en una ruta.'
        ],
        note: 'Ninguna de estas visitas forma parte del parque. Sus horarios, tarifas, actos religiosos y restricciones son independientes del espacio público.'
      },
      {
        h2: 'Arquitectura civil y otros inmuebles del entorno',
        paragraphs: [
          'Además de los templos, el centro conserva inmuebles de uso cívico, educativo y comercial de distintas épocas. El Seminario San Luis, la Plaza de las Flores, la Plaza San Francisco y el Museo de las Conceptas aparecen en las rutas turísticas oficiales como piezas del mismo entramado urbano.',
          'No todos admiten visita libre: en edificios con uso activo conviene preguntar qué zonas se pueden recorrer y en qué horario. Esta guía trata cada lugar en una página específica para no repetir una descripción genérica.'
        ],
        bullets: [
          'Diferenciar fachada visible desde la plaza e interior visitable.',
          'Confirmar horarios y posibles entradas recinto por recinto.',
          'Respetar los usos religiosos, educativos o administrativos en curso.',
          'Usar las rutas oficiales para relacionar lugares, no para fijar datos.'
        ]
      },
      {
        h2: 'Cómo recorrer el conjunto',
        paragraphs: [
          'Una secuencia sencilla consiste en rodear la plaza por el exterior, identificar cada fachada y elegir una sola visita de interior. Así se entiende la relación entre el parque y los edificios sin encadenar taquillas.',
          'Las guías de rutas de este sitio convierten esa idea en itinerarios con punto de inicio y fin; la de medio día es la más adecuada si quieres incluir dos recintos con calma.'
        ]
      }
    ],
    faqs: [
      { q: '¿Cuáles son los edificios históricos junto al Parque Calderón?', a: 'Principalmente la Catedral Nueva y la Catedral Vieja o El Sagrario, junto con inmuebles cívicos y educativos del Centro Histórico. El INPC los trata como bienes diferenciados dentro del conjunto.' },
      { q: '¿La Catedral Vieja y la Catedral Nueva son el mismo edificio?', a: 'No. La Catedral Nueva es el templo de las cúpulas azules; El Sagrario está vinculado al Museo Catedral Vieja. Tienen historias, usos y condiciones de visita distintos.' },
      { q: '¿Se puede entrar a todos los edificios?', a: 'No. Algunos mantienen usos religiosos, educativos o administrativos y solo permiten determinadas zonas. Pregunta en cada recinto por horarios, accesos y posibles entradas.' },
      { q: '¿Los edificios están incluidos en la declaración UNESCO?', a: 'Lo inscrito es el Centro Histórico de Santa Ana de los Ríos de Cuenca en su conjunto. Que un edificio se encuentre dentro de ese ámbito no equivale a una inscripción individual con su propia ficha.' }
    ],
    related: ['cerca/catedral-nueva', 'cerca/catedral-vieja', 'cerca/seminario-san-luis', 'historia', 'centro-historico-patrimonio'],
    sources: ['inpc', 'catedralVieja', 'unesco', 'visitCuenca'],
    mentions: ['Catedral Nueva de Cuenca', 'Catedral Vieja de Cuenca', 'Seminario San Luis', 'Centro Histórico de Cuenca']
  },
  {
    slug: 'transformaciones-historicas',
    group: 'historia',
    priority: 'P1',
    navTitle: 'Transformaciones del parque',
    card: 'Cómo comparar fotos de época, qué se informó de la obra de 2026 y cómo mantener un registro fechado.',
    title: 'Transformaciones históricas del Parque Calderón',
    description: 'Las transformaciones del Parque Calderón de Cuenca: qué cambió en la intervención de 2026, cómo leer fotografías antiguas y cómo construir una cronología con fuentes fechadas.',
    h1: 'Las transformaciones del Parque Calderón',
    lead: 'Toda plaza cambia, y el Parque Calderón no es una excepción. El problema no es el cambio, sino las comparaciones sin fecha: una fotografía de 2017, una noticia de 2026 y un folleto de 2016 no describen el mismo momento. Esta página propone una forma ordenada de leerlos.',
    sections: [
      {
        h2: 'Por qué cambian las plazas',
        paragraphs: [
          'Los espacios públicos se adaptan a nuevas formas de circular, a normas de accesibilidad, a usos cívicos y al desgaste de los materiales. Cada generación deja una capa: pavimentos, arbolado, mobiliario, alumbrado o elementos de señalización.',
          'Por eso una plaza histórica no es una imagen congelada. Reconocer esa condición evita dos errores frecuentes: presentar el estado actual como «el original» y tratar cualquier reforma como una pérdida total del carácter del lugar.'
        ]
      },
      {
        h2: 'La intervención de 2026: qué se informó',
        paragraphs: [
          'El Municipio de Cuenca comunicó el 29 de octubre de 2026 la reapertura del parque el día 28, tras completar los trabajos en los cuatro cuadrantes y en la glorieta. En el mismo contexto se mencionaron mejoras de pavimento y elementos podotáctiles.',
          'Son los hechos que pueden citarse con fecha. No se dispone aquí de un informe técnico que permita describir materiales, técnicas o la situación previa de cada elemento, así que esta guía no rellena esos huecos con suposiciones.'
        ],
        note: 'La fotografía de portada de este sitio es de 2017 y no documenta las reformas de 2026. Se conserva como registro histórico y está etiquetada como tal.'
      },
      {
        h2: 'Leer fotografías de antes y después',
        paragraphs: [
          'Para comparar imágenes de distintas épocas hacen falta cuatro cosas: fecha de la toma, punto de vista, autor o fuente, y una descripción de lo que se ve. Sin fecha, una fotografía antigua solo sirve como ilustración, no como documento.',
          'También conviene fijarse en lo que no cambia: la posición de la plaza en el trazado, la relación con las catedrales y la escala del monumento. Esas continuidades suelen ser más informativas que el detalle del pavimento.'
        ],
        bullets: [
          'Anotar fecha, fuente y autor de cada imagen.',
          'Buscar el mismo encuadre antes de comparar.',
          'Distinguir elementos estructurales de mobiliario temporal.',
          'No usar una foto de archivo para decidir el estado actual de un acceso.'
        ]
      },
      {
        h2: 'Fuentes para una cronología honesta',
        paragraphs: [
          'Una cronología fiable se construye con documentos fechados: avisos municipales de obra, fichas del INPC, planos y fotografías de archivo con autor y año, y publicaciones institucionales. Los folletos turísticos ayudan a situar calles y monumentos, pero no a fechar reformas.',
          'La Ruta Francesa de 2016, por ejemplo, se usa en esta guía como referencia de las calles que enmarcan el parque, no como fuente de horarios, tarifas ni de la cronología de las obras.'
        ]
      },
      {
        h2: 'Mantener el registro sin borrar el historial',
        paragraphs: [
          'Cuando cambie la información de acceso, lo correcto es añadir una nueva entrada fechada y conservar la anterior, en lugar de reescribir la noticia de 2026 como si acabara de ocurrir. Así el visitante distingue un hecho histórico de un aviso vigente.',
          'Esta guía aplica ese criterio en su página de reapertura y en la de horarios: una cosa es la fecha en que el parque reabrió y otra muy distinta la disponibilidad de cada día.'
        ]
      }
    ],
    faqs: [
      { q: '¿Qué se reformó en el Parque Calderón en 2026?', a: 'El Municipio comunicó trabajos en los cuatro cuadrantes y la glorieta, con mejoras de pavimento y elementos podotáctiles, antes de la reapertura del 28 de octubre de 2026. No se dispone aquí de un detalle técnico de la obra.' },
      { q: '¿La foto de la portada muestra el parque actual?', a: 'No: es una fotografía de 2017, anterior a la intervención de 2026. Se conserva como imagen histórica del conjunto, no como prueba del estado presente.' },
      { q: '¿Cómo sé si una foto antigua es fiable?', a: 'Comprueba que tenga fecha, autor o fuente y un punto de vista identificable. Sin esos datos, úsala solo como ilustración y no para afirmar qué existía en un año concreto.' },
      { q: '¿Dónde consultar la cronología de las reformas?', a: 'En avisos y documentación del Municipio de Cuenca, fichas del INPC y archivos fotográficos fechados. Evita basar una cronología en folletos turísticos o reseñas sin fecha.' }
    ],
    related: ['reapertura-2026', 'historia', 'glorieta-parque-calderon', 'centro-historico-patrimonio', 'accesibilidad'],
    sources: ['municipio', 'inpc', 'folleto', 'maps'],
    mentions: ['Parque Calderón', 'Centro Histórico de Cuenca']
  },
  {
    slug: 'centro-historico-patrimonio',
    group: 'historia',
    priority: 'P1',
    navTitle: 'Centro Histórico y UNESCO',
    card: 'Qué está inscrito exactamente en la UNESCO, qué implica para la visita y qué dice el INPC.',
    title: 'Parque Calderón y el Centro Histórico de Cuenca (UNESCO)',
    description: 'Relación entre el Parque Calderón y el Centro Histórico de Cuenca: qué está inscrito en la UNESCO, el papel del INPC y cómo visitar el conjunto con criterio y responsabilidad.',
    h1: 'El Parque Calderón y el Centro Histórico de Cuenca',
    lead: 'El parque se encuentra en el Centro Histórico de Cuenca, un conjunto inscrito en la Lista del Patrimonio Mundial. Esa frase se suele acortar de forma incorrecta hasta convertirse en «el parque es Patrimonio de la Humanidad». Aquí se explica la diferencia y lo que implica para quien lo visita.',
    sections: [
      {
        h2: 'Qué está inscrito exactamente',
        paragraphs: [
          'La inscripción UNESCO corresponde al Centro Histórico de Santa Ana de los Ríos de Cuenca, reconocido como conjunto urbano. El parque, las catedrales, las plazas y las calles forman parte de ese tejido, pero el parque no cuenta con una declaración individual independiente.',
          'La ficha UNESCO se usa en esta guía como contexto del conjunto, no como respaldo de una categoría propia del parque. Es una precisión importante porque afecta a cómo se redactan las descripciones y los datos estructurados del sitio.'
        ],
        note: 'Formule siempre: «el parque está dentro del Centro Histórico inscrito», no «el parque fue declarado Patrimonio de la Humanidad por sí mismo».'
      },
      {
        h2: 'Qué implica para el visitante',
        paragraphs: [
          'Estar en un conjunto histórico significa que el interés no se agota en un monumento: cuenta la traza de las calles, la relación entre plazas, la escala de los edificios y la continuidad de los usos urbanos. Un paseo de una hora puede ser más revelador que una lista de «imprescindibles».',
          'También implica que las normas de conservación y circulación pueden ser distintas de las de un barrio moderno. Respeta la señalización, los accesos acotados y las indicaciones de los recintos, especialmente durante actos o trabajos de mantenimiento.'
        ]
      },
      {
        h2: 'El papel del INPC y de las fuentes locales',
        paragraphs: [
          'El Instituto Nacional de Patrimonio Cultural publica información sobre el Centro Histórico y distingue entre el parque y las catedrales como lugares diferentes. Es una fuente adecuada para empezar a documentar nombres, bienes y ámbitos de protección.',
          'El Municipio de Cuenca aporta avisos y documentación de obra, y VisitCuenca ofrece rutas oficiales que relacionan lugares del centro. Cada fuente sirve para una cosa: conviene no pedirle horarios a un folleto de 2016 ni fechas de fundación a una ruta turística.'
        ],
        bullets: [
          'UNESCO: contexto del conjunto inscrito.',
          'INPC: bienes, nombres y ámbitos de patrimonio.',
          'Municipio: avisos, obras y condiciones de acceso.',
          'VisitCuenca: rutas oficiales y relación entre lugares.'
        ]
      },
      {
        h2: 'Recorrer el centro con criterio',
        paragraphs: [
          'El parque es un buen punto de partida porque concentra referencias visuales y permite elegir dirección: hacia las catedrales y la Plaza de las Flores, hacia San Francisco, o hacia Calle Larga y el río Tomebamba.',
          'Las guías de rutas de este sitio proponen recorridos de media jornada y de un día con inicio y fin concretos, y señalan qué tramos son espacios públicos y cuáles dependen de horarios de recintos.'
        ]
      },
      {
        h2: 'Responsabilidad del visitante',
        paragraphs: [
          'Cuidar un conjunto habitado empieza por gestos sencillos: no dejar residuos, no bloquear pasos peatonales, respetar los usos religiosos y pedir permiso antes de fotografiar de cerca a personas. En actos públicos, sigue las indicaciones de quienes los organizan.',
          'También es una forma de responsabilidad no difundir datos sin verificar: horarios de 24 horas, tarifas antiguas o afirmaciones sobre declaraciones patrimoniales individuales se repiten con facilidad y confunden a quien planea una visita.'
        ]
      }
    ],
    faqs: [
      { q: '¿El Parque Calderón es Patrimonio de la Humanidad?', a: 'El Centro Histórico de Santa Ana de los Ríos de Cuenca está inscrito en la Lista del Patrimonio Mundial de UNESCO. El parque forma parte de ese conjunto, pero no tiene una inscripción individual independiente.' },
      { q: '¿De qué año es la inscripción?', a: 'La ficha oficial de UNESCO del Centro Histórico de Santa Ana de los Ríos de Cuenca es la fuente para esa fecha y su alcance; consúltala directamente antes de citar datos concretos.' },
      { q: '¿Qué organismo ecuatoriano documenta el conjunto?', a: 'El Instituto Nacional de Patrimonio Cultural publica información sobre el Centro Histórico y distingue el parque de las catedrales. El Municipio de Cuenca aporta avisos y documentación de obra.' },
      { q: '¿Hay normas especiales por estar en un centro histórico?', a: 'Puede haber señalización, accesos acotados y restricciones por actos o conservación. Respeta las indicaciones del lugar y no des por supuesto que todos los edificios son visitables.' }
    ],
    related: ['historia', 'edificios-historicos', 'transformaciones-historicas', 'ruta-medio-dia', 'calles-y-accesos'],
    sources: ['unesco', 'inpc', 'visitCuenca', 'municipio'],
    mentions: ['Centro Histórico de Cuenca', 'Parque Calderón', 'UNESCO', 'Instituto Nacional de Patrimonio Cultural']
  }
];
