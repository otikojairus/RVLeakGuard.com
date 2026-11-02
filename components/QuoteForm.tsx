"use client";

import { useState } from "react";

type FormStatus = "idle" | "loading" | "success";

export function QuoteForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  if (status === "success") {
    return (
      <div className="quote-form quote-form-success" role="status">
        <div className="quote-success-icon" aria-hidden>
          ✓
        </div>
        <h3>You&apos;re on the list</h3>
        <p>
          Thanks — we got your request. Someone from our team will call you back
          as soon as they can.
        </p>
        <button
          type="button"
          className="btn-secondary quote-success-reset"
          onClick={() => setStatus("idle")}
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      className="quote-form"
      onSubmit={(e) => {
        e.preventDefault();
        if (status === "loading") return;
        setStatus("loading");
        window.setTimeout(() => setStatus("success"), 1400);
      }}
    >
      <label>
        Name
        <input name="name" required placeholder="Your name" disabled={status === "loading"} />
      </label>
      <label>
        Phone
        <input
          name="phone"
          required
          placeholder="(555) 555-5555"
          disabled={status === "loading"}
        />
      </label>
      <label>
        City
        <input name="city" placeholder="e.g. Calgary" disabled={status === "loading"} />
      </label>
      <label>
        What do you need?
        <textarea
          name="need"
          rows={3}
          placeholder="Inspection, recharge, annual tags, commercial walk-through…"
          disabled={status === "loading"}
        />
      </label>
      <button
        type="submit"
        className={`btn-primary quote-submit${status === "loading" ? " is-loading" : ""}`}
        disabled={status === "loading"}
        aria-busy={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <span className="quote-spinner" aria-hidden />
            Sending…
          </>
        ) : (
          "Submit request"
        )}
      </button>
    </form>
  );
}
