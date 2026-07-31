"use client";

import { useState } from "react";

import { PUBLIC_ROUTE } from "@/lib/site-config";

export function CourseLogoutButton() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  async function logout() {
    if (isLoggingOut) return;

    setIsLoggingOut(true);

    try {
      await fetch("/api/course-logout", {
        method: "POST"
      });
    } finally {
      window.location.assign(PUBLIC_ROUTE);
    }
  }

  return (
    <button
      className="button button-secondary button-small"
      disabled={isLoggingOut}
      onClick={logout}
      type="button"
    >
      {isLoggingOut ? "Cerrando..." : "Cerrar sesión"}
    </button>
  );
}
