import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us | CMM Contracting Solutions",
  description:
    "Meet Conner Mamula, the founder of CMM Contracting Solutions in Hudson, Ohio: honest pricing, real timelines, and a construction and hospitality background behind how he works.",
};

export default function About() {
  return (
    <div>
      <section className="border-b-2 border-black bg-sand">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <ScrollReveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-wine">
              Meet the Founder
            </p>
            <h1 className="mt-3 font-display text-5xl leading-[0.95] tracking-wide text-black md:text-6xl">
              CONNER MAMULA
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-black/75">
              Conner started CMM Contracting Solutions in Hudson, Ohio after
              almost 15 years learning the trade on real job sites. He grew
              up around two very different worlds, construction and
              hospitality, and built CMM around both: honest answers, fair
              pricing, and a timeline he actually sticks to.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="relative aspect-square overflow-hidden border-2 border-black">
              <Image
                src="/images/about/conner-portrait-bw.jpg"
                alt="Conner Mamula on a job site"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <ScrollReveal>
          <div className="relative aspect-[3/4] overflow-hidden border-2 border-black">
            <Image
              src="/images/about/conner-dad-bw.jpg"
              alt="Conner Mamula with his father on a job site"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-wine">
            Where He Started
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-wide text-black">
            FIFTEEN YEARS ON REAL JOB SITES
          </h2>
          <p className="mt-4 leading-relaxed text-black/75">
            Conner&apos;s father spent his career in large-scale
            construction, and Conner grew up around it. He worked his way up
            on real job sites for almost 15 years before he ever started
            CMM. That&apos;s where the standard comes from: do it right the
            first time, tell the customer the truth, and don&apos;t pad the
            bill.
          </p>
        </ScrollReveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <ScrollReveal className="md:order-2">
          <div className="relative aspect-[6/5] overflow-hidden border-2 border-black">
            <Image
              src="/images/about/conner-trowel-bw.jpg"
              alt="Conner Mamula finishing a concrete floor"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="md:order-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-wine">
            The Craft
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-wide text-black">
            HE STILL SWINGS THE HAMMER
          </h2>
          <p className="mt-4 leading-relaxed text-black/75">
            CMM isn&apos;t run from behind a desk. Conner is still on site,
            still finishing the floor, still checking the work himself.
            When he gives you a price and a timeline, it&apos;s because
            he&apos;s the one who has to hit it, and he will.
          </p>
        </ScrollReveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <ScrollReveal>
          <div className="relative aspect-[3/4] overflow-hidden border-2 border-black">
            <Image
              src="/images/about/conner-mom-color.jpg"
              alt="Conner Mamula with his mother"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-wine">
            The Hospitality
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-wide text-black">
            TREATED LIKE A GUEST, NOT A JOB NUMBER
          </h2>
          <p className="mt-4 leading-relaxed text-black/75">
            Conner&apos;s mother spent her career in hospitality, and it
            rubbed off. He treats every home like it matters, because to the
            people who live there, it does. Straight answers, no upsells,
            and a contractor who actually shows up when he says he will.
          </p>
        </ScrollReveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <ScrollReveal className="md:order-2">
          <div className="relative aspect-[3/4] overflow-hidden border-2 border-black">
            <Image
              src="/images/about/conner-puppies-color.jpg"
              alt="Conner Mamula with his dogs, Kali and Kiki"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="md:order-1">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-wine">
            Off the Clock
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-wide text-black">
            KALI, KIKI, AND EVERYTHING ELSE
          </h2>
          <p className="mt-4 leading-relaxed text-black/75">
            When Conner isn&apos;t on a job site, he&apos;s usually getting
            run around by his two goldendoodles, Kali and Kiki. His best
            friends, and a pretty good preview of how he treats everyone
            else too.
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
              Solid craftsmanship, honest pricing, and a timeline you can
              actually count on. You should feel comfortable having CMM in
              your home before we ever pick up a tool.
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
