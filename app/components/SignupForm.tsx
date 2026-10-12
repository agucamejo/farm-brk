"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useTracking } from "@/lib/tracking";

interface SignupFormProps {
  source: string;
  buttonText?: string;
}

export default function SignupForm({
  source,
  buttonText = "Quiero sumarme",
}: SignupFormProps) {
  const [ig, setIg] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const { track } = useTracking();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const cleaned = ig.trim().replace(/^@+/, "");
    if (!/^[A-Za-z0-9._]{2,30}$/.test(cleaned)) {
      setError("Usuario de Instagram inválido");
      track("form_error", { src: source });
      return;
    }

    setLoading(true);

    if (supabase) {
      const { error: err } = await supabase
        .from("waitlist")
        .insert([{ ig: cleaned, source }]);

      if (err) {
        setError("Algo salió mal, intentá de nuevo");
        track("form_error", { src: source });
      } else {
        setSuccess(true);
        track("form_submit", { src: source });
      }
    } else {
      // Dev fallback: simulate success
      setSuccess(true);
      track("form_submit", { src: source });
    }

    setLoading(false);
  }

  if (success) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        ¡Listo, ya estás en la lista! Te escribimos por Instagram.
      </div>
    );
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit} noValidate>
      <div className="signup-form__row">
        <input
          type="text"
          name="ig"
          placeholder="Tu Instagram (@tunegocio)"
          value={ig}
          onChange={(e) => setIg(e.target.value)}
          onFocus={() => track("form_start", { src: source })}
          required
          autoComplete="off"
          aria-label="Tu usuario de Instagram"
        />
        <button type="submit" className="btn signup-form__btn" disabled={loading}>
          {loading ? "Enviando…" : buttonText}
        </button>
      </div>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <p className="form-note">
        Dejanos tu Instagram y te escribimos cuando abra el portal.
      </p>
    </form>
  );
}
