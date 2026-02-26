import PageShell from "../../components/PageShell";

export default function LeistungenPage() {
  return (
    <PageShell className="prose prose-neutral max-w-none">
      <h1>Leistungen</h1>
      <p>
        IEB – Industrieelektronik Bonk unterstützt Industrie und Technik bei der
        schnellen Wiederinbetriebnahme defekter Elektronik – mit Diagnose,
        Reparatur auf Baugruppenebene und nachvollziehbarer Dokumentation.
      </p>

      <h2>Kernleistungen</h2>
      <ul>
        <li>Reparatur elektronischer Baugruppen</li>
        <li>Fehlerdiagnose SMD / THT</li>
        <li>Bauteiltausch</li>
        <li>Rework &amp; Nacharbeit (z. B. Fine Pitch, QFN, BGA – je nach Ausstattung)</li>
        <li>Funktionsprüfung</li>
        <li>Dokumentation</li>
        <li>Express-Reparatur (optional)</li>
        <li>Kleinserien-Refurbishment</li>
      </ul>

      <p>
        <a href="/anfrage">Reparaturanfrage starten →</a>
      </p>
    </PageShell>
  );
}