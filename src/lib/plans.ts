export const plans = [
  {
    slug: "one-time-service",
    name: "One Time Service",
    blurb: "Ideal for a specific wildlife problem that needs professional attention.",
    price: "$45.00",
    bullets: ["Targeted animal removal", "Professional inspection", "Service recommendations", "Follow-up guidance"],
    cta: "Choose One Time Service",
    featured: false,
  },
  {
    slug: "recurring-protection",
    name: "Year-Round Protection",
    blurb: "Ongoing wildlife prevention designed to keep animals out all year long.",
    price: "$99.00",
    bullets: ["Scheduled prevention visits", "Entry-point monitoring", "Routine inspections", "Priority service options"],
    cta: "Choose Year-Round Protection",
    featured: true,
  },
  {
    slug: "inspection-estimate",
    name: "Inspection & Estimate",
    blurb: "Start with an inspection and get a clear recommendation for your property.",
    price: "$45.00",
    bullets: ["Property inspection", "Animal identification", "Removal recommendations", "Clear estimate"],
    cta: "Request Inspection",
    featured: false,
  },
] as const;

export function getPlan(slug: string) {
  return plans.find((plan) => plan.slug === slug);
}
