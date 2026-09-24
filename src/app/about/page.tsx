import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us | CMM Contracting Solutions",
  description:
    "Meet Conner Mamula, the founder of CMM Contracting Solutions in Hudson, Ohio, and the construction and hospitality background behind how he works.",
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
              almost 15 years learning the trade on real job sites. How he
              runs a job today still carries two very different influences:
              his dad&apos;s construction background, and his mom&apos;s eye
              for making a space, and the people in it, feel right.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="relative aspect-[3/4] overflow-hidden border-2 border-black">
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
          <div className="relative aspect-[4/3] overflow-hidden border-2 border-black">
            <Image
              src="/images/about/conner-dad-bw.jpg"
              alt="Conner Mamula with his dad, Ron, on a job site"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-wine">
            The Foundation
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-wide text-black">
            LEARNING FROM RON
          </h2>
          <p className="mt-4 leading-relaxed text-black/75">
            Conner&apos;s dad, Ron, spent his career in large-scale
            construction, and Conner grew up around it. He spent almost 15
            years on real job sites, working his way up before he ever
            started CMM. That&apos;s where the standard comes from: do it
            right the first time, or don&apos;t put your name on it.
          </p>
        </ScrollReveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <ScrollReveal className="md:order-2">
          <div className="relative aspect-[4/3] overflow-hidden border-2 border-black">
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
            Fifteen-plus years in the trade means he can tell you honestly
            what a job actually needs, and then go do it.
          </p>
        </ScrollReveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <ScrollReveal>
          <div className="relative aspect-[3/4] overflow-hidden border-2 border-black">
            <Image
              src="/images/about/conner-mom-color.jpg"
              alt="Conner Mamula with his mom"
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
            WHAT HE LEARNED FROM HIS MOM
          </h2>
          <p className="mt-4 leading-relaxed text-black/75">
            Conner&apos;s mom has an eye for design and ran her own bed &amp;
            breakfast, a business built on making every guest feel completely
            at home. That&apos;s where CMM&apos;s other half comes from: a
            job isn&apos;t finished until you&apos;d feel just as comfortable
            having Conner back in your house.
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
