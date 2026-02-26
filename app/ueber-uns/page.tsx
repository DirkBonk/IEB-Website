// app/ueber-uns/page.tsx
import Link from "next/link";
import PageShell from "../../components/PageShell";

const values = [
  { title: "Diagnose mit System", text: "Fehlerbilder werden strukturiert eingegrenzt – zielorientiert und nachvollziehbar." },
  { title: "Reparatur statt Austausch", text: "Wirtschaftlich, nachhaltig und oft schneller als Neubeschaffung." },
  { title: "Dokumentation", text: "Klare Rückmeldung zu Maßnahmen und Ergebnissen." },
  { title: "Industrie-Fokus", text: "Ausrichtung auf Instandhaltung, Service und Produktion." },
];

export default function UeberUnsPage() {
  return (
    <PageShell>
      <header className="max-w-3xl">
        <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700">
          Spezialisiert auf Baugruppenreparatur
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Über uns</h1>

        <p className="mt-4 text-lg leading-relaxed text-neutral-700">
          IEB – Industrieelektronik Bonk ist spezialisiert auf die Reparatur elektronischer Baugruppen
          und Industrieelektronik. Ziel ist, Ausfallzeiten zu reduzieren und Kosten zu senken – durch
          Reparatur auf Baugruppen-/Bauteilebene mit dokumentierten Ergebnissen.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-6 py-3 text-white shadow-sm hover:bg-neutral-800"
          >
            Kontakt aufnehmen →
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
        <h2 className="text-2xl font-semibold">Wofür wir stehen</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 leading-relaxed text-neutral-700">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
        <h2 className="text-2xl font-semibold">Regional: Brandenburg & Berlin</h2>
        <p className="mt-3 leading-relaxed text-neutral-700">
          Standort Oderaue. Abwicklung meist per Versand – nach Abstimmung auch regional.
        </p>
        <p className="mt-4">
          <Link className="underline font-medium" href="/industrieelektronik-reparatur-brandenburg">
            Zur Landingpage Brandenburg →
          </Link>
        </p>
      </section>
    </PageShell>
  );
}