-- Acceso con Google: vincula cada compra a una cuenta de Google.
-- Ejecutar una vez en Supabase (SQL Editor). Es idempotente.

alter table public.course_access_codes
  add column if not exists google_sub text null,
  add column if not exists google_email text null,
  add column if not exists google_linked_at timestamptz null;

-- Una cuenta de Google solo puede estar vinculada a una compra.
create unique index if not exists course_access_codes_google_sub_key
  on public.course_access_codes (google_sub)
  where google_sub is not null;

create index if not exists course_access_codes_email_status_idx
  on public.course_access_codes (email, status);
