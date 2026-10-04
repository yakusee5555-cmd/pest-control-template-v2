import general from "@/assets/pest-general.jpg";
import raccoon from "@/assets/raccoon.jpg";
import opossum from "@/assets/opossum.jpg";
import squirrel from "@/assets/squirrel.jpg";
import bat from "@/assets/bat.jpg";
import atticCleanup from "@/assets/attic-cleanup.jpg";
import snake from "@/assets/snake.jpg";
import inspection from "@/assets/inspection.jpg";

export const services = [
  {
    slug: "raccoon-removal",
    fromPrice: "$299",
    title: "Raccoon Removal",
    image: raccoon,
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
    image: opossum,
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
    image: squirrel,
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
  },
  {
    slug: "bat-removal",
    fromPrice: "$349",
    title: "Bat Removal & Exclusion",
    image: bat,
    summary: "Humane bat exclusion from attics and belfries with one-way doors.",
    description: "Bats in the attic mean noise, odor, and guano buildup — and they're federally protected, so removal has to be done right. We install one-way exclusion doors that let bats leave safely but never return, then seal every entry point.",
    features: ["Attic and roost inspection",
    "Humane one-way exclusion doors",
    "Entry-point sealing",
    "Guano cleanup guidance"],
  },
  {
    slug: "dead-animal-removal",
    fromPrice: "$189",
    title: "Dead Animal Removal",
    image: inspection,
    summary: "Locate and remove dead animals from walls, attics, and crawl spaces.",
    description: "That awful smell has a source — and we find it fast. We locate dead animals trapped in walls, attics, and crawl spaces, remove them discreetly, and treat the area so the odor doesn't linger.",
    features: ["Odor source location",
    "Discreet removal",
    "Sanitization treatment",
    "Entry-point check to prevent repeats"],
  },
  {
    slug: "attic-cleanup",
    fromPrice: "$499",
    title: "Attic Cleanup & Sanitization",
    image: atticCleanup,
    summary: "Remove soiled insulation, sanitize, and re-insulate after wildlife intrusion.",
    description: "After raccoons, bats, or rats move out, their mess stays behind — contaminated insulation, droppings, and odor. We strip out the soiled insulation, sanitize every surface, and blow in fresh insulation so your attic is clean and efficient again.",
    features: ["Soiled insulation removal",
    "Full attic sanitization",
    "Fresh insulation install",
    "Odor neutralization"],
  },
  {
    slug: "snake-removal",
    fromPrice: "$199",
    title: "Snake Removal",
    image: snake,
    summary: "Safe snake capture and relocation, plus a yard inspection.",
    description: "A snake in the yard or garage is stressful — especially in Florida. We capture and relocate snakes safely, identify how they got in, and inspect your property for the rodents and hiding spots that attract them.",
    features: ["Safe capture and relocation",
    "Venomous-snake safety protocol",
    "Yard and perimeter inspection",
    "Habitat and food-source reduction"],
  },
] as const;

export type Service = (typeof services)[number];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
