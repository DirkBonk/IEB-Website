import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function DankePage() {
  const cookieStore = await cookies();
  const ticket = cookieStore.get("ieb_last_ticket")?.value;

  return (
    <main>
      <h1>Vielen Dank für Ihre Anfrage</h1>

      <div className="card" style={{ marginTop: 14 }}>
        <p style={{ marginTop: 0 }}>
          Ihre Anfrage wurde übermittelt. Wir melden uns schnellstmöglich.
        </p>

        {ticket ? (
          <p className="small" style={{ marginBottom: 0 }}>
            Ticketnummer: <strong>{ticket}</strong>
          </p>
        ) : (
          <p className="small" style={{ marginBottom: 0 }}>
            Ticketnummer: (nicht verfügbar)
          </p>
        )}
      </div>
    </main>
  );
}