export type CityProfile = {
  name: string;
  province: string;
  region: string;
  corridors: string[];
  neighborhoods: string[];
  intro: string;
};

export const CITY_PROFILES: Record<string, CityProfile> = {
  Calgary: {
    name: "Calgary",
    province: "Alberta",
    region: "Calgary and surrounding communities",
    corridors: ["Deerfoot Trail", "Stoney Trail", "Trans-Canada Hwy (1)", "Crowchild Trail"],
    neighborhoods: ["Downtown", "NE industrial", "Signal Hill", "Mahogany", "Airdrie approaches"],
    intro:
      "Calgary offices, warehouses, and multi-family buildings lean on us before audit season — especially along busy commuter corridors where missing tags are easy to overlook.",
  },
  Winnipeg: {
    name: "Winnipeg",
    province: "Manitoba",
    region: "Winnipeg and the capital region",
    corridors: ["Perimeter Hwy", "Trans-Canada Hwy (1)", "Lagimodiere Blvd", "Portage Ave"],
    neighborhoods: ["St Boniface", "St James", "Transcona", "Fort Garry", "Polo Park area"],
    intro:
      "Winnipeg property managers and shop owners call when extinguishers fail a walk-through or after a harsh winter when gauges and seals need a second look.",
  },
  Edmonton: {
    name: "Edmonton",
    province: "Alberta",
    region: "Edmonton metro and industrial corridors",
    corridors: ["Whitemud Drive", "Yellowhead Trail", "Anthony Henday", "Calder area"],
    neighborhoods: ["Downtown", "West Edmonton", "Mill Woods", "Sherwood Park approaches", "Nisku industrial"],
    intro:
      "From Nisku industrial bays to downtown towers, Edmonton teams want extinguishers that match the hazards in each room — not a one-size wall mount in every closet.",
  },
  Ottawa: {
    name: "Ottawa",
    province: "Ontario",
    region: "Ottawa–Gatineau and surrounding routes",
    corridors: ["417 Queensway", "Aviation Pkwy", "Hunt Club", "Kanata corridor"],
    neighborhoods: ["Centretown", "Orleans", "Kanata", "Nepean", "Gloucester"],
    intro:
      "Federal contractors, condos, and retail on the Queensway corridor schedule us when renewal letters arrive or after a small kitchen fire used a unit.",
  },
  Montreal: {
    name: "Montreal",
    province: "Quebec",
    region: "Island of Montreal and close suburbs",
    corridors: ["Autoroute 40", "Autoroute 15", "Autoroute 20", "Metropolitan Blvd"],
    neighborhoods: ["Plateau", "Laval approaches", "South Shore", "West Island", "Downtown"],
    intro:
      "Montreal landlords and restaurateurs ask us about kitchen Class K units, CO₂ for electrical rooms, and keeping common-area cabinets clearly marked.",
  },
  Laval: {
    name: "Laval",
    province: "Quebec",
    region: "Laval and north shore links",
    corridors: ["Autoroute 15", "Autoroute 440", "Curé-Labelle", "Industrial north"],
    neighborhoods: ["Chomedey", "Vimont", "Fabreville", "Pont-Viau", "Centropolis area"],
    intro:
      "Laval commercial strips and industrial parks book visits when tags expire or when a new tenant needs the right extinguisher type near the dock.",
  },
  Hamilton: {
    name: "Hamilton",
    province: "Ontario",
    region: "Hamilton, Stoney Creek, and Niagara approaches",
    corridors: ["QEW", "Lincoln M. Alexander Pkwy", "Red Hill Valley Pkwy", "Highway 403"],
    neighborhoods: ["Downtown", "Mountain", "Stoney Creek", "Ancaster", "Dundas"],
    intro:
      "Hamilton factories and QEW-side businesses call before insurance visits — or right after someone discharged an ABC unit in the shop.",
  },
  "St Catharines": {
    name: "St. Catharines",
    province: "Ontario",
    region: "Niagara Region",
    corridors: ["QEW", "406", "Highway 8", "Niagara St corridor"],
    neighborhoods: ["Port Dalhousie", "Glenridge", "Merritton", "Grantham", "DT St. Catharines"],
    intro:
      "Wine country visitors and QEW truck traffic both end up with tire trouble here. We serve homes, hotels, and safe highway shoulders nearby.",
  },
  Markham: {
    name: "Markham",
    province: "Ontario",
    region: "Markham and eastern GTA",
    corridors: ["404", "407", "Highway 7", "Woodbine Ave"],
    neighborhoods: ["Unionville", "Cornell", "Markham Centre", "Milliken", "Thornhill border"],
    intro:
      "Markham office parks and condo boards schedule walk-throughs when residents report empty cabinets or outdated service stickers.",
  },
  "North York": {
    name: "North York",
    province: "Ontario",
    region: "North York and northern Toronto",
    corridors: ["401", "400", "404", "Allen Rd"],
    neighborhoods: ["Willowdale", "Downsview", "Don Mills", "Finch corridor", "York Mills"],
    intro:
      "Dense traffic on the 401 and DVP feeders makes North York tire issues urgent. We focus on getting you rolling without a tow when repair is safe.",
  },
  "London Ontario": {
    name: "London",
    province: "Ontario",
    region: "London and Middlesex County approaches",
    corridors: ["401", "Highbury Ave", "Veterans Memorial Pkwy", "Wonderland Rd"],
    neighborhoods: ["Downtown", "Masonville", "White Oaks", "Byron", "Industrial south"],
    intro:
      "As a 401 hub city, London sees steady roadside and fleet tire calls — from student housing flats to commercial vans on the Veterans.",
  },
  "Surrey BC": {
    name: "Surrey",
    province: "British Columbia",
    region: "Surrey and Fraser Valley links",
    corridors: ["Trans-Canada (1)", "Highway 99", "King George Blvd", "South Fraser Perimeter"],
    neighborhoods: ["Whalley", "Newton", "Guildford", "Fleetwood", "South Surrey"],
    intro:
      "Rain-soaked roads and port-related truck traffic around Surrey mean punctures and blowouts show up fast — we dispatch to your pin or nearest safe stop.",
  },
  Mississauga: {
    name: "Mississauga",
    province: "Ontario",
    region: "Mississauga and Pearson corridor",
    corridors: ["403", "401", "QEW", "Hurontario", "Derry Rd"],
    neighborhoods: ["Square One", "Meadowvale", "Malton", "Port Credit", "Airport employment zone"],
    intro:
      "Mississauga airport-area offices and distribution centres book us for after-hours tagging so day shifts are not interrupted.",
  },
  Toronto: {
    name: "Toronto",
    province: "Ontario",
    region: "City of Toronto",
    corridors: ["Gardiner", "DVP", "401", "Lake Shore Blvd"],
    neighborhoods: ["Downtown", "Scarborough", "Etobicoke", "North York", "Midtown"],
    intro:
      "Toronto condos, restaurants, and creative studios reach out when a fire marshal note arrives or when a discharged unit needs replacing today.",
  },
  Halifax: {
    name: "Halifax",
    province: "Nova Scotia",
    region: "Halifax Regional Municipality",
    corridors: ["102", "111", "Bi-Hi", "Dartmouth Crossing"],
    neighborhoods: ["Downtown Halifax", "Dartmouth", "Bedford", "Clayton Park", "Burnside industrial"],
    intro:
      "Halifax marinas, apartments, and Burnside warehouses schedule service before winter inspections or after coastal humidity affects gauges.",
  },
  Regina: {
    name: "Regina",
    province: "Saskatchewan",
    region: "Regina and surrounding prairie routes",
    corridors: ["Ring Rd", "Trans-Canada (1)", "Victoria Ave", "Albert St"],
    neighborhoods: ["Downtown", "Harbour Landing", "Eastend", "Normanview", "Industrial north"],
    intro:
      "Regina agriculture suppliers and downtown offices want straightforward answers on what must be replaced now versus at the next annual visit.",
  },
  Vancouver: {
    name: "Vancouver",
    province: "British Columbia",
    region: "Vancouver and core Metro Vancouver",
    corridors: ["Granville St", "Knight St", "1st Ave", "Marine Dr"],
    neighborhoods: ["Downtown", "East Van", "Kits", "Mount Pleasant", "South Vancouver"],
    intro:
      "Vancouver restaurants, tech offices, and heritage conversions ask us to fit extinguishers into tight hallways without blocking exits.",
  },
  Vaughan: {
    name: "Vaughan",
    province: "Ontario",
    region: "Vaughan and northwest GTA",
    corridors: ["400", "407", "Highway 7", "Jane St corridor"],
    neighborhoods: ["Maple", "Woodbridge", "Concord", "Kleinburg", "Vaughan Metropolitan Centre"],
    intro:
      "Vaughan warehouses along the 400/407 want CO₂ and ABC units checked before busy season — we coordinate around your loading schedule.",
  },
  Etobicoke: {
    name: "Etobicoke",
    province: "Ontario",
    region: "Etobicoke and western Toronto",
    corridors: ["Gardiner", "427", "Queensway", "Evans Ave"],
    neighborhoods: ["Islington", "Mimico", "Rexdale", "The Kingsway", "Humber Bay"],
    intro:
      "Etobicoke condos and lakeshore retail call when parking-garage cabinets are empty or when a tenant used a unit on a grease fire.",
  },
  Barrie: {
    name: "Barrie",
    province: "Ontario",
    region: "Barrie and Simcoe County approaches",
    corridors: ["400", "Bayfield St", "Mapleview", "Veterans Dr"],
    neighborhoods: ["Downtown Barrie", "South end", "Letitia Heights", "Big Bay Point Rd", "Georgian College area"],
    intro:
      "Barrie shops and 400-corridor businesses book annual visits before summer traffic picks up and staffing gets thin.",
  },
  Woodbridge: {
    name: "Woodbridge",
    province: "Ontario",
    region: "Woodbridge and west Vaughan",
    corridors: ["400", "407", "Highway 7", "Islington Ave"],
    neighborhoods: ["Humber Valley", "Vellore", "Pine Valley", "Weston Rd south", "Industrial 7"],
    intro:
      "Woodbridge industrial units and commuter offices use us when new lease requirements list fire equipment compliance.",
  },
  Thornhill: {
    name: "Thornhill",
    province: "Ontario",
    region: "Thornhill and Yonge corridor",
    corridors: ["407", "404", "Yonge St", "Centre St"],
    neighborhoods: ["Thornhill North", "Thornhill South", "Promenade area", "Steeles corridor", "Bayview Village border"],
    intro:
      "Thornhill medical offices and strip malls schedule tagging when Yonge-corridor foot traffic makes daytime closures costly.",
  },
  Abbotsford: {
    name: "Abbotsford",
    province: "British Columbia",
    region: "Abbotsford and Fraser Valley east",
    corridors: ["Trans-Canada (1)", "Highway 11", "Clearbrook Rd", "Sumas Way"],
    neighborhoods: ["Clearbrook", "Mt Lehman", "Sumas Mountain", "Downtown Abbotsford", "Industrial south"],
    intro:
      "Abbotsford farms, cold storage, and Fraser Valley warehouses call for refills after harvest-season incidents or insurance renewals.",
  },
};

export const SERVICE_TITLES: Record<string, string> = {
  "rv-water-damage-repair": "RV water damage repair",
  "rv-roof-leak-repair": "RV roof leak repair",
  "rv-roof-water-damage-repair": "Roof water damage repair",
  "rv-roof-resealing": "RV roof resealing",
  "rv-skylight-leak-repair": "Skylight leak repair",
  "rv-window-leak-repair": "Window leak repair",
  "rv-window-seal-replacement": "Window seal replacement",
  "rv-slide-out-seal-replacement": "Slide-out seal replacement",
  "motorhome-floor-repair": "Motorhome floor repair",
  "rv-floor-rot-repair": "Floor rot repair",
  "rv-floor-water-damage-repair": "Floor water damage repair",
  "rv-subfloor-replacement": "Subfloor replacement",
  "rv-wall-water-damage-repair": "Wall water damage repair",
  "rv-delamination-repair": "Delamination repair",
  "rv-ceiling-water-damage-repair": "Ceiling water damage repair",
  "rv-wood-rot-repair": "Wood rot repair",
  "rv-mold-removal": "Mould removal",
  "rv-plumbing-leak-repair": "Plumbing leak repair",
  "rv-water-heater-leak-repair": "Water heater leak repair",
};

export function getCityProfile(cityName: string): CityProfile {
  return (
    CITY_PROFILES[cityName] ?? {
      name: cityName,
      province: "Canada",
      region: `${cityName} and nearby communities`,
      corridors: ["Major roads", "Downtown", "Industrial areas"],
      neighborhoods: ["Commercial districts", "Residential areas", "Mixed-use buildings"],
      intro: `RV owners in ${cityName} call after storage, storms, or long trips when soft floors, stains, or musty smells show up — we help you fix the leak and the damage behind it.`,
    }
  );
}

function rvCityIntro(profile: CityProfile): string {
  const corridor = profile.corridors[0] ?? "nearby highways";
  return `Campers and motorhomes around ${profile.name} — including routes like ${corridor} — see roof and plumbing leaks from freeze-thaw and road vibration.`;
}

export function localPageTitle(cityName: string, serviceBase: string): string {
  const service = SERVICE_TITLES[serviceBase] ?? "RV water damage help";
  return `${service} in ${cityName}`;
}

export function localHeroLead(
  profile: CityProfile,
  serviceBase: string,
): string {
  const service = (SERVICE_TITLES[serviceBase] ?? "RV water damage help").toLowerCase();
  return `${rvCityIntro(profile)} Need ${service}? Call — a real person will tell you what we can do in ${profile.name} and how soon a technician can inspect your rig.`;
}

export function localSituations(cityName: string, serviceBase: string): string[] {
  const profile = getCityProfile(cityName);
  const corridor = profile.corridors[0] ?? "your main routes";
  const place = profile.neighborhoods[0] ?? "your building";

  const byService: Record<string, string[]> = {
    "rv-water-damage-repair": [
      `Water stain or soft spot after rain near ${place}`,
      `Musty smell when you open up after winter storage`,
      `Insurance photos needed before you head out on ${corridor}`,
    ],
    "rv-roof-leak-repair": [
      `Drip from ceiling lights after a storm`,
      `Bubbling lap sealant or cracked roof membrane`,
      `Leak only shows up when driving in rain on ${corridor}`,
    ],
    "rv-roof-water-damage-repair": [
      `Sagging ceiling panel or wet insulation smell`,
      `Previous patch failed — water returned this season`,
      `Roof vent area feels soft from the inside`,
    ],
    "rv-roof-resealing": [
      `Annual maintenance before hail or snow season`,
      `New-to-you rig — you want a baseline seal inspection`,
      `Dealer noted aging sealant at purchase`,
    ],
    "rv-skylight-leak-repair": [
      `Condensation or drip around the skylight trim`,
      `Cracked gasket or missing butyl at the frame`,
      `Streaks on headliner radiating from the skylight`,
    ],
    "rv-window-leak-repair": [
      `Water track on wall below a window after washing the rig`,
      `Leak at slide-adjacent window in ${place}`,
      `Frame caulk cracked from sun exposure`,
    ],
    "rv-window-seal-replacement": [
      `Fog between panes or drafty overnight stops`,
      `Window weeps clogged — water pools in the track`,
      `Seal visibly flattened or crumbling`,
    ],
    "rv-slide-out-seal-replacement": [
      `Water on floor when slide is in after rain`,
      `Wiper seal torn from road debris`,
      `Wind whistle that started after last season`,
    ],
    "motorhome-floor-repair": [
      `Soft spot near kitchen or entry in ${place}`,
      `Floor flexes when you step near the slide`,
      `Delamination sound when walking on laminate`,
    ],
    "rv-floor-rot-repair": [
      `Dark wood visible after lifting a vent cover`,
      `Smell of rot from a plumbing bay`,
      `Floor screw no longer bites — spongy plywood`,
    ],
    "rv-floor-water-damage-repair": [
      `Spill or tank overflow soaked the bathroom floor`,
      `Dark line along wall base in the bedroom`,
      `Moisture meter reading high near the fridge`,
    ],
    "rv-subfloor-replacement": [
      `Large soft zone — patch would not be structural enough`,
      `Previous owner hid damage with new vinyl`,
      `Slide mechanism mounting area feels unstable`,
    ],
    "rv-wall-water-damage-repair": [
      `Bubbling wallpaper or stained paneling in ${place}`,
      `Wall feels cool and damp after rain`,
      `Outlet area discoloured from a roof leak path`,
    ],
    "rv-delamination-repair": [
      `Outer wall bubbles when pressed`,
      `Ripples visible in fibreglass gel coat`,
      `Leak fixed but wall still separates when hot`,
    ],
    "rv-ceiling-water-damage-repair": [
      `Brown spot on headliner after storage`,
      `Insulation clumps falling from roof vent area`,
      `AC gasket leak stained the ceiling panel`,
    ],
    "rv-wood-rot-repair": [
      `Framing soft around a window or vent`,
      `Rot spread from an old plumbing leak`,
      `Structural wood crumbled when you removed trim`,
    ],
    "rv-mold-removal": [
      `Visible spots in closet after closing up wet`,
      `Allergies flare only inside the camper`,
      `Musty smell returns days after airing out`,
    ],
    "rv-plumbing-leak-repair": [
      `Pump runs constantly — hidden line leak`,
      `Wet bay under sink in ${place}`,
      `Frozen line split last winter — now weeps when pressurized`,
    ],
    "rv-water-heater-leak-repair": [
      `Puddle in exterior water-heater bay`,
      `Rust streak from pressure relief weeping`,
      `Hot water smell and wet carpet in adjacent storage`,
    ],
  };

  return (
    byService[serviceBase] ?? [
      `New leak or soft spot in ${profile.name}`,
      `Damage discovered before a trip on ${corridor}`,
      `You want a straight answer on what to fix first`,
    ]
  );
}

export function localCallTips(serviceBase: string): string[] {
  const common = [
    "Year, make, and model of RV or trailer",
    "Where the rig is parked (storage, driveway, campground near you)",
    "When you first noticed moisture, smell, or soft spots",
  ];
  if (serviceBase.includes("roof") || serviceBase.includes("skylight")) {
    return [
      ...common,
      "Roof type if you know it (rubber, fibreglass, aluminum)",
      "Whether leak appears only in driving rain or also when parked",
    ];
  }
  if (serviceBase.includes("plumbing") || serviceBase.includes("water-heater")) {
    return [
      ...common,
      "City water vs. tank — which was connected when it leaked",
      "Photos of the wet bay or under-sink area if you have them",
    ];
  }
  if (serviceBase.includes("mold")) {
    return [
      ...common,
      "How long the unit was closed up and whether a dehumidifier ran",
      "Anyone with allergies or asthma who uses the camper",
    ];
  }
  return common;
}
