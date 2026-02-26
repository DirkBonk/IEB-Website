// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      {/* HERO */}
      <header className="mb-12">
        <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700">
          Reparatur & Service für elektronische Baugruppen · Oderaue (Brandenburg)
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          Industrieelektronik reparieren statt ersetzen
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-700">
          IEB – Industrieelektronik Bonk repariert elektronische Baugruppen für Industrie,
          Maschinenbau und Automatisierung: Fehlerdiagnose auf Bauteilebene, SMD/THT-Rework,
          Funktionsprüfung und Dokumentation – auf Wunsch mit Express-Option.
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
            So läuft’s ab
          </Link>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-3 text-sm text-neutral-700">
          <li className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
            ✅ Diagnose auf Baugruppen- / Bauteilebene
          </li>
          <li className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
            ✅ Funktionsprüfung & Dokumentation
          </li>
          <li className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
            ✅ Express möglich bei Stillstand
          </li>
        </ul>
      </header>

      {/* LEISTUNGEN */}
      <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">Leistungen</h2>
        <p className="mt-3 text-neutral-700">
          Fokus auf Instandsetzung industrieller Elektronik – zuverlässig, nachvollziehbar und wirtschaftlich.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              t: "Reparatur elektronischer Baugruppen",
              d: "Instandsetzung von Leiterplatten, Steuerungen und Industrieelektronik – auch bei älteren Baugruppen.",
            },
            {
              t: "Fehlerdiagnose SMD / THT",
              d: "Gezielte Eingrenzung des Fehlerbildes mit geeigneter Mess- und Prüftechnik.",
            },
            {
              t: "Bauteiltausch & Rework",
              d: "SMD/THT, Fine Pitch (z. B. QFN) – abhängig von Aufbau und Schadensbild.",
            },
            {
              t: "Funktionsprüfung",
              d: "Nach Reparatur – soweit sinnvoll möglich – Prüfung vor Rückversand.",
            },
            {
              t: "Dokumentation",
              d: "Transparente Beschreibung der Maßnahmen / Diagnoseergebnisse.",
            },
            {
              t: "Express-Service",
              d: "Für zeitkritische Fälle: priorisierte Bearbeitung nach Abstimmung.",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <h3 className="font-semibold">{c.t}</h3>
              <p className="mt-2 leading-relaxed text-neutral-700">{c.d}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-neutral-700">
          Mehr Details:{" "}
          <Link className="underline font-medium" href="/leistungen">
            Leistungen ansehen
          </Link>
          .
        </p>
      </section>

      {/* BRANCHEN + REGION */}
      <section className="mt-14 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Für Industrie & Maschinenbau</h2>
          <p className="mt-3 leading-relaxed text-neutral-700">
            Typische Einsatzfelder: Maschinenbau, Automatisierung, Energie- & Umwelttechnik,
            Instandhaltung sowie EMS-Dienstleister.
          </p>
          <p className="mt-4 text-neutral-700">
            Häufige Fragen beantworten wir in den{" "}
            <Link className="underline font-medium" href="/faq">
              FAQ
            </Link>
            .
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Brandenburg & Berlin</h2>
          <p className="mt-3 leading-relaxed text-neutral-700">
            Standort Oderaue. Service für Brandenburg & Berlin – Abwicklung meist per Versand,
            bei Bedarf nach Abstimmung auch regional.
          </p>
          <p className="mt-4">
            <Link className="underline font-medium" href="/industrieelektronik-reparatur-brandenburg">
              Zur Landingpage Brandenburg →
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-14 rounded-2xl border border-neutral-200 bg-neutral-900 p-8 text-white">
        <h2 className="text-2xl font-semibold">Defekte Baugruppe? Schnell anfragen.</h2>
        <p className="mt-3 max-w-3xl text-white/90 leading-relaxed">
          Senden Sie uns Baugruppenbezeichnung und Fehlerbeschreibung. Sie erhalten eine Ticketnummer
          und eine Bestätigung per E-Mail.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
    </main>
  );
}