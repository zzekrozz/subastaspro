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
      status: "coming-soon",
      title: "Auto1 desde dentro: precio visible, Subasta 24h y Comprar Ahora",
      description:
        "Te explico este módulo con pantalla real, ejemplos y mi forma de analizarlo.",
      duration: "12 min",
      youtubeId: ""
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
          "Las subastas de Auto1 normalmente funcionan de lunes a sábado. Los domingos no suele haber subastas activas, pero igualmente puedes entrar a mirar vehículos disponibles, revisar fichas y preparar favoritos.",
          "Esto es importante porque no hace falta esperar al momento exacto de puja para analizar. Puedes usar los días sin subasta para revisar coches, guardar opciones y preparar una estrategia.",
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
    slug: "filtros-auto1",
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
    miniChecklist: [
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
    video: {
      status: "coming-soon",
      title: "Cómo filtro coches en Auto1 para no perder tiempo",
      description: "Te explico este módulo con pantalla real, ejemplos y mi forma de analizarlo.",
      duration: "10 min",
      youtubeId: ""
    },
    sections: [
      {
        title: "Idea principal del módulo",
        body: "Los filtros de Auto1 parecen una parte simple de la plataforma, pero bien usados te ahorran muchísimo tiempo.\n\nCuando entras a Auto1 sin filtrar, puedes perderte entre cientos de coches que realmente nunca comprarías. El objetivo no es ver más vehículos, sino ver mejores vehículos para tu estrategia.\n\nFiltrar bien significa quitar ruido: marcas que no te interesan, ubicaciones complicadas, presupuestos fuera de rango, kilometrajes que no comprarías o tipos de vehículo que no tienen salida para ti.\n\nEn Auto1, los filtros son la primera criba. Antes de abrir fichas, antes de mirar fotos y antes de calcular márgenes, tienes que reducir el catálogo a coches que de verdad podrían encajar.",
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
        body: "El filtro de ubicación sirve para ver vehículos cerca de ti o buscar en una zona específica.\n\nEsto es más importante de lo que parece, porque la ubicación afecta directamente al coste real de la operación.\n\nNo es lo mismo comprar un coche cerca, en una campa que puedes recoger fácilmente, que comprarlo en otro país donde necesitas transporte, placas, documentación o más tiempo de gestión.\n\nPuedes usar la ubicación para:",
        bullets: [
          "buscar coches en España;",
          "ver vehículos cerca de tu zona;",
          "buscar en una campa concreta;",
          "reducir costes de transporte;",
          "evitar países que no controlas;",
          "planificar recogidas;",
          "buscar fuera de España si ya entiendes la logística."
        ],
        callout: {
          tone: "note",
          label: "Consejo útil",
          text: "No analices el precio del coche separado de su ubicación. Un coche barato en una campa complicada puede salir peor que uno algo más caro, pero fácil de recoger o transportar."
        }
      },
      {
        title: "2. España o fuera de España",
        body: "Auto1 te permite buscar vehículos en varios países. Esto abre oportunidades, pero también añade dificultad.\n\nSi buscas fuera de España, tienes que tener claro cómo funciona la documentación, el transporte y la matriculación.\n\nHay países donde el proceso puede ser más sencillo y otros donde conviene tener más cuidado.\n\nPor ejemplo, Suecia no suele ser una opción que recomiende para empezar. Puede requerir demostrar que el coche ha llegado a España antes de enviar documentación, normalmente mediante CMR, es decir, con transporte profesional. (Básicamente, si no mandas un CMR, no te mandan documentación, si traes el vehículo por tus propios medios es mucho lio y tiempo)\n\nEsto puede cambiar, así que lo mejor es confirmarlo siempre con tu gestor de Auto1 si ya estás inscrito.\n\nPor otro lado, Paises Bajos es de los mas interesantes si no te quieres preocupar por las matriculas de exportación, ya que al comprar un vehículo, primero tienen que preparar documentación de exportación, para eso te pedirán que rellenes un documento con tus datos, para que puedan hacer una carta de exportación a tu nombre, cuando la tengan, te la mandan a tu dirección (tarda 24/72h) y ya con esa carta podrás hacer matriculas de exportación en Holanda. Es una manera muy recomendada para empezar en subastas internacionales.",
        alert: {
          tone: "alert",
          label: "No confundas",
          text: "Que Auto1 te deje ver coches de un país no significa que ese país sea fácil para ti. El país forma parte del riesgo de la operación."
        }
      },
      {
        title: "3. Marcas y modelos: filtrar para no perder tiempo",
        body: "Uno de los filtros más útiles es el de marca y modelo.\n\nMuchas veces no quieres que te salgan ciertas marcas porque sabes que no encajan con tu tipo de compra, tu cliente o tu mercado.\n\nPor ejemplo, si no quieres ver Renault, Citroën u Opel, (normalmente yo las ignoro) puedes quitarlas de tu búsqueda y centrarte solo en marcas que sí te interesan, como Audi, Mercedes, Volkswagen, Porsche u otras que tengan sentido para ti.\n\nEsto no significa que unas marcas sean siempre buenas y otras siempre malas. Significa que tú tienes que buscar según tu estrategia.\n\nSi filtras por marcas que realmente comprarías, haces una búsqueda más exacta, abres menos fichas inútiles y pierdes mucho menos tiempo.",
        callout: {
          tone: "note",
          label: "Idea clave",
          text: "Filtrar marcas no es cerrarte oportunidades. Es evitar revisar coches que sabes que probablemente no vas a comprar."
        }
      },
      {
        title: "4. Año, kilometraje y rango de precio",
        body: "Estos filtros son bastante directos, pero hay que usarlos con cabeza.\n\nPuedes filtrar por:\n\nEsto dependerá de tu presupuesto, del tipo de coche que buscas y del mercado donde quieras venderlo.\n\nPor ejemplo, si buscas coches fáciles de vender, quizá no quieras pasar de cierto kilometraje. Si buscas furgonetas de trabajo, puedes aceptar más kilómetros siempre que el estado, la mecánica y el precio cuadren.\n\nCon el precio pasa algo importante: no debes filtrar solo por el dinero que tienes disponible. Tienes que dejar margen para gastos.\n\nEn Auto1, el precio visible no es el coste total.\n\nA ese precio hay que sumarle:",
        bullets: [
          "año desde y hasta;",
          "kilometraje desde y hasta;",
          "precio desde y hasta.",
          "comisión;",
          "transporte o recogida;",
          "cambio de nombre o matriculación;",
          "garantía si aplica;",
          "posibles reparaciones;",
          "limpieza;",
          "margen que quieres ganar."
        ],
        callout: {
          tone: "note",
          label: "Consejo útil",
          text: "Si tu presupuesto total es 5.000 €, no filtres coches de hasta 5.000 € como si ese fuera el precio final. Deja aire para gastos, porque si no, el coche que parece posible en pantalla puede dejar de tener sentido en la realidad."
        }
      },
      {
        title: "5. Propietarios: 1 o 2 suele ser mejor punto de partida",
        body: "El filtro de propietarios también puede ayudar.\n\nPoner 1 o 2 propietarios no significa que el coche vaya a estar perfecto, pero sí aumenta las probabilidades de encontrar una unidad más cuidada o con una vida más coherente.\n\nUn coche con muchos propietarios no tiene por qué ser malo, pero puede requerir más atención. Puede haber pasado por muchas manos, haber tenido más usos diferentes o simplemente generar menos confianza al venderlo después.\n\nEn coches premium, familiares o vehículos que quieras vender con imagen de calidad, el número de propietarios puede influir bastante en la percepción del comprador final.",
        alert: {
          tone: "alert",
          label: "No confundas",
          text: "Un coche de un solo propietario no es automáticamente buena compra. Es una señal positiva, no una garantía."
        }
      },
      {
        title: "6. Combustible, cambio y carrocería",
        body: "Estos filtros dependen completamente de lo que estés buscando.\n\nPuedes filtrar por:\n\nNo hay una configuración perfecta para todos. Depende de tu cliente, tu zona, tu presupuesto y tu forma de vender.\n\nSi estás buscando coche para un cliente concreto, estos filtros te ayudan mucho. Si el cliente quiere automático, no pierdas tiempo mirando manuales. Si quiere SUV, no abras berlinas. Si quiere furgoneta, ve directo al tipo de vehículo que encaja.",
        bullets: [
          "diésel;",
          "gasolina;",
          "híbrido;",
          "eléctrico;",
          "manual;",
          "automático;",
          "SUV;",
          "familiar;",
          "berlina;",
          "compacto;",
          "furgoneta;",
          "vehículo comercial."
        ]
      },
      {
        title: "7. Vehículo comercial: muy útil para furgonetas",
        body: "Si compras furgonetas, el filtro de vehículo comercial es de los más importantes.\n\nYo personalmente lo uso mucho porque me ayuda a encontrar antes unidades que encajan con mi negocio.\n\nAuto1 mezcla muchos tipos de vehículos. Si no filtras bien, puedes acabar viendo turismos, SUV y coches que no tienen nada que ver con lo que buscas.\n\nCon vehículo comercial puedes encontrar más rápido:\n\nPero igual que con cualquier filtro, no basta con que sea comercial. Después hay que revisar bien la ficha.\n\nEn furgonetas hay que mirar:",
        bullets: [
          "furgonetas;",
          "derivados comerciales;",
          "vehículos de trabajo;",
          "unidades para autónomos o empresas;",
          "vehículos con posible salida profesional.",
          "plazas;",
          "clasificación;",
          "documentación;",
          "medidas;",
          "motor;",
          "uso anterior;",
          "estado interior;",
          "zona de carga;",
          "desgaste;",
          "daños;",
          "país;",
          "facilidad de matriculación o transferencia."
        ],
        callout: {
          tone: "note",
          label: "Idea clave",
          text: "El filtro de vehículo comercial te lleva al producto correcto, pero no decide por ti. Una furgoneta puede parecer buena en lista y esconder mucho desgaste en fotos o documentación."
        }
      },
      {
        title: "8. Cómo usar filtros sin cerrarte demasiado",
        body: "Filtrar demasiado puede hacer que no veas oportunidades. Filtrar demasiado poco puede hacer que pierdas horas.\n\nLa clave está en empezar con los filtros importantes y luego ajustar.\n\nUn orden práctico puede ser:\n\nDespués de eso ya puedes empezar a abrir fichas.\n\nPero abrir una ficha no significa hacer una revisión completa. Primero haces un vistazo rápido. Si algo no encaja, cierras y sigues.\n\nLa revisión profunda se reserva para coches que pasan la primera criba.",
        bullets: [
          "País o ubicación.",
          "Tipo de vehículo.",
          "Precio máximo realista.",
          "Marca o modelo si buscas algo concreto.",
          "Año.",
          "Kilometraje.",
          "Combustible.",
          "Cambio.",
          "Propietarios.",
          "Carrocería o vehículo comercial."
        ]
      },
      {
        title: "9. Lo que debes recordar de este módulo",
        body: "Los filtros no están para decorar. Son una herramienta para ahorrar tiempo y evitar coches que no encajan.\n\nLa ubicación afecta al transporte. El país afecta a la documentación. El precio visible no es el coste total. Las marcas y modelos deben encajar con tu mercado. El kilometraje y el año afectan a la venta final. El tipo de vehículo debe cuadrar con tu estrategia.\n\nLa idea no es abrir más fichas. La idea es abrir mejores fichas."
      }
    ]
  },
  {
    id: "module-5",
    slug: "ficha-auto1",
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
    miniChecklist: [
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
    video: {
      status: "coming-soon",
      title: "Mi orden real para revisar una ficha de Auto1",
      description: "Te explico este módulo con pantalla real, ejemplos y mi forma de analizarlo.",
      duration: "18 min",
      youtubeId: ""
    },
    sections: [
      {
        title: "Idea principal del módulo",
        body: "La ficha de Auto1 es donde se decide si un coche merece seguir siendo analizado o si hay que descartarlo rápido.\n\nEl error típico es entrar en una ficha y empezar mirando fotos sin orden. Eso puede funcionar alguna vez, pero si vas a revisar muchos coches, necesitas un sistema.\n\nMi orden recomendado es:\n\nLa clave es no hacer una revisión profunda desde el principio. Primero haces una criba rápida para saber si merece la pena seguir. Si el coche pasa esa primera criba, entonces ya analizas con más detalle.",
        bullets: [
          "Otras notas o comentarios.",
          "Prueba dinámica.",
          "Datos técnicos.",
          "Daños previos o accidente.",
          "Fotos principales.",
          "Fotos del apartado de daños.",
          "Documentación.",
          "Logística.",
          "Equipamiento y datos por bastidor."
        ]
      },
      {
        title: "1. Otras notas: lo primero que debes mirar",
        body: "A veces Auto1 añade un apartado de comentarios u otras notas. No siempre aparece, pero si aparece, hay que revisarlo sí o sí.\n\nEste apartado suele estar un poco más arriba de la información de prueba dinámica.\n\nPuede contener una tontería, pero también puede contener información importante. En muchos casos, si hay “otras notas”, algo relevante hay.\n\nPor eso, antes de mirar fotos bonitas o calcular margen, conviene revisar si existe este apartado.",
        callout: {
          tone: "note",
          label: "Consejo útil",
          text: "Si hay otras notas, léelas antes de enamorarte del coche. A veces una línea pequeña te ahorra media hora de análisis."
        }
      },
      {
        title: "2. Prueba dinámica: cómo pudieron probar el coche",
        body: "Después de otras notas, yo bajo directamente a la información de prueba dinámica.\n\nEsta parte te dice cómo pudieron probar el coche mecánicamente:\n\nPara mí es una de las zonas más importantes de la ficha, porque puede enseñarte problemas antes de perder tiempo revisando todo lo demás.",
        bullets: [
          "si se dieron una vuelta;",
          "si cambian bien las marchas;",
          "si hay ruidos de motor;",
          "si hay ruidos de caja de cambios;",
          "si hay problemas al frenar;",
          "si aparecen testigos;",
          "si el coche pudo circular;",
          "si detectaron algo raro."
        ]
      },
      {
        title: "3. Problemas que normalmente no me asustan tanto",
        body: "Hay incidencias que pueden aparecer en la prueba dinámica y no siempre son graves.\n\nPor ejemplo:\n\nEl aire acondicionado muchas veces se puede revisar en un taller tipo Norauto o similar. No siempre es barato, pero no tiene por qué ser un motivo automático para descartar.\n\nEl GPS o navegador suele ser un problema menor, sobre todo si no afecta a la mecánica.\n\nEl ruido de ruedas muchas veces puede ser rodamiento. No es ideal, pero normalmente no es una avería que destruya la operación si el margen lo permite.\n\nLos frenos desgastados o con chirrido suelen ser gasto menor, aunque si vas a traer el coche conduciendo conviene arreglarlo antes.",
        bullets: [
          "aire acondicionado que no enfría;",
          "compresor de aire acondicionado que no arranca;",
          "navegador GPS que no funciona;",
          "falta de disco original del GPS;",
          "asientos calefactables que no funcionan;",
          "ruido de ruedas;",
          "frenos que chirrían;",
          "frenos desgastados;",
          "ruidos interiores, especialmente en furgonetas."
        ],
        alert: {
          tone: "alert",
          label: "No confundas",
          text: "Que una incidencia sea menor no significa que dé igual. Significa que tienes que ponerle coste y decidir si el margen sigue teniendo sentido."
        }
      },
      {
        title: "4. Testigos y velocímetro: mirar siempre el cuadro",
        body: "Si aparece algo relacionado con velocímetro, testigo de avería encendido o luces en el cuadro, hay que revisar fotos del cuadro.\n\nNo todos los testigos tienen la misma gravedad.\n\nAlgunas veces puede ser una luz fundida, poco combustible o un aviso menor.\n\nPero si ves testigo de motor, ABS, airbag u otros avisos importantes, hay que tener mucho más cuidado.\n\nEl testigo motor puede ser muchas cosas. Puede ser algo sencillo o puede ser una avería seria. Aquí depende de:\n\nABS y airbag suelen ser más delicados, sobre todo si quieres vender el coche rápido y sin complicarte.",
        bullets: [
          "margen que tengas;",
          "modelo del coche;",
          "si conoces ese motor;",
          "si tienes taller de confianza;",
          "si puedes asumir el riesgo;",
          "si el precio compensa."
        ],
        callout: {
          tone: "note",
          label: "Consejo útil",
          text: "Cuando la ficha mencione testigos, no sigas analizando como si nada. Busca la foto del cuadro y confirma exactamente qué aparece."
        }
      },
      {
        title: "5. Datos técnicos: año, kilómetros, potencia y país",
        body: "Después de revisar notas y prueba dinámica, toca mirar los datos técnicos.\n\nAquí debes revisar:\n\nOjo con país de origen y país de última matriculación.\n\nRevisa tambien año de matriculación y año de fabricación, pueden variar.\n\nNormalmente, el país de última matriculación suele coincidir con el país donde está el vehículo, pero hay excepciones.\n\nTambién puede haber errores en país de origen. Por eso no basta con leer el resumen: hay que mirar la documentación.",
        bullets: [
          "año;",
          "kilómetros;",
          "potencia;",
          "combustible;",
          "cambio;",
          "país de origen;",
          "país de última matriculación;",
          "documentación disponible;",
          "emisiones;",
          "clasificación si aplica;",
          "datos relevantes para matriculación."
        ]
      },
      {
        title: "6. Daños previos o accidente",
        body: "Auto1 puede mostrar información de daños previos o accidente.\n\nLa palabra “accidente” suena fuerte, pero no siempre significa un golpe estructural grave. Muchas veces puede ser un golpe pequeño o un daño de carrocería.\n\nLo importante es localizar ese daño en la ficha y ver si tiene sentido.\n\nNormalmente los detalles aparecen más abajo, en el apartado de daños, y suelen ser de carrocería o interior. No siempre es algo mecánico.\n\nAquí hay que mirar:",
        bullets: [
          "dónde está el daño;",
          "si afecta a estructura;",
          "si afecta a seguridad;",
          "si se ve reparado;",
          "si hay descuadres;",
          "si el precio compensa;",
          "si luego será fácil venderlo."
        ],
        alert: {
          tone: "alert",
          label: "No confundas",
          text: "“Accidente” no siempre significa coche destruido. Pero tampoco debes ignorarlo. Hay que localizar el daño y entenderlo."
        }
      },
      {
        title: "7. Fotos principales: primer vistazo rápido",
        body: "Después de los datos, miro las fotos principales.\n\nLa primera pasada no es una revisión profunda. Es un vistazo rápido para decidir si merece la pena investigar más.\n\nBusco señales rápidas:\n\nSi en ese primer vistazo veo algo que no me gusta, cierro la ficha y sigo con otro coche.\n\nHay cientos de vehículos. No puedes hacer revisión profunda de todos.",
        bullets: [
          "golpe fuerte;",
          "descuadres evidentes;",
          "interior muy maltratado;",
          "piezas faltantes;",
          "óxido visible;",
          "luna rota o chinazo fuerte;",
          "daños que no quiero asumir;",
          "estado general que no encaja con el precio."
        ]
      },
      {
        title: "8. Fotos de daños: donde muchas veces está la verdad",
        body: "En Auto1 las fotos aparecen normalmente en dos zonas:\n\nEsto es muy importante.\n\nUna ficha puede tener solo 5 o 7 fotos principales, pero luego tener muchas más fotos dentro del apartado de daños.\n\nHay que revisar las dos partes.\n\nMuchas veces, el detalle que explica por qué un coche está barato no aparece en la galería principal. Aparece abajo, en daños.",
        bullets: [
          "Fotos principales.",
          "Apartado de daños."
        ],
        callout: {
          tone: "note",
          label: "Consejo útil",
          text: "Antes de pujar, mira todas las fotos. No solo las principales. Muchas veces el problema estaba en ficha, pero había que fijarse mejor."
        }
      },
      {
        title: "9. Cuándo mirar precios de mercado",
        body: "Después del primer vistazo rápido, si el coche más o menos convence, entonces tiene sentido mirar precios de mercado.\n\nPuedes comparar en Milanuncios, Wallapop, Coches.net o las plataformas que uses.\n\nNo recomiendo hacer una revisión profunda completa antes de mirar mercado, porque puedes perder mucho tiempo y luego descubrir que no hay margen.\n\nPero tampoco conviene mirar mercado demasiado pronto sin revisar nada, porque quizá el precio parece bueno y luego el coche tiene motor roto, falta de asientos, óxido fuerte o un problema que lo descarta.\n\nEl orden inteligente es:",
        bullets: [
          "Notas.",
          "Prueba dinámica.",
          "Datos.",
          "Fotos rápidas.",
          "Fotos de daños.",
          "Precio de mercado.",
          "Revisión profunda si todo empieza a cuadrar."
        ],
        callout: {
          tone: "note",
          label: "Idea clave",
          text: "Primero descarta lo obvio. Luego mira mercado. Después revisa a fondo. No al revés."
        }
      },
      {
        title: "10. Revisión profunda: detalles que hay que buscar",
        body: "Si el coche sigue encajando, toca revisar más a fondo.\n\nAquí ya miras con lupa:\n\nLiteralmente tienes que buscar cosas raras.\n\nHay casos donde compras un coche, luego detectas un problema y piensas que no estaba en la ficha. Abres de nuevo la ficha y estaba, pero había que fijarse mejor.\n\nEso pasa. Por eso las fotos se miran todas y bien antes de pujar.",
        bullets: [
          "descuadres de carrocería;",
          "golpes mal reparados;",
          "pintura rara;",
          "interior muy gastado;",
          "botones rotos;",
          "climatizador o aire acondicionado;",
          "estado de volante y asientos;",
          "luna y chinazos;",
          "óxido;",
          "modificaciones;",
          "documentación;",
          "historial si aparece;",
          "fotos del cuadro;",
          "equipamiento;",
          "datos por bastidor."
        ]
      },
      {
        title: "11. Documentación: especialmente si es extranjera",
        body: "Si el coche viene de fuera de España, la documentación hay que mirarla bien.\n\nConviene traducirla si hace falta, porque puede contener información importante para ITV, matriculación o homologación.\n\nHay que revisar especialmente:\n\nEn furgonetas de 2012 o anteriores, y en coches de Holanda, hay que prestar especial atención a la homologación europea en la letra K.\n\nTambién puede pasar que un coche no tenga homologación europea porque viene de fuera de la UE.",
        bullets: [
          "homologación europea ( letra K )",
          "datos técnicos;",
          "modificaciones (MUY IMPORTANTE)",
          "documentación disponible;",
          "historial de mantenimiento si aparece;",
          "kilómetros de ITV si se pueden comprobar."
        ],
        callout: {
          tone: "note",
          label: "Consejo útil",
          text: "Si ves documentación extranjera, no la pases por encima. Tradúcela, revisa la letra K y confirma que no hay algo que luego te complique la ITV o la matriculación."
        }
      },
      {
        title: "12. Modificaciones y tuning",
        body: "A veces un coche tiene modificaciones.\n\nAuto1 puede añadir un apartado llamado “tuning” dentro de los datos del vehículo, con una descripción de lo que se modificó.\n\nEsto es importante porque una modificación puede darte problemas para pasar ITV en España.\n\nPuede ser algo simple o puede ser algo que complique mucho la operación.\n\nRevisa:\n\nNo todo tuning es malo, pero hay que saber lo que estás comprando.",
        bullets: [
          "suspensión;",
          "llantas;",
          "escapes;",
          "carrocería;",
          "interiores modificados;",
          "camperizaciones;",
          "elementos no originales;",
          "cambios que puedan requerir homologación."
        ]
      },
      {
        title: "13. Logística dentro de la ficha",
        body: "Debajo de las fotos suele aparecer el apartado de logística.\n\nAhí Auto1 puede mostrar opciones para transportar el coche:\n\nEsto también forma parte del análisis.\n\nUn coche puede tener margen en precio, pero si la logística sube demasiado, el margen se va.",
        bullets: [
          "a una dirección tuya;",
          "a la campa de Auto1 más cercana;",
          "recogida gratuita si vas tú o tu transportista."
        ]
      },
      {
        title: "14. Equipamiento y datos por bastidor",
        body: "Al final de la ficha suele aparecer el equipamiento del coche y datos según bastidor.\n\nEsto puede ayudarte a confirmar extras, versión, acabado o equipamiento real.\n\nTambién puede ser útil para detectar oportunidades. A veces un coche tiene extras que no se ven bien en las fotos o que no están destacados en el título.\n\nEn coches premium, el equipamiento puede cambiar bastante el precio de venta."
      },
      {
        title: "15. Lo que debes recordar de este módulo",
        body: "Analizar una ficha de Auto1 no es mirar fotos bonitas. Es seguir un orden.\n\nPrimero miras si hay notas. Luego prueba dinámica. Después datos técnicos, daños, fotos, documentación, logística y equipamiento.\n\nNo hay que revisar todos los coches a fondo. Hay que descartar rápido los que no encajan y profundizar solo en los que empiezan a tener sentido.\n\nLa ficha no te da información perfecta. Te da pistas. Tu trabajo es unirlas."
      }
    ]
  },
  {
    id: "module-6",
    slug: "recogida-auto1",
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
      "La regla de las 15:00 puede cambiar el día real de recogida.",
      "Si algo importante no coincide con la ficha, conviene reclamar antes de sacar el coche."
    ],
    quote: "La mejor recogida es la que ya está planificada antes de comprar.",
    miniChecklist: [
      "¿He recibido datos de pago?",
      "¿He mandado justificante al gestor?",
      "¿El pago está confirmado?",
      "¿He elegido día de recogida?",
      "¿He tenido en cuenta la regla de las 15:00?",
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
    video: {
      status: "coming-soon",
      title: "Pago, PIN, regla 15:00 y recogida en campa",
      description: "Te explico este módulo con pantalla real, ejemplos y mi forma de analizarlo.",
      duration: "10 min",
      youtubeId: ""
    },
    sections: [
      {
        title: "Idea principal del módulo",
        body: "Ganar o comprar un coche en Auto1 no es el final de la operación. Es el principio de la parte logística.\n\nDespués de comprar, tienes que pagar, confirmar, elegir recogida, recibir instrucciones, organizar transporte o seguro, revisar el coche en campa y estar preparado para reclamar si algo no coincide con la ficha.\n\nUna mala recogida puede convertir una buena compra en una operación incómoda. Por eso conviene entender el proceso antes de comprar."
      },
      {
        title: "1. Después de ganar o comprar",
        body: "Cuando ganas una puja o compras un vehículo en Auto1, normalmente la app o la plataforma te muestra los datos de pago unas horas después.\n\nNo siempre aparece todo al instante, así que hay que esperar confirmación.\n\nCuando tengas los datos, haces el pago y conviene mandar el justificante a tu gestor comercial de Auto1. Esto puede ayudar a acelerar la confirmación.\n\nLa idea es que Auto1 vea que el pago está hecho y puedas avanzar antes a la fase de recogida.",
        callout: {
          tone: "note",
          label: "Consejo útil",
          text: "No esperes pasivamente si tienes prisa. Cuando pagues, manda justificante al gestor. A veces eso ayuda a mover la operación más rápido."
        }
      },
      {
        title: "2. Elegir día de recogida",
        body: "Cuando el pago está confirmado, puedes elegir día de recogida.\n\nAquí hay una regla práctica importante: si quieres recoger al día siguiente, normalmente tienes que seleccionar la recogida antes de las 15:00.\n\nSi lo haces después, puede pasar al siguiente día hábil.\n\nEjemplo:\n\nEsto puede variar según campa, país o proceso, pero como regla práctica conviene tenerlo en cuenta.",
        bullets: [
          "Lunes antes de las 15:00: podrías seleccionar martes.",
          "Lunes después de las 15:00: quizá ya solo te deja miércoles.",
          "Viernes antes de las 15:00: podrías seleccionar lunes.",
          "Viernes después de las 15:00: probablemente martes."
        ],
        callout: {
          tone: "note",
          label: "Idea clave",
          text: "La hora a la que confirmas recogida puede cambiar el día en que puedes sacar el coche."
        }
      },
      {
        title: "3. PIN, cita e instrucciones",
        body: "Según la campa, Auto1 puede mandarte un PIN code o instrucciones concretas por correo.\n\nEse PIN es importante porque normalmente lo necesitarás para recoger el coche.\n\nEn algunas campas extranjeras, por ejemplo en Bélgica, puede que tengas que registrarte en una web externa o seleccionar día y hora en un sistema aparte.\n\nPor eso no basta con pagar. Hay que leer bien los correos e instrucciones de recogida.\n\nAntes de salir hacia la campa, revisa:",
        bullets: [
          "dirección exacta;",
          "horario;",
          "PIN;",
          "documentación que debes llevar;",
          "si hace falta cita;",
          "si hay instrucciones especiales;",
          "si el transportista necesita autorización;",
          "si la campa exige chaleco reflectante u otras normas."
        ]
      },
      {
        title: "4. Recogida en España",
        body: "Si el coche está en España y vas tú a recogerlo, el proceso suele ser más sencillo.\n\nNormalmente vas a la campa, das el PIN y enseñas tu DNI. Después te sacan el vehículo o te indican dónde está.\n\nAntes de llevártelo, revisa visualmente el coche y arráncalo.\n\nComprueba:\n\nNo te vayas rápido sin mirar. La campa no es el sitio para hacer una revisión de taller, pero sí para detectar si algo gordo no coincide.",
        bullets: [
          "que el coche está;",
          "que corresponde con la ficha;",
          "que arranca;",
          "que no hay un daño enorme no anunciado;",
          "que el interior coincide;",
          "que las llaves están;",
          "que no falta algo importante;",
          "que el cuadro no muestra algo inesperado;",
          "que los daños visibles coinciden con lo anunciado."
        ]
      },
      {
        title: "5. Si algo no coincide con la ficha",
        body: "Si ves un problema importante que no estaba anunciado, no te lleves el coche sin más.\n\nVe a la oficina o recepción de la campa y comunica el problema.\n\nLo ideal es reclamar en el momento, con fotos y explicación clara.\n\nEjemplos de cosas que deberías revisar antes de salir:",
        bullets: [
          "daño fuerte no anunciado;",
          "pieza importante faltante;",
          "coche que no arranca si la ficha decía que sí;",
          "testigo grave no indicado;",
          "interior muy diferente a fotos;",
          "cristal roto no anunciado;",
          "documentación o llaves que faltan;",
          "daño de transporte o campa."
        ],
        callout: {
          tone: "note",
          label: "Consejo útil",
          text: "Si el problema es importante, reclama antes de sacar el coche. Una vez fuera, todo se complica más."
        }
      },
      {
        title: "6. Transporte con Auto1 o transportista independiente",
        body: "Puedes contratar transporte con Auto1 si la plataforma lo ofrece, o usar un transportista independiente.\n\nSi usas transportista independiente, necesitará:\n\nPara transporte independiente, una opción útil es Clicktrans, donde transportistas pueden pujar por el trayecto.\n\nTambién puedes buscar transportistas directamente y cerrar precio con ellos.\n\nLa decisión depende del país, distancia, coste y urgencia.",
        bullets: [
          "PIN;",
          "autorización;",
          "datos de campa;",
          "fecha de recogida;",
          "contacto si hace falta;",
          "instrucciones concretas."
        ]
      },
      {
        title: "7. Seguro temporal si vas conduciendo",
        body: "Si vas a sacar el coche conduciendo, necesitas seguro.\n\nPuedes hacer seguro temporal en páginas como Terranea, Segurospordia u opciones similares, por ejemplo Terranea es mas barato, pero Segurospordia aseguran matriculas extranjeras.\n\nEsto puede servir para mover el coche desde la campa hasta tu ubicación o taller.\n\nAntes de conducir, asegúrate de tener el seguro temporal, despues ve directamente a la gasolinera mas cercana, comprueba estado de neumáticos sobre todo, que suele ser lo mas peligroso.",
        alert: {
          tone: "alert",
          label: "No confundas",
          text: "Que puedas arrancar el coche no significa que debas conducirlo. Si hay frenos mal, ruedas peligrosas, faros rotos o daños graves, mejor transporte. ##"
        }
      },
      {
        title: "8. Recogida en el extranjero",
        body: "Si compras fuera de España, la recogida requiere más planificación.\n\nNormalmente tienes varias opciones:\n\nSi tienes placas rojas de empresa y el coche está en condiciones de circular, puede ser una opción.\n\nSi no, tendrás que valorar transporte o placas de exportación según el país.\n\nEn Alemania, por ejemplo, con documentación puedes tramitar placas de exportación, pero hay que tener en cuenta requisitos como ITV válida y documentación completa.\n\nEn Holanda, pueden enviar documentación de exportación a tu nombre para poder hacer placas dentro de un plazo concreto.\n\nEn Francia, muchas veces el coche mantiene matrículas francesas y puede ser posible hacer seguro temporal, pero conviene viajar con la documentación francesa ya recibida.\n\nCada país tiene sus reglas.",
        bullets: [
          "transporte hasta España;",
          "placas rojas de empresa;",
          "placas de exportación del país;",
          "esperar documentación y tramitar placas;",
          "que un transportista lo recoja con camión."
        ],
        callout: {
          tone: "note",
          label: "Consejo útil",
          text: "Antes de comprar fuera de España, ten decidido cómo vas a sacar el coche: transporte, placas rojas, placas de exportación o seguro temporal. No lo decidas después de pagar."
        }
      },
      {
        title: "10. Cosas que conviene llevar a campa",
        body: "Si vas tú personalmente, lleva:\n\nEn algunas campas extranjeras pueden exigir chaleco reflectante u otras normas de seguridad.",
        bullets: [
          "DNI o pasaporte;",
          "PIN de recogida;",
          "justificante o instrucciones;",
          "autorización si hace falta;",
          "móvil con batería;",
          "chaleco reflectante;",
          "seguro temporal si vas conduciendo;",
          "herramientas básicas si lo ves necesario;",
          "compresor o arrancador si sueles trabajar con coches parados;",
          "contacto de la campa;",
          "contacto del gestor."
        ]
      },
      {
        title: "11. Lo que debes recordar de este módulo",
        body: "La recogida forma parte de la compra.\n\nNo basta con ganar barato. Hay que sacar el coche bien, con documentación, seguro o transporte, y revisando que coincide con la ficha.\n\nSi compras en España, el proceso suele ser más fácil. Si compras fuera, hay que pensar antes en placas, transporte, documentación y tiempos.\n\nLa mejor recogida es la que ya está planificada antes de comprar."
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
        ],
        images: [
          {
            src: "/course-images/copart/r-s-sin-letra-copart.jpg",
            alt: "Captura de la lista de Copart con indicadores R, S y sin letra",
            label: "Indicadores Copart",
            caption:
              "R, S o sin letra cambian mucho el riesgo. No significan lo mismo y conviene entenderlo antes de pujar.",
            layout: "single",
            blurSensitive: true
          }
        ]
      },
      {
        title: "Datos que valen oro",
        paragraphs: [
          "Odómetro, valor orientativo del mercado alemán, ZB1/ZB2, COC e International Documents son campos que mueven decisiones reales. El valor orientativo puede servirte como referencia, pero no compra el coche por ti ni garantiza salida.",
          "Lo importante es entender que ese lote no se decide solo por precio. Se decide por la combinación entre daño, papeles, logística, posibilidad de circular y coste total de ponerlo en tu operativa."
        ],
        images: [
          {
            src: "/course-images/copart/zb-coc-international-documents.jpg",
            alt: "Captura de ZB1, ZB2, COC o International Documents en Copart",
            label: "Documentación Copart",
            caption:
              "ZB1, ZB2, COC o International Documents pueden cambiar la facilidad de matriculación y transporte.",
            layout: "single",
            blurSensitive: true
          }
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
        images: [
          {
            src: "/course-images/copart/ultimas-fotos-danos.jpg",
            alt: "Captura de las últimas fotos de daños en una ficha de Copart",
            label: "Fotos clave",
            caption:
              "En Copart, las últimas fotos suelen enseñar el daño importante. Cada foto suele estar puesta por algo.",
            layout: "single",
            blurSensitive: true
          }
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
        ],
        images: [
          {
            src: "/course-images/copart/primary-secondary-damage.jpg",
            alt: "Captura de primary damage y secondary damage en Copart",
            label: "Daños Copart",
            caption:
              "Primary damage y secondary damage ayudan a ordenar el riesgo, pero siempre hay que contrastarlo con las fotos.",
            layout: "single",
            blurSensitive: true
          }
        ]
      },
      {
        title: "Granizo: por qué a veces interesa",
        paragraphs: [
          "El granizo puede ser de los daños más interesantes porque a menudo baja el precio y no toca la mecánica. Pero no se puede meter todo en el mismo saco: hay grados y casos.",
          "Lo bueno del granizo es que obliga menos a imaginar averias ocultas mecánicas. Lo delicado es medir si el daño estetico, el contexto del coche y el precio siguen cuadrando."
        ],
        images: [
          {
            src: "/course-images/copart/granizo-copart.jpg",
            alt: "Captura de un ejemplo de daños por granizo en Copart",
            label: "Oportunidad",
            caption:
              "El granizo puede bajar mucho el precio sin afectar necesariamente a la mecánica, pero hay que calcular reparación y salida comercial.",
            layout: "single",
            blurSensitive: true
          }
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
