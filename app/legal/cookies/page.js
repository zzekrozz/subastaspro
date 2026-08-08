import { LegalDataTable, LegalDocument, LegalSection } from "@/components/legal-document";

export const metadata = {
  title: "Política de cookies",
  description: "Cookies y almacenamiento local utilizados realmente por SubastasPro.",
  alternates: { canonical: "/legal/cookies" }
};

const toc = [
  { id: "alcance", label: "Qué utilizamos" },
  { id: "tabla", label: "Tabla de almacenamiento" },
  { id: "youtube", label: "YouTube y Stripe" },
  { id: "gestionar", label: "Gestionar preferencias" }
];

export default function CookiesPage() {
  return (
    <LegalDocument
      description="No usamos analítica, publicidad ni píxeles. Esta página explica la cookie y el almacenamiento funcional que sí existen."
      title="Política de cookies y almacenamiento local"
      toc={toc}
    >
      <LegalSection id="alcance" title="1. Qué tecnologías utilizamos">
        <p>
          Una cookie es un pequeño archivo que el navegador asocia a un sitio. El
          almacenamiento local o <em>localStorage</em> permite conservar preferencias
          en el dispositivo. SubastasPro usa ambas tecnologías para prestar funciones
          solicitadas y, si lo autorizas, permite cargar contenido externo de YouTube.
        </p>
        <p>
          Actualmente no están instalados Google Analytics, Meta Pixel, TikTok Pixel
          ni otras herramientas de publicidad o medición de audiencia.
        </p>
      </LegalSection>

      <LegalSection id="tabla" title="2. Almacenamiento real del sitio">
        <LegalDataTable
          columns={["Nombre", "Titular", "Finalidad y tipo", "Duración", "Categoría"]}
          rows={[
            ["subastaspro_session", "SubastasPro", "Cookie HttpOnly firmada para mantener el acceso autenticado. Secure en producción y SameSite=Lax.", "30 días", "Necesaria"],
            ["subastaspro-cookie-consent", "SubastasPro", "localStorage que conserva la versión, fecha, caducidad y preferencia sobre contenido externo.", "Hasta 12 meses o hasta que cambie la versión", "Necesaria"],
            ["antes-de-pujar-completed-modules", "SubastasPro", "localStorage para recordar los módulos que el usuario marca como completados.", "Hasta que se borren los datos del navegador", "Necesaria / funcional solicitada"]
          ]}
        />
        <p>
          Rechazar contenido externo no elimina el progreso ni las checklists, porque
          esos datos se guardan para una función del curso solicitada por el usuario y
          no se usan con fines publicitarios.
        </p>
      </LegalSection>

      <LegalSection id="youtube" title="3. YouTube y checkout de Stripe">
        <p>
          Los reproductores usan el dominio de privacidad mejorada
          <code> youtube-nocookie.com</code>, pero no se crean ni cargan antes de que
          permitas contenido externo. Cuando lo haces, YouTube/Google puede recibir
          datos técnicos y utilizar cookies o tecnologías similares conforme a sus
          propias políticas. Su duración y nombres pueden variar según el proveedor,
          la sesión de Google y la configuración del navegador.
        </p>
        <p>
          El pago se realiza fuera de este dominio en un checkout alojado por Stripe.
          Al continuar al pago, Stripe puede usar sus propias cookies necesarias para
          seguridad, fraude y funcionamiento del checkout. Esas tecnologías se rigen
          por la información facilitada por Stripe en su dominio y no se cargan en
          SubastasPro por el simple hecho de visitar esta web.
        </p>
      </LegalSection>

      <LegalSection id="gestionar" title="4. Cómo gestionar tus preferencias">
        <p>
          En la primera visita puedes aceptar, rechazar o configurar con acciones de
          igual facilidad. Más tarde, usa “Configurar cookies” en el pie de página para
          permitir o retirar YouTube. Al retirar el permiso, los reproductores cargados
          se desmontan de la interfaz.
        </p>
        <p>
          También puedes eliminar cookies y almacenamiento desde la configuración de
          tu navegador. Si borras <code>subastaspro_session</code>, tendrás que volver a
          identificarte. Si borras las claves de progreso, perderás el seguimiento
          guardado en ese dispositivo.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
