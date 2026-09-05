import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import StarRating from "@/components/StarRating";
import { REVIEWS, REVIEW_SUMMARY } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Reviews | CMM Contracting Solutions",
  description:
    "Read verified customer reviews for CMM Contracting Solutions in Hudson, Ohio, rated 5.0 stars on Angi.",
};

export default function ReviewsPage() {
  return (
    <div>
      <section className="border-b-2 border-black bg-sand">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
          <ScrollReveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-wine">
              Customer Reviews
            </p>
            <h1 className="mt-3 font-display text-5xl tracking-wide text-black md:text-6xl">
              WHAT PEOPLE SAY
            </h1>
            <div className="mt-6 flex items-center justify-center gap-3">
              <StarRating rating={REVIEW_SUMMARY.average} className="text-2xl" />
              <span className="font-display text-2xl tracking-wide text-black">
                {REVIEW_SUMMARY.average.toFixed(1)}
              </span>
              <span className="text-black/60">
                ({REVIEW_SUMMARY.count} reviews on {REVIEW_SUMMARY.source})
              </span>
            </div>
            <a
              href={REVIEW_SUMMARY.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-mono text-xs font-semibold uppercase tracking-widest text-wine hover:text-wine-dark"
            >
              View Original Reviews on Angi ↗
            </a>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {REVIEWS.map((review, i) => (
            <ScrollReveal key={`${review.name}-${review.date}`} delay={(i % 4) * 0.06}>
              <div className="flex h-full flex-col border-2 border-black bg-white p-6">
                <div className="flex items-center justify-between">
                  <StarRating rating={review.rating} />
                  <span className="font-mono text-xs uppercase tracking-widest text-black/50">
                    {review.date}
                  </span>
                </div>
                <p className="mt-4 flex-1 leading-relaxed text-black/80">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-3">
                  <p className="font-display text-lg tracking-wide text-black">{review.name}</p>
                  {review.service && (
                    <span className="font-mono text-xs font-semibold uppercase tracking-widest text-wine">
                      {review.service}
                    </span>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-y-2 border-black bg-black">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl tracking-wide text-white">
              READY TO BE OUR NEXT 5-STAR REVIEW?
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
