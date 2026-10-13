"use client";

import { motion } from "framer-motion";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  animateOnMount?: boolean;
  mountDelay?: number;
}

export default function BlurText({
  text,
  className = "",
  delay = 0.04,
  as = "p",
  animateOnMount = false,
  mountDelay = 0,
}: BlurTextProps) {
  const words = text.split(" ");
  const Component = motion[as] as any;

  if (animateOnMount) {
    return (
      <Component className={`blur-text-container ${className}`} initial="hidden" animate="visible">
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 0.45,
              delay: mountDelay + i * delay,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{ display: "inline-block", marginRight: "0.25em", willChange: "transform, opacity" }}
          >
            {word}
          </motion.span>
        ))}
      </Component>
    );
  }

  return (
    <Component
      className={`blur-text-container ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.45,
            delay: i * delay,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{ display: "inline-block", marginRight: "0.25em", willChange: "transform, opacity" }}
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
}
