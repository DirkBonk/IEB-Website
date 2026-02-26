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
          Reparatur elektronischer Baugruppen für Industrie & Technik
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-700">
          Wir reparieren Industrie-, Steuer-, Leistungs- und Spezialelektronik auf Baugruppenebene –
          schnell, wirtschaftlich und nachvollziehbar dokumentiert. Stellen Sie eine Anfrage und
          erhalten Sie eine Bestätigung per E-Mail inkl. Ticketnummer.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/anfrage"
            className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-6 py-3 text-white shadow-sm hover:bg-neutral-800"
          >
            Anfrage stellen →
          </Link>
          <Link
            href="/service-ablauf"
            className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-neutral-900 shadow-sm hover:bg-neutral-50"
          >
            Service & Ablauf
          </Link>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-3 text-sm text-neutral-700">
          <li className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
            ✅ Diagnose auf Baugruppen-/Bauteilebene
          </li>
          <li className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
            ✅ Funktionsprüfung & Dokumentation
          </li>
          <li className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
            ✅ Express möglich nach Abstimmung
          </li>
        </ul>
      </header>

      {/* LEISTUNGEN (kurz) */}
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
              t: "Funktionsprüfung & Dokumentation",
              d: "Nach Reparatur – soweit sinnvoll möglich – Prüfung vor Rückversand inkl. Dokumentation.",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <h3 className="font-semibold">{c.t}</h3>
              <p className="mt-2 leading-relaxed text-neutral-700">{c.d}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-neutral-700">
          <Link className="underline font-medium" href="/leistungen">
            Alle Leistungen ansehen →
          </Link>
        </p>
      </section>

      {/* REGION + FAQ */}
      <section className="mt-14 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Brandenburg & Berlin</h2>
          <p className="mt-3 leading-relaxed text-neutral-700">
            Standort Oderaue. Service für Brandenburg & Berlin – meist per Versand, nach Abstimmung auch regional.
          </p>
          <p className="mt-4">
            <Link className="underline font-medium" href="/industrieelektronik-reparatur-brandenburg">
              Zur Landingpage Brandenburg →
            </Link>
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Häufige Fragen</h2>
          <p className="mt-3 leading-relaxed text-neutral-700">
            Antworten zu Ablauf, Dauer, Versand, Funktionsprüfung und Dokumentation finden Sie in den{" "}
            <Link className="underline font-medium" href="/faq">
              FAQ
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-14 rounded-2xl border border-neutral-200 bg-neutral-900 p-8 text-white">
        <h2 className="text-2xl font-semibold">Jetzt Reparaturanfrage senden</h2>
        <p className="mt-3 max-w-3xl text-white/90 leading-relaxed">
          Senden Sie uns Baugruppenbezeichnung und Fehlerbeschreibung. Sie erhalten eine Ticketnummer und Bestätigung per E-Mail.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/anfrage"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-medium text-neutral-900 hover:bg-neutral-100"
          >
            Anfrage starten →
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