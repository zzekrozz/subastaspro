"use client";

import { useState } from "react";

import { PUBLIC_ROUTE } from "@/lib/site-config";

export function CourseLogoutButton() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  async function logout() {
    if (isLoggingOut) return;

    setIsLoggingOut(true);

    try {
      await fetch("/api/course-logout", { method: "POST" });
    } finally {
      try {
        window.google?.accounts?.id?.disableAutoSelect?.();
      } catch {}
      window.location.assign(PUBLIC_ROUTE);
    }
  }

  return (
    <button
      className="sp-btn sp-btn-ghost sp-btn-sm"
      disabled={isLoggingOut}
      onClick={logout}
      type="button"
    >
      {isLoggingOut ? "Saliendo…" : "Salir"}
    </button>
  );
}
