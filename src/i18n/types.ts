export type Locale = "en" | "fr";

export type Messages = {
  meta: { title: string; description: string };
  nav: {
    home: string;
    solutions: string;
    platform: string;
    atlas: string;
    osFields: string;
    productsOverview: string;
    industriesOverview: string;
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
  whatWeDo: {
    kicker: string;
    title: string;
    lead: string;
    challenge: string;
    exploreCta: string;
    pillars: { badge: string; title: string; body: string; href: string; image: string }[];
  };
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
  productsHub: {
    kicker: string;
    title: string;
    lead: string;
    sharedStack: string;
    cards: {
      slug: string;
      kicker: string;
      title: string;
      body: string;
      cta: string;
      image: string;
    }[];
  };
  industriesHub: {
    kicker: string;
    title: string;
    lead: string;
    cards: {
      mining: { title: string; body: string; cta: string };
      ports: { title: string; body: string; cta: string };
      utilities: { title: string; body: string; cta: string };
      pipelines: { title: string; body: string; cta: string };
      projects: { title: string; body: string; cta: string };
    };
  };
  atlas: {
    kicker: string;
    title: string;
    lead: string;
    modules: { tag: string; title: string; body: string }[];
    otherProduct: string;
    requestCta: string;
  };
  osFields: {
    kicker: string;
    title: string;
    lead: string;
    modules: { tag: string; title: string; body: string }[];
    otherProduct: string;
    requestCta: string;
  };
  sovereignty: { kicker: string; title: string; body: string };
  pilot: { kicker: string; title: string; body: string; cta: string };
  footer: {
    category: string;
    tagline: string;
    pillars: string;
    region: string;
    inquiries: string;
    explore: string;
    industriesNav: string;
    contact: string;
    ctaTitle: string;
    ctaLead: string;
    brochureNote: string;
    linkedin: string;
    copyright: string;
    privacy: string;
    offices: string;
  };
  request: {
    title: string;
    lead: string;
    name: string;
    email: string;
    company: string;
    sector: string;
    sectors: string[];
    message: string;
    submit: string;
    note: string;
  };
  about: {
    kicker: string;
    title: string;
    lead: string;
    sections: { label: string; title: string; body: string }[];
    responsibleLink: string;
  };
  responsible: { kicker: string; title: string; body: string };
};
