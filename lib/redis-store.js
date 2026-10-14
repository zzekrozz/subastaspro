// Cliente mínimo de Upstash Redis (REST), el mismo enfoque que IvanImports Radar.
// Sin dependencias: solo fetch. Cada entorno de Vercel usa su propio prefijo.

export function redisConfigFromEnv(env = process.env) {
  const url =
    env.SUBASTASPRO_REDIS_REST_URL ||
    env.SUBASTASPRO_UPSTASH_KV_REST_API_URL ||
    env.UPSTASH_REDIS_REST_URL ||
    env.KV_REST_API_URL ||
    "";
  const token =
    env.SUBASTASPRO_REDIS_REST_TOKEN ||
    env.SUBASTASPRO_UPSTASH_KV_REST_API_TOKEN ||
    env.UPSTASH_REDIS_REST_TOKEN ||
    env.KV_REST_API_TOKEN ||
    "";
  const vercelEnv = String(env.VERCEL_ENV || "development");
  const environment =
    vercelEnv === "production" ? "production" : vercelEnv === "preview" ? "preview" : "development";

  return { url: String(url).replace(/\/$/, ""), token: String(token), environment };
}

export function hasRedisConfig(env = process.env) {
  const config = redisConfigFromEnv(env);
  return Boolean(config.url && config.token);
}

export const storeNamespace = (environment) => `subastaspro:v1:${environment}:`;

export class StoreError extends Error {
  constructor(reason) {
    super(reason);
    this.reason = reason;
  }
}

export function createRedisStore(config = redisConfigFromEnv(), fetchImpl = fetch) {
  if (!config.url || !config.token) {
    throw new StoreError("redis_not_configured");
  }

  const NS = storeNamespace(config.environment);

  async function post(path, body) {
    const response = await fetchImpl(`${config.url}${path}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body),
      cache: "no-store"
    });

    if (!response.ok) throw new StoreError("redis_unavailable");
    return response.json();
  }

  async function cmd(...args) {
    const out = await post("", args.map((arg) => String(arg)));
    if (out?.error) throw new StoreError("redis_error");
    return out?.result ?? null;
  }

  async function pipeline(commands) {
    if (!commands.length) return [];
    const out = await post(
      "/pipeline",
      commands.map((command) => command.map((arg) => String(arg)))
    );

    if (!Array.isArray(out) || out.some((item) => item?.error)) {
      throw new StoreError("redis_error");
    }

    return out.map((item) => item.result ?? null);
  }

  /** Lua atómico: KEYS y ARGV se pasan ya con el prefijo aplicado por quien llama. */
  async function evalScript(script, keys, args) {
    return cmd("EVAL", script, keys.length, ...keys, ...args);
  }

  return {
    key: (suffix) => `${NS}${suffix}`,
    cmd,
    pipeline,
    evalScript
  };
}

let cachedStore = null;
let cachedSignature = "";

/** Instancia compartida por proceso (se recrea si cambian las variables). */
export function getStore() {
  const config = redisConfigFromEnv();
  const signature = `${config.url}|${config.environment}|${config.token.length}`;

  if (!cachedStore || cachedSignature !== signature) {
    cachedStore = createRedisStore(config);
    cachedSignature = signature;
  }

  return cachedStore;
}

export function parseJson(raw) {
  if (typeof raw !== "string" || !raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
