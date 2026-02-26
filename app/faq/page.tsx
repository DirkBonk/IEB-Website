// app/faq/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "../../components/PageShell";
import BreadcrumbJsonLd from "../../components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "FAQ | Baugruppen- & Industrieelektronik Reparatur | IEB Bonk",
  description:
    "Antworten auf häufige Fragen zur Reparatur elektronischer Baugruppen – Ablauf, Dauer, Express, Versand und Dokumentation.",
  alternates: { canonical: "https://www.ieb-bonk.de/faq" },
};

const SITE = "https://www.ieb-bonk.de";

const FAQ = [
  {
    q: "Wie lange dauert eine Reparatur?",
    a: "Das hängt vom Fehlerbild und der Ersatzteilverfügbarkeit ab. Für zeitkritische Fälle ist Express nach Absprache möglich.",
  },
  {
    q: "Erfolgt die Reparatur sofort?",
    a: "Die Reparatur erfolgt erst nach Freigabe. Vorher erhalten Sie eine Rückmeldung bzw. einen nachvollziehbaren Kostenvoranschlag (je nach Fall).",
  },
  {
    q: "Kann ich die Baugruppe zusenden?",
    a: "Ja. Die Abwicklung erfolgt meist per Versand. Bitte ESD-sicher verpacken und gut polstern. Beilegen: Fehlerbeschreibung, Baugruppenbezeichnung, Dringlichkeit.",
  },
  {
    q: "Gibt es Funktionsprüfung und Dokumentation?",
    a: "Ja. Nach der Reparatur erfolgt – soweit sinnvoll möglich – eine Funktionsprüfung. Sie erhalten außerdem eine Dokumentation/Reparaturbericht.",
  },
  {
    q: "Welche Baugruppen repariert IEB?",
    a: "Industrie-, Steuer-, Leistungs- sowie Spezialelektronik – abhängig von Baugruppe, Fehlerbild und Prüfmöglichkeiten.",
  },
];

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <PageShell>
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", url: `${SITE}/` },
          { name: "FAQ", url: `${SITE}/faq` },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <header className="max-w-3xl">
        <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700">
          Kurz & klar · Für Industrie & Technik
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          Häufige Fragen (FAQ)
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-neutral-700">
          Antworten rund um Ablauf, Dauer, Versand, Funktionsprüfung und
          Dokumentation.
        </p>

        <p className="mt-4 text-neutral-700">
          Ablauf im Detail:{" "}
          <Link className="underline font-medium" href="/service-ablauf">
            Service & Ablauf →
          </Link>
        </p>
      </header>

      <section className="mt-10 space-y-3">
        {FAQ.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <summary className="cursor-pointer list-none">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg font-semibold">{item.q}</h2>
                <span className="select-none text-neutral-400 transition-transform group-open:rotate-180">
                  ▼
                </span>
              </div>
            </summary>
            <p className="mt-3 leading-relaxed text-neutral-700">{item.a}</p>
          </details>
        ))}
      </section>

      <section className="mt-14 rounded-2xl border border-neutral-200 bg-neutral-900 p-8 text-white">
        <h2 className="text-2xl font-semibold">Noch Fragen?</h2>
        <p className="mt-3 max-w-3xl text-white/90 leading-relaxed">
          Senden Sie eine Reparaturanfrage oder kontaktieren Sie uns direkt.
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