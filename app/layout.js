import "./globals.css";

import { BRAND_NAME, SITE_NAME } from "@/lib/site-config";

export const metadata = {
  title: {
    default: `${SITE_NAME} | ${BRAND_NAME}`,
    template: `%s | ${SITE_NAME}`
  },
  description:
    "Curso practico e interactivo para aprender a comprar coches en subastas sin ir a ciegas.",
  openGraph: {
    title: `${SITE_NAME} | ${BRAND_NAME}`,
    description:
      "Aprende Auto1 y Copart Alemania con un enfoque practico, mobile first y orientado a evitar errores caros.",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
