"use client";

import { useEffect } from "react";
import { useTracking } from "@/lib/tracking";

export default function Analytics({
  children,
}: {
  children: React.ReactNode;
}) {
  const { track } = useTracking();

  useEffect(() => {
    track("page_view", {
      device:
        typeof window !== "undefined"
          ? window.innerWidth < 820
            ? "mobile"
            : "desktop"
          : "unknown",
    });

    const sd: Record<number, boolean> = {};
    let tk = false;

    const handleScroll = () => {
      if (tk) return;
      tk = true;
      requestAnimationFrame(() => {
        tk = false;
        const p =
          ((window.scrollY + window.innerHeight) /
            document.documentElement.scrollHeight) *
          100;
        [25, 50, 75, 100].forEach((m) => {
          if (!sd[m] && p >= m - 1) {
            sd[m] = true;
            track("scroll_depth", { pct: m });
          }
        });
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [track]);

  return <>{children}</>;
}
