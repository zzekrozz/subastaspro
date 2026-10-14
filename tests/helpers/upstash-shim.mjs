// Simula la API REST de Upstash contra un redis-server local (solo para tests).
import net from "node:net";

function encode(args) {
  return `*${args.length}\r\n${args.map((a) => `$${Buffer.byteLength(String(a))}\r\n${a}\r\n`).join("")}`;
}

function parse(buffer, offset = 0) {
  const type = String.fromCharCode(buffer[offset]);
  const end = buffer.indexOf("\r\n", offset);
  if (end === -1) return null;
  const line = buffer.toString("utf8", offset + 1, end);
  const next = end + 2;

  if (type === "+") return { value: line, next };
  if (type === "-") return { value: { error: line }, next };
  if (type === ":") return { value: Number(line), next };
  if (type === "$") {
    const len = Number(line);
    if (len === -1) return { value: null, next };
    if (buffer.length < next + len + 2) return null;
    return { value: buffer.toString("utf8", next, next + len), next: next + len + 2 };
  }
  if (type === "*") {
    const count = Number(line);
    if (count === -1) return { value: null, next };
    const items = [];
    let cursor = next;
    for (let i = 0; i < count; i += 1) {
      const item = parse(buffer, cursor);
      if (!item) return null;
      items.push(item.value);
      cursor = item.next;
    }
    return { value: items, next: cursor };
  }
  throw new Error(`RESP desconocido: ${type}`);
}

export function createRespClient(port) {
  const socket = net.createConnection({ port, host: "127.0.0.1" });
  let buffer = Buffer.alloc(0);
  const queue = [];

  socket.on("data", (chunk) => {
    buffer = Buffer.concat([buffer, chunk]);
    while (queue.length) {
      const parsed = parse(buffer);
      if (!parsed) break;
      buffer = buffer.subarray(parsed.next);
      queue.shift()(parsed.value);
    }
  });

  const send = (args) =>
    new Promise((resolve) => {
      queue.push(resolve);
      socket.write(encode(args));
    });

  return { send, close: () => socket.end() };
}

/** fetch compatible con Upstash: POST / y POST /pipeline. */
export function createUpstashFetch(client) {
  const wrap = (value) => (value && typeof value === "object" && "error" in value ? value : { result: value });

  return async (url, init) => {
    const body = JSON.parse(init.body);
    const path = new URL(url).pathname;
    let payload;

    if (path.endsWith("/pipeline")) {
      payload = [];
      for (const command of body) payload.push(wrap(await client.send(command)));
    } else {
      payload = wrap(await client.send(body));
    }

    return { ok: true, json: async () => payload };
  };
}
