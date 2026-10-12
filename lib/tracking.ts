"use client";

import { useRef, useCallback, useEffect } from "react";
import { supabase } from "./supabase";

export function useTracking() {
  const sessionRef = useRef<string>("");
  const t0Ref = useRef<number>(0);

  useEffect(() => {
    if (!sessionRef.current) {
      sessionRef.current = Math.random().toString(36).slice(2, 10);
      t0Ref.current = Date.now();
    }
  }, []);

  const track = useCallback((name: string, props?: Record<string, unknown>) => {
    if (!sessionRef.current && typeof window !== "undefined") {
      sessionRef.current = Math.random().toString(36).slice(2, 10);
      t0Ref.current = Date.now();
    }

    const event = {
      sid: sessionRef.current,
      name,
      props: props || {},
      t: t0Ref.current ? Date.now() - t0Ref.current : 0,
      path: typeof window !== "undefined" ? window.location.pathname : "",
      ref: typeof document !== "undefined" ? document.referrer || null : null,
      w: typeof window !== "undefined" ? window.innerWidth : 0,
    };

    if (supabase) {
      Promise.resolve(supabase.from("events").insert([event])).catch(() => {});
    }
  }, []);

  return { track, sessionId: sessionRef.current };
}

