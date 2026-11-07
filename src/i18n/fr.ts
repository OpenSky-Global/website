import type { Messages } from "./types";

export const fr: Messages = {
  meta: {
    title: "OpenSky Global | Intelligence satellite + drone | OS Atlas",
    description:
      "Preuves exploitables pour des sites impossibles à patrouiller. Le satellite surveille le portefeuille, le drone confirme l'alerte, preuves signées sur OS Atlas, hébergées in-country.",
  },
  nav: {
    home: "Accueil",
    solutions: "Solutions",
    platform: "OS Atlas",
    industries: "Secteurs",
    about: "À propos",
    responsible: "Usage responsable",
    requestDemo: "Demander une démo",
  },
  industries: {
    mining: "Mines et phosphates",
    ports: "Ports",
    utilities: "Eau et réseaux",
    pipelines: "Pipelines et énergie",
    projects: "Projets financés",
  },
  hero: {
    slides: [
      {
        kicker: "Surveiller · vérifier · inspecter",
        title: "Une boucle de mission de",
        titleAccent: "l'orbite à la preuve.",
        lead: "L'espace surveille le portefeuille, le terrain confirme sur alerte, et OS Atlas conserve la piste signée que votre auditeur peut vérifier.",
      },
      {
        kicker: "OS Atlas en direct",
        title: "Chaque alerte sur",
        titleAccent: "une carte mission.",
        lead: "Missions, couches, file de revue et export de preuves dans une console — hébergée in-country, en FR, AR et EN.",
      },
      {
        kicker: "Veille Copernicus",
        title: "Chaque site sous",
        titleAccent: "l'horloge satellite.",
        lead: "Références Sentinel-2 et détection de changement sur mines, ports, réseaux et corridors — pas seulement là où vous avez planifié un vol.",
      },
      {
        kicker: "Mines et phosphates",
        title: "Voir ce qui a changé à",
        titleAccent: "la fosse et au périmètre.",
        lead: "Signaler terrassements, empiètements et modifications de surface avant sinistre ou visite régulateur.",
      },
      {
        kicker: "Ports et logistique",
        title: "Changements de surface sur",
        titleAccent: "des quais immenses.",
        lead: "Suivre quais, parcs et zones arrière-port trop vastes pour la patrouille seule.",
      },
      {
        kicker: "Pipelines et corridors",
        title: "De longues emprises",
        titleAccent: "sous veille continue.",
        lead: "Détecter travaux tiers, perte de végétation et nouvelles structures le long des lignes et pipelines.",
      },
      {
        kicker: "Eau et réseaux",
        title: "Barrages et réseaux",
        titleAccent: "sans angles morts.",
        lead: "Cadence satellite et validation analyste pour érosion, risque de rupture et construction non autorisée.",
      },
      {
        kicker: "Revue humaine",
        title: "Un analyste sur",
        titleAccent: "chaque changement.",
        lead: "Pas de sortie brute du modèle dans votre boîte mail — chaque signal est trié avant de devenir votre alerte.",
      },
    ],
    ctaDemo: "Demander une démo",
    ctaBrochure: "Télécharger la brochure",
    stat1v: "~5 jours",
    stat1l: "Revoyure Sentinel-2 typique par site",
    stat2v: "0,2 ha",
    stat2l: "Changement minimal signalé, revu par un analyste",
    stat3v: "Signé",
    stat3l: "Dossiers de preuves Ed25519",
  },
  problem: {
    kicker: "Le défi",
    title: "Vous ne pouvez pas inspecter vos sites assez souvent.",
    lead: "Les changements arrivent tard, et vous ne pouvez pas prouver quoi, ni quand. Patrouilles, tableurs et vols drone ponctuels ne couvrent pas un portefeuille entier.",
  },
  solutions: {
    kicker: "Nos solutions",
    title: "Une chaîne de l'espace à la preuve signée.",
    lead: "De la veille Copernicus à la validation analyste et à la confirmation drone, OpenSky transforme des sites complexes en décisions que vos équipes, auditeurs ou assureurs peuvent défendre.",
    cards: [
      {
        title: "Veille portefeuille",
        body: "Référencer chaque site et comparer les nouvelles scènes Sentinel-2. Changements classés sur mines, ports, réseaux et corridors.",
        href: "/solutions#watch",
      },
      {
        title: "Validation analyste",
        body: "Chaque détection est revue avant de devenir votre alerte. Pas de sortie brute de modèle dans votre boîte mail.",
        href: "/solutions#review",
      },
      {
        title: "Drone sur alerte",
        body: "Notre équipe licenciée confirme en vidéo et orthophotos uniquement là où le satellite et l'analyste ont signalé un changement.",
        href: "/solutions#confirm",
      },
      {
        title: "Preuve signée",
        body: "Export de dossiers Ed25519 et piste d'audit chaînée pour litiges, sinistres et contrôles.",
        href: "/solutions#prove",
      },
    ],
  },
  why: {
    kicker: "Pourquoi OpenSky",
    title: "D'autres vendent des vols et des cartes.",
    lead: "Nous vendons un portefeuille surveillé, des alertes validées et des preuves solides.",
    cards: [
      {
        title: "Veille portefeuille",
        body: "Cadence satellite ~5 jours sur chaque site, pas seulement là où vous volez.",
      },
      {
        title: "Drone sur alerte",
        body: "Confirmation mobilisée seulement après signalement validé.",
      },
      {
        title: "Validation analyste",
        body: "Un humain sur chaque changement avant vos équipes.",
      },
      {
        title: "Preuve signée",
        body: "Dossiers cryptographiques pour auditeurs et assureurs.",
      },
      {
        title: "Votre territoire",
        body: "Hébergement in-country. Console FR, AR et EN.",
      },
      {
        title: "Une plateforme",
        body: "Surveiller, Vérifier et Inspecter sur OS Atlas, une carte, une piste.",
      },
    ],
  },
  pipeline: {
    kicker: "Déroulement",
    title: "Surveiller. Vérifier. Inspecter. Prouver.",
    steps: [
      {
        title: "Surveiller",
        body: "Références Sentinel-2 et détection de changement (~30 s pour 4 km en tests produit).",
      },
      {
        title: "Vérifier",
        body: "Triage analyste, alertes, imagerie haute résolution sur flag (feuille de route si indiqué).",
      },
      {
        title: "Inspecter",
        body: "Missions drone par notre équipe après licence d'exploitant, vidéo en direct vers votre console.",
      },
      {
        title: "Prouver",
        body: "Incidents clos avec issue et preuves exportables signées.",
      },
    ],
  },
  platform: {
    kicker: "Plateforme",
    title: "OS Atlas et la famille OS",
    lead: "Une carte de mission, une horloge, une piste de preuves pour les propriétaires d'infrastructure au Maroc et en Afrique francophone.",
    products: [
      {
        tag: "ATLAS",
        title: "OS Atlas",
        body: "Plateforme mission-intelligence : portefeuilles, file de revue, alertes, incidents, exports signés.",
      },
      {
        tag: "EDGE",
        title: "OS Edge",
        body: "Passerelle terrain pour nos drones et capteurs (feuille de route : tampon hors ligne).",
      },
      {
        tag: "AIR",
        title: "OS Air",
        body: "Nos propres drones, pilotés par notre équipe après licence (testés sur simulateur aujourd'hui).",
      },
      {
        tag: "SERVICES",
        title: "OS Mission Services",
        body: "Pilotes, revue analyste, formation et cellules de surveillance gérées.",
      },
    ],
  },
  sovereignty: {
    kicker: "Souveraineté",
    title: "Votre pays. Vos serveurs. Vos données.",
    body: "Déploiement sur site ou cloud national qualifié. Accès par rôles, journal d'audit chaîné, sans portail imagery tiers à la consultation lorsque vous utilisez votre propre stockage objet.",
  },
  pilot: {
    kicker: "Commencer",
    title: "Pilote payant 90 jours sur 20–50 sites",
    body: "Périmètre fixe, mesuré par rapport à votre référence, conçu pour devenir une licence Watch ou Verify annuelle.",
    cta: "Parler à notre équipe",
  },
  footer: {
    category: "Intelligence satellite + drone",
    tagline:
      "Des preuves exploitables pour des infrastructures impossibles à patrouiller — veille portefeuille, validation analyste, drone sur alerte, preuves signées sur OS Atlas.",
    pillars: "Surveiller · Vérifier · Inspecter · Prouver",
    region: "Conçu pour l'Afrique",
    inquiries: "Contact général",
    explore: "Explorer",
    industriesNav: "Secteurs",
    contact: "Contact",
    ctaTitle: "Prêt à surveiller votre portefeuille ?",
    ctaLead:
      "Commencez par un pilote cadré ou une revue Sentinel-2 rétrospective sur vos sites.",
    brochureNote: "PDF · Brochure entreprise (EN)",
    linkedin: "LinkedIn",
    copyright: "OpenSky Global (OS Global). Tous droits réservés.",
    privacy: "Confidentialité",
    offices: "Rabat · Casablanca",
  },
  request: {
    title: "Demander une démo",
    lead: "Parlez-nous de vos sites. Nous pouvons réaliser une revue Sentinel-2 rétrospective sur trois de vos emplacements sur les 12 derniers mois.",
    name: "Nom complet",
    email: "E-mail professionnel",
    company: "Organisation",
    sector: "Secteur",
    message: "Message",
    submit: "Envoyer",
    note: "Formulaire provisoire jusqu'à connexion CRM. Écrivez à jarjuadama101@gmail.com en attendant.",
  },
  about: {
    title: "À propos d'OpenSky Global",
    body: "OpenSky Global (OS Global) développe OS Atlas pour les propriétaires de mines, ports, réseaux, pipelines et chantiers financés. Nous combinons veille Copernicus, validation analyste, confirmation drone et preuves signées, hébergées dans le pays du client, en français, arabe et anglais. Nous surveillons des actifs et des changements de terrain, pas des personnes.",
  },
  responsible: {
    title: "Usage responsable",
    body: "Les produits OpenSky servent l'intégrité des actifs, la HSE et la sécurité des infrastructures et du terrain. Pas de ciblage d'armes, d'attaque électronique, de reconnaissance faciale ni de suivi de personnes. Les clients doivent utiliser les preuves exportées conformément à la loi.",
  },
};
