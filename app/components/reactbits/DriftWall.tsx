"use client";

const TICKER_ITEMS = [
  "Presencia en internet",
  "Sin comisiones",
  "Pedidos armados por WhatsApp",
  "Control de stock",
  "Portal de Brinkmann",
];

export default function DriftWall() {
  return (
    <div className="ticker-band" aria-hidden="true">
      <div className="ticker-track">
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
          <span key={`${item}-${idx}`} className="ticker-item">
            {item} <span className="ticker-dot">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
