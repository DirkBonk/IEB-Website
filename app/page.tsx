// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "../components/PageShell";

export const metadata: Metadata = {
  title:
    "Industrieelektronik Reparatur Brandenburg | Baugruppen & Leiterplatten | IEB Bonk",
  description:
    "Reparatur elektronischer Baugruppen und Industrieelektronik in Brandenburg. Leiterplatten, Steuerungen, Leistungselektronik, Netzteile. Wirtschaftliche Instandsetzung statt Austausch.",
  alternates: { canonical: "https://www.ieb-bonk.de/" },
};

export default function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="max-w-3xl">
        <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700">
          Industrieelektronik · Baugruppenreparatur · Brandenburg
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight leading-tight">
          Industrieelektronik Reparatur in Brandenburg – Baugruppen, Leiterplatten
          & Steuerungselektronik
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          IEB – Industrieelektronik Bonk unterstützt Unternehmen bei der
          wirtschaftlichen Instandsetzung defekter Elektronik – statt
          kostenintensivem Austausch bei langen Lieferzeiten.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/anfrage"
            className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-6 py-3 text-white shadow-sm hover:bg-neutral-800"
          >
            Reparaturanfrage starten →
          </Link>

          <Link
            href="/leistungen"
            className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-neutral-900 shadow-sm hover:bg-neutral-50"
          >
            Leistungen ansehen
          </Link>
        </div>

        <p className="mt-5 text-sm text-neutral-700">
          Regionale Infos:{" "}
          <Link
            className="underline font-medium"
            href="/industrieelektronik-reparatur-brandenburg"
          >
            Industrieelektronik Reparatur Brandenburg →
          </Link>
        </p>
      </section>

      {/* VORTEILE */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Warum Reparatur statt Austausch?</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Kosten sparen",
              text: "Reparatur ist häufig deutlich günstiger als Neubeschaffung – besonders bei Industrie- und Spezialelektronik.",
            },
            {
              title: "Stillstand reduzieren",
              text: "Schnelle Diagnose und Reparatur helfen, Produktionsausfälle zu minimieren.",
            },
            {
              title: "Lieferzeiten umgehen",
              text: "Bei langen Lieferzeiten für Ersatzgeräte ist die Instandsetzung oft die wirtschaftlichere Lösung.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EINSATZBEREICHE */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Typische Einsatzbereiche</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            "Maschinenbau",
            "Automatisierungstechnik",
            "Instandhaltung & Produktion",
            "Energie- & Umwelttechnik",
            "Spezial- & Steuerungselektronik",
            "EMS-Dienstleister",
          ].map((area) => (
            <div
              key={area}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-4"
            >
              {area}
            </div>
          ))}
        </div>
      </section>

      {/* SEO ABSCHNITT */}
      <section className="mt-16 max-w-4xl">
        <h2 className="text-2xl font-semibold">
          Spezialist für Baugruppen- und Leiterplattenreparatur
        </h2>

        <p className="mt-4 leading-relaxed text-neutral-700">
          IEB – Industrieelektronik Bonk ist spezialisiert auf die Reparatur
          elektronischer Baugruppen, Leiterplatten (PCB) und Industrieelektronik
          in Brandenburg. Dazu gehören unter anderem Steuerungen,
          Leistungselektronik, Netzteile, Antriebselektronik und Sonderbaugruppen.
        </p>

        <p className="mt-4 leading-relaxed text-neutral-700">
          Statt kostspieliger Neubeschaffung oder langen Lieferzeiten bietet die
          fachgerechte Instandsetzung eine wirtschaftliche Alternative. Ziel ist
          die schnelle Wiederinbetriebnahme bei gleichzeitiger Kostenkontrolle.
        </p>

        <p className="mt-4 leading-relaxed text-neutral-700">
          Auch bei nicht mehr verfügbaren Ersatzteilen (Obsoleszenz) prüfen wir
          mögliche Lösungen auf Bauteilebene.
        </p>

        <p className="mt-4 text-neutral-700">
          Mehr dazu:{" "}
          <Link
            className="underline font-medium"
            href="/industrieelektronik-reparatur-brandenburg"
          >
            Industrieelektronik Reparatur Brandenburg →
          </Link>
        </p>
      </section>

      {/* ABLAUF TEASER */}
      <section className="mt-16 rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
        <h2 className="text-2xl font-semibold">So läuft es ab</h2>
        <p className="mt-4 leading-relaxed text-neutral-700">
          Anfrage → Diagnose → Freigabe → Reparatur → Prüfung → dokumentierte
          Rücklieferung.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/service-ablauf"
            className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-neutral-900 shadow-sm hover:bg-neutral-100"
          >
            Ablauf im Detail →
          </Link>
          <Link
            href="/faq"
            className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-neutral-900 shadow-sm hover:bg-neutral-100"
          >
            FAQ →
          </Link>
        </div>
      </section>

      {/* ABSCHLUSS CTA */}
      <section className="mt-16 rounded-2xl border border-neutral-200 bg-neutral-900 p-10 text-white">
        <h2 className="text-2xl font-semibold">
          Defekte Baugruppe? Jetzt prüfen lassen.
        </h2>
        <p className="mt-4 max-w-3xl text-white/90 leading-relaxed">
          Senden Sie Baugruppenbezeichnung, Fehlerbeschreibung und Dringlichkeit.
          Sie erhalten eine Ticketnummer und eine Bestätigung per E-Mail.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/anfrage"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-medium text-neutral-900 hover:bg-neutral-100"
          >
            Reparaturanfrage starten →
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-transparent px-6 py-3 text-white hover:bg-white/10"
          >
            Kontakt
          </Link>
        </div>
      </section>
    </PageShell>
  );
}