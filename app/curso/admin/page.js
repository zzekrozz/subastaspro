import Link from "next/link";
import { notFound } from "next/navigation";

import { CourseTopbar } from "@/components/course-topbar";
import { courseModules, courseSections, getModulePath } from "@/lib/course-content";
import { getCourseViewer } from "@/lib/course-session";
import { PRIVATE_ROUTE } from "@/lib/site-config";
import { listCourseAccessesForAdmin } from "@/lib/course-access-repository";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Administración",
  robots: { index: false, follow: false }
};

const STATUS_LABEL = {
  active: "Activo",
  blocked: "Bloqueado",
  refunded: "Reembolsado"
};

const dateFormat = new Intl.DateTimeFormat("es-ES", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: "Europe/Madrid"
});

function formatDate(value) {
  if (!value) return "Nunca";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "Nunca" : dateFormat.format(date);
}

export default async function AdminPage() {
  const viewer = await getCourseViewer();

  if (viewer.role !== "admin") notFound();

  let listing = { configured: false, rows: [], reviews: [] };
  let failed = false;

  try {
    listing = await listCourseAccessesForAdmin({ limit: 300 });
  } catch {
    failed = true;
  }

  const rows = listing.rows;
  const active = rows.filter((row) => row.status === "active");
  const linked = rows.filter((row) => row.google_sub);
  const thirtyDaysAgo = Date.now() - 30 * 24 * 3600 * 1000;
  const recent = rows.filter((row) => row.last_access_at && Date.parse(row.last_access_at) > thirtyDaysAgo);

  return (
    <main className="sp sp-course sp-admin">
      <CourseTopbar back={{ href: PRIVATE_ROUTE, label: "Volver al curso" }} viewer={viewer} />

      <section className="sp-admin-head">
        <div className="sp-frame">
          <h1>Alumnos y accesos</h1>
          <p>
            Compras registradas en la base de datos (Upstash Redis). Los códigos no se
            muestran aquí; cada alumno lo tiene en su email de compra.
          </p>
          <dl className="sp-admin-stats">
            <div>
              <dt>Accesos activos</dt>
              <dd>{active.length}</dd>
            </div>
            <div>
              <dt>Vinculados a Google</dt>
              <dd>{linked.length}</dd>
            </div>
            <div>
              <dt>Entraron en 30 días</dt>
              <dd>{recent.length}</dd>
            </div>
            <div>
              <dt>Módulos publicados</dt>
              <dd>{courseModules.length}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sp-admin-body">
        <div className="sp-frame">
          {failed ? (
            <p className="sp-admin-alert">No se ha podido leer la base de datos. Revisa en Vercel la conexión con Upstash Redis.</p>
          ) : null}
          {!failed && !listing.configured ? (
            <p className="sp-admin-alert">Falta conectar Upstash Redis a este proyecto en Vercel, así que todavía no hay alumnos que mostrar.</p>
          ) : null}
          {listing.reviews?.length ? (
            <div className="sp-admin-alert">
              <strong>{listing.reviews.length} pago(s) pendientes de revisión manual.</strong> Stripe cobró pero no se
              encontró el consentimiento de compra, así que no se creó el acceso. Sesiones:{" "}
              {listing.reviews.map((review) => review.stripe_session_id).join(", ")}
            </div>
          ) : null}

          {rows.length ? (
            <div className="sp-table-wrap">
              <table className="sp-table">
                <thead>
                  <tr>
                    <th scope="col">Email de compra</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Google</th>
                    <th scope="col">Compra</th>
                    <th scope="col">Último acceso</th>
                    <th scope="col" className="is-num">Entradas</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.id}>
                      <td className="is-email">{row.email}</td>
                      <td>
                        <span className={`sp-tag is-${row.status}`}>{STATUS_LABEL[row.status] || row.status}</span>
                      </td>
                      <td>{row.google_sub ? "Vinculado" : "No"}</td>
                      <td>{formatDate(row.created_at)}</td>
                      <td>{formatDate(row.last_access_at)}</td>
                      <td className="is-num">{row.access_count ?? 0}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : listing.configured && !failed ? (
            <p className="sp-admin-empty">Todavía no hay compras registradas.</p>
          ) : null}

          <h2 className="sp-admin-subtitle">Revisar el contenido</h2>
          <p className="sp-admin-help">
            Abre cualquier módulo tal y como lo ve un alumno. El texto de los módulos vive en{" "}
            <code>lib/course-content.js</code>.
          </p>
          <div className="sp-admin-modules">
            {courseSections.map((section) => (
              <div className={`sp-admin-mgroup is-${section.id}`} key={section.id}>
                <h3>{section.title}</h3>
                <ol>
                  {section.moduleIds.map((id) => {
                    const module = courseModules.find((item) => item.id === id);
                    if (!module) return null;
                    return (
                      <li key={id}>
                        <Link href={getModulePath(module.slug)}>
                          <span>{String(courseModules.indexOf(module) + 1).padStart(2, "0")}</span>
                          {module.title}
                        </Link>
                      </li>
                    );
                  })}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
