"use client";

import { useEffect, useRef } from "react";

export default function GlowCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on pointer-fine devices (mouse/trackpad, not touch)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = cursorRef.current;
    if (!el) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let isRunning = false;
    let animationFrameId: number;

    const animate = () => {
      const dx = targetX - currentX;
      const dy = targetY - currentY;

      currentX += dx * 0.15;
      currentY += dy * 0.15;

      el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

      // Continue animating until settled
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        isRunning = false;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      el.style.opacity = "1";
      if (!isRunning) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const handleMouseLeave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="glow-cursor"
      style={{
        opacity: 0,
        transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
        transition: "opacity 0.2s ease",
      }}
      aria-hidden="true"
    />
  );
}
