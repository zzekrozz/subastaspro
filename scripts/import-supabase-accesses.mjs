// Importa a Upstash Redis los accesos exportados desde Supabase (tabla course_access_codes → CSV).
// Uso:
//   SUBASTASPRO_REDIS_REST_URL=... SUBASTASPRO_REDIS_REST_TOKEN=... VERCEL_ENV=production \
//   node scripts/import-supabase-accesses.mjs course_access_codes.csv
// Es seguro repetirlo: no pisa accesos que ya existan.
import { readFileSync } from "node:fs";

import { createCourseAccessStore } from "../lib/course-access-store.js";
import { createRedisStore, redisConfigFromEnv } from "../lib/redis-store.js";

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];

    if (quoted) {
      if (char === '"' && text[i + 1] === '"') { field += '"'; i += 1; }
      else if (char === '"') quoted = false;
      else field += char;
    } else if (char === '"') quoted = true;
    else if (char === ",") { row.push(field); field = ""; }
    else if (char === "\n" || char === "\r") {
      if (char === "\r" && text[i + 1] === "\n") i += 1;
      row.push(field); rows.push(row); row = []; field = "";
    } else field += char;
  }

  if (field || row.length) { row.push(field); rows.push(row); }

  const [header, ...data] = rows.filter((r) => r.some((value) => value !== ""));
  return data.map((values) => Object.fromEntries(header.map((name, index) => [name.trim(), values[index] ?? ""])));
}

const file = process.argv[2];

if (!file) {
  console.error("Indica el CSV exportado de Supabase: node scripts/import-supabase-accesses.mjs archivo.csv");
  process.exit(1);
}

const config = redisConfigFromEnv();
const store = createRedisStore(config);
const repo = createCourseAccessStore(store);
const keys = repo.keys;
const rows = parseCsv(readFileSync(file, "utf8"));
let imported = 0;
let skipped = 0;

for (const row of rows) {
  const email = String(row.email || "").trim().toLowerCase();
  const code = String(row.code || "").trim().toUpperCase();

  if (!row.id || !email || !code) { skipped += 1; continue; }

  const created = row.created_at ? new Date(row.created_at) : new Date();
  const record = {
    id: row.id,
    email,
    code,
    status: row.status || "active",
    stripe_session_id: row.stripe_session_id || null,
    stripe_customer_id: row.stripe_customer_id || null,
    created_at: created.toISOString(),
    assigned_at: row.assigned_at || created.toISOString(),
    last_access_at: row.last_access_at || null,
    access_count: Number(row.access_count) || 0,
    email_status: row.email_status || "sent",
    email_sent_at: row.email_sent_at || null,
    email_provider_id: row.email_provider_id || null,
    email_last_error: null,
    email_attempt_count: Number(row.email_attempt_count) || 0,
    email_last_attempt_at: row.email_last_attempt_at || null,
    google_sub: null,
    google_email: null,
    google_linked_at: null
  };

  const [setRecord] = await store.pipeline([["SET", keys.access(record.id), JSON.stringify(record), "NX"]]);

  if (setRecord !== "OK") { skipped += 1; continue; }

  await store.pipeline([
    ["SET", keys.byCode(code), record.id, "NX"],
    ["SADD", keys.byEmail(email), record.id],
    ["ZADD", keys.all(), created.getTime() || Date.now(), record.id],
    ...(record.stripe_session_id ? [["SET", keys.bySession(record.stripe_session_id), record.id, "NX"]] : [])
  ]);
  imported += 1;
}

console.log(`Entorno ${config.environment}: ${imported} accesos importados, ${skipped} omitidos.`);
