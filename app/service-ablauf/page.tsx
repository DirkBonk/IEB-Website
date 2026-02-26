import PageShell from "../../components/PageShell";

export default function ServiceAblaufPage() {
  return (
    <PageShell className="prose prose-neutral max-w-none">
      <h1>Service-Ablauf</h1>
      <p>So läuft eine Reparatur bei IEB ab – transparent und nachvollziehbar.</p>

      <ol>
        <li>Anfrage über das Online-Formular</li>
        <li>Prüfung &amp; Erstbewertung</li>
        <li>Fehlerdiagnose</li>
        <li>Reparatur / Bauteiltausch / Rework</li>
        <li>Funktionsprüfung</li>
        <li>Rückversand inkl. Dokumentation</li>
      </ol>

      <h2>Express</h2>
      <p>
        Wenn es zeitkritisch ist (z. B. Produktionsstillstand), vermerken Sie das in der Anfrage.
        Wir priorisieren nach Abstimmung.
      </p>

      <p>
        <a href="/anfrage">Reparaturanfrage starten →</a>
      </p>
    </PageShell>
  );
}