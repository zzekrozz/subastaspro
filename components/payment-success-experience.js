"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const POLL_INTERVAL_MS = 2000;
const POLL_TIMEOUT_MS = 30000;
const PUBLIC_EMAIL_STATUSES = new Set(["pending", "sending", "sent", "failed"]);

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Pago confirmado",
    description: "Stripe valida la compra de forma segura."
  },
  {
    number: "02",
    title: "Acceso generado",
    description: "Creamos tus credenciales personales."
  },
  {
    number: "03",
    title: "Código enviado",
    description: "Recibes las instrucciones en tu correo."
  }
];

const COURSE_VALUE_ITEMS = [
  {
    number: "01",
    label: "Analiza",
    text: "Aprende a interpretar una subasta antes de pujar."
  },
  {
    number: "02",
    label: "Calcula",
    text: "Detecta costes y márgenes antes de comprometer dinero."
  },
  {
    number: "03",
    label: "Puja",
    text: "Toma decisiones con un criterio mucho más claro."
  }
];

const REFRESHABLE_STATUSES = new Set([
  "processing",
  "email_sending",
  "email_failed",
  "email_delayed",
  "delayed",
  "pending",
  "error"
]);

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
  const accessCreated = result.accessCreated === true;
  const emailStatus = result.emailStatus;
  let displayStatus = status;

  if (timedOut && accessCreated) {
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
  const isComplete = confirmed && accessCreated && emailStatus === "sent";

  const content = useMemo(() => {
    switch (displayStatus) {
      case "sent":
        return {
          stateLabel: "Compra completada",
          title: "Ya estás dentro.",
          lead:
            "Tu compra se ha confirmado y tu acceso personal a SubastasPro está preparado."
        };
      case "email_sending":
        return {
          stateLabel: "Entrega automática",
          title: "Tu acceso ya está creado",
          lead: "Estamos enviando ahora mismo tu código personal.",
          panelTitle: "Envío automático en curso",
          panelText:
            "Mantén esta página abierta unos segundos. Actualizaremos el estado cuando el correo esté enviado."
        };
      case "email_failed":
      case "email_delayed":
        return {
          stateLabel: "Acceso protegido",
          title: "Tu acceso está preparado",
          lead:
            "El envío del correo está tardando un poco más de lo habitual. Tu compra está registrada y no necesitas volver a pagar.",
          panelTitle: "Tu compra está a salvo",
          panelText:
            "Puedes volver a comprobar el estado en unos segundos."
        };
      case "processing":
        return {
          stateLabel: "Creación automática",
          title: "Estamos preparando tu acceso",
          lead:
            "El pago ya está confirmado. Solo necesitamos unos segundos para generar y enviar tus credenciales.",
          panelTitle: "Generando tus credenciales",
          panelText:
            "No tienes que hacer nada más. El proceso continuará automáticamente."
        };
      case "delayed":
        return {
          stateLabel: "Compra registrada",
          title: "Estamos preparando tu acceso",
          lead:
            "La generación de tus credenciales está tardando un poco más de lo habitual. No necesitas volver a pagar.",
          panelTitle: "Seguimos trabajando en tu acceso",
          panelText:
            "Puedes volver a comprobar el estado en unos segundos."
        };
      case "pending":
        return {
          stateLabel: "Confirmación en curso",
          title: "Estamos confirmando tu pago",
          lead:
            "Algunos métodos de pago necesitan unos instantes más. En cuanto Stripe lo confirme, prepararemos tu acceso.",
          panelTitle: "Validación segura en curso",
          panelText: "Puedes actualizar el estado dentro de unos segundos."
        };
      case "invalid":
        return {
          stateLabel: "Enlace no verificado",
          title: "No podemos comprobar esta compra desde este enlace",
          lead:
            "Si acabas de realizar el pago, vuelve a abrir el enlace de confirmación de Stripe o entra directamente al área privada cuando recibas tus credenciales."
        };
      case "error":
        return {
          stateLabel: "Consulta temporal",
          title: "No podemos actualizar el estado ahora",
          lead:
            "Tu compra no se ha perdido. Espera unos segundos y vuelve a comprobarla.",
          panelTitle: "Vuelve a comprobarlo en unos segundos",
          panelText:
            "Si el pago ya se completó, no necesitas repetirlo."
        };
      case "missing":
        return {
          stateLabel: "Ivan Imports · SubastasPro",
          title: "Gracias por confiar en SubastasPro",
          lead:
            "Si ya has realizado tu compra, encontrarás el acceso en el correo utilizado durante el pago."
        };
      default:
        return {
          stateLabel: "Verificación segura",
          title: "Estamos comprobando tu compra",
          lead:
            "Solo tardaremos unos segundos en confirmar el pago y localizar tu acceso."
        };
    }
  }, [displayStatus]);

  function refreshStatus() {
    if (!sessionId || requestInFlight.current) return;
    setRefreshKey((value) => value + 1);
  }

  const showPurchaseDetails =
    confirmed ||
    [
      "processing",
      "sent",
      "email_sending",
      "email_failed",
      "email_delayed",
      "delayed"
    ].includes(displayStatus);
  const canRefresh = Boolean(sessionId) && REFRESHABLE_STATUSES.has(displayStatus);
  const showLoading = ["checking", "processing", "email_sending"].includes(
    displayStatus
  );

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

      <div className="payment-success-background" aria-hidden="true">
        <span className="payment-success-rail rail-left" />
        <span className="payment-success-rail rail-right" />
      </div>

      <section
        className="payment-success-hero"
        aria-labelledby="payment-status-title"
        aria-live="polite"
      >
        <div className="payment-success-hero-inner">
          <p className="payment-success-brand-label">Ivan Imports · SubastasPro</p>
          <StatusSeal confirmed={confirmed} checking={isChecking} />
          <p className="payment-success-state-label">{content.stateLabel}</p>
          <h1 id="payment-status-title">{content.title}</h1>
          <p className="payment-success-lead">{content.lead}</p>

          {displayStatus === "sent" ? (
            <div className="payment-success-email">
              <span>Acceso enviado a tu correo</span>
              {result.maskedEmail ? <strong>Enviado a {result.maskedEmail}</strong> : null}
            </div>
          ) : null}

          <p className="payment-success-microcopy">
            Acceso personal <span>·</span> Pago único <span>·</span> Entrega automática
          </p>

          <div className="payment-success-actions">
            {displayStatus === "missing" ? (
              <ActionLink href="/antes-de-pujar#acceso" primary>
                Ir al área privada
              </ActionLink>
            ) : null}

            {displayStatus === "invalid" ? (
              <>
                <ActionLink href="/antes-de-pujar#acceso" primary>
                  Ir al área privada
                </ActionLink>
                <ActionLink href="/antes-de-pujar">Volver a SubastasPro</ActionLink>
              </>
            ) : null}
          </div>
        </div>
      </section>

      <div className="payment-success-content" aria-live="polite">
        {showPurchaseDetails ? (
          <section className="payment-success-progress" aria-labelledby="progress-title">
            <div className="payment-success-section-heading is-centered">
              <p className="payment-success-eyebrow">Estado del acceso</p>
              <h2 id="progress-title">De la compra al curso, sin pasos extra</h2>
            </div>

            <div className="payment-success-steps">
              {PROCESS_STEPS.map((step, index) => {
                const completed =
                  index === 0 ? confirmed : index === 1 ? accessCreated : emailStatus === "sent";
                const active =
                  (index === 0 && !confirmed && ["checking", "pending"].includes(status)) ||
                  (index === 1 && confirmed && !accessCreated) ||
                  (index === 2 && accessCreated && ["pending", "sending"].includes(emailStatus));
                const delayed =
                  (index === 1 && displayStatus === "delayed") ||
                  (index === 2 && ["email_failed", "email_delayed"].includes(displayStatus));
                const stateText = completed
                  ? "Completado"
                  : active
                    ? index === 2
                      ? "Enviando"
                      : "En curso"
                    : delayed
                      ? "Demora"
                      : "Pendiente";

                return (
                  <article
                    aria-current={active ? "step" : undefined}
                    className={`payment-success-step ${completed ? "is-complete" : ""} ${
                      active ? "is-active" : ""
                    } ${delayed ? "is-delayed" : ""}`.trim()}
                    key={step.number}
                  >
                    <div className="payment-success-step-marker">
                      <span>{completed ? "✓" : step.number}</span>
                    </div>
                    <div className="payment-success-step-copy">
                      <p className="payment-success-step-state">{stateText}</p>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ) : null}

        {isComplete ? (
          <section className="payment-success-ready" aria-labelledby="ready-title">
            <div>
              <p className="payment-success-eyebrow">Acceso disponible</p>
              <h2 id="ready-title">Todo listo para empezar</h2>
              <p>
                Hemos enviado a tu correo el código personal que necesitas para entrar
                al área privada.
              </p>
            </div>
            <div className="payment-success-ready-action">
              <ActionLink href="/antes-de-pujar" primary>
                Entrar a SubastasPro
              </ActionLink>
              <div className="payment-success-inbox-note">
                <strong>¿No ves el correo?</strong>
                <span>
                  Revisa spam, promociones o correo no deseado. Puede tardar unos
                  segundos en aparecer.
                </span>
              </div>
            </div>
          </section>
        ) : null}

        {content.panelTitle && !isComplete ? (
          <section
            className={`payment-success-status-panel status-panel-${displayStatus}`}
            aria-labelledby="status-panel-title"
          >
            <div>
              <p className="payment-success-eyebrow">Actualización del sistema</p>
              <h2 id="status-panel-title">{content.panelTitle}</h2>
              <p>{content.panelText}</p>
            </div>
            <div className="payment-success-status-actions">
              {showLoading ? (
                <div className="payment-success-loading" aria-label="Procesando">
                  <span />
                </div>
              ) : null}
              {canRefresh ? (
                <button
                  className="button button-secondary"
                  disabled={isChecking}
                  onClick={refreshStatus}
                  type="button"
                >
                  Actualizar estado
                </button>
              ) : null}
            </div>
          </section>
        ) : null}

        {showPurchaseDetails ? (
          <section className="payment-success-value" aria-labelledby="value-title">
            <div className="payment-success-section-heading">
              <p className="payment-success-eyebrow">Dentro de SubastasPro</p>
              <h2 id="value-title">Empieza con ventaja desde el primer módulo</h2>
            </div>
            <div className="payment-success-value-grid">
              {COURSE_VALUE_ITEMS.map((item) => (
                <article key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.label}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {showPurchaseDetails ? (
          <section
            className="payment-success-reassurance"
            aria-labelledby="reassurance-title"
          >
            <div>
              <p className="payment-success-eyebrow">Acceso protegido</p>
              <h2 id="reassurance-title">Tu acceso es personal</h2>
              <p>
                Guarda tus credenciales y utiliza siempre los mismos datos para volver
                al curso.
              </p>
            </div>
            <ul>
              <li>Utiliza siempre el correo usado durante la compra.</li>
              <li>Guarda el email con tu código.</li>
              <li>Tu progreso se conserva en este dispositivo.</li>
              <li>No necesitas volver a pagar para acceder de nuevo.</li>
            </ul>
          </section>
        ) : null}
      </div>

      <footer className="payment-success-footer">
        <span>Ivan Imports</span>
        <span>SubastasPro · Acceso personal</span>
      </footer>
    </main>
  );
}
