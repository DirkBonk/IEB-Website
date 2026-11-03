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
      <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_1fr]">
      <header className="max-w-3xl">
        <div className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-2 text-xs font-medium text-teal-800">
          IEB – Industrieelektronik Bonk · Oderaue in Brandenburg
        </div>

        <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#102c40] sm:text-5xl">
          Reparatur von Industrieelektronik, Platinen und Steuerungen
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-slate-600">
          Ihre Maschine steht, ein Netzteil fällt aus oder eine Steuerungsplatine
          reagiert nicht mehr? IEB – Industrieelektronik Bonk untersucht
          elektronische Baugruppen und prüft, ob sich der Fehler auf
          Bauteilebene beheben lässt.
        </p>

        <p className="mt-4 leading-relaxed text-slate-600">
          Wir unterstützen Unternehmen, Instandhaltungsbetriebe und technische
          Dienstleister mit Diagnose, Reparatur und nachvollziehbarer
          Dokumentation. Die Abwicklung erfolgt nach Absprache per Versand
          oder durch persönliche Übergabe in Oderaue.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/anfrage"
            className="inline-flex items-center justify-center rounded-2xl bg-teal-700 px-6 py-3 text-white shadow-sm hover:bg-teal-800"
          >
            Reparaturanfrage starten →
          </Link>
          <Link
            href="/leistungen"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-slate-900 shadow-sm hover:bg-slate-50"
          >
            Reparaturleistungen ansehen
          </Link>
        </div>
      </header>
        <aside className="relative overflow-hidden rounded-3xl bg-[#102c40] p-6 text-white sm:p-8" aria-label="Unser Ansatz">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-200">Technik erhalten</p>
          <svg viewBox="0 0 360 240" className="my-5 w-full" fill="none" aria-hidden="true">
            <rect x="24" y="20" width="312" height="200" rx="18" stroke="#3c697a" />
            <g stroke="#559b9e" strokeWidth="2">
              <path d="M24 60h70l35 35h24M24 120h129M24 180h70l35-35h24M207 95h24l35-35h70M207 120h129M207 145h24l35 35h70M180 20v65M180 155v65"/>
              <path d="M70 20v22M70 198v22M290 20v22M290 198v22"/>
            </g>
            <rect x="138" y="78" width="84" height="84" rx="8" fill="#164557" stroke="#7dd3c8" strokeWidth="2"/>
            <rect x="151" y="91" width="58" height="58" rx="4" stroke="#4c8b91"/>
            <g fill="#99e4d6"><circle cx="56" cy="120" r="5"/><circle cx="304" cy="120" r="5"/><circle cx="180" cy="45" r="5"/><circle cx="180" cy="195" r="5"/></g>
            <path d="M164 120h8l5-10 7 20 5-10h8" stroke="#99e4d6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <g fill="#deb982"><circle cx="44" cy="40" r="4"/><circle cx="316" cy="40" r="4"/><circle cx="44" cy="200" r="4"/><circle cx="316" cy="200" r="4"/></g>
          </svg>
          <h2 className="text-2xl font-semibold leading-tight">Erst den Fehler verstehen.<br />Dann gezielt instand setzen.</h2>
          <p className="mt-4 leading-relaxed text-slate-200">Diagnose auf Bauteilebene, abgestimmte Reparatur und dokumentierte Prüfergebnisse.</p>
          <div className="mt-6 flex flex-wrap gap-2 border-t border-white/20 pt-5 text-xs text-teal-100">
            <span className="rounded-full bg-white/10 px-3 py-2">SMD / THT</span>
            <span className="rounded-full bg-white/10 px-3 py-2">Baugruppen</span>
            <span className="rounded-full bg-white/10 px-3 py-2">Netzteile</span>
          </div>
        </aside>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">
          Welche Elektronik können Sie anfragen?
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 border-t-4 border-t-teal-600 bg-white p-6 shadow-sm"
            >
              <span aria-hidden="true" className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 font-semibold text-teal-800">0{index + 1}</span>
              <h3 className="text-lg font-semibold text-[#102c40]">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                {service.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-5 max-w-3xl leading-relaxed text-slate-600">
          Nicht jede Baugruppe lässt sich reparieren oder ohne die zugehörige
          Anlage vollständig testen. Senden Sie uns zunächst die
          Typenbezeichnung und eine möglichst genaue Fehlerbeschreibung.
          Wir klären, ob Ihr Auftrag zu unseren Möglichkeiten passt.
        </p>

        <Link
          href="/leistungen"
          className="mt-4 inline-block font-semibold text-teal-800 underline underline-offset-4 hover:text-teal-950"
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
              className="border-l-2 border-teal-600 py-1 pl-6"
            >
              <h3 className="text-lg font-semibold">{benefit.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-teal-100 bg-teal-50 p-6 sm:p-10">
        <h2 className="text-2xl font-semibold">
          So läuft Ihre Reparaturanfrage ab
        </h2>

        <ol className="mt-6 grid list-decimal gap-6 pl-5 md:grid-cols-2 md:gap-x-10">
          {steps.map((step) => (
            <li key={step.title} className="pl-1">
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/service-ablauf"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-slate-900 shadow-sm hover:bg-teal-50"
          >
            Reparaturablauf im Detail →
          </Link>
          <Link
            href="/faq"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-slate-900 shadow-sm hover:bg-teal-50"
          >
            Fragen zu Kosten, Prüfung und Versand
          </Link>
        </div>
      </section>
      <section className="mt-16 overflow-hidden rounded-3xl border border-amber-100 bg-[#faf7f0]">
        <div className="grid gap-0 md:grid-cols-[minmax(0,1.25fr)_minmax(240px,0.75fr)]">
          <div className="p-6 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-800">Echter Werkstattfall</p>
            <h2 className="mt-3 text-2xl font-semibold text-[#102c40]">
              Reparaturbeispiele aus unserer Werkstatt
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
              Sehen Sie anhand echter Fotos, wie wir elektronische Baugruppen untersuchen:
              Im ersten dokumentierten Fall wurden zwei auffällige Lötstellen nachgearbeitet
              und die Versorgungsspannungen überprüft. Auch die Grenzen der Funktionsprüfung
              sind nachvollziehbar beschrieben.
            </p>
            <Link
              href="/reparaturbeispiele"
              className="mt-6 inline-flex rounded-xl bg-teal-700 px-5 py-3 font-semibold text-white hover:bg-teal-800"
            >
              Reparaturbeispiel ansehen →
            </Link>
          </div>
          <div className="bg-slate-100">
            <img
              src="/reparaturbeispiele/img_2096.webp"
              alt="Echte elektronische Baugruppe aus der IEB-Werkstatt"
              width={800}
              height={700}
              loading="lazy"
              className="h-full min-h-64 w-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="mt-16 max-w-4xl">
        <h2 className="text-2xl font-semibold">
          Ihr Ansprechpartner für Elektronikreparatur in Oderaue
        </h2>

        <p className="mt-4 leading-relaxed text-slate-600">
          IEB – Industrieelektronik Bonk hat seinen Standort in Oderaue im
          Landkreis Märkisch-Oderland. Wir bearbeiten Reparaturanfragen für
          Maschinenbau, Instandhaltung, Automatisierung und technische
          Servicebetriebe.
        </p>

        <p className="mt-4 leading-relaxed text-slate-600">
          Bitte stimmen Sie die Einsendung Ihrer Baugruppe vorab mit uns ab.
          Wenn Sie die Elektronik persönlich abgeben möchten, vereinbaren
          Sie bitte einen Termin.
        </p>

        <Link
          href="/industrieelektronik-reparatur-brandenburg"
          className="mt-4 inline-block font-semibold text-teal-800 underline underline-offset-4 hover:text-teal-950"
        >
          Reparaturservice für Brandenburg und Berlin →
        </Link>
      </section>

      <section className="mt-16 rounded-3xl border border-slate-200 bg-[#102c40] p-6 text-white sm:p-10">
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
            className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-medium text-slate-900 hover:bg-teal-50"
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