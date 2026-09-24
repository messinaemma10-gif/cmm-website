export type Service = {
  title: string;
  description: string;
  details: string;
};

export const SERVICES: Service[] = [
  {
    title: "Design",
    description: "Planning and layout work before a single wall comes down.",
    details:
      "From material selection to floor plans, we help you land on a design you're confident in before construction starts.",
  },
  {
    title: "Remodels",
    description: "Kitchens, baths, and living spaces reworked for how you actually live.",
    details:
      "From a single-room refresh to a full gut remodel, we work around your home and your schedule instead of the other way around.",
  },
  {
    title: "Repairs",
    description: "Straightforward fixes, no upsell, no runaround.",
    details:
      "Not every job needs a full remodel. If something's broken, we'll tell you honestly what it needs and fix it.",
  },
  {
    title: "Renovations",
    description: "Bringing older spaces up to date without losing their character.",
    details:
      "Whole-room and whole-house renovations that update the systems and finishes while keeping what made the space worth renovating in the first place.",
  },
];
