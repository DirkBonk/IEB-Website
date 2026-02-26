// app/impressum/page.tsx
import PageShell from "../../components/PageShell";

export default function ImpressumPage() {
  return (
    <PageShell>
      <header className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">Impressum</h1>
        <p className="mt-4 text-neutral-700">
          Angaben gemäß § 5 TMG
        </p>
      </header>

      <section className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">IEB – Industrieelektronik Bonk</h2>
        <p className="mt-3 leading-relaxed text-neutral-700">
          Neugauler Str. 12<br />
          16259 Oderaue<br />
          Deutschland
        </p>

        <p className="mt-4 leading-relaxed text-neutral-700">
          Telefon: 0151-25855584<br />
          E-Mail: info@ieb-bonk.de
        </p>
      </section>

      <section className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
        <h2 className="text-xl font-semibold">Haftungshinweis</h2>
        <p className="mt-3 leading-relaxed text-neutral-700">
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
          Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
        </p>
      </section>
    </PageShell>
  );
}