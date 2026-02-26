// app/leistungen/page.tsx
import Link from "next/link";
import PageShell from "../../components/PageShell";

const core = [
  {
    title: "Reparatur elektronischer Baugruppen",
    text: "Instandsetzung industrieller Leiterplatten und Baugruppen – wirtschaftlich statt Austausch.",
  },
  {
    title: "Fehlerdiagnose SMD / THT",
    text: "Systematische Fehlersuche zur Eingrenzung des Fehlerbilds und Ableitung der Maßnahmen.",
  },
  {
    title: "Bauteiltausch",
    text: "Austausch defekter Bauteile (z. B. ICs, Kondensatoren, Leistungshalbleiter, Steckverbinder).",
  },
  {
    title: "Rework & Nacharbeit",
    text: "Nacharbeit/Rework (z. B. Fine Pitch, QFN, BGA – je nach Ausstattung/Anforderung).",
  },
  {
    title: "Funktionsprüfung",
    text: "Nach der Reparatur – soweit sinnvoll möglich – Prüfung vor Rückversand.",
  },
  {
    title: "Dokumentation",
    text: "Nachvollziehbarer Reparaturbericht/Dokumentation der durchgeführten Arbeiten.",
  },
];

const addOns = [
  { title: "Express-Reparatur (optional)", text: "Priorisierte Bearbeitung nach Absprache." },
  { title: "Kleinserien-Refurbishment", text: "Aufbereitung kleiner Serien / Austausch typischer Schwachstellen." },
  { title: "Obsoleszenz-Management", text: "Prüfung von Alternativen bei nicht mehr verfügbaren Bauteilen." },
];

export default function LeistungenPage() {
  return (
    <PageShell>
      <header className="max-w-3xl">
        <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700">
          Baugruppenreparatur · Rework · Prüfung · Dokumentation
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Leistungen</h1>

        <p className="mt-4 text-lg leading-relaxed text-neutral-700">
          IEB – Industrieelektronik Bonk unterstützt Industrie und Technik bei der schnellen
          Wiederinbetriebnahme defekter Elektronik – mit Diagnose, Reparatur auf Baugruppenebene und
          nachvollziehbarer Dokumentation.
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
            Ablauf ansehen
          </Link>
        </div>
      </header>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Kernleistungen</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {core.map((c) => (
            <div key={c.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 leading-relaxed text-neutral-700">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Optionen</h2>
        <p className="mt-2 text-neutral-700">Je nach Baugruppe, Fehlerbild und Dringlichkeit.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {addOns.map((o) => (
            <div key={o.title} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <h3 className="font-semibold">{o.title}</h3>
              <p className="mt-2 leading-relaxed text-neutral-700">{o.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-neutral-200 bg-neutral-900 p-8 text-white">
        <h2 className="text-2xl font-semibold">Defekte Baugruppe? Kurz anfragen.</h2>
        <p className="mt-3 max-w-3xl text-white/90 leading-relaxed">
          Senden Sie uns Baugruppenbezeichnung, Fehlerbeschreibung und Dringlichkeit. Sie erhalten
          eine Ticketnummer und eine Bestätigung per E-Mail.
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
    </PageShell>
  );
}