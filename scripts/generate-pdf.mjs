import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

import { finalChecklistGroups } from "../lib/course-content.js";

const require = createRequire(import.meta.url);
const { PDFDocument, StandardFonts, rgb } = require("pdf-lib");
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.resolve(__dirname, "../public/downloads/checklist-subastas-antes-de-pujar.pdf");
const PAGE = { width: 595.28, height: 841.89, marginX: 48, top: 54, bottom: 48 };

function wrapText(text, maxChars = 76) {
  const lines = [];
  let current = "";

  for (const word of text.split(" ")) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }

  if (current) lines.push(current);
  return lines;
}

function addPage(pdf) {
  const page = pdf.addPage([PAGE.width, PAGE.height]);
  page.drawRectangle({ x: 0, y: 0, width: PAGE.width, height: PAGE.height, color: rgb(0.965, 0.955, 0.93) });
  page.drawRectangle({ x: 0, y: PAGE.height - 8, width: PAGE.width, height: 8, color: rgb(0.95, 0.59, 0.12) });
  return page;
}

function drawLines(page, lines, { x, y, font, size = 10.5, color = rgb(0.15, 0.15, 0.14), lineHeight = 14 }) {
  lines.forEach((line, index) => page.drawText(line, { x, y: y - index * lineHeight, font, size, color }));
  return lines.length * lineHeight;
}

async function buildPdf() {
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  const pdf = await PDFDocument.create();
  const regular = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  let page = addPage(pdf);
  let y = PAGE.height - PAGE.top;

  y -= drawLines(page, ["SUBASTASPRO"], { x: PAGE.marginX, y, font: bold, size: 11, color: rgb(0.72, 0.38, 0.03) });
  y -= 10;
  y -= drawLines(page, wrapText("Checklist operativo antes de pujar", 42), { x: PAGE.marginX, y, font: bold, size: 23, lineHeight: 27 });
  y -= 8;
  y -= drawLines(page, wrapText("Ficha, coste, puja, documentacion, pago y recogida en una sola rutina de comprobacion."), { x: PAGE.marginX, y, font: regular, size: 10.5, color: rgb(0.34, 0.33, 0.3) });
  y -= 18;

  for (const [groupIndex, group] of finalChecklistGroups.entries()) {
    const estimated = 38 + group.items.reduce((sum, item) => sum + wrapText(item, 68).length * 14 + 5, 0);
    if (y - estimated < PAGE.bottom) {
      page = addPage(pdf);
      y = PAGE.height - PAGE.top;
    }

    page.drawText(String(groupIndex + 1).padStart(2, "0"), { x: PAGE.marginX, y, font: bold, size: 10, color: rgb(0.72, 0.38, 0.03) });
    y -= drawLines(page, [group.title.toUpperCase()], { x: PAGE.marginX + 30, y, font: bold, size: 12.5 });
    y -= 10;

    for (const item of group.items) {
      page.drawRectangle({ x: PAGE.marginX + 30, y: y - 1, width: 8, height: 8, borderWidth: 1, borderColor: rgb(0.55, 0.53, 0.48) });
      const lines = wrapText(item, 68);
      y -= drawLines(page, lines, { x: PAGE.marginX + 48, y: y + 7, font: regular });
      y -= 5;
    }
    y -= 13;
  }

  const footer = "Comprueba siempre las condiciones oficiales vigentes de cada plataforma antes de operar.";
  if (y - 44 < PAGE.bottom) {
    page = addPage(pdf);
    y = PAGE.height - PAGE.top;
  }
  page.drawRectangle({ x: PAGE.marginX, y: y - 28, width: PAGE.width - PAGE.marginX * 2, height: 42, color: rgb(0.91, 0.89, 0.84) });
  drawLines(page, wrapText(footer, 72), { x: PAGE.marginX + 14, y: y - 2, font: bold, size: 9.5, color: rgb(0.26, 0.25, 0.22), lineHeight: 12 });

  const pages = pdf.getPages();
  pages.forEach((pdfPage, index) => {
    const footerText = `SubastasPro · ${index + 1}/${pages.length}`;
    const footerWidth = regular.widthOfTextAtSize(footerText, 8.5);
    pdfPage.drawText(footerText, { x: (PAGE.width - footerWidth) / 2, y: 20, font: regular, size: 8.5, color: rgb(0.45, 0.44, 0.4) });
  });

  await fs.writeFile(outputPath, await pdf.save());
  console.log(outputPath);
}

await buildPdf();
