"use client";

import { BRAND_NAME } from "@/lib/site-config";

export function CourseAccessGate({
  accessError,
  description,
  onPasswordChange,
  onSubmit,
  password,
  title
}) {
  return (
    <main className="site-shell gate-shell">
      <div className="gate-card">
        <p className="pill pill-amber">{BRAND_NAME}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <input
          className="text-input gate-input"
          maxLength={32}
          onChange={(event) => onPasswordChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              onSubmit();
            }
          }}
          placeholder="FUNDADOR29"
          type="password"
          value={password}
        />
        <button className="button button-primary" onClick={onSubmit} type="button">
          Entrar al curso
        </button>
        {accessError ? <p className="error-copy">{accessError}</p> : null}
      </div>
    </main>
  );
}
