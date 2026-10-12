"use client";

import { SITE_CONTENT } from "@/app/data/content";

const { features } = SITE_CONTENT;

export default function Features() {
  return (
    <section className="features-section alt" id="que">
      <div className="w">
        <div className="features__header">
          <span className="eyebrow shiny">{features.eyebrow}</span>
          <h2>{features.title}</h2>
          <p className="features__subtitle">{features.subtitle}</p>
        </div>

        <div className="features__list">
          {features.items.map((item) => (
            <div key={item.num} className="features__item">
              <span className="features__number">{item.num}</span>
              <div className="features__text">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="features__cta-wrapper">
          <a href="#unite" className="btn">
            {features.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
