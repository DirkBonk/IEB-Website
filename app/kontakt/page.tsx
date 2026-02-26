// app/kontakt/page.tsx
import Link from "next/link";
import PageShell from "../../components/PageShell";

export default function KontaktPage() {
  return (
    <PageShell>
      <header className="max-w-3xl">
        <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700">
          Schnell erreichbar · Antwort per E-Mail
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Kontakt</h1>
        <p className="mt-4 text-lg leading-relaxed text-neutral-700">
          Für Reparaturanfragen am besten direkt das Formular nutzen – Sie erhalten eine Ticketnummer.
          Für Rückfragen erreichen Sie uns auch telefonisch oder per E-Mail.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/anfrage"
            className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-6 py-3 text-white shadow-sm hover:bg-neutral-800"
          >
            Reparaturanfrage starten →
          </Link>
          <Link
            href="/faq"
            className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-neutral-900 shadow-sm hover:bg-neutral-50"
          >
            FAQ ansehen
          </Link>
        </div>
      </header>

      <section className="mt-12 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">IEB – Industrieelektronik Bonk</h2>
          <p className="mt-3 leading-relaxed text-neutral-700">
            Neugauler Str. 12<br />
            16259 Oderaue
          </p>

          <div className="mt-4 space-y-2 text-neutral-900">
            <div>
              <span className="text-neutral-600">E-Mail:</span>{" "}
              <a className="underline font-medium" href="mailto:info@ieb-bonk.de">
                info@ieb-bonk.de
              </a>
            </div>
            <div>
              <span className="text-neutral-600">Telefon:</span>{" "}
              <a className="underline font-medium" href="tel:+4915125855584">
                0151-25855584
              </a>
            </div>
          </div>

          <div className="mt-6">
            <Link className="underline font-medium" href="/anfrage">
              Zum Anfrageformular →
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
          <h2 className="text-xl font-semibold">Hinweise für den Versand</h2>
          <p className="mt-3 leading-relaxed text-neutral-700">
            Bitte ESD-sicher verpacken (ESD-Beutel) und ausreichend polstern. Idealerweise beilegen:
            Fehlerbeschreibung, Baugruppenbezeichnung, Dringlichkeit.
          </p>
          <p className="mt-4 text-neutral-700">
            Ablauf im Detail:{" "}
            <Link className="underline font-medium" href="/service-ablauf">
              Service & Ablauf →
            </Link>
          </p>
        </div>
      </section>
    </PageShell>
  );
}