import "server-only";

import { getSessionSecret } from "@/lib/google-auth-flow";
import { hmac } from "@/lib/google-identity-core";
import { getStore, hasRedisConfig } from "@/lib/redis-store";

/** Un nonce de Google solo puede canjearse una vez (igual que en Radar). */
export async function consumeGoogleNonce(nonce) {
  if (!hasRedisConfig()) return true;

  try {
    const store = getStore();
    const result = await store.cmd(
      "SET",
      store.key(`google-nonce-used:${hmac(getSessionSecret(), nonce)}`),
      "1",
      "NX",
      "EX",
      900
    );

    return result === "OK";
  } catch {
    // Si Redis no responde no bloqueamos el acceso: el nonce ya va firmado y caduca en 10 minutos.
    return true;
  }
}
