export const BRAND_NAME = "Ivan Imports";
export const SITE_NAME = "SubastasPro";

export const LAUNCH_PRICE = 29;
export const FUTURE_PRICE = 49;
export const STRIPE_PAYMENT_LINK =
  "https://buy.stripe.com/bJeeVea3K5Dx0fFdfy8N206";

export const WHATSAPP_NUMBER = "674 25 24 36";
export const PUBLIC_ROUTE = "/antes-de-pujar";
export const PRIVATE_ROUTE = "/curso";
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
  "Acceso personal a la formación completa por 29 € + IVA (35,09 € IVA incluido en España), con un mínimo garantizado de 18 meses y sin perjuicio de los derechos legales que te correspondan.";

export const WHATSAPP_SUPPORT_MESSAGE =
  "Hola, tengo una duda sobre SubastasPro";

export function buildWhatsAppUrl(message) {
  const digitsOnly = WHATSAPP_NUMBER.replace(/[^\d]/g, "");

  if (digitsOnly.length < 8) {
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  }

  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(message)}`;
}
