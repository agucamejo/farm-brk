"use client";

import { useState } from "react";
import { SITE_CONTENT } from "@/app/data/content";

const { stepper } = SITE_CONTENT;

export default function Stepper() {
  const [activeStep, setActiveStep] = useState(0);

  function next() {
    if (activeStep < stepper.steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      const el = document.getElementById("unite");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }

  function prev() {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  }

  return (
    <section className="stepper-section alt" id="pasos">
      <div className="w" style={{ maxWidth: 760, margin: "0 auto" }}>
        <div className="stepper__header">
          <span className="eyebrow shiny">{stepper.eyebrow}</span>
          <h2>{stepper.title}</h2>
        </div>

        <div className="stepper__container">
          <div className="stepper__track">
            <div
              className="stepper__track-fill"
              style={{ width: `${(activeStep / (stepper.steps.length - 1)) * 100}%` }}
            />
            {stepper.steps.map((step, idx) => (
              <button
                key={step.num}
                type="button"
                className={`stepper__dot${idx === activeStep ? " stepper__dot--active" : ""}${idx < activeStep ? " stepper__dot--completed" : ""}`}
                onClick={() => setActiveStep(idx)}
                aria-label={`Ir al paso ${step.num}`}
              >
                {idx < activeStep ? "✕" : step.num}
              </button>
            ))}
          </div>

          <div className="stepper__card">
            <h3 className="stepper__step-title">{stepper.steps[activeStep].title}</h3>
            <p className="stepper__step-desc">{stepper.steps[activeStep].desc}</p>

            <div className="stepper__actions">
              <button
                type="button"
                className="btn gh sm"
                onClick={prev}
                disabled={activeStep === 0}
                style={{
                  opacity: activeStep === 0 ? 0.35 : 1,
                  cursor: activeStep === 0 ? "default" : "pointer",
                }}
              >
                Atrás
              </button>
              <button type="button" className="btn sm" onClick={next}>
                {activeStep === stepper.steps.length - 1
                  ? "Quiero sumarme"
                  : "Siguiente"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
