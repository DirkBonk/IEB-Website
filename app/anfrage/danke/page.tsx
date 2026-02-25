"use client";

import { useSearchParams } from "next/navigation";

export default function Danke() {
  const params = useSearchParams();
  const ticket = params.get("ticket");

  return (
    <main>
      <h1>Vielen Dank für Ihre Anfrage</h1>
      {ticket && <p>Ihre Ticketnummer: {ticket}</p>}
    </main>
  );
}