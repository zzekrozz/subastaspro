import { PurchaseConsentExperience } from "@/components/purchase-consent-experience";
import {
  resolveSubastasProPaymentLink,
  SUBASTASPRO_STRIPE_PAYMENT_LINK
} from "@/lib/subastaspro-product";

export const metadata = {
  title: "Comprar SubastasPro",
  description: "Revisa las condiciones y continúa al pago seguro de SubastasPro.",
  alternates: { canonical: "/comprar" }
};

export default function ComprarPage() {
  const paymentLink =
    resolveSubastasProPaymentLink(process.env.STRIPE_PAYMENT_LINK) ||
    SUBASTASPRO_STRIPE_PAYMENT_LINK;

  return <PurchaseConsentExperience paymentLink={paymentLink} />;
}
