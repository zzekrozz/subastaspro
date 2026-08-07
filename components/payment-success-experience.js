"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const POLL_INTERVAL_MS = 2000;
const POLL_TIMEOUT_MS = 30000;
const PUBLIC_EMAIL_STATUSES = new Set(["pending", "sending", "sent", "failed"]);

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Pago confirmado",
    description: "Stripe ha confirmado correctamente la compra."
  },
  {
    number: "02",
    title: "Creando tu acceso",
    description: "Estamos generando tu código personal de SubastasPro."
  },
  {
    number: "03",
    title: "Revisa tu correo",
    description:
      "Recibirás las instrucciones de acceso en el correo utilizado durante la compra."
  }
];

const NEXT_STEPS = [
  "Confirmamos la compra",
  "Generamos un código personal",
  "Recibes el acceso en tu correo",
  "Entras al curso y empiezas a avanzar"
];

function getInitialStatus(sessionId, hasInvalidSessionParameter) {
  if (hasInvalidSessionParameter) return "invalid";
  return sessionId ? "checking" : "missing";
}

function StatusSeal({ confirmed, checking }) {
  return (
    <div
      className={`payment-success-seal ${confirmed ? "is-confirmed" : ""} ${
        checking ? "is-checking" : ""
      }`.trim()}
      aria-hidden="true"
    >
      <span>{confirmed ? "✓" : "·"}</span>
    </div>
  );
}

function ActionLink({ children, href, primary = false }) {
  return (
    <a
      className={`button ${primary ? "button-primary" : "button-secondary"}`}
      href={href}
    >
      {children}
    </a>
  );
}

export function PaymentSuccessExperience({
  sessionId,
  hasInvalidSessionParameter = false
}) {
  const [result, setResult] = useState(() => ({
    status: getInitialStatus(sessionId, hasInvalidSessionParameter)
  }));
  const [refreshKey, setRefreshKey] = useState(0);
  const [timedOut, setTimedOut] = useState(false);
  const requestInFlight = useRef(false);
  const requestSequence = useRef(0);

  useEffect(() => {
    if (!sessionId || hasInvalidSessionParameter) return undefined;

    const controller = new AbortController();
    const startedAt = Date.now();
    let timerId;
    let cancelled = false;

    setTimedOut(false);

    async function checkStatus() {
      if (cancelled || requestInFlight.current) return;

      const requestId = requestSequence.current + 1;
      requestSequence.current = requestId;
      requestInFlight.current = true;

      try {
        const response = await fetch(
          `/api/stripe/order-status?session_id=${encodeURIComponent(sessionId)}`,
          {
            cache: "no-store",
            signal: controller.signal
          }
        );
        const body = await response.json();

        if (cancelled) return;

        const nextStatus =
          typeof body?.status === "string" ? body.status : "error";
        const accessCreated = body?.accessCreated === true;
        const nextEmailStatus = PUBLIC_EMAIL_STATUSES.has(body?.emailStatus)
          ? body.emailStatus
          : null;
        setResult({
          status: nextStatus,
          paymentConfirmed: body?.paymentConfirmed === true,
          accessCreated,
          emailStatus: nextEmailStatus,
          maskedEmail:
            typeof body?.maskedEmail === "string" ? body.maskedEmail : null
        });

        const shouldKeepPolling =
          nextStatus === "processing" ||
          (accessCreated && ["pending", "sending"].includes(nextEmailStatus));

        if (shouldKeepPolling) {
          const elapsed = Date.now() - startedAt;

          if (elapsed < POLL_TIMEOUT_MS) {
            timerId = window.setTimeout(checkStatus, POLL_INTERVAL_MS);
          } else {
            setTimedOut(true);
          }
        }
      } catch (error) {
        if (!cancelled && error?.name !== "AbortError") {
          setResult({ status: "error" });
        }
      } finally {
        if (requestSequence.current === requestId) {
          requestInFlight.current = false;
        }
      }
    }

    setResult((current) =>
      current.status === "ready" ? current : { ...current, status: "checking" }
    );
    checkStatus();

    return () => {
      cancelled = true;
      controller.abort();
      window.clearTimeout(timerId);
      requestSequence.current += 1;
      requestInFlight.current = false;
    };
  }, [hasInvalidSessionParameter, refreshKey, sessionId]);

  const status = result.status;
  const confirmed = result.paymentConfirmed === true;
  const emailStatus = result.emailStatus;
  let displayStatus = status;

  if (timedOut && result.accessCreated) {
    displayStatus = "email_delayed";
  } else if (timedOut && status === "processing") {
    displayStatus = "delayed";
  } else if (status === "ready" && emailStatus === "sent") {
    displayStatus = "sent";
  } else if (status === "ready" && emailStatus === "failed") {
    displayStatus = "email_failed";
  } else if (status === "ready") {
    displayStatus = "email_sending";
  }
  const isChecking = status === "checking";

  const content = useMemo(() => {
    switch (displayStatus) {
      case "sent":
        return {
          eyebrow: "Compra verificada",
          title: "Tu acceso ha sido enviado",
          lead:
            "Hemos enviado tu c\u00f3digo personal al correo utilizado durante la compra.",
          panelTitle: "Tu acceso ya est\u00e1 en tu correo",
          panelText:
            "Si no lo encuentras en la bandeja de entrada, revisa tambi\u00e9n spam, promociones o correo no deseado."
        };
      case "email_sending":
        return {
          eyebrow: "Compra verificada",
          title: "Tu acceso est\u00e1 preparado",
          lead:
            "La compra est\u00e1 confirmada y tu c\u00f3digo personal ya existe. Estamos enviando las instrucciones a tu correo.",
          panelTitle: "Estamos enviando tu acceso",
          panelText:
            "Normalmente tarda solo unos segundos. Puedes mantener esta p\u00e1gina abierta mientras terminamos el env\u00edo."
        };
      case "email_failed":
      case "email_delayed":
        return {
          eyebrow: "Compra verificada",
          title: "Tu acceso est\u00e1 preparado",
          lead:
            "Estamos teniendo una demora al enviar el correo. No necesitas volver a pagar.",
          panelTitle: "El env\u00edo est\u00e1 tardando m\u00e1s de lo habitual",
          panelText:
            "Int\u00e9ntalo de nuevo en unos minutos o contacta con soporte si el correo no llega. Tu compra y tu acceso siguen registrados."
        };
      case "ready":
        return {
          eyebrow: "Compra verificada",
          title: "Pago confirmado. Tu acceso está en marcha.",
          lead:
            "Hemos recibido correctamente tu compra de SubastasPro. Tu acceso personal ya está preparado.",
          panelTitle: "Tu acceso ya ha sido creado",
          panelText:
            "Tu código personal está preparado. En cuanto recibas el correo, podrás entrar en el área privada y comenzar el curso."
        };
      case "processing":
        return {
          eyebrow: "Compra verificada",
          title: "Pago confirmado. Tu acceso está en marcha.",
          lead:
            "Hemos recibido correctamente tu compra de SubastasPro. Estamos preparando tu acceso personal y lo enviaremos al correo utilizado durante el pago.",
          panelTitle: "Estamos preparando tu acceso",
          panelText:
            "Normalmente tarda solo unos segundos. Puedes mantener esta página abierta mientras terminamos el proceso."
        };
      case "delayed":
        return {
          eyebrow: "Compra registrada",
          title: "Tu pago está registrado",
          lead:
            "La preparación del acceso está tardando un poco más de lo habitual. No necesitas volver a pagar.",
          panelTitle: "Seguimos preparando tu acceso",
          panelText:
            "En cuanto finalice, recibirás las instrucciones en tu correo. Revisa también spam, promociones o correo no deseado cuando recibas el mensaje."
        };
      case "pending":
        return {
          eyebrow: "Verificación en curso",
          title: "El pago todavía se está confirmando",
          lead:
            "Algunos métodos de pago necesitan un poco más de tiempo. Vuelve a comprobar el estado en unos instantes.",
          panelTitle: "Esperando confirmación",
          panelText:
            "No cierres esta página si quieres seguir consultando el estado de la operación."
        };
      case "invalid":
        return {
          eyebrow: "Enlace no verificado",
          title: "No hemos podido verificar esta compra desde este enlace",
          lead:
            "Puede que el enlace esté incompleto, haya caducado o se haya abierto sin venir directamente desde Stripe."
        };
      case "error":
        return {
          eyebrow: "Consulta no disponible",
          title: "Estamos teniendo problemas para consultar el estado",
          lead:
            "Tu pago no se ha perdido. Espera unos segundos y vuelve a intentarlo."
        };
      case "missing":
        return {
          eyebrow: "Ivan Imports · SubastasPro",
          title: "Gracias por confiar en SubastasPro",
          lead:
            "Para consultar una compra concreta, abre el enlace de confirmación facilitado después del pago."
        };
      default:
        return {
          eyebrow: "Verificando compra",
          title: "Estamos comprobando tu operación",
          lead:
            "Solo tardaremos unos segundos en confirmar el pago y localizar la preparación de tu acceso."
        };
    }
  }, [displayStatus]);

  function refreshStatus() {
    if (!sessionId || requestInFlight.current) return;
    setRefreshKey((value) => value + 1);
  }

  const showProcess =
    confirmed ||
    [
      "processing",
      "sent",
      "email_sending",
      "email_failed",
      "email_delayed",
      "delayed"
    ].includes(displayStatus);

  return (
    <main className={`payment-success-page status-${displayStatus}`}>
      <header className="payment-success-topbar">
        <a className="brand-lockup" href="/antes-de-pujar" aria-label="SubastasPro">
          <span className="brand-mark">Ivan Imports</span>
          <span className="brand-divider">·</span>
          <span className="brand-course">SubastasPro</span>
        </a>
        <span className="payment-success-secure-label">Compra segura</span>
      </header>

      <div className="payment-success-background" aria-hidden="true" />

      <section
        className="payment-success-hero"
        aria-labelledby="payment-status-title"
        aria-live="polite"
      >
        <div className="payment-success-hero-inner">
          <StatusSeal confirmed={confirmed} checking={isChecking} />
          <p className="payment-success-eyebrow">{content.eyebrow}</p>
          <h1 id="payment-status-title">{content.title}</h1>
          <p className="payment-success-lead">{content.lead}</p>

          {confirmed && result.maskedEmail ? (
            <div className="payment-success-email">
              <span>
                {displayStatus === "sent" ? "Acceso enviado a" : "Enviaremos el acceso a"}
              </span>
              <strong>{result.maskedEmail}</strong>
            </div>
          ) : null}

          <div className="payment-success-actions">
            {displayStatus === "missing" ? (
              <>
                <ActionLink href="/antes-de-pujar#acceso" primary>
                  Ir al área privada
                </ActionLink>
                <ActionLink href="/antes-de-pujar">Volver a SubastasPro</ActionLink>
              </>
            ) : null}

            {displayStatus === "invalid" ? (
              <>
                <ActionLink href="/antes-de-pujar" primary>
                  Volver a SubastasPro
                </ActionLink>
                <ActionLink href="/antes-de-pujar#acceso">Ir al área privada</ActionLink>
              </>
            ) : null}

            {["sent", "delayed", "email_delayed", "email_failed"].includes(
              displayStatus
            ) ? (
              <ActionLink href="/antes-de-pujar#acceso" primary>
                Ir al área privada
              </ActionLink>
            ) : null}

            {[
              "sent",
              "email_sending",
              "email_failed",
              "email_delayed",
              "processing",
              "delayed",
              "pending",
              "error"
            ].includes(displayStatus) ? (
              <button
                className="button button-secondary"
                disabled={isChecking}
                onClick={refreshStatus}
                type="button"
              >
                {displayStatus === "error" ? "Volver a comprobar" : "Actualizar estado"}
              </button>
            ) : null}
          </div>
        </div>
      </section>

      <div className="payment-success-content" aria-live="polite">
        {showProcess ? (
          <section className="payment-success-progress" aria-labelledby="progress-title">
            <div className="payment-success-section-heading">
              <p className="payment-success-eyebrow">Estado del acceso</p>
              <h2 id="progress-title">Todo ocurre de forma automática</h2>
            </div>
            <div className="payment-success-steps">
              {PROCESS_STEPS.map((step, index) => {
                const completed =
                  index === 0
                    ? confirmed
                    : index === 1
                      ? result.accessCreated === true
                      : emailStatus === "sent";
                const active =
                  (index === 1 && confirmed && result.accessCreated !== true) ||
                  (index === 2 && ["pending", "sending"].includes(emailStatus));
                const delayed =
                  index === 2 &&
                  ["email_failed", "email_delayed"].includes(displayStatus);

                return (
                  <article
                    className={`payment-success-step ${completed ? "is-complete" : ""} ${
                      active ? "is-active" : ""
                    } ${delayed ? "is-delayed" : ""}`.trim()}
                    key={step.number}
                  >
                    <div className="payment-success-step-marker">
                      <span>{completed ? "✓" : step.number}</span>
                    </div>
                    <div>
                      <p className="payment-success-step-state">
                        {completed
                          ? "Completado"
                          : active
                            ? "En curso"
                            : delayed
                              ? "Demora"
                              : "Siguiente"}
                      </p>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ) : null}

        {content.panelTitle ? (
          <section
            className={`payment-success-status-panel status-panel-${displayStatus}`}
            aria-labelledby="status-panel-title"
          >
            <div>
              <p className="payment-success-eyebrow">Actualización del sistema</p>
              <h2 id="status-panel-title">{content.panelTitle}</h2>
              <p>{content.panelText}</p>
            </div>
            {["processing", "email_sending"].includes(displayStatus) ? (
              <div className="payment-success-loading" aria-label="Procesando">
                <span />
              </div>
            ) : null}
          </section>
        ) : null}

        <section className="payment-success-next" aria-labelledby="next-title">
          <div className="payment-success-section-heading">
            <p className="payment-success-eyebrow">Tu recorrido</p>
            <h2 id="next-title">Qué ocurre ahora</h2>
          </div>
          <div className="payment-success-next-grid">
            {NEXT_STEPS.map((item, index) => (
              <article key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="payment-success-reassurance" aria-labelledby="reassurance-title">
          <div>
            <p className="payment-success-eyebrow">Con total tranquilidad</p>
            <h2 id="reassurance-title">No necesitas volver a pagar</h2>
            <p>
              Si el acceso tarda unos minutos, la compra ya está registrada. El sistema
              continuará procesándola automáticamente.
            </p>
          </div>
          <ul>
            <li>El código será personal.</li>
            <li>El progreso del curso quedará guardado.</li>
            <li>Podrás volver a entrar con el mismo correo y código.</li>
          </ul>
        </section>
      </div>

      <footer className="payment-success-footer">
        <span>Ivan Imports</span>
        <span>SubastasPro</span>
      </footer>
    </main>
  );
}
