export const SITE = {
  name: "RV Leak Guard",
  tagline: "RV & camper water damage repair across Canada",
  domain: "rvleakguard.com",
  phoneDisplay: "1-888-555-5824",
  phoneTel: "+18885555824",
  hours: "Open 24 hours · 365 days a year",
  hoursNote:
    "Call anytime — dispatch is always on. Same-week visits depend on your city and season; we will tell you honestly what is possible.",
} as const;

export const SERVICE_BLURBS: Record<string, string> = {
  "rv-water-damage-repair":
    "From the first drip to hidden rot, we assess moisture paths, dry what can be saved, and rebuild what cannot — motorhomes, travel trailers, and fifth wheels.",
  "rv-roof-leak-repair":
    "Roof seams, lap joints, and vent boots are common failure points. We trace the leak, reseal or patch the membrane, and check insulation before mould sets in.",
  "rv-roof-water-damage-repair":
    "When water has already reached the ceiling or walls, we map damage, remove wet materials safely, and restore structure so your rig is road-ready again.",
  "rv-roof-resealing":
    "Preventive resealing extends roof life before Alberta hail season or coastal rain catches you off guard. We use products matched to your roof type.",
  "rv-skylight-leak-repair":
    "Skylight gaskets and butyl tape fail quietly. We re-bed the frame, replace seals, and confirm the surrounding roof area is still watertight.",
  "rv-window-leak-repair":
    "Window leaks often show up as streaks on walls or soft trim. We diagnose frame seals, drainage channels, and exterior caulk without guessing.",
  "rv-window-seal-replacement":
    "Foggy panes and drafts mean seal failure. We replace window gaskets and reseal exteriors so condensation and rain stay outside where they belong.",
  "rv-slide-out-seal-replacement":
    "Slide-out wipers and bulb seals wear from road grit. Fresh seals reduce wind noise, water intrusion, and the soft-floor surprises that follow.",
  "motorhome-floor-repair":
    "Soft spots and delamination under linoleum or laminate need structural repair — not just a cosmetic patch. We rebuild subfloor sections the right way.",
  "rv-floor-rot-repair":
    "Rot spreads along plywood grain faster than you think. We cut out affected wood, dry the cavity, and sister in new subfloor before you re-finish.",
  "rv-floor-water-damage-repair":
    "Spills, plumbing leaks, and roof drips all end up in the floor. We extract moisture, treat for mould risk, and replace damaged layers.",
  "rv-subfloor-replacement":
    "When the whole bay is compromised, partial subfloor replacement restores stiffness for furniture, slide mechanisms, and safe walking surfaces.",
  "rv-wall-water-damage-repair":
    "Bubbling wallpaper, stained paneling, or spongy walls mean water travelled sideways. We open the wall, dry studs, and rebuild with matching finishes where possible.",
  "rv-delamination-repair":
    "Outer fibreglass separating from luan is a structural concern. We inject epoxy or rebuild sections so walls stay solid at highway speeds.",
  "rv-ceiling-water-damage-repair":
    "Brown spots on headliner or sagging panels need immediate attention. We remove wet insulation, treat the roof source, and re-line the ceiling.",
  "rv-wood-rot-repair":
    "Framing and structural wood in campers is lightweight — once wet, it rots quickly. We replace compromised members and seal the entry point.",
  "rv-mold-removal":
    "Musty smell after storage? Visible spots in corners? We contain affected areas, remove contaminated materials, and dry the shell before you camp again.",
  "rv-plumbing-leak-repair":
    "Freshwater lines, grey tanks, and fittings under sinks fail from vibration and freeze-thaw. We pressure-test, replace bad runs, and check adjacent floors.",
  "rv-water-heater-leak-repair":
    "A leaking water heater can flood a basement bay overnight. We diagnose tank vs. fitting leaks, replace units when needed, and dry the enclosure.",
};

export const STANDARDS = [
  {
    num: "01",
    title: "Find the real source",
    desc: "We trace moisture paths — roof, window, plumbing, or condensation — before we cut or seal anything.",
  },
  {
    num: "02",
    title: "Plain-language estimates",
    desc: "You hear what is wet, what must come out, and what it costs before work starts — no scare tactics.",
  },
  {
    num: "03",
    title: "Dry then rebuild",
    desc: "Structure stays open until moisture readings are safe. Rushing a cosmetic fix is how mould comes back.",
  },
  {
    num: "04",
    title: "RV-specific materials",
    desc: "Lightweight plywood, butyl, lap sealants, and flex membranes — matched to how campers are actually built.",
  },
  {
    num: "05",
    title: "Coast-to-coast coordination",
    desc: "Snowbirds, full-timers, and seasonal owners get one number to call for scheduling across provinces.",
  },
  {
    num: "06",
    title: "We confirm coverage first",
    desc: "Not every repair type is in every city yet. Call before you book travel — we will tell you what we can do near you.",
  },
] as const;

export const SERVICE_ICONS = ["💧", "🏕️", "🔧", "🛡️", "🪟", "📐", "🌧️", "🧱", "✅"];
