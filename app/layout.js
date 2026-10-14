import "@fontsource-variable/big-shoulders-display";
import "@fontsource-variable/hanken-grotesk";
import "./globals.css";
import "./subastaspro.css";

import { CookieConsentProvider } from "@/components/cookie-consent-provider";
import { LegalFooter } from "@/components/legal-footer";
import { BRAND_NAME, SITE_NAME } from "@/lib/site-config";

export const metadata = {
  title: {
    default: `${SITE_NAME} | ${BRAND_NAME}`,
    template: `%s | ${SITE_NAME}`
  },
  description:
    "Formación práctica para entender Auto1 y Copart, analizar mejor y evitar errores en subastas de vehículos.",
  openGraph: {
    title: `${SITE_NAME} | ${BRAND_NAME}`,
    description:
      "Aprende a moverte en Auto1 y Copart Alemania con un enfoque práctico, directo y orientado a evitar errores.",
    type: "website"
  }
};

export const viewport = {
  themeColor: "#101a23"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <CookieConsentProvider>
          {children}
          <LegalFooter />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
