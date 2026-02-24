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
      const res = await fetch("http://127.0.0.1:8000/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      // Robust parsing: backend returns JSON, but handle non-JSON too
      let data: ApiSuccess | ApiError | null = null;
      const contentType = res.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        data = { detail: text || "Unerwartete Antwort vom Server." };
      }

      if (!res.ok) {
        const detail =
          (data as ApiError)?.detail ||
          `Fehler vom Server (HTTP ${res.status}).`;
        throw new Error(detail);
      }

      const ticket = (data as ApiSuccess).ticket;
      if (!ticket) throw new Error("Kein Ticket vom Server erhalten.");

      // Optional: reset form
      setName("");
      setEmail("");
      setMessage("");

      router.push(`/anfrage/danke?ticket=${encodeURIComponent(ticket)}`);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Fehler beim Senden der Anfrage.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        maxWidth: 720,
        margin: "40px auto",
        padding: 16,
        fontFamily: "system-ui",
      }}
    >
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>Anfrage</h1>
      <p style={{ marginTop: 0, opacity: 0.85 }}>
        Schreib uns kurz, worum es geht. Du bekommst eine Bestätigung per E-Mail.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: 12, marginTop: 18 }}
      >
        <label style={{ display: "grid", gap: 6 }}>
          <span style={{ fontSize: 14, opacity: 0.85 }}>Name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Max Mustermann"
            required
            minLength={2}
            style={{
              padding: 12,
              borderRadius: 10,
              border: "1px solid #ddd",
            }}
          />
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <span style={{ fontSize: 14, opacity: 0.85 }}>E-Mail</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="max@example.com"
            type="email"
            required
            style={{
              padding: 12,
              borderRadius: 10,
              border: "1px solid #ddd",
            }}
          />
        </label>

        <label style={{ display: "grid", gap: 6 }}>
          <span style={{ fontSize: 14, opacity: 0.85 }}>Nachricht</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Worum geht’s? Was brauchst du? (z. B. Umfang, Termin, Ort, Budget)"
            required
            minLength={10}
            rows={7}
            style={{
              padding: 12,
              borderRadius: 10,
              border: "1px solid #ddd",
              resize: "vertical",
            }}
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: 12,
            borderRadius: 10,
            border: "1px solid #ddd",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Sende..." : "Absenden"}
        </button>
      </form>

      {error && (
        <div
          style={{
            marginTop: 14,
            padding: 12,
            border: "1px solid #ddd",
            borderRadius: 10,
          }}
        >
          ❌ {error}
        </div>
      )}

      <div style={{ marginTop: 18, fontSize: 13, opacity: 0.75 }}>
        Tipp: Wenn du lokal testest, muss das Backend laufen:
        <span style={{ fontFamily: "monospace" }}>
          {" "}
          http://127.0.0.1:8000
        </span>
      </div>
    </main>
  );
}
