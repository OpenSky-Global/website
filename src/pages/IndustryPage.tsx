import { useParams } from "react-router-dom";
import { ParallaxImage } from "../components/ParallaxImage";
import { Reveal } from "../components/Reveal";
import { useI18n } from "../i18n/context";

const copy: Record<
  string,
  { en: { title: string; body: string }; fr: { title: string; body: string }; image: string }
> = {
  mining: {
    en: {
      title: "Mining & phosphates",
      body: "Watch tailings, pits, haul roads and perimeter encroachment. Prove what changed before equipment damage or regulatory visits.",
    },
    fr: {
      title: "Mines et phosphates",
      body: "Surveiller résidus, fosses, routes internes et empiètements. Prouver ce qui a changé avant sinistre ou visite régulateur.",
    },
    image: "/images/hero-drone-mining-site.jpg",
  },
  ports: {
    en: {
      title: "Ports",
      body: "Monitor berths, yards and back-of-port development. Catch unauthorised construction and surface change across large waterfront sites.",
    },
    fr: {
      title: "Ports",
      body: "Suivre quais, parcs et aménagements. Détecter constructions non autorisées et changements de surface sur de vastes sites portuaires.",
    },
    image: "/images/hero-drone-port-site.jpg",
  },
  utilities: {
    en: {
      title: "Water & utilities",
      body: "Dams, canals, treatment plants and transfer lines. Satellite watch plus analyst review for erosion, breach risk and third-party works.",
    },
    fr: {
      title: "Eau et réseaux",
      body: "Barrages, canaux, stations et transferts. Veille satellite et validation analyste pour érosion, rupture et travaux tiers.",
    },
    image: "/images/hero-drone-water-infrastructure.jpg",
  },
  pipelines: {
    en: {
      title: "Pipelines & power",
      body: "Long corridors where patrols are expensive. Flag earthworks, structures and vegetation loss along the right-of-way.",
    },
    fr: {
      title: "Pipelines et énergie",
      body: "Longs corridors coûteux à patrouiller. Signaler terrassements, constructions et pertes de végétation sur la emprise.",
    },
    image: "/images/hero-drone-corridor.jpg",
  },
  projects: {
    en: {
      title: "Funded projects",
      body: "Contractors and owners on DFI-backed builds. Milestone evidence and change alerts that stand up to TPM and lender review.",
    },
    fr: {
      title: "Projets financés",
      body: "Entreprises et maîtres d'ouvrage sur chantiers bailleurs. Preuves d'avancement et alertes défendables devant TPM et prêteurs.",
    },
    image: "/images/hero-mission-loop-split.jpg",
  },
};

export function IndustryPage() {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useI18n();
  const block = slug ? copy[slug] : undefined;

  if (!block) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-32 text-center text-white/70">Sector not found.</div>
    );
  }

  const c = locale === "fr" ? block.fr : block.en;

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal variant="left">
          <h1 className="type-h1-page">{c.title}</h1>
          <p className="type-body mt-4 max-w-2xl text-white/85">{c.body}</p>
        </Reveal>
        <Reveal variant="scale" delayMs={120}>
          <ParallaxImage
            src={block.image}
            alt=""
            speed={0.11}
            wrapperClassName="mt-10 overflow-hidden rounded-2xl border border-white/10 shadow-xl"
            className="max-h-[480px] w-full scale-105 object-cover"
          />
        </Reveal>
      </div>
    </div>
  );
}
