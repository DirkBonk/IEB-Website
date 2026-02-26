import PageShell from "../../components/PageShell";

export default function KontaktPage() {
  return (
    <PageShell className="prose prose-neutral max-w-none">
      <h1>Kontakt</h1>
      <p>Sie erreichen uns direkt oder über das Anfrageformular.</p>

      <h2>IEB – Industrieelektronik Bonk</h2>
      <p>
        Neugauler Str. 12<br />
        16259 Oderaue
      </p>

      <p>
        E-Mail: <a href="mailto:info@ieb-bonk.de">info@ieb-bonk.de</a>
        <br />
        Telefon: <a href="tel:+4915125855584">0151-25855584</a>
      </p>

      <p>
        <a href="/anfrage">Reparaturanfrage starten →</a>
      </p>
    </PageShell>
  );
}