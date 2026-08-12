import { PRIVATE_ROUTE } from "./site-config.js";

export const heroChips = [
  "Auto1 + Copart Alemania",
  "16 módulos prácticos",
  "Pago único",
  "Acceso personal"
];

export const problemCards = [
  {
    title: "Pujar sin haber leído bien",
    description:
      "Una ficha, una foto o una nota que pasas por alto puede cambiar por completo el coste y el sentido de una operación."
  },
  {
    title: "Confundir precio con coste",
    description:
      "La puja es solo una parte. Comisiones, documentación, recogida y transporte también deciden si la compra encaja."
  },
  {
    title: "Llegar tarde a los plazos",
    description:
      "Pago, PIN, reserva, recogida y logística tienen reglas. Improvisarlas puede generar gastos y problemas operativos."
  },
  {
    title: "Decidir con emoción",
    description:
      "Sin un máximo pensado de antemano es fácil perseguir una puja y pagar más de lo que la oportunidad justificaba."
  }
];

export const learningCards = [
  {
    title: "Filtrar antes de perder horas",
    description:
      "Ubicación, país, modelo, kilometraje, precio y otros criterios para reducir ruido y concentrarte en lo que merece revisión."
  },
  {
    title: "Leer una ficha con orden",
    description:
      "Notas, prueba dinámica, fotos, cuadro, daños, documentación y logística: qué mirar y en qué secuencia."
  },
  {
    title: "Preparar la puja con límites",
    description:
      "Cómo separar el objetivo del máximo y evitar que la dinámica de una subasta decida por ti."
  },
  {
    title: "Entender los riesgos de Copart",
    description:
      "Indicadores R y S, documentación alemana, daños declarados, avisos y señales que requieren más cautela."
  },
  {
    title: "Planificar pago y recogida",
    description:
      "Pasos, plazos, PIN, campa, placas, transporte y coordinación para que la operación no termine en improvisación."
  },
  {
    title: "Construir un criterio repetible",
    description:
      "Checklists y herramientas para revisar oportunidades con una base más consistente antes de tomar decisiones."
  }
];

export const platforms = [
  {
    code: "A1",
    title: "AUTO1",
    subtitle: "Búsqueda, ficha y operativa",
    description:
      "Aprende a moverte entre Subasta 24h y Comprar Ahora, a filtrar con intención y a revisar una ficha antes de decidir.",
    points: [
      "Filtros y búsqueda eficiente",
      "Notas, prueba dinámica, daños y documentación",
      "Pago, PIN, logística y recogida"
    ]
  },
  {
    code: "DE",
    title: "COPART ALEMANIA",
    subtitle: "Daños, puja y recogida",
    description:
      "Entiende cómo leer los indicadores y la documentación, analizar daños, preparar una puja y organizar la salida del vehículo.",
    points: [
      "R, S, ZB1/ZB2, COC y avisos",
      "Fotos, daños y señales de riesgo",
      "Máximo, reserva, pago y transporte"
    ]
  }
];

export const toolCards = [
  {
    metric: "16",
    label: "módulos",
    description: "Una ruta ordenada desde los fundamentos hasta la recogida."
  },
  {
    metric: "02",
    label: "plataformas",
    description: "Auto1 y Copart Alemania tratadas con su lógica propia."
  },
  {
    metric: "PDF",
    label: "checklist",
    description: "Una referencia descargable para revisar antes de actuar."
  },
  {
    metric: "18",
    label: "meses mínimos",
    description: "Acceso mínimo garantizado, sin perjuicio de tus derechos legales."
  }
];

export const audienceYes = [
  "Estás empezando y quieres una base antes de tomar decisiones.",
  "Ya miras subastas, pero sientes que te faltan orden y criterios.",
  "Quieres entender mejor Auto1 y Copart sin aprender solo a base de errores.",
  "Necesitas pensar mejor fichas, pujas, plazos y recogidas."
];

export const audienceNo = [
  "No es una promesa de dinero fácil ni de rentabilidad garantizada.",
  "No es acceso mágico a vehículos baratos sin análisis ni riesgo.",
  "No sustituye tus comprobaciones profesionales, técnicas o legales.",
  "No es teoría para acumular: está pensado para revisar y decidir con criterio."
];

export const courseProgram = [
  {
    number: "01",
    title: "Fundamentos de las subastas",
    count: "6 módulos",
    description:
      "Requisitos, lógica del mercado profesional, coste real, reglas y preparación de una puja antes de entrar en una plataforma.",
    topics: ["Requisitos y contexto", "Coste real y máximo", "Reglas y criterio de puja"]
  },
  {
    number: "02",
    title: "AUTO1",
    count: "4 módulos",
    description:
      "De la búsqueda inicial a la recogida: plataforma, filtros, ficha, documentación, logística y campa.",
    topics: ["Subasta 24h y Comprar Ahora", "Filtros y ficha", "Pago, PIN y recogida"]
  },
  {
    number: "03",
    title: "COPART",
    count: "5 módulos",
    description:
      "Indicadores, documentación, daños, puja en vivo, coches que conviene evitar y transporte desde Alemania.",
    topics: ["R, S y documentación", "Daños y puja", "Recogida y transporte"]
  }
];

export const faqs = [
  {
    question: "¿Es para principiantes o también sirve si ya miro subastas?",
    answer:
      "Está pensado para ambos perfiles. Si empiezas, te da una ruta para no ir a ciegas. Si ya llevas tiempo mirando, te ayuda a ordenar criterios y detectar detalles que quizá no revisas de forma sistemática."
  },
  {
    question: "¿Qué plataformas incluye?",
    answer:
      "El contenido se centra en Auto1 y Copart Alemania. Cada plataforma se trabaja por separado porque sus fichas, reglas, pujas y procesos de recogida no funcionan igual."
  },
  {
    question: "¿BCA está incluida?",
    answer:
      "No. BCA no forma parte del contenido actual de SubastasPro. La formación incluida se concentra exclusivamente en los módulos disponibles de Auto1 y Copart."
  },
  {
    question: "¿Necesito experiencia previa?",
    answer:
      "No necesitas experiencia previa, aunque muchas subastas profesionales exigen operar como autónomo o empresa y pueden solicitar documentación como IAE, DNI o CIF."
  },
  {
    question: "¿Cómo accedo después del pago?",
    answer:
      "Recibirás un email con tu código personal. Para entrar tendrás que introducir el correo usado en la compra y ese código en el área privada."
  },
  {
    question: "¿El acceso es personal?",
    answer:
      "Sí. El acceso está vinculado al correo utilizado en la compra y a un código individual. No debe compartirse con otras personas."
  },
  {
    question: "¿Cuánto tiempo tendré acceso?",
    answer:
      "Tendrás un acceso mínimo garantizado de 18 meses, sin perjuicio de los derechos legales que te correspondan como consumidor."
  },
  {
    question: "¿Incluye recursos prácticos?",
    answer:
      "Sí. El curso incluye progreso por módulos, vídeos integrados en los módulos disponibles, herramientas de revisión y un checklist descargable."
  },
  {
    question: "¿Esto garantiza que voy a ganar dinero?",
    answer:
      "No. Ninguna formación puede garantizar el resultado de una compra. SubastasPro te ayuda a analizar con más criterio y a reducir errores evitables, pero cada operación conserva sus riesgos."
  },
  {
    question: "¿Qué ocurre justo después del pago?",
    answer:
      "Stripe confirma el pago y el sistema prepara tu acceso personal. Verás una página de confirmación y recibirás por email las instrucciones para entrar al curso."
  }
];

export const auto1ChecklistItems = [
  "He revisado otras notas/comentarios",
  "He revisado prueba dinámica",
  "He revisado datos técnicos",
  "He revisado daños previos/accidente",
  "He revisado fotos principales",
  "He revisado fotos del apartado daños",
  "He revisado foto del cuadro/testigos",
  "He revisado documentación",
  "He revisado letra K/COC si aplica",
  "He revisado país de origen y última matriculación",
  "He revisado logística/transporte",
  "He decidido si descartar, vigilar o seguir analizando"
];

export const pickupChecklistItems = [
  "Datos de pago recibidos",
  "Transferencia realizada",
  "Justificante enviado al gestor",
  "Día de recogida seleccionado",
  "Horario de corte vigente comprobado",
  "PIN recibido",
  "Instrucciones de campa revisadas",
  "DNI/pasaporte preparado",
  "Seguro temporal preparado",
  "Ficha/fotos guardadas",
  "Transporte o placas organizado",
  "Chaleco reflectante si es extranjero"
];

export const copartKeys = [
  { term: "R verde", description: "Arranca, engrana y se mueve hacia delante y atrás." },
  { term: "S azul", description: "Arranca y engrana, pero no se confirma que se mueva." },
  { term: "Sin letra", description: "Normalmente implica más riesgo y menos información útil." },
  { term: "ZB1/ZB2", description: "Documentación alemana grande y pequeña del vehículo." },
  { term: "COC", description: "Certificate of Conformity para facilitar homologación." },
  { term: "International Documents", description: "Documentación fuera de Alemania que exige más revisión." },
  { term: "Primary damage", description: "Daño principal declarado en la ficha." },
  { term: "Secondary damage", description: "Daño secundario que puede cambiar la operación." },
  { term: "Additional info", description: "Campo donde a veces aparece la pista clave." }
];

export const copartAvoidItems = [
  "S o sin letra si estás empezando",
  "Documentación USA o International Documents sospechoso",
  "Airbag desplegado",
  "Óxido fuerte",
  "Muy baratos sin estrategia clara",
  "No aptos para circular si quieres usar placas rojas"
];

const originalCourseModules = [
  {
    id: "module-1",
    slug: "requisitos-subastas",
    title: "Requisitos para entrar en subastas",
    duration: "8 min",
    summary:
      "Qué suelen pedir las plataformas profesionales antes de dejarte comprar y por qué lo hacen.",
    learning: [
      "Entender qué documentación suelen pedir Auto1, Copart y otras plataformas profesionales.",
      "Saber qué es el IAE y por qué suele ser una pieza clave en el alta.",
      "Diferenciar lo normal en autónomos y empresas antes de registrarte."
    ],
    bullets: [
      "Para comprar en muchas subastas necesitas ser autónomo o empresa.",
      "Suelen pedir IAE del año actual para comprobar la actividad.",
      "Autónomo: DNI, IAE y dirección.",
      "Empresa: CIF, IAE, dirección y a veces escrituras."
    ],
    quote:
      "Entrar en subastas no es solo registrarse. Es demostrar que compras como profesional.",
    miniChecklist: [
      "Confirmar si la plataforma exige alta profesional.",
      "Preparar DNI o CIF y dirección actualizada.",
      "Tener IAE del año en curso a mano.",
      "Preguntar por documentos extra antes de empezar el registro."
    ],
    sections: [
      {
        title: "Qué te suelen pedir y por qué",
        paragraphs: [
          "En muchas subastas profesionales no basta con abrir una cuenta y ya está. La plataforma quiere comprobar que compras dentro de una actividad real relacionada con automoción, compraventa o gestión profesional de vehículos.",
          "Por eso suelen pedir documentación de alta profesional. No es un capricho: les sirve para filtrar usuarios, reducir incidencias y asegurarse de que quien puja entiende la operativa comercial."
        ],
        bullets: [
          "Autónomo o empresa en la mayoría de plataformas profesionales.",
          "Documentos de identidad y dirección.",
          "Justificante de actividad vinculado a compraventa o similar."
        ],
        callout: {
          tone: "note",
          label: "Idea clave",
          text: "Cada subasta puede pedir documentos adicionales. Lo correcto es tratar la lista minima como punto de partida, no como garantia absoluta."
        }
      },
      {
        title: "El IAE explicado sin complicarlo",
        paragraphs: [
          "El IAE es, dicho en sencillo, el documento o referencia con la que acreditas a que actividad económica estás dado de alta. A la plataforma le ayuda a ver que no entras como alguien que compra por impulso, sino como alguien que opera con una actividad reconocible.",
          "No significa que con solo tener IAE ya este todo aprobado. Significa que das una primera prueba clara de que tu actividad encaja con lo que la plataforma espera."
        ],
        bullets: [
          "Les sirve para comprobar a que actividad te dedicas.",
          "Les ayuda a validar que compras en contexto profesional.",
          "Reduce altas que luego acaban bloqueadas o rechazadas."
        ]
      },
      {
        title: "Autónomo y empresa: qué suele cambiar",
        paragraphs: [
          "Si eres autónomo, lo normal es que te pidan una combinación sencilla: DNI, IAE y dirección. En empresas, además del CIF, a veces entran documentos de constitución o escrituras si quieren una verificación más completa.",
          "No hace falta sobredramatizar este paso. En muchos casos un gestor te lo deja preparado rápido y con bastante más orden del que tendrias si empiezas a improvisar documentos el mismo día del registro."
        ],
        bullets: [
          "Autónomo: DNI, IAE y dirección.",
          "Empresa: CIF, IAE, dirección y a veces escrituras.",
          "Un gestor puede preparar el alta o la documentación con bastante rapidez."
        ],
        alert: {
          tone: "note",
          label: "Consejo útil",
          text: "Antes de registrarte, prepara la documentación profesional mínima. Así evitas cuentas pendientes de validar, correos innecesarios y tiempo perdido."
        }
      },
      {
        title: "Y si solo quieres probar o empezar",
        paragraphs: [
          "Mucha gente frena aquí porque piensa que darse de alta es una decisión enorme. En realidad, para bastantes perfiles lo importante es entender que la actividad se puede abrir, usar y, si no se continúa, cerrar después con apoyo de gestor.",
          "Lo que no conviene es entrar a una subasta profesional creyendo que funcionara como una web abierta para cualquiera. Si el acceso está pensado para profesionales, la parte administrativa forma parte del juego desde el principio."
        ],
        example: {
          title: "Consejo útil",
          text: "Si todavía no eres autónomo y solo quieres empezar a mirar subastas, puedes valorar pedir ayuda a algún autónomo o empresa de confianza que ya tenga actividad relacionada y pueda abrir o tener el epígrafe correspondiente. Hazlo siempre bien y con asesoramiento, porque cada plataforma puede pedir requisitos distintos."
        }
      }
    ]
  },
  {
    id: "module-2",
    slug: "subasta-vs-compra-clasica",
    title: "Subasta vs compra clásica",
    duration: "10 min",
    summary:
      "La diferencia real entre ver el coche en persona y decidir solo con ficha, fotos y documentación.",
    learning: [
      "Ver con claridad en que cambia la toma de decisiones en subasta.",
      "Detectar señales de ficha pobre o poco trabajada.",
      "Entender el papel de los vicios ocultos y de las reclamaciones."
    ],
    bullets: [
      "En compra clásica puedes ver, probar, negociar y conectar diagnosis.",
      "En subasta dependes de ficha, fotos, documentación y prueba dinámica.",
      "Las fichas las hacen humanos: unas son muy útiles y otras muy pobres."
    ],
    quote:
      "En subasta no compras información perfecta. Compras información suficiente para decidir si el riesgo tiene sentido.",
    miniChecklist: [
      "Asumir que no verás el coche antes de pagar.",
      "Valorar la calidad de ficha antes de enamorarte del lote.",
      "Separar riesgo aceptable de riesgo ciego.",
      "Pensar como reclamarias si algo no coincide."
    ],
    sections: [
      {
        title: "La diferencia no es pequeña: cambia todo el proceso",
        paragraphs: [
          "Comprar un coche de forma clásica y comprarlo en subasta se parecen en el objetivo final, pero no en el camino. En una compra clásica puedes acercarte, ver el estado real, tocar el interior, arrancarlo, llevar diagnosis y marcharte si no te convence.",
          "En subasta, en cambio, gran parte de la decisión se toma antes de pisar la campa. Lo que manda es la información disponible: ficha, fotos, documentación, comentarios del inspector, prueba dinámica y contexto del lote."
        ],
        bullets: [
          "Compra clásica: ver, probar, negociar, diagnosticar e irte.",
          "Subasta: leer, interpretar, comparar y asumir un nivel de incertidumbre."
        ]
      },
      {
        title: "De que dependes realmente en subasta",
        paragraphs: [
          "Cuando compras en subasta dependes de la ficha y de como este hecha. Esa ficha resume lo que alguien vio y quiso o pudo reflejar. Si el inspector fue preciso, tienes una base buena. Si fue vago, el margen de duda crece mucho.",
          "Por eso no basta con leer el titular del lote. Hay que revisar documentación, prueba dinámica, interior, exterior, daños, cuadro y cualquier nota que explique algo fuera de lo normal."
        ],
        bullets: [
          "Ficha del lote.",
          "Fotos y calidad visual de esas fotos.",
          "Documentación disponible.",
          "Estado interior y exterior descrito o visible.",
          "Comentarios y notas del inspector."
        ]
      },
      {
        title: "Cómo huele una ficha vaga",
        paragraphs: [
          "Las fichas las hacen humanos y eso se nota mucho. Hay inspectores que documentan bien y otros que dejan demasiadas zonas grises. Cuando una ficha es vaga, no significa siempre que el coche sea malo, pero si que te exige más prudencia.",
          "Aprender a detectar esa pobreza documental es una parte importante del oficio, porque muchas malas compras nacen de un exceso de confianza frente a una ficha que avisaba, precisamente, por lo poco que decia."
        ],
        bullets: [
          "Pocas fotos.",
          "Fotos borrosas o demasiado oscuras.",
          "Daños mal enseñados o mal encuadrados.",
          "Descripciones demasiado generales."
        ],
        alert: {
          tone: "alert",
          label: "No confundas",
          text: "Ficha corta no significa obligatoriamente oportunidad oculta. A veces solo significa información insuficiente para comprar con criterio."
        }
      },
      {
        title: "Vicios ocultos y reclamaciones",
        paragraphs: [
          "Los vicios ocultos existen en subasta y en compra tradicional. La diferencia es que en subasta, al no ver el coche antes, dependes mucho más de la coherencia entre lo anunciado y lo que realmente aparece al recoger.",
          "La ventaja es que puedes analizar muchos coches desde casa y ahorrar desplazamientos inútiles. La desventaja es que, si algo no encaja, la defensa del caso llega después y no antes."
        ],
        example: {
          title: "Lectura práctica",
          text: "Si una ficha está bien hecha, te evita viajes y multiplica el número de coches que puedes estudiar. Si está mal hecha, debes compensarlo con más prudencia y un límite de puja más duro."
        }
      }
    ]
  },
  {
    id: "module-3",
    slug: "auto1-desde-dentro",
    title: "Auto1 desde dentro",
    duration: "12 min",
    summary:
      "Cómo entender Auto1 como una falsa subasta o marketplace profesional, seguir bajadas con criterio y decidir cuándo esperar o cuándo comprar.",
    learning: [
      "Entender por qué Auto1 se analiza mejor como una falsa subasta o marketplace profesional.",
      "Leer con más criterio la relación entre Subasta 24h, Comprar Ahora y las bajadas de precio.",
      "Usar favoritos, notas y seguimiento para decidir con más calma y menos impulso."
    ],
    bullets: [
      "Auto1 muchas veces se parece más a un marketplace con dinámica de subasta que a una subasta clásica.",
      "El precio visible puede acercarse bastante al precio real de compra, pero nunca al coste total.",
      "La ventaja real está en observar coches, seguir bajadas y entrar solo cuando precio, riesgo y margen encajan."
    ],
    quote:
      "En Auto1 no gana quien mira más coches. Gana quien sigue mejor los coches correctos.",
    miniChecklist: [
      "¿Estoy mirando el precio visible o el coste real?",
      "¿He sumado comisión, transporte y resto de gastos?",
      "¿Está en Subasta 24h o en Comprar Ahora?",
      "¿Lo he guardado en favoritos y he apuntado el precio actual?",
      "¿Ha bajado en los últimos días o lleva tiempo parado?",
      "¿Comprar ahora tiene sentido o puedo esperar mejor entrada?"
    ],
    // Para activar un vídeo:
    // 1. Sube el vídeo a YouTube como no listado.
    // 2. Copia el ID del vídeo.
    // 3. Pégalo en youtubeId.
    // 4. Cambia status a "ready".
    video: {
      status: "ready",
      title: "Auto1 desde dentro: precio visible, Subasta 24h y Comprar Ahora",
      description:
        "Te explico este módulo con pantalla real, ejemplos y mi forma de analizarlo.",
      duration: "12 min",
      videoUrl: "https://www.youtube.com/embed/X2m0R44KdMs",
      youtubeId: "X2m0R44KdMs"
    },
    sections: [
      {
        title: "Idea principal del módulo",
        paragraphs: [
          "Auto1 no se vive como una subasta clásica. Yo lo llamo una falsa subasta porque, en muchos casos, funciona más como un marketplace profesional con dinámica de subasta que como una subasta pura.",
          "En una subasta clásica puedes tener una pelea real por el coche, con pujas subiendo rápido y un precio final difícil de prever. En Auto1, muchas veces el precio que ves se parece bastante al precio por el que podrías llevarte el vehículo, siempre sumando la comisión y los gastos de la operación.",
          "Esa diferencia cambia totalmente la forma de analizar coches. En Auto1 no se trata solo de pujar rápido. Se trata de observar, guardar, comparar, esperar bajadas y decidir cuándo tiene sentido entrar."
        ],
        callout: {
          tone: "note",
          label: "Idea clave",
          text: "Auto1 permite analizar con más calma que una subasta tradicional porque muchas veces el precio visible se acerca bastante al precio real de compra. Pero eso no significa que el precio visible sea el coste total."
        }
      },
      {
        title: "Auto1 no se vive como una subasta clásica",
        paragraphs: [
          "Auto1 tiene dinámica de subasta, pero no siempre se comporta como una subasta agresiva. Muchas veces el coche puede terminar saliendo por el precio visible o por una cifra muy cercana.",
          "A ese precio hay que sumarle la comisión de Auto1, transporte o recogida, cambio de nombre o matriculación, garantía si aplica, posibles reparaciones y el margen real después de todos los gastos.",
          "Eso hace que Auto1 sea más fácil de analizar que otras subastas. Puedes calcular antes con mucha más facilidad si un coche tiene margen o no."
        ],
        bullets: [
          "Precio visible del coche.",
          "Comisión de Auto1.",
          "Transporte o recogida.",
          "Cambio de nombre o matriculación.",
          "Garantía si aplica.",
          "Posibles reparaciones.",
          "Margen real después de todos los gastos."
        ],
        // Antes de subir capturas reales, tapa matrícula, bastidor/VIN,
        // datos personales, nombres, direcciones, códigos internos y
        // cualquier información sensible del cliente o de la operación.
        images: [
          {
            src: "/course-images/auto1/precio-visible-auto1.jpg",
            alt: "Captura del precio visible de un vehículo en Auto1",
            label: "Ejemplo Auto1",
            caption:
              "Ejemplo de precio visible en Auto1. La clave es no mirar solo el número principal, sino sumar comisión, transporte y gastos de la operación.",
            layout: "single",
            blurSensitive: true
          }
        ]
      },
      {
        title: "Cuándo hay subastas en Auto1",
        paragraphs: [
          "Auto1 muestra ventanas y calendarios de subasta que debes comprobar en la propia plataforma. Incluso cuando no hay una subasta activa, puedes entrar a mirar vehículos disponibles, revisar fichas y preparar favoritos.",
          "Esto es importante porque no hace falta esperar al momento exacto de puja para analizar. Puedes usar los periodos sin subasta para revisar coches, guardar opciones y preparar una estrategia.",
          "Auto1 no funciona como otras plataformas donde ves un contador largo tipo termina en 4 días y 3 horas. Muchas subastas suelen moverse en ciclos cortos, normalmente de unas 24 horas."
        ]
      },
      {
        title: "Subasta 24h: el juego está en observar",
        paragraphs: [
          "La Subasta 24h suele durar eso mismo: un ciclo corto donde el coche se expone durante aproximadamente un día. Si nadie puja, muchas veces el precio baja en días posteriores. No siempre baja igual ni cada día, pero sí es habitual ver coches que van ajustando el precio poco a poco.",
          "Por eso yo recomiendo usar favoritos. Si un coche te gusta pero todavía no lo tienes claro, no lo pierdas de vista. Guárdalo y apunta el precio que tiene ese día."
        ],
        bullets: [
          "Día 1: lo veo en 6.800 €.",
          "Lo guardo en favoritos.",
          "Apunto en notas: Visto a 6.800 €.",
          "Día 5: vuelve a aparecer en 6.400 €.",
          "Día 10: está en 6.100 €.",
          "Día 15: ya no baja."
        ],
        images: [
          {
            src: "/course-images/auto1/subasta-24h-comprar-ahora.jpg",
            alt: "Captura de la zona de Subasta 24h y Comprar Ahora en Auto1",
            label: "Subasta 24h / Comprar Ahora",
            caption:
              "Auto1 alterna entre dinámicas de subasta corta y compra directa. Por eso conviene seguir los coches en favoritos y observar bajadas.",
            layout: "single",
            blurSensitive: true
          }
        ],
        callout: {
          tone: "note",
          label: "Consejo útil",
          text: "Aunque ahora no vayas a comprar, conviene mirar coches de vez en cuando y guardar favoritos interesantes. Así, cuando realmente quieras comprar, ya tendrás vehículos vigilados y sabrás si han bajado, si se han quedado parados o si incluso han subido."
        }
      },
      {
        title: "Cómo entender las bajadas de precio",
        paragraphs: [
          "Auto1 suele empezar muchos vehículos con un precio de salida alto. Si el coche no se vende, puede ir bajando poco a poco. Esto no significa que todos los coches se vuelvan chollos. Significa que hay que tener paciencia y saber leer el movimiento.",
          "Si durante varios días el precio ya no baja, puede ser señal de que el coche está cerca de su mínimo. En esos casos, Auto1 puede mantenerlo un tiempo en ese rango.",
          "Cuando un coche lleva mucho tiempo parado, a veces puede aparecer con una rebaja más fuerte. Normalmente esto se nota porque el anuncio aparece destacado en rojo o indicando la rebaja aplicada."
        ],
        images: [
          {
            src: "/course-images/auto1/rebajas-auto1-rojo.jpg",
            alt: "Captura de una rebaja o anuncio en rojo en Auto1",
            label: "Rebaja destacada",
            caption:
              "Cuando aparece una rebaja fuerte o un anuncio en rojo, conviene revisar muy bien por qué sigue sin venderse antes de emocionarte con el descuento.",
            layout: "single",
            blurSensitive: true
          }
        ],
        alert: {
          tone: "alert",
          label: "No confundas",
          text: "Que un coche baje de precio no significa automáticamente que sea una buena compra. Una bajada solo es interesante si después de sumar todos los gastos todavía queda margen y el riesgo tiene sentido."
        }
      },
      {
        title: "Comprar Ahora: comodidad, pero normalmente algo más caro",
        paragraphs: [
          "Además de la Subasta 24h, Auto1 tiene vehículos en Comprar Ahora. Normalmente, los coches pueden ir alternando entre Subasta 24h y Comprar Ahora. Cuando termina el contador y nadie puja, el sistema puede mover el vehículo de una dinámica a otra.",
          "La ventaja es clara: si el coche te interesa, puedes comprarlo directamente sin esperar al cierre de una subasta. La desventaja es que, muchas veces, el precio en Comprar Ahora es ligeramente más alto que cuando el mismo coche aparece en Subasta 24h."
        ],
        callout: {
          tone: "note",
          label: "Idea clave",
          text: "Comprar Ahora da comodidad, pero muchas veces pagarás algo más por esa comodidad. Si no tienes prisa, observar puede darte mejor punto de entrada."
        }
      },
      {
        title: "El efecto bola de nieve en Comprar Ahora",
        paragraphs: [
          "Muchas veces, si un coche está en Comprar Ahora, significa que otros profesionales ya lo han visto y no lo han comprado. Entonces se genera una especie de efecto bola de nieve: si otros lo han visto y no lo han comprado, será por algo.",
          "A veces esa sospecha es correcta. Puede haber un problema oculto en ficha, un margen pobre, una documentación complicada o un daño que no interesa. Pero otras veces no. A veces hay coches buenos que simplemente han pasado desapercibidos o no encajan con la compra de otros profesionales."
        ],
        alert: {
          tone: "alert",
          label: "Idea clave",
          text: "Comprar Ahora no significa coche malo. Significa que tienes que revisar por qué sigue ahí. Si encuentras una razón lógica y el margen encaja, puede ser una oportunidad."
        }
      },
      {
        title: "Cuándo comprar en Comprar Ahora y cuándo esperar",
        paragraphs: [
          "Si ves un coche en Comprar Ahora y te gusta, tienes dos opciones. La primera es comprarlo directamente. Esto tiene sentido si ves una oportunidad muy clara, si el precio ya encaja, si tienes cliente, si el margen es fuerte o si crees que otros no han visto el valor que tú sí has detectado.",
          "La segunda opción es esperar. Muchas subastas terminan aproximadamente sobre las 17:00. Si el coche está en Comprar Ahora y nadie lo compra, es posible que vuelva a aparecer en Subasta 24h y que el precio sea más bajo.",
          "No es una regla matemática perfecta, pero es una dinámica que merece la pena observar. Si el coche no es una megaganga y no tienes urgencia, esperar puede ahorrarte dinero."
        ],
        callout: {
          tone: "note",
          label: "Consejo práctico",
          text: "Si un coche de Comprar Ahora te gusta, guárdalo en favoritos, apunta el precio y revisa si vuelve a Subasta 24h. Si vuelve más barato y sigue encajando, tendrás mejor punto de entrada."
        }
      },
      {
        title: "Estrategia real para usar Auto1",
        paragraphs: [
          "La forma más inteligente de usar Auto1 no es entrar un día, ver coches durante una hora y comprar el primero que parezca barato. La estrategia real es construir seguimiento.",
          "Cada semana puedes revisar coches que encajan con tu tipo de compra, guardar favoritos interesantes, apuntar precio actual en notas, revisar si bajan en días posteriores, detectar cuáles se quedan parados y calcular el coste real antes de pujar."
        ],
        bullets: [
          "Revisar coches que encajan con tu tipo de compra.",
          "Guardar favoritos interesantes.",
          "Apuntar precio actual en notas.",
          "Revisar si bajan en días posteriores.",
          "Detectar cuáles se quedan parados.",
          "Revisar si pasan de Comprar Ahora a Subasta 24h.",
          "Calcular el coste real antes de pujar.",
          "Comprar solo cuando precio, riesgo y margen encajan."
        ],
        images: [
          {
            src: "/course-images/auto1/favoritos-notas-auto1.jpg",
            alt: "Captura de favoritos y notas en Auto1",
            label: "Seguimiento",
            caption:
              "Guardar favoritos y anotar precios ayuda a detectar si un coche se está quedando parado, si empieza a bajar o si se acerca a una zona interesante.",
            layout: "single",
            blurSensitive: true
          }
        ]
      },
      {
        title: "Lo que debes recordar",
        paragraphs: [
          "Auto1 no es una subasta clásica. Funciona muchas veces como una mezcla entre subasta corta y marketplace profesional.",
          "El precio visible puede acercarse bastante al precio real de compra, pero nunca debes olvidar la comisión y los gastos. La Subasta 24h sirve para seguir oportunidades y detectar bajadas. Comprar Ahora puede ser cómodo, pero muchas veces es más caro que esperar a que el coche vuelva a Subasta 24h.",
          "Favoritos y notas son una herramienta sencilla pero muy útil para ver si un coche baja, se estanca o empieza a acercarse a un precio interesante. La clave no es mirar más coches. La clave es seguir mejor los coches correctos."
        ]
      }
    ]
  },
  {
    id: "module-4",
    title: "Filtros Auto1",
    duration: "9 min",
    summary: "Cómo usar los filtros de Auto1 para quitar ruido, encontrar coches que encajan con tu estrategia y no perder tiempo abriendo fichas sin sentido.",
    learning: [
      "Filtrar por ubicación, marca, precio, kilometraje, año y daños con criterio.",
      "Usar los filtros como primera criba antes de analizar fichas.",
      "Evitar coches que parecen baratos pero no encajan por logística, riesgo o salida."
    ],
    bullets: [
      "El objetivo no es ver más coches, sino ver mejores coches.",
      "Ubicación, presupuesto, kilometraje y daños filtran gran parte del riesgo.",
      "Un buen filtro te ahorra tiempo antes de abrir fichas y calcular márgenes."
    ],
    quote: "Filtrar bien no es limitarte: es proteger tu tiempo y tu dinero.",
    video: {
      status: "coming-soon",
      title: "Cómo filtro coches en Auto1 para no perder tiempo",
      description: "Te explico este módulo con pantalla real, ejemplos y mi forma de analizarlo.",
      duration: "10 min",
      youtubeId: ""
    },
    slug: "filtros-auto1",
    miniChecklist: [
      "Antes de abrir fichas en Auto1, revisa:",
      "¿Estoy buscando en España o fuera?",
      "¿La ubicación del coche tiene sentido?",
      "¿Conozco la logística del país donde está?",
      "¿He eliminado marcas que no me interesan?",
      "¿He filtrado por marcas que sí podría comprar?",
      "¿El año y kilometraje encajan con mi mercado?",
      "¿El precio máximo deja margen para comisión y gastos?",
      "¿Tiene sentido filtrar por 1 o 2 propietarios?",
      "¿El combustible encaja con el tipo de vehículo?",
      "¿El cambio manual o automático tiene salida?",
      "¿Estoy usando vehículo comercial si busco furgonetas?",
      "¿Estoy filtrando para ahorrar tiempo o solo por costumbre?"
    ],
    sections: [
      {
        title: "Idea principal del módulo",
        paragraphs: [
          "Los filtros de Auto1 parecen una parte simple de la plataforma, pero bien usados te ahorran muchísimo tiempo.",
          "Cuando entras a Auto1 sin filtrar, puedes perderte entre cientos de coches que realmente nunca comprarías. El objetivo no es ver más vehículos, sino ver mejores vehículos para tu estrategia.",
          "Filtrar bien significa quitar ruido: marcas que no te interesan, ubicaciones complicadas, presupuestos fuera de rango, kilometrajes que no comprarías o tipos de vehículo que no tienen salida para ti.",
          "En Auto1, los filtros son la primera criba. Antes de abrir fichas, antes de mirar fotos y antes de calcular márgenes, tienes que reducir el catálogo a coches que de verdad podrían encajar."
        ],
        images: [
          {
            src: "/course-images/auto1/filtros-auto1.jpg",
            alt: "Pantalla de filtros de Auto1 para buscar coches por criterio",
            caption: "Captura sugerida: zona de filtros de Auto1 con ubicación, marca, precio, kilometraje y daños visibles."
          }
        ]
      },
      {
        title: "1. Ubicación: dónde está el coche",
        paragraphs: [
          "El filtro de ubicación sirve para ver vehículos cerca de ti o buscar en una zona específica.",
          "Esto es más importante de lo que parece, porque la ubicación afecta directamente al coste real de la operación.",
          "No es lo mismo comprar un coche cerca, en una campa que puedes recoger fácilmente, que comprarlo en otro país donde necesitas transporte, placas, documentación o más tiempo de gestión.",
          "Puedes usar la ubicación para:",
          "• buscar coches en España;",
          "• ver vehículos cerca de tu zona;",
          "• buscar en una campa concreta;",
          "• reducir costes de transporte;",
          "• evitar países que no controlas;",
          "• planificar recogidas;",
          "• buscar fuera de España si ya entiendes la logística."
        ],
        callout: {
          tone: "note",
          label: "Consejo útil",
          text: "No analices el precio del coche separado de su ubicación. Un coche barato en una campa complicada puede salir peor que uno algo más caro, pero fácil de recoger o transportar."
        }
      },
      {
        title: "2. España o fuera de España",
        paragraphs: [
          "Auto1 te permite buscar vehículos en varios países. Esto abre oportunidades, pero también añade dificultad.",
          "Si buscas fuera de España, tienes que tener claro cómo funciona la documentación, el transporte y la matriculación.",
          "Hay países donde el proceso puede ser más sencillo y otros donde conviene tener más cuidado.",
          "Por ejemplo, Suecia no suele ser una opción que recomiende para empezar. Puede requerir demostrar que el coche ha llegado a España antes de enviar documentación, normalmente mediante CMR, es decir, con transporte profesional. (Básicamente, si no mandas un CMR, no te mandan documentación, si traes el vehículo por tus propios medios es mucho lio y tiempo)",
          "Esto puede cambiar, así que lo mejor es confirmarlo siempre con tu gestor de Auto1 si ya estás inscrito.",
          "Por otro lado, Países Bajos es de los más interesantes si no te quieres preocupar por las matrículas de exportación. Al comprar un vehículo, primero tienen que preparar la documentación de exportación. Para ello te pedirán que rellenes un documento con tus datos y puedan emitir una carta de exportación a tu nombre. Cuando la tengan, te la mandan a tu dirección (puede tardar entre 24 y 72 horas) y con esa carta podrás gestionar las matrículas de exportación en Holanda. Es una manera muy recomendable de empezar en subastas internacionales."
        ],
        alert: {
          tone: "alert",
          label: "No confundas",
          text: "Que Auto1 te deje ver coches de un país no significa que ese país sea fácil para ti. El país forma parte del riesgo de la operación."
        }
      },
      {
        title: "3. Marcas y modelos: filtrar para no perder tiempo",
        paragraphs: [
          "Uno de los filtros más útiles es el de marca y modelo.",
          "Muchas veces no quieres que te salgan ciertas marcas porque sabes que no encajan con tu tipo de compra, tu cliente o tu mercado.",
          "Por ejemplo, si no quieres ver Renault, Citroën u Opel, (normalmente yo las ignoro) puedes quitarlas de tu búsqueda y centrarte solo en marcas que sí te interesan, como Audi, Mercedes, Volkswagen, Porsche u otras que tengan sentido para ti.",
          "Esto no significa que unas marcas sean siempre buenas y otras siempre malas. Significa que tú tienes que buscar según tu estrategia.",
          "Si filtras por marcas que realmente comprarías, haces una búsqueda más exacta, abres menos fichas inútiles y pierdes mucho menos tiempo."
        ],
        callout: {
          tone: "note",
          label: "Idea clave",
          text: "Filtrar marcas no es cerrarte oportunidades. Es evitar revisar coches que sabes que probablemente no vas a comprar."
        }
      },
      {
        title: "4. Año, kilometraje y rango de precio",
        paragraphs: [
          "Estos filtros son bastante directos, pero hay que usarlos con cabeza.",
          "Puedes filtrar por:",
          "• año desde y hasta;",
          "• kilometraje desde y hasta;",
          "• precio desde y hasta.",
          "Esto dependerá de tu presupuesto, del tipo de coche que buscas y del mercado donde quieras venderlo.",
          "Por ejemplo, si buscas coches fáciles de vender, quizá no quieras pasar de cierto kilometraje. Si buscas furgonetas de trabajo, puedes aceptar más kilómetros siempre que el estado, la mecánica y el precio cuadren.",
          "Con el precio pasa algo importante: no debes filtrar solo por el dinero que tienes disponible. Tienes que dejar margen para gastos.",
          "En Auto1, el precio visible no es el coste total.",
          "A ese precio hay que sumarle:",
          "• comisión;",
          "• transporte o recogida;",
          "• cambio de nombre o matriculación;",
          "• garantía si aplica;",
          "• posibles reparaciones;",
          "• limpieza;",
          "• margen que quieres ganar."
        ],
        callout: {
          tone: "note",
          label: "Consejo útil",
          text: "Si tu presupuesto total es 5.000 €, no filtres coches de hasta 5.000 € como si ese fuera el precio final. Deja aire para gastos, porque si no, el coche que parece posible en pantalla puede dejar de tener sentido en la realidad."
        }
      },
      {
        title: "5. Propietarios: 1 o 2 suele ser mejor punto de partida",
        paragraphs: [
          "El filtro de propietarios también puede ayudar.",
          "Poner 1 o 2 propietarios no significa que el coche vaya a estar perfecto, pero sí aumenta las probabilidades de encontrar una unidad más cuidada o con una vida más coherente.",
          "Un coche con muchos propietarios no tiene por qué ser malo, pero puede requerir más atención. Puede haber pasado por muchas manos, haber tenido más usos diferentes o simplemente generar menos confianza al venderlo después.",
          "En coches premium, familiares o vehículos que quieras vender con imagen de calidad, el número de propietarios puede influir bastante en la percepción del comprador final."
        ],
        alert: {
          tone: "alert",
          label: "No confundas",
          text: "Un coche de un solo propietario no es automáticamente buena compra. Es una señal positiva, no una garantía."
        }
      },
      {
        title: "6. Combustible, cambio y carrocería",
        paragraphs: [
          "Estos filtros dependen completamente de lo que estés buscando.",
          "Puedes filtrar por:",
          "• diésel;",
          "• gasolina;",
          "• híbrido;",
          "• eléctrico;",
          "• manual;",
          "• automático;",
          "• SUV;",
          "• familiar;",
          "• berlina;",
          "• compacto;",
          "• furgoneta;",
          "• vehículo comercial.",
          "No hay una configuración perfecta para todos. Depende de tu cliente, tu zona, tu presupuesto y tu forma de vender.",
          "Si estás buscando coche para un cliente concreto, estos filtros te ayudan mucho. Si el cliente quiere automático, no pierdas tiempo mirando manuales. Si quiere SUV, no abras berlinas. Si quiere furgoneta, ve directo al tipo de vehículo que encaja."
        ]
      },
      {
        title: "7. Vehículo comercial: muy útil para furgonetas",
        paragraphs: [
          "Si compras furgonetas, el filtro de vehículo comercial es de los más importantes.",
          "Yo personalmente lo uso mucho porque me ayuda a encontrar antes unidades que encajan con mi negocio.",
          "Auto1 mezcla muchos tipos de vehículos. Si no filtras bien, puedes acabar viendo turismos, SUV y coches que no tienen nada que ver con lo que buscas.",
          "Con vehículo comercial puedes encontrar más rápido:",
          "• furgonetas;",
          "• derivados comerciales;",
          "• vehículos de trabajo;",
          "• unidades para autónomos o empresas;",
          "• vehículos con posible salida profesional.",
          "Pero igual que con cualquier filtro, no basta con que sea comercial. Después hay que revisar bien la ficha.",
          "En furgonetas hay que mirar:",
          "• plazas;",
          "• clasificación;",
          "• documentación;",
          "• medidas;",
          "• motor;",
          "• uso anterior;",
          "• estado interior;",
          "• zona de carga;",
          "• desgaste;",
          "• daños;",
          "• país;",
          "• facilidad de matriculación o transferencia."
        ],
        callout: {
          tone: "note",
          label: "Idea clave",
          text: "El filtro de vehículo comercial te lleva al producto correcto, pero no decide por ti. Una furgoneta puede parecer buena en lista y esconder mucho desgaste en fotos o documentación."
        }
      },
      {
        title: "8. Cómo usar filtros sin cerrarte demasiado",
        paragraphs: [
          "Filtrar demasiado puede hacer que no veas oportunidades. Filtrar demasiado poco puede hacer que pierdas horas.",
          "La clave está en empezar con los filtros importantes y luego ajustar.",
          "Un orden práctico puede ser:",
          "1. País o ubicación.",
          "2. Tipo de vehículo.",
          "3. Precio máximo realista.",
          "4. Marca o modelo si buscas algo concreto.",
          "5. Año.",
          "6. Kilometraje.",
          "7. Combustible.",
          "8. Cambio.",
          "9. Propietarios.",
          "10. Carrocería o vehículo comercial.",
          "Después de eso ya puedes empezar a abrir fichas.",
          "Pero abrir una ficha no significa hacer una revisión completa. Primero haces un vistazo rápido. Si algo no encaja, cierras y sigues.",
          "La revisión profunda se reserva para coches que pasan la primera criba."
        ]
      },
      {
        title: "9. Lo que debes recordar de este módulo",
        paragraphs: [
          "Los filtros no están para decorar. Son una herramienta para ahorrar tiempo y evitar coches que no encajan.",
          "La ubicación afecta al transporte. El país afecta a la documentación. El precio visible no es el coste total. Las marcas y modelos deben encajar con tu mercado. El kilometraje y el año afectan a la venta final. El tipo de vehículo debe cuadrar con tu estrategia.",
          "La idea no es abrir más fichas. La idea es abrir mejores fichas."
        ]
      }
    ]
  },
  {
    id: "module-5",
    title: "Analizar ficha de Auto1",
    duration: "18 min",
    summary: "El orden práctico para revisar una ficha de Auto1 sin perderte: notas, prueba dinámica, datos técnicos, daños, fotos, documentación, logística y equipamiento.",
    learning: [
      "Seguir un orden de revisión para descartar rápido lo que no merece la pena.",
      "Detectar avisos importantes en notas, prueba dinámica, daños y documentación.",
      "Separar una primera criba rápida de un análisis profundo antes de comprar."
    ],
    bullets: [
      "No empieces por las fotos bonitas: empieza por la información que puede descartar el coche.",
      "La prueba dinámica y las notas pueden cambiar por completo la decisión.",
      "Fotos, daños, documentación y logística deben cuadrar antes de avanzar."
    ],
    quote: "La ficha no se mira para confirmar que te gusta el coche, se mira para ver si merece seguir.",
    video: {
      status: "ready",
      title: "Mi orden real para revisar una ficha de Auto1",
      description: "Te explico este módulo con pantalla real, ejemplos y mi forma de analizarlo.",
      duration: "18 min",
      videoUrl: "https://www.youtube.com/embed/LKRGbPNZNiI",
      youtubeId: "LKRGbPNZNiI"
    },
    slug: "ficha-auto1",
    miniChecklist: [
      "Antes de pujar por un coche en Auto1, revisa:",
      "¿Hay “otras notas” o comentarios?",
      "¿Qué dice la prueba dinámica?",
      "¿Arranca y se mueve correctamente?",
      "¿Hay ruidos de motor o caja?",
      "¿Hay testigos encendidos?",
      "¿He mirado foto del cuadro?",
      "¿Aparece daño previo o accidente?",
      "¿He localizado el daño?",
      "¿He visto fotos principales y fotos de daños?",
      "¿La luna está bien?",
      "¿Hay óxido visible?",
      "¿El interior está aceptable?",
      "¿Hay modificaciones o tuning?",
      "¿La documentación está clara?",
      "¿Tiene homologación europea si es extranjero?",
      "¿He revisado letra K cuando corresponde?",
      "¿La logística mantiene el margen?",
      "¿He comparado mercado antes de revisar demasiado a fondo?",
      "¿He mirado todas las fotos antes de pujar?"
    ],
    sections: [
      {
        title: "Idea principal del módulo",
        paragraphs: [
          "La ficha de Auto1 es donde se decide si un coche merece seguir siendo analizado o si hay que descartarlo rápido.",
          "El error típico es entrar en una ficha y empezar mirando fotos sin orden. Eso puede funcionar alguna vez, pero si vas a revisar muchos coches, necesitas un sistema.",
          "Mi orden recomendado es:",
          "1. Otras notas o comentarios.",
          "2. Prueba dinámica.",
          "3. Datos técnicos.",
          "4. Daños previos o accidente.",
          "5. Fotos principales.",
          "6. Fotos del apartado de daños.",
          "7. Documentación.",
          "8. Logística.",
          "9. Equipamiento y datos por bastidor.",
          "La clave es no hacer una revisión profunda desde el principio. Primero haces una criba rápida para saber si merece la pena seguir. Si el coche pasa esa primera criba, entonces ya analizas con más detalle."
        ]
      },
      {
        title: "1. Otras notas: lo primero que debes mirar",
        paragraphs: [
          "A veces Auto1 añade un apartado de comentarios u otras notas. No siempre aparece, pero si aparece, hay que revisarlo sí o sí.",
          "Este apartado suele estar un poco más arriba de la información de prueba dinámica.",
          "Puede contener una tontería, pero también puede contener información importante. En muchos casos, si hay “otras notas”, algo relevante hay.",
          "Por eso, antes de mirar fotos bonitas o calcular margen, conviene revisar si existe este apartado."
        ],
        callout: {
          tone: "note",
          label: "Consejo útil",
          text: "Si hay otras notas, léelas antes de enamorarte del coche. A veces una línea pequeña te ahorra media hora de análisis."
        }
      },
      {
        title: "2. Prueba dinámica: cómo pudieron probar el coche",
        paragraphs: [
          "Después de otras notas, yo bajo directamente a la información de prueba dinámica.",
          "Esta parte te dice cómo pudieron probar el coche mecánicamente:",
          "• si se dieron una vuelta;",
          "• si cambian bien las marchas;",
          "• si hay ruidos de motor;",
          "• si hay ruidos de caja de cambios;",
          "• si hay problemas al frenar;",
          "• si aparecen testigos;",
          "• si el coche pudo circular;",
          "• si detectaron algo raro.",
          "Para mí es una de las zonas más importantes de la ficha, porque puede enseñarte problemas antes de perder tiempo revisando todo lo demás."
        ],
        images: [
          {
            src: "/course-images/auto1/prueba-dinamica-auto1.jpg",
            alt: "Apartado de prueba dinámica dentro de una ficha de Auto1",
            caption: "Captura sugerida: bloque de prueba dinámica para revisar si el coche ha sido probado o si hay avisos relevantes."
          }
        ]
      },
      {
        title: "3. Problemas que normalmente no me asustan tanto",
        paragraphs: [
          "Hay incidencias que pueden aparecer en la prueba dinámica y no siempre son graves.",
          "Por ejemplo:",
          "• aire acondicionado que no enfría;",
          "• compresor de aire acondicionado que no arranca;",
          "• navegador GPS que no funciona;",
          "• falta de disco original del GPS;",
          "• asientos calefactables que no funcionan;",
          "• ruido de ruedas;",
          "• frenos que chirrían;",
          "• frenos desgastados;",
          "• ruidos interiores, especialmente en furgonetas.",
          "El aire acondicionado muchas veces se puede revisar en un taller tipo Norauto o similar. No siempre es barato, pero no tiene por qué ser un motivo automático para descartar.",
          "El GPS o navegador suele ser un problema menor, sobre todo si no afecta a la mecánica.",
          "El ruido de ruedas muchas veces puede ser rodamiento. No es ideal, pero normalmente no es una avería que destruya la operación si el margen lo permite.",
          "Los frenos desgastados o con chirrido suelen ser gasto menor, aunque si vas a traer el coche conduciendo conviene arreglarlo antes."
        ],
        alert: {
          tone: "alert",
          label: "No confundas",
          text: "Que una incidencia sea menor no significa que dé igual. Significa que tienes que ponerle coste y decidir si el margen sigue teniendo sentido."
        }
      },
      {
        title: "4. Testigos y velocímetro: mirar siempre el cuadro",
        paragraphs: [
          "Si aparece algo relacionado con velocímetro, testigo de avería encendido o luces en el cuadro, hay que revisar fotos del cuadro.",
          "No todos los testigos tienen la misma gravedad.",
          "Algunas veces puede ser una luz fundida, poco combustible o un aviso menor.",
          "Pero si ves testigo de motor, ABS, airbag u otros avisos importantes, hay que tener mucho más cuidado.",
          "El testigo motor puede ser muchas cosas. Puede ser algo sencillo o puede ser una avería seria. Aquí depende de:",
          "• margen que tengas;",
          "• modelo del coche;",
          "• si conoces ese motor;",
          "• si tienes taller de confianza;",
          "• si puedes asumir el riesgo;",
          "• si el precio compensa.",
          "ABS y airbag suelen ser más delicados, sobre todo si quieres vender el coche rápido y sin complicarte."
        ],
        callout: {
          tone: "note",
          label: "Consejo útil",
          text: "Cuando la ficha mencione testigos, no sigas analizando como si nada. Busca la foto del cuadro y confirma exactamente qué aparece."
        }
      },
      {
        title: "5. Datos técnicos: año, kilómetros, potencia y país",
        paragraphs: [
          "Después de revisar notas y prueba dinámica, toca mirar los datos técnicos.",
          "Aquí debes revisar:",
          "• año;",
          "• kilómetros;",
          "• potencia;",
          "• combustible;",
          "• cambio;",
          "• país de origen;",
          "• país de última matriculación;",
          "• documentación disponible;",
          "• emisiones;",
          "• clasificación si aplica;",
          "• datos relevantes para matriculación.",
          "Ojo con país de origen y país de última matriculación. Revisa tambien año de matriculación y año de fabricación, pueden variar.",
          "Normalmente, el país de última matriculación suele coincidir con el país donde está el vehículo, pero hay excepciones.",
          "También puede haber errores en país de origen. Por eso no basta con leer el resumen: hay que mirar la documentación."
        ]
      },
      {
        title: "6. Daños previos o accidente",
        paragraphs: [
          "Auto1 puede mostrar información de daños previos o accidente.",
          "La palabra “accidente” suena fuerte, pero no siempre significa un golpe estructural grave. Muchas veces puede ser un golpe pequeño o un daño de carrocería.",
          "Lo importante es localizar ese daño en la ficha y ver si tiene sentido.",
          "Normalmente los detalles aparecen más abajo, en el apartado de daños, y suelen ser de carrocería o interior. No siempre es algo mecánico.",
          "Aquí hay que mirar:",
          "• dónde está el daño;",
          "• si afecta a estructura;",
          "• si afecta a seguridad;",
          "• si se ve reparado;",
          "• si hay descuadres;",
          "• si el precio compensa;",
          "• si luego será fácil venderlo."
        ],
        alert: {
          tone: "alert",
          label: "No confundas",
          text: "“Accidente” no siempre significa coche destruido. Pero tampoco debes ignorarlo. Hay que localizar el daño y entenderlo."
        }
      },
      {
        title: "7. Fotos principales: primer vistazo rápido",
        paragraphs: [
          "Después de los datos, miro las fotos principales.",
          "La primera pasada no es una revisión profunda. Es un vistazo rápido para decidir si merece la pena investigar más.",
          "Busco señales rápidas:",
          "• golpe fuerte;",
          "• descuadres evidentes;",
          "• interior muy maltratado;",
          "• piezas faltantes;",
          "• óxido visible;",
          "• luna rota o chinazo fuerte;",
          "• daños que no quiero asumir;",
          "• estado general que no encaja con el precio.",
          "Si en ese primer vistazo veo algo que no me gusta, cierro la ficha y sigo con otro coche.",
          "Hay cientos de vehículos. No puedes hacer revisión profunda de todos."
        ]
      },
      {
        title: "8. Fotos de daños: donde muchas veces está la verdad",
        paragraphs: [
          "En Auto1 las fotos aparecen normalmente en dos zonas:",
          "1. Fotos principales.",
          "2. Apartado de daños.",
          "Esto es muy importante.",
          "Una ficha puede tener solo 5 o 7 fotos principales, pero luego tener muchas más fotos dentro del apartado de daños.",
          "Hay que revisar las dos partes.",
          "Muchas veces, el detalle que explica por qué un coche está barato no aparece en la galería principal. Aparece abajo, en daños."
        ],
        callout: {
          tone: "note",
          label: "Consejo útil",
          text: "Antes de pujar, mira todas las fotos. No solo las principales. Muchas veces el problema estaba en ficha, pero había que fijarse mejor."
        },
        images: [
          {
            src: "/course-images/auto1/fotos-danos-auto1.jpg",
            alt: "Fotos de daños dentro de una ficha de Auto1",
            caption: "Captura sugerida: fotos específicas del apartado de daños para comprobar golpes, roces y defectos."
          }
        ]
      },
      {
        title: "9. Cuándo mirar precios de mercado",
        paragraphs: [
          "Después del primer vistazo rápido, si el coche más o menos convence, entonces tiene sentido mirar precios de mercado.",
          "Puedes comparar en Milanuncios, Wallapop, Coches.net o las plataformas que uses.",
          "No recomiendo hacer una revisión profunda completa antes de mirar mercado, porque puedes perder mucho tiempo y luego descubrir que no hay margen.",
          "Pero tampoco conviene mirar mercado demasiado pronto sin revisar nada, porque quizá el precio parece bueno y luego el coche tiene motor roto, falta de asientos, óxido fuerte o un problema que lo descarta.",
          "El orden inteligente es:",
          "1. Notas.",
          "2. Prueba dinámica.",
          "3. Datos.",
          "4. Fotos rápidas.",
          "5. Fotos de daños.",
          "6. Precio de mercado.",
          "7. Revisión profunda si todo empieza a cuadrar."
        ],
        callout: {
          tone: "note",
          label: "Idea clave",
          text: "Primero descarta lo obvio. Luego mira mercado. Después revisa a fondo. No al revés."
        }
      },
      {
        title: "10. Revisión profunda: detalles que hay que buscar",
        paragraphs: [
          "Si el coche sigue encajando, toca revisar más a fondo.",
          "Aquí ya miras con lupa:",
          "• descuadres de carrocería;",
          "• golpes mal reparados;",
          "• pintura rara;",
          "• interior muy gastado;",
          "• botones rotos;",
          "• climatizador o aire acondicionado;",
          "• estado de volante y asientos;",
          "• luna y chinazos;",
          "• óxido;",
          "• modificaciones;",
          "• documentación;",
          "• historial si aparece;",
          "• fotos del cuadro;",
          "• equipamiento;",
          "• datos por bastidor.",
          "Literalmente tienes que buscar cosas raras.",
          "Hay casos donde compras un coche, luego detectas un problema y piensas que no estaba en la ficha. Abres de nuevo la ficha y estaba, pero había que fijarse mejor.",
          "Eso pasa. Por eso las fotos se miran todas y bien antes de pujar."
        ]
      },
      {
        title: "11. Documentación: especialmente si es extranjera",
        paragraphs: [
          "Si el coche viene de fuera de España, la documentación hay que mirarla bien.",
          "Conviene traducirla si hace falta, porque puede contener información importante para ITV, matriculación o homologación.",
          "Hay que revisar especialmente:",
          "• homologación europea ( letra K )",
          "• datos técnicos;",
          "• modificaciones (MUY IMPORTANTE)",
          "• documentación disponible;",
          "• historial de mantenimiento si aparece;",
          "• kilómetros de ITV si se pueden comprobar.",
          "En furgonetas de 2012 o anteriores, y en coches de Holanda, hay que prestar especial atención a la homologación europea en la letra K.",
          "También puede pasar que un coche no tenga homologación europea porque viene de fuera de la UE."
        ],
        callout: {
          tone: "note",
          label: "Consejo útil",
          text: "Si ves documentación extranjera, no la pases por encima. Tradúcela, revisa la letra K y confirma que no hay algo que luego te complique la ITV o la matriculación."
        },
        images: [
          {
            src: "/course-images/auto1/documentacion-auto1.jpg",
            alt: "Apartado de documentación disponible en Auto1",
            caption: "Captura sugerida: documentación disponible del vehículo antes de valorar compra, transporte o matriculación."
          }
        ]
      },
      {
        title: "12. Modificaciones y tuning",
        paragraphs: [
          "A veces un coche tiene modificaciones.",
          "Auto1 puede añadir un apartado llamado “tuning” dentro de los datos del vehículo, con una descripción de lo que se modificó.",
          "Esto es importante porque una modificación puede darte problemas para pasar ITV en España.",
          "Puede ser algo simple o puede ser algo que complique mucho la operación.",
          "Revisa:",
          "• suspensión;",
          "• llantas;",
          "• escapes;",
          "• carrocería;",
          "• interiores modificados;",
          "• camperizaciones;",
          "• elementos no originales;",
          "• cambios que puedan requerir homologación.",
          "No todo tuning es malo, pero hay que saber lo que estás comprando."
        ]
      },
      {
        title: "13. Logística dentro de la ficha",
        paragraphs: [
          "Debajo de las fotos suele aparecer el apartado de logística.",
          "Ahí Auto1 puede mostrar opciones para transportar el coche:",
          "• a una dirección tuya;",
          "• a la campa de Auto1 más cercana;",
          "• recogida gratuita si vas tú o tu transportista.",
          "Esto también forma parte del análisis.",
          "Un coche puede tener margen en precio, pero si la logística sube demasiado, el margen se va."
        ]
      },
      {
        title: "14. Equipamiento y datos por bastidor",
        paragraphs: [
          "Al final de la ficha suele aparecer el equipamiento del coche y datos según bastidor.",
          "Esto puede ayudarte a confirmar extras, versión, acabado o equipamiento real.",
          "También puede ser útil para detectar oportunidades. A veces un coche tiene extras que no se ven bien en las fotos o que no están destacados en el título.",
          "En coches premium, el equipamiento puede cambiar bastante el precio de venta."
        ]
      },
      {
        title: "15. Lo que debes recordar de este módulo",
        paragraphs: [
          "Analizar una ficha de Auto1 no es mirar fotos bonitas. Es seguir un orden.",
          "Primero miras si hay notas. Luego prueba dinámica. Después datos técnicos, daños, fotos, documentación, logística y equipamiento.",
          "No hay que revisar todos los coches a fondo. Hay que descartar rápido los que no encajan y profundizar solo en los que empiezan a tener sentido.",
          "La ficha no te da información perfecta. Te da pistas. Tu trabajo es unirlas."
        ]
      }
    ]
  },
  {
    id: "module-6",
    title: "Recogida en Auto1",
    duration: "14 min",
    summary: "Qué ocurre después de ganar o comprar: pago, cita, PIN, campa, transporte, seguro temporal y reclamaciones antes de sacar el coche.",
    learning: [
      "Entender el proceso desde la compra hasta la recogida real en campa.",
      "Planificar pago, justificante, cita, PIN e instrucciones sin improvisar.",
      "Decidir entre transporte, seguro temporal, placas o recogida personal según el caso."
    ],
    bullets: [
      "Comprar o ganar no es el final: empieza la parte logística.",
      "El horario de corte puede cambiar el primer día disponible de recogida.",
      "Si algo importante no coincide con la ficha, conviene reclamar antes de sacar el coche."
    ],
    quote: "La mejor recogida es la que ya está planificada antes de comprar.",
    video: {
      status: "ready",
      title: "Pago, PIN, horario de corte y recogida en campa",
      description: "Te explico este módulo con pantalla real, ejemplos y mi forma de analizarlo.",
      duration: "10 min",
      videoUrl: "https://www.youtube.com/embed/2vjgoWBJz9I",
      youtubeId: "2vjgoWBJz9I"
    },
    slug: "recogida-auto1",
    miniChecklist: [
      "Antes de recoger un coche de Auto1, revisa:",
      "¿He recibido datos de pago?",
      "¿He mandado justificante al gestor?",
      "¿El pago está confirmado?",
      "¿He elegido día de recogida?",
      "¿He comprobado el horario de corte vigente?",
      "¿Tengo PIN o instrucciones?",
      "¿Sé si hace falta cita?",
      "¿Tengo dirección exacta de campa?",
      "¿Voy yo o va transportista?",
      "¿El transportista tiene autorización y PIN?",
      "¿Necesito seguro temporal?",
      "¿El coche puede circular?",
      "¿Tengo DNI o pasaporte?",
      "¿Voy a revisar el coche antes de sacarlo?",
      "¿Sé cómo reclamar si algo no coincide?",
      "¿Tengo claro cuándo llega la documentación?",
      "Si es extranjero, ¿sé cómo lo voy a sacar del país?"
    ],
    sections: [
      {
        title: "Idea principal del módulo",
        paragraphs: [
          "Ganar o comprar un coche en Auto1 no es el final de la operación. Es el principio de la parte logística.",
          "Después de comprar, tienes que pagar, confirmar, elegir recogida, recibir instrucciones, organizar transporte o seguro, revisar el coche en campa y estar preparado para reclamar si algo no coincide con la ficha.",
          "Una mala recogida puede convertir una buena compra en una operación incómoda. Por eso conviene entender el proceso antes de comprar."
        ]
      },
      {
        title: "1. Después de ganar o comprar",
        paragraphs: [
          "Cuando ganas una puja o compras un vehículo en Auto1, normalmente la app o la plataforma te muestra los datos de pago unas horas después.",
          "No siempre aparece todo al instante, así que hay que esperar confirmación.",
          "Cuando tengas los datos, haces el pago y conviene mandar el justificante a tu gestor comercial de Auto1. Esto puede ayudar a acelerar la confirmación.",
          "La idea es que Auto1 vea que el pago está hecho y puedas avanzar antes a la fase de recogida."
        ],
        callout: {
          tone: "note",
          label: "Consejo útil",
          text: "No esperes pasivamente si tienes prisa. Cuando pagues, manda justificante al gestor. A veces eso ayuda a mover la operación más rápido."
        }
      },
      {
        title: "2. Elegir día de recogida",
        paragraphs: [
          "Cuando el pago está confirmado, puedes elegir día de recogida.",
          "La plataforma puede aplicar un horario de corte para ofrecer el día siguiente como fecha de recogida.",
          "Si seleccionas la recogida después de ese corte, es posible que tengas que elegir el siguiente día hábil disponible.",
          "Antes de contratar transporte o desplazarte, confirma la fecha que la plataforma acepta. El horario puede variar según campa, país, festivos o proceso."
        ],
        callout: {
          tone: "note",
          label: "Idea clave",
          text: "La hora a la que confirmas recogida puede cambiar el día en que puedes sacar el coche."
        }
      },
      {
        title: "3. PIN, cita e instrucciones",
        paragraphs: [
          "Según la campa, Auto1 puede mandarte un PIN code o instrucciones concretas por correo.",
          "Ese PIN es importante porque normalmente lo necesitarás para recoger el coche.",
          "En algunas campas extranjeras, por ejemplo en Bélgica, puede que tengas que registrarte en una web externa o seleccionar día y hora en un sistema aparte.",
          "Por eso no basta con pagar. Hay que leer bien los correos e instrucciones de recogida.",
          "Antes de salir hacia la campa, revisa:",
          "• dirección exacta;",
          "• horario;",
          "• PIN;",
          "• documentación que debes llevar;",
          "• si hace falta cita;",
          "• si hay instrucciones especiales;",
          "• si el transportista necesita autorización;",
          "• si la campa exige chaleco reflectante u otras normas."
        ]
      },
      {
        title: "4. Recogida en España",
        paragraphs: [
          "Si el coche está en España y vas tú a recogerlo, el proceso suele ser más sencillo.",
          "Normalmente vas a la campa, das el PIN y enseñas tu DNI. Después te sacan el vehículo o te indican dónde está.",
          "Antes de llevártelo, revisa visualmente el coche y arráncalo.",
          "Comprueba:",
          "• que el coche está;",
          "• que corresponde con la ficha;",
          "• que arranca;",
          "• que no hay un daño enorme no anunciado;",
          "• que el interior coincide;",
          "• que las llaves están;",
          "• que no falta algo importante;",
          "• que el cuadro no muestra algo inesperado;",
          "• que los daños visibles coinciden con lo anunciado.",
          "No te vayas rápido sin mirar. La campa no es el sitio para hacer una revisión de taller, pero sí para detectar si algo gordo no coincide."
        ]
      },
      {
        title: "5. Si algo no coincide con la ficha",
        paragraphs: [
          "Si ves un problema importante que no estaba anunciado, no te lleves el coche sin más.",
          "Ve a la oficina o recepción de la campa y comunica el problema.",
          "Lo ideal es reclamar en el momento, con fotos y explicación clara.",
          "Ejemplos de cosas que deberías revisar antes de salir:",
          "• daño fuerte no anunciado;",
          "• pieza importante faltante;",
          "• coche que no arranca si la ficha decía que sí;",
          "• testigo grave no indicado;",
          "• interior muy diferente a fotos;",
          "• cristal roto no anunciado;",
          "• documentación o llaves que faltan;",
          "• daño de transporte o campa."
        ],
        callout: {
          tone: "note",
          label: "Consejo útil",
          text: "Si el problema es importante, reclama antes de sacar el coche. Una vez fuera, todo se complica más."
        }
      },
      {
        title: "6. Transporte con Auto1 o transportista independiente",
        paragraphs: [
          "Puedes contratar transporte con Auto1 si la plataforma lo ofrece, o usar un transportista independiente.",
          "Si usas transportista independiente, necesitará:",
          "• PIN;",
          "• autorización;",
          "• datos de campa;",
          "• fecha de recogida;",
          "• contacto si hace falta;",
          "• instrucciones concretas.",
          "Para transporte independiente, una opción útil es Clicktrans, donde transportistas pueden pujar por el trayecto.",
          "También puedes buscar transportistas directamente y cerrar precio con ellos.",
          "La decisión depende del país, distancia, coste y urgencia."
        ]
      },
      {
        title: "7. Seguro temporal si vas conduciendo",
        paragraphs: [
          "Si vas a sacar el coche conduciendo, necesitas seguro.",
          "Puedes hacer un seguro temporal en páginas como Terranea, Segurospordia u opciones similares. Compara coberturas, precio y si admiten matrículas extranjeras antes de contratar.",
          "Esto puede servir para mover el coche desde la campa hasta tu ubicación o taller.",
          "Antes de conducir, asegúrate de tener el seguro temporal. Después ve directamente a la gasolinera más cercana y comprueba, sobre todo, el estado de los neumáticos, que suele ser lo más peligroso."
        ],
        alert: {
          tone: "alert",
          label: "No confundas",
          text: "Que puedas arrancar el coche no significa que debas conducirlo. Si hay frenos mal, ruedas peligrosas, faros rotos o daños graves, mejor transporte."
        }
      },
      {
        title: "8. Recogida en el extranjero",
        paragraphs: [
          "Si compras fuera de España, la recogida requiere más planificación.",
          "Normalmente tienes varias opciones:",
          "• transporte hasta España;",
          "• placas rojas de empresa;",
          "• placas de exportación del país;",
          "• esperar documentación y tramitar placas;",
          "• que un transportista lo recoja con camión.",
          "Si tienes placas rojas de empresa y el coche está en condiciones de circular, puede ser una opción.",
          "Si no, tendrás que valorar transporte o placas de exportación según el país.",
          "En Alemania, por ejemplo, con documentación puedes tramitar placas de exportación, pero hay que tener en cuenta requisitos como ITV válida y documentación completa.",
          "En Holanda, pueden enviar documentación de exportación a tu nombre para poder hacer placas dentro de un plazo concreto.",
          "En Francia, muchas veces el coche mantiene matrículas francesas y puede ser posible hacer seguro temporal, pero conviene viajar con la documentación francesa ya recibida.",
          "Cada país tiene sus reglas."
        ],
        callout: {
          tone: "note",
          label: "Consejo útil",
          text: "Antes de comprar fuera de España, ten decidido cómo vas a sacar el coche: transporte, placas rojas, placas de exportación o seguro temporal. No lo decidas después de pagar."
        }
      },
      {
        title: "10. Cosas que conviene llevar a campa",
        paragraphs: [
          "Si vas tú personalmente, lleva:",
          "• DNI o pasaporte;",
          "• PIN de recogida;",
          "• justificante o instrucciones;",
          "• autorización si hace falta;",
          "• móvil con batería;",
          "• chaleco reflectante;",
          "• seguro temporal si vas conduciendo;",
          "• herramientas básicas si lo ves necesario;",
          "• compresor o arrancador si sueles trabajar con coches parados;",
          "• contacto de la campa;",
          "• contacto del gestor.",
          "En algunas campas extranjeras pueden exigir chaleco reflectante u otras normas de seguridad."
        ]
      },
      {
        title: "11. Lo que debes recordar de este módulo",
        paragraphs: [
          "La recogida forma parte de la compra.",
          "No basta con ganar barato. Hay que sacar el coche bien, con documentación, seguro o transporte, y revisando que coincide con la ficha.",
          "Si compras en España, el proceso suele ser más fácil. Si compras fuera, hay que pensar antes en placas, transporte, documentación y tiempos.",
          "La mejor recogida es la que ya está planificada antes de comprar."
        ]
      }
    ]
  },
  {
    id: "module-7",
    slug: "copart-alemania",
    title: "Copart Alemania desde dentro",
    duration: "13 min",
    summary: "Cómo leer Copart Alemania como un mercado de vehículos dañados donde documentación, reparación y logística pesan tanto como el precio.",
    learning: [
      "Entender la plataforma como subasta de daño, documentación y logística.",
      "Leer R, S y sin letra con mentalidad operativa.",
      "Saber que datos importan antes de entusiasmarte con el precio."
    ],
    bullets: [
      "Copart Alemania trabaja con vehículos dañados y el precio debe analizarse junto al coste completo.",
      "La membresía y el acceso dependen del plan y de las condiciones vigentes.",
      "Riesgo, documentación y salida del coche pesan tanto como el precio."
    ],
    quote: "Copart no es una subasta para comprar cualquier coche barato. Es una plataforma donde el daño, los documentos y la salida deben explicar el precio.",
    miniChecklist: [
      "Antes de abrir una ficha de Copart, revisa:",
      "¿Está en Copart Alemania?",
      "¿Tiene R, S o no aparece nada?",
      "¿Arranca y se mueve según la información?",
      "¿Cuántos kilómetros tiene?",
      "¿Qué Estimated Retail Value aparece?",
      "¿Tiene ZB1?",
      "¿Tiene ZB2?",
      "¿Tiene COC?",
      "¿Aparece International Documents?",
      "¿El daño principal es de carrocería, mecánico o normal wear?",
      "¿El país/documentación puede complicar la matriculación?",
      "¿Tiene sentido seguir mirando este coche o mejor pasar al siguiente?"
    ],
    video: {
      status: "ready",
      title: "Copart Alemania desde dentro: R, S, documentación y mercado",
      duration: "15 min",
      description: "Te explico cómo leer la lista de Copart Alemania, qué significan R, S, ZB1, ZB2, COC, International Documents y cómo usar el Estimated Retail Value.",
      videoUrl: "https://www.youtube.com/embed/SX2b3nxUzCA",
      youtubeId: "SX2b3nxUzCA"
    },
    sections: [
      {
        title: "Idea principal del módulo",
        paragraphs: [
          "Copart Alemania es el foco de este bloque porque reúne inventario, documentación y una operativa internacional que exigen un análisis distinto al de Auto1.",
          "El precio puede quedar por debajo de referencias retail, pero esa diferencia también puede reflejar daño, inmovilización, documentación o logística.",
          "Eso no quiere decir que todo sea rentable ni que todo valga. Copart es una subasta de vehículos dañados, y ahí hay que saber mirar. Hay coches con daños de carrocería, daños mecánicos, vehículos con desgaste normal, coches con documentación complicada y unidades con riesgos muy diferentes.",
          "Como en todas las subastas, no todo vale. Todo depende de tu estrategia, de tu margen, de tu capacidad para reparar, de tu logística y de si entiendes lo que estás comprando."
        ]
      },
      {
        title: "1. Qué es Copart",
        paragraphs: [
          "Copart es básicamente una subasta de vehículos dañados.",
          "La mayoría de coches tienen algún tipo de daño, aunque no todos tienen daños graves.",
          "Puedes encontrar:",
          "• daños de carrocería;",
          "• golpes delanteros;",
          "• golpes traseros;",
          "• daños laterales;",
          "• daños mecánicos;",
          "• vehículos con desgaste normal;",
          "• coches con granizo;",
          "• coches con documentos internacionales;",
          "• coches con airbags saltados;",
          "• coches inundados;",
          "• coches con documentación perdida;",
          "• coches con problemas que hay que revisar muy bien.",
          "Uno de los términos que verás es normal wear.",
          "Normal wear significa básicamente “desgaste normal por la edad”. En otras palabras, un coche normal usado, sin un daño principal fuerte declarado. Eso no significa que esté perfecto, pero sí que no aparece como coche accidentado de forma clara."
        ],
        callout: {
          tone: "note",
          label: "Idea clave",
          text: "Copart no es una subasta para comprar cualquier coche barato. La diferencia de precio solo tiene sentido cuando entiendes el daño, la documentación, la logística y el coste completo."
        }
      },
      {
        title: "2. Por qué este bloque se centra en Copart Alemania",
        paragraphs: [
          "El curso se centra en Alemania porque combina un mercado amplio, rotación de vehículos y una operativa internacional relevante para importar a España.",
          "Un precio atractivo frente a referencias alemanas o españolas puede justificar seguir analizando, pero nunca sustituye la suma de costes ni la comprobación del daño.",
          "Parte del inventario que termina en el mercado profesional procede de canales de remarketing y subasta. Entender ese origen ayuda a leer mejor el precio, no a dar por hecho que existe margen.",
          "Pero hay que hacerlo bien. No basta con ver un precio bajo y emocionarse. Hay que mirar:"
        ],
        bullets: [
          "daños;",
          "documentación;",
          "comisión;",
          "transporte;",
          "matriculación;",
          "reparación;",
          "si el coche podrá circular o necesitará grúa;",
          "si tiene COC;",
          "si tiene documentación alemana correcta;",
          "si tiene daños mecánicos;",
          "si el margen final en España sigue existiendo."
        ],
        alert: {
          tone: "alert",
          label: "No confundas",
          text: "Que un coche esté por debajo del mercado alemán no significa automáticamente que sea rentable en España. Hay que sumar todo y entender el riesgo."
        }
      },
      {
        title: "3. Membresía y condiciones de acceso",
        paragraphs: [
          "Copart puede exigir una membresía para registrarte, consultar determinada información y participar en subastas.",
          "El tipo de cuenta, su coste y lo que incluye pueden cambiar, por lo que debes comprobarlos en la información oficial vigente.",
          "El acceso para particulares y profesionales puede tener límites diferentes. Revisa qué vehículos, funciones y condiciones corresponden exactamente a tu cuenta antes de operar."
        ],
        callout: {
          tone: "note",
          label: "Consejo útil",
          text: "Incluye cualquier coste de membresía en tu operativa general y comprueba que el tipo de acceso encaja con los vehículos que quieres analizar."
        }
      },
      {
        title: "4. Calendario de subastas en Alemania",
        paragraphs: [
          "Copart Alemania publica un calendario de subastas que debes consultar en la propia plataforma.",
          "Los días y horarios pueden cambiar por centro, festivos o condiciones operativas.",
          "Conocer el calendario vigente te permite organizar la revisión previa y llegar con los favoritos preparados.",
          "No es una plataforma donde entres un día al azar y compres sin preparar. Lo ideal es revisar coches antes, guardarlos en favoritos, calcular límites y entrar el día de la subasta con una idea clara."
        ]
      },
      {
        title: "5. La lista de vehículos: R, S o sin indicador",
        paragraphs: [
          "Cuando entras en la lista de coches de Copart, hay una cosa en la que tienes que fijarte desde el principio.",
          "A la derecha de la foto del vehículo y cerca del icono de favoritos, pueden aparecer tres posibilidades:",
          "• R en verde",
          "• S en azul",
          "• Nada",
          "Esto es muy importante porque te da una primera pista sobre el estado funcional del coche."
        ],
        images: [
          {
            src: "/course-images/copart/r-s-sin-indicador-copart.png",
            alt: "Captura de la lista de Copart con R, S y sin indicador"
          }
        ]
      },
      {
        title: "6. Qué significa la R verde",
        paragraphs: [
          "La R en verde significa que, al revisar el vehículo, se ha comprobado lo siguiente:",
          "1. El coche arranca.",
          "2. Se pueden poner o cambiar las marchas.",
          "3. El coche anda hacia delante y hacia atrás.",
          "Esto no significa que el coche esté perfecto. Significa que, en esa revisión básica, el coche arranca, permite marchas y se mueve.",
          "Normalmente, los coches con R son los que más nos interesan, especialmente si nuestra idea es traer el coche con placas o valorar que pueda circular."
        ],
        callout: {
          tone: "note",
          label: "Idea clave",
          text: "La R no garantiza que el coche esté bien, pero sí es una señal mucho mejor que S o que no aparezca nada."
        }
      },
      {
        title: "7. Qué significa la S azul",
        paragraphs: [
          "La S en azul significa que el coche arranca y se pueden poner las marchas, pero no se confirma que ande hacia delante y hacia atrás.",
          "En la práctica, muchas veces verás coches bastante dañados en alguna parte del eje, suspensión, ruedas o dirección. Por eso puede arrancar y entrar marchas, pero no moverse.",
          "Si el coche tiene S, tienes que revisar muy bien fotos, daños, ruedas, ejes, suspensión y si realmente se podrá mover o necesitará transporte sí o sí."
        ],
        alert: {
          tone: "alert",
          label: "No confundas",
          text: "Un coche con S puede arrancar, pero eso no significa que puedas sacarlo conduciendo. Puede tener un daño que lo haga imposible o peligroso."
        }
      },
      {
        title: "8. Qué significa que no aparezca nada",
        paragraphs: [
          "Cuando no aparece ni R ni S, normalmente significa que el coche no arranca o tiene algún tipo de problema que impide confirmar lo anterior.",
          "Estos coches son más arriesgados.",
          "Puede haber oportunidades, pero tienes que saber muy bien lo que haces. Si no arranca, el problema puede ser pequeño o puede ser grande.",
          "Para empezar, normalmente conviene centrarse más en coches con R y dejar los coches sin indicador para gente con más experiencia, taller, transporte y margen suficiente."
        ]
      },
      {
        title: "9. Kilómetros y Estimated Retail Value",
        paragraphs: [
          "En la lista también verás el kilometraje del coche y el Estimated Retail Value.",
          "El Estimated Retail Value es el precio estimado de mercado en Alemania si el coche estuviera en buen estado.",
          "Está bien como orientación, pero no hay que tomarlo como verdad absoluta.",
          "Además, es una herramienta muy útil para entender cuál puede ser el techo de la puja y cómo pueden comportarse otros compradores.",
          "Por ejemplo, si el valor estimado de mercado en Alemania es de 20.000 € y la puja va por 2.000 €, es bastante probable que todavía tenga mucho recorrido y siga subiendo.",
          "Sin embargo, si el valor estimado es de 5.000 € y la puja va por 1.000 €, es posible que termine adjudicándose por 2.000 €, 3.000 € o incluso menos, dependiendo del daño y del interés que genere.",
          "No es una ciencia exacta, pero sí una buena referencia para entender hasta dónde podrían estar dispuestas a llegar otras personas en la subasta.",
          "Como normalmente venderemos en España, siempre es mejor revisar tú mismo el mercado español.",
          "Y aquí tenemos una ventaja importante: los vehículos suelen costar más en España que en Alemania, por lo que muchas veces disponemos de más margen que un comprador alemán.",
          "Eso sí, también tenemos costes adicionales que ellos no tienen, especialmente transporte, desplazamientos y logística. Y cuanto más al sur de España estés, más importante será tener en cuenta ese coste extra.",
          "Puede servirte para tener una referencia rápida, pero la decisión real debe basarse en:"
        ],
        bullets: [
          "precio final de subasta;",
          "comisión;",
          "transporte;",
          "reparación;",
          "matriculación;",
          "mercado español;",
          "facilidad de venta;",
          "riesgo del daño."
        ],
        callout: {
          tone: "note",
          label: "Consejo útil",
          text: "Usa el Estimated Retail Value como brújula rápida para entender el mercado y el posible comportamiento de la puja, pero no como una calculadora de beneficio."
        },
        images: [
          {
            src: "/course-images/copart/estimated-retail-value-copart.png",
            alt: "Captura del Estimated Retail Value en la ficha de Copart"
          }
        ]
      },
      {
        title: "10. Documentación: ZB1, ZB2 y COC",
        paragraphs: [
          "En Copart Alemania es muy importante revisar la documentación.",
          "Puedes ver términos como:",
          "• ZB1",
          "• ZB2",
          "• Certificate of Conformity",
          "• International Documents",
          "ZB1 y ZB2 son la documentación alemana del vehículo, la grande y la pequeña.",
          "Es importante que el coche tenga ZB1 y ZB2, aunque la mayoría de vehículos lo tienen.",
          "Si además aparece Certificate of Conformity, significa que tiene COC. Eso es todavía mejor, porque te puedes ahorrar tener que hacerlo aparte."
        ],
        callout: {
          tone: "note",
          label: "Idea clave",
          text: "Cuanto más clara y completa esté la documentación, menos sorpresas tendrás después en exportación, matriculación y homologación."
        },
        images: [
          {
            src: "/course-images/copart/zb1-zb2-coc-copart.png",
            alt: "Captura de ZB1, ZB2 y COC en Copart"
          }
        ]
      },
      {
        title: "11. International Documents",
        paragraphs: [
          "A veces verás que pone International Documents.",
          "Eso significa que el vehículo está matriculado fuera de Alemania.",
          "Muchas veces puede ser un coche de Estados Unidos, pero también puede ser simplemente de otro país vecino, como Holanda u otro país europeo.",
          "Aquí hay que tener cuidado.",
          "Si es un coche de Estados Unidos, puede complicarse mucho la matriculación o la homologación en España.",
          "Si es de otro país europeo, quizá no sea tan grave, pero igualmente hay que revisar muy bien qué documentación tiene y de dónde viene."
        ],
        alert: {
          tone: "alert",
          label: "No confundas",
          text: "International Documents no significa automáticamente coche malo, pero sí significa que tienes que revisar mucho mejor la documentación antes de pujar."
        },
        images: [
          {
            src: "/course-images/copart/international-documents-copart.png",
            alt: "Captura de International Documents y documentación belga en Copart"
          }
        ]
      },
      {
        title: "12. Daño principal en la lista",
        paragraphs: [
          "Debajo de la información principal también suele aparecer el problema principal del coche.",
          "Puedes ver cosas como:",
          "• mechanical;",
          "• front end;",
          "• rear end;",
          "• side;",
          "• normal wear;",
          "• hail;",
          "• water/flood;",
          "• vandalism;",
          "• minor dents/scratches.",
          "Yo uso la página en inglés, pero si no estás cómodo, puedes traducir la página y ponerla en español.",
          "Lo importante es que entiendas qué tipo de daño declara Copart antes de abrir la ficha.",
          "Un coche con front end no es lo mismo que uno con normal wear. Y un coche con mechanical requiere mucha más prudencia."
        ],
        images: [
          {
            src: "/course-images/copart/dano-principal-lista-copart.png",
            alt: "Captura del daño principal y secundario declarados en Copart"
          }
        ]
      },
      {
        title: "13. Lo que debes recordar de este módulo",
        paragraphs: [
          "Copart Alemania puede ser una de las subastas más interesantes si entiendes lo que estás mirando.",
          "La oportunidad está en que muchos coches salen por debajo del mercado alemán, y eso puede dejar margen en España.",
          "Pero la oportunidad viene mezclada con riesgo: daños, documentación, transporte, reparación, comisiones y matriculación.",
          "Antes de abrir una ficha a fondo, mira siempre:"
        ],
        bullets: [
          "R, S o sin indicador;",
          "kilometraje;",
          "estimated retail value;",
          "documentación;",
          "ZB1 y ZB2;",
          "COC;",
          "si tiene International Documents;",
          "tipo de daño principal."
        ]
      }
    ]
  },
  {
    id: "module-8",
    slug: "ficha-copart",
    title: "Analizar ficha de Copart",
    duration: "12 min",
    summary: "La ficha de Copart no funciona como una ficha de Auto1. Aquí cada foto y cada dato importan mucho más.",
    learning: [
      "Leer fotos, cuadro y avisos como la parte central del análisis.",
      "Entender mejor damage principal, secundario e información adicional.",
      "Detectar cuándo mechanical, airbag o flood cambian por completo la operación."
    ],
    bullets: [
      "Copart no suele darte tantas fotos o tanto detalle como otras plataformas.",
      "Las últimas fotos muchas veces enseñan lo que de verdad importa.",
      "Si aparece mechanical, no se puede pasar por alto aunque sea secundario."
    ],
    quote: "En Copart, muchas veces el valor está en saber interpretar pocas pistas.",
    miniChecklist: [
      "Antes de pujar por un coche en Copart, revisa:",
      "¿He visto todas las fotos?",
      "¿He revisado las últimas fotos?",
      "¿He mirado la foto del cuadro?",
      "¿Hay testigos encendidos?",
      "¿Cuál es el primary damage?",
      "¿Cuál es el secondary damage?",
      "¿Las fotos coinciden con los daños declarados?",
      "¿Aparece mechanical?",
      "¿He buscado additional info?",
      "¿Hay airbag saltado?",
      "¿Hay aviso de flood o inundación?",
      "¿Hay documentos internacionales?",
      "¿Faltan documentos?",
      "¿Tiene IVA?",
      "¿Tiene libro de mantenimiento?",
      "¿El daño parece reparable?",
      "¿El equipamiento mejora el valor?",
      "¿El precio final tendría margen después de todo?"
    ],
    video: {
      status: "ready",
      title: "Cómo revisar fotos, daños y avisos importantes en Copart",
      description: "Te explico este módulo con pantalla real, ejemplos y mi forma de analizarlo.",
      duration: "15 min",
      videoUrl: "https://www.youtube.com/embed/IUXtirWSHmc",
      youtubeId: "IUXtirWSHmc"
    },
    sections: [
      {
        title: "Idea principal del módulo",
        paragraphs: [
          "La ficha de Copart no funciona como una ficha de Auto1.",
          "Copart normalmente no muestra tantísimas fotos ni tantísimo detalle. Por eso, cada foto y cada dato importan mucho más.",
          "Cuando entras en una ficha de Copart, no puedes mirar solo la primera foto y pensar que ya entiendes el coche. Tienes que revisar bien las fotos principales, las últimas fotos, la segunda foto si hay avisos especiales, los daños declarados y la información adicional.",
          "En Copart, muchas veces el valor está en saber interpretar pocas pistas."
        ]
      },
      {
        title: "1. Fotos principales",
        paragraphs: [
          "Cuando entras en la ficha/anuncio, lo primero que ves son las fotos principales.",
          "Normalmente muestran el coche desde varios lados y un poco por dentro.",
          "Puedes ver:",
          "• frontal;",
          "• lateral;",
          "• trasera;",
          "• interior;",
          "• cuadro;",
          "• zona de daño;",
          "• algún detalle importante.",
          "Pero Copart no siempre muestra los coches con muchas fotos ni con demasiado detalle.",
          "Por eso no basta con mirar por encima. Hay que abrir las fotos y revisar con atención."
        ]
      },
      {
        title: "2. Las últimas fotos suelen ser las más importantes",
        paragraphs: [
          "En Copart, las últimas fotos son especialmente importantes.",
          "Muchas veces es ahí donde realmente enseñan los daños.",
          "Cada foto de esa parte suele estar puesta por algo. No están solo para rellenar.",
          "Si hay una foto de una rueda, mira esa rueda.",
          "Si hay una foto de un eje, mira el eje.",
          "Si hay una foto de una zona concreta del golpe, mira si hay algo doblado, roto, faltante o descuadrado.",
          "Las últimas fotos muchas veces son las que te dicen si el coche tiene sentido o no."
        ],
        callout: {
          tone: "note",
          label: "Consejo útil",
          text: "No cierres una ficha de Copart sin revisar las últimas fotos. Ahí suele estar la verdad del daño."
        },
        images: [
          {
            src: "/course-images/copart/ultimas-fotos-danos.jpg",
            alt: "Captura de las últimas fotos de daños en una ficha de Copart",
            label: "Fotos clave",
            caption: "En Copart, las últimas fotos suelen enseñar el daño importante. Cada foto suele estar puesta por algo.",
            layout: "single",
            blurSensitive: true
          }
        ]
      },
      {
        title: "3. Foto del cuadro",
        paragraphs: [
          "Siempre hay que revisar la foto del cuadro.",
          "Copart normalmente no escribe con tanto detalle si hay un testigo encendido. Por eso, si hay foto del cuadro, tienes que mirarla tú.",
          "Busca:",
          "• testigo motor;",
          "• airbag;",
          "• ABS;",
          "• ESP;",
          "• batería;",
          "• aceite;",
          "• temperatura;",
          "• mensajes de avería;",
          "• kilómetros;",
          "• si el coche está arrancado o solo con contacto.",
          "Esto puede cambiar totalmente la decisión.",
          "Un coche con golpe de carrocería y sin testigos puede ser una cosa.",
          "Un coche con golpe, airbag, ABS y testigo motor puede ser otra historia."
        ],
        callout: {
          tone: "note",
          label: "Idea clave",
          text: "En Copart, si no miras el cuadro, puedes estar ignorando una de las pistas más importantes de toda la ficha."
        }
      },
      {
        title: "4. Datos del vehículo",
        paragraphs: [
          "A la derecha de la ficha aparecen los datos del vehículo.",
          "Aquí verás información básica como modelo, año, combustible, cambio, kilometraje, documentación, ubicación y otros datos técnicos.",
          "No suele ser la parte más complicada, pero hay que revisarla.",
          "Lo importante es que todo tenga sentido:",
          "• año;",
          "• versión;",
          "• kilometraje;",
          "• documentación;",
          "• país;",
          "• tipo de cambio;",
          "• combustible;",
          "• emisiones si aparecen;",
          "• equipamiento;",
          "• si los datos coinciden con las fotos.",
          "No te saltes esta parte por mirar solo los daños. Un dato técnico incorrecto o una documentación rara puede cambiar toda la operación."
        ]
      },
      {
        title: "5. Primary damage y secondary damage",
        paragraphs: [
          "En la ficha de Copart hay dos campos muy importantes:",
          "• Primary damage",
          "• Secondary damage",
          "Primary damage es el daño principal.",
          "Secondary damage es el daño secundario.",
          "Esto te ayuda a ordenar el análisis.",
          "Si el daño principal pone “rear end” y al mirar las fotos ves que la parte trasera no está tan mal, entonces el daño secundario normalmente debería ser menos importante todavía.",
          "Pero no siempre hay que fiarse solo de la palabra. Hay que contrastarlo con fotos.",
          "Un daño descrito como frontal puede ser leve o puede afectar a radiadores, traviesa, faros, capó, airbags o estructura.",
          "Un daño lateral puede ser solo puerta o puede afectar pilar, suspensión o airbag lateral."
        ],
        alert: {
          tone: "alert",
          label: "No confundas",
          text: "Primary damage y secondary damage son una guía, no una sentencia. La foto manda."
        },
        images: [
          {
            src: "/course-images/copart/primary-secondary-damage.jpg",
            alt: "Captura de primary damage y secondary damage en Copart",
            label: "Daños Copart",
            caption: "Primary damage y secondary damage ayudan a ordenar el riesgo, pero siempre hay que contrastarlo con las fotos.",
            layout: "single",
            blurSensitive: true
          }
        ]
      },
      {
        title: "6. Cuidado con mechanical",
        paragraphs: [
          "Uno de los términos con los que hay que tener más cuidado es mechanical.",
          "Si aparece como daño principal, cuidado.",
          "Y aunque aparezca como daño secundario, también hay que revisar muy bien.",
          "Mechanical puede significar muchas cosas. Puede ser algo de motor, caja de cambios, transmisión u otro problema mecánico.",
          "Lo importante es buscar si hay más explicación en additional info.",
          "Ahí Copart puede indicar si el problema está relacionado con:",
          "• motor;",
          "• caja de cambios;",
          "• transmisión;",
          "• dirección;",
          "• suspensión;",
          "• arranque;",
          "• otro sistema.",
          "Un daño mecánico puede comerse todo el margen si no lo valoras bien."
        ],
        callout: {
          tone: "note",
          label: "Consejo útil",
          text: "Si aparece mechanical y no entiendes exactamente qué pasa, no lo trates como un daño más. Es una señal de riesgo alto."
        }
      },
      {
        title: "7. Additional info",
        paragraphs: [
          "Al final o en la zona de datos del coche puede aparecer additional info.",
          "Esta información puede ser muy importante.",
          "A veces te dice más sobre el problema real del coche, especialmente si aparece mechanical.",
          "Puede aclarar si el daño está en:",
          "• gearbox;",
          "• engine;",
          "• transmission;",
          "• suspension;",
          "• starts;",
          "• not starting;",
          "• missing parts;",
          "• documents;",
          "• keys;",
          "• airbags;",
          "• flood;",
          "• otros avisos.",
          "Hay que buscar esta parte antes de pujar.",
          "Si hay una nota pequeña que dice que la caja está dañada y tú no la has visto, el problema no es de la subasta. El problema es que no la revisaste."
        ]
      },
      {
        title: "8. La segunda foto y los avisos especiales",
        paragraphs: [
          "Volviendo a las fotos, hay un detalle importante.",
          "Si el coche tiene algo “especial”, muchas veces Copart lo indica en la segunda foto.",
          "Por ejemplo:",
          "• coche con granizo;",
          "• documentos perdidos;",
          "• documentos internacionales;",
          "• coche inundado;",
          "• IVA;",
          "• airbag saltado;",
          "• libro de mantenimiento;",
          "• otros avisos relevantes.",
          "Esa segunda foto puede funcionar casi como un cartel de advertencia.",
          "No la pases rápido."
        ],
        callout: {
          tone: "note",
          label: "Idea clave",
          text: "En Copart, la segunda foto puede decirte algo que cambia toda la operación."
        }
      },
      {
        title: "9. Granizo: una oportunidad interesante",
        paragraphs: [
          "Según mi opinión, el granizo es de lo mejor que le puede pasar a un coche en esta subasta.",
          "¿Por qué?",
          "Porque normalmente no afecta demasiado a la mecánica, pero baja muchísimo el precio dentro de la subasta.",
          "Eso no significa que todos los coches con granizo sean buenos. Hay que calcular reparación, estado general, precio final, mercado y salida comercial.",
          "Pero si sabes comprar bien, los coches con granizo pueden ser muy interesantes.",
          "Hay que echarles un ojo."
        ],
        callout: {
          tone: "note",
          label: "Consejo útil",
          text: "Un coche con granizo puede asustar visualmente, pero si mecánicamente está bien y el precio baja mucho, puede dejar margen. Lo importante es calcularlo, no enamorarse."
        },
        images: [
          {
            src: "/course-images/copart/granizo-copart.jpg",
            alt: "Captura de un ejemplo de daños por granizo en Copart",
            label: "Oportunidad",
            caption: "El granizo puede bajar mucho el precio sin afectar necesariamente a la mecánica, pero hay que calcular reparación y salida comercial.",
            layout: "single",
            blurSensitive: true
          }
        ]
      },
      {
        title: "10. IVA, airbags y libro de mantenimiento",
        paragraphs: [
          "En Copart también pueden aparecer avisos sobre:",
          "• si tiene IVA;",
          "• si ha saltado algún airbag;",
          "• si tiene libro de mantenimiento;",
          "• si hay documentación especial;",
          "• si falta algún documento;",
          "• si tiene daños especiales.",
          "Esto hay que revisarlo siempre.",
          "El IVA puede afectar al coste y a la forma de facturación.",
          "Un airbag saltado puede cambiar mucho la reparación y la facilidad de venta.",
          "El libro de mantenimiento puede aportar valor, especialmente en coches mejores o premium.",
          "Cada aviso pequeño puede ser importante."
        ]
      },
      {
        title: "11. Comprar Ahora dentro de la ficha",
        paragraphs: [
          "En algunos casos, dentro de la ficha puede aparecer un precio de Comprar Ahora.",
          "Puede ser tentador, pero no lo recomiendo salvo que sea una megaganga.",
          "Si está en Comprar Ahora, tienes la opción de comprarlo directamente, pero hay que comparar muy bien el precio con:",
          "• daños;",
          "• comisiones;",
          "• transporte;",
          "• reparación;",
          "• mercado español;",
          "• documentación;",
          "• riesgo.",
          "Muchas veces es mejor esperar a la subasta y ver hasta dónde llega."
        ]
      },
      {
        title: "12. Datos avanzados y equipamiento",
        paragraphs: [
          "Debajo de la zona principal de puja también pueden aparecer detalles más avanzados del vehículo.",
          "Puedes ver:",
          "• emisiones CO2;",
          "• consumo;",
          "• aceleración;",
          "• velocidad máxima;",
          "• datos técnicos;",
          "• equipamiento de serie;",
          "• equipamiento extra.",
          "Esto puede parecer secundario, pero puede ayudarte.",
          "En coches premium, el equipamiento puede cambiar bastante el precio de venta.",
          "Un coche puede parecer uno más, pero tener extras que luego hacen que sea más atractivo en España."
        ]
      },
      {
        title: "13. Lo que debes recordar de este módulo",
        paragraphs: [
          "La ficha de Copart se analiza de forma distinta a Auto1.",
          "Hay menos información, así que cada foto cuenta.",
          "Revisa fotos principales, últimas fotos, foto del cuadro, segunda foto, primary damage, secondary damage, additional info, documentación, avisos y equipamiento.",
          "Si hay mechanical, airbag, flood, documentos internacionales o documentación perdida, sube el nivel de atención.",
          "Copart puede tener mucho margen, pero el margen está escondido dentro del riesgo. Tu trabajo es separar oportunidad de trampa."
        ]
      }
    ]
  },
  {
    id: "module-9",
    slug: "pujar-copart",
    title: "Pujar, negociar y recoger en Copart",
    duration: "15 min",
    summary: "En Copart no basta con encontrar un coche interesante. Hay que saber pujar.",
    learning: [
      "Entender el flujo de la subasta en vivo y sus líneas.",
      "Usar favoritos, comisión, precio óptimo y precio máximo con cabeza.",
      "Preparar pago, recogida y documentación antes de ganar."
    ],
    bullets: [
      "La subasta en vivo puede calentarte muy rápido si entras sin números.",
      "El óptimo es lo que te gustaría pagar y el máximo es el límite que no debes pasar.",
      "El dinero se gana antes de pujar, no mientras pujas."
    ],
    quote: "Copart exige números y límites: una puja emocional puede convertir una oportunidad posible en una compra mediocre.",
    miniChecklist: [
      "Antes de pujar en Copart, revisa:",
      "¿Tengo marcado el coche en favoritos?",
      "¿Sé en qué línea sale, A o B?",
      "¿He revisado daños y documentación?",
      "¿He calculado reparación?",
      "¿He calculado transporte?",
      "¿He usado la calculadora de comisión?",
      "¿Sé cuánto pagaría realmente si gano?",
      "¿Tengo precio óptimo?",
      "¿Tengo precio máximo?",
      "¿Sé cuándo debo parar?",
      "¿Estoy dispuesto a mantener mi oferta si el vendedor pide más?",
      "¿Tengo claro el plazo vigente de pago?",
      "¿Tengo claro el plazo vigente de recogida?",
      "¿El coche puede circular?",
      "¿Necesita placas rojas o transporte?",
      "¿Sé cómo recibiré la documentación?"
    ],
    videos: [
      {
        status: "ready",
        title: "Cómo preparar una puja en Copart · Parte 1",
        description: "Primera parte de la explicación práctica de la puja en Copart.",
        videoUrl: "https://www.youtube.com/embed/4KhVMkBmADo",
        youtubeId: "4KhVMkBmADo"
      },
      {
        status: "ready",
        title: "Cómo preparar una puja en Copart · Parte 2",
        description: "Segunda parte de la explicación práctica de la puja en Copart.",
        videoUrl: "https://www.youtube.com/embed/L38in9uuqMI",
        youtubeId: "L38in9uuqMI"
      }
    ],
    sections: [
      {
        title: "Idea principal del módulo",
        paragraphs: [
          "En Copart no basta con encontrar un coche interesante. Hay que saber pujar.",
          "La subasta en vivo puede calentarte muy rápido. Ves el coche que te gusta, alguien puja, tú subes 100 €, luego otros 100 €, luego otros 100 €, y de repente estás pagando mucho más de lo que habías calculado.",
          "Por eso, antes de pujar, necesitas dos números:",
          "• tu precio óptimo;",
          "• tu precio máximo.",
          "El óptimo es lo que te gustaría pagar.",
          "El máximo es el límite que no debes pasar.",
          "Copart exige números y límites. Si pujas con emoción, puedes convertir una oportunidad posible en una compra mediocre."
        ]
      },
      {
        title: "1. Pujar antes de la subasta",
        paragraphs: [
          "En Copart puedes pujar antes de que empiece la subasta.",
          "Pero sinceramente, no le veo mucho sentido en la mayoría de casos.",
          "Para mí es mejor esperar al día de la subasta, entrar en la subasta en vivo y pujar en el momento.",
          "Así ves cómo se mueve el lote, cuánto interés hay y no te comprometes antes de tiempo.",
          "Esto no significa que nunca puedas dejar una puja previa, pero para empezar, lo más inteligente es preparar tus límites y estar presente en directo."
        ]
      },
      {
        title: "2. Cómo funciona la subasta en vivo",
        paragraphs: [
          "A diferencia de Auto1, en Copart el día de subasta los vehículos van saliendo uno por uno.",
          "Por ejemplo:",
          "• sale vehículo 1;",
          "• la gente puja por él;",
          "• termina;",
          "• pasa el siguiente vehículo;",
          "• sale vehículo 2;",
          "• la gente puja;",
          "• termina;",
          "• sigue la lista.",
          "Cada vehículo tiene su número de lote.",
          "El día de la subasta se suelen separar en dos líneas:",
          "• línea A;",
          "• línea B.",
          "Es lo mismo, pero hay dos subastas activas a la vez para ir más rápido.",
          "Esto significa que tienes que estar atento, porque puede haber coches interesantes en dos líneas diferentes."
        ]
      },
      {
        title: "3. Favoritos durante la subasta",
        paragraphs: [
          "Si marcas en favoritos los coches que te gustan, el día de la subasta será mucho más fácil localizarlos.",
          "Hay una lista donde puedes ver los siguientes vehículos en salir.",
          "Si tienes marcado un coche como favorito, normalmente se ve con fondo amarillo, lo que ayuda mucho a localizarlo rápido.",
          "Esto parece un detalle pequeño, pero cuando hay muchos lotes y dos líneas activas, te puede salvar de perder un coche que querías seguir."
        ],
        callout: {
          tone: "note",
          label: "Consejo útil",
          text: "No esperes al último momento para buscar el coche. Marca favoritos antes y entra a la subasta con la lista preparada."
        }
      },
      {
        title: "4. La interfaz de puja",
        paragraphs: [
          "La interfaz de Copart es bastante fácil e intuitiva.",
          "Te muestra cuánto más vas a pujar y el incremento disponible en ese momento.",
          "Los saltos de puja pueden variar según precio, lote o condiciones de la plataforma.",
          "Esto hace que parezca fácil subir un poco más.",
          "Y ahí está el peligro.",
          "Cuando estás dentro de la puja, 100 € parece poco. Pero no estás pagando solo 100 € más. También tienes que recordar que al precio final hay que añadir comisiones, transporte, reparación y todos los gastos posteriores."
        ]
      },
      {
        title: "5. El peligro de calentarte pujando",
        paragraphs: [
          "Esto le pasa a casi todo el mundo cuando empieza.",
          "Tienes un límite de 5.000 €.",
          "El coche llega a 5.100 € y piensas:",
          "“Por 100 € más no pasa nada.”",
          "Pujas.",
          "Luego llega a 5.200 €.",
          "Otra vez piensas lo mismo.",
          "Y así, poco a poco, terminas ganándolo por 6.000 €.",
          "El problema es que esos 1.000 € extra no son el único gasto. Luego vienen comisión, transporte, reparación, matriculación y posibles sorpresas.",
          "Por eso necesitas entrar con límites claros."
        ],
        callout: {
          tone: "note",
          label: "Idea clave",
          text: "El máximo está para protegerte, no para alcanzarlo siempre."
        }
      },
      {
        title: "6. La calculadora de comisión de Copart",
        paragraphs: [
          "Dentro de la web de Copart hay una calculadora de comisión de subasta.",
          "Es muy importante usarla antes de pujar.",
          "El importe final puede quedar claramente por encima de la puja cuando añades la comisión.",
          "La cifra exacta puede cambiar, por eso debes usar la calculadora oficial vigente.",
          "La idea es probar distintos precios antes de la subasta para saber cuánto pagarías realmente.",
          "No se trata solo de decir:",
          "“Puedo pujar 6.000 €.”",
          "La pregunta real es:",
          "“Si pujo 6.000 €, ¿cuánto pago con comisión? ¿Y cuánto me queda de margen después de transporte, reparación y matriculación?”"
        ]
      },
      {
        title: "7. Cómo calcular tu máximo",
        paragraphs: [
          "Antes de la subasta, tienes que calcular hasta dónde puedes llegar.",
          "Ejemplo hipotético:",
          "El coche está ahora en subasta por 5.000 €.",
          "Calculas que tus gastos totales ya matriculado en España son 2.000 €.",
          "En España, ese coche se podría vender por 13.000 €.",
          "Entonces empiezas a probar con la calculadora.",
          "Supón que lo ganas por 6.500 €, estimas una comisión de 800 € solo para practicar y calculas otros 2.000 € de gastos: estarías aproximadamente en 9.300 €.",
          "En el escenario hipotético todavía quedaría margen.",
          "Imagina que decides que, para que la operación tenga sentido, no quieres que el coche te salga por más de 10.000 € con todo incluido.",
          "Vas probando en la calculadora hasta encontrar el precio de puja que, sumando comisión y gastos, te deja en esos 10.000 €.",
          "En este ejemplo, quizá ese número sea 6.900 €.",
          "Entonces 6.900 € sería tu máximo para ese coche."
        ]
      },
      {
        title: "8. Máximo no significa objetivo",
        paragraphs: [
          "Que tu máximo sea 6.900 € no significa que quieras pagar 6.900 €.",
          "Ese número está para no pasarte si la puja se calienta.",
          "Pero también necesitas calcular tu precio óptimo.",
          "El óptimo es lo que te gustaría pagar realmente.",
          "Si te gustan varios coches el mismo día, lo ideal es intentar comprar solo los que puedas ganar por tu precio óptimo.",
          "El máximo se usa en situaciones concretas:",
          "• si el coche te gusta mucho;",
          "• si crees que lo venderás rápido;",
          "• si piensas que lo puedes vender más caro;",
          "• si tienes cliente;",
          "• si quedan solo 2 o 3 coches interesantes;",
          "• si la subasta se está acabando y quieres irte con coche sí o sí."
        ],
        callout: {
          tone: "note",
          label: "Consejo útil",
          text: "El óptimo compra oportunidades. El máximo evita que las emociones te saquen de la carretera."
        }
      },
      {
        title: "9. Qué pasa si ganas y no llega al precio del vendedor",
        paragraphs: [
          "Después de ganar una puja, pueden pasar dos cosas.",
          "La primera es que el coche no haya llegado al precio que quería el vendedor.",
          "Imagina el ejemplo anterior.",
          "El vendedor quería 7.500 €, pero tú has sido inteligente y lo has ganado por tu óptimo, por ejemplo 5.900 €.",
          "Antes de pasarle el precio al vendedor, normalmente te llama un gestor que habla tu idioma o inglés.",
          "Te dirá algo como:",
          "“El vendedor quería 7.500 €. ¿Quieres subir un poco o te quedas en el precio por el que lo has ganado?”",
          "No estás obligado a subir.",
          "Tú puedes quedarte en tu precio.",
          "Después, se le pasa la oferta al vendedor y el vendedor decide si acepta o no.",
          "Aquí depende de cuánto quieras el coche.",
          "Si no es una megaganga, yo no subiría mucho o directamente no subiría nada.",
          "El inventario sigue moviéndose y aparecerán nuevas unidades.",
          "Si no compras ese, comprarás otro."
        ],
        callout: {
          tone: "note",
          label: "Idea clave",
          text: "No estás obligado a subir después de ganar. Si tu precio estaba bien calculado, puedes mantenerte firme."
        }
      },
      {
        title: "10. Qué pasa si sí llegas al precio del vendedor",
        paragraphs: [
          "El otro caso es que sí llegues al precio que quería el vendedor.",
          "Entonces pasas directamente a la siguiente fase.",
          "Después de ganar debes comprobar el plazo de pago que figure en las condiciones y en la adjudicación.",
          "Por eso, lo mejor es hacer transferencia inmediata y mandar justificante por email.",
          "La recogida también tiene una ventana concreta que debes confirmar antes de organizar el transporte.",
          "La plataforma puede exigir rapidez y coordinación.",
          "Superar el plazo puede generar costes de almacenamiento según las condiciones vigentes.",
          "Esto hay que tenerlo en cuenta antes de pujar, porque no puedes ganar un coche y luego empezar a pensar tranquilamente cómo lo vas a recoger."
        ]
      },
      {
        title: "11. Recogida en Copart",
        paragraphs: [
          "Para recoger el coche, tienes que tener claro si el vehículo está en condiciones de circular.",
          "Si tienes placas rojas y el coche puede circular, puede ser una opción.",
          "Pero Copart determina si el coche está o no en condiciones de circular. Además, normalmente van a preferir que uses grúa.",
          "Antes de pujar, tú mismo tienes que valorar si el coche parece apto para circular.",
          "No es lo mismo:",
          "• un arañazo;",
          "• una abolladura;",
          "• un daño leve de chapa.",
          "Que:",
          "• falta un piloto;",
          "• faro muy roto;",
          "• puerta que no cierra;",
          "• rueda dañada;",
          "• eje tocado;",
          "• daño que puede ser peligroso;",
          "• airbag saltado;",
          "• elementos de seguridad afectados.",
          "Todo lo que pueda ser peligroso para conducir puede impedir que te lo lleves con placas rojas."
        ]
      },
      {
        title: "12. Opciones si no puedes circular",
        paragraphs: [
          "Si el coche no puede circular o no te dejan sacarlo con placas rojas, tienes varias opciones.",
          "La más directa es transporte hasta tu localidad.",
          "Puedes contratar transporte directamente, buscar una grúa o usar plataformas como Clicktrans para que transportistas te den precio.",
          "También puedes valorar transporte parcial, campa intermedia o soluciones según país, pero lo importante es no improvisar después de ganar.",
          "Antes de pujar, tienes que tener claro:",
          "• si el coche puede circular;",
          "• si necesitas transporte;",
          "• cuánto puede costar;",
          "• cuánto tarda;",
          "• si la documentación estará lista;",
          "• cuándo se envía;",
          "• si tienes margen con ese coste."
        ]
      },
      {
        title: "13. Documentación",
        paragraphs: [
          "En Copart, la documentación se envía al recoger el vehículo.",
          "Esto es importante porque tienes que contar con los tiempos.",
          "No basta con pagar y pensar que al día siguiente ya tienes todo.",
          "Si vas con transportista, confirma cómo se gestiona la documentación.",
          "Si vas tú, pregunta bien qué te entregan, cuándo y cómo.",
          "La documentación forma parte de la operación igual que el precio o el transporte."
        ]
      },
      {
        title: "14. Lo que debes recordar de este módulo",
        paragraphs: [
          "En Copart se gana dinero antes de pujar, no mientras pujas.",
          "El dinero se gana preparando bien:",
          "• daño;",
          "• documentación;",
          "• reparación;",
          "• transporte;",
          "• comisión;",
          "• precio óptimo;",
          "• precio máximo;",
          "• estrategia de recogida.",
          "La subasta en vivo es solo el momento donde ejecutas el plan.",
          "Si entras sin números, la emoción decide por ti.",
          "Y en subastas, cuando la emoción decide, normalmente pagas de más."
        ]
      }
    ]
  },
  {
    id: "module-10",
    slug: "coches-evitar-copart",
    title: "Coches que evitaria en Copart",
    duration: "11 min",
    summary:
      "Una guia de descarte para no comprar lotes que parecen baratos pero piden demasiada experiencia o demasiado margen.",
    learning: [
      "Saber por que ciertos perfiles de coche son peligrosos para empezar.",
      "Relacionar precio bajo con costes ocultos posteriores.",
      "Pensar la salida del coche antes de pujar."
    ],
    bullets: [
      "Si estás empezando, mejor priorizar R verde frente a S o sin letra.",
      "Documentación USA, airbag y óxido fuerte suelen complicar muchísimo la operación.",
      "Un coche muy barato no cuesta poco cuando sumas todo lo demás."
    ],
    quote:
      "En Copart, un coche de 300 € no cuesta 300 €. Cuesta 300 € más todo lo que viene detrás.",
    miniChecklist: [
      "Evitar S o sin letra si aún no controlas bien el riesgo.",
      "Desconfiar de documentación USA para matricular o vender en España.",
      "Medir impacto real de airbag y óxido.",
      "Pensar si puede circular o necesitará grúa."
    ],
    sections: [
      {
        title: "S o sin letra cuando estás empezando",
        paragraphs: [
          "Si estás empezando, las siglas importan mucho. Un R verde suele darte una base bastante más sana que un S o un sin letra. No porque garantice negocio, sino porque reduce incertidumbre operativa.",
          "Aprender primero con coches más legibles es una forma inteligente de proteger capital y errores."
        ]
      },
      {
        title: "Coches USA y documentación delicada",
        paragraphs: [
          "Los coches con documentación USA o situaciones documentales raras pueden dar guerra en homologación y matriculación. Si tu objetivo es vender o matricular en España, ese riesgo no suele compensar cuando aún estás construyendo criterio.",
          "No significa que no exista negocio ahí. Significa que no es la mejor escuela para empezar."
        ]
      },
      {
        title: "Airbag, óxido y golpes caros de verdad",
        paragraphs: [
          "Airbag desplegado casi siempre significa más que una pieza. Puede implicar sensores, cinturones, centralita, salpicadero y una factura que crece según avanzas.",
          "El óxido fuerte, por su parte, es de los problemas más traicioneros porque toca bajos, estructura, ITV y tiempo de taller. Es un daño que parece menos dramático en foto de lo que luego cuesta resolver."
        ],
        bullets: [
          "Airbag: coste en cascada.",
          "óxido: problema caro y poco agradecido.",
          "Golpes que afectan seguridad vial: mala base para salir circulando."
        ]
      },
      {
        title: "Los coches demasiado baratos",
        paragraphs: [
          "Un coche de 2 a 500 euros llama muchísimo la atención, pero comisión, transporte, matriculación, reparación y tiempo pueden comerse la operación entera. Solo tienen sentido cuando hay una estrategia clara detrás.",
          "Ese contexto puede ser alto valor en España, piezas, cliente previo o caso muy medido. Sin eso, el precio ultra bajo suele ser más anzuelo que ventaja."
        ],
        example: {
          title: "Pregunta que manda",
          text: "No preguntes solo si el coche es barato. Pregunta si sigue siendo bueno cuando sumas lo que cuesta ponerlo en la calle."
        }
      },
      {
        title: "Si no puede circular, cambia todo",
        paragraphs: [
          "Faro roto, piloto roto, puerta que no cierra, rueda o eje tocado, pérdidas de líquidos o daños peligrosos cambian la salida completa del vehículo. Si no puede circular, el transporte deja de ser opción secundaria y pasa a ser condición central.",
          "Eso debe saberse antes de pujar. No después."
        ]
      }
    ]
  },
  {
    id: "module-11",
    slug: "transporte-placas",
    title: "Transporte, placas y recogida en Copart",
    duration: "10 min",
    summary:
      "Cómo pensar la salida del coche antes de pujar y cuándo tiene sentido hablar de placas rojas, Clicktrans o grúa directa.",
    learning: [
      "Decidir si el coche puede salir circulando o necesita transporte.",
      "Entender el papel real de las placas rojas.",
      "Comparar Clicktrans con transporte directo."
    ],
    bullets: [
      "Copart determina muchas veces si el coche puede salir circulando.",
      "Las placas rojas ayudan, pero no convierten un coche inseguro en apto.",
      "La pregunta correcta antes de pujar es cómo lo vas a sacar de allí."
    ],
    quote:
      "Antes de pujar no preguntes solo cuánto cuesta. Pregunta cómo lo vas a sacar de allí.",
    miniChecklist: [
      "Pensar la salida antes de meter una puja.",
      "Confirmar si el coche puede circular con seguridad.",
      "Comparar Clicktrans y transporte directo.",
      "Tener lista la autorización y los datos de recogida."
    ],
    video: {
      status: "ready",
      title: "Placas rojas, Clicktrans y transporte desde Copart",
      description:
        "Te explico este módulo con pantalla real, ejemplos y mi forma de analizarlo.",
      duration: "8 min",
      videoUrl: "https://www.youtube.com/embed/B1_z8UR-jC4",
      youtubeId: "B1_z8UR-jC4"
    },
    sections: [
      {
        title: "Primero decide si puede moverse o no",
        paragraphs: [
          "Antes de pujar, no basta con calcular daños y comisión. También hay que pensar si el coche podrá salir rodando o si necesitará grúa desde el minuto uno.",
          "Copart suele tener la última palabra en muchas salidas y, además, normalmente prefieren que el coche salga con grúa cuando hay dudas claras."
        ]
      },
      {
        title: "Placas rojas: útiles, pero no mágicas",
        paragraphs: [
          "Las placas rojas son útiles cuando el coche está seguro para circular y toda la operación documental cuadra. Lo que no hacen es convertir un vehículo dañado o peligroso en algo apto para carretera.",
          "Por eso deben verse como herramienta, no como excusa para forzar una salida dudosa."
        ],
        alert: {
          tone: "alert",
          label: "Punto importante",
          text: "Si el coche no está para circular con seguridad, hablar de placas rojas no soluciona el problema. Solo lo maquilla."
        }
      },
      {
        title: "Clicktrans y transporte directo",
        paragraphs: [
          "Clicktrans permite publicar el trayecto y dejar que varios transportistas pujen por tu pedido. Tiene valor porque te da comparación de precios y te ayuda a tantear mercado sin cerrar nada demasiado pronto.",
          "La alternativa es buscar grúa o transportista directo, acordar precio, pasar autorización y datos de recogida y moverlo a tu ubicación con una cadena más controlada."
        ],
        bullets: [
          "Clicktrans: comparativa y competencia entre transportistas.",
          "Directo: más control si ya tienes proveedor o ruta clara."
        ]
      },
      {
        title: "Documentación y coordinación",
        paragraphs: [
          "La documentación suele enviarse al recoger el vehículo, por lo que no conviene asumir que todo llegará antes ni montar el transporte con información incompleta.",
          "Cuanto mejor cierres dirección, fecha, contacto y datos del vehículo, menos posibilidades hay de que la recogida se convierta en una cadena de llamadas y retrasos."
        ]
      }
    ]
  },
  {
    id: "module-12",
    slug: "checklist-final",
    title: "Checklist final",
    duration: "9 min",
    summary:
      "La recopilación final del curso para revisar antes de pujar, pagar, recoger y transportar sin improvisar.",
    learning: [
      "Cerrar la operación con una rutina repetible.",
      "Reducir errores por prisa o exceso de confianza.",
      "Convertir el curso en una forma de trabajar, no solo en teoría."
    ],
    bullets: [
      "Antes de pujar: ficha, daños, coste, óptimo, máximo y salida.",
      "Antes de pagar: adjudicación, datos, justificante y plazos.",
      "Antes de recoger y transportar: PIN, seguro, placas, campa y autorizaciones."
    ],
    quote:
      "Si no compras ese coche, compraras otro. Lo importante es no comprar mal.",
    miniChecklist: [
      "No pujar sin ruta completa de análisis.",
      "No pagar sin revisar datos y tiempos.",
      "No recoger sin PIN, identificacion y plan de salida.",
      "No transportar sin autorización y datos claros."
    ],
    sections: [
      {
        title: "Antes de pujar",
        paragraphs: [
          "Antes de pujar deberías tener revisados documentos, ficha, daños, fotos y coste aproximado. También deberías haber definido tu precio óptimo, tu máximo y la salida logística del coche.",
          "Si una de esas piezas falta, no estás tomando una decisión completa. Estas reaccionando a un precio."
        ],
        bullets: [
          "Documentos revisados.",
          "Ficha y daños revisados.",
          "Coste aproximado calculado.",
          "óptimo y máximo definidos.",
          "Transporte pensado."
        ]
      },
      {
        title: "Antes de pagar",
        paragraphs: [
          "Una vez adjudicado, toca frialdad. Confirmar adjudicación, revisar datos de pago, enviar justificante y tener claros los plazos. Esta parte parece administrativa, pero un error aquí te rompe la operación igual que un daño mecánico mal leído."
        ],
        bullets: [
          "Confirmar adjudicación.",
          "Revisar datos de pago.",
          "Guardar justificante.",
          "Tener plazos controlados."
        ]
      },
      {
        title: "Antes de recoger",
        paragraphs: [
          "La recogida necesita PIN, DNI o pasaporte, seguro temporal si aplica, placas o transporte definido, ficha guardada y fotos accesibles. Si es extranjero, el chaleco no es un detalle: es parte del mínimo operativo.",
          "Todo lo que no prepares aquí, se te puede convertir en una pérdida de tiempo el día más caro para improvisar."
        ],
        bullets: [
          "PIN.",
          "DNI o pasaporte.",
          "Seguro temporal.",
          "Placas o transporte.",
          "Ficha y fotos guardadas.",
          "Chaleco si es extranjero."
        ]
      },
      {
        title: "Antes de transportar",
        paragraphs: [
          "La salida final exige autorización, dirección de campa, datos del vehículo, fecha clara y contacto del transportista. Esta capa es la que evita malentendidos, recogidas fallidas o coches bloqueados por información a medias.",
          "El objetivo del checklist final no es convertirte en robot. Es hacer difícil que un error básico te arruine una buena compra."
        ],
        bullets: [
          "Autorizacion.",
          "Dirección de campa.",
          "Datos del vehículo.",
          "Fecha.",
          "Contacto del transportista."
        ],
        callout: {
          tone: "note",
          label: "Uso recomendado",
          text: "Vuelve a este módulo cada vez que una operación avance de fase. Si lo haces bien, el curso deja de ser teoría y se convierte en sistema."
        }
      }
    ]
  }
];

export const finalChecklistGroups = [
  {
    id: "antes-analizar",
    title: "Antes de analizar",
    items: [
      "Definir qué tipo de vehículo, salida y nivel de riesgo encajan con tu estrategia.",
      "Confirmar que puedes operar en la plataforma y que tu documentación está vigente.",
      "Decidir país, radio geográfico y logística que estás dispuesto a asumir.",
      "Preparar una forma consistente de guardar notas y comparar unidades."
    ]
  },
  {
    id: "ficha",
    title: "Ficha",
    items: [
      "Leer notas, prueba dinámica, datos técnicos y avisos antes de mirar solo el precio.",
      "Revisar todas las fotos, incluido cuadro, bajos, daños y últimas imágenes.",
      "Comprobar coherencia entre descripción, fotos, daños y movilidad declarada.",
      "Separar lo que sabes, lo que estimas y lo que todavía falta confirmar."
    ]
  },
  {
    id: "coste",
    title: "Coste",
    items: [
      "Sumar compra o puja, comisión, transporte, documentación y reparación estimada.",
      "Añadir un colchón proporcionado a la incertidumbre de la ficha.",
      "Contrastar el coste estimado con una salida de mercado realista.",
      "Distinguir precio objetivo de máximo absoluto antes de pujar."
    ]
  },
  {
    id: "puja",
    title: "Puja",
    items: [
      "Tener el máximo escrito antes de que empiece la dinámica de pujas.",
      "No subir el máximo por competencia, prisa o apego a una unidad.",
      "Conocer qué ocurre si ganas, si hay reserva o si aparece negociación posterior.",
      "Retirarte cuando la operación deja de encajar, aunque falte poco."
    ]
  },
  {
    id: "documentacion",
    title: "Documentación",
    items: [
      "Confirmar qué documentos se anuncian y qué limitaciones pueden tener.",
      "Revisar país, homologación y datos que afecten a matriculación o reventa.",
      "Guardar ficha, fotos, adjudicación y comunicaciones relevantes.",
      "Consultar las condiciones vigentes de la plataforma cuando exista alguna duda."
    ]
  },
  {
    id: "pago",
    title: "Pago",
    items: [
      "Confirmar adjudicación, importe, beneficiario y referencia antes de transferir.",
      "Respetar el plazo vigente y conservar el justificante.",
      "Enviar la confirmación por el canal indicado por la plataforma.",
      "No asumir que la recogida está autorizada hasta recibir confirmación."
    ]
  },
  {
    id: "recogida",
    title: "Recogida",
    items: [
      "Tener dirección, fecha, PIN, autorización e identificación preparados.",
      "Decidir antes si sale circulando, con placas o mediante transporte.",
      "Revisar el vehículo y documentar discrepancias antes de abandonar la campa.",
      "Confirmar cómo y cuándo se entrega la documentación restante."
    ]
  }
];

const newFundamentalsModules = [
  {
    id: "module-13",
    slug: "oportunidades-subastas",
    title: "Por qué existen oportunidades en las subastas",
    duration: "18 min",
    summary:
      "El contexto económico y operativo que explica por qué existe el canal profesional y por qué estar en una subasta no convierte automáticamente un coche en una oportunidad.",
    learning: [
      "Entender rotación, liquidez, volumen y remarketing sin confundirlos con descuentos garantizados.",
      "Comparar el mercado retail con el profesional desde información, velocidad y riesgo.",
      "Reconocer que la oportunidad depende del análisis y del máximo, no del canal por sí solo."
    ],
    quote:
      "La oportunidad no está en comprar en una subasta. Está en entender mejor qué compras y hasta cuánto tiene sentido pagar.",
    miniChecklist: [
      "Identificar por qué esa unidad está en el canal profesional.",
      "Separar urgencia del vendedor de calidad del vehículo.",
      "Comprobar si el precio deja margen después de todos los costes.",
      "Recordar que las unidades claras también atraen más competencia."
    ],
    sections: [
      {
        title: "El mercado mayorista resuelve un problema distinto",
        paragraphs: [
          "Un vendedor retail intenta encontrar al comprador final adecuado y defender el mejor precio posible. El canal profesional también busca vender, pero con frecuencia prioriza rotación, previsibilidad y capacidad para mover volumen.",
          "Empresas de renting, flotas, aseguradoras, concesionarios y operadores de remarketing pueden necesitar liberar stock, espacio o capital. La subasta permite concentrar demanda profesional y cerrar operaciones con más velocidad, aunque cada plataforma y cada vendedor utilicen reglas diferentes."
        ],
        callout: {
          tone: "note",
          label: "Contexto",
          text: "Liquidez no significa liquidación. Que un vendedor quiera rotar rápido no demuestra que el vehículo esté barato ni que encaje en tu estrategia."
        }
      },
      {
        title: "Retail y subasta profesional no ofrecen lo mismo",
        paragraphs: [
          "En retail suele haber más tiempo para preguntar, comparar y, en algunos casos, inspeccionar. En subasta profesional, la información llega en una ficha, las decisiones pueden ser rápidas y la responsabilidad de interpretar el riesgo pesa más sobre el comprador.",
          "La comparación útil no es cuál canal es mejor, sino qué exige cada uno de ti. Menos capacidad de inspección y más velocidad obligan a trabajar con margen, método y límites previos."
        ],
        visuals: [
          {
            type: "comparison",
            eyebrow: "Comparativa de contexto",
            title: "Mercado retail vs mercado profesional",
            description: "Tendencias generales. Cada operación y plataforma puede variar.",
            columns: [
              {
                title: "Mercado retail",
                items: [
                  { label: "Precio", value: "Orientado al comprador final" },
                  { label: "Información", value: "Más diálogo y posible inspección" },
                  { label: "Velocidad", value: "Normalmente más pausada" },
                  { label: "Riesgo", value: "Depende del vendedor y del marco aplicable" },
                  { label: "Competencia", value: "Comparación entre anuncios y vendedores" }
                ]
              },
              {
                title: "Mercado profesional / subasta",
                items: [
                  { label: "Precio", value: "Se forma por demanda, formato y condiciones" },
                  { label: "Información", value: "Ficha, fotos, avisos y documentación" },
                  { label: "Velocidad", value: "Decisión más concentrada" },
                  { label: "Riesgo", value: "Más peso en análisis y margen propio" },
                  { label: "Competencia", value: "Profesionales buscando las mismas unidades" }
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Dónde puede aparecer una oportunidad",
        paragraphs: [
          "Puede aparecer cuando una unidad no encaja en el canal comercial de su vendedor, cuando el volumen obliga a rotar o cuando parte del mercado interpreta peor que tú la información disponible. También puede existir porque aceptas una logística o una reparación que otros compradores no quieren gestionar.",
          "Nada de eso elimina el riesgo. Solo explica por qué dos compradores pueden asignar valores distintos al mismo coche según su mercado, sus costes, su experiencia y su capacidad operativa."
        ],
        bullets: [
          "Stock que no encaja con el cliente habitual del vendedor.",
          "Necesidad de rotación o liquidez.",
          "Ubicación o logística que reduce parte de la demanda.",
          "Daño o documentación que puedes evaluar con más precisión.",
          "Equipamiento o configuración que tu mercado valora mejor."
        ]
      },
      {
        title: "Por qué no todo está barato",
        paragraphs: [
          "Las unidades fáciles de entender, bien documentadas y con buena salida suelen atraer competencia. El precio puede acercarse rápidamente al nivel en el que el margen desaparece, incluso aunque la puja empezara baja.",
          "También hay coches baratos por una razón: daño, papeles, ubicación, inmovilización o falta de demanda. El trabajo no consiste en celebrar el precio bajo, sino en explicar de forma completa por qué es bajo y qué coste puede venir detrás."
        ],
        alert: {
          tone: "alert",
          label: "Error caro",
          text: "Confundir precio de salida con valor final. La cifra inicial atrae atención; la operación solo se decide con coste real, riesgo y mercado de salida."
        }
      },
      {
        title: "La ventaja práctica es decidir mejor",
        paragraphs: [
          "No necesitas acertar siempre ni comprar todas las semanas. Necesitas descartar rápido lo que no entiendes, dedicar tiempo a lo que sí encaja y retirarte cuando el precio supera tu máximo.",
          "Una oportunidad perdida suele volver en otra forma. Una mala compra inmoviliza dinero, atención y capacidad para aprovechar la siguiente."
        ],
        callout: {
          tone: "note",
          label: "Decisión",
          text: "¿Puedes explicar en una frase por qué esta unidad puede tener sentido para ti y en otra qué riesgo principal estás aceptando? Si no, sigue analizando."
        }
      }
    ]
  },
  {
    id: "module-14",
    slug: "coste-real-maximo",
    title: "El coste real y tu máximo antes de pujar",
    duration: "20 min",
    summary:
      "Una forma práctica de pasar del precio visible al coste estimado, proteger margen y fijar un máximo antes de que empiece la puja.",
    learning: [
      "Construir un coste aproximado con compra, comisión, logística, documentación, reparación e imprevistos.",
      "Separar precio objetivo, máximo absoluto y colchón de incertidumbre.",
      "Descartar una unidad cuando el coste completo deja de encajar con su mercado final."
    ],
    quote:
      "Si todavía no sabes cuál es tu máximo antes de empezar a pujar, todavía no estás preparado para pujar.",
    miniChecklist: [
      "Anotar todos los bloques de coste, aunque alguno sea una estimación.",
      "Añadir un colchón coherente con la calidad de la información.",
      "Contrastar contra una salida de mercado conservadora.",
      "Escribir objetivo y máximo antes de entrar en la puja."
    ],
    sections: [
      {
        title: "La puja es solo la primera línea",
        paragraphs: [
          "Un coche puede parecer atractivo en pantalla y dejar de serlo al sumar la operación completa. Comisión, transporte, documentación, reparación y tiempo no son detalles posteriores: forman parte de la compra desde el principio.",
          "El objetivo no es adivinar cada euro. Es evitar una decisión construida sobre una cifra incompleta y hacer visibles las partidas que pueden comerse el margen."
        ],
        visuals: [
          {
            type: "costStack",
            eyebrow: "Estructura de decisión",
            title: "Del precio visible al coste real aproximado",
            items: [
              "Precio / puja",
              "Comisión",
              "Transporte",
              "Documentación",
              "Reparación estimada",
              "Imprevistos"
            ],
            result: "Coste real aproximado",
            note: "Las partidas y sus importes dependen de la unidad, la plataforma y las condiciones vigentes."
          }
        ]
      },
      {
        title: "Empieza por el mercado final, no por la emoción",
        paragraphs: [
          "Antes de convertir una puja en máximo necesitas una referencia de salida. No una cifra optimista elegida para justificar la compra, sino un rango realista según estado, kilómetros, equipamiento y demanda.",
          "Desde ese rango restas el margen que necesitas y los costes que asumirás. El número que queda limita la compra. Si necesitas ignorar transporte o reparación para que la cuenta funcione, la cuenta no funciona."
        ]
      },
      {
        title: "Objetivo y máximo no son lo mismo",
        paragraphs: [
          "El objetivo es el precio al que la operación resulta cómoda. El máximo absoluto es el punto en el que todavía encaja, pero ya no admite otra sorpresa. Entre ambos existe una zona de decisión; por encima del máximo solo queda justificar una compra que ya habías descartado con números.",
          "Escribir ambos valores antes de pujar reduce el efecto de la competencia y evita ampliar el presupuesto de cien en cien."
        ],
        callout: {
          tone: "note",
          label: "Regla SubastasPro",
          text: "El máximo se calcula en frío y se respeta en caliente."
        }
      },
      {
        title: "El colchón compra protección frente a lo que no sabes",
        paragraphs: [
          "Una ficha detallada y coherente permite trabajar con menos incertidumbre que una ficha pobre. Daños difíciles de valorar, documentación dudosa o logística compleja exigen más margen, no más optimismo.",
          "El colchón no convierte una mala operación en buena. Solo reconoce que una estimación puede quedarse corta. Cuanto peor sea la información, mayor debe ser tu exigencia para seguir."
        ]
      },
      {
        title: "Ejemplo hipotético: una cuenta antes de pujar",
        paragraphs: [
          "Imagina una unidad con un precio de 10.000 €. Para practicar el método, supón una comisión estimada de 650 €, transporte de 500 €, documentación y gestiones de 250 €, reparación estimada de 1.200 € y un colchón de 600 €. El coste aproximado del ejemplo sería 13.200 €.",
          "Estas cifras son inventadas para enseñar la suma; no representan tarifas oficiales ni un presupuesto real. En una operación real sustituirías cada partida por las condiciones vigentes, presupuestos y estimaciones disponibles."
        ],
        example: {
          title: "Qué demuestra el ejemplo",
          text: "La decisión no se toma sobre 10.000 €, sino sobre una exposición aproximada de 13.200 €. Si el mercado final no soporta esa cifra con margen, el precio visible era una distracción."
        }
      },
      {
        title: "Decidir con números incompletos",
        visuals: [
          {
            type: "decisionTree",
            eyebrow: "Árbol de decisión",
            title: "¿La cuenta está preparada?",
            nodes: [
              {
                question: "¿Conoces las partidas principales?",
                options: [
                  { label: "Sí", text: "Suma y pasa al margen.", tone: "good" },
                  { label: "No", text: "Investiga o aumenta el colchón.", tone: "warn" }
                ]
              },
              {
                question: "¿El coste estimado deja margen realista?",
                options: [
                  { label: "Sí", text: "Define objetivo y máximo.", tone: "good" },
                  { label: "No", text: "Descarta aunque la puja parezca baja.", tone: "bad" }
                ]
              },
              {
                question: "¿Respetarás el máximo si hay competencia?",
                options: [
                  { label: "Sí", text: "Puedes entrar con un límite claro.", tone: "good" },
                  { label: "No", text: "No pujes todavía.", tone: "bad" }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "module-15",
    slug: "reglas-plazos-penalizaciones",
    title: "Reglas, obligaciones, plazos y penalizaciones",
    duration: "17 min",
    summary:
      "La cadena operativa que empieza al ganar y las comprobaciones necesarias para no convertir una compra válida en un problema de pago, documentación o recogida.",
    learning: [
      "Entender que una adjudicación puede generar obligaciones de pago y retirada.",
      "Preparar plazos, autorizaciones, documentación y logística antes de pujar.",
      "Consultar siempre las condiciones oficiales vigentes de cada plataforma."
    ],
    quote:
      "Ganar no cierra el trabajo. Activa una cadena de obligaciones que debes haber preparado antes.",
    miniChecklist: [
      "Leer las condiciones vigentes de la plataforma y del lote.",
      "Conocer plazos y canales de pago aplicables.",
      "Tener una salida logística viable antes de pujar.",
      "Guardar adjudicación, justificante y autorizaciones."
    ],
    sections: [
      {
        title: "Las reglas forman parte del coste",
        paragraphs: [
          "Cada plataforma define sus propios plazos, comisiones, procedimientos de pago, recogida y reclamación. Esas condiciones pueden cambiar y también pueden variar según país, tipo de lote o cuenta.",
          "Por eso no basta con conocer la interfaz. Antes de operar debes saber qué aceptas cuando pujas, qué ocurre si ganas y qué documentación necesitarás para completar la operación."
        ],
        alert: {
          tone: "alert",
          label: "Las reglas cambian",
          text: "Comprueba siempre las condiciones vigentes de la plataforma antes de operar. El curso enseña el proceso de revisión, no sustituye los términos oficiales actuales."
        }
      },
      {
        title: "Ganar puede crear una obligación",
        paragraphs: [
          "En una subasta profesional, una puja ganadora no debe tratarse como una reserva informal. Según las condiciones aplicables, puede obligarte a pagar y completar la compra.",
          "No pagar, cancelar fuera de lo permitido o dejar una unidad sin retirar puede provocar costes, restricciones o bloqueos de cuenta. No fijamos importes porque dependen de reglas que debes revisar en cada plataforma."
        ],
        callout: {
          tone: "note",
          label: "Error que puede costar dinero",
          text: "Pujar para ver hasta dónde llega el precio sin estar preparado para comprar si ganas."
        }
      },
      {
        title: "La operación después de ganar",
        visuals: [
          {
            type: "timeline",
            eyebrow: "Flujo operativo",
            title: "De la adjudicación a la salida",
            steps: [
              { title: "Ganas", text: "Confirma adjudicación, importe y condiciones." },
              { title: "Pagas", text: "Usa los datos correctos y conserva justificante." },
              { title: "Recibes autorización", text: "PIN, documentos o instrucciones según la plataforma." },
              { title: "Organizas recogida", text: "Fecha, campa, transporte, placas o seguro si corresponde." },
              { title: "Retiras el vehículo", text: "Revisa, documenta discrepancias y completa la salida." }
            ],
            note: "El orden concreto y los documentos dependen de las condiciones vigentes."
          }
        ]
      },
      {
        title: "Plazos que debes localizar antes de pujar",
        paragraphs: [
          "No memorices una cifra sin contexto. Localiza en la plataforma el plazo de pago, cuándo empieza a contar, cuándo puede retirarse el vehículo, si necesitas cita y desde qué momento pueden existir costes de almacenamiento.",
          "Anota también quién puede recoger, qué autorización necesita un transportista y cómo se entrega la documentación. Una logística barata deja de serlo si llegas tarde o envías a alguien sin los datos correctos."
        ],
        bullets: [
          "Plazo y referencia de pago.",
          "Confirmación necesaria antes de retirar.",
          "Ventana de recogida y sistema de citas.",
          "Posibles costes por demora o almacenamiento.",
          "PIN, autorización e identificación.",
          "Canal y plazo de reclamación cuando corresponda."
        ]
      },
      {
        title: "Antes de pujar, revisa",
        paragraphs: [
          "La mejor forma de evitar una penalización es diseñar la operación completa antes de competir por el coche. Si no puedes pagar dentro del plazo, no tienes transporte o la documentación no encaja con tu objetivo, la unidad todavía no está preparada para puja."
        ],
        callout: {
          tone: "note",
          label: "Decisión",
          text: "¿Podrías explicar ahora mismo cómo pagarías, quién recogería, qué necesitaría y qué harías si el coche no puede salir circulando?"
        }
      }
    ]
  },
  {
    id: "module-16",
    slug: "como-pensar-puja",
    title: "Cómo pensar una puja antes de pujar",
    duration: "19 min",
    summary:
      "Un sistema para descartar, vigilar, analizar y pujar sin enamorarte de una unidad ni mover el máximo en plena competencia.",
    learning: [
      "Clasificar oportunidades antes de dedicarles tiempo y dinero.",
      "Separar objetivo, máximo absoluto y decisión de retirada.",
      "Reconocer los sesgos que aparecen cuando otra persona también quiere el coche."
    ],
    quote:
      "Una oportunidad perdida es incómoda. Una mala compra ocupa dinero, tiempo y espacio.",
    miniChecklist: [
      "Clasificar la unidad antes de entrar en la puja.",
      "Escribir objetivo y máximo absoluto.",
      "Revisar coste, documentación y salida logística.",
      "Parar en el máximo sin negociar contigo mismo."
    ],
    sections: [
      {
        title: "Cuatro estados, no una sola decisión",
        paragraphs: [
          "No todo coche que abres merece análisis profundo, y no todo coche analizado merece puja. Separar fases evita invertir horas en unidades que fallan en un criterio básico y reduce la sensación de que tienes que comprar porque ya has trabajado mucho la ficha."
        ],
        visuals: [
          {
            type: "sequence",
            eyebrow: "Preparación de una puja",
            title: "Descartar → vigilar → analizar → pujar",
            items: ["Descartar", "Vigilar", "Analizar", "Pujar"],
            note: "Avanzar de fase requiere información suficiente; no ocurre por entusiasmo."
          }
        ]
      },
      {
        title: "Descartar y vigilar protegen tu atención",
        paragraphs: [
          "Descarta cuando documentación, daño, ubicación o coste chocan con tu estrategia. Vigila cuando todavía no hay precio o información suficientes para decidir, pero la unidad merece seguimiento.",
          "Guardar una unidad no es comprometerte con ella. Es darte permiso para observar sin pujar y comparar cómo evoluciona frente a otras oportunidades."
        ]
      },
      {
        title: "Analizar significa intentar romper tu propia tesis",
        paragraphs: [
          "Cuando una unidad parece buena, busca activamente el dato que podría cambiar la operación: una nota, una foto final, un testigo, un documento o una distancia logística que no habías sumado.",
          "El análisis útil no reúne argumentos para comprar. Comprueba si la compra sigue teniendo sentido después de mirar lo incómodo."
        ],
        callout: {
          tone: "note",
          label: "Regla rápida",
          text: "Cuanto más te guste una unidad, más disciplinada debe ser la búsqueda de motivos para descartarla."
        }
      },
      {
        title: "La puja añade presión psicológica",
        paragraphs: [
          "Competencia, cuenta atrás y pequeños incrementos pueden hacer que cien euros parezcan irrelevantes. El problema no es un incremento aislado, sino repetirlo hasta convertir tu máximo en una sugerencia.",
          "La otra puja no demuestra que el coche valga más para ti. Solo demuestra que otra persona tiene otro cálculo, otra salida o incluso otro nivel de disciplina."
        ],
        alert: {
          tone: "alert",
          label: "Error caro",
          text: "Perseguir el precio para no sentir que has perdido. La subasta termina; el coste de una mala compra permanece."
        }
      },
      {
        title: "Árbol de decisión antes de pulsar",
        visuals: [
          {
            type: "decisionTree",
            eyebrow: "Decisión",
            title: "¿Debes entrar en la puja?",
            nodes: [
              {
                question: "¿La ficha y la documentación son suficientes para tu estrategia?",
                options: [
                  { label: "Sí", text: "Pasa al coste.", tone: "good" },
                  { label: "No", text: "Descarta o exige más margen.", tone: "warn" }
                ]
              },
              {
                question: "¿Conoces el coste aproximado y la salida logística?",
                options: [
                  { label: "Sí", text: "Define objetivo y máximo.", tone: "good" },
                  { label: "No", text: "No pujes todavía.", tone: "bad" }
                ]
              },
              {
                question: "¿El precio sigue por debajo de tu máximo?",
                options: [
                  { label: "Sí", text: "Puedes decidir una puja consciente.", tone: "good" },
                  { label: "No", text: "Retírate y vuelve a buscar.", tone: "bad" }
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Paciencia y volumen de oportunidades",
        paragraphs: [
          "No enamorarte de un coche es más fácil cuando mantienes una lista de alternativas y entiendes que el mercado continúa. La paciencia no consiste en no comprar; consiste en esperar hasta que análisis, coste y precio coincidan.",
          "Saber retirarte también es una decisión profesional. Conserva capital y atención para la siguiente unidad que sí cumpla tus límites."
        ]
      }
    ]
  }
];

const existingCourseEnhancements = {
  "module-1": {
    extraSections: [
      {
        title: "Prepara el alta como un proceso, no como un formulario",
        paragraphs: [
          "Antes de empezar, crea una carpeta con identidad, datos fiscales, IAE vigente, dirección y documentos societarios cuando correspondan. Así puedes responder a una solicitud adicional sin improvisar ni enviar versiones contradictorias.",
          "Las plataformas pueden pedir información distinta o actualizar sus requisitos. Comprueba siempre el alta oficial vigente y utiliza este módulo como mapa de preparación, no como lista cerrada."
        ],
        callout: {
          tone: "note",
          label: "Decisión",
          text: "Si hoy te pidieran acreditar quién compra, a qué actividad se dedica y dónde opera, ¿tendrías la documentación localizada y actualizada?"
        }
      }
    ]
  },
  "module-2": {
    extraSections: [
      {
        title: "La información sustituye parte de la inspección",
        paragraphs: [
          "Cuando no tienes el coche delante, la ficha, las fotos, la prueba dinámica, el cuadro y la documentación se convierten en tu inspección remota. Ninguna pieza aislada es suficiente: buscas coherencia entre todas.",
          "Una foto limpia no corrige una nota mecánica; una descripción positiva no elimina un testigo. Cuando la información es pobre, no debes inventar certezas: necesitas más margen, más comprobaciones o un descarte."
        ],
        visuals: [
          {
            type: "comparison",
            eyebrow: "Cambio de criterio",
            title: "Compra tradicional vs subasta",
            columns: [
              {
                title: "Compra tradicional",
                items: [
                  { label: "Inspección", value: "Puedes ver, preguntar y probar según el caso" },
                  { label: "Tiempo", value: "Más espacio para negociar y revisar" },
                  { label: "Decisión", value: "Se apoya en contacto directo" }
                ]
              },
              {
                title: "Subasta profesional",
                items: [
                  { label: "Inspección", value: "Ficha, fotos, avisos y documentos" },
                  { label: "Tiempo", value: "Ventana de decisión más corta" },
                  { label: "Decisión", value: "Exige límite y margen previos" }
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Precio bajo, riesgo informativo y responsabilidad",
        paragraphs: [
          "Cuanto menos sabes, menos deberías pagar, pero eso no convierte automáticamente la diferencia en margen. Puede ser simplemente el precio del riesgo que estás asumiendo.",
          "Como comprador profesional debes entender qué acepta la cuenta, qué vías de reclamación existen y qué comprobaciones dependen de ti. La velocidad nunca elimina esa responsabilidad."
        ],
        alert: {
          tone: "alert",
          label: "Error caro",
          text: "Usar el precio bajo como sustituto de una explicación. Si no sabes por qué es barato, todavía no sabes qué estás comprando."
        }
      }
    ]
  },
  "module-3": {
    platform: "AUTO1",
    extraSections: [
      {
        title: "Inventario, atención y momento de entrada",
        paragraphs: [
          "Piensa el inventario como un flujo, no como una lista de coches únicos. Una unidad puede pasar por distintos formatos o movimientos de precio, pero tu trabajo sigue siendo el mismo: observar, comparar y actuar solo cuando el coste completo encaja.",
          "Esperar tiene sentido cuando el precio visible no deja margen y existen alternativas. Comprar Ahora puede tenerlo cuando la unidad es clara, la salida está medida y el coste de perderla supera la diferencia. Ninguna opción es correcta por defecto."
        ],
        callout: {
          tone: "note",
          label: "Criterio práctico",
          text: "No sigas un coche porque ya llevas días mirándolo. Síguelo mientras siga cumpliendo tu tesis de compra."
        }
      }
    ]
  },
  "module-4": {
    title: "Buscar y filtrar en Auto1",
    platform: "AUTO1",
    extraSections: [
      {
        title: "Tres capas de filtro",
        paragraphs: [
          "Empieza con filtros de descarte para eliminar lo que nunca comprarías. Después aplica filtros de oportunidad para concentrarte en configuraciones con posible salida. Por último, ajusta los filtros de estrategia: ubicación, combustible o carrocería según tu cliente y tu operativa.",
          "Año, kilometraje y precio no funcionan por separado. Un kilometraje alto puede ser asumible en una configuración concreta y una unidad joven puede seguir siendo mala si el coste total no encaja."
        ],
        visuals: [
          {
            type: "sequence",
            eyebrow: "Proceso de búsqueda",
            title: "Reducir ruido antes de abrir fichas",
            items: ["Descartar lo incompatible", "Aislar oportunidades", "Ajustar a tu estrategia", "Abrir solo fichas relevantes"],
            note: "Filtrar no es encontrar el coche. Es eliminar lo que no quieres."
          }
        ]
      },
      {
        title: "Más radio significa más logística",
        paragraphs: [
          "Ampliar país o distancia puede descubrir inventario, pero también aumenta transporte, coordinación y exposición a documentación extranjera. Ese coste debe entrar en el filtro, no aparecer cuando ya has decidido comprar.",
          "Abrir doscientas fichas no significa buscar mejor. Un filtro útil reduce el universo hasta que puedes analizar cada candidato con atención suficiente."
        ]
      }
    ]
  },
  "module-5": {
    platform: "AUTO1",
    extraSections: [
      {
        title: "Secuencia completa de análisis",
        visuals: [
          {
            type: "sequence",
            eyebrow: "Orden de lectura",
            title: "Diez pasos antes de decidir",
            items: ["Notas", "Prueba dinámica", "Datos", "Daños", "Fotos", "Cuadro", "Documentación", "Logística", "Equipamiento", "Decisión"]
          }
        ]
      },
      {
        title: "Semáforo de análisis, no recomendación automática",
        paragraphs: [
          "El semáforo sirve para ordenar señales, no para comprar por colores. Una señal verde permite seguir; una ámbar exige comprobación o margen; una roja puede justificar descarte según tu experiencia y estrategia."
        ],
        visuals: [
          {
            type: "riskSignals",
            eyebrow: "Gestión de señales",
            title: "Verde, ámbar y rojo",
            items: [
              { tone: "good", label: "Verde", title: "Seguir analizando", text: "Ficha coherente, documentación clara y daño comprensible." },
              { tone: "warn", label: "Ámbar", title: "Exigir margen", text: "Dato incompleto, señal dudosa o coste que necesita confirmación." },
              { tone: "bad", label: "Rojo", title: "Descartar según estrategia", text: "Incoherencia grave, riesgo fuera de tu experiencia o salida inviable." }
            ],
            note: "La combinación de señales y tu capacidad operativa determina la decisión final."
          }
        ]
      }
    ]
  },
  "module-6": {
    title: "Comprar, pagar, recoger y reclamar en Auto1",
    platform: "AUTO1",
    extraSections: [
      {
        title: "La operación completa en una sola línea temporal",
        visuals: [
          {
            type: "timeline",
            eyebrow: "Operativa Auto1",
            title: "De la compra a la revisión en campa",
            steps: [
              { title: "Compra o adjudicación", text: "Guarda ficha y confirma la operación." },
              { title: "Pago", text: "Revisa datos, plazo y justificante." },
              { title: "Confirmación", text: "Espera autorización antes de organizar la salida definitiva." },
              { title: "Cita y PIN", text: "Comprueba campa, fecha e instrucciones." },
              { title: "Recogida", text: "Transportista, seguro o placas según el caso." },
              { title: "Revisión", text: "Documenta cualquier diferencia antes de salir." },
              { title: "Reclamación", text: "Utiliza el canal y plazo vigente cuando corresponda." }
            ],
            note: "Comprueba siempre las condiciones vigentes de Auto1 antes de operar."
          }
        ]
      },
      {
        title: "Antes de salir de la campa",
        bullets: [
          "Comparar estado y equipamiento con la ficha guardada.",
          "Revisar cuadro, daños visibles, cristales, ruedas y elementos sueltos.",
          "Hacer fotos y avisar antes de mover el vehículo si algo no coincide.",
          "Confirmar que la salida elegida es segura y está autorizada.",
          "Guardar documentos, contacto y evidencias de la recogida."
        ],
        alert: {
          tone: "alert",
          label: "Punto de control",
          text: "Una vez fuera de la campa puede ser más difícil demostrar cuándo observaste una discrepancia. Revisa y documenta antes de salir."
        }
      }
    ]
  },
  "module-7": {
    platform: "COPART",
    extraSections: [
      {
        title: "Copart y Auto1 exigen márgenes distintos",
        paragraphs: [
          "En Copart el daño y la movilidad pueden tener más peso en la operación. Una unidad visualmente atractiva puede exigir transporte, piezas, airbags o documentación que cambien por completo el coste.",
          "Para empezar conviene ser selectivo, priorizar fichas legibles y exigir más margen cuando exista más incertidumbre."
        ],
        visuals: [
          {
            type: "comparison",
            eyebrow: "Contexto de plataforma",
            title: "Auto1 vs Copart Alemania",
            columns: [
              {
                title: "AUTO1",
                items: [
                  { label: "Foco", value: "Inventario profesional y estado de ficha" },
                  { label: "Riesgo", value: "Notas, prueba, daños y documentación" },
                  { label: "Operativa", value: "Compra, pago, cita y recogida" }
                ]
              },
              {
                title: "COPART",
                items: [
                  { label: "Foco", value: "Daño, movilidad, documentos y logística" },
                  { label: "Riesgo", value: "Más incertidumbre en unidades complejas" },
                  { label: "Operativa", value: "Puja, reserva, pago y salida" }
                ]
              }
            ],
            note: "Son tendencias del contenido del curso, no una garantía sobre cada lote."
          }
        ]
      }
    ]
  },
  "module-8": {
    platform: "COPART",
    extraSections: [
      {
        title: "Cinco capas que deben encajar",
        visuals: [
          {
            type: "sequence",
            eyebrow: "Lectura de ficha",
            title: "Documentación → movilidad → daños → riesgo → logística",
            items: ["Documentación", "Movilidad", "Daños", "Riesgo", "Logística"],
            note: "Una capa no compensa automáticamente un problema grave en otra."
          }
        ]
      },
      {
        title: "Señales que cambian el análisis",
        paragraphs: [
          "R, S o ausencia de indicador orientan sobre movilidad, pero no sustituyen las fotos ni la revisión del daño. ZB1, ZB2, COC e International Documents deben leerse junto al país y al objetivo de matriculación.",
          "Primary damage, secondary damage y additional information forman una historia. Si airbags, óxido, piezas faltantes o testigos no encajan con esa historia, aumenta la incertidumbre y el margen necesario."
        ],
        alert: {
          tone: "alert",
          label: "Riesgo",
          text: "No uses una letra o una etiqueta como veredicto. La decisión depende de toda la ficha, tu experiencia y la salida prevista."
        }
      }
    ]
  },
  "module-9": {
    platform: "COPART",
    extraSections: [
      {
        title: "Del máximo al siguiente paso",
        visuals: [
          {
            type: "timeline",
            eyebrow: "Operativa Copart",
            title: "Puja, reserva, pago y recogida",
            steps: [
              { title: "Preparar máximo", text: "Coste, reparación, comisión y transporte incluidos." },
              { title: "Pujar", text: "Seguir la línea y respetar el límite." },
              { title: "Resolver reserva", text: "Esperar aceptación o negociación cuando corresponda." },
              { title: "Pagar", text: "Confirmar datos y plazo vigente." },
              { title: "Organizar salida", text: "Autorización, transporte o placas según estado." },
              { title: "Recibir documentación", text: "Comprobar el circuito aplicable al lote." }
            ],
            note: "Los plazos y condiciones pueden cambiar. Revisa siempre la información oficial actual."
          }
        ]
      }
    ]
  },
  "module-10": {
    title: "Gestión de riesgo: coches que evitar en Copart",
    platform: "COPART",
    extraSections: [
      {
        title: "Una guía de riesgo, no una prohibición universal",
        paragraphs: [
          "Una categoría difícil puede ser viable para un profesional con experiencia, piezas, taller y salida concreta. Para alguien que empieza, la misma unidad exige más margen y puede ocultar demasiadas variables a la vez.",
          "El objetivo es reconocer cuándo el riesgo supera tu capacidad actual, no afirmar que ningún especialista debería comprar ese tipo de coche."
        ],
        visuals: [
          {
            type: "matrix",
            eyebrow: "Gestión de riesgo",
            title: "Qué exige cada categoría",
            rows: [
              {
                title: "S o sin indicador",
                cells: [
                  { label: "Por qué preocupa", text: "Movilidad e información menos claras." },
                  { label: "Qué exige", text: "Diagnóstico, transporte y margen adicional." },
                  { label: "Cuándo cambia", text: "Con experiencia y una causa bien entendida." }
                ]
              },
              {
                title: "Documentación compleja",
                cells: [
                  { label: "Por qué preocupa", text: "Puede dificultar homologación, matriculación o venta." },
                  { label: "Qué exige", text: "Comprobación documental especializada." },
                  { label: "Cuándo cambia", text: "Con salida definida y viabilidad confirmada." }
                ]
              },
              {
                title: "Airbag u óxido",
                cells: [
                  { label: "Por qué preocupa", text: "Costes en cascada y posible impacto estructural." },
                  { label: "Qué exige", text: "Inspección, presupuesto y capacidad técnica." },
                  { label: "Cuándo cambia", text: "Si el alcance está medido y el margen lo soporta." }
                ]
              },
              {
                title: "No apto para circular",
                cells: [
                  { label: "Por qué preocupa", text: "La logística deja de ser opcional." },
                  { label: "Qué exige", text: "Transporte confirmado antes de pujar." },
                  { label: "Cuándo cambia", text: "Con ruta, coste y descarga resueltos." }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "module-11": {
    platform: "COPART",
    extraSections: [
      {
        title: "Decide la salida antes de decidir la compra",
        paragraphs: [
          "Distancia, movilidad, documentación y descarga deben entrar en el máximo. Pedir presupuestos orientativos antes de pujar puede revelar que una unidad barata está demasiado lejos o necesita medios especiales.",
          "Clicktrans puede ayudar a comparar ofertas; un transportista directo puede darte más control si ya conoces la ruta. Ninguna opción elimina la necesidad de confirmar autorización, fecha y condiciones de carga."
        ],
        visuals: [
          {
            type: "decisionTree",
            eyebrow: "Plan logístico",
            title: "¿Cómo sale el vehículo?",
            nodes: [
              {
                question: "¿El coche puede moverse con seguridad?",
                options: [
                  { label: "Sí", text: "Revisa documentación, seguro y autorización.", tone: "good" },
                  { label: "No", text: "Calcula grúa o transporte desde campa.", tone: "bad" }
                ]
              },
              {
                question: "¿La documentación permite la salida prevista?",
                options: [
                  { label: "Sí", text: "Compara medios propios y transporte.", tone: "good" },
                  { label: "Revisar", text: "No cierres la puja sin confirmación.", tone: "warn" }
                ]
              },
              {
                question: "¿El coste logístico cabe en tu máximo?",
                options: [
                  { label: "Sí", text: "Integra el plan en la operación.", tone: "good" },
                  { label: "No", text: "Reduce puja o descarta.", tone: "bad" }
                ]
              }
            ],
            note: "Las placas no convierten un vehículo inseguro en apto para circular."
          }
        ]
      }
    ]
  },
  "module-12": {
    title: "Checklist final SubastasPro",
    replaceSections: finalChecklistGroups.map((group) => ({
      title: group.title,
      paragraphs: [
        `Utiliza este bloque cada vez que la operación llegue a ${group.title.toLowerCase()}. Marca solo lo que hayas comprobado; una casilla no sustituye una verificación.`
      ],
      bullets: group.items
    }))
  }
};

function enhanceExistingModule(module) {
  const enhancement = existingCourseEnhancements[module.id];

  if (!enhancement) return module;

  const { extraSections = [], replaceSections, ...overrides } = enhancement;

  return {
    ...module,
    ...overrides,
    sections: replaceSections || [...module.sections, ...extraSections]
  };
}

const enhancedOriginalModules = originalCourseModules.map(enhanceExistingModule);
const originalById = new Map(enhancedOriginalModules.map((module) => [module.id, module]));

export const courseModules = [
  originalById.get("module-1"),
  originalById.get("module-2"),
  ...newFundamentalsModules,
  originalById.get("module-3"),
  originalById.get("module-4"),
  originalById.get("module-5"),
  originalById.get("module-6"),
  originalById.get("module-7"),
  originalById.get("module-8"),
  originalById.get("module-9"),
  originalById.get("module-10"),
  originalById.get("module-11"),
  originalById.get("module-12")
].filter(Boolean);

export const courseMethodSteps = [
  "Buscar",
  "Filtrar",
  "Analizar",
  "Calcular",
  "Fijar máximo",
  "Pujar / comprar",
  "Pagar",
  "Recoger",
  "Revisar"
];

export const courseSections = [
  {
    id: "fundamentos",
    number: "01",
    code: "BASE",
    title: "Fundamentos",
    description:
      "Entiende el mercado profesional, prepara el coste completo y entra en una puja con reglas y límites claros.",
    moduleIds: ["module-1", "module-2", "module-13", "module-14", "module-15", "module-16"]
  },
  {
    id: "auto1",
    number: "02",
    code: "A1",
    title: "AUTO1",
    description:
      "Busca, filtra, analiza y completa la operativa de una unidad desde el inventario hasta la revisión en campa.",
    moduleIds: ["module-3", "module-4", "module-5", "module-6"],
    independenceNote:
      "SubastasPro es una formación independiente y no está afiliada, patrocinada ni gestionada por AUTO1."
  },
  {
    id: "copart",
    number: "03",
    code: "DE",
    title: "Copart Alemania",
    description:
      "Lee daños y documentación, prepara la puja y resuelve pago, riesgo y logística antes de retirar el vehículo.",
    moduleIds: ["module-7", "module-8", "module-9", "module-10", "module-11"],
    independenceNote:
      "SubastasPro es una formación independiente y no está afiliada, patrocinada ni gestionada por Copart."
  }
];

export const finalCourseModuleId = "module-12";

export const caseStudies = [
  {
    id: "case-auto1-interesante",
    title: "Auto1: ficha interesante",
    platform: "Auto1",
    riskTone: "low",
    riskLabel: "Riesgo bajo",
    decisionLabel: "Decisión: comprar",
    summary:
      "Placeholder para un coche con ficha ordenada, prueba dinámica coherente y logística asumible.",
    imageSlots: [
      "Imagen principal",
      "Cuadro y testigos",
      "Daños declarados",
      "Documentación"
    ],
    explanation:
      "Aquí irá el análisis de Iván sobre por qué esta ficha tendría sentido: orden de lectura, puntos fuertes, riesgos asumibles y rango de compra."
  },
  {
    id: "case-auto1-riesgo",
    title: "Auto1: ficha con señales de riesgo",
    platform: "Auto1",
    riskTone: "medium",
    riskLabel: "Riesgo medio",
    decisionLabel: "Decisión: vigilar",
    summary:
      "Placeholder para un caso que obliga a frenar: notas dudosas, fotos justas o documentación que pide más revisión.",
    imageSlots: [
      "Notas de la ficha",
      "Prueba dinámica",
      "Fotos de daños",
      "Última matriculación"
    ],
    explanation:
      "Aquí irá la explicación de Iván sobre qué puntos le hacen bajar el ritmo, qué datos faltan y qué tendría que confirmar antes de comprar."
  },
  {
    id: "case-copart-evitar",
    title: "Copart: coche barato que evitaría",
    platform: "Copart Alemania",
    riskTone: "critical",
    riskLabel: "Evitar",
    decisionLabel: "Decisión: descartar",
    summary:
      "Placeholder para un lote barato a simple vista, pero con combinación de daños, papeles y salida que no compensa.",
    imageSlots: [
      "Vista general",
      "últimas fotos clave",
      "Cuadro",
      "Documentos"
    ],
    explanation:
      "Aquí irá el análisis de Iván explicando por qué el precio no basta y qué señales convierten este lote en una mala compra para el MVP."
  }
];

export function getModulePath(slug) {
  return `${PRIVATE_ROUTE}/${slug}`;
}

export function getModuleBySlug(slug) {
  return courseModules.find((module) => module.slug === slug);
}

export function getModuleById(id) {
  return courseModules.find((module) => module.id === id);
}

export function getModuleIndexBySlug(slug) {
  return courseModules.findIndex((module) => module.slug === slug);
}
