// app/referenzen/page.tsx
import Link from "next/link";
import PageShell from "../../components/PageShell";

const refs = [
  {
    title: "Baugruppenreparatur für Instandhaltung",
    industry: "Instandhaltung / Produktion",
    text: "Diagnose und Instandsetzung einer Industrie-Baugruppe zur Reduktion von Stillstandszeiten. Dokumentation der Maßnahmen und Rücklieferung nach Prüfung.",
  },
  {
    title: "Leistungselektronik / Netzteil",
    industry: "Energie / Antriebstechnik",
    text: "Fehlersuche auf Bauteilebene und Bauteiltausch. Fokus: wirtschaftliche Reparatur statt Austausch bei langen Lieferzeiten.",
  },
  {
    title: "Steuerungs-/Automatisierungselektronik",
    industry: "Automatisierung",
    text: "Analyse eines sporadischen Fehlerbildes, Nacharbeit/Rework je nach Aufbau. Ziel: stabile Wiederinbetriebnahme.",
  },
];

export default function ReferenzenPage() {
  return (
    <PageShell>
      <header className="max-w-3xl">
        <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700">
          Beispiele · Typische Einsätze · Industrieorientiert
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          Referenzen
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-neutral-700">
          Kurze Beispiele typischer Fälle. Aus Vertraulichkeit nennen wir hier
          keine Kundennamen – gern sprechen wir im direkten Kontakt über
          vergleichbare Szenarien.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/anfrage"
            className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-6 py-3 text-white shadow-sm hover:bg-neutral-800"
          >
            Reparaturanfrage starten →
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-neutral-900 shadow-sm hover:bg-neutral-50"
          >
            Kontakt
          </Link>
        </div>
      </header>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Beispiele</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {refs.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div className="text-xs text-neutral-600">{r.industry}</div>
              <h3 className="mt-2 text-lg font-semibold">{r.title}</h3>
              <p className="mt-3 leading-relaxed text-neutral-700">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
        <h2 className="text-2xl font-semibold">Was wir dafür brauchen</h2>
        <p className="mt-3 leading-relaxed text-neutral-700">
          Baugruppenbezeichnung, Fehlerbeschreibung, Dringlichkeit und – wenn
          möglich – Fotos/Typenschild. Danach stimmen wir Diagnose und weiteres
          Vorgehen ab.
        </p>
        <p className="mt-4 text-neutral-700">
          Ablauf im Detail:{" "}
          <Link className="underline font-medium" href="/service-ablauf">
            Service & Ablauf →
          </Link>
        </p>
      </section>
    </PageShell>
  );
}