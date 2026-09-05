import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio | CMM Contracting Solutions",
  description:
    "Recent remodels, additions, new builds, and repairs from CMM Contracting Solutions across Northeast Ohio.",
};

export default function PortfolioPage() {
  return (
    <div>
      <section className="border-b-2 border-black bg-sand">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
          <ScrollReveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-wine">
              Our Work
            </p>
            <h1 className="mt-3 font-display text-5xl tracking-wide text-black md:text-6xl">
              PORTFOLIO
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-black/75">
              A look at recent projects across Hudson and Northeast Ohio.
              Photos are being added as projects wrap.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <PortfolioGrid />

        <div className="mt-12 text-center">
          <Link
            href="/book"
            className="inline-block border-2 border-black bg-wine px-8 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-white shadow-[4px_4px_0_#0d0a0a] transition hover:bg-wine-dark hover:shadow-[2px_2px_0_#0d0a0a]"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
