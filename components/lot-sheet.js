"use client";

import { useEffect, useState } from "react";

// Ficha de lote ficticia: el objeto que el curso enseña a leer.
const LOT_ROWS = [
  { label: "Vehículo", value: "Volkswagen Passat Variant 2.0 TDI" },
  { label: "Primera matriculación", value: "03/2019" },
  { label: "Kilometraje", value: "148.300 km" },
  { label: "Daño principal", value: "Frontal, declarado", note: 1 },
  { label: "Documentación", value: "ZB1 + ZB2 disponibles", note: 2 },
  { label: "Indicadores", value: "R verde, arranca y se mueve", note: 3 },
  { label: "Puja actual", value: "6.450 €", note: 4, strong: true }
];

export const LOT_NOTES = [
  {
    title: "Daño principal",
    text: "Las fotos mandan sobre la etiqueta. Aprendes a ver qué daño hay de verdad y cuánto cuesta."
  },
  {
    title: "Papeles",
    text: "ZB1, ZB2 y COC deciden si podrás matricularlo en España sin sorpresas."
  },
  {
    title: "Indicadores",
    text: "R, S y la prueba dinámica cambian el riesgo y la forma de recoger el coche."
  },
  {
    title: "Puja frente a coste",
    text: "La puja es solo una parte. Sumas comisiones, transporte y matriculación antes de fijar tu máximo."
  }
];

const START_SECONDS = 2 * 3600 + 14 * 60 + 37;

function formatClock(totalSeconds) {
  const safe = Math.max(0, totalSeconds);
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);
  const seconds = safe % 60;

  return [hours, minutes, seconds].map((part) => String(part).padStart(2, "0")).join(":");
}

export function LotSheet() {
  const [remaining, setRemaining] = useState(START_SECONDS);
  const [activeNote, setActiveNote] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining((current) => (current <= 0 ? START_SECONDS : current - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="lot" data-active={activeNote || undefined}>
      <div className="lot-sheet" aria-label="Ejemplo ficticio de ficha de subasta">
        <div className="lot-head">
          <div>
            <span className="lot-kicker">Lote</span>
            <strong className="lot-number">48217</strong>
          </div>
          <div className="lot-clock" aria-label="Tiempo restante de la subasta de ejemplo">
            <span>Cierra en</span>
            <strong>{formatClock(remaining)}</strong>
          </div>
        </div>
        <div className="lot-photo" aria-hidden="true">
          <span className="lot-photo-tag">Campa · Alemania</span>
        </div>
        <dl className="lot-rows">
          {LOT_ROWS.map((row) => (
            <div
              className={`lot-row${row.note ? " has-note" : ""}${row.strong ? " is-strong" : ""}${
                row.note && row.note === activeNote ? " is-active" : ""
              }`}
              data-note={row.note}
              key={row.label}
              style={row.note ? { "--note-delay": `${0.9 + row.note * 0.45}s` } : undefined}
            >
              <dt>{row.label}</dt>
              <dd>
                <span className="lot-mark">{row.value}</span>
                {row.note ? <i className="lot-pin" aria-hidden="true">{row.note}</i> : null}
              </dd>
            </div>
          ))}
        </dl>
        <p className="lot-disclaimer">Ficha de ejemplo, datos ficticios.</p>
      </div>

      <ol className="lot-notes" aria-label="Orden de lectura de la ficha">
        {LOT_NOTES.map((note, index) => (
          <li
            className={activeNote === index + 1 ? "is-active" : ""}
            key={note.title}
            onBlur={() => setActiveNote(0)}
            onFocus={() => setActiveNote(index + 1)}
            onMouseEnter={() => setActiveNote(index + 1)}
            onMouseLeave={() => setActiveNote(0)}
            tabIndex={0}
          >
            <i aria-hidden="true">{index + 1}</i>
            <div>
              <strong>{note.title}</strong>
              <p>{note.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
