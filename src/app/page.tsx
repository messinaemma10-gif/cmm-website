import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Marquee from "@/components/Marquee";
import StripeDivider from "@/components/StripeDivider";
import { SERVICES } from "@/lib/services";

const TRUST_POINTS = [
  { label: "Family-Owned & Operated", detail: "Two generations of building and hosting." },
  { label: "15+ Years in Northeast Ohio", detail: "CMM's crew has worked this trade for over a decade and a half." },
  { label: "Real Availability, Real-Time", detail: "Request a consultation straight off our real schedule." },
  { label: "Hudson, OH Based", detail: "Serving Hudson and the greater Akron area." },
];

export default function Home() {
  return (
    <div>
      <section className="border-b-2 border-black bg-sand">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-wine">
              Family Owned in Hudson, Ohio
            </p>
            <h1 className="mt-3 font-display text-5xl leading-[0.95] tracking-wide text-black md:text-6xl">
              THOUGHTFULLY BUILT.
              <br />
              DEEPLY LIVED.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-black/75">
              CMM Contracting Solutions brings together two family trades:
              construction and hospitality. Every space we build is made
              with the same care, meant to be lived in fully, not just
              admired.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/book"
                className="border-2 border-black bg-wine px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-white shadow-[4px_4px_0_#0d0a0a] transition hover:bg-wine-dark hover:shadow-[2px_2px_0_#0d0a0a]"
              >
                Request a Quote
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-black px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-black transition hover:bg-black hover:text-white"
              >
                See Our Work
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border-2 border-black">
            <Image
              src="/images/home/hero-mancave-bw.jpg"
              alt="A custom basement bar built by CMM Contracting Solutions"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <Marquee text="NOW BOOKING CONSULTATIONS · SERVING HUDSON & NORTHEAST OHIO · DESIGN · REMODELS · REPAIRS · RENOVATIONS" />

      <section className="border-b-2 border-black bg-cool">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-2 md:grid-cols-4">
          {TRUST_POINTS.map((point, i) => (
            <ScrollReveal key={point.label} delay={i * 0.08}>
              <p className="font-display text-lg tracking-wide text-black">{point.label}</p>
              <p className="mt-1 text-sm text-black/70">{point.detail}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <ScrollReveal className="md:order-2">
          <div className="relative aspect-[7/5] overflow-hidden border-2 border-black">
            <Image
              src="/images/home/conner-tower-bw.jpg"
              alt="Conner Mamula on a job site"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal className="md:order-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-wine">
            The Guy Behind CMM
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-black">
            CRAFTSMANSHIP MEETS HOSPITALITY
          </h2>
          <p className="mt-4 leading-relaxed text-black/75">
            CMM is run by Conner Mamula, shaped by two very different
            influences: almost 15 years in construction alongside his dad,
            and a mom with a career in hospitality who taught him how to
            make people feel taken care of. You get an honest answer, a
            fair price, and a timeline he actually sticks to, from someone
            you&apos;re comfortable having in your house.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block font-mono text-sm font-semibold uppercase tracking-widest text-wine hover:text-wine-dark"
          >
            Meet Conner →
          </Link>
        </ScrollReveal>
      </section>

      <StripeDivider />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <ScrollReveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-wine">
            What We Do
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-black">SERVICES</h2>
        </ScrollReveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <div className="h-full border-2 border-black bg-white p-6 transition hover:-translate-y-1 hover:shadow-[4px_4px_0_#4a2934]">
                <p className="font-display text-2xl tracking-wide text-black">
                  {service.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-black/70">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/services"
            className="font-mono text-sm font-semibold uppercase tracking-widest text-wine hover:text-wine-dark"
          >
            See All Services →
          </Link>
        </div>
      </section>

      <section className="border-y-2 border-black bg-black">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <ScrollReveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-oak">
              Free Consultation
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-wide text-white md:text-5xl">
              REQUEST A QUOTE
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/70">
              Tell us about your project and pick a time that works. It syncs
              straight to our real schedule.
            </p>
            <Link
              href="/book"
              className="mt-8 inline-block border-2 border-white bg-wine px-8 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-white shadow-[4px_4px_0_#e5dbcb] transition hover:bg-wine-dark hover:shadow-[2px_2px_0_#e5dbcb]"
            >
              Request a Quote
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
