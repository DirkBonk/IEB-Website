import Section from "../../components/Section";

export default function Referenzen() {
  return (
    <main>
      <h1>Referenzen</h1>
      <p>Hier kannst du später echte Projekte/Logos/Testimonials eintragen.</p>

      <Section title="Auswahl">
        <div className="grid grid-3">
          <div className="card"><h3>Projekt 1</h3><p className="small">Kurzbeschreibung & Ergebnis.</p></div>
          <div className="card"><h3>Projekt 2</h3><p className="small">Kurzbeschreibung & Ergebnis.</p></div>
          <div className="card"><h3>Projekt 3</h3><p className="small">Kurzbeschreibung & Ergebnis.</p></div>
        </div>
      </Section>
    </main>
  );
}
