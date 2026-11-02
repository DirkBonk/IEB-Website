// app/referenzen/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "../../components/PageShell";

export const metadata: Metadata = {
  title: {
    absolute: "Praxisbeispiel: Baugruppenprüfung & Lötstellen | IEB Bonk",
  },
  description:
    "Dokumentierter Praxisfall: Sichtprüfung einer elektronischen Baugruppe, Nacharbeit zweier Lötstellen und Prüfung der Versorgungsspannungen – mit klaren Prüfgrenzen.",
  alternates: {
    canonical: "https://www.ieb-bonk.de/referenzen",
  },
};

const work = [
  "Leiterplatte und Bauteile optisch auf Beschädigungen überprüft.",
  "Zwei auffällige Lötstellen nachgearbeitet und neu verlötet.",
  "Die erforderlichen Betriebsspannungen angelegt.",
  "Das Vorhandensein der überprüften Versorgungsspannungen kontrolliert.",
];

export default function ReferenzenPage() {
  return (
    <PageShell>
      <header className="max-w-3xl">
        <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700">
          Praxisfall · Sichtprüfung · Lötstellen · Spannungsversorgung
        </div>

        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">
          Praxisbeispiel aus der Baugruppenprüfung
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-neutral-700">
          Was wurde untersucht, welche Arbeiten wurden durchgeführt und was
          lässt sich daraus ableiten? Dieser anonymisierte Fall zeigt eine
          dokumentierte Prüfung mit Nacharbeit an einer elektronischen
          Baugruppe.
        </p>
      </header>

      <article className="mt-12 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-semibold">
          Zwei Lötstellen instand gesetzt und Versorgungsspannungen geprüft
        </h2>

        <p className="mt-3 text-sm text-neutral-600">
          Grundlage: Prüf- und Reparaturbericht vom 28. Oktober 2026
        </p>

        <section className="mt-8">
          <h3 className="text-lg font-semibold">Umfang der Untersuchung</h3>
          <p className="mt-3 leading-relaxed text-neutral-700">
            Die elektronische Baugruppe wurde einer Sichtprüfung und einer
            Überprüfung der Spannungsversorgung unterzogen. Eine vollständige
            Funktionsprüfung in der zugehörigen Anlage war im Rahmen dieser
            Untersuchung nicht möglich.
          </p>
        </section>

        <section className="mt-8">
          <h3 className="text-lg font-semibold">Durchgeführte Arbeiten</h3>
          <ul className="mt-3 list-disc space-y-3 pl-5 text-neutral-700">
            {work.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h3 className="text-lg font-semibold">Festgestelltes Ergebnis</h3>
          <p className="mt-3 leading-relaxed text-neutral-700">
            Alle überprüften Versorgungsspannungen waren vorhanden.
            Bei der Sichtprüfung wurden neben den nachgearbeiteten
            Lötstellen keine weiteren offensichtlichen Beschädigungen
            festgestellt.
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
          <h3 className="text-lg font-semibold">
            Prüfgrenze: Gesamtfunktion noch nicht bestätigt
          </h3>
          <p className="mt-3 leading-relaxed text-neutral-700">
            Die vorhandenen Versorgungsspannungen und die instand gesetzten
            Lötstellen bestätigen noch nicht die vollständige Betriebsfähigkeit
            der Baugruppe. Eine abschließende Beurteilung erfordert einen
            Funktionstest im eingebauten Zustand unter regulären
            Betriebsbedingungen.
          </p>
        </section>

        <section className="mt-8">
          <h3 className="text-lg font-semibold">
            Empfehlung für das weitere Vorgehen
          </h3>
          <p className="mt-3 leading-relaxed text-neutral-700">
            Empfohlen wurde der Wiedereinbau mit anschließender
            Funktionsprüfung durch entsprechend qualifiziertes Personal.
            Sollte die ursprüngliche Störung weiter bestehen, sind für
            diesen Fall Schaltpläne beziehungsweise technische Unterlagen
            des Herstellers erforderlich, um die Fehlersuche gezielt
            fortzusetzen.
          </p>
        </section>
      </article>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-semibold">
          Nachvollziehbare Befunde als Entscheidungsgrundlage
        </h2>
        <p className="mt-4 leading-relaxed text-neutral-700">
          In diesem Fall wurden die durchgeführten Arbeiten, die überprüften
          Spannungen und die Grenzen der Untersuchung festgehalten. So ist
          erkennbar, was bereits bearbeitet wurde und welche Prüfung in der
          Anlage noch aussteht.
        </p>
        <Link
          href="/leistungen"
          className="mt-4 inline-block font-medium underline underline-offset-4"
        >
          Unsere Leistungen für Diagnose und Baugruppenreparatur →
        </Link>
      </section>

      <section className="mt-14 rounded-2xl border border-neutral-200 bg-neutral-900 p-6 text-white sm:p-8">
        <h2 className="text-2xl font-semibold">
          Sie möchten eine Baugruppe prüfen lassen?
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-white/90">
          Senden Sie uns Hersteller, Baugruppenbezeichnung, Fehlerbeschreibung
          und Dringlichkeit. Vorhandene Schaltpläne, Anschlussunterlagen und
          Angaben zu bisherigen Reparaturversuchen helfen bei der Einschätzung.
          Anschließend stimmen wir Diagnose und weiteres Vorgehen mit Ihnen ab.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/anfrage"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-medium text-neutral-900 hover:bg-neutral-100"
          >
            Reparaturanfrage starten →
          </Link>
          <Link
            href="/service-ablauf"
            className="inline-flex items-center justify-center rounded-2xl border border-white/30 px-6 py-3 text-white hover:bg-white/10"
          >
            Service und Ablauf
          </Link>
        </div>
      </section>
    </PageShell>
  );
}