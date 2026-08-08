import { LegalDocument, LegalSection } from "@/components/legal-document";
import {
  COURSE_ACCESS_MINIMUM_MONTHS,
  LEGAL_OWNER,
  TERMS_VERSION
} from "@/lib/legal-config";

export const metadata = {
  title: "Condiciones de contratación",
  description: "Condiciones aplicables a la compra y acceso al curso digital SubastasPro.",
  alternates: { canonical: "/legal/condiciones" }
};

const toc = [
  { id: "empresario", label: "Empresario y objeto" },
  { id: "producto", label: "Producto y precio" },
  { id: "compra", label: "Compra y acceso" },
  { id: "duracion", label: "Duración y requisitos" },
  { id: "desistimiento", label: "Desistimiento" },
  { id: "uso", label: "Uso y propiedad intelectual" },
  { id: "resultados", label: "Contenido y resultados" },
  { id: "incidencias", label: "Suspensión, reembolsos y soporte" },
  { id: "ley", label: "Reclamaciones y ley aplicable" }
];

export default function CondicionesPage() {
  return (
    <LegalDocument
      description={`Versión ${TERMS_VERSION}. Estas son las condiciones que se aceptan antes de continuar al checkout de Stripe.`}
      title="Condiciones generales de contratación"
      toc={toc}
    >
      <LegalSection id="empresario" title="1. Empresario, ámbito y objeto">
        <p>
          El vendedor es {LEGAL_OWNER.name}, NIF {LEGAL_OWNER.taxId}, {LEGAL_OWNER.status},
          con domicilio en {LEGAL_OWNER.address}, bajo la marca {LEGAL_OWNER.brand}.
          Contacto: <a href={`mailto:${LEGAL_OWNER.email}`}>{LEGAL_OWNER.email}</a> y{" "}
          <a href={`tel:${LEGAL_OWNER.phone.replaceAll(" ", "")}`}>{LEGAL_OWNER.phone}</a>.
        </p>
        <p>
          El contrato tiene por objeto un acceso individual a SubastasPro, formación
          digital online relacionada con subastas de vehículos. Se dirige
          principalmente a España, sin excluir técnicamente compras extranjeras que
          Stripe admita. La persona compradora debe tener capacidad legal para
          contratar o actuar con la representación que corresponda.
        </p>
      </LegalSection>

      <LegalSection id="producto" title="2. Producto, características y precio">
        <p>
          SubastasPro es formación bajo demanda con vídeos, textos, materiales,
          checklists y recursos disponibles en el área privada. El contenido concreto
          mostrado antes de comprar forma parte de la información precontractual.
        </p>
        <p>
          El precio comercial actual es 29 € más el IVA aplicable. Para España, con el
          21 % actualmente configurado mediante Stripe Tax, el total es 35,09 € IVA
          incluido. Las promociones o cupones pueden modificar el importe. El precio
          final, impuestos y posibles descuentos se muestran en Stripe antes de pagar
          y prevalecen para esa operación. El precio de 29 € no se garantiza de forma
          permanente.
        </p>
        <p>El pago es único y no existe suscripción ni renovación automática.</p>
      </LegalSection>

      <LegalSection id="compra" title="3. Proceso de compra y entrega del acceso">
        <ol>
          <li>En la página de compra se revisan y aceptan estas condiciones y la solicitud de acceso inmediato.</li>
          <li>El pago se completa en el checkout seguro alojado por Stripe.</li>
          <li>Tras la confirmación del pago y del producto correcto, se genera un código personal asociado al email usado en la compra.</li>
          <li>Resend envía las credenciales y un resumen contractual a ese email.</li>
          <li>El usuario entra con la pareja exacta de email y código.</li>
        </ol>
        <p>
          Debes facilitar un email válido y revisar las carpetas de spam o promociones.
          Si la entrega automática falla, contacta con soporte sin repetir el pago.
        </p>
      </LegalSection>

      <LegalSection id="duracion" title="4. Duración, compatibilidad y actualizaciones">
        <p>
          El acceso se garantiza durante un periodo mínimo de {COURSE_ACCESS_MINIMUM_MONTHS} meses
          desde la compra, sin perjuicio de los derechos legales que correspondan al
          consumidor. Transcurrido ese periodo, podrá mantenerse mientras SubastasPro
          continúe disponible. Esta previsión no limita los plazos, responsabilidades
          ni derechos imperativos de conformidad aplicables al contenido digital.
        </p>
        <p>
          Se necesita conexión a internet, navegador moderno, reproducción multimedia
          habilitada y un email válido. El progreso se conserva localmente en el
          dispositivo y puede perderse si se borran los datos del navegador. Se podrán
          realizar actualizaciones razonables de seguridad, corrección o mejora sin
          desnaturalizar el producto contratado.
        </p>
      </LegalSection>

      <LegalSection id="desistimiento" title="5. Derecho de desistimiento y acceso inmediato">
        <p>
          Con carácter general, la contratación a distancia por consumidores puede
          incluir un plazo legal de desistimiento. En el suministro de contenido
          digital que no se presta en soporte material, ese derecho puede perderse
          cuando la ejecución comienza con consentimiento previo y expreso del
          consumidor y con su conocimiento de esa consecuencia, siempre que se
          facilite la confirmación exigible.
        </p>
        <p>
          Antes de ir a Stripe se solicita por separado que el comprador pida acceso
          inmediato y confirme que entiende que, al comenzar el contenido digital,
          pierde su derecho de desistimiento. La casilla no está preseleccionada y la
          aceptación queda vinculada a la sesión de compra. Esto no elimina los
          derechos por falta de conformidad, información incorrecta u otros derechos
          obligatorios que resulten aplicables.
        </p>
      </LegalSection>

      <LegalSection id="uso" title="6. Acceso personal y propiedad intelectual">
        <p>
          El acceso es personal, individual, no transferible y no revendible. No está
          permitido compartir correo, código o cuenta; revender accesos; copiar o
          reproducir masivamente el curso; redistribuir vídeos; descargar materiales
          cuando no esté expresamente permitido; republicar textos; grabar y distribuir
          lecciones; ni explotar comercialmente el contenido sin autorización.
        </p>
        <p>
          El titular conserva los derechos sobre sus materiales. Las marcas,
          interfaces y contenidos de Auto1, Copart, Stripe, YouTube y otros terceros
          corresponden a sus respectivos propietarios.
        </p>
      </LegalSection>

      <LegalSection id="resultados" title="7. Naturaleza formativa y resultados">
        <p>
          El curso proporciona criterios y metodología educativa, pero no garantiza
          beneficios económicos, adjudicaciones, disponibilidad de vehículos ni un
          resultado comercial concreto. Los precios, daños, comisiones, documentación,
          reglas y condiciones de terceros pueden cambiar.
        </p>
        <p>
          El usuario debe contrastar la ficha de cada vehículo y las condiciones
          oficiales vigentes antes de pujar o asumir costes. Estas advertencias no
          vacían el contenido ni excluyen la responsabilidad legal por la calidad y
          conformidad del producto digital entregado.
        </p>
      </LegalSection>

      <LegalSection id="incidencias" title="8. Suspensión, reembolsos y soporte">
        <p>
          El acceso podrá bloquearse de forma proporcionada ante fraude, compartición
          abusiva, reventa, vulneración de propiedad intelectual, uso contrario a estas
          condiciones, chargeback abusivo o reembolso confirmado. Se valorarán las
          circunstancias y se respetarán siempre los derechos obligatorios del
          consumidor.
        </p>
        <p>
          Un reembolso válido puede implicar la revocación del acceso. Para incidencias,
          solicitudes o reclamaciones escribe a{" "}
          <a href={`mailto:${LEGAL_OWNER.email}`}>{LEGAL_OWNER.email}</a> o llama al{" "}
          <a href={`tel:${LEGAL_OWNER.phone.replaceAll(" ", "")}`}>{LEGAL_OWNER.phone}</a>.
          Se acusará recibo y se solicitará solo la información necesaria para revisar
          el caso.
        </p>
      </LegalSection>

      <LegalSection id="ley" title="9. Modificaciones, reclamaciones y ley aplicable">
        <p>
          Las condiciones aplicables son las aceptadas en el momento de contratar y
          quedan identificadas mediante su versión. Las modificaciones futuras no
          alteran retroactivamente el contenido contractual de compras anteriores.
        </p>
        <p>
          El contrato se rige por la legislación española. El titular no está adherido
          voluntariamente al Sistema Arbitral de Consumo. Si el comprador es consumidor,
          conservará los tribunales y mecanismos de protección que le reconozcan las
          normas imperativas de su domicilio o las que resulten aplicables; no se impone
          una jurisdicción que prive de esos derechos.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
