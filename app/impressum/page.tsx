// frontend/app/kontakt/page.tsx
import Link from "next/link";

export default function Kontakt() {
  return (
    <main>
      <h1>Kontakt</h1>

      <div className="grid grid-2">
        <div className="card">
          <h3>Reparaturanfrage</h3>
          <p>
            Am schnellsten über das Anfrageformular. Sie erhalten sofort eine
            Bestätigung per E-Mail.
          </p>
          <Link href="/anfrage" className="btn btn-primary">
            Zur Anfrage →
          </Link>

          <p className="small" style={{ marginTop: 12, marginBottom: 0 }}>
            Tipp: Für eine schnelle Bearbeitung helfen Angaben zu Baugruppe,
            Fehlerbild und Dringlichkeit (Standard/Express).
          </p>
        </div>

        <div className="card">
          <h3>IEB – Industrieelektronik Bonk</h3>
          <p style={{ marginTop: 6, marginBottom: 10 }}>
            Reparatur & Service für elektronische Baugruppen
          </p>

          <p className="small" style={{ marginTop: 0 }}>
            Neugauler Str. 12
            <br />
            16259 Oderaue
            <br />
            <a href="mailto:info@ieb-bonk.de">info@ieb-bonk.de</a>
            <br />
            <a href="tel:+4915125855584">Tel.: 0151-25855584</a>
            <br />
            <a href="https://www.ieb-bonk.de" target="_blank" rel="noreferrer">
              www.ieb-bonk.de
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}export default function Impressum() {
  return (
    <main>
      <h1>Impressum</h1>
      <p className="small">
        Platzhalter – hier muss dein rechtlich korrektes Impressum rein (Name/Firma, Adresse, Kontakt, USt-ID etc.).
      </p>
    </main>
  );
}
