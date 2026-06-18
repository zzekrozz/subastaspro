export const heroChips = [
  "Auto1 incluido",
  "Copart Alemania incluido",
  "BCA próximamente",
  "5 herramientas interactivas",
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
      "Qu? suelen pedir las plataformas profesionales antes de dejarte comprar y por qu? lo hacen.",
    learning: [
      "Entender que documentaci?n suelen pedir Auto1, Copart y otras plataformas profesionales.",
      "Saber que es el IAE y por que suele ser una pieza clave en el alta.",
      "Diferenciar lo normal en aut?nomos y empresas antes de registrarte."
    ],
    bullets: [
      "Para comprar en muchas subastas necesitas ser aut?nomo o empresa.",
      "Suelen pedir IAE del a?o actual para comprobar la actividad.",
      "Aut?nomo: DNI, IAE y direcci?n.",
      "Empresa: CIF, IAE, direcci?n y a veces escrituras."
    ],
    quote:
      "Entrar en subastas no es solo registrarse. Es demostrar que compras como profesional.",
    miniChecklist: [
      "Confirmar si la plataforma exige alta profesional.",
      "Preparar DNI o CIF y direcci?n actualizada.",
      "Tener IAE del a?o en curso a mano.",
      "Preguntar por documentos extra antes de empezar el registro."
    ],
    sections: [
      {
        title: "Qu? te suelen pedir y por qu?",
        paragraphs: [
          "En muchas subastas profesionales no basta con abrir una cuenta y ya est?. La plataforma quiere comprobar que compras dentro de una actividad real relacionada con automocion, compraventa o gestion profesional de veh?culos.",
          "Por eso suelen pedir documentaci?n de alta profesional. No es un capricho: les sirve para filtrar usuarios, reducir incidencias y asegurarse de que quien puja entiende la operativa comercial."
        ],
        bullets: [
          "Aut?nomo o empresa en la mayor?a de plataformas profesionales.",
          "Documentos de identidad y direcci?n.",
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
          "El IAE es, dicho en sencillo, el documento o referencia con la que acreditas a que actividad economica est?s dado de alta. A la plataforma le ayuda a ver que no entras como alguien que compra por impulso, sino como alguien que opera con una actividad reconocible.",
          "No significa que con solo tener IAE ya este todo aprobado. Significa que das una primera prueba clara de que tu actividad encaja con lo que la plataforma espera."
        ],
        bullets: [
          "Les sirve para comprobar a que actividad te dedicas.",
          "Les ayuda a validar que compras en contexto profesional.",
          "Reduce altas que luego acaban bloqueadas o rechazadas."
        ]
      },
      {
        title: "Aut?nomo y empresa: que suele cambiar",
        paragraphs: [
          "Si eres aut?nomo, lo normal es que te pidan una combinacion sencilla: DNI, IAE y direcci?n. En empresas, adem?s del CIF, a veces entran documentos de constitucion o escrituras si quieren una verificacion m?s completa.",
          "No hace falta sobredramatizar este paso. En muchos casos un gestor te lo deja preparado r?pido y con bastante m?s orden del que tendrias si empiezas a improvisar documentos el mismo d?a del registro."
        ],
        bullets: [
          "Aut?nomo: DNI, IAE y direcci?n.",
          "Empresa: CIF, IAE, direcci?n y a veces escrituras.",
          "Un gestor puede preparar el alta o la documentaci?n con bastante rapidez."
        ],
        alert: {
          tone: "alert",
          label: "Error com?n",
          text: "Entrar a registrarte sin tener claro el alta profesional suele terminar en cuentas paradas, correos cruzados y tiempo perdido."
        }
      },
      {
        title: "Y si solo quieres probar o empezar",
        paragraphs: [
          "Mucha gente frena aqu? porque piensa que darse de alta es una decision enorme. En realidad, para bastantes perfiles lo importante es entender que la actividad se puede abrir, usar y, si no se continua, cerrar despues con apoyo de gestor.",
          "Lo que no conviene es entrar a una subasta profesional creyendo que funcionara como una web abierta para cualquiera. Si el acceso est? pensado para profesionales, la parte administrativa forma parte del juego desde el principio."
        ],
        example: {
          title: "Ejemplo pr?ctico",
          text: "Si vas a revisar lotes con idea real de comprar en Auto1 o Copart, prepara primero tu documentaci?n profesional. Eso te evita ver oportunidades que luego no puedes ejecutar."
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
      "La diferencia real entre ver el coche en persona y decidir solo con ficha, fotos y documentaci?n.",
    learning: [
      "Ver con claridad en que cambia la toma de decisiones en subasta.",
      "Detectar se?ales de ficha pobre o poco trabajada.",
      "Entender el papel de los vicios ocultos y de las reclamaciones."
    ],
    bullets: [
      "En compra cl?sica puedes ver, probar, negociar y conectar diagnosis.",
      "En subasta dependes de ficha, fotos, documentaci?n y prueba din?mica.",
      "Las fichas las hacen humanos: unas son muy ?tiles y otras muy pobres."
    ],
    quote:
      "En subasta no compras informacion perfecta. Compras informacion suficiente para decidir si el riesgo tiene sentido.",
    miniChecklist: [
      "Asumir que no veras el coche antes de pagar.",
      "Valorar la calidad de ficha antes de enamorarte del lote.",
      "Separar riesgo aceptable de riesgo ciego.",
      "Pensar como reclamarias si algo no coincide."
    ],
    sections: [
      {
        title: "La diferencia no es peque?a: cambia todo el proceso",
        paragraphs: [
          "Comprar un coche de forma cl?sica y comprarlo en subasta se parecen en el objetivo final, pero no en el camino. En una compra cl?sica puedes acercarte, ver el estado real, tocar el interior, arrancarlo, llevar diagnosis y marcharte si no te convence.",
          "En subasta, en cambio, gran parte de la decision se toma antes de pisar la campa. Lo que manda es la informacion disponible: ficha, fotos, documentaci?n, comentarios del inspector, prueba din?mica y contexto del lote."
        ],
        bullets: [
          "Compra cl?sica: ver, probar, negociar, diagnosticar e irte.",
          "Subasta: leer, interpretar, comparar y asumir un nivel de incertidumbre."
        ]
      },
      {
        title: "De que dependes realmente en subasta",
        paragraphs: [
          "Cuando compras en subasta dependes de la ficha y de como este hecha. Esa ficha resume lo que alguien vio y quiso o pudo reflejar. Si el inspector fue preciso, tienes una base buena. Si fue vago, el margen de duda crece mucho.",
          "Por eso no basta con leer el titular del lote. Hay que revisar documentaci?n, prueba din?mica, interior, exterior, da?os, cuadro y cualquier nota que explique algo fuera de lo normal."
        ],
        bullets: [
          "Ficha del lote.",
          "Fotos y calidad visual de esas fotos.",
          "Documentaci?n disponible.",
          "Estado interior y exterior descrito o visible.",
          "Comentarios y notas del inspector."
        ]
      },
      {
        title: "C?mo huele una ficha vaga",
        paragraphs: [
          "Las fichas las hacen humanos y eso se nota mucho. Hay inspectores que documentan bien y otros que dejan demasiadas zonas grises. Cuando una ficha es vaga, no significa siempre que el coche sea malo, pero si que te exige m?s prudencia.",
          "Aprender a detectar esa pobreza documental es una parte importante del oficio, porque muchas malas compras nacen de un exceso de confianza frente a una ficha que avisaba, precisamente, por lo poco que decia."
        ],
        bullets: [
          "Pocas fotos.",
          "Fotos borrosas o demasiado oscuras.",
          "Da?os mal ense?ados o mal encuadrados.",
          "Descripciones demasiado generales."
        ],
        alert: {
          tone: "alert",
          label: "No confundas",
          text: "Ficha corta no significa obligatoriamente oportunidad oculta. A veces solo significa informacion insuficiente para comprar con criterio."
        }
      },
      {
        title: "Vicios ocultos y reclamaciones",
        paragraphs: [
          "Los vicios ocultos existen en subasta y en compra tradicional. La diferencia es que en subasta, al no ver el coche antes, dependes mucho m?s de la coherencia entre lo anunciado y lo que realmente aparece al recoger.",
          "La ventaja es que puedes analizar muchos coches desde casa y ahorrar desplazamientos in?tiles. La desventaja es que, si algo no encaja, la defensa del caso llega despues y no antes."
        ],
        example: {
          title: "Lectura pr?ctica",
          text: "Si una ficha est? bien hecha, te evita viajes y multiplica el numero de coches que puedes estudiar. Si est? mal hecha, debes compensarlo con m?s prudencia y un l?mite de puja m?s duro."
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
      "C?mo funciona Auto1 en la pr?ctica, que papel juega la subasta de 24 horas y donde suelen aparecer oportunidades reales.",
    learning: [
      "Entender Auto1 como marketplace profesional y no como subasta tradicional pura.",
      "Saber como leer la evolucion de precios entre Subasta 24h y Comprar Ahora.",
      "Crear una rutina util con favoritos, notas y seguimiento."
    ],
    bullets: [
      "Auto1 funciona muchas veces como falsa subasta o marketplace profesional.",
      "El precio visible suele acercarse bastante al precio real de compra, m?s comis??n.",
      "Seguir coches durante d?as suele dar m?s ventaja que mirar muchisimos en una sola tarde."
    ],
    quote:
      "En Auto1 muchas oportunidades no aparecen por buscar m?s, sino por seguir mejor.",
    miniChecklist: [
      "Guardar favoritos en vez de confiar en la memoria.",
      "Apuntar precios para ver bajadas reales.",
      "Diferenciar Subasta 24h de Comprar Ahora.",
      "No asumir que m?s tiempo publicado significa siempre mal coche."
    ],
    sections: [
      {
        title: "Auto1 no se vive como una subasta cl?sica",
        paragraphs: [
          "Auto1 se mueve a menudo como una falsa subasta o un marketplace profesional con din?micas de precio bastante concretas. No es raro que el precio que ves se parezca bastante al precio al que podr?as llevartelo, siempre sumando la comis??n y los extras de la operaci?n.",
          "Eso cambia el enfoque. En vez de entrar a cazar un milagro en un solo minuto, conviene tratar la plataforma como un flujo continuo de oportunidades que se estudian y se siguen."
        ],
        bullets: [
          "Precio visible cercano al cierre real en muchos casos.",
          "Comis??n variable segun pa?s y operativa.",
          "Menos teatralidad y m?s seguimiento."
        ]
      },
      {
        title: "Subasta 24h y Comprar Ahora",
        paragraphs: [
          "La Subasta 24h suele durar eso mismo: un ciclo corto donde el coche se expone, recibe o no interes y puede cambiar de precio. Si nadie puja, muchas veces baja en d?as posteriores. Algunos coches recien publicados necesitan varios intentos antes de colocarse.",
          "Comprar Ahora es otra cosa. El precio azul te permite cerrar sin esperar, pero normalmente viene algo m?s alto que el equivalente en Subasta 24h. Aun as?, puede interesar si el lote encaja muy bien o si el margen sigue siendo claro."
        ],
        bullets: [
          "Subasta 24h: exposicion, testeo del interes del mercado y posibles bajadas.",
          "Comprar Ahora: cierre directo, pero normalmente algo m?s caro.",
          "El mismo coche puede alternar entre ambos formatos."
        ],
        alert: {
          tone: "alert",
          label: "Efecto bola de nieve",
          text: "Si un coche pasa tiempo sin venderse, muchos compradores lo descartan por inercia. A veces ese rechazo es razonable y a veces solo es contagio."
        }
      },
      {
        title: "La estrategia que m?s ayuda: favoritos y notas",
        paragraphs: [
          "Una de las rutinas m?s ?tiles en Auto1 es guardar coches que te interesan y llevar notas simples: precio visto, fecha, comentarios o cosas a revisar despues. Esa disciplina vale m?s que mirar cientos de anuncios deprisa.",
          "Cuando observas varios d?as seguidos, empiezas a entender si un vehiculo baja, si se estanca o si probablemente ya est? cerca de su minimo comercial."
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
          "Si un vehiculo lleva tiempo publicado y no baja m?s, no siempre significa que este sobrevalorado. A veces simplemente ya est? cerca del minimo al que la plataforma o el vendedor quieren cerrar.",
          "Eso no obliga a comprarlo, pero si te ayuda a no esperar eternamente una bajada que quizas no llegue. En esos casos la decision correcta es comparar el lote con tu coste real aproximado y con alternativas similares."
        ],
        example: {
          title: "Ejemplo pr?ctico",
          text: "Dos Audi A4 similares pueden parecer iguales a simple vista. El que gana valor no es el que tiene menor precio visto hoy, sino el que mejor combina estado, log?stica, documentaci?n y probabilidad de cierre."
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
      "C?mo usar filtros para ahorrar tiempo, reducir ruido y centrarte solo en coches que de verdad encajan con tu estrategia.",
    learning: [
      "Filtrar por ubicaci?n, log?stica y pa?s sin perder tiempo.",
      "Separar filtros que dependen de estrategia de los que son solo comodos.",
      "Evitar revisar coches que nunca comprarias."
    ],
    bullets: [
      "Los filtros no son un adorno: te ahorran horas de ruido.",
      "Ubicacion, pa?s y log?stica cambian mucho la operaci?n real.",
      "Marcas, modelo y presupuesto deben responder a tu estrategia, no al capricho del d?a."
    ],
    quote:
      "En subastas no gana quien mira m?s coches. Gana quien mira mejor los coches correctos.",
    miniChecklist: [
      "Definir radio o pa?s antes de empezar a mirar.",
      "Eliminar marcas y modelos que no compras.",
      "Ajustar a?o, kilometros y precio a tu estrategia.",
      "Confirmar condiciones especiales si trabajas con pa?ses concretos."
    ],
    sections: [
      {
        title: "Filtrar es una herramienta de enfoque",
        paragraphs: [
          "En Auto1 los filtros no son solo una forma de ordenar la pantalla. Son una manera de evitar que el catalogo te arrastre a revisar coches que nunca deber?an consumir tu tiempo.",
          "Cu?nto m?s claro tengas tu tipo de coche, tu radio operativo y tu presupuesto real, mejor funcionaran los filtros para protegerte del ruido."
        ]
      },
      {
        title: "Ubicacion, radio y log?stica",
        paragraphs: [
          "La ubicaci?n importa porque cada kilometro y cada frontera mueven coste, recogida y tiempos. Si compras en Espa?a, una campa cercana simplifica mucho. Si trabajas en extranjero, el filtro geografico te ayuda a comparar rutas y opciones de transporte.",
          "No es solo una cuestion de comodidad. Muchas veces un coche m?s barato a cientos de kilometros termina siendo peor operaci?n que uno algo m?s caro pero muy f?cil de mover."
        ],
        bullets: [
          "Veh?culos cercanos para operaciones rapidas.",
          "Zonas concretas si ya tienes rutas o transportistas.",
          "Separar Espa?a de extranjero para leer mejor la log?stica."
        ]
      },
      {
        title: "Marcas, modelos y estrategia",
        paragraphs: [
          "No tiene sentido abrirte a todo el mercado si ya sabes que ciertas marcas o modelos no encajan con tu publico, tu margen o tu capacidad de reparaci?n. Filtrar bien reduce el cansancio mental y mejora la calidad del analisis.",
          "A veces una gran mejora no viene de buscar m?s, sino de quitar ruido: sacar de pantalla lo que no compras para dedicar energia a los lotes que si podr?an cuadrar."
        ],
        bullets: [
          "Quitar marcas que no interesan segun tu estrategia.",
          "Priorizar segmentos donde conoces mejor da?os, salida y margen.",
          "No mezclar coches capricho con compras de operativa real."
        ],
        example: {
          title: "Ejemplo pr?ctico",
          text: "Si tu operativa gira en torno a Audi, Mercedes, Volkswagen o Porsche, no ganas nada revisando compactos que nunca venderias o furgonetas que no sabes homologar."
        }
      },
      {
        title: "A?o, kilometros, pa?s y propietarios",
        paragraphs: [
          "A?o, kilometros y precio no tienen misterio, pero si consecuencias. Deben responder a presupuesto, tipo de cliente y riesgo asumible. Lo mismo pasa con el numero de propietarios: uno o dos pueden ser una buena senal, aunque nunca garantizan estado.",
          "Con pa?ses concretos hay que ser prudente. Por ejemplo, si trabajas con Suecia u otros mercados donde puedan cambiar condiciones de documentaci?n o CMR, lo sensato es confirmarlo con gestor antes de pujar."
        ],
        bullets: [
          "Uno o dos propietarios puede ser interesante, no definitivo.",
          "Vehiculo comercial muy util si buscas furgonetas.",
          "Combustible, cambio y carroceria dependen del objetivo final."
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
      "El m?dulo m?s pr?ctico para aprender a leer una ficha de Auto1 en el orden correcto y sin saltarte lo importante.",
    learning: [
      "Seguir un orden est?ble de lectura para no dejar huecos.",
      "Distinguir problemas menores de se?ales realmente delicadas.",
      "Cruzar prueba din?mica, fotos, documentaci?n y log?stica antes de pujar."
    ],
    bullets: [
      "Empieza por notas, prueba din?mica y datos t?cnicos.",
      "Revisa siempre cuadro, fotos generales y fotos del apartado da?os.",
      "Documentaci?n, pa?s de origen y log?stica pueden cambiar por completo la operaci?n."
    ],
    quote:
      "Muchas veces el problema estaba en la ficha, pero hab?a que fijarse mejor.",
    miniChecklist: [
      "Seguir siempre el mismo orden de analisis.",
      "No tomar una decision solo con fotos principales.",
      "Cruzar cuadro, da?os, documentaci?n y log?stica.",
      "Cerrar la puja solo cuando el coste real siga teniendo sentido."
    ],
    sections: [
      {
        title: "1. Otras notas o comentarios",
        paragraphs: [
          "Si una ficha tiene notas o comentarios, empieza por ah?. A veces es una tonteria, pero otras veces es justo la frase que explica por qu? ese coche sigue sin venderse o por que hay que mirarlo con m?s calma.",
          "La logica es sencilla: si alguien sintio la necesidad de dejar una nota, probablemente hab?a algo que merecia atenci?n especial."
        ],
        bullets: [
          "Leerlo antes de entrar a fotos o emoci?narte con el precio.",
          "Tomarlo como pista, no como sentencia final."
        ]
      },
      {
        title: "2. Prueba din?mica",
        paragraphs: [
          "La prueba din?mica te da una lectura mec?nica resumida: motor, caja, frenos, ruidos, testigos, marchas y comportamiento general. Aqu? aprendes a distinguir entre incidencias soportables y banderas rojas.",
          "No todos los problemas pesan igual. Un aire acondicionado que no enfria, un GPS que falla o un rodamiento ruidoso no tienen el mismo impacto que un testigo motor, un fallo de caja o humo anormal."
        ],
        bullets: [
          "Problem?s menores posibles: aire acondicionado, compresor, GPS, asientos calefactables, ruido de ruedas, frenos o chirridos.",
          "Problem?s delicados: testigo motor, ABS, airbag, caja, motor, humo, sobrecalentamiento."
        ],
        alert: {
          tone: "alert",
          label: "Siempre revisa",
          text: "La foto del cuadro es obligatoria. A veces la ficha resume poco y el cuadro te cuenta m?s verdad que la descripcion."
        }
      },
      {
        title: "3. Datos t?cnicos y contexto del coche",
        paragraphs: [
          "A?o, kilometros, potencia, combustible, cambio y carroceria te ayudan a ubicar el vehiculo en el mercado. Pero no te quedes solo ah?: pa?s de origen y ?ltima matriculaci?n importan mucho para documentaci?n, salida comercial y posibles sorpresas.",
          "Estos campos parecen b?sicos, pero son los que luego explican si el coche encaja de verdad con tu cliente, con tu margen y con la operativa de matriculaci?n."
        ]
      },
      {
        title: "4. Da?os previos y accidente",
        paragraphs: [
          "La palabra accidente no debe asustarte por si sola. Puede esconder desde un golpe leve hasta algo estructural. Lo que importa no es el susto del termino, sino el cruce entre el texto y las imagenes.",
          "Por eso no conviene sacar conclusiones solo con la etiqueta. Hay que bajar a ver exactamente donde est? el da?o y como se presenta."
        ]
      },
      {
        title: "5 y 6. Fotos principales y fotos del apartado da?os",
        paragraphs: [
          "Haz primero un vistazo r?pido general y, si el coche te sigue interesando, una revis??n profunda. Mira interior, asientos, volante, botones, aire acondicionado, lunas, chinazos, descuadres y ?xido.",
          "Auto1 suele repartir informacion visual en dos zonas: fotos principales y fotos del apartado da?os. Revisar solo una de las dos es una de las maneras m?s f?ciles de comprar mal."
        ],
        bullets: [
          "Revisar siempre cuadro y testigos.",
          "Mirar interior y desgaste real del uso.",
          "Buscar lunas tocadas, ?xido, tuning o modificaciones.",
          "Comparar fotos generales con las de da?os."
        ],
        example: {
          title: "Ejemplo pr?ctico",
          text: "Un coche puede verse limpio en las fotos principales y esconder en el apartado da?os justo la aleta, el faro o el descuadre que cambia la reparaci?n."
        }
      },
      {
        title: "7. Documentaci?n",
        paragraphs: [
          "La documentaci?n es donde muchas operaciones se complican sin avisar. Hay que revisar documentos extranjeros, homologaci?n europea o letra K si aplica, y prestar especial atenci?n a furgonetas antiguas, coches de Holanda o veh?culos modificados.",
          "Si el coche tiene documentaci?n espa?ola, mira ITV o kilometros si aparecen. Si viene de fuera, cruza pa?s de origen, ?ltima matriculaci?n y coherencia documental."
        ],
        bullets: [
          "Revisar letra K o COC si aplica.",
          "Especial cuidado con furgonetas antiguas.",
          "Mirar modificaciones y tuning que afecten matriculaci?n."
        ]
      },
      {
        title: "8 y 9. Log?stica, equipamiento y bastidor",
        paragraphs: [
          "Antes de pujar, mira campa, opciones de transporte, recogida gratis si existe y precios aproximados hasta tu zona. Un coche medio bueno con log?stica absurda puede perder sentido.",
          "Tambi?n conviene revisar equipamiento y datos por bastidor cuando esten disponibles. No porque definan toda la compra, sino porque ayudan a evitar confusiones entre vers??nes o equipamientos mal asumidos."
        ],
        callout: {
          tone: "note",
          label: "Cierre mental correcto",
          text: "La ficha se analiza entera o no se analiza. Si te saltas una capa, el hueco casi siempre aparece despues de pagar."
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
      "Todo lo que ocurre despues de ganar: pago, regla 15:00, PIN, campa, reclamaciones y opciones de salida.",
    learning: [
      "Entender el flujo desde adjudicacion hasta recogida real.",
      "Evitar retrasos por no controlar pago, cita o campa.",
      "Saber cuando tocar transporte, placas o seguro temporal."
    ],
    bullets: [
      "Tras ganar, los datos de pago suelen llegar en unas horas.",
      "La regla 15:00 cambia mucho la planificacion de recogida.",
      "Comprar bien no termina al ganar la puja: termina cuando el coche est? en camino."
    ],
    quote:
      "Comprar bien no termina al ganar la puja. Termina cuando el coche est? recogido, revisado y en camino.",
    miniChecklist: [
      "Enviar justificante al gestor cu?nto antes.",
      "Comprobar regla 15:00 antes de elegir d?a.",
      "Guardar PIN e instrucciones de campa.",
      "Definir si sales con seguro temporal, placas o transporte."
    ],
    sections: [
      {
        title: "Del pago a la cita",
        paragraphs: [
          "Despu?s de ganar la puja, la aplicacion o el sistema de Auto1 suele dar los datos de pago en unas horas. Si quieres mover el proceso r?pido, no esperes a que todo vaya solo: enviar justificante al gestor comercial suele acelerar bastante.",
          "Una vez el pago est? encarrilado, llega la parte de elegir recogida. Aqu? es donde mucha gente se equivoca por pensar que puede moverse al d?a siguiente sin mirar horario de corte."
        ]
      },
      {
        title: "La regla 15:00",
        paragraphs: [
          "Para recoger al d?a siguiente, normalmente hay que seleccionar la recogida antes de las 15:00. Esa regla cambia toda la agenda. Si compras un lunes a las 16:00, muchas veces ya no est?s pensando en martes, sino como minimo en miercoles.",
          "Lo mismo ocurre los viernes. Si compras despues de las 15:00, lo habitual es que el escenario real se vaya a martes y no a lunes."
        ],
        bullets: [
          "Lunes 16:00: normalmente minimo miercoles.",
          "Viernes despues de 15:00: normalmente martes."
        ],
        alert: {
          tone: "alert",
          label: "Error caro",
          text: "Reservar viaje o transporte sin mirar esa hora de corte puede hacerte perder tiempo, dinero y coordinaci?n."
        }
      },
      {
        title: "PIN, campa y reclamacion",
        paragraphs: [
          "Segun la campa, puede llegarte un PIN code o instrucciones concretas por correo. Algunas ubicaci?nes incluso piden registro externo o cita adicional, como ocurre a veces en ciertas campas de Belgica.",
          "En Espa?a la secuencia suele ser m?s directa: llegas, das PIN, enseñas DNI, revisas visualmente, arrancas y, si algo importante no coincide con lo anunciado, reclam?s antes de salir."
        ],
        bullets: [
          "Ir a oficina o recepcion si hay problema.",
          "Hacer fotos y videos antes de abandonar la campa.",
          "No dejar la reclamacion para despues."
        ]
      },
      {
        title: "Transporte, seguro temporal y documentaci?n",
        paragraphs: [
          "La salida del coche puede ser con Auto1, con transportista independiente o mediante una solucion de circulacion temporal si el vehiculo y la operaci?n lo permiten. Si entra un tercero, normalmente necesitara PIN y autorizacion.",
          "El seguro temporal puede resolverse con opciones como Terranea o segurospord?a, segun el caso. La documentaci?n, por su parte, suele llegar por correo postal y conviene no asumir plazos optimistas."
        ]
      },
      {
        title: "Recogidas en extranjero",
        paragraphs: [
          "Fuera de Espa?a entran en juego placas rojas, placas de exportacion y requisitos concretos por pa?s. En Alemania suele ser clave contar con documentaci?n e ITV valida para placas de exportacion.",
          "En Holanda pueden emitir documento de exportacion a nombre del comprador, y en Francia a menudo siguen puest?s las matriculas francesas, lo que hace recomendable viajar con toda la documentaci?n recibida y no improvisar."
        ],
        bullets: [
          "Llevar chaleco reflectante siempre en campas extranjeras.",
          "Pensar la salida antes de comprar, no despues."
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
      "Entender la plataforma como subasta de da?o, documentaci?n y log?stica.",
      "Leer R, S y sin letra con mentalidad operativa.",
      "Saber que datos importan antes de entusiasmarte con el precio."
    ],
    bullets: [
      "Copart Alemania trabaja sobre veh?culos da?ados y por eso puede tener precios muy por debajo del mercado.",
      "La licencia anual ronda los 200 euros y el acceso particular es m?s limitado.",
      "Riesgo, documentaci?n y salida del coche pesan tanto como el precio."
    ],
    quote:
      "En Copart no compras solo un coche barato. Compras da?o, documentaci?n, log?stica y riesgo.",
    miniChecklist: [
      "Confirmar tipo de acceso y costes antes de empezar.",
      "Entender bien R, S y sin letra.",
      "Mirar ZB1/ZB2, COC y documents antes de fantasear con el margen.",
      "Separar precio atractivo de operaci?n razonable."
    ],
    sections: [
      {
        title: "Por qu? interesa tanto Copart Alemania",
        paragraphs: [
          "Copart Alemania es una de las subastas m?s interesantes del curso porque concentra volumen, da?o y precios que, en muchos casos, se sitúan por debajo del mercado aleman y muy por debajo del mercado espa?ol.",
          "Eso no significa dinero f?cil. Significa que, si sabes leer el lote, hay m?s espacio para encontrar operaciones con sentido. Si no sabes leerlo, el mismo descuento se convierte en una trampa."
        ]
      },
      {
        title: "Qu? tipo de veh?culos aparecen",
        paragraphs: [
          "Aqu? conviven da?os de carroceria, mec?nicos, granizo, normal wear y lotes con documentaci?n internacional o complicada. Por eso Copart exige una mirada m?s tecnica que otras plataformas.",
          "No se trata solo de ver si el golpe asusta. Se trata de medir si da?o, papeles y salida del coche siguen cuadrando juntos."
        ],
        bullets: [
          "Carroceria.",
          "Mec?nica.",
          "Granizo.",
          "Normal wear.",
          "Documents internacionales o poco limpios."
        ]
      },
      {
        title: "Coste anual y acceso",
        paragraphs: [
          "La licencia de miembro suele rondar los 200 euros anuales. Para muchos perfiles es asumible si realmente vas a operar, pero no deja de ser una barrera que conviene tener presente desde el principio.",
          "El acceso particular es m?s limitado, aunque puede servir para empezar a mirar y entender din?micas. Aun as?, la plataforma est? mucho m?s pensada para quien quiere comprar con enfoque profesional."
        ]
      },
      {
        title: "Calendario e indicadores clave",
        paragraphs: [
          "Las subastas suelen celebrarse de lunes a viernes, descansando sabados, domingos y festivos. Eso te permite planificar el seguimiento semanal y no vivirlo todo como si fuera una urgencia continua.",
          "Los indicadores son esenciales: R verde significa que arranca, engrana y se mueve hacia delante y atr?s; S azul que arranca y engrana, pero no se confirma movimiento; y sin letra, mucho m?s riesgo y menos certeza."
        ],
        bullets: [
          "R verde: mejor base operativa.",
          "S azul: atenci?n extra.",
          "Sin letra: riesgo m?s alto."
        ]
      },
      {
        title: "Datos que valen oro",
        paragraphs: [
          "Odometro, valor orientativo del mercado aleman, ZB1/ZB2, COC e International Documents son campos que mueven decisiones reales. El valor orientativo puede servirte como referencia, pero no compra el coche por ti ni garantiza salida.",
          "Lo importante es entender que ese lote no se decide solo por precio. Se decide por la combinacion entre da?o, papeles, log?stica, posibilidad de circular y coste total de ponerlo en tu operativa."
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
      "C?mo exprimir una ficha normalmente m?s corta que la de otras plataformas y sacar verdad de las fotos finales.",
    learning: [
      "Leer fotos, cuadro y avisos como la parte central del analisis.",
      "Entender mejor da?o principal, secundario e informacion adicional.",
      "Detectar cuando granizo o mechanical cambian totalmente la pelicula."
    ],
    bullets: [
      "Copart no suele darte tantas fotos o tanto detalle como otras plataformas.",
      "Las ?ltimas fotos muchas veces enseñan lo que de verdad importa.",
      "Si aparece mechanical, no se puede pasar por alto aunque sea secundario."
    ],
    quote:
      "En Copart las ?ltimas fotos no son relleno. Muchas veces son la verdad del coche.",
    miniChecklist: [
      "Mirar todos los laterales y el interior.",
      "Pararse en la foto del cuadro.",
      "Leer avisos especiales antes de pujar.",
      "Cruzar da?o principal, secundario y additional info."
    ],
    sections: [
      {
        title: "Empieza por las fotos, no por la fantas?a",
        paragraphs: [
          "En Copart las fotos pesan muchisimo porque la plataforma no suele regalar tanto detalle como otras. Por eso conviene empezar por una vuelta general: exteriores, interior, cuadro y estado global del coche.",
          "No busques una ficha literaria. Busca pistas visuales que te digan si el lote merece seguir vivo o si hay que pasar pagina pronto."
        ]
      },
      {
        title: "Las ?ltimas fotos suelen contar la verdad",
        paragraphs: [
          "Una de las costumbres m?s ?tiles en Copart es mirar siempre las ?ltimas fotos con atenci?n. Muchas veces es ah? donde aparecen los da?os importantes, las piezas desplazadas o justo el angulo que cambia toda la operaci?n.",
          "Cada foto suele tener trabajo. No est?n ah? para rellenar, sino para mostrar una cara del problema."
        ],
        example: {
          title: "Lectura pr?ctica",
          text: "Si el frontal parece razonable al principio pero las ?ltimas fotos enseñan eje, radiador o huecos serios, el lote ya no es el mismo coche que creias."
        }
      },
      {
        title: "Cuadro y avisos especiales",
        paragraphs: [
          "La foto del cuadro es obligatoria porque no siempre escriben los testigos. A eso se suman avisos o se?ales especiales que pueden aparecer junto a las fotos: granizo, documentos perdidos, documents internacionales, inundado, IVA, airbag saltado o libro de mantenimiento.",
          "No es buena idea pujar sin leer esa capa. Muchas veces el texto pequeño es justo lo que separa una operaci?n interesante de otra que no deber?a salir de favoritos."
        ]
      },
      {
        title: "Da?o principal, da?o secundario e informacion adicional",
        paragraphs: [
          "El da?o principal te orienta, pero no decide solo. El secundario puede ser el que de verdad encarece, y si aparece da?o mec?nico aunque sea en segundo plano, hay que ir de cabeza a la informacion adicional.",
          "Ese bloque suele dar contexto de motor, caja o mec?nica general. En una plataforma como Copart, una palabra bien leida ah? evita muchos errores caros."
        ],
        bullets: [
          "Da?o principal.",
          "Da?o secundario.",
          "Informacion adicional sobre mec?nica o funcionamiento."
        ]
      },
      {
        title: "Granizo: por que a veces interesa",
        paragraphs: [
          "El granizo puede ser de los da?os m?s interesantes porque a menudo baja el precio y no toca la mec?nica. Pero no se puede meter todo en el mismo saco: hay grados y casos.",
          "Lo bueno del granizo es que obliga menos a imaginar averias ocultas mec?nicas. Lo delicado es medir si el da?o estetico, el contexto del coche y el precio siguen cuadrando."
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
      "C?mo preparar la puja en vivo, controlar la emoci?n y usar bien tu precio ?ptimo y tu m?ximo.",
    learning: [
      "Entender el flujo de la subasta en vivo y sus l?neas.",
      "Usar favoritos e incrementos con cabeza.",
      "Separar precio ?ptimo, m?ximo y reserva del vendedor."
    ],
    bullets: [
      "Se recomienda esperar a la subasta en vivo en vez de improvisar pujas tempranas.",
      "Los incrementos pequeños parecen inocentes, pero son los que se comen el margen.",
      "?ptimo y m?ximo no son la misma cifra ni sirven para lo mismo."
    ],
    quote:
      "La subasta no te arruina de golpe. Te arruina de 100 en 100.",
    miniChecklist: [
      "Calcular comis??n antes de pujar.",
      "Definir precio ?ptimo y precio m?ximo.",
      "Esperar a la subasta en vivo salvo caso clarisimo.",
      "Tener plan para reserva, pago y recogida."
    ],
    sections: [
      {
        title: "Por qu? suele ser mejor esperar al vivo",
        paragraphs: [
          "Se puede pujar antes, pero la recomendacion general del curso es llegar con deberes hechos y esperar al vivo. Es ah? donde ves de verdad c?mo se mueve el lote y donde te proteges mejor frente a impulsos basados en una cifra suelta.",
          "En Copart los veh?culos salen uno a uno y el ritmo cambia mucho cuando ves la secuencia real, sobre todo si tienes varios favoritos preparados."
        ]
      },
      {
        title: "L?neas A y B, favoritos y Comprar Ahora",
        paragraphs: [
          "La existencia de l?neas A y B obliga a estar ordenado. Marcar favoritos ayuda mucho porque te aparecen resaltados y los localizas mejor en la lista de proximos.",
          "Comprar Ahora solo suele tener sentido cuando el caso es muy claro. En el resto, la subasta en vivo te da contexto y te permite no pagar demasiado por ansiedad."
        ]
      },
      {
        title: "Incrementos y emoci?n",
        paragraphs: [
          "Las pujas suelen subir de 100 en 100, y en importes m?s pequeños a veces en 25 o 50. Justo por eso son peligrosas: parecen cantidades inofensivas cuando ya est?s dentro emoci?nalmente.",
          "La frase 'por 100 euros m?s no pasa nada' es una de las m?s caras de este negocio. Repetida varias veces, cambia por completo el coste de compra."
        ],
        alert: {
          tone: "alert",
          label: "Peligro real",
          text: "Si tu unica justificacion para seguir es que ya has llegado hasta ah?, probablemente ya no est?s pujando con cabeza."
        }
      },
      {
        title: "Calculadora, ?ptimo y m?ximo",
        paragraphs: [
          "Antes de pujar, usa la calculadora de comis??n y tu coste total aproximado. El precio de puja no es el precio final. Lo que pagas de verdad es todo lo que viene despues.",
          "Tu precio ?ptimo es lo que te gustaria pagar. Tu m?ximo es el l?mite que no debes superar. Y ese m?ximo no existe para obligarte a llegar, sino para frenarte antes de salirte de la operaci?n."
        ],
        bullets: [
          "?ptimo: cifra ideal.",
          "M?ximo: techo absoluto.",
          "No llegar al m?ximo tambi?n puede ser una victoria."
        ],
        example: {
          title: "Cuando tiene sentido acercarte al m?ximo",
          text: "Cliente claro, salida rapida, margen bien calculado o pocas alternativas reales. Si no hay esa combinacion, acercarte al m?ximo suele ser m?s emoci?n que estrategia."
        }
      },
      {
        title: "Reserva, pago y plazos",
        paragraphs: [
          "Si el lote no alcanza reserva, el gestor puede llamarte para preguntar si quieres subir. No est?s obligado. A veces solo est?n tanteando si el vendedor aceptaria algo m?s.",
          "Si la reserva si se alcanza, normalmente dispones de 48 horas para que llegue el dinero y de 5 d?as laborables para recoger. Pasado ese punto, entra almacenamiento d?ario m?s IVA, y ah? el margen empieza a sufrir sin hacer ruido."
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
      "Si est?s empezando, mejor priorizar R verde frente a S o sin letra.",
      "Documentaci?n USA, airbag y ?xido fuerte suelen complicar muchisimo la operaci?n.",
      "Un coche muy barato no cuesta poco cuando sumas todo lo dem?s."
    ],
    quote:
      "En Copart, un coche de 300 € no cuesta 300 €. Cuest? 300 € m?s todo lo que viene detras.",
    miniChecklist: [
      "Evitar S o sin letra si aun no controlas bien el riesgo.",
      "Desconfiar de documentaci?n USA para matricular o vender en Espa?a.",
      "Medir impacto real de airbag y ?xido.",
      "Pensar si puede circular o necesitara grua."
    ],
    sections: [
      {
        title: "S o sin letra cuando est?s empezando",
        paragraphs: [
          "Si est?s empezando, las siglas importan mucho. Un R verde suele darte una base bastante m?s sana que un S o un sin letra. No porque garantice negocio, sino porque reduce incertidumbre operativa.",
          "Aprender primero con coches m?s legibles es una forma inteligente de proteger capital y errores."
        ]
      },
      {
        title: "Coches USA y documentaci?n delicada",
        paragraphs: [
          "Los coches con documentaci?n USA o situaciones documentales raras pueden dar guerra en homologaci?n y matriculaci?n. Si tu objetivo es vender o matricular en Espa?a, ese riesgo no suele compensar cuando aun est?s construyendo criterio.",
          "No significa que no exista negocio ah?. Significa que no es la mejor escuela para empezar."
        ]
      },
      {
        title: "Airbag, ?xido y golpes caros de verdad",
        paragraphs: [
          "Airbag desplegado casi siempre significa m?s que una pieza. Puede implicar sensores, cinturones, centralita, salpicadero y una factura que crece segun avanzas.",
          "El ?xido fuerte, por su parte, es de los problemas m?s traicioneros porque toca bajos, estructura, ITV y tiempo de taller. Es un da?o que parece menos dramatico en foto de lo que luego cuesta resolver."
        ],
        bullets: [
          "Airbag: coste en cascada.",
          "?xido: problema caro y poco agradecido.",
          "Golpes que afectan seguridad vial: mala base para salir circulando."
        ]
      },
      {
        title: "Los coches demasiado baratos",
        paragraphs: [
          "Un coche de 2 a 500 euros llama muchisimo la atenci?n, pero comis??n, transporte, matriculaci?n, reparaci?n y tiempo pueden comerse la operaci?n entera. Solo tienen sentido cuando hay una estrategia clara detras.",
          "Ese contexto puede ser alto valor en Espa?a, piezas, cliente previo o caso muy medido. Sin eso, el precio ultra bajo suele ser m?s anzuelo que ventaja."
        ],
        example: {
          title: "Pregunta que manda",
          text: "No preguntes solo si el coche es barato. Pregunta si sigue siendo bueno cuando sumas lo que cuesta ponerlo en la calle."
        }
      },
      {
        title: "Si no puede circular, cambia todo",
        paragraphs: [
          "Faro roto, piloto roto, puerta que no cierra, rueda o eje tocado, perdidas de liquidos o da?os peligrosos cambian la salida completa del vehiculo. Si no puede circular, el transporte deja de ser opcion secundaria y pasa a ser condicion central.",
          "Eso debe saberse antes de pujar. No despues."
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
      "C?mo pensar la salida del coche antes de pujar y cuando tiene sentido hablar de placas rojas, Clicktrans o grua directa.",
    learning: [
      "Decidir si el coche puede salir circulando o necesita transporte.",
      "Entender el papel real de las placas rojas.",
      "Comparar Clicktrans con transporte directo."
    ],
    bullets: [
      "Copart determina muchas veces si el coche puede salir circulando.",
      "Las placas rojas ayudan, pero no convierten un coche inseguro en apto.",
      "La pregunta correcta antes de pujar es c?mo lo vas a sacar de all?."
    ],
    quote:
      "Antes de pujar no preguntes solo cu?nto cuesta. Pregunta c?mo lo vas a sacar de all?.",
    miniChecklist: [
      "Pensar la salida antes de meter una puja.",
      "Confirmar si el coche puede circular con seguridad.",
      "Comparar Clicktrans y transporte directo.",
      "Tener lista la autorizacion y los datos de recogida."
    ],
    sections: [
      {
        title: "Primero decide si puede moverse o no",
        paragraphs: [
          "Antes de pujar, no basta con calcular da?os y comis??n. Tambi?n hay que pensar si el coche podra salir rodando o si necesitara grua desde el minuto uno.",
          "Copart suele tener la ?ltima palabra en muchas salidas y, adem?s, normalmente prefieren que el coche salga con grua cuando hay dudas claras."
        ]
      },
      {
        title: "Placas rojas: ?tiles, pero no m?gicas",
        paragraphs: [
          "Las placas rojas son ?tiles cuando el coche est? seguro para circular y toda la operaci?n documental cuadra. Lo que no hacen es convertir un vehiculo dañado o peligroso en algo apto para carretera.",
          "Por eso deben verse como herramienta, no como excusa para forzar una salida dudosa."
        ],
        alert: {
          tone: "alert",
          label: "Punto importante",
          text: "Si el coche no est? para circular con seguridad, hablar de placas rojas no soluciona el problema. Solo lo maqu?lla."
        }
      },
      {
        title: "Clicktrans y transporte directo",
        paragraphs: [
          "Clicktrans permite publicar el trayecto y dejar que varios transportistas pujen por tu pedido. Tiene valor porque te da comparacion de precios y te ayuda a tantear mercado sin cerrar nada demasiado pronto.",
          "La alternativa es buscar grua o transportista directo, acordar precio, pasar autorizacion y datos de recogida y moverlo a tu ubicaci?n con una cadena m?s controlada."
        ],
        bullets: [
          "Clicktrans: comparativa y competencia entre transportistas.",
          "Directo: m?s control si ya tienes proveedor o ruta clara."
        ]
      },
      {
        title: "Documentaci?n y coordinaci?n",
        paragraphs: [
          "La documentaci?n suele enviarse al recoger el vehiculo, por lo que no conviene asumir que todo llegara antes ni montar el transporte con informacion incompleta.",
          "Cu?nto mejor cierres direcci?n, fecha, contacto y datos del vehiculo, menos posibilidades hay de que la recogida se convierta en una cadena de llamadas y retrasos."
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
      "Cerrar la operaci?n con una rutina repetible.",
      "Reducir errores por prisa o exceso de confianza.",
      "Convertir el curso en una forma de trabajar, no solo en teor?a."
    ],
    bullets: [
      "Antes de pujar: ficha, da?os, coste, ?ptimo, m?ximo y salida.",
      "Antes de pagar: adjudicacion, datos, justificante y plazos.",
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
          "Antes de pujar deber?as tener revisados documentos, ficha, da?os, fotos y coste aproximado. Tambi?n deber?as haber definido tu precio ?ptimo, tu m?ximo y la salida log?stica del coche.",
          "Si una de esas piezas falta, no est?s tomando una decision completa. Estas reaccionando a un precio."
        ],
        bullets: [
          "Documentos revisados.",
          "Ficha y da?os revisados.",
          "Coste aproximado calculado.",
          "?ptimo y m?ximo definidos.",
          "Transporte pensado."
        ]
      },
      {
        title: "Antes de pagar",
        paragraphs: [
          "Una vez adjudicado, toca frialdad. Confirmar adjudicacion, revisar datos de pago, enviar justificante y tener claros los plazos. Esta parte parece administrativa, pero un error aqu? te rompe la operaci?n igual que un da?o mec?nico mal leido."
        ],
        bullets: [
          "Confirmar adjudicacion.",
          "Revisar datos de pago.",
          "Guardar justificante.",
          "Tener plazos controlados."
        ]
      },
      {
        title: "Antes de recoger",
        paragraphs: [
          "La recogida necesita PIN, DNI o pasaporte, seguro temporal si aplica, placas o transporte definido, ficha guardada y fotos accesibles. Si es extranjero, el chaleco no es un detalle: es parte del minimo operativo.",
          "Todo lo que no prepares aqu?, se te puede convertir en una perdida de tiempo el d?a m?s caro para improvisar."
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
          "La salida final exige autorizacion, direcci?n de campa, datos del vehiculo, fecha clara y contacto del transportista. Esta capa es la que evita malentendidos, recogidas fall?das o coches bloqueados por informacion a med?as.",
          "El objetivo del checklist final no es convertirte en robot. Es hacer dificil que un error bas?co te arruine una buena compra."
        ],
        bullets: [
          "Autorizacion.",
          "Direcci?n de campa.",
          "Datos del vehiculo.",
          "Fecha.",
          "Contacto del transportista."
        ],
        callout: {
          tone: "note",
          label: "Uso recomendado",
          text: "Vuelve a este m?dulo cada vez que una operaci?n avance de fase. Si lo haces bien, el curso deja de ser teor?a y se convierte en sistema."
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
      "Últimas fotos clave",
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
