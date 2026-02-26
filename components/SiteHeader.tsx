// components/SiteHeader.tsx
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          IEB – Industrieelektronik Bonk
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link href="/leistungen" className="hover:underline">
            Leistungen
          </Link>
          <Link href="/service-ablauf" className="hover:underline">
            Service-Ablauf
          </Link>
          <Link href="/industrieelektronik-reparatur-brandenburg" className="hover:underline">
            Brandenburg
          </Link>
          <Link href="/faq" className="hover:underline">
            FAQ
          </Link>
          <Link href="/kontakt" className="hover:underline">
            Kontakt
          </Link>
          <Link
            href="/anfrage"
            className="rounded-xl bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800"
          >
            Anfrage
          </Link>
        </nav>

        {/* Mobile: erstmal nur Button, kein Menü => Layout bleibt safe */}
        <Link
          href="/anfrage"
          className="md:hidden rounded-xl bg-neutral-900 px-4 py-2 text-sm text-white"
        >
          Anfrage
        </Link>
      </div>
    </header>
  );
}