"use client";

import Image from "next/image";
import { SITE_CONTENT } from "@/app/data/content";

const { panel } = SITE_CONTENT;

export default function Panel() {
  return (
    <section className="panel-section" id="panel">
      <div className="w">
        <div className="panel__grid">
          <div className="panel__copy">
            <span className="eyebrow">{panel.eyebrow}</span>
            <h2>{panel.title}</h2>
            <p className="panel__lead">{panel.lead}</p>

            <ul className="panel__bullets">
              {panel.bullets.map((item) => (
                <li key={item} className="panel__bullet-item">
                  <span className="panel__check-icon">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel__mockup-composition">
            <div className="panel__desktop-wrap">
              <Image
                src="/mockups/panel-desktop-clean.png"
                alt="Panel de administración de FARM en computadora"
                width={964}
                height={600}
                className="panel__desktop-img"
                sizes="(max-width: 640px) 100vw, 580px"
                loading="lazy"
              />
            </div>

            <div className="panel__mobile-overlap">
              <Image
                src="/mockups/panel-mobile-clean.png"
                alt="Panel de administración de FARM en celular"
                width={518}
                height={736}
                className="panel__mobile-img"
                sizes="(max-width: 640px) 140px, 210px"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
