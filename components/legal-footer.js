"use client";

import { COOKIE_SETTINGS_EVENT } from "@/lib/cookie-consent";
import { LEGAL_OWNER, LEGAL_ROUTES } from "@/lib/legal-config";

export function LegalFooter() {
  function openCookieSettings() {
    window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT));
  }

  return (
    <footer className="legal-footer">
      <div className="content-frame legal-footer-inner">
        <p>{LEGAL_OWNER.brand} · {LEGAL_OWNER.product}</p>
        <nav aria-label="Informacion legal">
          <a href={LEGAL_ROUTES.notice}>Aviso legal</a>
          <a href={LEGAL_ROUTES.privacy}>Privacidad</a>
          <a href={LEGAL_ROUTES.cookies}>Cookies</a>
          <a href={LEGAL_ROUTES.terms}>Condiciones de contratación</a>
          <button onClick={openCookieSettings} type="button">
            Configurar cookies
          </button>
          <a href={`mailto:${LEGAL_OWNER.email}`}>Soporte</a>
        </nav>
      </div>
    </footer>
  );
}
