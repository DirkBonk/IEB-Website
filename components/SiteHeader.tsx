// components/SiteHeader.tsx
import Link from "next/link";

const NAV = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/service-ablauf", label: "Ablauf" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/faq", label: "FAQ" },
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
        <nav className="hidden flex-1 items-center justify-center gap-6 text-sm md:flex">
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

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/kontakt"
            className="hidden rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-50 md:inline-flex"
          >
            Kontakt
          </Link>

          <Link
            href="/anfrage"
            className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Anfrage
          </Link>
        </div>
      </div>

      {/* Mobile: simple, clean secondary row */}
      <div className="border-t border-neutral-200 bg-neutral-50 md:hidden">
        <div className="mx-auto flex max-w-6xl items-center gap-4 overflow-x-auto px-4 py-2 text-sm">
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