import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { PORTFOLIO_PROJECTS, type PortfolioStage } from "@/lib/portfolio";

export function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | CMM Contracting Solutions`,
    description: project.summary,
  };
}

const STAGE_LABELS: Record<PortfolioStage, string> = {
  before: "Before",
  during: "During",
  after: "After",
};

export default async function PortfolioProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const stages: PortfolioStage[] = ["before", "during", "after"];

  return (
    <div>
      <section className="border-b-2 border-black bg-sand">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <Link
            href="/portfolio"
            className="font-mono text-xs font-semibold uppercase tracking-widest text-wine hover:text-wine-dark"
          >
            ← Back to Portfolio
          </Link>
          <ScrollReveal>
            <p className="mt-6 font-mono text-xs font-semibold uppercase tracking-widest text-wine">
              {project.category} in {project.location}
            </p>
            <h1 className="mt-3 font-display text-4xl tracking-wide text-black md:text-5xl">
              {project.title.toUpperCase()}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-black/75">
              {project.summary}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16">
        {stages.map((stage) => {
          const stagePhotos = project.photos.filter((p) => p.stage === stage);
          if (stagePhotos.length === 0) return null;
          return (
            <div key={stage} className="mb-14 last:mb-0">
              <ScrollReveal>
                <p className="font-mono text-xs font-semibold uppercase tracking-widest text-wine">
                  {STAGE_LABELS[stage]}
                </p>
              </ScrollReveal>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {stagePhotos.map((photo, i) => (
                  <ScrollReveal key={photo.src} delay={i * 0.05}>
                    <div className="relative aspect-[4/3] overflow-hidden border-2 border-black">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <section className="border-y-2 border-black bg-black">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl tracking-wide text-white">
              LIKE WHAT YOU SEE?
            </h2>
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
