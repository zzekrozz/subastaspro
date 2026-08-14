"use client";

import { useState } from "react";

import { LEGAL_ACCEPTANCE_TEXTS, LEGAL_ROUTES } from "@/lib/legal-config";
import { buildPurchaseCheckoutUrl } from "@/lib/purchase-consent-core";
import {
  SUBASTASPRO_PRICE_EX_VAT,
  SUBASTASPRO_PRICE_WITH_VAT_ES
} from "@/lib/site-config";

export function PurchaseConsentExperience({ paymentLink }) {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [immediateAccessRequested, setImmediateAccessRequested] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const canContinue = termsAccepted && immediateAccessRequested && !submitting;

  async function handleSubmit(event) {
    event.preventDefault();

    if (!termsAccepted || !immediateAccessRequested || submitting) return;

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/legal/purchase-consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ termsAccepted, immediateAccessRequested })
      });
      const body = await response.json();

      if (!response.ok || typeof body?.purchaseConsentId !== "string") {
        throw new Error("Consent could not be recorded");
      }

      window.location.assign(
        buildPurchaseCheckoutUrl(paymentLink, body.purchaseConsentId)
      );
    } catch {
      setError(
        "No hemos podido preparar el pago. Inténtalo de nuevo dentro de unos segundos."
      );
      setSubmitting(false);
    }
  }

  return (
    <main className="purchase-page">
      <header className="purchase-topbar">
        <a className="brand-lockup" href="/antes-de-pujar" aria-label="Volver a SubastasPro">
          <span className="brand-mark">Ivan Imports</span>
          <span className="brand-divider">·</span>
          <span className="brand-course">SubastasPro</span>
        </a>
        <span>Pago seguro con Stripe</span>
      </header>

      <section className="purchase-layout" aria-labelledby="purchase-title">
        <div className="purchase-summary">
          <p className="section-eyebrow">Acceso personal · Pago único</p>
          <h1 id="purchase-title">SubastasPro</h1>
          <p className="purchase-lead">
            Formación práctica para analizar fichas, costes, pujas y recogidas en
            subastas de vehículos.
          </p>
          <div className="purchase-price">
            <strong>{SUBASTASPRO_PRICE_EX_VAT} € + IVA</strong>
            <span>{SUBASTASPRO_PRICE_WITH_VAT_ES} € IVA incluido en España</span>
          </div>
          <ul>
            <li>Pago único, sin suscripción automática</li>
            <li>Acceso personal mediante email y código</li>
            <li>Checkout alojado y protegido por Stripe</li>
          </ul>
        </div>

        <form className="purchase-consent-form" onSubmit={handleSubmit}>
          <div>
            <p className="section-eyebrow">Antes de pagar</p>
            <h2>Revisa y confirma</h2>
            <p>Estas aceptaciones se vincularán de forma segura a tu compra.</p>
          </div>

          <label className="purchase-checkbox">
            <input
              checked={termsAccepted}
              onChange={(event) => setTermsAccepted(event.target.checked)}
              type="checkbox"
            />
            <span>
              He leído y acepto las{" "}
              <a href={LEGAL_ROUTES.terms} target="_blank" rel="noreferrer">
                Condiciones de Contratación
              </a>.
            </span>
          </label>

          <label className="purchase-checkbox">
            <input
              checked={immediateAccessRequested}
              onChange={(event) => setImmediateAccessRequested(event.target.checked)}
              type="checkbox"
            />
            <span>{LEGAL_ACCEPTANCE_TEXTS.withdrawal}</span>
          </label>

          <p className="purchase-privacy-note">
            Tus datos se tratarán para gestionar la compra y el acceso al curso. Consulta
            la <a href={LEGAL_ROUTES.privacy}>Política de Privacidad</a>.
          </p>
          <p className="purchase-capacity-note">
            La persona que realiza la compra debe tener capacidad legal para contratar.
            En caso de menores, deberá actuar con la autorización o representación que
            legalmente corresponda.
          </p>

          {error ? <p className="error-copy" role="alert">{error}</p> : null}

          <button className="button button-primary" disabled={!canContinue} type="submit">
            {submitting ? "Preparando pago seguro..." : "Continuar al pago seguro"}
          </button>
        </form>
      </section>
    </main>
  );
}
