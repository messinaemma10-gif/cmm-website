export type Review = {
  name: string;
  date: string;
  rating: number;
  service?: string;
  price?: string;
  text: string;
};

// Sourced from Angi (angi.com) — CMM Contracting Solutions, LLC, Hudson, OH.
// Update this list periodically as new reviews come in.
export const REVIEWS: Review[] = [
  {
    name: "Randy S.",
    date: "May 2026",
    rating: 5,
    text: "Absolutely thrilled with the basement remodel. Everything was completed on time and exactly as promised. I couldn't be happier with the results.",
  },
  {
    name: "Todd S.",
    date: "Feb 2026",
    rating: 5,
    service: "Bathroom Remodel",
    price: "$11,237",
    text: "Great job on time and on budget. Highly recommend utilizing this company.",
  },
  {
    name: "Anthony D.",
    date: "Nov 2025",
    rating: 5,
    service: "Bathroom Remodel",
    text: "CMM did an amazing job! I have a 25 yr old Ryan home so as you can imagine things were not done right originally. CMM was able to work around those challenges and deliver an outstanding install! I would highly recommend!",
  },
  {
    name: "Zak C.",
    date: "Apr 2025",
    rating: 5,
    service: "Bathroom Remodel",
    text: "Great experience overall. Attention to detail along with an honest and fair price. Very happy with the service.",
  },
  {
    name: "Mark C.",
    date: "Apr 2025",
    rating: 5,
    service: "Bathroom Remodel",
    price: "$16,500",
    text: "AOK, keep job clean and safe.",
  },
  {
    name: "Denise P.",
    date: "Mar 2025",
    rating: 5,
    service: "Bathroom Remodel",
    text: "Conner represented his company professionally and finished in a timely manner. He communicated the process thoroughly and paid attention to detail. I would highly recommend!",
  },
  {
    name: "Ron M.",
    date: "Mar 2025",
    rating: 5,
    service: "Bathroom Remodel",
    price: "$5,000",
    text: "Good job. No issues. On time and fun to have in our home.",
  },
  {
    name: "Robert K.",
    date: "Mar 2025",
    rating: 5,
    text: "One time on budge.",
  },
  {
    name: "Patrick S.",
    date: "Mar 2025",
    rating: 5,
    service: "Kitchen Remodel",
    text: "If you're looking for someone who is diligent, honest, hardworking, and timely, look no further than Conner. He showed up on time, ready to get to work, and didn't stop until the job was done right. His attention to detail is impressive, and he truly takes pride in his work — something that's hard to come by these days. What stood out most to me was Conner's integrity. He was upfront about everything, gave fair pricing, and followed through on every promise. No shortcuts, no surprises — just solid, dependable work. It's rare to find someone who combines skill with professionalism like Conner does. I highly recommend him to anyone needing reliable help. He's definitely earned my trust and repeat business!",
  },
  {
    name: "Connor J.",
    date: "Mar 2025",
    rating: 5,
    service: "Bathroom Remodel",
    text: "Absolutely spectacular job. He was professional in every way. He always came early and put in long days. He was very neat, cleaned up daily, and was respectful of our home. Highly recommend.",
  },
];

export const REVIEW_SUMMARY = {
  average: 5.0,
  count: REVIEWS.length,
  source: "Angi",
  sourceUrl:
    "https://www.angi.com/companylist/us/oh/hudson/conner-mamula-reviews-1.htm",
};
