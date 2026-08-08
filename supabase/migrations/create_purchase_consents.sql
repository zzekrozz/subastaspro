create table if not exists public.purchase_consents (
  id uuid primary key,
  created_at timestamptz not null default now(),
  terms_version text not null,
  privacy_version text not null,
  withdrawal_version text not null,
  terms_text_sha256 text not null,
  withdrawal_text_sha256 text not null,
  terms_accepted boolean not null,
  terms_accepted_at timestamptz not null,
  immediate_access_requested boolean not null,
  withdrawal_acknowledged boolean not null,
  withdrawal_accepted_at timestamptz not null,
  stripe_session_id text null unique,
  stripe_event_id text null,
  checkout_created_at timestamptz null,
  linked_at timestamptz null,
  status text not null default 'pending',
  constraint purchase_consents_terms_required check (terms_accepted = true),
  constraint purchase_consents_immediate_access_required check (
    immediate_access_requested = true
  ),
  constraint purchase_consents_withdrawal_required check (
    withdrawal_acknowledged = true
  ),
  constraint purchase_consents_hash_format check (
    terms_text_sha256 ~ '^[0-9a-f]{64}$'
    and withdrawal_text_sha256 ~ '^[0-9a-f]{64}$'
  ),
  constraint purchase_consents_status_check check (
    status in ('pending', 'linked')
  )
);

create table if not exists public.purchase_consent_reviews (
  stripe_event_id text primary key,
  stripe_session_id text not null,
  event_type text not null,
  reason text not null,
  status text not null default 'manual_review',
  created_at timestamptz not null default now(),
  constraint purchase_consent_reviews_status_check check (
    status = 'manual_review'
  )
);

create index if not exists purchase_consents_created_at_idx
  on public.purchase_consents (created_at);

create index if not exists purchase_consent_reviews_session_idx
  on public.purchase_consent_reviews (stripe_session_id);

alter table public.purchase_consents enable row level security;
alter table public.purchase_consent_reviews enable row level security;

revoke all on table public.purchase_consents from public, anon, authenticated;
revoke all on table public.purchase_consent_reviews from public, anon, authenticated;

create or replace function public.claim_purchase_consent_for_checkout(
  p_purchase_consent_id uuid,
  p_stripe_session_id text,
  p_stripe_event_id text,
  p_checkout_created_at timestamptz
)
returns table (
  consent_id uuid,
  consent_terms_version text,
  consent_immediate_access_requested boolean,
  consent_withdrawal_acknowledged boolean
)
language plpgsql
security definer
set search_path = public
as $$
begin
  return query
  update public.purchase_consents as consent
  set
    stripe_session_id = p_stripe_session_id,
    stripe_event_id = coalesce(consent.stripe_event_id, p_stripe_event_id),
    checkout_created_at = coalesce(
      consent.checkout_created_at,
      p_checkout_created_at
    ),
    linked_at = coalesce(consent.linked_at, now()),
    status = 'linked'
  where consent.id = p_purchase_consent_id
    and consent.terms_accepted = true
    and consent.immediate_access_requested = true
    and consent.withdrawal_acknowledged = true
    and (
      consent.stripe_session_id is null
      or consent.stripe_session_id = p_stripe_session_id
    )
  returning
    consent.id,
    consent.terms_version,
    consent.immediate_access_requested,
    consent.withdrawal_acknowledged;
end;
$$;

revoke all on function public.claim_purchase_consent_for_checkout(
  uuid,
  text,
  text,
  timestamptz
) from public, anon, authenticated;

grant execute on function public.claim_purchase_consent_for_checkout(
  uuid,
  text,
  text,
  timestamptz
) to service_role;

