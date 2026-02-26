// app/industrieelektronik-reparatur-brandenburg/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Industrieelektronik Reparatur Brandenburg | Baugruppen Service",
  description:
    "Professionelle Reparatur elektronischer Baugruppen in Brandenburg: Fehlerdiagnose, SMD/THT-Rework, Funktionsprüfung, Dokumentation und Express-Service – IEB Bonk in Oderaue.",
  alternates: {
    canonical: "https://www.ieb-bonk.de/industrieelektronik-reparatur-brandenburg",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Industrieelektronik Reparatur Brandenburg | IEB Bonk",
    description:
      "Reparatur elektronischer Baugruppen für Industrie & Maschinenbau in Brandenburg. Diagnose, Rework, Prüfung und Dokumentation – schnell & wirtschaftlich.",
    url: "https://www.ieb-bonk.de/industrieelektronik-reparatur-brandenburg",
    siteName: "IEB – Industrieelektronik Bonk",
    type: "website",
  },
};

const SITE = "https://www.ieb-bonk.de";

const TEASER_FAQ = [
  {
    q: "Wie lange dauert eine Reparatur?",
    a: "Das hängt vom Fehlerbild und der Ersatzteilverfügbarkeit ab. Für zeitkritische Fälle ist Express möglich.",
  },
  {
    q: "Lohnt sich Reparatur statt Austausch?",
    a: "Oft ja – besonders bei langen Lieferzeiten, hohen Neupreisen oder abgekündigten Baugruppen. Reparatur auf Bauteilebene kann Kosten und Stillstand reduzieren.",
  },
  {
    q: "Gibt es Funktionsprüfung & Dokumentation?",
    a: "Ja. Nach der Instandsetzung erfolgt – soweit sinnvoll möglich – eine Funktionsprüfung. Sie erhalten außerdem eine Dokumentation der Maßnahmen/Ergebnisse.",
  },
];

function FaqTeaserSection() {
  return (
    <section className="mt-14 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Häufige Fragen</h2>
          <p className="mt-2 text-neutral-700">
            Kurz beantwortet – alle Details finden Sie in unseren{" "}
            <Link className="underline font-medium" href="/faq">
              FAQ
            </Link>
            .
          </p>
        </div>
        <Link
          href="/faq"
          className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2.5 text-white shadow-sm hover:bg-neutral-800"
        >
          Zu allen FAQ →
        </Link>
      </div>

      <div className="mt-6 space-y-3">
        {TEASER_FAQ.map((item, idx) => (
          <details
            key={idx}
            className="group rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
          >
            <summary className="cursor-pointer list-none font-medium">
              <span className="flex items-start justify-between gap-4">
                <span>{item.q}</span>
                <span className="select-none text-neutral-400 transition-transform group-open:rotate-180">
                  ▼
                </span>
              </span>
            </summary>
            <div className="mt-3 leading-relaxed text-neutral-700">
              {item.a}{" "}
              <Link className="underline" href="/faq">
                Mehr in den FAQ
              </Link>
              .
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

export default function BrandenburgLandingPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      {/* Breadcrumb structured data */}
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", url: `${SITE}/` },
          {
            name: "Industrieelektronik Reparatur Brandenburg",
            url: `${SITE}/industrieelektronik-reparatur-brandenburg`,
          },
        ]}
      />

      {/* HERO */}
      <header className="mb-10">
        <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700">
          Standort: Oderaue · Service für Brandenburg & Berlin
        </div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          Industrieelektronik Reparatur in Brandenburg
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-700">
          Wir reparieren elektronische Baugruppen für Industrie, Maschinenbau und
          Automatisierung: Fehlerdiagnose auf Bauteilebene, SMD/THT-Rework,
          Funktionsprüfung und Dokumentation – wirtschaftlich statt Neukauf.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/anfrage"
            className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-6 py-3 text-white shadow-sm hover:bg-neutral-800"
          >
            Reparaturanfrage starten →
          </Link>
          <Link
            href="/service-ablauf"
            className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-neutral-900 shadow-sm hover:bg-neutral-50"
          >
            Service-Ablauf ansehen
          </Link>
        </div>
      </header>

      {/* WHY */}
      <section className="mt-10 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">Warum reparieren statt ersetzen?</h2>
        <p className="mt-3 leading-relaxed text-neutral-700">
          Häufig sind nicht ganze Systeme defekt, sondern einzelne Bauteile oder
          Lötstellen. Eine Reparatur auf Bauteilebene kann Kosten senken,
          Lieferzeiten umgehen und Stillstand reduzieren – besonders bei
          abgekündigten Baugruppen oder langen Ersatzteilfristen.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-neutral-700">
          <li className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
            ✅ Wirtschaftlich statt Neukauf
          </li>
          <li className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
            ✅ Kürzere Ausfallzeiten möglich
          </li>
          <li className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
            ✅ Nachhaltig (weniger Elektroschrott)
          </li>
          <li className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
            ✅ Transparente Dokumentation
          </li>
        </ul>
      </section>

      {/* SERVICES */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Leistungen für Baugruppen-Reparatur</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              t: "Fehlerdiagnose auf Bauteilebene",
              d: "Systematische Analyse von Leiterplatten und Baugruppen, um das Fehlerbild präzise einzugrenzen.",
            },
            {
              t: "SMD- & THT-Reparatur",
              d: "Bauteiltausch und Nacharbeit auch bei feinen Strukturen – abhängig vom Aufbau der Baugruppe.",
            },
            {
              t: "Rework (z. B. QFN / Fine Pitch)",
              d: "Professionelles Rework mit passender Prozessführung und sorgfältiger Nachkontrolle.",
            },
            {
              t: "Funktionsprüfung & Dokumentation",
              d: "Nach der Instandsetzung erfolgt – soweit sinnvoll möglich – eine Funktionsprüfung inklusive Dokumentation.",
            },
            {
              t: "Express-Option",
              d: "Für zeitkritische Fälle priorisieren wir Diagnose und Bearbeitung nach Abstimmung.",
            },
            {
              t: "Kleinserien-Refurbishment",
              d: "Aufbereitung kleiner Serien, Austausch typischer Schwachstellen und präventive Instandsetzung.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h3 className="font-semibold">{c.t}</h3>
              <p className="mt-2 leading-relaxed text-neutral-700">{c.d}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-neutral-700">
          Mehr Details finden Sie auf{" "}
          <Link className="underline font-medium" href="/leistungen">
            Leistungen
          </Link>{" "}
          und im{" "}
          <Link className="underline font-medium" href="/service-ablauf">
            Service-Ablauf
          </Link>
          .
        </p>
      </section>

      {/* INDUSTRIES */}
      <section className="mt-14 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
        <h2 className="text-2xl font-semibold">Für welche Branchen in Brandenburg?</h2>
        <p className="mt-3 leading-relaxed text-neutral-700">
          Wir unterstützen Instandhaltung und Technikteams, wenn Baugruppen in
          Produktionsanlagen oder Maschinen ausfallen – insbesondere in
          industriellen Umgebungen mit hoher Verfügbarkeitserwartung.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-neutral-700">
          {[
            "Maschinenbau & Anlagenbau",
            "Automatisierungstechnik",
            "Energie- & Umwelttechnik",
            "Instandhaltungsbetriebe",
            "EMS-Dienstleister",
            "Spezialanlagen / Sondermaschinen",
          ].map((x) => (
            <li key={x} className="rounded-xl border border-neutral-200 bg-white p-4">
              • {x}
            </li>
          ))}
        </ul>
      </section>

      {/* REGION */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Regionaler Service – Brandenburg & Berlin</h2>
        <p className="mt-3 leading-relaxed text-neutral-700">
          Durch unseren Standort in Oderaue sind wir gut erreichbar für Unternehmen in
          Brandenburg und Berlin. Die Abwicklung erfolgt meist per Versand; auf Wunsch
          stimmen wir individuelle Übergaben oder Terminabsprachen ab.
        </p>

        <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="font-semibold">Typische Regionen</h3>
          <p className="mt-2 text-neutral-700">
            Märkisch-Oderland · Frankfurt (Oder) · Eberswalde · Potsdam · Cottbus · Berlin
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mt-14 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">Ablauf</h2>
        <ol className="mt-4 grid gap-3 sm:grid-cols-2 text-neutral-700">
          {[
            "Reparaturanfrage über das Online-Formular",
            "Prüfung & Erstbewertung",
            "Fehlerdiagnose",
            "Reparatur / Bauteiltausch / Rework",
            "Funktionsprüfung",
            "Rückversand inkl. Dokumentation",
          ].map((step, i) => (
            <li key={step} className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
              <span className="font-semibold">{i + 1}.</span> {step}
            </li>
          ))}
        </ol>

        <p className="mt-6 text-neutral-700">
          Details finden Sie im{" "}
          <Link className="underline font-medium" href="/service-ablauf">
            Service-Ablauf
          </Link>
          .
        </p>
      </section>

      {/* FAQ TEASER */}
      <FaqTeaserSection />

      {/* CTA */}
      <section className="mt-14 rounded-2xl border border-neutral-200 bg-neutral-900 p-8 text-white">
        <h2 className="text-2xl font-semibold">
          Jetzt Baugruppe prüfen lassen
        </h2>
        <p className="mt-3 max-w-3xl text-white/90 leading-relaxed">
          Senden Sie uns kurz die Baugruppenbezeichnung und eine Fehlerbeschreibung.
          Sie erhalten eine Ticketnummer und eine Bestätigung per E-Mail.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/anfrage"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-medium text-neutral-900 hover:bg-neutral-100"
          >
            Reparaturanfrage starten →
          </Link>
          <Link
            href="/faq"
            className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-transparent px-6 py-3 text-white hover:bg-white/10"
          >
            FAQ ansehen
          </Link>
        </div>
      </section>
    </main>
  );
}