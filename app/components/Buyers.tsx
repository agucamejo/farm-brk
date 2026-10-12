"use client";

import { SITE_CONTENT } from "@/app/data/content";

const { buyers } = SITE_CONTENT;

const BUYER_ICONS: Record<string, React.ReactNode> = {
  city: (
    <svg className="ai" viewBox="0 0 64 64" aria-hidden="true">
      <path className="pin" d="M32 3c-4.4 0-8 3.2-8 7.6C24 16.200 32 22 32 22s8-5.800 8-11.400C40 6.200 36.400 3 32 3z" />
      <circle className="pin" fill="var(--br)" stroke="none" cx="32" cy="10.500" r="2.600" />
      <path d="M6 55h52" />
      <path d="M9 55V37h15v18" />
      <path d="M24 55V27h16v28" />
      <path d="M40 55V41h15v14" />
      <rect fill="var(--br)" stroke="none" x="13" y="41" width="3.4" height="3.4" rx=".6" />
      <rect fill="var(--br)" stroke="none" x="18" y="41" width="3.4" height="3.4" rx=".6" />
      <rect fill="var(--br)" stroke="none" x="13" y="47" width="3.4" height="3.4" rx=".6" />
      <rect fill="var(--br)" stroke="none" x="18" y="47" width="3.4" height="3.4" rx=".6" />
      <rect fill="var(--br)" stroke="none" x="28" y="32" width="3.4" height="3.4" rx=".6" />
      <rect fill="var(--br)" stroke="none" x="34" y="32" width="3.4" height="3.4" rx=".6" />
      <rect fill="var(--br)" stroke="none" x="28" y="39" width="3.4" height="3.4" rx=".6" />
      <rect fill="var(--br)" stroke="none" x="34" y="39" width="3.4" height="3.4" rx=".6" />
      <rect fill="var(--br)" stroke="none" x="28" y="46" width="3.4" height="3.4" rx=".6" />
      <rect fill="var(--br)" stroke="none" x="34" y="46" width="3.4" height="3.4" rx=".6" />
      <rect fill="var(--br)" stroke="none" x="44" y="45" width="3.4" height="3.4" rx=".6" />
      <rect fill="var(--br)" stroke="none" x="49" y="45" width="3.4" height="3.4" rx=".6" />
    </svg>
  ),
  promo: (
    <svg className="ai" viewBox="0 0 64 64" aria-hidden="true">
      <g className="rotb">
        <path d="M29.0,10.0 L34.4,14.7 L41.5,13.3 L43.8,20.2 L50.7,22.5 L49.3,29.6 L54.0,35.0 L49.3,40.4 L50.7,47.5 L43.8,49.8 L41.5,56.7 L34.4,55.3 L29.0,60.0 L23.6,55.3 L16.5,56.7 L14.2,49.8 L7.3,47.5 L8.7,40.4 L4.0,35.0 L8.7,29.6 L7.3,22.5 L14.2,20.2 L16.5,13.3 L23.6,14.7Z" />
      </g>
      <circle cx="23.5" cy="29" r="2.6" />
      <circle cx="34.5" cy="41" r="2.6" />
      <path d="M35 27L23 43" />
      <path className="spk f" fill="var(--br)" stroke="none" d="M53 4c.8 4 2 5.200 6 6-4 .8-5.200 2-6 6-.8-4-2-5.200-6-6 4-.8 5.200-2 6-6z" />
    </svg>
  ),
  chat: (
    <svg className="ai" viewBox="0 0 64 64" aria-hidden="true">
      <path className="bub" d="M10 14h44v28H30l-11 10V42h-9z" />
      <circle className="f d1" cx="22" cy="28" r="2.8" />
      <circle className="f d2" cx="32" cy="28" r="2.8" />
      <circle className="f d3" cx="42" cy="28" r="2.8" />
    </svg>
  ),
  local: (
    <svg className="ai" viewBox="0 0 64 64" aria-hidden="true">
      <path className="ht f" d="M32 4c-3-4-10-1-6 5 2 3 6 6 6 6s4-3 6-6c4-6-3-9-6-5z" />
      <path d="M12 30l4-12h32l4 12z" />
      <path d="M14 30v24h36V30" />
      <path d="M26 54V40h12v14" />
    </svg>
  ),
};

export default function Buyers() {
  return (
    <section className="buyers-section" id="clientes">
      <div className="w">
        <div className="buyers__header">
          <span className="eyebrow">{buyers.eyebrow}</span>
          <h2>{buyers.title}</h2>
          <p className="buyers__subtitle">{buyers.subtitle}</p>
        </div>

        <div className="buyers__grid">
          {buyers.cards.map((card) => (
            <div key={card.title} className="buyers__card">
              <div className="buyers__icon-circle">
                {BUYER_ICONS[card.iconKey]}
              </div>
              <h3 className="buyers__card-title">{card.title}</h3>
              <p className="buyers__card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
