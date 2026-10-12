"use client";

import { useMotionValue, useTransform, animate, motion } from "framer-motion";
import { useEffect } from "react";

interface CountUpProps {
  to: number;
  suffix?: string;
}

export default function CountUp({ to, suffix }: CountUpProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const animation = animate(count, to, {
      duration: 3.2,
      ease: (t) => 1 - Math.pow(1 - t, 2), // ease-out quad
    });

    return () => animation.stop();
  }, [to, count]);

  return (
    <>
      <motion.span>{rounded}</motion.span>
      {suffix && <span className="stats__suffix">{suffix}</span>}
    </>
  );
}
