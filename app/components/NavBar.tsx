"use client";

import { useState } from "react";
import { useTracking } from "@/lib/tracking";
import { SITE_CONTENT } from "@/app/data/content";

const { navbar } = SITE_CONTENT;

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { track } = useTracking();

  function handleNav(label: string) {
    track("nav_click", { label });
  }

  return (
    <header className="navbar-container">
      <div className="navbar-card">
        <div className="navbar-top-row">
          <a href="#" className="navbar-logo" onClick={() => handleNav("logo")}>
            <img
              src="/icon-192.png"
              alt="Logo FARM"
              className="navbar-logo__icon"
              width={24}
              height={24}
            />
            {navbar.logo}
          </a>

          <div className="navbar-actions">
            <button
              type="button"
              className="navbar-btn-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label="Abrir menú de navegación"
            >
              {navbar.menuLabel}
            </button>
            <a
              href="#unite"
              className="btn sm"
              onClick={() => handleNav("CTA_header")}
            >
              {navbar.cta}
            </a>
          </div>
        </div>

        <nav
          className={`navbar-cards-row ${menuOpen ? "navbar-cards-row--open" : ""}`}
          aria-label="Navegación principal"
        >
          {navbar.items.map((card) => (
            <a
              key={card.href}
              href={card.href}
              className="navbar-nav-card"
              onClick={() => {
                handleNav(card.title);
                setMenuOpen(false);
              }}
            >
              <span className="navbar-nav-card__title">{card.title}</span>
              <span className="navbar-nav-card__desc">{card.desc}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
