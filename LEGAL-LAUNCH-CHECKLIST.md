# Checklist legal de lanzamiento

Documento interno de administración y desarrollo. No publicar como página web.

- [ ] Ejecutar `supabase/migrations/create_purchase_consents.sql` en Supabase.
- [ ] Pausar temporalmente el Payment Link LIVE antes de activar el nuevo flujo para que no entren compras durante el cambio.
- [ ] Inmediatamente después de pausarlo, anotar la hora UTC exacta en formato ISO 8601, por ejemplo `2026-08-07T18:30:00.000Z`.
- [ ] Configurar esa hora como `PURCHASE_CONSENT_REQUIRED_FROM` en Vercel Production antes de desplegar.
- [ ] Desplegar, comprobar `/comprar` y volver a activar el Payment Link solo cuando el nuevo flujo esté operativo.
- [ ] Documentar como históricas las sesiones creadas antes del corte y conservar la evidencia de activación.
- [ ] Configurar en Stripe la URL de condiciones: `https://subastaspro.ivanimports.es/legal/condiciones`.
- [ ] Configurar en Stripe la URL de privacidad: `https://subastaspro.ivanimports.es/legal/privacidad`.
- [ ] Confirmar en Stripe que la dirección y el teléfono comerciales son correctos.
- [ ] Confirmar que el webhook de Stripe escucha `checkout.session.completed`, `checkout.session.async_payment_succeeded` y `charge.refunded`.
- [ ] Revisar el Payment Link LIVE y su Price ID sin modificarlos.
- [ ] Hacer una compra real controlada desde `/comprar`.
- [ ] Verificar que el consentimiento queda registrado y vinculado a la sesión Stripe.
- [ ] Verificar que una sesión nueva sin consentimiento pasa a revisión manual y no recibe acceso.
- [ ] Verificar el email transaccional y su resumen contractual.
- [ ] Verificar el acceso mediante email y código.
- [ ] Verificar que un reembolso total revoca el acceso y que uno parcial no lo hace automáticamente.
- [ ] Verificar aceptar, rechazar, configurar y retirar el permiso de YouTube.
- [ ] Verificar que YouTube no recibe solicitudes antes del consentimiento.
- [ ] Verificar que el progreso local sigue funcionando tras rechazar contenido externo.
- [ ] Revisar textos, versiones y datos del titular antes de publicar.
- [ ] Revisar contratos, ubicaciones y mecanismos de transferencia internacional de Vercel, Supabase, Stripe, Resend y Google/YouTube.
- [ ] Realizar una revisión jurídica profesional final.
- [ ] Revisar obligaciones autonómicas de consumo / Hoj@ según aplicabilidad y calendario.
