export const SITE = {
  name: "Fire Tag Pros",
  tagline: "Fire extinguisher tags, inspection, and service across Canada",
  domain: "firetagpros.com",
  phoneDisplay: "1-888-555-3473",
  phoneTel: "+18885553473",
  email: "hello@firetagpros.com",
  hours: "Monday – Friday, 7 AM – 6 PM local · Emergency line when available",
  hoursNote:
    "Same-day visits depend on your city and how busy we are — call and we will tell you honestly.",
} as const;

export const SERVICE_BLURBS: Record<string, string> = {
  "fire-extinguisher-inspection":
    "We check pressure, seals, tags, and accessibility so your extinguishers are ready if you ever need them — at home, at work, or across a whole building.",
  "commercial-fire-extinguisher-inspection":
    "Offices, retail, warehouses, and strata buildings get a clear walk-through: what passes, what needs service, and what should be replaced before an auditor or insurer asks.",
  "annual-fire-extinguisher-inspection":
    "Once-a-year visits keep you on track with typical Canadian fire-code expectations. We document what we did so you are not guessing come renewal time.",
  "fire-extinguisher-maintenance":
    "Hydro tests, hose checks, gauge readings, and parts that wear out over time — handled by people who do this every day, not a one-off handyman visit.",
  "fire-extinguisher-servicing":
    "Routine service visits for buildings that want extinguishers tagged, topped up, and swapped when they are past their useful life — without shutting down your operations.",
  "fire-extinguisher-recharge-and-refill":
    "Used an extinguisher during a small fire or a drill? We recharge or replace units and make sure the right type and size go back on the wall.",
  "co2-fire-extinguisher-refill":
    "Kitchens, server rooms, and labs often rely on CO₂ units. We refill and test so discharge weight and pressure match what your equipment label requires.",
  "apartment-building-fire-extinguisher-inspection":
    "Common areas, parking levels, and back-of-house corridors — we help property managers stay ahead of resident safety and board questions.",
  "6-year-fire-extinguisher-inspection":
    "Some units need deeper service on a longer cycle. Tell us what you have installed; we will explain what your extinguishers need and when.",
};

export const STANDARDS = [
  {
    num: "01",
    title: "Plain language",
    desc: "We explain what we found in words you can share with your team or tenants — not a jargon-filled report.",
  },
  {
    num: "02",
    title: "Honest timelines",
    desc: "If something must be replaced today versus next quarter, we say so. No scare tactics, no surprise upsells.",
  },
  {
    num: "03",
    title: "Tagged and documented",
    desc: "After a visit you know what was serviced, what was replaced, and when we should come back.",
  },
  {
    num: "04",
    title: "Right extinguisher for the room",
    desc: "Kitchen, electrical, garage, or warehouse — we match type and size to how you actually use the space.",
  },
  {
    num: "05",
    title: "Coast-to-coast coordination",
    desc: "National accounts and single-location owners both get the same care — one number to call for scheduling.",
  },
  {
    num: "06",
    title: "We confirm coverage first",
    desc: "Not every service is available in every city yet. Call before you rely on a date — we will tell you what we can do near you.",
  },
] as const;

export const SERVICE_ICONS = ["🧯", "🏢", "📋", "🔧", "✅", "♻️", "💨", "🏠", "📅"];
