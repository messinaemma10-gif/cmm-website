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
    id: "repair",
    label: "Repair",
    description: "A specific fix — not a full remodel.",
    durationMinutes: 30,
  },
  {
    id: "remodel",
    label: "Remodel",
    description: "Kitchen, bath, or another existing space.",
    durationMinutes: 60,
  },
  {
    id: "addition",
    label: "Addition",
    description: "Adding square footage to an existing home.",
    durationMinutes: 60,
  },
  {
    id: "new-build",
    label: "New Build",
    description: "Ground-up new construction.",
    durationMinutes: 90,
  },
  {
    id: "other",
    label: "Something Else",
    description: "Not sure which category — let's talk it through.",
    durationMinutes: 45,
  },
];

export const BUDGET_RANGES = [
  "Under $10k",
  "$10k – $25k",
  "$25k – $75k",
  "$75k – $150k",
  "$150k+",
  "Not sure yet",
];
