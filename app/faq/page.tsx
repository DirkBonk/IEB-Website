// app/faq/page.tsx
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "FAQ | Baugruppen- & Industrieelektronik Reparatur | IEB Bonk",
  description:
    "Antworten auf häufige Fragen zur Reparatur elektronischer Baugruppen – Ablauf, Dauer, Express, Versand und Dokumentation.",
  alternates: {
    canonical: "https://www.ieb-bonk.de/faq",
  },
};

const SITE = "https://www.ieb-bonk.de";

export default function FAQPage() {

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wie lange dauert eine Reparatur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Das hängt vom Fehlerbild und der Ersatzteilverfügbarkeit ab. Express ist möglich.",
        },
      },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Ablauf der Baugruppenreparatur bei IEB",
    step: [
      {
        "@type": "HowToStep",
        name: "Reparaturanfrage stellen",
        text: "Über das Online-Formular senden Sie die wichtigsten Informationen.",
        url: `${SITE}/anfrage`,
      },
    ],
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">

      {/* ================= STRUCTURED DATA ================= */}

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      {/* Breadcrumb Schema */}
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", url: `${SITE}/` },
          { name: "FAQ", url: `${SITE}/faq` },
        ]}
      />

      {/* ================= PAGE CONTENT ================= */}

      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          Häufige Fragen (FAQ)
        </h1>
        <p className="mt-3 text-neutral-700">
          Antworten rund um Reparatur, Ablauf, Dauer, Versand und Dokumentation.
        </p>
      </header>

      {/* Rest deiner FAQ Sections hier */}

    </main>
  );
}