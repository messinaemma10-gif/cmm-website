export type Service = {
  title: string;
  description: string;
  details: string;
};

export const SERVICES: Service[] = [
  {
    title: "Remodels",
    description: "Kitchens, baths, and living spaces reworked for how you actually live.",
    details:
      "From a single-room refresh to a full gut remodel, we work around your home and your schedule instead of the other way around.",
  },
  {
    title: "Additions",
    description: "More room, built to match the bones of your home instead of bolted on.",
    details:
      "New rooms, second stories, and expansions designed to look like they were always part of the house.",
  },
  {
    title: "New Builds",
    description: "Ground-up construction with the same care as a 100-year-old farmhouse.",
    details:
      "Full custom builds in Hudson and across Northeast Ohio, managed start to finish by a crew that treats every site like it's their own.",
  },
  {
    title: "Repairs",
    description: "Straightforward fixes, no upsell, no runaround.",
    details:
      "Not every job needs a full remodel. If something's broken, we'll tell you honestly what it needs and fix it.",
  },
];
