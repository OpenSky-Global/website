export type Locale = "en" | "fr";

export type Messages = {
  meta: { title: string; description: string };
  nav: {
    home: string;
    solutions: string;
    platform: string;
    industries: string;
    about: string;
    responsible: string;
    requestDemo: string;
  };
  industries: {
    mining: string;
    ports: string;
    utilities: string;
    pipelines: string;
    projects: string;
  };
  hero: {
    slides: {
      kicker: string;
      title: string;
      titleAccent: string;
      lead: string;
    }[];
    ctaDemo: string;
    ctaBrochure: string;
    stat1v: string;
    stat1l: string;
    stat2v: string;
    stat2l: string;
    stat3v: string;
    stat3l: string;
  };
  problem: { kicker: string; title: string; lead: string };
  solutions: {
    kicker: string;
    title: string;
    lead: string;
    cards: { title: string; body: string; href: string }[];
  };
  why: {
    kicker: string;
    title: string;
    lead: string;
    cards: { title: string; body: string }[];
  };
  pipeline: {
    kicker: string;
    title: string;
    steps: { title: string; body: string }[];
  };
  platform: {
    kicker: string;
    title: string;
    lead: string;
    products: { tag: string; title: string; body: string }[];
  };
  sovereignty: { kicker: string; title: string; body: string };
  pilot: { kicker: string; title: string; body: string; cta: string };
  footer: {
    tagline: string;
    inquiries: string;
    explore: string;
    contact: string;
    copyright: string;
    privacy: string;
    built: string;
  };
  request: {
    title: string;
    lead: string;
    name: string;
    email: string;
    company: string;
    sector: string;
    message: string;
    submit: string;
    note: string;
  };
  about: { title: string; body: string };
  responsible: { title: string; body: string };
};
