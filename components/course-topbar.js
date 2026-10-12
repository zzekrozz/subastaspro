import Link from "next/link";

import { CourseLogoutButton } from "@/components/course-logout-button";
import {
  ADMIN_ROUTE,
  PDF_DOWNLOAD_PATH,
  PRIVATE_ROUTE,
  WHATSAPP_SUPPORT_MESSAGE,
  buildWhatsAppUrl
} from "@/lib/site-config";

export function CourseTopbar({ viewer, back }) {
  const supportUrl = buildWhatsAppUrl(WHATSAPP_SUPPORT_MESSAGE);
  const isAdmin = viewer?.role === "admin";

  return (
    <>
      <header className="sp-top sp-course-top">
        <div className="sp-frame sp-top-inner">
          <Link className="sp-wordmark" href={PRIVATE_ROUTE} aria-label="Ir al inicio del curso">
            <strong>SubastasPro</strong>
            <span>Área privada</span>
          </Link>
          <nav className="sp-course-actions" aria-label="Acciones del curso">
            {back ? (
              <Link className="sp-btn sp-btn-ghost sp-btn-sm" href={back.href}>
                {back.label}
              </Link>
            ) : null}
            <a className="sp-btn sp-btn-ghost sp-btn-sm sp-hide-sm" download href={PDF_DOWNLOAD_PATH}>
              Checklist PDF
            </a>
            <a className="sp-btn sp-btn-line sp-btn-sm sp-hide-sm" href={supportUrl} rel="noreferrer" target="_blank">
              Soporte
            </a>
            <CourseLogoutButton />
          </nav>
        </div>
      </header>
      {isAdmin ? (
        <div className="sp-adminbar" role="note">
          <div className="sp-frame sp-adminbar-inner">
            <p>
              <strong>Modo administrador.</strong> Ves el curso completo sin compra. Tu
              progreso solo se guarda en este navegador.
            </p>
            <Link href={ADMIN_ROUTE}>Alumnos y accesos</Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
