"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/book", label: "Booking" },
  { href: "/services", label: "Services We Offer" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About Us" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-black bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
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

        <div className="flex items-center gap-3">
          <Link
            href="/book"
            className="hidden border-2 border-black bg-wine px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-widest text-white shadow-[3px_3px_0_#0d0a0a] transition hover:bg-wine-dark hover:shadow-[1px_1px_0_#0d0a0a] sm:inline-block"
          >
            Request a Quote
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border-2 border-black bg-white md:hidden"
          >
            <span
              className={`block h-0.5 w-5 bg-black transition-transform ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-black transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-black transition-transform ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t-2 border-black bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-black/10 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-black/80 transition hover:text-wine"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setMenuOpen(false)}
              className="mt-4 border-2 border-black bg-wine px-5 py-3 text-center font-mono text-xs font-semibold uppercase tracking-widest text-white shadow-[3px_3px_0_#0d0a0a]"
            >
              Request a Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
