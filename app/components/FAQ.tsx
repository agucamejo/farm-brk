"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONTENT } from "@/app/data/content";

const { faq } = SITE_CONTENT;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section className="faq-section" id="faq">
      <div className="w">
        <div className="faq__header">
          <span className="eyebrow">{faq.eyebrow}</span>
          <h2>{faq.title}</h2>
        </div>

        <div className="faq__card">
          {faq.items.map((item, i) => (
            <div key={i} className="faq__item">
              <button
                type="button"
                className="faq__question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-ans-${i}`}
              >
                <span>{item.q}</span>
                <span className={`faq__icon${openIndex === i ? " faq__icon--open" : ""}`}>
                  ›
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    id={`faq-ans-${i}`}
                    className="faq__answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <p>{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
