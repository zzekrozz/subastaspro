alter table public.course_access_codes
  add column if not exists email_status text not null default 'pending',
  add column if not exists email_sent_at timestamptz null,
  add column if not exists email_provider_id text null,
  add column if not exists email_last_error text null,
  add column if not exists email_attempt_count integer not null default 0,
  add column if not exists email_last_attempt_at timestamptz null;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'course_access_codes_email_status_check'
      and conrelid = 'public.course_access_codes'::regclass
  ) then
    alter table public.course_access_codes
      add constraint course_access_codes_email_status_check
      check (email_status in ('pending', 'sending', 'sent', 'failed'));
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'course_access_codes_email_attempt_count_check'
      and conrelid = 'public.course_access_codes'::regclass
  ) then
    alter table public.course_access_codes
      add constraint course_access_codes_email_attempt_count_check
      check (email_attempt_count >= 0);
  end if;
end;
$$;

create or replace function public.claim_course_access_email_delivery(
  p_stripe_session_id text,
  p_stale_before timestamptz
)
returns table (
  access_id uuid,
  access_email text,
  access_code text,
  access_email_status text,
  access_email_attempt_count integer
)
language plpgsql
security definer
set search_path = public
as $$
begin
  return query
  update public.course_access_codes as access
  set
    email_status = 'sending',
    email_attempt_count = access.email_attempt_count + 1,
    email_last_attempt_at = now(),
    email_last_error = null
  where access.stripe_session_id = p_stripe_session_id
    and (
      access.email_status in ('pending', 'failed')
      or (
        access.email_status = 'sending'
        and (
          access.email_last_attempt_at is null
          or access.email_last_attempt_at < p_stale_before
        )
      )
    )
  returning
    access.id,
    access.email,
    access.code,
    access.email_status,
    access.email_attempt_count;
end;
$$;

revoke all on function public.claim_course_access_email_delivery(text, timestamptz)
  from public, anon, authenticated;

grant execute on function public.claim_course_access_email_delivery(text, timestamptz)
  to service_role;
