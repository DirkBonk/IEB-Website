import Section from "../../components/Section";

export default function UeberUns() {
  return (
    <main>
      <h1>Über uns</h1>
      <p>Hier kommt eure Story rein: wer ihr seid, wofür ihr steht, warum man euch vertrauen kann.</p>

      <Section title="Unsere Werte">
        <div className="grid grid-3">
          <div className="card"><h3>Qualität</h3><p>Saubere Arbeit statt schneller Flick.</p></div>
          <div className="card"><h3>Transparenz</h3><p>Klare Schritte, klare Kommunikation.</p></div>
          <div className="card"><h3>Verlässlichkeit</h3><p>Was wir zusagen, liefern wir.</p></div>
        </div>
      </Section>
    </main>
  );
}
