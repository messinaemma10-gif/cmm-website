import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services We Offer | CMM Contracting Solutions",
  description:
    "Remodels, additions, new builds, and repairs from CMM Contracting Solutions in Hudson, Ohio.",
};

export default function ServicesPage() {
  return (
    <div>
      <section className="border-b-2 border-black bg-sand">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
          <ScrollReveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-wine">
              What We Do
            </p>
            <h1 className="mt-3 font-display text-5xl tracking-wide text-black md:text-6xl">
              SERVICES
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-black/75">
              Every project starts with a real conversation, not a sales
              pitch. Here&apos;s what we take on.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <div className="h-full border-2 border-black bg-white p-6 transition hover:-translate-y-1 hover:shadow-[4px_4px_0_#4a2934]">
                <p className="font-display text-2xl tracking-wide text-black">
                  {service.title}
                </p>
                <p className="mt-2 text-sm font-semibold text-wine">
                  {service.description}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-black/70">
                  {service.details}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/book"
            className="inline-block border-2 border-black bg-wine px-8 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-white shadow-[4px_4px_0_#0d0a0a] transition hover:bg-wine-dark hover:shadow-[2px_2px_0_#0d0a0a]"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
