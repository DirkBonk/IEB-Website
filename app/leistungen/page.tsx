import Link from "next/link";
import Section from "../../components/Section";

const services = [
  {
    title: "Reparatur elektronischer Baugruppen",
    text: "Reparatur von Industrie-, Steuer-, Leistungs-, Kommunikations- und Spezialelektronik auf Baugruppenebene – wirtschaftlich statt Austausch.",
  },
  {
    title: "Fehlerdiagnose SMD / THT",
    text: "Systematische Fehlersuche auf Bauteilebene (SMD und THT) zur gezielten Instandsetzung und Minimierung von Ausfallzeiten.",
  },
  {
    title: "Bauteiltausch",
    text: "Austausch defekter Bauteile wie ICs, Kondensatoren, Leistungshalbleiter, Steckverbinder – je nach Baugruppe und Verfügbarkeit.",
  },
  {
    title: "Rework & Nacharbeit",
    text: "Nacharbeit/Rework (z. B. Fine Pitch, QFN, BGA – je nach Ausstattung/Anforderung) sowie Reparatur von Leiterplattenbereichen.",
  },
  {
    title: "Steuerungs- & Industrieelektronik-Service",
    text: "Instandsetzung von Steuerungstechnik und Maschinenbau-Elektronik für Instandhaltung, Service und Produktion.",
  },
  {
    title: "Leistungselektronik Reparatur",
    text: "Reparatur von Netzteilen, Leistungsmodulen sowie Antriebs-/Umrichter-naher Elektronik – nach Absprache und Diagnose.",
  },
  {
    title: "Funktionsprüfung & Dokumentation",
    text: "Auf Wunsch Funktionsprüfung/Burn-In (nach Absprache) sowie Reparaturbericht/Dokumentation der durchgeführten Arbeiten.",
  },
  {
    title: "Express-Reparatur (optional)",
    text: "Beschleunigte Bearbeitung bei Produktionsausfällen – Verfügbarkeit und Ablauf nach Absprache.",
  },
];

export default function Leistungen() {
  return (
    <main>
      <h1>Leistungen</h1>
      <p>
        IEB – Industrieelektronik Bonk unterstützt Industrie und Technik bei der
        schnellen Wiederinbetriebnahme defekter Elektronik – mit Diagnose,
        Reparatur auf Baugruppenebene und nachvollziehbarer Dokumentation.
      </p>

      <Section
        title="Kernleistungen"
        subtitle="Modular – je nach Baugruppe, Fehlerbild und Dringlichkeit."
      >
        <div className="grid grid-2">
          {services.map((s) => (
            <div className="card" key={s.title}>
              <h3 style={{ marginTop: 0 }}>{s.title}</h3>
              <p style={{ marginBottom: 0 }}>{s.text}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Link href="/anfrage" className="btn btn-primary">
            Reparaturanfrage senden
          </Link>
          <Link href="/service-ablauf" className="btn">
            Service & Ablauf
          </Link>
          <Link href="/kontakt" className="btn">
            Kontakt
          </Link>
        </div>
      </Section>

      <Section title="Typische Einsatzbereiche" subtitle="B2B-Fokus">
        <div className="card">
          <ul className="small" style={{ margin: 0, paddingLeft: 18, lineHeight: 1.85 }}>
            <li>Maschinenbau & Automatisierung</li>
            <li>Instandhaltung / Wartung</li>
            <li>EMS-Dienstleister</li>
            <li>Energie- & Umwelttechnik</li>
            <li>Handwerks- und Servicebetriebe</li>
            <li>Medizintechnik nur nach Anforderungen/Zulassungen</li>
          </ul>
        </div>
      </Section>

      <Section title="Hinweis" subtitle="Transparenz und Freigabe">
        <div className="card">
          <p style={{ marginTop: 0 }}>
            Reparaturen erfolgen grundsätzlich erst nach Freigabe. Je besser die
            Angaben zu Baugruppe und Fehlerbild, desto schneller die Diagnose.
          </p>
          <p className="small" style={{ marginBottom: 0 }}>
            Tipp: Fotos/Typenschild, Fehlerbeschreibung, Einsatzbedingungen und Dringlichkeit
            (Standard/Express) helfen enorm.
          </p>
        </div>
      </Section>
    </main>
  );
}