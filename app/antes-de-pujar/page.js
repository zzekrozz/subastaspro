import { LandingPage } from "@/components/landing-page";
import { FUTURE_PRICE, LAUNCH_PRICE, SITE_NAME } from "@/lib/site-config";

export const metadata = {
  title: SITE_NAME,
  description:
    "Curso práctico e interactivo para entender Auto1 y Copart Alemania: filtros, fichas, daños, documentación, pujas, recogida, transporte y errores a evitar.",
  alternates: {
    canonical: "/antes-de-pujar"
  }
};

export default function AntesDePujarLandingPage() {
  return <LandingPage launchPrice={LAUNCH_PRICE} futurePrice={FUTURE_PRICE} />;
}
