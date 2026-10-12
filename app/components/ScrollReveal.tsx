"use client";

import { useEffect } from "react";
import { setupScrollReveal } from "@/lib/utils";

/**
 * Initializes Intersection Observer for all .reveal elements.
 * Placed in layout so it runs once on page load.
 */
export default function ScrollReveal() {
  useEffect(() => {
    // Small delay to ensure DOM elements are rendered
    const timeout = setTimeout(() => {
      const cleanup = setupScrollReveal();
      return () => cleanup?.();
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return null;
}
