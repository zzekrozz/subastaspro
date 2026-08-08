import { PurchaseConsentExperience } from "@/components/purchase-consent-experience";

export const metadata = {
  title: "Comprar SubastasPro",
  description: "Revisa las condiciones y continúa al pago seguro de SubastasPro.",
  alternates: { canonical: "/comprar" }
};

export default function ComprarPage() {
  return <PurchaseConsentExperience />;
}

