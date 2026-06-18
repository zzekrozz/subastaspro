export const heroChips = [
  "Auto1 incluido",
  "Copart Alemania incluido",
  "BCA proximamente",
  "5 herramientas interactivas",
  "PDF descargable"
];

export const problemCards = [
  "Fichas que no sabes interpretar",
  "Danos que parecen pequenos pero pueden ser caros",
  "Documentacion que puede complicar la operacion",
  "Pujas donde te calientas de 100 en 100",
  "Recogida, placas y transporte mal planificados"
];

export const learningCards = [
  "Requisitos para entrar en subastas",
  "Diferencia entre compra clasica y subasta",
  "Como funcionan las fichas",
  "Como usar filtros en Auto1",
  "Como revisar prueba dinamica, fotos, danos y documentacion",
  "Como funciona la recogida en Auto1",
  "Como funciona Copart Alemania",
  "Que significan R, S y sin letra en Copart",
  "Como preparar una puja sin calentarte",
  "Que coches evitar",
  "Transporte, placas rojas y Clicktrans"
];

export const platforms = [
  {
    title: "Auto1",
    status: "Incluido",
    description:
      "Subasta 24h, Comprar Ahora, favoritos, notas, bajadas, fichas, logistica y recogida."
  },
  {
    title: "Copart Alemania",
    status: "Incluido",
    description:
      "Vehiculos danados, R/S/sin letra, ZB1/ZB2, COC, danos, puja en vivo, reserva, pago y recogida."
  },
  {
    title: "BCA",
    status: "Proximamente",
    description: "Proximamente como actualizacion incluida."
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
      "Combina indicadores clave y devuelve una lectura practica del lote."
  },
  {
    icon: "EUR",
    title: "Calculadora basica de coste de compra",
    description: "Recuerda que el precio de puja no es el coste real."
  },
  {
    icon: "MAX",
    title: "Optimo vs maximo",
    description: "Define tus limites antes de entrar en una puja en vivo."
  }
];

export const audienceYes = [
  "Autonomos o empresas de compraventa",
  "Personas que quieren empezar a comprar en subastas",
  "Profesionales que quieren entender mejor Auto1 y Copart",
  "Gente que no quiere entrar a ciegas"
];

export const audienceNo = [
  "Quien busca dinero facil",
  "Quien quiere comprar sin analizar",
  "Quien cree que una subasta garantiza chollos",
  "Quien no acepta que en coches usados siempre hay riesgo"
];

export const faqs = [
  {
    question: "Necesito ser autonomo o empresa?",
    answer:
      "Para muchas subastas profesionales si. Normalmente piden IAE, DNI/CIF y datos de autonomo o empresa."
  },
  {
    question: "Hay login?",
    answer:
      "En esta primera version el acceso es mediante enlace y clave privada, sin login complejo."
  },
  {
    question: "El curso promete ganar dinero?",
    answer:
      "No. Ensenia a analizar mejor y evitar errores, pero cada compra tiene riesgo."
  },
  {
    question: "Se actualizara?",
    answer:
      "Si. Los alumnos fundadores mantienen acceso a futuras mejoras."
  },
  {
    question: "Incluye PDF?",
    answer:
      "Si. Incluye checklist descargable y una version imprimible para guardar como PDF."
  },
  {
    question: "BCA esta incluido?",
    answer:
      "BCA aparecera como actualizacion proximamente. La primera edicion se centra en Auto1 y Copart Alemania."
  }
];

export const auto1ChecklistItems = [
  "He revisado otras notas/comentarios",
  "He revisado prueba dinamica",
  "He revisado datos tecnicos",
  "He revisado danos previos/accidente",
  "He revisado fotos principales",
  "He revisado fotos del apartado danos",
  "He revisado foto del cuadro/testigos",
  "He revisado documentacion",
  "He revisado letra K/COC si aplica",
  "He revisado pais de origen y ultima matriculacion",
  "He revisado logistica/transporte",
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
  { term: "R verde", description: "Arranca, engrana y se mueve hacia delante y atras." },
  { term: "S azul", description: "Arranca y engrana, pero no se confirma que se mueva." },
  { term: "Sin letra", description: "Normalmente implica mas riesgo y menos informacion util." },
  { term: "ZB1/ZB2", description: "Documentacion alemana grande y pequena del vehiculo." },
  { term: "COC", description: "Certificate of Conformity para facilitar homologacion." },
  { term: "International Documents", description: "Documentacion fuera de Alemania que exige mas revision." },
  { term: "Primary damage", description: "Dano principal declarado en la ficha." },
  { term: "Secondary damage", description: "Dano secundario que puede cambiar la operacion." },
  { term: "Additional info", description: "Campo donde a veces aparece la pista clave." }
];

export const copartAvoidItems = [
  "S o sin letra si estas empezando",
  "Documentacion USA o International Documents sospechoso",
  "Airbag desplegado",
  "Oxido fuerte",
  "Muy baratos sin estrategia clara",
  "No aptos para circular si quieres usar placas rojas"
];

export const courseModules = [
  {
    id: "module-1",
    title: "Requisitos para entrar en subastas",
    summary: "Que te suelen pedir antes de poder comprar en plataformas profesionales.",
    bullets: [
      "Para comprar en muchas subastas necesitas ser autonomo o empresa.",
      "Suelen pedir IAE del ano actual para comprobar la actividad.",
      "Autonomo: DNI, IAE y direccion.",
      "Empresa: CIF, IAE, direccion y a veces escrituras.",
      "Un gestor puede preparar el IAE rapido si lo necesitas."
    ]
  },
  {
    id: "module-2",
    title: "Subasta vs compra clasica",
    summary: "La diferencia real entre comprar viendo el coche y comprar leyendo informacion incompleta.",
    bullets: [
      "En compra clasica puedes ver, probar, negociar y llevar diagnosis.",
      "En subasta compras basandote en ficha, fotos, documentacion y estado general.",
      "Las fichas las hacen humanos: pueden ser buenas, vagas o incompletas.",
      "La ventaja es analizar muchos coches desde casa.",
      "La desventaja es no ver el coche fisicamente antes."
    ],
    quote:
      "En subasta no compras informacion perfecta. Compras informacion suficiente para decidir si el riesgo tiene sentido."
  },
  {
    id: "module-3",
    title: "Auto1 desde dentro",
    summary: "Como se comporta Auto1 en la practica y donde suelen aparecer oportunidades.",
    bullets: [
      "Auto1 muchas veces funciona como falsa subasta o marketplace profesional.",
      "Puedes llevarte el vehiculo por un precio parecido al visible, mas comision.",
      "Hay subastas de lunes a sabado; el domingo suele quedar para revisar vehiculos.",
      "Conviene guardar favoritos y apuntar precios en notas para detectar bajadas.",
      "Comprar Ahora suele estar algo mas caro que Subasta 24h."
    ]
  },
  {
    id: "module-4",
    title: "Filtros en Auto1",
    summary: "Los filtros que ahorran tiempo y ayudan a controlar logistica y riesgo.",
    bullets: [
      "Ubicacion y radio ayudan a controlar logistica y recogida.",
      "Marca, modelo, ano, kilometros y precio deben seguir tu estrategia.",
      "Uno o dos propietarios puede ser interesante, pero no garantiza estado.",
      "Combustible, cambio y carroceria dependen de tu mercado.",
      "Con algunos paises conviene consultar al gestor por temas de documentacion."
    ]
  },
  {
    id: "module-5",
    title: "Como analizar una ficha de Auto1",
    summary: "Orden de lectura recomendado para detectar problemas antes de pujar.",
    bullets: [
      "Empieza por otras notas, prueba dinamica y datos tecnicos.",
      "Revisa danos previos, cuadro, fotos principales y fotos del apartado danos.",
      "Busca descuadres, oxido, lunas tocadas, interior castigado y modificaciones.",
      "Mira documentacion, pais de origen y ultima matriculacion.",
      "Si aplica, revisa letra K o COC por homologacion."
    ],
    quote:
      "Muchas veces el problema estaba en la ficha, pero habia que fijarse mejor."
  },
  {
    id: "module-6",
    title: "Recogida en Auto1",
    summary: "Pago, regla 15:00, campa, PIN, seguro temporal y opciones de transporte.",
    bullets: [
      "Tras ganar, los datos de pago suelen llegar en unas horas.",
      "Si envias justificante al gestor comercial aceleras el proceso.",
      "Para recoger al dia siguiente normalmente hay que elegir antes de las 15:00.",
      "Algunas campas piden PIN o registro previo en una web externa.",
      "Puedes recoger con Auto1, transportista o placas de exportacion segun el pais."
    ]
  },
  {
    id: "module-7",
    title: "Copart Alemania",
    summary: "Base operativa para entender la plataforma y sus senales mas utiles.",
    bullets: [
      "Copart Alemania se centra en vehiculos danados y tiene mas riesgo.",
      "La licencia anual ronda los 200 euros y el acceso a particulares es mas limitado.",
      "R verde, S azul y sin letra no significan lo mismo.",
      "El valor orientativo del mercado aleman es solo una referencia, no una promesa.",
      "ZB1/ZB2, COC e International Documents importan mucho para decidir."
    ]
  },
  {
    id: "module-8",
    title: "Como revisar una ficha de Copart",
    summary: "Que mirar primero cuando la informacion es corta y las fotos mandan.",
    bullets: [
      "Revisa fotos principales y las ultimas fotos con atencion.",
      "Mira siempre el cuadro porque no siempre escriben los testigos.",
      "Busca avisos de granizo, documentos perdidos, inundacion, IVA o airbag.",
      "El dano principal y el dano secundario cambian mucho el riesgo.",
      "Si aparece dano mecanico, revisa la informacion adicional antes de ilusionarte."
    ]
  },
  {
    id: "module-9",
    title: "Pujar en Copart",
    summary: "Como preparar limites y evitar sobrepagar por emocion.",
    bullets: [
      "Se puede pujar antes, pero suele ser mejor esperar a la subasta en vivo.",
      "Los vehiculos salen uno a uno y conviene marcarlos como favoritos.",
      "Comprar Ahora solo tiene sentido si es una oportunidad muy clara.",
      "Las pujas suelen subir de 100 en 100, o menos en importes pequenos.",
      "Si no hay reserva alcanzada, puedes valorar subir oferta sin estar obligado."
    ],
    quote:
      "La subasta no te arruina de golpe. Te arruina de 100 en 100."
  },
  {
    id: "module-10",
    title: "Coches que evitaria en Copart",
    summary: "Lotes que exigen mucha experiencia o un contexto muy concreto.",
    bullets: [
      "Vehiculos con S o sin letra si estas empezando.",
      "Coches con documentacion USA o documentos poco claros.",
      "Airbag desplegado y oxido fuerte elevan mucho el riesgo.",
      "Vehiculos muy baratos sin estrategia clara suelen salir caros.",
      "Si no puede circular, calcula transporte antes de pujar."
    ]
  },
  {
    id: "module-11",
    title: "Transporte, placas y recogida en Copart",
    summary: "Cuando sacar el coche rodando y cuando asumir que toca grua.",
    bullets: [
      "Si el coche esta en condiciones, puedes valorar placas rojas.",
      "Copart puede limitar la salida circulando y preferir grua.",
      "Clicktrans permite publicar el trayecto y recibir ofertas.",
      "Tambien puedes contratar transporte directo y autorizar la recogida.",
      "La documentacion suele entregarse al recoger el vehiculo."
    ]
  },
  {
    id: "module-12",
    title: "Checklist final",
    summary: "Ultima revision antes de pujar, pagar, recoger o transportar.",
    bullets: [
      "Antes de pujar: ficha, danos, documentacion y limite claro.",
      "Antes de pagar: comision, transporte, plazos y campa.",
      "Antes de recoger: PIN, seguro, DNI, fotos e instrucciones.",
      "Antes de transportar: autorizacion, direccion, horario y estado del coche."
    ],
    quote: "Si no compras ese coche, compraras otro."
  }
];
