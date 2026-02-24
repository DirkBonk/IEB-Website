"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function DankePage() {
  const params = useSearchParams();
  const ticket = params.get("ticket");

  return (
    <main style={{ maxWidth: 720, margin: "40px auto", padding: 16 }}>
      <h1>Danke!</h1>
      <p>Deine Anfrage wurde erfolgreich gesendet.</p>

      <p>
        Ticket: <strong>{ticket}</strong>
      </p>

      <Link href="/">Zurück zur Startseite</Link>
    </main>
  );
}
