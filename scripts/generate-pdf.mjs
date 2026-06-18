import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

import {
  auto1ChecklistItems,
  copartAvoidItems,
  copartKeys,
  pickupChecklistItems
} from "../lib/course-content.js";

const require = createRequire(import.meta.url);
const { PDFDocument, StandardFonts, rgb } = require("pdf-lib");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.resolve(
  __dirname,
  "../public/downloads/checklist-subastas-antes-de-pujar.pdf"
);

const pageWidth = 595.28;
const pageHeight = 841.89;
const marginX = 48;
const topMargin = 54;
const bottomMargin = 44;
const lineHeight = 15;

function wrapText(text, maxChars = 74) {
  const words = text.split(" ");
  const lines = [];
  let currentLine = "";

  for (const word of words) {
    const nextLine = currentLine ? `${currentLine} ${word}` : word;
    if (nextLine.length > maxChars) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = nextLine;
    }
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
}

function sectionToLines() {
  const lines = [];

  lines.push({ type: "title", text: "Checklist de Subastas: Antes de Pujar" });
  lines.push({
    type: "body",
    text: "Guia de repaso rapido para registro, revision de fichas, pujas y recogidas."
  });
  lines.push({ type: "spacer" });

  lines.push({ type: "section", text: "1. Documentos para registrarte" });
  lines.push({ type: "bullet", text: "Autonomo: DNI, IAE, direccion" });
  lines.push({
    type: "bullet",
    text: "Empresa: CIF, IAE, direccion y a veces escrituras"
  });
  lines.push({ type: "spacer" });

  lines.push({ type: "section", text: "2. Checklist Auto1" });
  auto1ChecklistItems.forEach((item) => lines.push({ type: "bullet", text: item }));
  lines.push({ type: "spacer" });

  lines.push({ type: "section", text: "3. Regla 15:00 Auto1" });
  lines.push({
    type: "body",
    text: "Para recoger al dia siguiente, normalmente hay que seleccionar la recogida antes de las 15:00."
  });
  lines.push({ type: "spacer" });

  lines.push({ type: "section", text: "4. Recogida Auto1" });
  pickupChecklistItems.forEach((item) => lines.push({ type: "bullet", text: item }));
  lines.push({ type: "spacer" });

  lines.push({ type: "section", text: "5. Claves Copart" });
  copartKeys.forEach((item) =>
    lines.push({
      type: "bullet",
      text: `${item.term}: ${item.description}`
    })
  );
  lines.push({ type: "spacer" });

  lines.push({ type: "section", text: "6. Coches que evitar en Copart" });
  copartAvoidItems.forEach((item) => lines.push({ type: "bullet", text: item }));
  lines.push({ type: "spacer" });

  lines.push({ type: "section", text: "7. Optimo vs maximo" });
  lines.push({
    type: "bullet",
    text: "Define tu precio optimo antes de entrar en la subasta."
  });
  lines.push({
    type: "bullet",
    text: "Define tu precio maximo absoluto sin moverlo en caliente."
  });
  lines.push({
    type: "bullet",
    text: "No superes el maximo aunque falten 100 euros."
  });
  lines.push({ type: "spacer" });

  lines.push({ type: "section", text: "Frases destacadas" });
  lines.push({ type: "quote", text: "El precio de puja no es el coste real." });
  lines.push({
    type: "quote",
    text: "En subasta no compras informacion perfecta, compras informacion suficiente para decidir."
  });
  lines.push({
    type: "quote",
    text: "La subasta no te arruina de golpe, te arruina de 100 en 100."
  });
  lines.push({ type: "quote", text: "Si no compras ese coche, compraras otro." });

  return lines;
}

function drawWrappedLine(page, font, boldFont, item, startY) {
  const fontSize =
    item.type === "title" ? 22 : item.type === "section" ? 13 : 11;
  const activeFont =
    item.type === "title" || item.type === "section" ? boldFont : font;
  const color =
    item.type === "title" || item.type === "section"
      ? rgb(0.13, 0.13, 0.13)
      : item.type === "quote"
        ? rgb(0.45, 0.27, 0.02)
        : rgb(0.22, 0.22, 0.22);
  const prefix = item.type === "bullet" ? "• " : item.type === "quote" ? "“" : "";
  const suffix = item.type === "quote" ? "”" : "";
  const indent = item.type === "bullet" ? 14 : item.type === "quote" ? 8 : 0;
  const wrapped = wrapText(`${prefix}${item.text}${suffix}`, item.type === "title" ? 42 : 78);

  wrapped.forEach((line, index) => {
    page.drawText(line, {
      x: marginX + indent,
      y: startY - index * lineHeight,
      size: fontSize,
      font: activeFont,
      color
    });
  });

  return wrapped.length * lineHeight + (item.type === "title" ? 10 : 4);
}

async function buildPdf() {
  await fs.mkdir(path.dirname(outputPath), { recursive: true });

  const pdf = await PDFDocument.create();
  const regular = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const items = sectionToLines();

  let page = pdf.addPage([pageWidth, pageHeight]);
  let cursorY = pageHeight - topMargin;

  page.drawRectangle({
    x: 0,
    y: 0,
    width: pageWidth,
    height: pageHeight,
    color: rgb(0.985, 0.97, 0.94)
  });

  for (const item of items) {
    if (item.type === "spacer") {
      cursorY -= 8;
      continue;
    }

    const estimatedHeight =
      wrapText(item.text, item.type === "title" ? 42 : 78).length * lineHeight + 24;

    if (cursorY - estimatedHeight < bottomMargin) {
      page = pdf.addPage([pageWidth, pageHeight]);
      page.drawRectangle({
        x: 0,
        y: 0,
        width: pageWidth,
        height: pageHeight,
        color: rgb(0.985, 0.97, 0.94)
      });
      cursorY = pageHeight - topMargin;
    }

    cursorY -= drawWrappedLine(page, regular, bold, item, cursorY);
  }

  page.drawText("Ivan Imports · Antes de Pujar", {
    x: marginX,
    y: 18,
    size: 9,
    font: regular,
    color: rgb(0.45, 0.45, 0.45)
  });

  const bytes = await pdf.save();
  await fs.writeFile(outputPath, bytes);

  console.log(outputPath);
}

await buildPdf();
