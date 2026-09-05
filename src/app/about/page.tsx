import Link from "next/link";
import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us | CMM Contracting Solutions",
  description:
    "The family behind CMM Contracting Solutions, built on construction and hospitality and based in Hudson, Ohio.",
};

export default function About() {
  return (
    <div>
      <section className="border-b-2 border-black bg-sand">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
          <ScrollReveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-wine">
              About Us
            </p>
            <h1 className="mt-3 font-display text-5xl tracking-wide text-black md:text-6xl">
              BUILT ON TWO KINDS OF CARE
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-black/75">
              CMM Contracting Solutions is based in Hudson, Ohio. Everything
              about how we work traces back to two family businesses, and
              two very different kinds of care.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <ScrollReveal>
          <PlaceholderImage
            label="Photo of Conner Mamula, Founder"
            className="aspect-[4/3]"
          />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-wine">
            The Founder
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-wide text-black">
            CONNER MAMULA
          </h2>
          <p className="mt-4 leading-relaxed text-black/75">
            CMM Contracting Solutions is run by Conner Mamula out of Hudson,
            Ohio. Conner spent almost 15 years working construction
            alongside his father before starting CMM, but the way he runs a
            job site was shaped by two people, not one.
          </p>
        </ScrollReveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <ScrollReveal className="md:order-2">
          <PlaceholderImage
            label="Photo of Conner's father on the job site"
            className="aspect-[4/3]"
          />
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="md:order-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-wine">
            The Builder
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-wide text-black">HIS FATHER</h2>
          <p className="mt-4 leading-relaxed text-black/75">
            Conner learned the trade from his father, who built and ran a
            large-scale construction company. Almost 15 years on real job
            sites, under someone who cared about doing it right. That&apos;s
            the standard CMM still holds every project to.
          </p>
        </ScrollReveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <ScrollReveal>
          <PlaceholderImage
            label="Photo of Conner's mother at the bed and breakfast"
            className="aspect-[4/3]"
          />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-wine">
            The Host
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-wide text-black">HIS MOTHER</h2>
          <p className="mt-4 leading-relaxed text-black/75">
            Conner also grew up around his mother&apos;s bed &amp;
            breakfast, a business built entirely on making people feel
            taken care of the moment they walked in. The warmth behind CMM
            isn&apos;t a brand decision. It&apos;s how the family business
            was always run.
          </p>
        </ScrollReveal>
      </section>

      <section className="border-y-2 border-black bg-black">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl tracking-wide text-white">
              WHAT WE BUILD ON
            </h2>
            <p className="mt-4 leading-relaxed text-white/70">
              Solid craftsmanship, and the same warmth you&apos;d expect
              walking into a family-run bed &amp; breakfast. You should feel
              safe having CMM in your home before we ever pick up a tool.
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
