import Link from "next/link";
import Section from "../../components/Section";

export default function ServiceAblauf() {
  return (
    <main>
      <h1>Service & Ablauf</h1>
      <p>
        Transparenter Prozess für die Reparatur elektronischer Baugruppen –
        von der Anfrage bis zur dokumentierten Rücklieferung.
      </p>

      <Section title="Ablauf in 4 Schritten" subtitle="Reparatur erfolgt erst nach Freigabe.">
        <div className="grid grid-2">
          <div className="card">
            <h3>1) Anfrage & Daten</h3>
            <p>
              Sie senden uns Eckdaten (Baugruppe, Fehlerbild, Dringlichkeit).
              Optional: Fotos/Typenschild, bisherige Messwerte, Einsatzbedingungen.
            </p>
          </div>

          <div className="card">
            <h3>2) Eingang & Diagnose</h3>
            <p>
              Aufnahme, Sichtprüfung und systematische Fehlersuche auf Baugruppenebene
              (SMD/THT). Ziel: Fehler eingrenzen und Maßnahmen ableiten.
            </p>
          </div>

          <div className="card">
            <h3>3) Freigabe & Reparatur</h3>
            <p>
              Sie erhalten einen nachvollziehbaren Kostenvoranschlag. Nach Freigabe
              erfolgt die Reparatur (Bauteiltausch/Rework).
            </p>
          </div>

          <div className="card">
            <h3>4) Prüfung & Rücklieferung</h3>
            <p>
              Optional Funktionsprüfung/Burn-In (nach Absprache). Dokumentation/
              Reparaturbericht und Rückversand.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Optionen" subtitle="Je nach Baugruppe und Anforderung.">
        <div className="card">
          <ul className="small" style={{ margin: 0, paddingLeft: 18, lineHeight: 1.85 }}>
            <li>Express-Bearbeitung nach Absprache</li>
            <li>Dokumentation / Reparaturbericht</li>
            <li>Funktionsprüfung & Burn-In</li>
            <li>Obsoleszenz-Management (Bauteile nicht mehr verfügbar)</li>
            <li>Kleinserien-Refurbishment</li>
            <li>Reverse Engineering (eingeschränkt; rechtlich vorab prüfen)</li>
          </ul>
        </div>
      </Section>

      <Section title="Was beschleunigt die Bearbeitung?" subtitle="Je besser die Infos, desto schneller die Diagnose.">
        <div className="card">
          <ul className="small" style={{ margin: 0, paddingLeft: 18, lineHeight: 1.85 }}>
            <li>Hersteller/Typ der Baugruppe (Fotos/Typenschild)</li>
            <li>Fehlerbild (Symptome, Codes, Verhalten)</li>
            <li>Einsatzbedingungen (Spannung, Umgebung, Last)</li>
            <li>Dringlichkeit (Standard/Express)</li>
          </ul>
        </div>

        <div style={{ marginTop: 12 }}>
          <Link href="/anfrage" className="btn btn-primary">
            Reparaturanfrage senden
          </Link>
        </div>
      </Section>
    </main>
  );
}