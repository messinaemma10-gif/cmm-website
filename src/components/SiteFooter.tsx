import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer id="service-area" className="border-t-2 border-black bg-black text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl tracking-wide text-white">CMM CONTRACTING SOLUTIONS</p>
          <p className="mt-3 max-w-xs text-sm text-white/70">
            Built on construction and hospitality. Two trades, one standard,
            based in Hudson, Ohio.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-oak">
            Service Area
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Hudson, Ohio &amp; the greater Northeast Ohio / Akron area
          </p>
        </div>

        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-oak">
            Get in Touch
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <Link href="/book" className="transition hover:text-oak">
                Request a free consultation →
              </Link>
            </li>
            <li>
              <a href="tel:+12165700919" className="transition hover:text-oak">
                (216) 570-0919
              </a>
            </li>
            <li>
              <a href="mailto:cmamula@icloud.com" className="transition hover:text-oak">
                cmamula@icloud.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center font-mono text-xs uppercase tracking-widest text-white/40">
        © {new Date().getFullYear()} CMM Contracting Solutions. All rights reserved.
      </div>
    </footer>
  );
}
