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
    name: "Emma M.",
    date: "Sep 2026",
    rating: 5,
    service: "Kitchen Remodel",
    text: "Conner is the reason I felt confident buying a 1936 house. I've known Conner for over a decade and he's now my go-to contractor for everything on my new (old!) house in Kent. Buying a home built in 1936 is a lot. There are surprises around every corner and honestly, if I didn't have Conner in my corner, I don't think I would have felt comfortable making the purchase at all. He's always willing to come over and take on whatever job I throw at him, big or small. Most recently he sealed the old asbestos on my ductwork and he handled it carefully and professionally. I've been really pleased with every project he's done so far. There's truly no job Conner can't tackle. He's reliable, knowledgeable, and genuinely cares about doing things right. If you want someone you can trust with your home, CMM Contracting Solutions is the best in the business. Highly, highly recommend!",
  },
  {
    name: "Regina S.",
    date: "Sep 2026",
    rating: 5,
    service: "Kitchen Remodel",
    price: "$4,250",
    text: "Conner and his team were absolutely incredible! We had a super tight deadline with getting our house ready to sell and they did an awesome job with constant communication and were able to meet our deadline! We also added more to our list of things we needed done and they were super flexible and accommodating. Conner was very easy to talk to, super quick to respond and did great work! I will absolutely be hiring them again in the future! Some of the jobs they did included: paint the kitchen and living room, grout the kitchen backsplash, install kitchen cabinet hardware, texture the living room ceiling, and fix the framing of the front door (and of course a lot of little things around the house like patching holes and touching up paint as well).",
  },
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
