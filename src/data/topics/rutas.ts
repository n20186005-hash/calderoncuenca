import type { TopicContent } from '../topic-types';

export const rutasTopics: TopicContent[] = [
  {
    slug: 'ruta-30-minutos',
    group: 'rutas',
    priority: 'P2',
    navTitle: 'Ruta de 30 minutos',
    card: 'Inicio y fin en la plaza, cuatro paradas y ningún recinto con horario que condicione el plan.',
    title: 'Ruta de 30 minutos por el Parque Calderón, Cuenca',
    description: 'Ruta de 30 minutos por el Parque Calderón de Cuenca: punto de inicio y fin, cuatro paradas con tiempos orientativos y distinción entre espacio público y recintos con entrada.',
    h1: 'El Parque Calderón en 30 minutos',
    lead: 'Esta ruta está pensada para quien tiene poco tiempo o usa el parque como punto de encuentro antes de seguir. Empieza y termina dentro de la plaza, no exige entrar a ningún recinto y puede acortarse o alargarse sin desordenar el resto del día.',
    sections: [
      {
        h2: 'Ficha de la ruta',
        paragraphs: [
          'Inicio: uno de los accesos peatonales de la plaza, en el lado desde el que llegues. Fin: el mismo punto, tras rodear el monumento central. Duración orientativa: 30 minutos, con tiempos por parada que puedes ajustar.',
          'Es una ruta de espacio público: no depende de taquillas, misas ni horarios de museos. Solo requiere comprobar los avisos del día por si hay actos o zonas acotadas.'
        ],
        bullets: [
          'Inicio y fin: dentro del Parque Calderón.',
          'Duración orientativa: 30 minutos.',
          'Recintos con entrada: ninguno en el itinerario.',
          'Ideal para: escala corta, llegada en taxi o app, primera orientación.'
        ]
      },
      {
        h2: 'Parada 1 · Orientarse en la plaza (5 min)',
        paragraphs: [
          'Entra por un paso peatonal y detente un momento antes de cruzar hacia el centro. Identifica las cuatro calles que enmarcan el conjunto —Simón Bolívar, Mariscal Sucre, Benigno Malo y Luis Cordero— y localiza las cúpulas azules de la Catedral Nueva.',
          'Ese minuto de orientación evita dar vueltas innecesarias y te da una referencia para volver al punto de encuentro.'
        ]
      },
      {
        h2: 'Parada 2 · Monumento a Abdón Calderón (8 min)',
        paragraphs: [
          'Acércate al monumento central y rodéalo con calma. Cambiar de lado muestra fondos distintos: hacia un costado las fachadas cívicas, hacia otro la catedral. Observa el pedestal y su relación con los cuatro cuadrantes.',
          'Es el punto más fotografiado de la plaza y también un buen lugar para fijar el punto de encuentro si vais en grupo.'
        ]
      },
      {
        h2: 'Parada 3 · Glorieta y arbolado (8 min)',
        paragraphs: [
          'Continúa hacia la glorieta y los árboles. La glorieta formó parte del ámbito de la intervención municipal de 2026, según el aviso de reapertura, y ayuda a entender la escala más doméstica del parque.',
          'Aprovecha para sentarte unos minutos si hay banco libre. Es la parte de la ruta que más se disfruta sin prisa y la que conviene recortar si vas justo de tiempo.'
        ]
      },
      {
        h2: 'Parada 4 · Fachadas y vuelta al inicio (9 min)',
        paragraphs: [
          'Rodea el borde de la plaza mirando hacia afuera: la Catedral Nueva y los edificios del entorno explican por qué este espacio funciona como antesala del Centro Histórico. Termina volviendo al acceso por el que entraste.',
          'Desde aquí puedes enlazar con la ruta de 1 hora si decides seguir, o con la página de calles y accesos para orientarte hacia otra calle.'
        ],
        note: 'Todos los tiempos son orientativos. Si hay un acto, lluvia o más gente de la esperada, reduce la parada 3 en lugar de saltarte la orientación inicial.'
      },
      {
        h2: 'Espacios públicos frente a recintos',
        paragraphs: [
          'La ruta transcurre íntegramente por el parque, que es espacio público. Esta guía no ha confirmado una tarifa de acceso al mismo, y no incluye la Catedral Nueva, sus posibles terrazas o criptas ni el Museo Catedral Vieja: todos tienen horarios y condiciones independientes.',
          'Si decides añadir uno, deja de ser una ruta de 30 minutos y pasa a la de 1 hora o a la de medio día.'
        ]
      }
    ],
    faqs: [
      { q: '¿Se puede ver el Parque Calderón en 30 minutos?', a: 'Sí, para orientarte, rodear el monumento, ver la glorieta y las fachadas principales. Si quieres sentarte con calma o entrar a un recinto, pasa a la estimación de 45–90 minutos de la guía principal.' },
      { q: '¿Dónde empieza y termina la ruta?', a: 'Dentro de la propia plaza, en el acceso peatonal por el que llegues. Es circular, así que no necesitas organizar un traslado al final.' },
      { q: '¿Hay que pagar algo en esta ruta?', a: 'No: se desarrolla en el espacio público. Las catedrales, museos, terrazas y criptas quedan fuera del itinerario y tienen condiciones propias.' },
      { q: '¿Qué hago si llueve o hay un acto?', a: 'Acorta la parada de descanso y consulta la guía de visita con lluvia. Si la plaza está acotada, rodea el exterior y vuelve más tarde.' }
    ],
    related: ['ruta-1-hora', 'ruta-medio-dia', 'cuanto-tiempo-visitar', 'mejores-fotos', 'calles-y-accesos'],
    sources: ['municipio', 'maps', 'folleto'],
    mentions: ['Parque Calderón', 'Abdón Calderón', 'Catedral Nueva de Cuenca'],
    mapsQuery: 'Parque Calderón, Cuenca, Ecuador'
  },
  {
    slug: 'ruta-1-hora',
    group: 'rutas',
    priority: 'P2',
    navTitle: 'Ruta de 1 hora',
    card: 'Parque, catedrales por el exterior y Plaza de las Flores, con punto de inicio y fin claros.',
    title: 'Ruta de 1 hora por el Parque Calderón y sus alrededores',
    description: 'Ruta a pie de 1 hora en Cuenca: Parque Calderón, Catedral Nueva, Catedral Vieja y Plaza de las Flores, con tiempos orientativos, paradas y distinción de recintos con horario propio.',
    h1: 'Una hora desde el Parque Calderón',
    lead: 'Si tienes una hora, el parque deja de ser el destino y se convierte en el punto de partida. Esta ruta añade las dos catedrales por el exterior y una plaza de escala más pequeña, sin exigir entrar a ningún recinto con horario.',
    sections: [
      {
        h2: 'Ficha de la ruta',
        paragraphs: [
          'Inicio: Parque Calderón. Fin: Plaza de las Flores, desde la que puedes volver al centro o continuar hacia Calle Larga. Duración orientativa: 60 minutos repartidos en cuatro paradas.',
          'Todas las paradas son espacios públicos o fachadas visibles desde la calle. Si decides entrar a un templo o museo, añade su horario y su tiempo de recorrido y pasa a la ruta de medio día.'
        ],
        bullets: [
          'Inicio: Parque Calderón.',
          'Fin: Plaza de las Flores.',
          'Duración orientativa: 1 hora.',
          'Recintos con entrada: opcionales, fuera del cálculo de tiempo.'
        ]
      },
      {
        h2: 'Parada 1 · El parque (20 min)',
        paragraphs: [
          'Recorre la plaza siguiendo la ruta de 30 minutos: orientación, monumento a Abdón Calderón, glorieta y fachadas. Es el tramo que fija las referencias visuales del resto del paseo.',
          'Si vas con prisa, reduce aquí la pausa en los bancos; si el grupo disfruta del lugar, este es el mejor sitio para ceder tiempo.'
        ]
      },
      {
        h2: 'Parada 2 · Catedral Nueva por el exterior (12 min)',
        paragraphs: [
          'Sitúate de forma que las cúpulas azules queden detrás del arbolado y del monumento. Después cambia de lado para ver la fachada con otra luz y otra escala.',
          'La entrada al templo, las posibles terrazas o criptas y sus horarios quedan fuera de esta ruta. Si quieres visitarlas, confírmalas en el recinto y ajusta el plan.'
        ]
      },
      {
        h2: 'Parada 3 · Catedral Vieja y El Sagrario (13 min)',
        paragraphs: [
          'Acércate al edificio vinculado al Museo Catedral Vieja y obsérvalo como pieza distinta de la Catedral Nueva. La confusión entre ambos templos es habitual y se resuelve simplemente mirando su diferente escala y función.',
          'Si el museo está abierto y decides entrar, esta parada deja de ser de 13 minutos: consulta la programación y las condiciones de visita antes de empezar la ruta.'
        ],
        note: 'El parque, la Catedral Nueva y el Museo Catedral Vieja son lugares distintos. Ningún horario de uno se aplica a los otros.'
      },
      {
        h2: 'Parada 4 · Plaza de las Flores y cierre (15 min)',
        paragraphs: [
          'Termina en la Plaza de las Flores, donde el color de los puestos y el comercio de barrio ofrecen un contraste claro con la plaza cívica. Recórrela sin prisa y pregunta directamente si quieres comprar algo.',
          'Desde aquí puedes volver al Parque Calderón en unos minutos, continuar hacia la Plaza San Francisco o bajar hacia Calle Larga y el río Tomebamba siguiendo las rutas oficiales de la ciudad.'
        ]
      },
      {
        h2: 'Ajustes por clima, descanso y recintos',
        paragraphs: [
          'Con lluvia, acorta las paradas al aire libre y reserva los interiores con horario confirmado. Con sol fuerte, lleva agua y protección solar: en Cuenca el cambio de tiempo puede ser rápido.',
          'Si el grupo incluye niños o personas que necesitan pausas, distribuye el tiempo en tramos más cortos y usa la Plaza de las Flores como descanso antes de volver.'
        ]
      }
    ],
    faqs: [
      { q: '¿Qué incluye la ruta de 1 hora?', a: 'Parque Calderón, Catedral Nueva y Catedral Vieja por el exterior y Plaza de las Flores. Empieza en el parque y termina en la plaza de las flores, con tiempos orientativos por parada.' },
      { q: '¿Se entra a alguna catedral o museo?', a: 'No en el cálculo de una hora. Los interiores tienen horarios, posibles entradas y restricciones propias; si añades uno, pasa a la ruta de medio día.' },
      { q: '¿Es una ruta circular?', a: 'No es estrictamente circular: termina en la Plaza de las Flores. Volver al Parque Calderón son unos minutos a pie por el centro.' },
      { q: '¿Se puede hacer con niños?', a: 'Sí, ajustando las pausas y vigilando los cruces de las calles del entorno. Consulta la guía de visita con niños y la de accesibilidad para casos concretos.' }
    ],
    related: ['ruta-30-minutos', 'ruta-medio-dia', 'cerca/catedral-nueva', 'cerca/catedral-vieja', 'cerca/plaza-de-las-flores'],
    sources: ['visitCuenca', 'inpc', 'maps'],
    mentions: ['Parque Calderón', 'Catedral Nueva de Cuenca', 'Catedral Vieja de Cuenca', 'Plaza de las Flores'],
    mapsQuery: 'Parque Calderón, Cuenca, Ecuador'
  },
  {
    slug: 'ruta-medio-dia',
    group: 'rutas',
    priority: 'P2',
    navTitle: 'Ruta de medio día',
    card: 'Centro histórico con una visita de interior, comida y descansos, con inicio y fin definidos.',
    title: 'Ruta de medio día por el Centro Histórico de Cuenca',
    description: 'Itinerario de media jornada en Cuenca desde el Parque Calderón: catedrales, plazas, una visita de interior, comida y descansos, con duración orientativa y recintos a confirmar.',
    h1: 'Media jornada desde el Parque Calderón',
    lead: 'Con media jornada ya no se trata de ver la plaza, sino de entender el Centro Histórico como conjunto. Esta ruta propone un orden con una sola visita de interior, una pausa de comida y margen para imprevistos.',
    sections: [
      {
        h2: 'Ficha de la ruta',
        paragraphs: [
          'Inicio: Parque Calderón, con luz de mañana. Fin: Calle Larga o la ribera del Tomebamba, con opción de volver al centro caminando. Duración orientativa: entre tres y cuatro horas, incluida una pausa de comida.',
          'El itinerario distingue dos tipos de parada: espacios públicos sin horario y recintos con horarios, posibles entradas y restricciones propias. Solo se incluye uno de los segundos para no encadenar taquillas.'
        ],
        bullets: [
          'Inicio: Parque Calderón.',
          'Fin: Calle Larga / río Tomebamba.',
          'Duración orientativa: 3–4 horas con comida.',
          'Una visita de interior como máximo, con horario confirmado.'
        ]
      },
      {
        h2: 'Tramo 1 · Plaza y catedrales (45 min)',
        paragraphs: [
          'Empieza con la ruta de 30 minutos dentro del parque y añade la lectura exterior de la Catedral Nueva y de la Catedral Vieja. Es el tramo que fija las referencias del conjunto.',
          'Comprueba los avisos del día antes de empezar: actos, misas o zonas acotadas pueden cambiar el orden de las paradas sin alterar la ruta.'
        ]
      },
      {
        h2: 'Tramo 2 · Una visita de interior (45–60 min)',
        paragraphs: [
          'Elige un solo recinto: el Museo Catedral Vieja, el Museo de las Conceptas o el interior de la Catedral Nueva si ese día es visitable. Confirma horario, posible entrada, salas abiertas y normas de fotografía antes de contar con él.',
          'Elegir uno y no tres es la decisión que hace que la media jornada sea agradable. Si el recinto elegido está cerrado, sustitúyelo por más tiempo en plazas y calles en lugar de improvisar una carrera.'
        ],
        note: 'Ningún horario ni tarifa de estos recintos se afirma en esta guía: deben verificarse el día de la visita.'
      },
      {
        h2: 'Tramo 3 · Comida y descanso (45–60 min)',
        paragraphs: [
          'Sitúa la pausa en la mitad del recorrido. Esta guía no recomienda locales concretos: compara cartas visibles, pregunta qué incluye el menú del día y confirma horario de cocina y formas de pago.',
          'Deja margen por delante y por detrás. Si el servicio se alarga, el tramo final puede acortarse sin que se pierda ninguna visita con horario.'
        ]
      },
      {
        h2: 'Tramo 4 · Plazas pequeñas hacia el Tomebamba (60 min)',
        paragraphs: [
          'Continúa por la Plaza de las Flores y la Plaza San Francisco, donde el centro muestra su faceta comercial y de barrio. Después baja hacia Calle Larga y la ribera del Tomebamba para cerrar con otra escala de paisaje.',
          'Las rutas oficiales de VisitCuenca relacionan estos puntos; úsalas para ordenar el paseo, no para fijar horarios o precios. Termina aquí o vuelve al parque caminando si quieres ver la plaza con otra luz.'
        ]
      },
      {
        h2: 'Ajustes: lluvia, niños y grupos',
        paragraphs: [
          'Si llueve, adelanta la visita de interior y deja las plazas para los claros; el pavimento mojado pide calzado cómodo y cruces con calma. Con niños, añade pausas y reduce el número de paradas.',
          'Con movilidad reducida, revisa el itinerario concreto antes de salir: las mejoras de pavimento comunicadas en 2026 no equivalen a una auditoría de todos los cruces ni de los accesos interiores.'
        ]
      }
    ],
    faqs: [
      { q: '¿Cuánto dura la ruta de medio día?', a: 'Entre tres y cuatro horas de forma orientativa, incluyendo una pausa de comida. Empieza en el Parque Calderón y termina en la zona de Calle Larga y el Tomebamba.' },
      { q: '¿Cuántos museos o iglesias se visitan?', a: 'Se recomienda uno solo, con horario y posibles tarifas confirmados. Encadenar varios interiores suele convertir el paseo en una carrera y depende de condiciones que cambian.' },
      { q: '¿Dónde se come en la ruta?', a: 'En la mitad del recorrido, eligiendo sobre el terreno. Esta guía no publica nombres ni precios de locales sin verificarlos; compara cartas y horarios de cocina.' },
      { q: '¿Qué hago si llueve?', a: 'Adelanta el recinto cubierto, acorta las plazas y aprovecha los claros. Consulta la guía de visita con lluvia para reorganizar el día.' }
    ],
    related: ['ruta-1-hora', 'ruta-un-dia', 'cerca/museo-de-las-conceptas', 'cerca/plaza-san-francisco', 'visitar-con-lluvia'],
    sources: ['visitCuenca', 'inpc', 'catedralVieja', 'maps'],
    mentions: ['Parque Calderón', 'Centro Histórico de Cuenca', 'Calle Larga', 'río Tomebamba', 'Plaza de las Flores'],
    mapsQuery: 'Centro Histórico de Cuenca, Ecuador'
  },
  {
    slug: 'ruta-un-dia',
    group: 'rutas',
    priority: 'P2',
    navTitle: 'Ruta de un día',
    card: 'Jornada completa con mañana, comida, tarde y vuelta a la plaza, sin inventar horarios de recintos.',
    title: 'Ruta de un día por Cuenca desde el Parque Calderón',
    description: 'Itinerario de un día en Cuenca: mañana en el Parque Calderón y las catedrales, comida y descanso, tarde de museos y Tomebamba, y vuelta a la plaza, con recintos a confirmar.',
    h1: 'Un día en Cuenca desde el Parque Calderón',
    lead: 'Una jornada completa permite algo que las rutas cortas no: volver. Este itinerario usa el parque como punto de partida y de cierre, deja huecos para comida y descanso y evita llenar el día de recintos con horarios que no hemos verificado.',
    sections: [
      {
        h2: 'Ficha de la ruta',
        paragraphs: [
          'Inicio: Parque Calderón por la mañana. Fin: de vuelta en la plaza a última hora de la tarde. Estructura: dos bloques de paseo, una pausa larga de comida y como máximo dos visitas de interior con horario confirmado.',
          'Los tiempos son orientativos. La regla del día es sencilla: si una visita se alarga, se recorta una parada al aire libre, no el descanso.'
        ],
        bullets: [
          'Inicio y fin: Parque Calderón.',
          'Bloques: mañana de plazas y catedrales, tarde de museos y río.',
          'Comida y descanso en la mitad del día.',
          'Máximo dos interiores, con horarios y entradas verificados.'
        ]
      },
      {
        h2: 'Mañana · El centro cívico',
        paragraphs: [
          'Empieza con la ruta de 30 minutos dentro del parque, añade la Catedral Nueva y la Catedral Vieja por el exterior y continúa hacia la Plaza de las Flores. Con luz de mañana es el mejor momento para reconocer fachadas y orientarte.',
          'Si decides entrar a un primer recinto, hazlo aquí y confirma antes horario, zonas abiertas y posibles tarifas. Deja el resto de la mañana para el paseo.'
        ]
      },
      {
        h2: 'Mediodía · Comida y descanso',
        paragraphs: [
          'Reserva una pausa larga. Compara cartas visibles, pregunta por el menú del día y por el horario de cocina, y elige un sitio con espacio para el grupo. Esta guía no publica nombres de locales ni precios sin verificarlos.',
          'Aprovecha para revisar el plan de la tarde: si el cielo se cierra, adelanta los recintos cubiertos; si sale el sol, da prioridad al paseo por la ribera.'
        ]
      },
      {
        h2: 'Tarde · Museos, San Francisco y Tomebamba',
        paragraphs: [
          'El bloque de tarde puede incluir un segundo interior —el Museo de las Conceptas o el Museo Catedral Vieja, según horarios confirmados—, la Plaza San Francisco y el corredor de Calle Larga hacia el río Tomebamba.',
          'Son recorridos que aparecen en las rutas oficiales de la ciudad y que funcionan bien a pie. Revisa los cruces y el desnivel del tramo hacia el barranco si vas con niños o con movilidad reducida.'
        ]
      },
      {
        h2: 'Cierre · Volver a la plaza',
        paragraphs: [
          'Regresar al Parque Calderón al final del día permite ver la misma plaza con otra luz y otra actividad. Es también una forma cómoda de cerrar el itinerario cerca de los puntos de descenso del centro.',
          'Si piensas quedarte hasta después del anochecer, recuerda que el horario de 24 horas que Google Maps mostraba en octubre de 2026 es un dato de la ficha, no un horario confirmado por la administración ni una garantía de iluminación o seguridad.'
        ],
        note: 'La reapertura municipal anunciada en octubre de 2026 no fija un horario permanente. Comprueba avisos y restricciones para tu fecha.'
      },
      {
        h2: 'Dónde dormir y cómo llegar',
        paragraphs: [
          'Si el viaje continúa al día siguiente, elegir alojamiento en el Centro Histórico reduce los traslados; las guías de hoteles y de zonas para alojarse comparan opciones sin nombrar establecimientos no verificados.',
          'Para la llegada y la salida, las guías desde el aeropuerto, desde la Terminal Terrestre y de estacionamiento explican qué confirmar con el operador y por qué no conviene depender de una plaza junto al parque.'
        ]
      }
    ],
    faqs: [
      { q: '¿Se puede recorrer el centro de Cuenca en un día?', a: 'Sí, con un itinerario de dos bloques de paseo, una comida larga y como máximo dos visitas de interior con horarios confirmados. El parque sirve de inicio y de cierre.' },
      { q: '¿Cuántos museos incluye la ruta?', a: 'Como máximo dos, y siempre con horarios, zonas abiertas y posibles tarifas verificadas el mismo día. Esta guía no fija horarios de recintos.' },
      { q: '¿Dónde comer durante la jornada?', a: 'En la mitad del día, eligiendo según cartas y horarios del momento. No publicamos recomendaciones de locales sin comprobarlas.' },
      { q: '¿Se puede terminar de noche en el parque?', a: 'Puedes volver a última hora de la tarde. Para después del anochecer, comprueba avisos y restricciones: el dato de 24 horas de Maps no garantiza iluminación, servicios ni seguridad.' }
    ],
    related: ['ruta-medio-dia', 'ruta-1-hora', 'cerca/hoteles', 'donde-alojarse-centro-historico', 'mejores-fotos'],
    sources: ['visitCuenca', 'inpc', 'municipio', 'maps'],
    mentions: ['Parque Calderón', 'Centro Histórico de Cuenca', 'Museo de las Conceptas', 'Plaza San Francisco', 'río Tomebamba'],
    mapsQuery: 'Parque Calderón, Cuenca, Ecuador'
  },
  {
    slug: 'mejores-fotos',
    group: 'rutas',
    priority: 'P2',
    navTitle: 'Mejores fotos',
    card: 'Puntos de la plaza, fondos de cúpulas, luz cambiante y normas de respeto al fotografiar.',
    title: 'Mejores lugares para fotografiar el Parque Calderón, Cuenca',
    description: 'Dónde hacer las mejores fotos del Parque Calderón de Cuenca: cúpulas de la Catedral Nueva, monumento, glorieta y fachadas, con criterios de luz, composición y respeto a las personas.',
    h1: 'Fotografiar el Parque Calderón',
    lead: 'La plaza ofrece encuadres muy distintos en pocos pasos: el monumento, la glorieta, el arbolado y las cúpulas azules de la Catedral Nueva. Esta página propone puntos y criterios de composición sin prometer una hora de luz perfecta ni horarios que no podemos garantizar.',
    sections: [
      {
        h2: 'Punto 1 · Cúpulas azules con la plaza delante',
        paragraphs: [
          'El encuadre más reconocible sitúa las cúpulas de la Catedral Nueva al fondo y algún elemento de la plaza en primer término: árboles, la glorieta o el monumento. Incluir esa referencia evita una foto de fachada sin contexto.',
          'Camina unos pasos hacia los lados antes de disparar: pequeños desplazamientos cambian por completo la superposición de volúmenes y la cantidad de cielo.'
        ],
        bullets: [
          'Buscar un primer término que sitúe la escena en la plaza.',
          'Probar al menos dos lados de la plaza antes de elegir.',
          'Evitar que el monumento quede cortado por el borde del encuadre.',
          'Dejar margen para volver si la luz cambia.'
        ]
      },
      {
        h2: 'Punto 2 · Monumento a Abdón Calderón',
        paragraphs: [
          'Rodear el monumento permite elegir el fondo: fachadas cívicas por un lado, catedral por otro, arbolado por un tercero. Es un ejercicio sencillo que produce resultados más variados que una sola toma frontal.',
          'Incluye el pedestal y algo del pavimento para dar escala. Si hay gente cerca, espera un instante o amplía el encuadre en lugar de pedir que se aparte.'
        ]
      },
      {
        h2: 'Punto 3 · Glorieta y arbolado',
        paragraphs: [
          'La glorieta y los árboles permiten composiciones más íntimas, con luz filtrada y contrastes de sombra. Son buenos motivos en días de sol fuerte, cuando una foto amplia de la plaza queda demasiado plana.',
          'La glorieta formó parte de la intervención municipal comunicada en 2026, lo que la convierte además en un motivo interesante para comparar el parque con fotografías de época —siempre que esas imágenes tengan fecha y fuente.'
        ]
      },
      {
        h2: 'Punto 4 · Fachadas y calles del borde',
        paragraphs: [
          'Desde Simón Bolívar, Mariscal Sucre, Benigno Malo y Luis Cordero se obtienen vistas de cómo el parque se inserta en la trama urbana. Son encuadres menos publicados y muy útiles para explicar el Centro Histórico como conjunto.',
          'Fotografía desde la acera y los pasos señalizados, sin situarte en la calzada. Respeta la señalización y las zonas acotadas cuando haya actos.'
        ],
        note: 'No hay una hora garantizada de buena luz o de poca gente: avisos, actos y clima cambian. Decide según tu objetivo y deja margen para repetir la toma.'
      },
      {
        h2: 'Luz, clima y equipo',
        paragraphs: [
          'En Cuenca el sol puede ser intenso con temperatura fresca y una nube cambia la escena en minutos. Más que perseguir una hora exacta, conviene llevar protección solar, una capa ligera y tiempo suficiente para volver a pasar por un punto.',
          'Un objetivo versátil y el teléfono bastan. Si piensas usar trípode, dron o equipo voluminoso en un acto o recinto, consulta antes la normativa y las indicaciones locales: esta guía no fija reglas que no ha verificado.'
        ]
      },
      {
        h2: 'Respeto a las personas y al lugar',
        paragraphs: [
          'La plaza es un espacio de trabajo, de paso y de encuentro, no un plató. Pide permiso para retratos cercanos, evita fotografiar interiores donde esté prohibido y no bloquees accesos ni pasos peatonales.',
          'Tampoco subas al monumento ni te apoyes en elementos patrimoniales para conseguir altura. Las mejores fotos del parque suelen salir de caminar despacio y cambiar de punto de vista.'
        ]
      }
    ],
    faqs: [
      { q: '¿Cuál es el mejor sitio para fotografiar el Parque Calderón?', a: 'No hay uno único: prueba el encuadre de las cúpulas azules con la plaza en primer término, rodea el monumento para cambiar de fondo y busca la glorieta y el arbolado para tomas más íntimas.' },
      { q: '¿A qué hora hay mejor luz?', a: 'No garantizamos una hora: la luz de mañana y de tarde produce resultados distintos y el clima de Cuenca cambia rápido. Deja margen para volver a pasar por el mismo punto.' },
      { q: '¿Se puede usar dron o trípode?', a: 'Esta guía no verifica la normativa aplicable. Consulta las indicaciones locales y del recinto antes de usar ese equipo, especialmente durante actos.' },
      { q: '¿Puedo fotografiar a vendedores o viandantes?', a: 'Para retratos cercanos, pide permiso. En plano general de la plaza, procura no bloquear el paso ni interrumpir la actividad de quienes trabajan allí.' }
    ],
    related: ['glorieta-parque-calderon', 'monumento-abdon-calderon', 'ruta-1-hora', 'ruta-un-dia', 'visitar-con-lluvia'],
    sources: ['municipio', 'inpc', 'maps'],
    mentions: ['Parque Calderón', 'Catedral Nueva de Cuenca', 'Abdón Calderón'],
    mapsQuery: 'Parque Calderón, Cuenca, Ecuador'
  },
  {
    slug: 'visitar-con-lluvia',
    group: 'rutas',
    priority: 'P2',
    navTitle: 'Visitar con lluvia',
    card: 'Plan B del centro histórico: qué adelantar, qué acortar y cómo moverse con pavimento mojado.',
    title: 'Visitar el Parque Calderón con lluvia: plan alternativo',
    description: 'Qué hacer si llueve en Cuenca al visitar el Parque Calderón: reorganizar el día con recintos cubiertos, pavimento mojado, ropa y calzado, y planes de interior con horarios a confirmar.',
    h1: 'El Parque Calderón cuando llueve',
    lead: 'La lluvia no arruina una visita al centro de Cuenca, pero sí obliga a cambiar el orden. Esta página propone un plan B: adelantar los interiores, acortar las plazas y aprovechar los claros, sin dar por supuestos horarios de recintos que no hemos verificado.',
    sections: [
      {
        h2: 'Qué cambia con lluvia',
        paragraphs: [
          'El parque sigue siendo espacio público, pero pierde parte de su comodidad: bancos mojados, pavimento resbaladizo, menos ganas de detenerse y fotografías con cielo plano. La estimación de 45–90 minutos de la guía principal puede acortarse bastante.',
          'En Cuenca los chubascos pueden ser breves y el tiempo cambiar durante el paseo. Más que cancelar, conviene reorganizar: deja la plaza para los claros y usa la lluvia para los recintos cubiertos.'
        ]
      },
      {
        h2: 'Reordenar el día',
        paragraphs: [
          'Un esquema sencillo es: empezar por un interior con horario confirmado, comer o tomar un café cuando arrecie, y volver a la plaza cuando aclare. Así el tramo al aire libre no condiciona toda la jornada.',
          'No encadenes museos y catedrales sin comprobar antes si están abiertos: en días de lluvia y de actos los horarios pueden cambiar, y una suposición te deja sin plan.'
        ],
        bullets: [
          'Adelantar un museo o templo con horario verificado.',
          'Usar la pausa de café o comida como refugio del chubasco.',
          'Volver a la plaza en los claros para las fotos.',
          'Recortar el número de paradas al aire libre.'
        ],
        note: 'Esta guía no confirma horarios ni tarifas de catedrales y museos. Verifícalos el mismo día antes de basar en ellos el plan B.'
      },
      {
        h2: 'Interiores cercanos a considerar',
        paragraphs: [
          'El Museo Catedral Vieja, el Museo de las Conceptas y el interior de la Catedral Nueva son opciones razonables dentro de un paseo por el centro, siempre que ese día estén abiertos y sus condiciones lo permitan.',
          'También sirven como refugio las cafeterías y restaurantes del entorno; esta guía no nombra locales concretos, así que compara cartas y horarios sobre el terreno.'
        ]
      },
      {
        h2: 'Ropa, calzado y pavimento',
        paragraphs: [
          'Lleva una capa impermeable ligera, calzado con buena suela y protección para la cámara o el teléfono. El pavimento del centro histórico combina materiales de distintas épocas y puede quedar resbaladizo.',
          'Cruza por pasos señalizados y reduce la velocidad en los bordillos y en las zonas de sombra. Con niños o con movilidad reducida, revisa el trayecto concreto antes de salir.'
        ],
        bullets: [
          'Calzado antideslizante y capa ligera.',
          'Bolsa o funda para el equipo.',
          'Cruces por pasos señalizados y con margen.',
          'Pausas más frecuentes para el grupo.'
        ]
      },
      {
        h2: 'Aprovechar los claros para fotografiar',
        paragraphs: [
          'Después de la lluvia, el pavimento mojado y el cielo despejado pueden dar imágenes interesantes de las cúpulas azules y del monumento. Es un buen momento para volver a la plaza con la cámara protegida.',
          'No fuerces una hora concreta: la luz cambia rápido. Consulta la guía de fotografía para elegir puntos y composiciones sin depender de una franja garantizada.'
        ]
      },
      {
        h2: 'Si la lluvia se prolonga',
        paragraphs: [
          'Con lluvia continua, reduce la visita a la ruta de 30 minutos recortada y pasa el resto del tiempo a cubierto. Volver otro día suele dar mejores resultados que insistir en un recorrido completo.',
          'Las rutas de medio día y de un día de este sitio incluyen descansos y permiten reorganizar el orden de los tramos sin perder el hilo del itinerario.'
        ]
      }
    ],
    faqs: [
      { q: '¿Merece la pena ir al Parque Calderón si llueve?', a: 'Sí, ajustando el plan: acorta la estancia al aire libre, adelanta un interior con horario confirmado y vuelve a la plaza en los claros.' },
      { q: '¿Qué se puede visitar a cubierto cerca?', a: 'El Museo Catedral Vieja, el Museo de las Conceptas o el interior de la Catedral Nueva, siempre que estén abiertos ese día. Confirma horarios y posibles entradas antes de contar con ellos.' },
      { q: '¿Es peligroso el pavimento mojado?', a: 'Puede estar resbaladizo. Usa calzado con buena suela, cruza por pasos señalizados y reduce la velocidad, especialmente con niños o movilidad reducida.' },
      { q: '¿Se cierra el parque cuando llueve?', a: 'Esta guía no ha verificado una regla de cierre por lluvia. Puede haber restricciones por actos, mantenimiento o instrucciones locales; comprueba los avisos para tu fecha.' }
    ],
    related: ['ruta-medio-dia', 'ruta-un-dia', 'mejores-fotos', 'mejor-hora-visitar', 'visitar-con-ninos'],
    sources: ['municipio', 'visitCuenca', 'maps'],
    mentions: ['Parque Calderón', 'Museo Catedral Vieja', 'Museo de las Conceptas', 'Catedral Nueva de Cuenca'],
    mapsQuery: 'Parque Calderón, Cuenca, Ecuador'
  }
];
