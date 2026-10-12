"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFading(true);
      setTimeout(() => setVisible(false), 500);
    }, 900);
    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className={`loading-screen${fading ? " loading-screen--fade" : ""}`} aria-hidden="true">
      <div className="loading-screen__inner">
        <img
          src="/icon-192.png"
          alt=""
          className="loading-screen__logo"
          width={48}
          height={48}
        />
        <span className="loading-screen__text">Cargando…</span>
      </div>
    </div>
  );
}
