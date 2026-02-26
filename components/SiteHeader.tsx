// components/SiteHeader.tsx
import Link from "next/link";

const NAV = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/service-ablauf", label: "Ablauf" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
        {/* Brand */}
        <Link href="/" className="min-w-0">
          <div className="truncate text-base font-semibold tracking-tight">
            IEB – Industrieelektronik Bonk
          </div>
          <div className="truncate text-xs text-neutral-600">
            Reparatur elektronischer Baugruppen · Brandenburg
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {NAV.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-neutral-700 hover:text-neutral-900 hover:underline"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        {/* Single CTA */}
        <Link
          href="/anfrage"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
        >
          Anfrage
        </Link>
      </div>

      {/* Mobile: ruhige zweite Zeile statt kaputtem Burger */}
      <div className="border-t border-neutral-200 bg-neutral-50 md:hidden">
        <div className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto px-4 py-2 text-sm">
          {NAV.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="whitespace-nowrap rounded-lg px-3 py-1.5 text-neutral-700 hover:bg-white"
            >
              {i.label}
            </Link>
          ))}
          <Link
            href="/industrieelektronik-reparatur-brandenburg"
            className="whitespace-nowrap rounded-lg px-3 py-1.5 text-neutral-700 hover:bg-white"
          >
            Brandenburg
          </Link>
        </div>
      </div>
    </header>
  );
}