"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";

import {
  COOKIE_CONSENT_STORAGE_KEY,
  COOKIE_SETTINGS_EVENT,
  createCookiePreferences,
  parseCookiePreferences
} from "@/lib/cookie-consent";
import { LEGAL_ROUTES } from "@/lib/legal-config";

const CookieConsentContext = createContext({
  externalContentAllowed: false,
  allowExternalContent: () => {}
});

function persistPreferences(externalContent) {
  const preferences = createCookiePreferences({ externalContent });
  window.localStorage.setItem(
    COOKIE_CONSENT_STORAGE_KEY,
    JSON.stringify(preferences)
  );
  return preferences;
}

export function CookieConsentProvider({ children }) {
  const [preferences, setPreferences] = useState(undefined);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [draftExternalContent, setDraftExternalContent] = useState(false);
  const settingsTitleRef = useRef(null);

  useEffect(() => {
    const stored = parseCookiePreferences(
      window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)
    );
    setPreferences(stored);
    setDraftExternalContent(stored?.externalContent === true);
  }, []);

  useEffect(() => {
    function openSettings() {
      setDraftExternalContent(preferences?.externalContent === true);
      setSettingsOpen(true);
    }

    window.addEventListener(COOKIE_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, openSettings);
  }, [preferences]);

  useEffect(() => {
    if (settingsOpen) settingsTitleRef.current?.focus();
  }, [settingsOpen]);

  useEffect(() => {
    if (!settingsOpen) return undefined;

    function closeOnEscape(event) {
      if (event.key === "Escape") setSettingsOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [settingsOpen]);

  const saveChoice = useCallback((externalContent) => {
    const next = persistPreferences(externalContent);
    setPreferences(next);
    setDraftExternalContent(next.externalContent);
    setSettingsOpen(false);
  }, []);

  const allowExternalContent = useCallback(() => saveChoice(true), [saveChoice]);
  const showBanner = preferences === null && !settingsOpen;

  return (
    <CookieConsentContext.Provider
      value={{
        externalContentAllowed: preferences?.externalContent === true,
        allowExternalContent
      }}
    >
      {children}

      {showBanner ? (
        <section
          aria-label="Preferencias de privacidad"
          className="cookie-banner"
          role="region"
        >
          <div className="cookie-banner-copy">
            <strong>Tu privacidad, sin rodeos</strong>
            <p>
              Usamos almacenamiento necesario para el acceso y el progreso. YouTube
              solo se carga si permites contenido externo. Consulta la{" "}
              <a href={LEGAL_ROUTES.cookies}>Política de Cookies</a>.
            </p>
          </div>
          <div className="cookie-banner-actions">
            <button className="button button-secondary" onClick={() => saveChoice(true)} type="button">
              Aceptar
            </button>
            <button className="button button-secondary" onClick={() => saveChoice(false)} type="button">
              Rechazar
            </button>
            <button
              className="button button-secondary"
              onClick={() => setSettingsOpen(true)}
              type="button"
            >
              Configurar
            </button>
          </div>
        </section>
      ) : null}

      {settingsOpen ? (
        <div className="cookie-settings-overlay" role="presentation">
          <section
            aria-labelledby="cookie-settings-title"
            aria-modal="true"
            className="cookie-settings-dialog"
            role="dialog"
          >
            <div>
              <p className="section-eyebrow">Privacidad</p>
              <h2 id="cookie-settings-title" ref={settingsTitleRef} tabIndex="-1">
                Configurar cookies
              </h2>
              <p>
                Puedes cambiar esta decisión en cualquier momento desde el pie de
                página.
              </p>
            </div>

            <div className="cookie-category">
              <div>
                <strong>Necesarias</strong>
                <p>Acceso seguro, preferencias legales y progreso solicitado.</p>
              </div>
              <span aria-label="Siempre activas" className="cookie-category-status">
                Siempre activas
              </span>
            </div>

            <label className="cookie-category cookie-category-toggle">
              <span>
                <strong>Contenido externo</strong>
                <span>Permite cargar los reproductores de YouTube.</span>
              </span>
              <input
                checked={draftExternalContent}
                onChange={(event) => setDraftExternalContent(event.target.checked)}
                type="checkbox"
              />
            </label>

            <div className="cookie-settings-actions">
              <button
                className="button button-primary"
                onClick={() => saveChoice(draftExternalContent)}
                type="button"
              >
                Guardar preferencias
              </button>
              <button className="button button-secondary" onClick={() => saveChoice(false)} type="button">
                Rechazar contenido externo
              </button>
              {preferences ? (
                <button
                  className="cookie-text-button"
                  onClick={() => setSettingsOpen(false)}
                  type="button"
                >
                  Cerrar sin cambios
                </button>
              ) : null}
            </div>
          </section>
        </div>
      ) : null}
    </CookieConsentContext.Provider>
  );
}

export function useExternalContentConsent() {
  return useContext(CookieConsentContext);
}
