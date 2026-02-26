"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ApiSuccess = { ticket: string; status: "sent" };
type ApiError = { detail?: string };

export default function AnfragePage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.detail || "Serverfehler");
      }

      // Formular zurücksetzen
      setName("");
      setEmail("");
      setMessage("");

      // Weiterleitung zur Danke-Seite (Ticket kommt per Cookie)
      router.push("/anfrage/danke");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Fehler beim Senden der Anfrage.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ maxWidth: 720, margin: "40px auto", padding: 16 }}>
      <h1>Reparaturanfrage</h1>
      <p>Beschreiben Sie kurz Ihr Anliegen. Wir melden uns schnellstmöglich.</p>

      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: 12, marginTop: 18 }}
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-Mail"
          required
        />

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ihre Nachricht"
          required
          rows={6}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Sende..." : "Anfrage absenden"}
        </button>
      </form>

      {error && (
        <div style={{ marginTop: 12, color: "red" }}>
          ❌ {error}
        </div>
      )}
    </main>
  );
}