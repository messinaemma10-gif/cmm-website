export type PortfolioStage = "before" | "during" | "after";

export type PortfolioPhoto = {
  src: string;
  stage: PortfolioStage;
  alt: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  location: string;
  summary: string;
  cover: string;
  photos: PortfolioPhoto[];
};

function photos(
  slug: string,
  entries: { name: string; stage: PortfolioStage }[],
  altBase: string
): PortfolioPhoto[] {
  return entries.map(({ name, stage }) => ({
    src: `/images/portfolio/${slug}/${name}.jpg`,
    stage,
    alt: `${altBase} — ${stage}`,
  }));
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: "cuyahoga-falls-bathroom-remodel",
    title: "Cuyahoga Falls Bathroom Remodel",
    category: "Bathroom Remodel",
    location: "Cuyahoga Falls, OH",
    summary:
      "A full shower gut and rebuild — tiled surround, glass door, and black fixtures throughout.",
    cover: "/images/portfolio/cuyahoga-falls-bathroom-remodel/after-1.jpg",
    photos: photos(
      "cuyahoga-falls-bathroom-remodel",
      [
        { name: "during-1", stage: "during" },
        { name: "during-2", stage: "during" },
        { name: "during-3", stage: "during" },
        { name: "after-1", stage: "after" },
        { name: "after-2", stage: "after" },
        { name: "after-3", stage: "after" },
        { name: "after-4", stage: "after" },
      ],
      "Cuyahoga Falls bathroom remodel"
    ),
  },
  {
    slug: "custom-basement-bar-lounge",
    title: "Custom Basement Bar & Lounge",
    category: "Basement Remodel",
    location: "Northeast Ohio",
    summary:
      "An unfinished basement turned into a full lounge — stone-front wet bar, cedar plank walls, and a vault door.",
    cover: "/images/portfolio/custom-basement-bar-lounge/after-1.jpg",
    photos: photos(
      "custom-basement-bar-lounge",
      [
        { name: "during-1", stage: "during" },
        { name: "during-2", stage: "during" },
        { name: "after-1", stage: "after" },
        { name: "after-2", stage: "after" },
        { name: "after-3", stage: "after" },
        { name: "after-4", stage: "after" },
      ],
      "Custom basement bar and lounge"
    ),
  },
  {
    slug: "kitchen-range-hood-backsplash",
    title: "Kitchen Range Hood & Backsplash",
    category: "Kitchen Remodel",
    location: "Northeast Ohio",
    summary:
      "A custom wood range hood and full tile backsplash refresh, built around the existing cabinetry.",
    cover: "/images/portfolio/kitchen-range-hood-backsplash/after-1.jpg",
    photos: photos(
      "kitchen-range-hood-backsplash",
      [
        { name: "before-1", stage: "before" },
        { name: "before-2", stage: "before" },
        { name: "during-1", stage: "during" },
        { name: "during-2", stage: "during" },
        { name: "after-1", stage: "after" },
        { name: "after-2", stage: "after" },
        { name: "after-3", stage: "after" },
      ],
      "Kitchen range hood and backsplash remodel"
    ),
  },
  {
    slug: "metallic-epoxy-garage-floor",
    title: "Metallic Epoxy Garage Floor",
    category: "Garage & Flooring",
    location: "Streetsboro, OH",
    summary:
      "A ground-down concrete floor finished in a marbled metallic epoxy, paired with a reclaimed-look plank accent wall.",
    cover: "/images/portfolio/metallic-epoxy-garage-floor/after-1.jpg",
    photos: photos(
      "metallic-epoxy-garage-floor",
      [
        { name: "during-1", stage: "during" },
        { name: "after-1", stage: "after" },
        { name: "after-2", stage: "after" },
        { name: "after-3", stage: "after" },
      ],
      "Metallic epoxy garage floor"
    ),
  },
  {
    slug: "twinsburg-master-bath-remodel",
    title: "Twinsburg Master Bath Remodel",
    category: "Bathroom Remodel",
    location: "Twinsburg, OH",
    summary:
      "A dated fiberglass shower stall gutted down to the studs and rebuilt with large-format marble-look tile and a rain shower.",
    cover: "/images/portfolio/twinsburg-master-bath-remodel/after-1.jpg",
    photos: photos(
      "twinsburg-master-bath-remodel",
      [
        { name: "before-1", stage: "before" },
        { name: "during-1", stage: "during" },
        { name: "during-2", stage: "during" },
        { name: "after-1", stage: "after" },
        { name: "after-2", stage: "after" },
      ],
      "Twinsburg master bath remodel"
    ),
  },
  {
    slug: "twinsburg-master-guest-bath-remodel",
    title: "Twinsburg Master & Guest Bath Remodel",
    category: "Bathroom Remodel",
    location: "Twinsburg, OH",
    summary:
      "Two full bathrooms gutted and rebuilt in the same project — a walk-in shower and soaking tub in one, a double vanity in the other.",
    cover: "/images/portfolio/twinsburg-master-guest-bath-remodel/after-1.jpg",
    photos: photos(
      "twinsburg-master-guest-bath-remodel",
      [
        { name: "during-1", stage: "during" },
        { name: "during-2", stage: "during" },
        { name: "after-1", stage: "after" },
        { name: "after-2", stage: "after" },
        { name: "after-3", stage: "after" },
        { name: "after-4", stage: "after" },
      ],
      "Twinsburg master and guest bath remodel"
    ),
  },
];
