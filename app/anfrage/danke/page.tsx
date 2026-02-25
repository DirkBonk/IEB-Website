"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function DankePage() {
  const params = useSearchParams();
  const [ticket, setTicket] = useState<string | null>(null);

  useEffect(() => {
    const fromQuery = params.get("ticket");
    if (fromQuery) {
      setTicket(fromQuery);
      // optional: auch im storage sichern
      sessionStorage.setItem("ieb_last_ticket", fromQuery);
      return;
    }
    const fromStorage = sessionStorage.getItem("ieb_last_ticket");
    setTicket(fromStorage);
  }, [params]);

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