import { LandingPage } from "@/components/landing-page";
import { FUTURE_PRICE, LAUNCH_PRICE } from "@/lib/site-config";

export const metadata = {
  title: "Curso práctico de subastas de vehículos",
  description:
    "Formación práctica para analizar fichas, preparar pujas y entender la operativa de Auto1 y Copart Alemania con más criterio.",
  alternates: {
    canonical: "/antes-de-pujar"
  }
};

export default function AntesDePujarLandingPage() {
  return <LandingPage launchPrice={LAUNCH_PRICE} futurePrice={FUTURE_PRICE} />;
}
