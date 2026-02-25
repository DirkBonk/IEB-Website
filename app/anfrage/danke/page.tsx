"use client";

import { useSearchParams } from "next/navigation";

export default function DankePage() {
  const params = useSearchParams();
  const ticket = params.get("ticket");

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
            Ticketnummer: (nicht übergeben)
          </p>
        )}
      </div>
    </main>
  );
}