import Section from "../../components/Section";
import Link from "next/link";

export default function Leistungen() {
  return (
    <main>
      <h1>Leistungen</h1>
      <p>Hier kannst du deine echten Angebote eintragen. (Wir ersetzen die Platzhalter später gemeinsam.)</p>

      <Section title="Unsere Kernleistungen">
        <div className="grid grid-2">
          <div className="card">
            <h3>Leistung A</h3>
            <p>Beschreibung, Nutzen, Ergebnis.</p>
          </div>
          <div className="card">
            <h3>Leistung B</h3>
            <p>Beschreibung, Nutzen, Ergebnis.</p>
          </div>
          <div className="card">
            <h3>Leistung C</h3>
            <p>Beschreibung, Nutzen, Ergebnis.</p>
          </div>
          <div className="card">
            <h3>Support / Wartung</h3>
            <p>Optional monatlich oder nach Bedarf.</p>
          </div>
        </div>
      </Section>

      <div style={{ marginTop: 16 }}>
        <Link href="/anfrage" className="btn btn-primary">Anfrage stellen</Link>
      </div>
    </main>
  );
}
