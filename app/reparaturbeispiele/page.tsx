import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageShell from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Reparaturbeispiele aus der Werkstatt | IEB Bonk",
  description:
    "Echte Einblicke in die Prüfung elektronischer Baugruppen bei IEB Bonk: Lötstellen nachgearbeitet, Versorgungsspannungen geprüft und Prüfumfang dokumentiert.",
  alternates: { canonical: "https://www.ieb-bonk.de/reparaturbeispiele" },
};

const photos = [
  {
    src: "/reparaturbeispiele/img_2096.webp",
    alt: "Bestückungsseite einer elektronischen Baugruppe mit Relais, Kondensatoren und Steuerungselektronik",
    label: "Übersicht: bestückte Leiterplatte",
  },
  {
    src: "/reparaturbeispiele/img_2097.webp",
    alt: "Lötseite der größeren elektronischen Baugruppe mit Leiterbahnen und Lötverbindungen",
    label: "Lötseite der Leiterplatte",
  },
  {
    src: "/reparaturbeispiele/img_2095.webp",
    alt: "Kleinere elektronische Baugruppe mit Bauteilen und Leistungsanschlüssen",
    label: "Weitere Ansicht aus der Dokumentation",
  },
  {
    src: "/reparaturbeispiele/img_2094.webp",
    alt: "Lötseite einer kleineren elektronischen Leiterplatte",
    label: "Weitere Lötseitenansicht",
  },
  {
    src: "/reparaturbeispiele/img_1009.webp",
    alt: "Mikroskopische Aufnahme einer auffälligen Löt- oder Kontaktstelle vor der Nacharbeit",
    label: "Mikroskopaufnahme vor der Nacharbeit – 1",
  },
  {
    src: "/reparaturbeispiele/img_1011.webp",
    alt: "Zweite Mikroskopaufnahme einer auffälligen Stelle vor der Nacharbeit",
    label: "Mikroskopaufnahme vor der Nacharbeit – 2",
  },
];

export default function ReparaturbeispielePage() {
  return (
    <PageShell>
      <nav aria-label="Brotkrumennavigation" className="text-sm text-slate-500">
        <Link href="/" className="hover:text-teal-800">Startseite</Link>
        <span aria-hidden="true" className="mx-2">/</span>
        <span className="text-slate-700">Reparaturbeispiele</span>
      </nav>

      <header className="mt-8 max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-teal-800">Aus unserer Werkstatt · Oktober 2026</p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#102c40] sm:text-5xl">
          Prüfung und Nacharbeit einer elektronischen Baugruppe
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-600">
          Ein echter Praxisfall: Sichtprüfung, Nacharbeit zweier auffälliger Lötstellen und Kontrolle
          der Versorgungsspannungen – mit dokumentierten Grenzen der Funktionsprüfung.
        </p>
      </header>

      <section className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm" aria-label="Fotodokumentation">
        <a href={photos[0].src} target="_blank" rel="noopener noreferrer" aria-label="Großes Originalbild der Baugruppe in neuem Tab öffnen" className="block bg-slate-100">
          <Image src={photos[0].src} alt={photos[0].alt} width={1100} height={900} priority className="mx-auto max-h-[560px] w-full object-contain" />
        </a>
        <div className="p-4 text-sm text-slate-600 sm:px-6">{photos[0].label} · Für eine größere Ansicht das Bild anklicken.</div>
      </section>

      <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)]">
        <article className="space-y-9 leading-relaxed text-slate-700">
          <section>
            <h2 className="text-2xl font-semibold text-[#102c40]">Ausgangssituation</h2>
            <p className="mt-3">Eine elektronische Baugruppe aus dem gewerblichen Bereich wurde zur technischen Untersuchung vorgelegt. Geprüft werden sollten sichtbare Auffälligkeiten an der Leiterplatte sowie die vorhandenen Versorgungsspannungen.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#102c40]">Durchgeführte Arbeiten</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Optische Sichtprüfung der Leiterplatte und der Bauteile</li>
              <li>Untersuchung auffälliger Löt- und Kontaktbereiche</li>
              <li>Nacharbeit und Neuverlötung von zwei auffälligen Lötstellen</li>
              <li>Anlegen der erforderlichen Betriebsspannungen</li>
              <li>Überprüfung der vorhandenen Versorgungsspannungen</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#102c40]">Prüfergebnis</h2>
            <p className="mt-3">Alle überprüften Versorgungsspannungen waren vorhanden. Bei der Sichtprüfung wurden keine weiteren offensichtlichen Beschädigungen festgestellt. Die beiden auffälligen Lötstellen wurden nachgearbeitet.</p>
            <p className="mt-3 font-medium text-[#102c40]">Eine vollständige Funktionsprüfung unter realen Betriebsbedingungen war nicht möglich.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#102c40]">Fachliche Einordnung</h2>
            <p className="mt-3">Ob die ursprüngliche Störung durch die Nacharbeit behoben wurde, ließ sich außerhalb der zugehörigen Anlage nicht abschließend feststellen. Für eine gezielte weiterführende Fehlersuche waren entsprechende Schaltpläne beziehungsweise technische Unterlagen erforderlich.</p>
            <p className="mt-3">Empfohlen wurde deshalb, die Baugruppe zunächst durch qualifiziertes Personal in der Anlage zu prüfen und bei fortbestehender Störung die Herstellerunterlagen bereitzustellen.</p>
          </section>
        </article>

        <aside className="rounded-2xl border border-teal-100 bg-teal-50 p-6">
          <h2 className="text-lg font-semibold text-[#102c40]">Der Fall auf einen Blick</h2>
          <dl className="mt-5 space-y-4 text-sm">
            <div><dt className="font-semibold text-slate-800">Baugruppe</dt><dd className="mt-1 text-slate-600">Elektronische Steuerungsbaugruppe</dd></div>
            <div><dt className="font-semibold text-slate-800">Arbeiten</dt><dd className="mt-1 text-slate-600">Sichtprüfung, zwei Lötstellen nachgearbeitet, Spannungen kontrolliert</dd></div>
            <div><dt className="font-semibold text-slate-800">Ergebnis</dt><dd className="mt-1 text-slate-600">Versorgungsspannungen vorhanden; Gesamtfunktion nicht abschließend beurteilt</dd></div>
            <div><dt className="font-semibold text-slate-800">Fotodokumentation</dt><dd className="mt-1 text-slate-600">Echte Werkstattaufnahmen. Mikroskopbilder zeigen ausschließlich den Zustand vor der Nacharbeit.</dd></div>
          </dl>
        </aside>
      </div>

      <section className="mt-14" aria-labelledby="bilder-titel">
        <h2 id="bilder-titel" className="text-2xl font-semibold text-[#102c40]">Fotodokumentation</h2>
        <p className="mt-3 max-w-3xl text-slate-600">Originalaufnahmen aus der Untersuchung. Die Mikroskopbilder zeigen den Zustand vor der Nacharbeit; Aufnahmen nach der Nacharbeit liegen für diesen Fall nicht vor.</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {photos.slice(1).map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`${photo.label} vergrößern`} className="block bg-slate-100">
                <Image src={photo.src} alt={photo.alt} width={640} height={480} className="h-56 w-full object-contain" />
              </a>
              <figcaption className="p-4 text-sm text-slate-700">{photo.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-3xl bg-[#102c40] p-7 text-white sm:p-10">
        <h2 className="text-2xl font-semibold">Sie möchten eine elektronische Baugruppe prüfen lassen?</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-white/90">Senden Sie uns Hersteller, Typenbezeichnung, Fehlerbeschreibung und möglichst Fotos. Wir klären mit Ihnen, ob eine Untersuchung sinnvoll und im vorhandenen Prüfumfang möglich ist. Einsendungen bitte vorab abstimmen – bundesweit per Versand.</p>
        <Link href="/anfrage" className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-[#102c40] hover:bg-teal-50">Reparaturanfrage stellen →</Link>
      </section>
    </PageShell>
  );
}
