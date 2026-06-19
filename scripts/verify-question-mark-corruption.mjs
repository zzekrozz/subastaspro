import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const TARGET_DIRS = ["app", "components", "lib", "scripts"];
const ALLOWED_DIRS = new Set(["node_modules", ".next", ".git"]);
const SUSPICIOUS = /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]\?[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]|\?\?/g;

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ALLOWED_DIRS.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
      continue;
    }
    if (/\.(js|mjs)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

let total = 0;

for (const targetDir of TARGET_DIRS) {
  const absoluteDir = path.join(ROOT, targetDir);
  if (!fs.existsSync(absoluteDir)) continue;

  for (const file of walk(absoluteDir)) {
    const content = fs.readFileSync(file, "utf8");
    const matches = content.match(SUSPICIOUS) || [];
    if (!matches.length) continue;

    total += matches.length;
    const uniqueMatches = [...new Set(matches)].join(", ");
    console.log(`${path.relative(ROOT, file)} -> ${matches.length} sospechosas: ${uniqueMatches}`);
  }
}

if (!total) {
  console.log("OK: no quedan palabras con ? sospechoso en app/components/lib/scripts.");
  process.exit(0);
}

console.log(`TOTAL: ${total}`);
process.exit(1);
