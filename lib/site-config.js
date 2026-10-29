export const BRAND_NAME = "Ivan Imports";
export const SITE_NAME = "SubastasPro";

export const SUBASTASPRO_PRICE_EX_VAT = 99;
export const SUBASTASPRO_PRICE_WITH_VAT_ES = "119,79";

export const WHATSAPP_NUMBER = "674 25 24 36";
export const PUBLIC_ROUTE = "/antes-de-pujar";
export const PRIVATE_ROUTE = "/curso";
export const LOGIN_ROUTE = "/entrar";
export const ADMIN_ROUTE = "/curso/admin";
export const PRINT_ROUTE = "/checklist-subastas-pdf";
export const PDF_DOWNLOAD_PATH =
  "/downloads/checklist-subastas-antes-de-pujar.pdf";

export const STORAGE_KEYS = {
  completedModules: "antes-de-pujar-completed-modules",
  auto1Checklist: "antes-de-pujar-auto1-checklist",
  pickupChecklist: "antes-de-pujar-pickup-checklist",
  activeTool: "antes-de-pujar-active-tool"
};

export const PRICE_COPY =
  `Acceso personal a la formación completa por ${SUBASTASPRO_PRICE_EX_VAT} € + IVA (${SUBASTASPRO_PRICE_WITH_VAT_ES} € IVA incluido en España), con un mínimo garantizado de 18 meses y sin perjuicio de los derechos legales que te correspondan.`;

export const WHATSAPP_SUPPORT_MESSAGE =
  "Hola, tengo una duda sobre SubastasPro";

export function buildWhatsAppUrl(message) {
  const digitsOnly = WHATSAPP_NUMBER.replace(/[^\d]/g, "");

  if (digitsOnly.length < 8) {
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  }

  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(message)}`;
}

/** Aviso de requisitos para participar en subastas (landing y página de compra). */
export const auctionEligibilityNotice = {
  title: "Aviso importante antes de comprar",
  text:
    "Para registrarte y comprar en subastas profesionales de vehículos como Auto1 o Copart necesitas ser autónomo o empresa con la actividad adecuada dada de alta. Puedes comprar el curso para aprender aunque todavía seas particular, pero como particular no podrás participar en las subastas.",
  short:
    "Para pujar necesitas ser autónomo o empresa con la actividad adecuada. Como particular puedes aprender con el curso, pero no participar en las subastas."
};
