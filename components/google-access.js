"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import {
  PRIVATE_ROUTE,
  WHATSAPP_SUPPORT_MESSAGE,
  buildWhatsAppUrl
} from "@/lib/site-config";

const GSI_SRC = "https://accounts.google.com/gsi/client";
const PURCHASE_ROUTE = "/comprar";

function loadGoogleScript() {
  return new Promise((resolve) => {
    if (window.google?.accounts?.id) {
      resolve(true);
      return;
    }

    if (!document.getElementById("gsi-client")) {
      const script = document.createElement("script");
      script.id = "gsi-client";
      script.src = GSI_SRC;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    let tries = 0;
    const timer = setInterval(() => {
      if (window.google?.accounts?.id || ++tries > 100) {
        clearInterval(timer);
        resolve(Boolean(window.google?.accounts?.id));
      }
    }, 100);
  });
}

async function postJson(url, body) {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  const data = await response.json().catch(() => ({}));

  return { response, data };
}

export function GoogleAccess({ clientId }) {
  const buttonRef = useRef(null);
  const [step, setStep] = useState(clientId ? "google" : "legacy");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [pendingEmail, setPendingEmail] = useState("");
  const [code, setCode] = useState("");
  const [legacyEmail, setLegacyEmail] = useState("");
  const [legacyCode, setLegacyCode] = useState("");
  const [buttonReady, setButtonReady] = useState(false);
  const supportUrl = buildWhatsAppUrl(WHATSAPP_SUPPORT_MESSAGE);

  const handleCredential = useCallback(async ({ credential }) => {
    setBusy(true);
    setMessage("");

    try {
      const { response, data } = await postJson("/api/auth/google", { credential });

      if (response.ok && data.ok) {
        window.location.assign(data.redirectTo || PRIVATE_ROUTE);
        return;
      }

      if (data.needsCode) {
        setPendingEmail(data.email || "");
        setStep("code");
        setBusy(false);
        return;
      }

      setMessage(data.message || "No se ha podido iniciar sesión con Google. Inténtalo de nuevo.");
      setBusy(false);
      setStep("google");
      setupGoogle();
    } catch {
      setMessage("No hay conexión con el servidor. Revisa tu conexión e inténtalo de nuevo.");
      setBusy(false);
    }
    // setupGoogle se declara después y es estable; no hace falta en dependencias.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setupGoogle = useCallback(async () => {
    if (!clientId) return;

    setButtonReady(false);

    const loaded = await loadGoogleScript();

    if (!loaded) {
      setMessage("No se ha podido cargar el acceso de Google. Desactiva el bloqueador de contenido para esta web o entra con tu correo y código.");
      return;
    }

    try {
      const response = await fetch("/api/auth/google/nonce", { credentials: "same-origin", cache: "no-store" });
      const data = await response.json();

      if (!response.ok || !data.nonce) throw new Error("nonce");

      window.google.accounts.id.initialize({
        client_id: clientId,
        nonce: data.nonce,
        ux_mode: "popup",
        use_fedcm_for_prompt: true,
        callback: handleCredential
      });

      if (buttonRef.current) {
        buttonRef.current.innerHTML = "";
        window.google.accounts.id.renderButton(buttonRef.current, {
          theme: "outline",
          size: "large",
          shape: "pill",
          text: "continue_with",
          logo_alignment: "left",
          width: Math.min(buttonRef.current.offsetWidth || 320, 400)
        });
        setButtonReady(true);
      }
    } catch {
      setMessage("No se ha podido preparar el acceso. Recarga la página.");
    }
  }, [clientId, handleCredential]);

  useEffect(() => {
    if (step === "google") setupGoogle();
  }, [step, setupGoogle]);

  async function submitCode(event) {
    event.preventDefault();
    if (busy) return;

    setBusy(true);
    setMessage("");

    try {
      const { response, data } = await postJson("/api/auth/google/link", { code });

      if (response.ok && data.ok) {
        window.location.assign(data.redirectTo || PRIVATE_ROUTE);
        return;
      }

      if (data.expired) {
        setStep("google");
      }

      setMessage(data.message || "Ese código no corresponde a ninguna compra activa.");
    } catch {
      setMessage("No hay conexión con el servidor. Inténtalo de nuevo.");
    }

    setBusy(false);
  }

  async function submitLegacy(event) {
    event.preventDefault();
    if (busy) return;

    setBusy(true);
    setMessage("");

    try {
      const { response, data } = await postJson("/api/course-access", {
        email: legacyEmail,
        code: legacyCode
      });

      if (response.ok && data.valid) {
        window.location.assign(PRIVATE_ROUTE);
        return;
      }

      setMessage(data.message || "El correo o el código de acceso no son correctos.");
    } catch {
      setMessage("No se ha podido comprobar el acceso. Inténtalo de nuevo.");
    }

    setBusy(false);
  }

  function goTo(nextStep) {
    setMessage("");
    setBusy(false);
    setStep(nextStep);
  }

  return (
    <main className="sp sp-login">
      <section className="sp-login-visual" aria-hidden="false">
        <a className="sp-wordmark" href="/antes-de-pujar">
          <strong>SubastasPro</strong>
          <span>por Ivan Imports</span>
        </a>
        <div className="sp-login-visual-copy">
          <h1>Tu sitio en la campa.</h1>
          <p>
            Los 16 módulos, tu progreso, el checklist de cada operación y soporte directo
            por WhatsApp. Todo en el mismo sitio.
          </p>
        </div>
        <p className="sp-login-visual-foot">
          Formación independiente sobre Auto1 y Copart Alemania.
        </p>
      </section>

      <section className="sp-login-panel">
        <div className="sp-login-card">
          {step === "google" ? (
            <>
              <h2>Entra en tu curso</h2>
              <p className="sp-login-lead">
                Usa la cuenta de Google con el mismo correo que pusiste al pagar. Si lo
                es, entras directamente.
              </p>
              <div className={`sp-gbutton${buttonReady ? " is-ready" : ""}`} ref={buttonRef} />
              {busy ? <p className="sp-login-status" role="status">Comprobando tu compra…</p> : null}
              {message ? <p className="sp-login-error" role="alert">{message}</p> : null}
              <div className="sp-login-alt">
                <button className="sp-linkbtn" onClick={() => goTo("legacy")} type="button">
                  Entrar con correo y código
                </button>
                <a className="sp-linkbtn" href={PURCHASE_ROUTE}>
                  Aún no tengo el curso
                </a>
              </div>
              <p className="sp-login-legal">
                Solo usamos tu nombre, tu email y el identificador de tu cuenta de Google para
                comprobar tu compra. Más detalles en la{" "}
                <a href="/legal/privacidad">política de privacidad</a>.
              </p>
            </>
          ) : null}

          {step === "code" ? (
            <form onSubmit={submitCode}>
              <h2>Vincula tu compra</h2>
              <p className="sp-login-lead">
                No hay ninguna compra con <strong>{pendingEmail || "esta cuenta"}</strong>. Si
                pagaste con otro correo, escribe el código que te llegó por email. Solo tendrás
                que hacerlo una vez.
              </p>
              <label className="sp-field">
                <span>Código de acceso</span>
                <input
                  autoCapitalize="characters"
                  autoComplete="one-time-code"
                  disabled={busy}
                  maxLength={24}
                  onChange={(event) => {
                    setCode(event.target.value.toUpperCase());
                    setMessage("");
                  }}
                  placeholder="SUBASTAS-XXXX-XXXX"
                  spellCheck={false}
                  value={code}
                />
              </label>
              {message ? <p className="sp-login-error" role="alert">{message}</p> : null}
              <button className="sp-btn sp-btn-primary sp-btn-block" disabled={busy || !code.trim()} type="submit">
                {busy ? "Comprobando…" : "Vincular y entrar"}
              </button>
              <div className="sp-login-alt">
                <button className="sp-linkbtn" onClick={() => goTo("google")} type="button">
                  Probar con otra cuenta de Google
                </button>
                <a className="sp-linkbtn" href={PURCHASE_ROUTE}>
                  Comprar el curso
                </a>
              </div>
            </form>
          ) : null}

          {step === "legacy" ? (
            <form onSubmit={submitLegacy}>
              <h2>Entrar con código</h2>
              <p className="sp-login-lead">
                Escribe el correo que usaste al pagar y el código personal que te llegó por email.
              </p>
              <label className="sp-field">
                <span>Correo electrónico</span>
                <input
                  autoComplete="email"
                  disabled={busy}
                  inputMode="email"
                  onChange={(event) => {
                    setLegacyEmail(event.target.value);
                    setMessage("");
                  }}
                  placeholder="tu@correo.com"
                  type="email"
                  value={legacyEmail}
                />
              </label>
              <label className="sp-field">
                <span>Código de acceso</span>
                <input
                  autoComplete="one-time-code"
                  disabled={busy}
                  maxLength={32}
                  onChange={(event) => {
                    setLegacyCode(event.target.value);
                    setMessage("");
                  }}
                  placeholder="SUBASTAS-XXXX-XXXX"
                  spellCheck={false}
                  type="password"
                  value={legacyCode}
                />
              </label>
              {message ? <p className="sp-login-error" role="alert">{message}</p> : null}
              <button
                className="sp-btn sp-btn-primary sp-btn-block"
                disabled={busy || !legacyEmail.trim() || !legacyCode.trim()}
                type="submit"
              >
                {busy ? "Comprobando…" : "Entrar al curso"}
              </button>
              <div className="sp-login-alt">
                {clientId ? (
                  <button className="sp-linkbtn" onClick={() => goTo("google")} type="button">
                    Entrar con Google
                  </button>
                ) : null}
                <a className="sp-linkbtn" href={supportUrl} rel="noreferrer" target="_blank">
                  No encuentro mi código
                </a>
              </div>
            </form>
          ) : null}
        </div>
      </section>
    </main>
  );
}
