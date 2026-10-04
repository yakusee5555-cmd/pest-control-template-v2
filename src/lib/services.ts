import general from "@/assets/pest-general.jpg";
import bedbug from "@/assets/pest-bedbug.jpg";
import termite from "@/assets/pest-termite.jpg";
import rodent from "@/assets/pest-rodent.jpg";
import cockroach from "@/assets/pest-cockroach.jpg";

export const services = [
  {
    slug: "raccoon-removal",
    fromPrice: "$299",
    title: "Raccoon Removal",
    image: rodent,
    summary: "Humane raccoon trapping and removal from attics, crawl spaces, and yards.",
    description: "Raccoons tear up attics, trash, and insulation — and they don't leave on their own. We trap and remove raccoons humanely, then seal every entry point so they can't come back.",
    features: ["Attic and crawl-space inspection",
    "Humane trapping and removal",
    "Entry-point exclusion",
    "Damage and cleanup assessment"],
  },
  {
    slug: "possum-removal",
    fromPrice: "$249",
    title: "Possum Removal",
    image: rodent,
    summary: "Safe opossum removal and relocation away from your home and pets.",
    description: "Possums under decks and in sheds cause mess, odor, and risk to pets. We remove them safely and relocate them far from your property.",
    features: ["Under-deck and shed inspection",
    "Safe capture and relocation",
    "Entry-point sealing",
    "Sanitation guidance"],
  },
  {
    slug: "wildlife-control",
    fromPrice: "$279",
    title: "Wildlife Control",
    image: rodent,
    summary: "Humane removal of nuisance wildlife — squirrels, bats, and more.",
    description: "Wildlife in your walls or attic causes noise, damage, and health risks. We identify the animal, remove it humanely, and keep it out for good.",
    features: ["Wildlife inspection",
    "Humane trapping methods",
    "Entry-point exclusion",
    "Attic damage assessment"],
  },
  {
    slug: "animal-exclusion",
    fromPrice: "$399",
    title: "Animal Exclusion",
    image: general,
    summary: "Seal entry points and animal-proof your home against re-entry.",
    description: "Removal is only half the job — exclusion keeps wildlife out permanently. We seal gaps, vents, and rooflines with professional-grade materials.",
    features: ["Full exterior inspection",
    "Entry-point sealing",
    "Vent and chimney guards",
    "Long-term prevention plan"],
  }
] as const;

export type Service = (typeof services)[number];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
