"use client";

import { useTracking } from "@/lib/tracking";
import { SITE_CONTENT } from "@/app/data/content";

const { plans } = SITE_CONTENT;

type PlanItem = {
  text: string;
  con: boolean;
  highlight?: boolean;
};

function PlanListItem({ item }: { item: PlanItem }) {
  if (item.con) {
    return (
      <li className="plans__card-item plans__card-item--pro">
        <span className="plans__card-item-icon">✓</span>
        <span className={item.highlight ? "plans__card-item-highlight" : ""}>
          {item.text}
        </span>
      </li>
    );
  }
  return (
    <li className="plans__card-item plans__card-item--con">
      <span className="plans__card-item-icon">✕</span>
      <span>{item.text}</span>
    </li>
  );
}

export default function Plans() {
  const { track } = useTracking();

  return (
    <section className="plans-section" id="planes">
      <div className="w">
        <div className="plans__header">
          <span className="eyebrow shiny">{plans.eyebrow}</span>
          <h2>{plans.title}</h2>
          <p className="plans__header-sub">{plans.subtitle}</p>
        </div>

        <div className="plans__early-bird">
          <div className="plans__early-bird-left">
            <span className="plans__early-bird-tag">{plans.earlyBird.tag}</span>
            <h3 className="plans__early-bird-title">{plans.earlyBird.title}</h3>
            <p className="plans__early-bird-desc">{plans.earlyBird.desc}</p>
          </div>

          <div className="plans__early-bird-right">
            <ul className="plans__early-bird-bullets">
              {plans.earlyBird.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <a
              href="#unite"
              className="btn white"
              onClick={() => track("early_bird_click")}
            >
              {plans.earlyBird.cta}
            </a>
          </div>
        </div>

        <div className="plans__grid">
          {plans.cards.map((card) => (
            <div
              key={card.name}
              className={`plans__card${card.featured ? " plans__card--featured" : ""}`}
            >
              {card.badge && (
                <span className="plans__card-badge">{card.badge}</span>
              )}
              <h3 className="plans__card-name">{card.name}</h3>
              <span className="plans__card-eyebrow">{card.eyebrow}</span>
              <div className="plans__price">
                {card.priceOriginal && (
                  <span className="plans__price-original">{card.priceOriginal}</span>
                )}
                <span className="plans__price-amount">{card.price}</span>
                <span className="plans__price-period">{card.period}</span>
              </div>
              {card.savingsTag && (
                <p className="plans__savings-tag">{card.savingsTag}</p>
              )}
              <ul className="plans__card-list">
                {card.items.map((item) => (
                  <PlanListItem key={item.text} item={item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
