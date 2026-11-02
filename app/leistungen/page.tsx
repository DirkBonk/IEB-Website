// app/leistungen/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "../../components/PageShell";

export const metadata: Metadata = {
  title: {
    absolute: "Platinen- & Baugruppenreparatur | IEB Bonk",
  },
  description:
    "Defekte Platine, Steuerung oder Industrienetzteil? IEB Bonk in Oderaue bietet Fehlerdiagnose, Bauteiltausch und dokumentierte Prüfung. Jetzt Reparatur anfragen.",
  alternates: {
    canonical: "https://www.ieb-bonk.de/leistungen",
  },
};

const core = [
  {
    title: "Platinen- und Leiterplattenreparatur",
    text: "Wir untersuchen elektronische Baugruppen auf defekte Bauteile, beschädigte Leiterbahnen und fehlerhafte Lötverbindungen. Ob eine Instandsetzung möglich und wirtschaftlich sinnvoll ist, hängt vom Schadensbild und dem Aufbau der Platine ab.",
  },
  {
    title: "Industrienetzteile",
    text: "Bei Netzteilen prüfen wir Fehler wie fehlende oder instabile Ausgangsspannungen und Kurzschlüsse. Für die Diagnose helfen Angaben zu Eingangsspannung, Ausgängen, Anschlussbelegung und dem angeschlossenen Gerät.",
  },
  {
    title: "Steuerungs- und Maschinenelektronik",
    text: "Wir prüfen elektronische Steuerungsbaugruppen aus Maschinen und technischen Anlagen. Bitte beschreiben Sie, welche Funktion ausgefallen ist und unter welchen Bedingungen der Fehler auftritt. Schaltpläne und technische Unterlagen erleichtern die Fehlersuche.",
  },
  {
    title: "SMD-/THT-Bauteiltausch und Rework",
    text: "Je nach Baugruppe ersetzen wir defekte Kondensatoren, Halbleiter, ICs oder Steckverbinder und arbeiten Lötstellen nach. Die Bearbeitung feiner Gehäuseformen wie QFN oder BGA klären wir vorab anhand der konkreten Baugruppe und der erforderlichen Ausstattung.",
  },
  {
    title: "Prüfung nach der Reparatur",
    text: "Der Prüfumfang richtet sich nach den verfügbaren Unterlagen und Testmöglichkeiten. Ohne die zugehörige Maschine lässt sich nicht jede Betriebsfunktion nachbilden. Wir halten fest, welche Prüfungen möglich waren und welche Einschränkungen bestehen.",
  },
  {
    title: "Dokumentation der Arbeiten",
    text: "Sie erhalten eine nachvollziehbare Dokumentation der durchgeführten Maßnahmen und Prüfergebnisse. Auch wenn eine Reparatur nicht möglich ist oder weitere Unterlagen benötigt werden, erläutern wir den Befund.",
  },
];

const symptoms = [
  "Die Baugruppe startet nicht oder bleibt ohne Funktion.",
  "Versorgungsspannungen fehlen oder brechen unter Belastung ein.",
  "Ein Kurzschluss wird vermutet oder eine Sicherung löst aus.",
  "Die Elektronik fällt sporadisch oder nach Erwärmung aus.",
  "Einzelne Ausgänge, Relais oder angeschlossene Funktionen reagieren nicht.",
  "Bauteile, Steckverbinder oder Leiterbahnen sind sichtbar beschädigt.",
];

const addOns = [
  {
    title: "Priorisierte Bearbeitung",
    text: "Bei dringenden Ausfällen stimmen wir ab, ob eine bevorzugte Diagnose und Bearbeitung möglich ist. Die Dauer hängt auch von Fehlerbild und Ersatzteilverfügbarkeit ab.",
  },
  {
    title: "Kleinserien-Refurbishment",
    text: "Für mehrere gleichartige Baugruppen prüfen wir eine gemeinsame Aufbereitung und den gezielten Austausch bekannter Schwachstellen.",
  },
  {
    title: "Nicht mehr verfügbare Bauteile",
    text: "Bei abgekündigten Komponenten untersuchen wir mögliche Ersatztypen. Entscheidend sind die elektrischen Eigenschaften und die Anforderungen der Schaltung.",
  },
];

export default function LeistungenPage() {
  return (
    <PageShell>
      <header className="max-w-3xl">
        <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700">
          Diagnose · Bauteiltausch · Prüfung · Dokumentation
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          Platinen- und Baugruppenreparatur für Industrie und Technik
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-neutral-700">
          Eine defekte Platine muss nicht immer vollständig ersetzt werden.
          IEB – Industrieelektronik Bonk in Oderaue untersucht und repariert
          elektronische Baugruppen, Industrienetzteile und Steuerungselektronik
          auf Bauteilebene. Wir prüfen, ob sich Ihre Elektronik instand setzen
          lässt – auch wenn Ersatzbaugruppen schwer erhältlich sind.
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
            Reparaturablauf ansehen
          </Link>
        </div>
      </header>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">
          Welche Elektronik wir prüfen und reparieren
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-neutral-700">
          Die Reparaturmöglichkeiten unterscheiden sich je nach Baugruppe.
          Mit Typenbezeichnung, Fotos und einer Fehlerbeschreibung können wir
          zunächst einschätzen, ob Ihr Auftrag zu unseren Leistungen passt.
          Eine belastbare Diagnose erfordert in der Regel die Untersuchung
          der Baugruppe.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {core.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 leading-relaxed text-neutral-700">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold">
          Typische Fehlerbilder bei Reparaturanfragen
        </h2>
        <ul className="mt-5 list-disc space-y-3 pl-5 text-neutral-700">
          {symptoms.map((symptom) => (
            <li key={symptom}>{symptom}</li>
          ))}
        </ul>
        <p className="mt-5 leading-relaxed text-neutral-700">
          Diese Symptome können unterschiedliche Ursachen haben. Beschreiben
          Sie möglichst genau, was Sie beobachten. Falls bereits Messungen
          oder Reparaturversuche durchgeführt wurden, geben Sie diese bitte
          ebenfalls an.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">
          Was kostet eine Platinenreparatur?
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-neutral-700">
          Die Kosten richten sich nach dem Diagnoseaufwand, den benötigten
          Ersatzteilen und den Prüfmöglichkeiten. Vor der Einsendung stimmen
          wir die Bedingungen und Kosten der Diagnose mit Ihnen ab.
          Weiterführende Reparaturarbeiten erfolgen nach Ihrer Freigabe.
        </p>
        <p className="mt-3 max-w-3xl leading-relaxed text-neutral-700">
          Eine Instandsetzung kann besonders dann sinnvoll sein, wenn eine
          Ersatzbaugruppe teuer oder nicht mehr lieferbar ist. Ob das auf
          Ihre Baugruppe zutrifft, beurteilen wir anhand des Befunds.
        </p>
        <Link
          href="/service-ablauf"
          className="mt-4 inline-block font-medium underline underline-offset-4"
        >
          Von der Anfrage bis zur Rücklieferung →
        </Link>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">
          Zusätzliche Leistungen nach Absprache
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {addOns.map((option) => (
            <div
              key={option.title}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
            >
              <h3 className="text-lg font-semibold">{option.title}</h3>
              <p className="mt-2 leading-relaxed text-neutral-700">
                {option.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">
          Elektronikreparatur in Oderaue – Abwicklung per Versand
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-neutral-700">
          Unser Standort liegt in Oderaue im Landkreis Märkisch-Oderland.
          Baugruppen können nach vorheriger Abstimmung zugesandt werden.
          Eine persönliche Übergabe vereinbaren Sie bitte vorab.
        </p>
        <Link
          href="/industrieelektronik-reparatur-brandenburg"
          className="mt-4 inline-block font-medium underline underline-offset-4"
        >
          Informationen zum Reparaturservice für Brandenburg und Berlin →
        </Link>
      </section>

      <section className="mt-14 rounded-2xl border border-neutral-200 bg-neutral-900 p-8 text-white">
        <h2 className="text-2xl font-semibold">
          Defekte Platine oder Baugruppe prüfen lassen
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-white/90">
          Für die erste Einschätzung helfen uns diese Angaben:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-white/90">
          <li>Hersteller, Gerätetyp und Baugruppenbezeichnung</li>
          <li>Fehlerbeschreibung und Zeitpunkt des Auftretens</li>
          <li>Vorhandene Fotos, Schaltpläne oder Anschlussunterlagen</li>
          <li>Bisherige Messungen oder Reparaturversuche</li>
          <li>Gewünschter Termin und Dringlichkeit</li>
        </ul>
        <p className="mt-4 max-w-3xl leading-relaxed text-white/90">
          Nach Absenden der Reparaturanfrage erhalten Sie eine Ticketnummer
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
            href="/faq"
            className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-transparent px-6 py-3 text-white hover:bg-white/10"
          >
            Häufige Fragen zur Reparatur
          </Link>
        </div>
      </section>
    </PageShell>
  );
}