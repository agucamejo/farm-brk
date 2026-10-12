"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "./CountUp";
import { SITE_CONTENT } from "@/app/data/content";

const { stats } = SITE_CONTENT;

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={ref}>
      <div className="w">
        <div className="stats__grid">
          {stats.map((stat, i) => (
            <div key={i} className="stats__card">
              <div className="stats__number">
                {visible ? (
                  <CountUp to={stat.value} suffix={stat.suffix} />
                ) : (
                  <>0{stat.suffix}</>
                )}
              </div>
              <p className="stats__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
