"use client";

import SignupForm from "./SignupForm";
import RotatingText from "./reactbits/RotatingText";
import BlurText from "./reactbits/BlurText";
import ShinyText from "./reactbits/ShinyText";
import { SITE_CONTENT } from "@/app/data/content";

const { hero } = SITE_CONTENT;

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="w">
        <div className="hero__grid">
          <div className="hero__copy">
            <span className="hero__badge">
              <ShinyText text={hero.badge} speed={2} />
            </span>

            <BlurText
              text={hero.title}
              as="h1"
              className="hero__title"
              delay={0.06}
            />

            <p className="hero__lead">{hero.lead}</p>

            <div className="hero__rubros-row">
              <span className="hero__rubros-lead">{hero.rubrosLead}</span>
              <RotatingText
                words={hero.rubros}
                interval={2200}
                className="hero__rotating-text"
              />
            </div>

            <SignupForm source="hero" />

            <div className="hero__pills">
              {hero.pills.map((pill) => (
                <span key={pill} className="hero__pill">
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="hero__mockup-col">
            <div className="hero__glow" aria-hidden="true" />
            <div className="hero__phone-render">
              <img
                src="/mockups/hero-phone-clean.png"
                alt={hero.mockupAlt}
                className="hero__phone-img"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
