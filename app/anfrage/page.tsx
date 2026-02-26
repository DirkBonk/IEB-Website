// app/anfrage/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PageShell from "../../components/PageShell";

type FormState = {
  name: string;
  firma: string;
  email: string;
  telefon: string;
  baugruppe: string;
  fehlerbild: string;
  dringlichkeit: "Normal" | "Express" | "Unklar";
};

const initialState: FormState = {
  name: "",
  firma: "",
  email: "",
  telefon: "",
  baugruppe: "",
  fehlerbild: "",
  dringlichkeit: "Normal",
};

export default function AnfragePage() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // ✅ Passe Keys hier an, falls deine API andere Namen erwartet
      const payload = {
        name: form.name,
        company: form.firma,
        email: form.email,
        phone: form.telefon,
        assembly: form.baugruppe,
        message: form.fehlerbild,
        urgency: form.dringlichkeit,
      };

      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || "Senden fehlgeschlagen");
      }

      // API macht Redirect Cookie-Flow -> danke
      router.push("/anfrage/danke");
    } catch (err: any) {
      setError(err?.message ?? "Unbekannter Fehler");
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageShell>
      <header className="max-w-3xl">
        <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700">
          Ticketnummer automatisch · Bestätigung per E-Mail
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          Reparaturanfrage
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-neutral-700">
          Senden Sie uns die wichtigsten Eckdaten. Je besser die Infos, desto
          schneller die Diagnose. Fotos/Typenschild können Sie später per Reply
          auf die Bestätigungs-Mail nachreichen.
        </p>

        <p className="mt-4 text-neutral-700">
          Ablauf:{" "}
          <Link className="underline font-medium" href="/service-ablauf">
            Service & Ablauf →
          </Link>
        </p>
      </header>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {/* Form */}
        <div className="lg:col-span-2 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-neutral-900">
                  Ansprechpartner*
                </label>
                <input
                  className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none focus:border-neutral-900"
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-neutral-900">
                  Firma (optional)
                </label>
                <input
                  className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none focus:border-neutral-900"
                  value={form.firma}
                  onChange={(e) => update("firma", e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-neutral-900">
                  E-Mail*
                </label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none focus:border-neutral-900"
                  required
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-neutral-900">
                  Telefon (optional)
                </label>
                <input
                  className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none focus:border-neutral-900"
                  value={form.telefon}
                  onChange={(e) => update("telefon", e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-neutral-900">
                  Baugruppe / Gerät*
                </label>
                <input
                  className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none focus:border-neutral-900"
                  placeholder="z. B. Steuerung XY, Netzteil, Umrichter…"
                  required
                  value={form.baugruppe}
                  onChange={(e) => update("baugruppe", e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-neutral-900">
                  Dringlichkeit
                </label>
                <select
                  className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none focus:border-neutral-900"
                  value={form.dringlichkeit}
                  onChange={(e) =>
                    update("dringlichkeit", e.target.value as any)
                  }
                >
                  <option value="Normal">Normal</option>
                  <option value="Express">Express (nach Absprache)</option>
                  <option value="Unklar">Unklar</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-neutral-900">
                Fehlerbeschreibung*
              </label>
              <textarea
                className="mt-2 min-h-[140px] w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none focus:border-neutral-900"
                required
                value={form.fehlerbild}
                onChange={(e) => update("fehlerbild", e.target.value)}
                placeholder="Symptom, wann tritt es auf, ggf. Messwerte, Umfeldbedingungen…"
              />
              <p className="mt-2 text-xs text-neutral-600">
                Tipp: Typenschild/Fotos können Sie später per Antwort auf die
                Bestätigungs-Mail nachreichen.
              </p>
            </div>

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-neutral-900 px-6 py-3 text-white shadow-sm hover:bg-neutral-800 disabled:opacity-60"
            >
              {loading ? "Senden…" : "Anfrage senden →"}
            </button>
          </form>
        </div>

        {/* Sidebar */}
        <aside className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
          <h2 className="text-lg font-semibold">Was passiert danach?</h2>
          <ul className="mt-3 space-y-3 text-sm text-neutral-700">
            <li>✅ Ticketnummer wird erzeugt</li>
            <li>✅ Bestätigung per E-Mail</li>
            <li>✅ Abstimmung zu Diagnose/Kostenvoranschlag</li>
            <li>✅ Reparatur nach Freigabe</li>
            <li>✅ Rückversand inkl. Dokumentation</li>
          </ul>

          <div className="mt-6 rounded-xl border border-neutral-200 bg-white p-4">
            <div className="text-xs text-neutral-600">Schnellkontakt</div>
            <div className="mt-2 text-sm">
              <a className="underline font-medium" href="tel:+4915125855584">
                0151-25855584
              </a>
              <div className="mt-1">
                <a
                  className="underline font-medium"
                  href="mailto:info@ieb-bonk.de"
                >
                  info@ieb-bonk.de
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}