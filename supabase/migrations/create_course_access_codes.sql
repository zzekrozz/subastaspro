create extension if not exists pgcrypto;

create table if not exists public.course_access_codes (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  code text not null unique,
  status text not null default 'active',
  stripe_session_id text null,
  stripe_customer_id text null,
  created_at timestamptz not null default now(),
  assigned_at timestamptz null,
  last_access_at timestamptz null,
  access_count integer not null default 0,
  constraint course_access_codes_email_lowercase check (email = lower(email)),
  constraint course_access_codes_code_uppercase check (code = upper(code)),
  constraint course_access_codes_status_check check (
    status in ('active', 'blocked', 'refunded')
  ),
  constraint course_access_codes_access_count_check check (access_count >= 0)
);

create unique index if not exists course_access_codes_stripe_session_id_key
  on public.course_access_codes (stripe_session_id)
  where stripe_session_id is not null;

create index if not exists course_access_codes_email_code_idx
  on public.course_access_codes (email, code);

create or replace function public.normalize_course_access_codes()
returns trigger
language plpgsql
as $$
begin
  new.email := lower(trim(new.email));
  new.code := upper(trim(new.code));
  return new;
end;
$$;

drop trigger if exists normalize_course_access_codes_before_write
  on public.course_access_codes;

create trigger normalize_course_access_codes_before_write
before insert or update on public.course_access_codes
for each row
execute function public.normalize_course_access_codes();

alter table public.course_access_codes enable row level security;

insert into public.course_access_codes (email, code, status)
values ('prueba@ivanimports.es', 'SUBASTAS-7K4M-92PX', 'active')
on conflict (code) do update
set
  email = excluded.email,
  status = excluded.status;
