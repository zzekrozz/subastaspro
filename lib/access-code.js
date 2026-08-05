import "server-only";

import { randomBytes } from "node:crypto";

const ACCESS_CODE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
const ACCESS_CODE_LENGTH = 8;
const MAX_UNBIASED_BYTE =
  Math.floor(256 / ACCESS_CODE_ALPHABET.length) * ACCESS_CODE_ALPHABET.length;

export function generateCourseAccessCode() {
  let characters = "";

  while (characters.length < ACCESS_CODE_LENGTH) {
    for (const byte of randomBytes(ACCESS_CODE_LENGTH)) {
      if (byte >= MAX_UNBIASED_BYTE) {
        continue;
      }

      characters += ACCESS_CODE_ALPHABET[byte % ACCESS_CODE_ALPHABET.length];

      if (characters.length === ACCESS_CODE_LENGTH) {
        break;
      }
    }
  }

  return `SUBASTAS-${characters.slice(0, 4)}-${characters.slice(4)}`;
}
