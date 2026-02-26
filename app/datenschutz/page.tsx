// app/datenschutz/page.tsx
import PageShell from "../../components/PageShell";

export default function DatenschutzPage() {
  return (
    <PageShell>
      <header className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">Datenschutz</h1>
        <p className="mt-4 text-neutral-700">
          Hinweise zur Verarbeitung personenbezogener Daten auf dieser Website.
        </p>
      </header>

      <section className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Verantwortlicher</h2>
        <p className="mt-3 leading-relaxed text-neutral-700">
          IEB – Industrieelektronik Bonk, Neugauler Str. 12, 16259 Oderaue<br />
          E-Mail: info@ieb-bonk.de
        </p>
      </section>

      <section className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
        <h2 className="text-xl font-semibold">Kontaktformular / Anfrage</h2>
        <p className="mt-3 leading-relaxed text-neutral-700">
          Wenn Sie uns über das Anfrageformular kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung der Anfrage
          und für Anschlussfragen. Die Verarbeitung erfolgt zur Durchführung vorvertraglicher Maßnahmen bzw. zur
          Bearbeitung Ihres Anliegens.
        </p>
      </section>

      <section className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Server-Logfiles</h2>
        <p className="mt-3 leading-relaxed text-neutral-700">
          Beim Aufruf der Website können technisch bedingt Informationen (z. B. IP-Adresse, Zeitpunkt, angeforderte Seite)
          in Server-Logfiles verarbeitet werden, um den Betrieb und die Sicherheit der Website zu gewährleisten.
        </p>
      </section>

      <section className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
        <h2 className="text-xl font-semibold">Ihre Rechte</h2>
        <p className="mt-3 leading-relaxed text-neutral-700">
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf Auskunft, Berichtigung, Löschung,
          Einschränkung der Verarbeitung sowie Datenübertragbarkeit. Außerdem können Sie eine erteilte Einwilligung
          jederzeit widerrufen.
        </p>
      </section>
    </PageShell>
  );
}