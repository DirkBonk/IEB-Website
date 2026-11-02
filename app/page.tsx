// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "../components/PageShell";

export const metadata: Metadata = {
  title: {
    absolute: "Industrieelektronik & Platinen reparieren | IEB Bonk",
  },
  description:
    "IEB Bonk in Oderaue, Brandenburg: Reparatur von Platinen, Industrienetzteilen und Steuerungsbaugruppen. Diagnose und Reparatur nach Freigabe. Jetzt anfragen.",
  alternates: {
    canonical: "https://www.ieb-bonk.de/",
  },
};

const services = [
  {
    title: "Platinen und Leiterplatten",
    text: "Fehlersuche und Instandsetzung auf Bauteilebene: etwa bei defekten Komponenten, beschädigten Leiterbahnen oder fehlerhaften Lötstellen.",
  },
  {
    title: "Industrienetzteile",
    text: "Untersuchung von Netzteilen, die nicht starten, keine stabilen Ausgangsspannungen liefern oder einen vermuteten Kurzschluss aufweisen.",
  },
  {
    title: "Steuerungsbaugruppen",
    text: "Diagnose und Reparatur elektronischer Baugruppen aus Maschinen und technischen Anlagen – abhängig von Aufbau, Unterlagen und Prüfmöglichkeiten.",
  },
];

const benefits = [
  {
    title: "Reparierbarkeit klären",
    text: "Eine Diagnose zeigt, ob eine Instandsetzung möglich und gegenüber einer Ersatzbaugruppe wirtschaftlich sinnvoll ist.",
  },
  {
    title: "Vorhandene Technik erhalten",
    text: "Wenn Ersatzbaugruppen schwer erhältlich oder abgekündigt sind, kann eine Reparatur auf Bauteilebene eine Alternative sein.",
  },
  {
    title: "Nachvollziehbar entscheiden",
    text: "Sie erhalten einen Befund und stimmen weiterführende Reparaturarbeiten mit uns ab. Maßnahmen und Prüfergebnisse werden dokumentiert.",
  },
];

const steps = [
  {
    title: "Anfragen",
    text: "Nennen Sie Hersteller, Baugruppenbezeichnung, Fehlerbild und Dringlichkeit.",
  },
  {
    title: "Diagnose abstimmen",
    text: "Vor der Einsendung klären wir die Bedingungen und Kosten der Untersuchung.",
  },
  {
    title: "Reparatur freigeben",
    text: "Nach der Diagnose stimmen wir das weitere Vorgehen mit Ihnen ab.",
  },
  {
    title: "Prüfen und zurücksenden",
    text: "Wir dokumentieren die Arbeiten, die möglichen Prüfungen und deren Ergebnisse.",
  },
];

export default function HomePage() {
  return (
    <PageShell>
      <header className="max-w-3xl">
        <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700">
          IEB – Industrieelektronik Bonk · Oderaue in Brandenburg
        </div>

        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">
          Reparatur von Industrieelektronik, Platinen und Steuerungen
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-neutral-700">
          Ihre Maschine steht, ein Netzteil fällt aus oder eine Steuerungsplatine
          reagiert nicht mehr? IEB – Industrieelektronik Bonk untersucht
          elektronische Baugruppen und prüft, ob sich der Fehler auf
          Bauteilebene beheben lässt.
        </p>

        <p className="mt-4 leading-relaxed text-neutral-700">
          Wir unterstützen Unternehmen, Instandhaltungsbetriebe und technische
          Dienstleister mit Diagnose, Reparatur und nachvollziehbarer
          Dokumentation. Die Abwicklung erfolgt nach Absprache per Versand
          oder durch persönliche Übergabe in Oderaue.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/anfrage"
            className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-6 py-3 text-white shadow-sm hover:bg-neutral-800"
          >
            Reparaturanfrage starten →
          </Link>
          <Link
            href="/leistungen"
            className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-neutral-900 shadow-sm hover:bg-neutral-50"
          >
            Reparaturleistungen ansehen
          </Link>
        </div>
      </header>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">
          Welche Elektronik können Sie anfragen?
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-neutral-700">
                {service.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-5 max-w-3xl leading-relaxed text-neutral-700">
          Nicht jede Baugruppe lässt sich reparieren oder ohne die zugehörige
          Anlage vollständig testen. Senden Sie uns zunächst die
          Typenbezeichnung und eine möglichst genaue Fehlerbeschreibung.
          Wir klären, ob Ihr Auftrag zu unseren Möglichkeiten passt.
        </p>

        <Link
          href="/leistungen"
          className="mt-4 inline-block font-medium underline underline-offset-4"
        >
          Mehr zu Platinenreparatur, Netzteilen und Prüfmöglichkeiten →
        </Link>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">
          Reparatur oder Ersatz? Erst den Fehler verstehen.
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
            >
              <h3 className="text-lg font-semibold">{benefit.title}</h3>
              <p className="mt-3 leading-relaxed text-neutral-700">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold">
          So läuft Ihre Reparaturanfrage ab
        </h2>

        <ol className="mt-6 grid list-decimal gap-6 pl-5 md:grid-cols-2 md:gap-x-10">
          {steps.map((step) => (
            <li key={step.title} className="pl-1">
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-neutral-700">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/service-ablauf"
            className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-neutral-900 shadow-sm hover:bg-neutral-100"
          >
            Reparaturablauf im Detail →
          </Link>
          <Link
            href="/faq"
            className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-neutral-900 shadow-sm hover:bg-neutral-100"
          >
            Fragen zu Kosten, Prüfung und Versand
          </Link>
        </div>
      </section>

      <section className="mt-16 max-w-4xl">
        <h2 className="text-2xl font-semibold">
          Ihr Ansprechpartner für Elektronikreparatur in Oderaue
        </h2>

        <p className="mt-4 leading-relaxed text-neutral-700">
          IEB – Industrieelektronik Bonk hat seinen Standort in Oderaue im
          Landkreis Märkisch-Oderland. Wir bearbeiten Reparaturanfragen für
          Maschinenbau, Instandhaltung, Automatisierung und technische
          Servicebetriebe.
        </p>

        <p className="mt-4 leading-relaxed text-neutral-700">
          Bitte stimmen Sie die Einsendung Ihrer Baugruppe vorab mit uns ab.
          Wenn Sie die Elektronik persönlich abgeben möchten, vereinbaren
          Sie bitte einen Termin.
        </p>

        <Link
          href="/industrieelektronik-reparatur-brandenburg"
          className="mt-4 inline-block font-medium underline underline-offset-4"
        >
          Reparaturservice für Brandenburg und Berlin →
        </Link>
      </section>

      <section className="mt-16 rounded-2xl border border-neutral-200 bg-neutral-900 p-6 text-white sm:p-10">
        <h2 className="text-2xl font-semibold">
          Defekte Elektronik? Beschreiben Sie uns den Fehler.
        </h2>

        <p className="mt-4 max-w-3xl leading-relaxed text-white/90">
          Für den Einstieg genügen Hersteller, Baugruppenbezeichnung,
          Fehlerbeschreibung und Dringlichkeit. Vorhandene Fotos oder
          technische Unterlagen helfen bei der ersten Einschätzung.
          Nach Absenden der Anfrage erhalten Sie eine Ticketnummer und
          eine Bestätigung per E-Mail.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </PageShell>
  );
}