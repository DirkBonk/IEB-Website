import Link from "next/link";
import Section from "../components/Section";

export default function Home() {
  return (
    <main>
      <div className="card" style={{ padding: 22 }}>
        <span className="badge">Schnell • Transparent • Zuverlässig</span>
        <h1 style={{ marginTop: 10 }}>Reparatur elektronischer Baugruppen für Industrie & Technik</h1>
        <p>
          Wir reparieren Industrie-, Steuer-, Leistungs- und Spezialelektronik 
auf Baugruppenebene – schnell, wirtschaftlich und nachvollziehbar dokumentiert. Stell eine Anfrage und du bekommst sofort eine Bestätigung per Mail.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
          <Link href="/anfrage" className="btn btn-primary">Anfrage stellen</Link>
          <Link href="/service-ablauf" className="btn">Service & Ablauf</Link>
        </div>
      </div>

      <Section
        title="Warum Firma?"
        subtitle="Was du von uns erwarten kannst – ganz konkret."
      >
        <div className="grid grid-3">
          <div className="card">
            <h3>Klare Kommunikation</h3>
            <p>Keine Funkstille. Du weißt jederzeit, wo wir stehen.</p>
          </div>
          <div className="card">
            <h3>Transparente Preise</h3>
            <p>Pakete + klare „ab“-Preise. Keine Überraschungen.</p>
          </div>
          <div className="card">
            <h3>Schnelle Umsetzung</h3>
            <p>Kurzer Prozess, saubere Lieferung, Fokus aufs Ergebnis.</p>
          </div>
        </div>
      </Section>

      <Section title="Leistungen" subtitle="Ein Auszug – Details findest du auf der Leistungsseite.">
        <div className="grid grid-3">
          <div className="card"><h3>Beratung</h3><p>Kickoff, Zieldefinition, Plan.</p></div>
          <div className="card"><h3>Umsetzung</h3><p>Professionell und nachvollziehbar.</p></div>
          <div className="card"><h3>Support</h3><p>Betreuung & Optimierung.</p></div>
        </div>
        <div style={{ marginTop: 12 }}>
          <Link href="/leistungen" className="btn">Alle Leistungen →</Link>
        </div>
      </Section>

      <Section title="Preise" subtitle="Transparenz ab Tag 1. Pakete & Individual-Angebot.">
        <div className="grid grid-3">
          <div className="card">
            <h3>Basic</h3>
            <p className="small">ab 499 €</p>
            <p>Für kleine Aufgaben & schnellen Start.</p>
          </div>
          <div className="card">
            <h3>Standard</h3>
            <p className="small">ab 1.199 €</p>
            <p>Das beste Preis/Leistungs-Paket.</p>
          </div>
          <div className="card">
            <h3>Premium</h3>
            <p className="small">ab 2.499 €</p>
            <p>Komplettlösung inkl. Betreuung.</p>
          </div>
        </div>
        <div style={{ marginTop: 12 }}>
          <Link href="/preise" className="btn">Preise & Details →</Link>
        </div>
      </Section>

      <Section title="Bereit?" subtitle="Sag uns kurz, was du brauchst – wir melden uns.">
        <div className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
          <div>
            <h3 style={{ margin: 0 }}>Anfrage starten</h3>
            <p style={{ margin: "6px 0 0" }}>Dauert 30 Sekunden.</p>
          </div>
          <Link href="/anfrage" className="btn btn-primary">Jetzt Anfrage senden</Link>
        </div>
      </Section>
    </main>
  );
}
