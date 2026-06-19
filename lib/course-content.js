export const heroChips = [
  "Auto1 incluido",
  "Copart Alemania incluido",
  "BCA próximamente",
  "Vídeos por módulo",
  "PDF descargable"
];

export const problemCards = [
  "Fichas que no sabes interpretar",
  "Daños que parecen pequeños pero pueden ser caros",
  "Documentación que puede complicar la operación",
  "Pujas donde te calientas de 100 en 100",
  "Recogida, placas y transporte mal planificados"
];

export const learningCards = [
  "Requisitos para entrar en subastas",
  "Diferencia entre compra clásica y subasta",
  "Cómo funcionan las fichas",
  "Cómo usar filtros en Auto1",
  "Cómo revisar prueba dinámica, fotos, daños y documentación",
  "Cómo funciona la recogida en Auto1",
  "Cómo funciona Copart Alemania",
  "Qué significan R, S y sin letra en Copart",
  "Cómo preparar una puja sin calentarte",
  "Qué coches evitar",
  "Transporte, placas rojas y Clicktrans"
];

export const platforms = [
  {
    title: "Auto1",
    status: "Incluido",
    description:
      "Subasta 24h, Comprar Ahora, favoritos, notas, bajadas, fichas, logística y recogida."
  },
  {
    title: "Copart Alemania",
    status: "Incluido",
    description:
      "Vehículos dañados, R/S/sin letra, ZB1/ZB2, COC, daños, puja en vivo, reserva, pago y recogida."
  },
  {
    title: "BCA",
    status: "Próximamente",
    description: "Próximamente como actualización incluida."
  }
];

export const toolCards = [
  {
    icon: "A1",
    title: "Checklist Auto1",
    description: "Repasa la ficha antes de pujar y guarda el estado localmente."
  },
  {
    icon: "R",
    title: "Checklist recogida Auto1",
    description: "No olvides pago, PIN, seguro temporal, campa ni transporte."
  },
  {
    icon: "DE",
    title: "Detector de riesgo Copart",
    description:
      "Combina indicadores clave y devuelve una lectura práctica del lote."
  },
  {
    icon: "EUR",
    title: "Calculadora básica de coste de compra",
    description: "Recuerda que el precio de puja no es el coste real."
  },
  {
    icon: "MAX",
    title: "Óptimo vs máximo",
    description: "Define tus límites antes de entrar en una puja en vivo."
  }
];

export const audienceYes = [
  "Autónomos o empresas de compraventa",
  "Personas que quieren empezar a comprar en subastas",
  "Profesionales que quieren entender mejor Auto1 y Copart",
  "Gente que no quiere entrar a ciegas"
];

export const audienceNo = [
  "Quién busca dinero fácil",
  "Quién quiere comprar sin analizar",
  "Quién cree que una subasta garantiza chollos",
  "Quién no acepta que en coches usados siempre hay riesgo"
];

export const faqs = [
  {
    question: "Necesito ser autónomo o empresa?",
    answer:
      "Para muchas subastas profesionales sí. Normalmente piden IAE, DNI/CIF y datos de autónomo o empresa."
  },
  {
    question: "Hay login?",
    answer:
      "En esta primera versión el acceso es mediante enlace y clave privada, sin login complejo."
  },
  {
    question: "El curso promete ganar dinero?",
    answer:
      "No. Enseña a analizar mejor y evitar errores, pero cada compra tiene riesgo."
  },
  {
    question: "Se actualizara?",
    answer:
      "Sí. Los alumnos fundadores mantienen acceso a futuras mejoras."
  },
  {
    question: "Incluye PDF?",
    answer:
      "Sí. Incluye checklist descargable y una versión imprimible para guardar como PDF."
  },
  {
    question: "BCA está incluido?",
    answer:
      "BCA aparecerá como actualización próximamente. La primera edición se centra en Auto1 y Copart Alemania."
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
  "Dia de recogida seleccionado",
  "Regla 15:00 comprobada",
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

export const courseModules = [
  {
    id: "module-1",
    slug: "requisitos-subastas",
    title: "Requisitos para entrar en subastas",
    duration: "8 min",
    summary:
      "Qué suelen pedir las plataformas profesionales antes de dejarte comprar y por qué lo hacen.",
    learning: [
      "Entender que documentación suelen pedir Auto1, Copart y otras plataformas profesionales.",
      "Saber que es el IAE y por que suele ser una pieza clave en el alta.",
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
        title: "Autónomo y empresa: que suele cambiar",
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
      "Entender el papel de los vicios ocultos y de las reclamaciónes."
    ],
    bullets: [
      "En compra clásica puedes ver, probar, negociar y conectar diagnosis.",
      "En subasta dependes de ficha, fotos, documentación y prueba dinámica.",
      "Las fichas las hacen humanos: unas son muy útiles y otras muy pobres."
    ],
    quote:
      "En subasta no compras información perfecta. Compras información suficiente para decidir si el riesgo tiene sentido.",
    miniChecklist: [
      "Asumir que no veras el coche antes de pagar.",
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
        title: "Vicios ocultos y reclamaciónes",
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
      "Cómo funciona Auto1 en la práctica, que papel juega la subasta de 24 horas y donde suelen aparecer oportunidades reales.",
    learning: [
      "Entender Auto1 como marketplace profesional y no como subasta tradicional pura.",
      "Saber como leer la evolucion de precios entre Subasta 24h y Comprar Ahora.",
      "Crear una rutina util con favoritos, notas y seguimiento."
    ],
    bullets: [
      "Auto1 funciona muchas veces como falsa subasta o marketplace profesional.",
      "El precio visible suele acercarse bastante al precio real de compra, más comisión.",
      "Seguir coches durante días suele dar más ventaja que mirar muchisimos en una sola tarde."
    ],
    quote:
      "En Auto1 muchas oportunidades no aparecen por buscar más, sino por seguir mejor.",
    miniChecklist: [
      "Guardar favoritos en vez de confiar en la memoria.",
      "Apuntar precios para ver bajadas reales.",
      "Diferenciar Subasta 24h de Comprar Ahora.",
      "No asumir que más tiempo publicado significa siempre mal coche."
    ],
    // Para activar un vídeo:
    // 1. Sube el vídeo a YouTube como no listado.
    // 2. Copia el ID del vídeo.
    // 3. Pégalo en youtubeId.
    // 4. Cambia status a "ready".
    video: {
      status: "coming-soon",
      title: "Auto1 desde dentro: precio visible, Subasta 24h y Comprar Ahora",
      description:
        "Te explico este módulo con pantalla real, ejemplos y mi forma de analizarlo.",
      duration: "12 min",
      youtubeId: ""
    },
    sections: [
      {
        title: "Auto1 no se vive como una subasta clásica",
        paragraphs: [
          "Auto1 se mueve a menudo como una falsa subasta o un marketplace profesional con dinámicas de precio bastante concretas. No es raro que el precio que ves se parezca bastante al precio al que podrías llevartelo, siempre sumando la comisión y los extras de la operación.",
          "Eso cambia el enfoque. En vez de entrar a cazar un milagro en un solo minuto, conviene tratar la plataforma como un flujo continuo de oportunidades que se estudian y se siguen."
        ],
        bullets: [
          "Precio visible cercano al cierre real en muchos casos.",
          "Comisión variable según país y operativa.",
          "Menos teatralidad y más seguimiento."
        ]
      },
      {
        title: "Subasta 24h y Comprar Ahora",
        paragraphs: [
          "La Subasta 24h suele durar eso mismo: un ciclo corto donde el coche se expone, recibe o no interés y puede cambiar de precio. Si nadie puja, muchas veces baja en días posteriores. Algunos coches recien publicados necesitan varios intentos antes de colocarse.",
          "Comprar Ahora es otra cosa. El precio azul te permite cerrar sin esperar, pero normalmente viene algo más alto que el equivalente en Subasta 24h. Aun así, puede interesar si el lote encaja muy bien o si el margen sigue siendo claro."
        ],
        bullets: [
          "Subasta 24h: exposicion, testeo del interés del mercado y posibles bajadas.",
          "Comprar Ahora: cierre directo, pero normalmente algo más caro.",
          "El mismo coche puede alternar entre ambos formatos."
        ],
        alert: {
          tone: "alert",
          label: "Efecto bola de nieve",
          text: "Si un coche pasa tiempo sin venderse, muchos compradores lo descartan por inercia. A veces ese rechazo es razonable y a veces solo es contagio."
        }
      },
      {
        title: "La estrategia que más ayuda: favoritos y notas",
        paragraphs: [
          "Una de las rutinas más útiles en Auto1 es guardar coches que te interesan y llevar notas simples: precio visto, fecha, comentarios o cosas a revisar después. Esa disciplina vale más que mirar cientos de anuncios deprisa.",
          "Cuando observas varios días seguidos, empiezas a entender si un vehículo baja, si se estanca o si probablemente ya está cerca de su mínimo comercial."
        ],
        bullets: [
          "Guardar favoritos.",
          "Apuntar precio y fecha.",
          "Comparar la bajada con el estado del lote.",
          "Volver a revisar la ficha cuando el precio cambie."
        ]
      },
      {
        title: "Cuando un coche lleva tiempo y no baja",
        paragraphs: [
          "Si un vehículo lleva tiempo publicado y no baja más, no siempre significa que este sobrevalorado. A veces simplemente ya está cerca del mínimo al que la plataforma o el vendedor quieren cerrar.",
          "Eso no obliga a comprarlo, pero sí te ayuda a no esperar eternamente una bajada que quizás no llegue. En esos casos la decisión correcta es comparar el lote con tu coste real aproximado y con alternativas similares."
        ],
        example: {
          title: "Ejemplo práctico",
          text: "Dos Audi A4 similares pueden parecer iguales a simple vista. El que gana valor no es el que tiene menor precio visto hoy, sino el que mejor combina estado, logística, documentación y probabilidad de cierre."
        }
      }
    ]
  },
  {
    id: "module-4",
    slug: "filtros-auto1",
    title: "Filtros en Auto1",
    duration: "9 min",
    summary:
      "Cómo usar filtros para ahorrar tiempo, reducir ruido y centrarte solo en coches que de verdad encajan con tu estrategia.",
    learning: [
      "Filtrar por ubicación, logística y país sin perder tiempo.",
      "Separar filtros que dependen de estrategia de los que son solo comodos.",
      "Evitar revisar coches que nunca comprarias."
    ],
    bullets: [
      "Los filtros no son un adorno: te ahorran horas de ruido.",
      "Ubicacion, país y logística cambian mucho la operación real.",
      "Marcas, modelo y presupuesto deben responder a tu estrategia, no al capricho del día."
    ],
    quote:
      "En subastas no gana quien mira más coches. Gana quien mira mejor los coches correctos.",
    miniChecklist: [
      "Definir radio o país antes de empezar a mirar.",
      "Eliminar marcas y modelos que no compras.",
      "Ajustar año, kilometros y precio a tu estrategia.",
      "Confirmar condiciónes especiales si trabajas con países concretos."
    ],
    video: {
      status: "coming-soon",
      title: "Cómo filtro coches en Auto1 para no perder tiempo",
      description:
        "Te explico este módulo con pantalla real, ejemplos y mi forma de analizarlo.",
      duration: "10 min",
      youtubeId: ""
    },
    sections: [
      {
        title: "Filtrar es una herramienta de enfoque",
        paragraphs: [
          "En Auto1 los filtros no son solo una forma de ordenar la pantalla. Son una manera de evitar que el catálogo te arrastre a revisar coches que nunca deberían consumir tu tiempo.",
          "Cuánto más claro tengas tu tipo de coche, tu radio operativo y tu presupuesto real, mejor funcionaran los filtros para protegerte del ruido."
        ]
      },
      {
        title: "Ubicacion, radio y logística",
        paragraphs: [
          "La ubicación importa porque cada kilometro y cada frontera mueven coste, recogida y tiempos. Si compras en España, una campa cercana simplifica mucho. Si trabajas en extranjero, el filtro geográfico te ayuda a comparar rutas y opciónes de transporte.",
          "No es solo una cuestion de comodidad. Muchas veces un coche más barato a cientos de kilometros termina siendo peor operación que uno algo más caro pero muy fácil de mover."
        ],
        bullets: [
          "Vehículos cercanos para operaciones rápidas.",
          "Zonas concretas si ya tienes rutas o transportistas.",
          "Separar España de extranjero para leer mejor la logística."
        ]
      },
      {
        title: "Marcas, modelos y estrategia",
        paragraphs: [
          "No tiene sentido abrirte a todo el mercado si ya sabes que ciertas marcas o modelos no encajan con tu público, tu margen o tu capacidad de reparación. Filtrar bien reduce el cansancio mental y mejora la calidad del analisis.",
          "A veces una gran mejora no viene de buscar más, sino de quitar ruido: sacar de pantalla lo que no compras para dedicar energía a los lotes que si podrían cuadrar."
        ],
        bullets: [
          "Quitar marcas que no interesan según tu estrategia.",
          "Priorizar segmentos donde conoces mejor daños, salida y margen.",
          "No mezclar coches capricho con compras de operativa real."
        ],
        example: {
          title: "Ejemplo práctico",
          text: "Si tu operativa gira en torno a Audi, Mercedes, Volkswagen o Porsche, no ganas nada revisando compactos que nunca venderias o furgonetas que no sabes homologar."
        }
      },
      {
        title: "Año, kilometros, país y propietarios",
        paragraphs: [
          "Año, kilometros y precio no tienen misterio, pero si consecuencias. Deben responder a presupuesto, tipo de cliente y riesgo asumible. Lo mismo pasa con el número de propietarios: uno o dos pueden ser una buena senal, aunque nunca garantizan estado.",
          "Con países concretos hay que ser prudente. Por ejemplo, si trabajas con Suecia u otros mercados donde puedan cambiar condiciónes de documentación o CMR, lo sensato es confirmarlo con gestor antes de pujar."
        ],
        bullets: [
          "Uno o dos propietarios puede ser interesante, no definitivo.",
          "Vehículo comercial muy util si buscas furgonetas.",
          "Combustible, cambio y carrocería dependen del objetivo final."
        ]
      }
    ]
  },
  {
    id: "module-5",
    slug: "ficha-auto1",
    title: "Cómo analizar una ficha de Auto1",
    duration: "18 min",
    summary:
      "El módulo más práctico para aprender a leer una ficha de Auto1 en el orden correcto y sin saltarte lo importante.",
    learning: [
      "Seguir un orden estáble de lectura para no dejar huecos.",
      "Distinguir problemas menores de señales realmente delicadas.",
      "Cruzar prueba dinámica, fotos, documentación y logística antes de pujar."
    ],
    bullets: [
      "Empieza por notas, prueba dinámica y datos técnicos.",
      "Revisa siempre cuadro, fotos generales y fotos del apartado daños.",
      "Documentación, país de origen y logística pueden cambiar por completo la operación."
    ],
    quote:
      "Muchas veces el problema estaba en la ficha, pero había que fijarse mejor.",
    miniChecklist: [
      "Seguir siempre el mismo orden de analisis.",
      "No tomar una decisión solo con fotos principales.",
      "Cruzar cuadro, daños, documentación y logística.",
      "Cerrar la puja solo cuando el coste real siga teniendo sentido."
    ],
    video: {
      status: "coming-soon",
      title: "Mi orden real para revisar una ficha de Auto1",
      description:
        "Te explico este módulo con pantalla real, ejemplos y mi forma de analizarlo.",
      duration: "18 min",
      youtubeId: ""
    },
    sections: [
      {
        title: "1. Otras notas o comentarios",
        paragraphs: [
          "Si una ficha tiene notas o comentarios, empieza por ahí. A veces es una tonteria, pero otras veces es justo la frase que explica por qué ese coche sigue sin venderse o por que hay que mirarlo con más calma.",
          "La lógica es sencilla: si alguien sintio la necesidad de dejar una nota, probablemente había algo que merecia atención especial."
        ],
        bullets: [
          "Leerlo antes de entrar a fotos o emociónarte con el precio.",
          "Tomarlo como pista, no como sentencia final."
        ]
      },
      {
        title: "2. Prueba dinámica",
        paragraphs: [
          "La prueba dinámica te da una lectura mecánica resumida: motor, caja, frenos, ruidos, testigos, marchas y comportamiento general. Aquí aprendes a distinguir entre incidencias soportables y banderas rojas.",
          "No todos los problemas pesan igual. Un aire acondiciónado que no enfria, un GPS que falla o un rodamiento ruidoso no tienen el mismo impacto que un testigo motor, un fallo de caja o humo anormal."
        ],
        bullets: [
          "Problemas menores posibles: aire acondiciónado, compresor, GPS, asientos calefactables, ruido de ruedas, frenos o chirridos.",
          "Problemas delicados: testigo motor, ABS, airbag, caja, motor, humo, sobrecalentamiento."
        ],
        alert: {
          tone: "alert",
          label: "Siempre revisa",
          text: "La foto del cuadro es obligatoria. A veces la ficha resume poco y el cuadro te cuenta más verdad que la descripción."
        }
      },
      {
        title: "3. Datos técnicos y contexto del coche",
        paragraphs: [
          "Año, kilometros, potencia, combustible, cambio y carrocería te ayudan a ubicar el vehículo en el mercado. Pero no te quedes solo ahí: país de origen y última matriculación importan mucho para documentación, salida comercial y posibles sorpresas.",
          "Estos campos parecen básicos, pero son los que luego explican si el coche encaja de verdad con tu cliente, con tu margen y con la operativa de matriculación."
        ]
      },
      {
        title: "4. Daños previos y accidente",
        paragraphs: [
          "La palabra accidente no debe asustarte por si sola. Puede esconder desde un golpe leve hasta algo estructural. Lo que importa no es el susto del termino, sino el cruce entre el texto y las imagenes.",
          "Por eso no conviene sacar conclusiones solo con la etiqueta. Hay que bajar a ver exactamente donde está el daño y como se presenta."
        ]
      },
      {
        title: "5 y 6. Fotos principales y fotos del apartado daños",
        paragraphs: [
          "Haz primero un vistazo rápido general y, si el coche te sigue interesando, una revisión profunda. Mira interior, asientos, volante, botones, aire acondiciónado, lunas, chinazos, descuadres y óxido.",
          "Auto1 suele repartir información visual en dos zonas: fotos principales y fotos del apartado daños. Revisar solo una de las dos es una de las maneras más fáciles de comprar mal."
        ],
        bullets: [
          "Revisar siempre cuadro y testigos.",
          "Mirar interior y desgaste real del uso.",
          "Buscar lunas tocadas, óxido, tuning o modificaciones.",
          "Comparar fotos generales con las de daños."
        ],
        example: {
          title: "Ejemplo práctico",
          text: "Un coche puede verse limpio en las fotos principales y esconder en el apartado daños justo la aleta, el faro o el descuadre que cambia la reparación."
        }
      },
      {
        title: "7. Documentación",
        paragraphs: [
          "La documentación es donde muchas operaciones se complican sin avisar. Hay que revisar documentos extranjeros, homologación europea o letra K si aplica, y prestar especial atención a furgonetas antiguas, coches de Holanda o vehículos modificados.",
          "Si el coche tiene documentación española, mira ITV o kilometros si aparecen. Si viene de fuera, cruza país de origen, última matriculación y coherencia documental."
        ],
        bullets: [
          "Revisar letra K o COC si aplica.",
          "Especial cuidado con furgonetas antiguas.",
          "Mirar modificaciones y tuning que afecten matriculación."
        ]
      },
      {
        title: "8 y 9. Logística, equipamiento y bastidor",
        paragraphs: [
          "Antes de pujar, mira campa, opciónes de transporte, recogida gratis si existe y precios aproximados hasta tu zona. Un coche medio bueno con logística absurda puede perder sentido.",
          "También conviene revisar equipamiento y datos por bastidor cuando esten disponibles. No porque definan toda la compra, sino porque ayudan a evitar confusiones entre versiones o equipamientos mal asumidos."
        ],
        callout: {
          tone: "note",
          label: "Cierre mental correcto",
          text: "La ficha se analiza entera o no se analiza. Si te saltas una capa, el hueco casi siempre aparece después de pagar."
        }
      }
    ]
  },
  {
    id: "module-6",
    slug: "recogida-auto1",
    title: "Recogida en Auto1",
    duration: "14 min",
    summary:
      "Todo lo que ocurre después de ganar: pago, regla 15:00, PIN, campa, reclamaciónes y opciónes de salida.",
    learning: [
      "Entender el flujo desde adjudicación hasta recogida real.",
      "Evitar retrasos por no controlar pago, cita o campa.",
      "Saber cuando tocar transporte, placas o seguro temporal."
    ],
    bullets: [
      "Tras ganar, los datos de pago suelen llegar en unas horas.",
      "La regla 15:00 cambia mucho la planificacion de recogida.",
      "Comprar bien no termina al ganar la puja: termina cuando el coche está en camino."
    ],
    quote:
      "Comprar bien no termina al ganar la puja. Termina cuando el coche está recogido, revisado y en camino.",
    miniChecklist: [
      "Enviar justificante al gestor cuánto antes.",
      "Comprobar regla 15:00 antes de elegir día.",
      "Guardar PIN e instrucciones de campa.",
      "Definir si sales con seguro temporal, placas o transporte."
    ],
    video: {
      status: "coming-soon",
      title: "Pago, PIN, regla 15:00 y recogida en campa",
      description:
        "Te explico este módulo con pantalla real, ejemplos y mi forma de analizarlo.",
      duration: "10 min",
      youtubeId: ""
    },
    sections: [
      {
        title: "Del pago a la cita",
        paragraphs: [
          "Después de ganar la puja, la aplicación o el sistema de Auto1 suele dar los datos de pago en unas horas. Si quieres mover el proceso rápido, no esperes a que todo vaya solo: enviar justificante al gestor comercial suele acelerar bastante.",
          "Una vez el pago está encarrilado, llega la parte de elegir recogida. Aquí es donde mucha gente se equivoca por pensar que puede moverse al día siguiente sin mirar horario de corte."
        ]
      },
      {
        title: "La regla 15:00",
        paragraphs: [
          "Para recoger al día siguiente, normalmente hay que seleccionar la recogida antes de las 15:00. Esa regla cambia toda la agenda. Si compras un lunes a las 16:00, muchas veces ya no estás pensando en martes, sino como mínimo en miercoles.",
          "Lo mismo ocurre los viernes. Si compras después de las 15:00, lo habitual es que el escenario real se vaya a martes y no a lunes."
        ],
        bullets: [
          "Lunes 16:00: normalmente mínimo miercoles.",
          "Viernes después de 15:00: normalmente martes."
        ],
        alert: {
          tone: "alert",
          label: "Error caro",
          text: "Reservar viaje o transporte sin mirar esa hora de corte puede hacerte perder tiempo, dinero y coordinación."
        }
      },
      {
        title: "PIN, campa y reclamación",
        paragraphs: [
          "Según la campa, puede llegarte un PIN code o instrucciones concretas por correo. Algunas ubicaciónes incluso piden registro externo o cita adicional, como ocurre a veces en ciertas campas de Belgica.",
          "En España la secuencia suele ser más directa: llegas, das PIN, enseñas DNI, revisas visualmente, arrancas y, si algo importante no coincide con lo anunciado, reclamás antes de salir."
        ],
        bullets: [
          "Ir a oficina o recepcion si hay problema.",
          "Hacer fotos y videos antes de abandonar la campa.",
          "No dejar la reclamación para después."
        ]
      },
      {
        title: "Transporte, seguro temporal y documentación",
        paragraphs: [
          "La salida del coche puede ser con Auto1, con transportista independiente o mediante una solución de circulación temporal si el vehículo y la operación lo permiten. Si entra un tercero, normalmente necesitará PIN y autorizacion.",
          "El seguro temporal puede resolverse con opciónes como Terranea o segurospordía, según el caso. La documentación, por su parte, suele llegar por correo postal y conviene no asumir plazos optimistas."
        ]
      },
      {
        title: "Recogidas en extranjero",
        paragraphs: [
          "Fuera de España entran en juego placas rojas, placas de exportacion y requisitos concretos por país. En Alemania suele ser clave contar con documentación e ITV valida para placas de exportacion.",
          "En Holanda pueden emitir documento de exportacion a nombre del comprador, y en Francia a menudo siguen puestás las matrículas francesas, lo que hace recomendable viajar con toda la documentación recibida y no improvisar."
        ],
        bullets: [
          "Llevar chaleco reflectante siempre en campas extranjeras.",
          "Pensar la salida antes de comprar, no después."
        ]
      }
    ]
  },
  {
    id: "module-7",
    slug: "copart-alemania",
    title: "Copart Alemania",
    duration: "13 min",
    summary:
      "Base operativa para entender que es Copart Alemania, por que puede ser rentable y donde se concentra su riesgo real.",
    learning: [
      "Entender la plataforma como subasta de daño, documentación y logística.",
      "Leer R, S y sin letra con mentalidad operativa.",
      "Saber que datos importan antes de entusiasmarte con el precio."
    ],
    bullets: [
      "Copart Alemania trabaja sobre vehículos dañados y por eso puede tener precios muy por debajo del mercado.",
      "La licencia anual ronda los 200 euros y el acceso particular es más limitado.",
      "Riesgo, documentación y salida del coche pesan tanto como el precio."
    ],
    quote:
      "En Copart no compras solo un coche barato. Compras daño, documentación, logística y riesgo.",
    miniChecklist: [
      "Confirmar tipo de acceso y costes antes de empezar.",
      "Entender bien R, S y sin letra.",
      "Mirar ZB1/ZB2, COC y documents antes de fantasear con el margen.",
      "Separar precio atractivo de operación razonable."
    ],
    video: {
      status: "coming-soon",
      title: "Copart Alemania desde dentro: R, S, documentación y daños",
      description:
        "Te explico este módulo con pantalla real, ejemplos y mi forma de analizarlo.",
      duration: "15 min",
      youtubeId: ""
    },
    sections: [
      {
        title: "Por qué interesa tanto Copart Alemania",
        paragraphs: [
          "Copart Alemania es una de las subastas más interesantes del curso porque concentra volumen, daño y precios que, en muchos casos, se sitúan por debajo del mercado alemán y muy por debajo del mercado español.",
          "Eso no significa dinero fácil. Significa que, si sabes leer el lote, hay más espacio para encontrar operaciones con sentido. Si no sabes leerlo, el mismo descuento se convierte en una trampa."
        ]
      },
      {
        title: "Qué tipo de vehículos aparecen",
        paragraphs: [
          "Aquí conviven daños de carrocería, mecánicos, granizo, normal wear y lotes con documentación internacional o complicada. Por eso Copart exige una mirada más técnica que otras plataformas.",
          "No se trata solo de ver si el golpe asusta. Se trata de medir si daño, papeles y salida del coche siguen cuadrando juntos."
        ],
        bullets: [
          "Carroceria.",
          "Mecánica.",
          "Granizo.",
          "Normal wear.",
          "Documents internacionales o poco limpios."
        ]
      },
      {
        title: "Coste anual y acceso",
        paragraphs: [
          "La licencia de miembro suele rondar los 200 euros anuales. Para muchos perfiles es asumible si realmente vas a operar, pero no deja de ser una barrera que conviene tener presente desde el principio.",
          "El acceso particular es más limitado, aunque puede servir para empezar a mirar y entender dinámicas. Aun así, la plataforma está mucho más pensada para quien quiere comprar con enfoque profesional."
        ]
      },
      {
        title: "Calendario e indicadores clave",
        paragraphs: [
          "Las subastas suelen celebrarse de lunes a viernes, descansando sábados, domingos y festivos. Eso te permite planificar el seguimiento semanal y no vivirlo todo como si fuera una urgencia continúa.",
          "Los indicadores son esenciales: R verde significa que arranca, engrana y se mueve hacia delante y atrás; S azul que arranca y engrana, pero no se confirma movimiento; y sin letra, mucho más riesgo y menos certeza."
        ],
        bullets: [
          "R verde: mejor base operativa.",
          "S azul: atención extra.",
          "Sin letra: riesgo más alto."
        ]
      },
      {
        title: "Datos que valen oro",
        paragraphs: [
          "Odómetro, valor orientativo del mercado alemán, ZB1/ZB2, COC e International Documents son campos que mueven decisiones reales. El valor orientativo puede servirte como referencia, pero no compra el coche por ti ni garantiza salida.",
          "Lo importante es entender que ese lote no se decide solo por precio. Se decide por la combinación entre daño, papeles, logística, posibilidad de circular y coste total de ponerlo en tu operativa."
        ]
      }
    ]
  },
  {
    id: "module-8",
    slug: "ficha-copart",
    title: "Cómo revisar una ficha de Copart",
    duration: "12 min",
    summary:
      "Cómo exprimir una ficha normalmente más corta que la de otras plataformas y sacar verdad de las fotos finales.",
    learning: [
      "Leer fotos, cuadro y avisos como la parte central del analisis.",
      "Entender mejor daño principal, secundario e información adicional.",
      "Detectar cuando granizo o mechanical cambian totalmente la pelicula."
    ],
    bullets: [
      "Copart no suele darte tantas fotos o tanto detalle como otras plataformas.",
      "Las últimás fotos muchas veces enseñan lo que de verdad importa.",
      "Si aparece mechanical, no se puede pasar por alto aunque sea secundario."
    ],
    quote:
      "En Copart las últimás fotos no son relleno. Muchas veces son la verdad del coche.",
    miniChecklist: [
      "Mirar todos los laterales y el interior.",
      "Pararse en la foto del cuadro.",
      "Leer avisos especiales antes de pujar.",
      "Cruzar daño principal, secundario y additional info."
    ],
    video: {
      status: "coming-soon",
      title: "Cómo revisar fotos, daños y avisos importantes en Copart",
      description:
        "Te explico este módulo con pantalla real, ejemplos y mi forma de analizarlo.",
      duration: "15 min",
      youtubeId: ""
    },
    sections: [
      {
        title: "Empieza por las fotos, no por la fantasía",
        paragraphs: [
          "En Copart las fotos pesan muchisimo porque la plataforma no suele regalar tanto detalle como otras. Por eso conviene empezar por una vuelta general: exteriores, interior, cuadro y estado global del coche.",
          "No busques una ficha literaria. Busca pistas visuales que te digan si el lote merece seguir vivo o si hay que pasar pagina pronto."
        ]
      },
      {
        title: "Las últimás fotos suelen contar la verdad",
        paragraphs: [
          "Una de las costumbres más útiles en Copart es mirar siempre las últimás fotos con atención. Muchas veces es ahí donde aparecen los daños importantes, las piezas desplazadas o justo el angulo que cambia toda la operación.",
          "Cada foto suele tener trabajo. No están ahí para rellenar, sino para mostrar una cara del problema."
        ],
        example: {
          title: "Lectura práctica",
          text: "Si el frontal parece razonable al principio pero las últimás fotos enseñan eje, radiador o huecos serios, el lote ya no es el mismo coche que creias."
        }
      },
      {
        title: "Cuadro y avisos especiales",
        paragraphs: [
          "La foto del cuadro es obligatoria porque no siempre escriben los testigos. A eso se suman avisos o señales especiales que pueden aparecer junto a las fotos: granizo, documentos perdidos, documents internacionales, inundado, IVA, airbag saltado o libro de mantenimiento.",
          "No es buena idea pujar sin leer esa capa. Muchas veces el texto pequeño es justo lo que separa una operación interesante de otra que no debería salir de favoritos."
        ]
      },
      {
        title: "Daño principal, daño secundario e información adicional",
        paragraphs: [
          "El daño principal te orienta, pero no decide solo. El secundario puede ser el que de verdad encarece, y si aparece daño mecánico aunque sea en segundo plano, hay que ir de cabeza a la información adicional.",
          "Ese bloque suele dar contexto de motor, caja o mecánica general. En una plataforma como Copart, una palabra bien leida ahí evita muchos errores caros."
        ],
        bullets: [
          "Daño principal.",
          "Daño secundario.",
          "Información adicional sobre mecánica o funcionamiento."
        ]
      },
      {
        title: "Granizo: por qué a veces interesa",
        paragraphs: [
          "El granizo puede ser de los daños más interesantes porque a menudo baja el precio y no toca la mecánica. Pero no se puede meter todo en el mismo saco: hay grados y casos.",
          "Lo bueno del granizo es que obliga menos a imaginar averias ocultas mecánicas. Lo delicado es medir si el daño estetico, el contexto del coche y el precio siguen cuadrando."
        ]
      }
    ]
  },
  {
    id: "module-9",
    slug: "pujar-copart",
    title: "Pujar en Copart",
    duration: "15 min",
    summary:
      "Cómo preparar la puja en vivo, controlar la emoción y usar bien tu precio óptimo y tu máximo.",
    learning: [
      "Entender el flujo de la subasta en vivo y sus líneas.",
      "Usar favoritos e incrementos con cabeza.",
      "Separar precio óptimo, máximo y reserva del vendedor."
    ],
    bullets: [
      "Se recomienda esperar a la subasta en vivo en vez de improvisar pujas tempranas.",
      "Los incrementos pequeños parecen inocentes, pero son los que se comen el margen.",
      "óptimo y máximo no son la misma cifra ni sirven para lo mismo."
    ],
    quote:
      "La subasta no te arruina de golpe. Te arruina de 100 en 100.",
    miniChecklist: [
      "Calcular comisión antes de pujar.",
      "Definir precio óptimo y precio máximo.",
      "Esperar a la subasta en vivo salvo caso clarisimo.",
      "Tener plan para reserva, pago y recogida."
    ],
    video: {
      status: "coming-soon",
      title: "Cómo preparar una puja en Copart sin calentarte",
      description:
        "Te explico este módulo con pantalla real, ejemplos y mi forma de analizarlo.",
      duration: "12 min",
      youtubeId: ""
    },
    sections: [
      {
        title: "Por qué suele ser mejor esperar al vivo",
        paragraphs: [
          "Se puede pujar antes, pero la recomendacion general del curso es llegar con deberes hechos y esperar al vivo. Es ahí donde ves de verdad cómo se mueve el lote y donde te proteges mejor frente a impulsos basados en una cifra suelta.",
          "En Copart los vehículos salen uno a uno y el ritmo cambia mucho cuando ves la secuencia real, sobre todo si tienes varios favoritos preparados."
        ]
      },
      {
        title: "Líneas A y B, favoritos y Comprar Ahora",
        paragraphs: [
          "La existencia de líneas A y B obliga a estar ordenado. Marcar favoritos ayuda mucho porque te aparecen resaltados y los localizas mejor en la lista de proximos.",
          "Comprar Ahora solo suele tener sentido cuando el caso es muy claro. En el resto, la subasta en vivo te da contexto y te permite no pagar demasiado por ansiedad."
        ]
      },
      {
        title: "Incrementos y emoción",
        paragraphs: [
          "Las pujas suelen subir de 100 en 100, y en importes más pequeños a veces en 25 o 50. Justo por eso son peligrosas: parecen cantidades inofensivas cuando ya estás dentro emociónalmente.",
          "La frase 'por 100 euros más no pasa nada' es una de las más caras de este negocio. Repetida varias veces, cambia por completo el coste de compra."
        ],
        alert: {
          tone: "alert",
          label: "Peligro real",
          text: "Si tu única justificacion para seguir es que ya has llegado hasta ahí, probablemente ya no estás pujando con cabeza."
        }
      },
      {
        title: "Calculadora, óptimo y máximo",
        paragraphs: [
          "Antes de pujar, usa la calculadora de comisión y tu coste total aproximado. El precio de puja no es el precio final. Lo que pagas de verdad es todo lo que viene después.",
          "Tu precio óptimo es lo que te gustaria pagar. Tu máximo es el límite que no debes superar. Y ese máximo no existe para obligarte a llegar, sino para frenarte antes de salirte de la operación."
        ],
        bullets: [
          "óptimo: cifra ideal.",
          "Máximo: techo absoluto.",
          "No llegar al máximo también puede ser una victoria."
        ],
        example: {
          title: "Cuando tiene sentido acercarte al máximo",
          text: "Cliente claro, salida rápida, margen bien calculado o pocas alternativas reales. Si no hay esa combinación, acercarte al máximo suele ser más emoción que estrategia."
        }
      },
      {
        title: "Reserva, pago y plazos",
        paragraphs: [
          "Si el lote no alcanza reserva, el gestor puede llamarte para preguntar si quieres subir. No estás obligado. A veces solo están tanteando si el vendedor aceptaria algo más.",
          "Si la reserva si se alcanza, normalmente dispones de 48 horas para que llegue el dinero y de 5 días laborables para recoger. Pasado ese punto, entra almacenamiento diario más IVA, y ahí el margen empieza a sufrir sin hacer ruido."
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
      "Documentación USA, airbag y óxido fuerte suelen complicar muchisimo la operación.",
      "Un coche muy barato no cuesta poco cuando sumas todo lo demás."
    ],
    quote:
      "En Copart, un coche de 300 € no cuesta 300 €. Cuesta 300 € más todo lo que viene detrás.",
    miniChecklist: [
      "Evitar S o sin letra si aun no controlas bien el riesgo.",
      "Desconfiar de documentación USA para matricular o vender en España.",
      "Medir impacto real de airbag y óxido.",
      "Pensar si puede circular o necesitará grua."
    ],
    video: {
      status: "coming-soon",
      title: "Coches que evitaría en Copart y por qué",
      description:
        "Te explico este módulo con pantalla real, ejemplos y mi forma de analizarlo.",
      duration: "10 min",
      youtubeId: ""
    },
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
          "Los coches con documentación USA o situaciones documentales raras pueden dar guerra en homologación y matriculación. Si tu objetivo es vender o matricular en España, ese riesgo no suele compensar cuando aun estás construyendo criterio.",
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
          "Un coche de 2 a 500 euros llama muchisimo la atención, pero comisión, transporte, matriculación, reparación y tiempo pueden comerse la operación entera. Solo tienen sentido cuando hay una estrategia clara detrás.",
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
      "Cómo pensar la salida del coche antes de pujar y cuando tiene sentido hablar de placas rojas, Clicktrans o grua directa.",
    learning: [
      "Decidir si el coche puede salir circulando o necesita transporte.",
      "Entender el papel real de las placas rojas.",
      "Comparar Clicktrans con transporte directo."
    ],
    bullets: [
      "Copart determina muchas veces si el coche puede salir circulando.",
      "Las placas rojas ayudan, pero no convierten un coche inseguro en apto.",
      "La pregunta correcta antes de pujar es cómo lo vas a sacar de all?."
    ],
    quote:
      "Antes de pujar no preguntes solo cuánto cuesta. Pregunta cómo lo vas a sacar de all?.",
    miniChecklist: [
      "Pensar la salida antes de meter una puja.",
      "Confirmar si el coche puede circular con seguridad.",
      "Comparar Clicktrans y transporte directo.",
      "Tener lista la autorizacion y los datos de recogida."
    ],
    video: {
      status: "coming-soon",
      title: "Placas rojas, Clicktrans y transporte desde Copart",
      description:
        "Te explico este módulo con pantalla real, ejemplos y mi forma de analizarlo.",
      duration: "8 min",
      youtubeId: ""
    },
    sections: [
      {
        title: "Primero decide si puede moverse o no",
        paragraphs: [
          "Antes de pujar, no basta con calcular daños y comisión. También hay que pensar si el coche podra salir rodando o si necesitará grua desde el minuto uno.",
          "Copart suele tener la última palabra en muchas salidas y, además, normalmente prefieren que el coche salga con grua cuando hay dudas claras."
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
          "Clicktrans permite publicar el trayecto y dejar que varios transportistas pujen por tu pedido. Tiene valor porque te da comparacion de precios y te ayuda a tantear mercado sin cerrar nada demasiado pronto.",
          "La alternativa es buscar grua o transportista directo, acordar precio, pasar autorizacion y datos de recogida y moverlo a tu ubicación con una cadena más controlada."
        ],
        bullets: [
          "Clicktrans: comparativa y competencia entre transportistas.",
          "Directo: más control si ya tienes proveedor o ruta clara."
        ]
      },
      {
        title: "Documentación y coordinación",
        paragraphs: [
          "La documentación suele enviarse al recoger el vehículo, por lo que no conviene asumir que todo llegara antes ni montar el transporte con información incompleta.",
          "Cuánto mejor cierres dirección, fecha, contacto y datos del vehículo, menos posibilidades hay de que la recogida se convierta en una cadena de llamadas y retrasos."
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
      "La recopilacion final del curso para revisar antes de pujar, pagar, recoger y transportar sin improvisar.",
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
      "No pujar sin ruta completa de analisis.",
      "No pagar sin revisar datos y tiempos.",
      "No recoger sin PIN, identificacion y plan de salida.",
      "No transportar sin autorizacion y datos claros."
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
          "La salida final exige autorizacion, dirección de campa, datos del vehículo, fecha clara y contacto del transportista. Esta capa es la que evita malentendidos, recogidas fallidas o coches bloqueados por información a medias.",
          "El objetivo del checklist final no es convertirte en robot. Es hacer difácil que un error básico te arruine una buena compra."
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
  return `/curso-subastas-fundador/${slug}`;
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
