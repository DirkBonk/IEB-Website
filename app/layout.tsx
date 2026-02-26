// app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ieb-bonk.de"),
  title: {
    default: "IEB – Industrieelektronik Bonk",
    template: "%s | IEB – Industrieelektronik Bonk",
  },
  description:
    "Reparatur elektronischer Baugruppen für Industrie & Maschinenbau. Fehlerdiagnose, SMD/THT-Rework, Express-Service – IEB Brandenburg.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-white text-neutral-900 antialiased">

        {/* ================= HEADER ================= */}
        <header className="border-b border-neutral-200">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            
            {/* Logo / Brand */}
            <Link href="/" className="text-lg font-semibold tracking-tight">
              IEB – Industrieelektronik Bonk
            </Link>

            {/* Navigation */}
            <nav className="hidden gap-6 text-sm md:flex">
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
          </div>
        </header>

        {/* ================= PAGE CONTENT ================= */}
        <main>{children}</main>

        {/* ================= FOOTER ================= */}
        <footer className="mt-20 border-t border-neutral-200 bg-neutral-50">
          <div className="mx-auto max-w-6xl px-4 py-12">

            <div className="grid gap-10 md:grid-cols-3">

              {/* Unternehmen */}
              <div>
                <div className="font-semibold">IEB – Industrieelektronik Bonk</div>
                <p className="mt-3 text-sm text-neutral-700">
                  Neugauler Str. 12<br />
                  16259 Oderaue
                </p>
                <p className="mt-2 text-sm text-neutral-700">
                  <a href="mailto:info@ieb-bonk.de" className="underline">
                    info@ieb-bonk.de
                  </a>
                  <br />
                  <a href="tel:+4915125855584" className="underline">
                    0151-25855584
                  </a>
                </p>
              </div>

              {/* Navigation */}
              <div>
                <div className="font-semibold">Navigation</div>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                  <li><Link href="/leistungen" className="underline">Leistungen</Link></li>
                  <li><Link href="/service-ablauf" className="underline">Service-Ablauf</Link></li>
                  <li><Link href="/industrieelektronik-reparatur-brandenburg" className="underline">Brandenburg</Link></li>
                  <li><Link href="/faq" className="underline font-medium">FAQ</Link></li>
                  <li><Link href="/kontakt" className="underline">Kontakt</Link></li>
                  <li><Link href="/anfrage" className="underline">Anfrage</Link></li>
                </ul>
              </div>

              {/* Rechtliches */}
              <div>
                <div className="font-semibold">Rechtliches</div>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                  <li><Link href="/impressum" className="underline">Impressum</Link></li>
                  <li><Link href="/datenschutz" className="underline">Datenschutz</Link></li>
                </ul>
              </div>

            </div>

            <div className="mt-10 border-t border-neutral-200 pt-6 text-xs text-neutral-500">
              © {new Date().getFullYear()} IEB – Industrieelektronik Bonk · Industrieelektronik Reparatur Brandenburg
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}