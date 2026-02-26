// app/faq/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "../../components/PageShell";
import BreadcrumbJsonLd from "../../components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title:
    "FAQ Baugruppen Reparatur | Industrieelektronik Reparatur Brandenburg | IEB Bonk",
  description:
    "Häufige Fragen zur Reparatur elektronischer Baugruppen: Kosten, Dauer, Reparatur vs Austausch, Versand, Funktionsprüfung und Ablauf.",
  alternates: {
    canonical: "https://www.ieb-bonk.de/faq",
  },
};

const SITE = "https://www.ieb-bonk.de";

const FAQ = [
  {
    q: "Wie lange dauert eine Reparatur?",
    a: "Die Dauer hängt vom Fehlerbild und der Ersatzteilverfügbarkeit ab. Nach Eingang erfolgt eine Diagnose. Bei zeitkritischen Fällen ist Express-Bearbeitung nach Absprache möglich.",
  },
  {
    q: "Was kostet eine Baugruppenreparatur?",
    a: "Die Kosten hängen von Baugruppe, Fehlerbild und benötigten Ersatzteilen ab. In vielen Fällen ist die Reparatur deutlich günstiger als eine Neubeschaffung – insbesondere bei Industrie- und Spezialelektronik mit langen Lieferzeiten.",
  },
  {
    q: "Wann lohnt sich eine Reparatur?",
    a: "Eine Reparatur lohnt sich besonders bei langen Lieferzeiten, hohen Neupreisen oder nicht mehr verfügbaren Ersatzgeräten. Auch bei älteren, bewährten Anlagen kann die Instandsetzung wirtschaftlich sinnvoller sein als ein kompletter Austausch.",
  },
  {
    q: "Reparatur oder Austausch – was ist sinnvoller?",
    a: "Ein Austausch ist oft teurer und mit Lieferzeiten verbunden. Eine Reparatur auf Baugruppen- oder Bauteilebene kann Kosten sparen und Stillstandszeiten reduzieren. Die Entscheidung hängt vom Zustand der Baugruppe, der Verfügbarkeit von Ersatzteilen und den wirtschaftlichen Rahmenbedingungen ab.",
  },
  {
    q: "Kann ich die Baugruppe zusenden?",
    a: "Ja. Die Abwicklung erfolgt in der Regel per Versand. Bitte ESD-sicher verpacken und ausreichend polstern. Idealerweise legen Sie eine Fehlerbeschreibung und Kontaktdaten bei.",
  },
  {
    q: "Gibt es eine Funktionsprüfung nach der Reparatur?",
    a: "Nach der Reparatur erfolgt – soweit technisch sinnvoll möglich – eine Funktionsprüfung. Zusätzlich erhalten Sie eine nachvollziehbare Dokumentation der durchgeführten Arbeiten.",
  },
  {
    q: "Welche Baugruppen repariert IEB?",
    a: "Repariert werden unter anderem Steuerungen, Leiterplatten (PCB), Leistungselektronik, Netzteile, Antriebselektronik und industrielle Spezialbaugruppen – abhängig von Fehlerbild und Prüfmöglichkeiten.",
  },
];

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
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
          Antworten für Industrie & Instandhaltung
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          Häufige Fragen zur Baugruppen- und Industrieelektronik Reparatur
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-neutral-700">
          Informationen zu Kosten, Ablauf, Reparatur vs. Austausch und Versand.
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
        <h2 className="text-2xl font-semibold">
          Noch Fragen zur Industrieelektronik Reparatur?
        </h2>
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