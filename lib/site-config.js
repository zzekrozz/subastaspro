export const BRAND_NAME = "Ivan Imports";
export const SITE_NAME = "Antes de Pujar";

export const LAUNCH_PRICE = 29;
export const FUTURE_PRICE = 49;
export const COURSE_PASSWORD = "FUNDADOR29";

export const WHATSAPP_NUMBER = "674 25 24 36";
export const PUBLIC_ROUTE = "/antes-de-pujar";
export const PRIVATE_ROUTE = "/curso-subastas-fundador";
export const PRINT_ROUTE = "/checklist-subastas-pdf";
export const PDF_DOWNLOAD_PATH =
  "/downloads/checklist-subastas-antes-de-pujar.pdf";

export const STORAGE_KEYS = {
  access: "antes-de-pujar-access",
  completedModules: "antes-de-pujar-completed-modules",
  auto1Checklist: "antes-de-pujar-auto1-checklist",
  pickupChecklist: "antes-de-pujar-pickup-checklist",
  activeTool: "antes-de-pujar-active-tool"
};

export const PRICE_COPY =
  "Esta es la primera edicion del curso. Los alumnos fundadores entran por 29 € y mantienen acceso a futuras mejoras. Cuando se anadan mas casos reales, herramientas y modulos, el precio subira a 49 €.";

export const WHATSAPP_PURCHASE_MESSAGE =
  "Hola, quiero acceso al curso Antes de Pujar por 29 €";
export const WHATSAPP_SUPPORT_MESSAGE =
  "Hola, tengo una duda sobre el curso Antes de Pujar";

export function buildWhatsAppUrl(message) {
  const digitsOnly = WHATSAPP_NUMBER.replace(/[^\d]/g, "");

  if (digitsOnly.length < 8) {
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  }

  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(message)}`;
}
