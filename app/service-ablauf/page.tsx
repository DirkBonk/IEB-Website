// app/service-ablauf/page.tsx
import Link from "next/link";
import PageShell from "../../components/PageShell";

const steps = [
  {
    title: "Anfrage & Daten",
    text: "Sie senden uns Eckdaten (Baugruppe, Fehlerbild, Dringlichkeit). Optional: Fotos/Typenschild, bisherige Messwerte, Einsatzbedingungen.",
  },
  {
    title: "Eingang & Diagnose",
    text: "Aufnahme, Sichtprüfung und systematische Fehlersuche auf Baugruppenebene (SMD/THT). Ziel: Fehler eingrenzen und Maßnahmen ableiten.",
  },
  {
    title: "Freigabe & Reparatur",
    text: "Sie erhalten einen nachvollziehbaren Kostenvoranschlag. Nach Freigabe erfolgt die Reparatur (Bauteiltausch/Rework).",
  },
  {
    title: "Prüfung & Rücklieferung",
    text: "Optional Funktionsprüfung/Burn-In (nach Absprache). Dokumentation/Reparaturbericht und Rückversand.",
  },
];

const options = [
  { title: "Express-Bearbeitung", text: "Priorisierte Diagnose/Reparatur nach Absprache." },
  { title: "Dokumentation / Reparaturbericht", text: "Ergebnis & Maßnahmen nachvollziehbar dokumentiert." },
  { title: "Funktionsprüfung & Burn-In", text: "Soweit sinnvoll möglich und nach Vereinbarung." },
  { title: "Obsoleszenz-Management", text: "Wenn Bauteile nicht mehr verfügbar sind, prüfen wir Alternativen." },
];

export default function ServiceAblaufPage() {
  return (
    <PageShell>
      <header className="max-w-3xl">
        <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700">
          Transparent · Nachvollziehbar · Industrieorientiert
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          Service & Ablauf
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-neutral-700">
          Transparenter Prozess für die Reparatur elektronischer Baugruppen – von
          der Anfrage bis zur dokumentierten Rücklieferung.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/anfrage"
            className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-6 py-3 text-white shadow-sm hover:bg-neutral-800"
          >
            Reparaturanfrage starten →
          </Link>
          <Link
            href="/faq"
            className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-neutral-900 shadow-sm hover:bg-neutral-50"
          >
            FAQ ansehen
          </Link>
        </div>
      </header>

      {/* Steps */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Ablauf in 4 Schritten</h2>
        <p className="mt-2 text-neutral-700">
          Reparatur erfolgt erst nach Freigabe.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {steps.map((s, idx) => (
            <div
              key={s.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-900 text-sm font-semibold text-white">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-neutral-700">{s.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Options */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Optionen</h2>
        <p className="mt-2 text-neutral-700">
          Je nach Baugruppe und Anforderung.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {options.map((o) => (
            <div
              key={o.title}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
            >
              <h3 className="font-semibold">{o.title}</h3>
              <p className="mt-2 leading-relaxed text-neutral-700">{o.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-14 rounded-2xl border border-neutral-200 bg-neutral-900 p-8 text-white">
        <h2 className="text-2xl font-semibold">Bereit für den nächsten Schritt?</h2>
        <p className="mt-3 max-w-3xl text-white/90 leading-relaxed">
          Senden Sie Baugruppenbezeichnung und Fehlerbeschreibung. Sie erhalten
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