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
  "fire-extinguisher-inspection": "Fire extinguisher inspection",
  "commercial-fire-extinguisher-inspection": "Commercial inspection",
  "annual-fire-extinguisher-inspection": "Annual inspection",
  "fire-extinguisher-maintenance": "Fire extinguisher maintenance",
  "fire-extinguisher-servicing": "Fire extinguisher servicing",
  "fire-extinguisher-recharge-and-refill": "Recharge & refill",
  "co2-fire-extinguisher-refill": "CO₂ refill",
  "apartment-building-fire-extinguisher-inspection": "Apartment building inspection",
  "6-year-fire-extinguisher-inspection": "Six-year service",
};

export function getCityProfile(cityName: string): CityProfile {
  return (
    CITY_PROFILES[cityName] ?? {
      name: cityName,
      province: "Canada",
      region: `${cityName} and nearby communities`,
      corridors: ["Major roads", "Downtown", "Industrial areas"],
      neighborhoods: ["Commercial districts", "Residential areas", "Mixed-use buildings"],
      intro: `Building owners in ${cityName} call when extinguishers are out of date or missing — we help you get compliant without confusing jargon.`,
    }
  );
}

export function localPageTitle(cityName: string, serviceBase: string): string {
  const service = SERVICE_TITLES[serviceBase] ?? "Fire extinguisher help";
  return `${service} in ${cityName}`;
}

export function localHeroLead(
  profile: CityProfile,
  serviceBase: string,
): string {
  const service = (SERVICE_TITLES[serviceBase] ?? "Fire extinguisher help").toLowerCase();
  return `${profile.intro} Need ${service}? Call us — a real person will tell you what we can do in ${profile.name} and how soon someone can visit.`;
}

export function localSituations(cityName: string, serviceBase: string): string[] {
  const profile = getCityProfile(cityName);
  const corridor = profile.corridors[0] ?? "your main routes";
  const place = profile.neighborhoods[0] ?? "your building";

  const byService: Record<string, string[]> = {
    "fire-extinguisher-inspection": [
      `Tags out of date in ${place} or the back hallway`,
      `New lease or insurance form asking for proof of inspection`,
      `Mixed ABC units — you want someone to confirm they match each room`,
    ],
    "commercial-fire-extinguisher-inspection": [
      `Retail or office space opening on ${corridor}`,
      `Warehouse aisle extinguishers blocked or missing`,
      `Franchise audit coming and cabinets look empty`,
    ],
    "annual-fire-extinguisher-inspection": [
      `Yearly sticker expired on several floors`,
      `Strata letter reminding owners about common-area equipment`,
      `You inherited a building and do not know when service last happened`,
    ],
    "fire-extinguisher-maintenance": [
      `Gauge in the red on a unit that still looks new`,
      `Hose or handle damage after tenant use`,
      `Older bottles you are unsure still meet code`,
    ],
    "fire-extinguisher-servicing": [
      `Portfolio of locations — you want one team to rotate visits`,
      `After-hours service so staff are not interrupted`,
      `Swapping expired units before a busy season`,
    ],
    "fire-extinguisher-recharge-and-refill": [
      `Someone discharged an ABC unit during a small fire`,
      `Training drill emptied several cabinets`,
      `Kitchen suppression used — you need the right replacement fast`,
    ],
    "co2-fire-extinguisher-refill": [
      `Server room or lab CO₂ unit below weight`,
      `Kitchen pass-through CO₂ used on a flare-up`,
      `New equipment and you need the correct size on the wall`,
    ],
    "apartment-building-fire-extinguisher-inspection": [
      `Parking level and laundry room cabinets need tagging`,
      `Resident complaint about missing hallway units`,
      `Board meeting next week — you want photos and a clear list`,
    ],
    "6-year-fire-extinguisher-inspection": [
      `Manufacturer label mentions a longer service interval`,
      `Mixed-age fleet — you want a plan instead of guessing`,
      `Facilities team asked what is due this quarter`,
    ],
  };

  return (
    byService[serviceBase] ?? [
      `Extinguishers overdue or missing in ${profile.name}`,
      `Upcoming visit from fire or insurance in ${place}`,
      `You want a straight answer on what to fix first`,
    ]
  );
}

export function localCallTips(serviceBase: string): string[] {
  const common = [
    "Building address and best entrance for your technician",
    "How many extinguishers and where they sit (floor, room type)",
    "Whether any unit was used, tagged overdue, or showing a red gauge",
  ];
  if (serviceBase.includes("apartment")) {
    return [
      ...common,
      "Number of floors and common areas to include",
      "Property manager or board contact for access",
    ];
  }
  if (serviceBase.includes("commercial") || serviceBase.includes("co2")) {
    return [
      ...common,
      "Business hours and any hazard areas (kitchen, server room, warehouse)",
      "Whether you need after-hours or weekend access",
    ];
  }
  return common;
}
