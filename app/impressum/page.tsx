export default function Impressum() {
  return (
    <main>
      <h1>Impressum</h1>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>IEB – Industrieelektronik Bonk</h3>
        <p style={{ marginTop: 6 }}>
          Reparatur & Service für elektronische Baugruppen
        </p>

        <p className="small" style={{ marginTop: 0 }}>
          Neugauler Str. 12<br />
          16259 Oderaue<br />
          <a href="mailto:info@ieb-bonk.de">info@ieb-bonk.de</a><br />
          <a href="tel:+4915125855584">Tel.: 0151-25855584</a><br />
          <a href="https://www.ieb-bonk.de" target="_blank" rel="noreferrer">
            www.ieb-bonk.de
          </a>
        </p>
      </div>
    </main>
  );
}