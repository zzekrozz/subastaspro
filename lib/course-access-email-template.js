import { COURSE_ACCESS_MINIMUM_MONTHS } from "./legal-config.js";

export const COURSE_ACCESS_URL =
  "https://subastaspro.ivanimports.es/antes-de-pujar";
export const COURSE_TERMS_URL =
  "https://subastaspro.ivanimports.es/legal/condiciones";
export const COURSE_SUPPORT_EMAIL = "soporte.matriculapro@gmail.com";
export const COURSE_ACCESS_EMAIL_SUBJECT =
  "Tu acceso a SubastasPro ya está listo";
export const COURSE_ACCESS_EMAIL_PREHEADER =
  "Tu código personal para entrar al curso de subastas.";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatPurchaseDate(value) {
  if (!value) return "No disponible";

  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? "No disponible"
    : new Intl.DateTimeFormat("es-ES", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        timeZone: "Europe/Madrid"
      }).format(date);
}

export function buildCourseAccessEmail({ email, code, purchaseSummary = null }) {
  const safeEmail = escapeHtml(email);
  const safeCode = escapeHtml(code);
  const purchaseDate = escapeHtml(formatPurchaseDate(purchaseSummary?.purchasedAt));
  const termsVersion = escapeHtml(
    purchaseSummary?.termsVersion || "Compra anterior al registro versionado"
  );
  const immediateAccessConfirmation = purchaseSummary?.immediateAccessRequested
    ? "Solicitaste acceso inmediato al contenido digital y aceptaste las condiciones aplicables a la compra."
    : "La compra queda sujeta a las condiciones aplicables y a los derechos legalmente exigibles.";

  const html = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="dark light">
    <meta name="supported-color-schemes" content="dark light">
    <title>${COURSE_ACCESS_EMAIL_SUBJECT}</title>
  </head>
  <body style="margin:0;padding:0;background:#0a0a0a;color:#f5f2eb;font-family:Arial,Helvetica,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${COURSE_ACCESS_EMAIL_PREHEADER}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;background:#0a0a0a;">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:620px;border:1px solid #34312c;border-radius:12px;background:#151515;">
            <tr>
              <td style="padding:34px 32px 14px;color:#f5a623;font-size:12px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;">Ivan Imports · SubastasPro</td>
            </tr>
            <tr>
              <td style="padding:0 32px;">
                <h1 style="margin:0;color:#ffffff;font-size:32px;line-height:1.15;font-weight:800;">Tu acceso ya está listo</h1>
                <p style="margin:18px 0 0;color:#c5c0b7;font-size:16px;line-height:1.65;">Gracias por confiar en SubastasPro. Tu compra se ha confirmado correctamente y ya hemos preparado tu acceso personal al curso.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 0;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;border:1px solid #403a30;border-radius:10px;background:#101010;">
                  <tr>
                    <td style="padding:20px 22px 8px;color:#9f998f;font-size:12px;font-weight:700;text-transform:uppercase;">Correo electrónico</td>
                  </tr>
                  <tr>
                    <td style="padding:0 22px 18px;color:#ffffff;font-size:16px;line-height:1.4;word-break:break-word;">${safeEmail}</td>
                  </tr>
                  <tr>
                    <td style="padding:18px 22px 8px;border-top:1px solid #2d2a25;color:#9f998f;font-size:12px;font-weight:700;text-transform:uppercase;">Código de acceso</td>
                  </tr>
                  <tr>
                    <td style="padding:0 22px 22px;color:#f5a623;font-family:Consolas,Monaco,monospace;font-size:22px;font-weight:800;letter-spacing:1px;word-break:break-word;">${safeCode}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:28px 32px 0;">
                <a href="${COURSE_ACCESS_URL}" style="display:inline-block;padding:15px 24px;border-radius:8px;background:#f5a623;color:#111111;font-size:16px;font-weight:800;text-decoration:none;">Entrar al curso</a>
              </td>
            </tr>
            <tr>
              <td style="padding:26px 32px 0;color:#c5c0b7;font-size:15px;line-height:1.65;">
                <p style="margin:0;">Introduce el mismo correo utilizado durante la compra y el código personal mostrado en este mensaje.</p>
                <p style="margin:14px 0 0;color:#f5f2eb;font-weight:700;">Guarda este correo. Tu código es personal y está asociado a tu compra.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 0;">
                <h2 style="margin:0;color:#ffffff;font-size:20px;line-height:1.3;">Primeros pasos</h2>
                <ol style="margin:16px 0 0;padding-left:22px;color:#c5c0b7;font-size:15px;line-height:1.8;">
                  <li>Entra en el área privada.</li>
                  <li>Introduce tu correo y código.</li>
                  <li>Empieza por el primer módulo.</li>
                  <li>Tu progreso quedará guardado en este dispositivo.</li>
                </ol>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 0;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;border-top:1px solid #34312c;">
                  <tr>
                    <td style="padding:24px 0 8px;color:#ffffff;font-size:18px;font-weight:800;">Resumen de tu compra</td>
                  </tr>
                  <tr>
                    <td style="padding:0;color:#a9a49a;font-size:14px;line-height:1.75;">
                      <strong style="color:#f5f2eb;">SubastasPro</strong> · Pago único<br>
                      Fecha: ${purchaseDate}<br>
                      Acceso mínimo garantizado: ${COURSE_ACCESS_MINIMUM_MONTHS} meses, sin perjuicio de tus derechos legales<br>
                      Condiciones: <a href="${COURSE_TERMS_URL}" style="color:#f5a623;text-decoration:underline;">versión ${termsVersion}</a><br>
                      Soporte: <a href="mailto:${COURSE_SUPPORT_EMAIL}" style="color:#f5a623;text-decoration:underline;">${COURSE_SUPPORT_EMAIL}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 0 0;color:#8f8980;font-size:13px;line-height:1.6;">${escapeHtml(immediateAccessConfirmation)}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 34px;color:#8f8980;font-size:13px;line-height:1.65;">
                <p style="margin:0;">Si el botón no funciona, copia esta dirección en tu navegador:</p>
                <p style="margin:6px 0 0;word-break:break-all;"><a href="${COURSE_ACCESS_URL}" style="color:#f5a623;text-decoration:underline;">${COURSE_ACCESS_URL}</a></p>
                <p style="margin:18px 0 0;">Recomendamos guardar este correo en favoritos o en una carpeta específica.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = `Ivan Imports · SubastasPro

Tu acceso ya está listo

Gracias por confiar en SubastasPro. Tu compra se ha confirmado correctamente y ya hemos preparado tu acceso personal al curso.

Correo electrónico: ${email}
Código de acceso: ${code}

Entrar al curso:
${COURSE_ACCESS_URL}

Introduce el mismo correo utilizado durante la compra y el código personal mostrado en este mensaje.

Guarda este correo. Tu código es personal y está asociado a tu compra.

Primeros pasos:
1. Entra en el área privada.
2. Introduce tu correo y código.
3. Empieza por el primer módulo.
4. Tu progreso quedará guardado en este dispositivo.

Resumen de tu compra
SubastasPro · Pago único
Fecha: ${formatPurchaseDate(purchaseSummary?.purchasedAt)}
Acceso mínimo garantizado: ${COURSE_ACCESS_MINIMUM_MONTHS} meses, sin perjuicio de tus derechos legales
Condiciones (${purchaseSummary?.termsVersion || "compra anterior al registro versionado"}):
${COURSE_TERMS_URL}
Soporte: ${COURSE_SUPPORT_EMAIL}

${immediateAccessConfirmation}

Recomendamos guardar este correo en favoritos o en una carpeta específica.`;

  return {
    subject: COURSE_ACCESS_EMAIL_SUBJECT,
    html,
    text
  };
}
