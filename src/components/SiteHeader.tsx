import Link from "next/link";

const NAV_LINKS = [
  { href: "/book", label: "Booking" },
  { href: "/services", label: "Services We Offer" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About Us" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-black bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-3xl tracking-wide text-wine">CMM</span>
          <span className="hidden font-mono text-xs uppercase tracking-widest text-black/60 sm:block">
            Contracting Solutions
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs font-semibold uppercase tracking-widest text-black/70 transition hover:text-wine"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/book"
          className="rounded-none border-2 border-black bg-wine px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-widest text-white shadow-[3px_3px_0_#0d0a0a] transition hover:bg-wine-dark hover:shadow-[1px_1px_0_#0d0a0a]"
        >
          Request a Quote
        </Link>
      </div>
    </header>
  );
}
