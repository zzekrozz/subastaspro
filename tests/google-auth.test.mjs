import assert from "node:assert/strict";
import { generateKeyPairSync, sign } from "node:crypto";
import test from "node:test";

import {
  googleAuthConfigFromEnv,
  isAdminIdentity,
  resetJwksCache,
  verifyGoogleIdToken
} from "../lib/google-identity-core.js";

const CLIENT_ID = "test-client.apps.googleusercontent.com";
const { publicKey, privateKey } = generateKeyPairSync("rsa", { modulusLength: 2048 });
const jwk = { ...publicKey.export({ format: "jwk" }), kid: "k1", alg: "RS256", use: "sig" };
const fetchJwks = async () => ({
  ok: true,
  headers: { get: () => "public, max-age=3600" },
  json: async () => ({ keys: [jwk] })
});

function makeToken(overrides = {}, key = privateKey) {
  const now = Math.floor(Date.now() / 1000);
  const header = Buffer.from(JSON.stringify({ alg: "RS256", kid: "k1", typ: "JWT" })).toString("base64url");
  const claims = Buffer.from(
    JSON.stringify({
      iss: "https://accounts.google.com",
      aud: CLIENT_ID,
      sub: "1234567890",
      email: "Alumno@Example.com",
      email_verified: true,
      given_name: "Ana",
      nonce: "n-1",
      iat: now,
      exp: now + 600,
      ...overrides
    })
  ).toString("base64url");
  const signature = sign("RSA-SHA256", Buffer.from(`${header}.${claims}`), key).toString("base64url");
  return `${header}.${claims}.${signature}`;
}

test("accepts a valid Google ID token and normalises the email", async () => {
  resetJwksCache();
  const identity = await verifyGoogleIdToken(makeToken(), { clientId: CLIENT_ID, nonce: "n-1", fetchImpl: fetchJwks });
  assert.equal(identity.sub, "1234567890");
  assert.equal(identity.email, "alumno@example.com");
  assert.equal(identity.name, "Ana");
});

test("rejects tokens for another app, wrong nonce, unverified email or expired", async () => {
  const cases = [
    [{ aud: "other" }, "bad_audience"],
    [{ nonce: "other" }, "bad_nonce"],
    [{ email_verified: false }, "email_unverified"],
    [{ exp: Math.floor(Date.now() / 1000) - 3600 }, "expired"],
    [{ iss: "https://evil.example" }, "bad_issuer"]
  ];

  for (const [overrides, reason] of cases) {
    await assert.rejects(
      verifyGoogleIdToken(makeToken(overrides), { clientId: CLIENT_ID, nonce: "n-1", fetchImpl: fetchJwks }),
      (error) => error.reason === reason
    );
  }
});

test("rejects tokens signed with a different key", async () => {
  const other = generateKeyPairSync("rsa", { modulusLength: 2048 }).privateKey;
  await assert.rejects(
    verifyGoogleIdToken(makeToken({}, other), { clientId: CLIENT_ID, nonce: "n-1", fetchImpl: fetchJwks }),
    (error) => error.reason === "bad_signature"
  );
});

test("admin is recognised only by configured sub or email", () => {
  const config = googleAuthConfigFromEnv({
    SUBASTASPRO_GOOGLE_CLIENT_ID: CLIENT_ID,
    SUBASTASPRO_ADMIN_EMAILS: " Jefe@Example.com ",
    SUBASTASPRO_ADMIN_GOOGLE_SUBS: "999"
  });

  assert.equal(isAdminIdentity({ sub: "1", email: "jefe@example.com" }, config), true);
  assert.equal(isAdminIdentity({ sub: "999", email: "x@example.com" }, config), true);
  assert.equal(isAdminIdentity({ sub: "1", email: "alumno@example.com" }, config), false);
  assert.equal(isAdminIdentity({ sub: "1", email: "" }, googleAuthConfigFromEnv({})), false);
});
