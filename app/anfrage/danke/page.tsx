// app/anfrage/danke/page.tsx
import Link from "next/link";
import { cookies } from "next/headers";
import PageShell from "../../../components/PageShell";

export default async function AnfrageDankePage() {
  const store = await cookies();
  const ticket = store.get("ieb_last_ticket")?.value ?? null;

  // Cookie nach Auslesen löschen (Flow wie beschrieben)
  if (ticket) {
    store.set("ieb_last_ticket", "", {
      httpOnly: true,
      path: "/",
      maxAge: 0,
    });
  }

  return (
    <PageShell>
      <header className="max-w-3xl">
        <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700">
          Anfrage übermittelt
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Danke!</h1>

        <p className="mt-4 text-lg leading-relaxed text-neutral-700">
          Wir haben Ihre Anfrage erhalten und melden uns per E-Mail.
        </p>
      </header>

      <section className="mt-10 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Ihre Ticketnummer</h2>

        {ticket ? (
          <div className="mt-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <div className="text-sm text-neutral-600">Ticket</div>
            <div className="mt-2 font-mono text-2xl font-semibold tracking-tight text-neutral-900">
              {ticket}
            </div>
            <p className="mt-3 text-sm text-neutral-700">
              Bitte bei Rückfragen angeben. Sie erhalten zusätzlich eine Bestätigung per E-Mail.
            </p>
          </div>
        ) : (
          <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-sm text-amber-900">
              Keine Ticketnummer gefunden (Cookie ist abgelaufen oder wurde bereits gelöscht).
              Falls Sie keine Bestätigung per E-Mail erhalten haben, stellen Sie die Anfrage bitte erneut.
            </p>
          </div>
        )}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-neutral-900 shadow-sm hover:bg-neutral-50"
          >
            Zur Startseite
          </Link>
          <Link
            href="/anfrage"
            className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-6 py-3 text-white shadow-sm hover:bg-neutral-800"
          >
            Neue Anfrage →
          </Link>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
        <h2 className="text-xl font-semibold">Nächste Schritte</h2>
        <ul className="mt-3 space-y-2 text-sm text-neutral-700">
          <li>✅ Wir prüfen Ihre Angaben und melden uns mit Rückfragen oder nächstem Vorgehen.</li>
          <li>✅ Reparatur erfolgt erst nach Freigabe.</li>
          <li>✅ Rücklieferung inkl. Dokumentation (optional Funktionsprüfung/Burn-In nach Absprache).</li>
        </ul>
        <p className="mt-4 text-sm text-neutral-700">
          Ablauf im Detail:{" "}
          <Link className="underline font-medium" href="/service-ablauf">
            Service & Ablauf →
          </Link>
        </p>
      </section>
    </PageShell>
  );
}