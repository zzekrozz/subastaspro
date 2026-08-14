import { LandingPage } from "@/components/landing-page";
import {
  SUBASTASPRO_PRICE_EX_VAT,
  SUBASTASPRO_PRICE_WITH_VAT_ES
} from "@/lib/site-config";

export const metadata = {
  title: "Curso práctico de subastas de vehículos",
  description:
    "Formación práctica para analizar fichas, preparar pujas y entender la operativa de Auto1 y Copart Alemania con más criterio.",
  alternates: {
    canonical: "/antes-de-pujar"
  }
};

export default function AntesDePujarLandingPage() {
  return (
    <LandingPage
      priceExVat={SUBASTASPRO_PRICE_EX_VAT}
      priceWithVatEs={SUBASTASPRO_PRICE_WITH_VAT_ES}
    />
  );
}
