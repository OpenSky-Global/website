import type { Messages } from "./types";

export const en: Messages = {
  meta: {
    title: "OpenSky Global | Satellite + drone intelligence | OS Atlas",
    description:
      "Actionable proof for infrastructure you can't patrol. Satellite watches the portfolio, drone confirms the alert, signed evidence on OS Atlas, hosted in-country.",
  },
  nav: {
    home: "Home",
    solutions: "Solutions",
    platform: "OS Atlas",
    industries: "Industries",
    about: "About",
    responsible: "Responsible use",
    requestDemo: "Request a demo",
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
        kicker: "Watch · verify · inspect",
        title: "One mission loop from",
        titleAccent: "orbit to evidence.",
        lead: "Space watches the portfolio, the field confirms on alert, and OS Atlas holds the signed trail your auditor can trust.",
      },
      {
        kicker: "OS Atlas live",
        title: "Every alert on",
        titleAccent: "one mission map.",
        lead: "Missions, layers, review queue and evidence export in one console — hosted in your country, in EN, FR and AR.",
      },
      {
        kicker: "Copernicus watch",
        title: "Every site on the",
        titleAccent: "satellite clock.",
        lead: "Sentinel-2 baselines and change detection across mines, ports, utilities and corridors — not only where you scheduled a flight.",
      },
      {
        kicker: "Mining & phosphates",
        title: "See what changed at",
        titleAccent: "the pit and perimeter.",
        lead: "Flag earthworks, encroachment and surface change before equipment damage or a regulatory visit.",
      },
      {
        kicker: "Ports & logistics",
        title: "Surface change across",
        titleAccent: "waterfront you can't walk.",
        lead: "Monitor berths, yards and back-of-port development across sites too large for patrols alone.",
      },
      {
        kicker: "Pipelines & corridors",
        title: "Long rights-of-way",
        titleAccent: "under continuous watch.",
        lead: "Detect third-party works, vegetation loss and new structures along power lines and pipelines.",
      },
      {
        kicker: "Water & utilities",
        title: "Dams and networks",
        titleAccent: "without blind spots.",
        lead: "Satellite cadence plus analyst review for erosion, breach risk and unauthorised construction.",
      },
      {
        kicker: "Human review",
        title: "A person on every",
        titleAccent: "change before you do.",
        lead: "No raw model output in your inbox — each flag is triaged before it becomes your alert.",
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
  problem: {
    kicker: "The challenge",
    title: "You can't inspect your sites often enough.",
    lead: "Changes show up late, and you can't prove what happened, or when. Patrols, spreadsheets and one-off drone flights don't scale across a portfolio.",
  },
  solutions: {
    kicker: "Our solutions",
    title: "One pipeline from space to signed proof.",
    lead: "From Copernicus watch to analyst review to drone confirmation, OpenSky turns complex sites into decisions your team, auditor or insurer can trust.",
    cards: [
      {
        title: "Portfolio watch",
        body: "Baseline each site and compare new Sentinel-2 scenes. Changes are classified and flagged across mines, ports, utilities and corridors.",
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
    title: "They sell flights and maps.",
    lead: "We sell a watched portfolio, reviewed alerts, and proof that holds up.",
    cards: [
      {
        title: "Portfolio watch",
        body: "~5-day satellite cadence on every site, not only where you fly.",
      },
      {
        title: "Drone on alert",
        body: "Mobilise confirmation only after a reviewed flag.",
      },
      {
        title: "Analyst gate",
        body: "A person on every change before it reaches your team.",
      },
      {
        title: "Signed proof",
        body: "Cryptographic evidence packs for auditors and insurers.",
      },
      {
        title: "Your country",
        body: "Hosted in-country. Console in EN, FR and AR.",
      },
      {
        title: "One platform",
        body: "Watch, Verify and Inspect on OS Atlas with one map and one trail.",
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
  platform: {
    kicker: "Platform",
    title: "OS Atlas and the OS product family",
    lead: "One mission map, one clock, one evidence trail for infrastructure owners in Morocco and francophone Africa.",
    products: [
      {
        tag: "ATLAS",
        title: "OS Atlas",
        body: "Mission-intelligence platform: portfolios, review queue, alerts, incidents, signed exports.",
      },
      {
        tag: "EDGE",
        title: "OS Edge",
        body: "Field gateway for our drones and sensors at the site (roadmap: offline-first buffering).",
      },
      {
        tag: "AIR",
        title: "OS Air",
        body: "Our own drones, flown by our team after operator licence (simulator-tested today).",
      },
      {
        tag: "SERVICES",
        title: "OS Mission Services",
        body: "Pilots, analyst review, training and managed monitoring cells.",
      },
    ],
  },
  sovereignty: {
    kicker: "Sovereignty",
    title: "Your country. Your servers. Your data.",
    body: "Deploy on-premises or with a qualified in-country cloud provider. Role-based access, hash-chained audit log, and no third-party imagery portal at view time when you use your own object store.",
  },
  pilot: {
    kicker: "Start here",
    title: "Paid 90-day pilot on 20–50 sites",
    body: "Fixed scope, measured against your baseline, designed to convert into an annual Watch or Verify licence.",
    cta: "Talk to our team",
  },
  footer: {
    tagline:
      "Satellite and drone intelligence for critical infrastructure, built in Morocco for Africa.",
    inquiries: "General inquiries",
    explore: "Explore",
    contact: "Contact",
    copyright: "OpenSky Global (OS Global). All rights reserved.",
    privacy: "Privacy",
    built: "Rabat · Casablanca",
  },
  request: {
    title: "Request a demo",
    lead: "Tell us about your sites. We can run a retrospective Sentinel-2 review on three of your locations over the last 12 months.",
    name: "Full name",
    email: "Work email",
    company: "Organisation",
    sector: "Sector",
    message: "Message",
    submit: "Send request",
    note: "This form is a placeholder until our CRM is connected. Email jarjuadama101@gmail.com in the meantime.",
  },
  about: {
    title: "About OpenSky Global",
    body: "OpenSky Global (OS Global) builds OS Atlas for owners and operators of mines, ports, utilities, pipelines and funded construction projects. We combine Copernicus satellite watch, analyst review, drone confirmation and signed evidence, hosted in the customer's country, in English, French and Arabic. We monitor assets and land change, not people.",
  },
  responsible: {
    title: "Responsible use",
    body: "OpenSky products are for asset integrity, HSE and security over infrastructure and land. We do not offer weapons targeting, electronic attack, facial recognition or tracking of individuals. Customers must use exported evidence lawfully.",
  },
};
