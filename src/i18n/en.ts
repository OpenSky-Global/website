import type { Messages } from "./types";

export const en: Messages = {
  meta: {
    title: "OpenSky Global | Earth observation + aerial insight for Africa",
    description:
      "Geospatial data and drones for critical infrastructure monitoring and agricultural climate risk, watch every site from space, confirm changes, signed evidence for insurers and funders.",
  },
  nav: {
    home: "Home",
    solutions: "Solutions",
    platform: "Products",
    atlas: "OS Atlas",
    osFields: "OS Fields",
    productsOverview: "Overview",
    industriesOverview: "Overview",
    industries: "Industries",
    about: "About",
    requestDemo: "Request a demo",
    responsible: ""
  },
  industries: {
    mining: "Mining & phosphates",
    ports: "Ports",
    utilities: "Water & utilities",
    pipelines: "Pipelines & power",
    projects: "Funded projects",
  },
  hero: {
    slides: [
      {
        kicker: "Satellite + drone",
        title: "From orbit to the field",
        titleAccent: "on one mission trail.",
        lead: "Geospatial data and drones for infrastructure monitoring and agricultural climate risk.",
      },
      {
        kicker: "OS Atlas",
        title: "Critical infrastructure",
        titleAccent: "monitoring.",
        lead: "Mines, ports, utilities, pipelines and funded projects, portfolio baselines, change alerts, drone confirm on flag, proof for owners and insurers.",
      },
      {
        kicker: "OS Fields",
        title: "Agricultural climate",
        titleAccent: "& environmental risk.",
        lead: "Parcels and irrigation blocks under watch, crop and land stress reviewed by analysts, field confirmation, exports funders and insurers trust.",
      },
    ],
    ctaDemo: "Request a demo",
    ctaBrochure: "Download brochure",
    stat1v: "~5 days",
    stat1l: "Typical Sentinel-2 revisit per site",
    stat2v: "0.2 ha",
    stat2l: "Minimum flagged change, human reviewed",
    stat3v: "Signed",
    stat3l: "Ed25519 evidence packs",
  },
  whatWeDo: {
    kicker: "What we do",
    title: "Geospatial data and drones for two missions.",
    lead: "We use open satellite data and our own drones to watch every site, confirm what changed, and produce evidence insurers and funders trust, hosted in your country.",
    challenge:
      "Patrols and one-off flights do not scale. When loss appears, most teams still cannot prove what changed, or when.",
    exploreCta: "Learn more",
    pillars: [
      {
        badge: "OS Atlas",
        title: "Monitoring critical infrastructure",
        body: "Mines, ports, plants, pipelines and funded construction. Portfolio baselines, human-reviewed alerts and drone confirm on flag.",
        href: "/platform/atlas",
        image: "/images/what-we-do/card-atlas-watch-confirm.jpg",
      },
      {
        badge: "OS Fields",
        title: "Agricultural climate & environmental risk",
        body: "Farm blocks and irrigation schemes. Vegetation and moisture stress, season context, field confirmation and donor-ready signed exports.",
        href: "/platform/os-fields",
        image: "/images/what-we-do/card-fields-watch-confirm.jpg",
      },
    ],
  },
  solutions: {
    kicker: "How it works",
    title: "One pipeline from orbit to signed proof.",
    lead: "The same four steps for infrastructure owners and adaptation programmes: watch from space, verify with analysts, inspect on alert, prove with cryptography.",
    cards: [
      {
        title: "Portfolio watch",
        body: "Baseline farms, dams, ports and corridors on Sentinel-2. Compare each new scene and flag vegetation, earthworks and surface change.",
        href: "/solutions#watch",
      },
      {
        title: "Analyst review",
        body: "Every detection is reviewed before it becomes your alert. No raw model output in your inbox.",
        href: "/solutions#review",
      },
      {
        title: "Drone on alert",
        body: "Our licensed team confirms what changed with live video and orthomosaics, only where satellite and analyst raised a flag.",
        href: "/solutions#confirm",
      },
      {
        title: "Signed evidence",
        body: "Export Ed25519-signed evidence packs and hash-chained audit trails for disputes, claims and regulatory review.",
        href: "/solutions#prove",
      },
    ],
  },
  why: {
    kicker: "Why OpenSky",
    title: "Not flights. Not raw maps.",
    lead: "A watched estate, confirmed changes, and proof that survives diligence, for asset owners and climate finance alike.",
    cards: [
      {
        title: "Every site from space",
        body: "Sentinel cadence across the full portfolio or programme, not spot checks.",
      },
      {
        title: "Confirmed, not guessed",
        body: "Analyst review on every flag; drone confirmation only where it matters.",
      },
      {
        title: "Insurers & funders",
        body: "Signed evidence packs built for claims, adaptation reporting and audit.",
      },
      {
        title: "Sovereign hosting",
        body: "Data and console in your country. EN, FR and Arabic.",
      },
    ],
  },
  pipeline: {
    kicker: "How it runs",
    title: "Watch. Verify. Inspect. Prove.",
    steps: [
      {
        title: "Watch",
        body: "Sentinel-2 baselines and change detection on each site (~30 s per 4 km comparison in product tests).",
      },
      {
        title: "Verify",
        body: "Analyst triage, alerts, optional high-resolution imagery on flag (roadmap where noted).",
      },
      {
        title: "Inspect",
        body: "Drone missions by our team after operator licence, with live video to your console.",
      },
      {
        title: "Prove",
        body: "Incidents closed with outcomes and exportable signed evidence.",
      },
    ],
  },
  productsHub: {
    kicker: "Products",
    title: "Two mission platforms. One evidence engine.",
    lead:
      "OS Atlas protects critical infrastructure portfolios. OS Fields applies the same watch, verify, inspect, prove loop to farms, irrigation schemes and climate-adaptation programmes.",
    sharedStack:
      "Both products share Copernicus watch, analyst review, our drone confirmation path and Ed25519 evidence, with sector-specific site templates, KPIs and console language.",
    cards: [
      {
        slug: "atlas",
        kicker: "Critical infrastructure",
        title: "OS Atlas",
        body: "Mines, ports, utilities, pipelines and funded construction. Portfolio baselines, change alerts, optional drone confirm, signed exports for owners and insurers.",
        cta: "Explore OS Atlas",
        image: "/images/hero-slides/slide-hero-atlas-drone.jpg",
      },
      {
        slug: "os-fields",
        kicker: "Agriculture & climate resilience",
        title: "OS Fields",
        body: "Parcels and irrigation blocks under watch. Crop and soil-stress signals triaged by analysts; field confirmation and donor-ready proof for lenders and adaptation funds.",
        cta: "Explore OS Fields",
        image: "/images/hero-slides/slide-hero-fields-drone.jpg",
      },
    ],
  },
  industriesHub: {
    kicker: "Industries",
    title: "Sector playbooks on one evidence engine.",
    lead:
      "The same watch, verify, inspect, prove loop, with site templates and KPIs tuned for mines, ports, utilities, corridors and lender-backed construction.",
    cards: {
      mining: {
        title: "Mining & phosphates",
        body: "Watch tailings, pits, haul roads and perimeter encroachment. Prove what changed before equipment damage or regulatory visits.",
        cta: "Mining use cases",
      },
      ports: {
        title: "Ports",
        body: "Monitor berths, yards and back-of-port development. Catch unauthorised construction and surface change across large waterfront sites.",
        cta: "Port monitoring",
      },
      utilities: {
        title: "Water & utilities",
        body: "Dams, canals, treatment plants and transfer lines. Satellite watch plus analyst review for erosion, breach risk and third-party works.",
        cta: "Utilities programmes",
      },
      pipelines: {
        title: "Pipelines & power",
        body: "Long corridors where patrols are expensive. Flag earthworks, structures and vegetation loss along the right-of-way.",
        cta: "Corridor watch",
      },
      projects: {
        title: "Funded projects",
        body: "Contractors and owners on DFI-backed builds. Milestone evidence and change alerts that stand up to TPM and lender review.",
        cta: "Project evidence",
      },
    },
  },
  atlas: {
    kicker: "OS Atlas",
    title: "Mission intelligence for assets you cannot patrol",
    lead:
      "A browser COP for mines, ports, plants and corridors: Sentinel-2 baselines, human review, drone inspect on alert, incidents closed with signed evidence, hosted in your country.",
    modules: [
      {
        tag: "WATCH",
        title: "Portfolio watch",
        body: "Scheduled Sentinel-2 comparisons per site, change layers and review queue across your estate.",
      },
      {
        tag: "VERIFY",
        title: "Analyst verify",
        body: "Every flag triaged before it reaches supervisors; optional higher-resolution imagery where licensed.",
      },
      {
        tag: "INSPECT",
        title: "Drone inspect",
        body: "Our licensed team flies confirm missions with live video and orthomosaics in the same console.",
      },
      {
        tag: "PROVE",
        title: "Signed prove",
        body: "Ed25519 evidence packs, hash-chained audit and export for insurers, DFIs and regulators.",
      },
    ],
    otherProduct: "OS Fields (agriculture)",
    requestCta: "Request an Atlas demo",
  },
  osFields: {
    kicker: "OS Fields",
    title: "Satellite-to-field proof for agriculture and adaptation finance",
    lead:
      "Built for programme managers, cooperatives and funds: parcel baselines, moisture and vegetation stress, analyst interpretation, and field confirmation that stands up in diligence.",
    modules: [
      {
        tag: "WATCH",
        title: "Parcel watch",
        body: "AOIs per farm block or irrigation command; seasonal baselines and anomaly detection on open satellite data.",
      },
      {
        tag: "VERIFY",
        title: "Crop stress verify",
        body: "Analysts separate weather noise from actionable stress, with context on water, fires and seasonality.",
      },
      {
        tag: "INSPECT",
        title: "Field confirm",
        body: "Targeted drone passes after licence for ground truth on flagged blocks (simulator-tested today).",
      },
      {
        tag: "PROVE",
        title: "Funder-ready proof",
        body: "Signed timelines and exports aligned with adaptation and blended-finance reporting needs.",
      },
    ],
    otherProduct: "OS Atlas (infrastructure)",
    requestCta: "Request an OS Fields demo",
  },
  sovereignty: {
    kicker: "Sovereignty",
    title: "Your country. Your servers. Your data.",
    body: "Deploy on-premises or with a qualified in-country cloud provider. Role-based access, hash-chained audit log, and no third-party imagery portal at view time when you use your own object store.",
  },
  pilot: {
    kicker: "Start here",
    title: "Paid 90-day pilot on 20-50 sites",
    body: "Fixed scope, measured against your baseline, designed to convert into an annual Watch or Verify licence.",
    cta: "Talk to our team",
  },
  footer: {
    category: "Satellite + drone intelligence",
    tagline:
      "Geospatial data and drones for infrastructure monitoring and agricultural climate risk.",
    pillars: "Watch · Verify · Inspect · Prove",
    region: "Built for Africa",
    inquiries: "General inquiries",
    explore: "Explore",
    industriesNav: "Industries",
    contact: "Contact",
    ctaTitle: "Ready to watch your portfolio?",
    ctaLead: "Start with a scoped pilot or a retrospective Sentinel-2 review on your sites.",
    brochureNote: "PDF · Company brochure (EN)",
    linkedin: "LinkedIn",
    copyright: "OpenSky Global (OS Global). All rights reserved.",
    privacy: "Privacy",
    offices: "Rabat · Casablanca",
  },
  request: {
    title: "Request a demo",
    lead: "Tell us about your sites. We can run a retrospective Sentinel-2 review on three of your locations over the last 12 months.",
    name: "Full name",
    email: "Work email",
    company: "Organisation",
    sector: "Sector",
    sectors: [
      "Mining",
      "Port",
      "Utilities",
      "Pipeline / power",
      "Construction / DFI project",
      "Agriculture / adaptation programme",
      "Other",
    ],
    message: "Message",
    submit: "Send request",
    note: "This form is a placeholder until our CRM is connected. Email jarjuadama101@gmail.com in the meantime.",
  },
  about: {
    kicker: "About",
    title: "About OpenSky Global",
    lead:
      "OpenSky Global (OS Global) delivers geospatial watch and aerial confirmation for asset owners and adaptation programmes, with proof insurers and funders trust.",
    sections: [
      {
        label: "Mission",
        title: "One loop, two missions",
        body: "We build OS Atlas for critical infrastructure and OS Fields for agriculture and climate adaptation. Copernicus watch, analyst review, drone confirmation and signed evidence run on the same engine with sector-specific templates.",
      },
      {
        label: "OS Atlas",
        title: "Infrastructure you cannot patrol",
        body: "Mines, ports, plants, pipelines and DFI-backed construction. Portfolio baselines, human-reviewed alerts and drone confirm on flag.",
      },
      {
        label: "OS Fields",
        title: "Fields funders can diligence",
        body: "Farm blocks and irrigation schemes under watch. Crop and moisture stress triaged by analysts, with field confirmation and donor-ready signed exports.",
      },
      {
        label: "Sovereignty",
        title: "Your country. Your data.",
        body: "Deploy on-premises or with a qualified in-country cloud provider. Role-based access, hash-chained audit log, and console language in English, French and Arabic. We monitor assets and land change, not people.",
      },
    ],
    responsibleLink: "Read our responsible-use policy",
  },
  responsible: {
    kicker: "Policy",
    body: "OpenSky products are for asset integrity, HSE and security over infrastructure and land. We do not offer weapons targeting, electronic attack, facial recognition or tracking of individuals. Customers must use exported evidence lawfully.",
    title: ""
  },
};
