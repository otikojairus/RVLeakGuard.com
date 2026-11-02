"use client";

export function QuoteForm() {
  return (
    <form
      className="quote-form"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thanks — we will call you back shortly.");
      }}
    >
      <label>
        Name
        <input name="name" required placeholder="Your name" />
      </label>
      <label>
        Phone
        <input name="phone" required placeholder="(555) 555-5555" />
      </label>
      <label>
        City
        <input name="city" placeholder="e.g. Calgary" />
      </label>
      <label>
        What do you need?
        <textarea
          name="need"
          rows={3}
          placeholder="Inspection, recharge, annual tags, commercial walk-through…"
        />
      </label>
      <button type="submit" className="btn-primary">
        Submit request
      </button>
    </form>
  );
}
