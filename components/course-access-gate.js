"use client";

import { useState } from "react";

import { BRAND_NAME, PRIVATE_ROUTE } from "@/lib/site-config";

export function CourseAccessGate({
  description,
  redirectTo = PRIVATE_ROUTE,
  title
}) {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [accessError, setAccessError] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  function submitOnEnter(event) {
    if (event.key === "Enter") {
      submitAccess();
    }
  }

  async function submitAccess() {
    if (isChecking) return;

    setIsChecking(true);
    setAccessError("");

    try {
      const response = await fetch("/api/course-access", {
        body: JSON.stringify({ email, code }),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      });
      const data = await response.json().catch(() => ({}));

      if (response.ok && data.valid) {
        window.location.assign(redirectTo);
        return;
      }

      setAccessError(
        data.message || "El correo o el código de acceso no son correctos."
      );
    } catch {
      setAccessError("No se ha podido comprobar el acceso. Inténtalo de nuevo.");
    } finally {
      setIsChecking(false);
    }
  }

  return (
    <section className="gate-shell">
      <div className="gate-card">
        <p className="pill pill-amber">{BRAND_NAME}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="gate-fields">
          <label>
            <span>Correo electrónico</span>
            <input
              autoComplete="email"
              className="text-input gate-input"
              disabled={isChecking}
              inputMode="email"
              onChange={(event) => {
                setEmail(event.target.value);
                setAccessError("");
              }}
              onKeyDown={submitOnEnter}
              placeholder="cliente@email.com"
              type="email"
              value={email}
            />
          </label>
          <label>
            <span>Código de acceso</span>
            <input
              autoComplete="one-time-code"
              className="text-input gate-input"
              disabled={isChecking}
              maxLength={32}
              onChange={(event) => {
                setCode(event.target.value);
                setAccessError("");
              }}
              onKeyDown={submitOnEnter}
              placeholder="SUBASTAS-XXXX-XXXX"
              type="password"
              value={code}
            />
          </label>
        </div>
        <button
          className="button button-primary"
          disabled={isChecking}
          onClick={submitAccess}
          type="button"
        >
          {isChecking ? "Comprobando..." : "Entrar al curso"}
        </button>
        {accessError ? <p className="error-copy">{accessError}</p> : null}
      </div>
    </section>
  );
}
