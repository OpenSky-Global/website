import type { Messages } from "./types";

export const fr: Messages = {
  meta: {
    title: "OpenSky Global | Observation terrestre et insight aérien pour l'Afrique",
    description:
      "Données géospatiales et drones pour l'infrastructure critique et les risques climatiques agricoles, veille spatiale, confirmation des changements, preuves signées pour assureurs et bailleurs.",
  },
  nav: {
    home: "Accueil",
    solutions: "Solutions",
    platform: "Produits",
    atlas: "OS Atlas",
    osFields: "OS Fields",
    productsOverview: "Vue d'ensemble",
    industriesOverview: "Vue d'ensemble",
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
        kicker: "Satellite + drone",
        title: "De l'orbite au terrain",
        titleAccent: "sur une seule piste.",
        lead: "Veille Copernicus sur chaque site, revue analyste sur chaque signal, confirmation drone quand il faut une vérité terrain, puis preuves signées dans une console.",
      },
      {
        kicker: "OS Atlas",
        title: "Surveillance de",
        titleAccent: "l'infrastructure critique.",
        lead: "Mines, ports, réseaux, pipelines et projets financés, références portefeuille, alertes de changement, drone sur signal, preuves pour propriétaires et assureurs.",
      },
      {
        kicker: "OS Fields",
        title: "Risque climatique",
        titleAccent: "et environnemental agricole.",
        lead: "Parcelles et blocs d'irrigation sous veille, stress cultural et foncier revu par des analystes, confirmation terrain, exports acceptés des bailleurs et assureurs.",
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
  whatWeDo: {
    kicker: "Ce que nous faisons",
    title: "Données géospatiales et drones pour deux missions.",
    lead: "Nous utilisons l'imagerie satellite ouverte et nos drones pour surveiller chaque site, confirmer les changements et produire des preuves que les assureurs et bailleurs acceptent, hébergées dans votre pays.",
    challenge:
      "Les patrouilles et vols ponctuels ne passent pas à l'échelle. Quand un sinistre apparaît, peu d'équipes peuvent prouver quoi, ni quand.",
    exploreCta: "En savoir plus",
    pillars: [
      {
        badge: "OS Atlas",
        title: "Surveillance de l'infrastructure critique",
        body: "Mines, ports, usines, pipelines et chantiers financés. Références portefeuille, alertes revues par un humain et confirmation drone sur signal.",
        href: "/platform/atlas",
        image: "/images/what-we-do/card-atlas-watch-confirm.jpg",
      },
      {
        badge: "OS Fields",
        title: "Risque climatique et environnemental agricole",
        body: "Blocs culturaux et périmètres d'irrigation. Stress végétal et hydrique, contexte saisonnier, confirmation terrain et exports signés pour bailleurs.",
        href: "/platform/os-fields",
        image: "/images/what-we-do/card-fields-watch-confirm.jpg",
      },
    ],
  },
  solutions: {
    kicker: "Comment ça marche",
    title: "Une seule chaîne, de l'orbite à la preuve signée.",
    lead: "Les quatre mêmes étapes pour propriétaires d'actifs et programmes d'adaptation : surveiller depuis l'espace, vérifier avec des analystes, inspecter sur alerte, prouver cryptographiquement.",
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
    title: "Pas des vols. Pas des cartes brutes.",
    lead: "Un patrimoine surveillé, des changements confirmés et des preuves qui tiennent en due diligence, pour propriétaires d'actifs et finance climat.",
    cards: [
      {
        title: "Chaque site depuis l'espace",
        body: "Cadence Sentinel sur tout le portefeuille ou programme, pas des contrôles ponctuels.",
      },
      {
        title: "Confirmé, pas supposé",
        body: "Revue analyste sur chaque signal ; drone seulement quand c'est utile.",
      },
      {
        title: "Assureurs et bailleurs",
        body: "Dossiers signés pour sinistres, reporting d'adaptation et audit.",
      },
      {
        title: "Hébergement souverain",
        body: "Données et console dans votre pays. FR, AR et EN.",
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
  productsHub: {
    kicker: "Produits",
    title: "Deux plateformes mission. Un même moteur de preuves.",
    lead:
      "OS Atlas protège les portefeuilles d'infrastructure critique. OS Fields applique la même boucle surveiller, vérifier, inspecter, prouver aux exploitations, périmètres d'irrigation et programmes d'adaptation climatique.",
    sharedStack:
      "Copernicus, revue analyste, confirmation drone et preuves Ed25519 en commun, avec modèles de sites, KPI et lexique métier adaptés à chaque secteur.",
    cards: [
      {
        slug: "atlas",
        kicker: "Infrastructure critique",
        title: "OS Atlas",
        body: "Mines, ports, réseaux, pipelines et chantiers financés. Références portefeuille, alertes de changement, drone sur signal, exports signés pour propriétaires et assureurs.",
        cta: "Découvrir OS Atlas",
        image: "/images/hero-slides/slide-hero-atlas-drone.jpg",
      },
      {
        slug: "os-fields",
        kicker: "Agriculture et résilience climatique",
        title: "OS Fields",
        body: "Parcelles et blocs d'irrigation sous veille. Signaux de stress cultural et hydrique passés en revue ; confirmation terrain et preuves prêtes pour bailleurs et fonds d'adaptation.",
        cta: "Découvrir OS Fields",
        image: "/images/hero-slides/slide-hero-fields-drone.jpg",
      },
    ],
  },
  industriesHub: {
    kicker: "Secteurs",
    title: "Des gabarits métier sur un seul moteur de preuves.",
    lead:
      "La même boucle surveiller, vérifier, inspecter, prouver, avec modèles de sites et KPI adaptés aux mines, ports, réseaux, corridors et chantiers financés.",
    cards: {
      mining: {
        title: "Mines et phosphates",
        body: "Surveiller résidus, fosses, routes internes et empiètements. Prouver ce qui a changé avant sinistre ou visite régulateur.",
        cta: "Cas d'usage mines",
      },
      ports: {
        title: "Ports",
        body: "Suivre quais, parcs et aménagements. Détecter constructions non autorisées et changements de surface sur de vastes sites portuaires.",
        cta: "Surveillance portuaire",
      },
      utilities: {
        title: "Eau et réseaux",
        body: "Barrages, canaux, stations et transferts. Veille satellite et validation analyste pour érosion, rupture et travaux tiers.",
        cta: "Programmes réseaux",
      },
      pipelines: {
        title: "Pipelines et énergie",
        body: "Longs corridors coûteux à patrouiller. Signaler terrassements, constructions et pertes de végétation sur la emprise.",
        cta: "Veille corridor",
      },
      projects: {
        title: "Projets financés",
        body: "Entreprises et maîtres d'ouvrage sur chantiers bailleurs. Preuves d'avancement et alertes défendables devant TPM et prêteurs.",
        cta: "Preuves chantier",
      },
    },
  },
  atlas: {
    kicker: "OS Atlas",
    title: "Intelligence de mission pour les actifs impossibles à patrouiller",
    lead:
      "COP navigateur pour mines, ports, usines et corridors : références Sentinel-2, revue humaine, inspection drone sur alerte, incidents clos avec preuves signées, hébergé dans votre pays.",
    modules: [
      {
        tag: "SURVEILLER",
        title: "Veille portefeuille",
        body: "Comparaisons Sentinel-2 planifiées par site, couches de changement et file de revue sur votre patrimoine.",
      },
      {
        tag: "VÉRIFIER",
        title: "Validation analyste",
        body: "Chaque signal trié avant le superviseur ; imagerie haute résolution en option lorsque licenciée.",
      },
      {
        tag: "INSPECTER",
        title: "Inspection drone",
        body: "Notre équipe licenciée confirme en vol avec vidéo directe et orthomosaïques dans la même console.",
      },
      {
        tag: "PROUVER",
        title: "Preuve signée",
        body: "Paquets Ed25519, audit chaîné et export pour assureurs, IFD et régulateurs.",
      },
    ],
    otherProduct: "OS Fields (agriculture)",
    requestCta: "Demander une démo Atlas",
  },
  osFields: {
    kicker: "OS Fields",
    title: "De l'orbite au champ pour l'agriculture et la finance climat",
    lead:
      "Pour gestionnaires de programmes, coopératives et fonds : références parcellaires, stress hydrique et cultural, interprétation analyste et confirmation terrain solide en due diligence.",
    modules: [
      {
        tag: "SURVEILLER",
        title: "Veille parcellaire",
        body: "Emprises par bloc ou périmètre d'irrigation ; références saisonnières et anomalies sur données satellite ouvertes.",
      },
      {
        tag: "VÉRIFIER",
        title: "Stress cultural",
        body: "Les analystes séparent le bruit météo du stress actionnable, avec contexte eau, feux et saison.",
      },
      {
        tag: "INSPECTER",
        title: "Confirmation terrain",
        body: "Passages drone ciblés après licence pour vérité terrain sur les blocs signalés (simulateur aujourd'hui).",
      },
      {
        tag: "PROUVER",
        title: "Preuve bailleur",
        body: "Chronologies signées et exports alignés avec les besoins de reporting adaptation et finance mixte.",
      },
    ],
    otherProduct: "OS Atlas (infrastructure)",
    requestCta: "Demander une démo OS Fields",
  },
  sovereignty: {
    kicker: "Souveraineté",
    title: "Votre pays. Vos serveurs. Vos données.",
    body: "Déploiement sur site ou cloud national qualifié. Accès par rôles, journal d'audit chaîné, sans portail imagery tiers à la consultation lorsque vous utilisez votre propre stockage objet.",
  },
  pilot: {
    kicker: "Commencer",
    title: "Pilote payant 90 jours sur 20-50 sites",
    body: "Périmètre fixe, mesuré par rapport à votre référence, conçu pour devenir une licence Watch ou Verify annuelle.",
    cta: "Parler à notre équipe",
  },
  footer: {
    category: "Intelligence satellite + drone",
    tagline:
      "Données géospatiales et drones pour l'infrastructure critique et le risque climatique agricole, veille spatiale, changements confirmés, preuves signées pour assureurs et bailleurs.",
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
    sectors: [
      "Mines",
      "Port",
      "Eau et réseaux",
      "Pipeline / énergie",
      "Chantier / projet IFD",
      "Agriculture / programme d'adaptation",
      "Autre",
    ],
    message: "Message",
    submit: "Envoyer",
    note: "Formulaire provisoire jusqu'à connexion CRM. Écrivez à jarjuadama101@gmail.com en attendant.",
  },
  about: {
    kicker: "À propos",
    title: "À propos d'OpenSky Global",
    lead:
      "OpenSky Global (OS Global) fournit veille géospatiale et confirmation aérienne pour les propriétaires d'actifs et les programmes d'adaptation, avec des preuves que assureurs et bailleurs acceptent.",
    sections: [
      {
        label: "Mission",
        title: "Une boucle, deux missions",
        body: "OS Atlas pour l'infrastructure critique et OS Fields pour l'agriculture et l'adaptation climatique. Veille Copernicus, validation analyste, confirmation drone et preuves signées sur le même moteur, avec des gabarits sectoriels.",
      },
      {
        label: "OS Atlas",
        title: "L'infrastructure que vous ne pouvez pas patrouiller",
        body: "Mines, ports, usines, pipelines et chantiers bailleurs. Références portefeuille, alertes revues par des analystes et confirmation drone sur signal.",
      },
      {
        label: "OS Fields",
        title: "Des parcelles auditables par les financeurs",
        body: "Blocs agricoles et périmètres d'irrigation sous veille. Stress cultural et hydrique passé en revue, confirmation terrain et exports signés pour bailleurs.",
      },
      {
        label: "Souveraineté",
        title: "Votre pays. Vos données.",
        body: "Déploiement sur site ou cloud qualifié dans le pays. Accès par rôles, journal d'audit chaîné et console en français, arabe et anglais. Nous surveillons des actifs et des changements de terrain, pas des personnes.",
      },
    ],
    responsibleLink: "Lire notre politique d'usage responsable",
  },
  responsible: {
    kicker: "Politique",
    title: "Usage responsable",
    body: "Les produits OpenSky servent l'intégrité des actifs, la HSE et la sécurité des infrastructures et du terrain. Pas de ciblage d'armes, d'attaque électronique, de reconnaissance faciale ni de suivi de personnes. Les clients doivent utiliser les preuves exportées conformément à la loi.",
  },
};
