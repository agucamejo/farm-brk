"use client";

import SignupForm from "./SignupForm";
import { SITE_CONTENT } from "@/app/data/content";

const { cta } = SITE_CONTENT;

export default function CTABand() {
  return (
    <section className="cta-band" id="unite">
      <div className="w">
        <div className="cta-band__content">
          <h2>{cta.title}</h2>
          <p>{cta.lead}</p>
          <SignupForm source="cta_band" buttonText={cta.formButton} />
          <a
            href={cta.waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-band__wa-link"
          >
            {cta.waLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
