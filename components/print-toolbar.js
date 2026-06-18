"use client";

import { PDF_DOWNLOAD_PATH } from "@/lib/site-config";

export function PrintToolbar() {
  return (
    <div className="print-toolbar">
      <button className="button button-primary" onClick={() => window.print()}>
        Imprimir / Guardar como PDF
      </button>
      <a
        className="button button-secondary"
        download
        href={PDF_DOWNLOAD_PATH}
        target="_blank"
      >
        Descargar PDF
      </a>
    </div>
  );
}
