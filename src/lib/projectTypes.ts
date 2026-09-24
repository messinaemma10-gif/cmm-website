export type ProjectType = {
  id: string;
  label: string;
  description: string;
  durationMinutes: number;
};

// Duration drives how much time gets blocked on the calendar for the
// consultation. Conner can tune these once he sees how estimates actually run.
export const PROJECT_TYPES: ProjectType[] = [
  {
    id: "design",
    label: "Design",
    description: "Planning and layout before construction starts.",
    durationMinutes: 45,
  },
  {
    id: "remodel",
    label: "Remodel",
    description: "Kitchen, bath, or another existing space.",
    durationMinutes: 60,
  },
  {
    id: "repair",
    label: "Repair",
    description: "A specific fix, not a full remodel.",
    durationMinutes: 30,
  },
  {
    id: "renovation",
    label: "Renovation",
    description: "Updating a room or the whole house.",
    durationMinutes: 60,
  },
];

export const BUDGET_RANGES = [
  "Under $10k",
  "$10k to $25k",
  "$25k to $75k",
  "$75k to $150k",
  "$150k+",
  "Not sure yet",
];
