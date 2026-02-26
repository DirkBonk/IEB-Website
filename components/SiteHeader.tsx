"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/service-ablauf", label: "Service-Ablauf" },
  { href: "/industrieelektronik-reparatur-brandenburg", label: "Brandenburg" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

function track(event: string, data?: Record<string, unknown>) {
  try {
    // GA4 / GTM freundlich: dataLayer push, wenn vorhanden
    (window as any).dataLayer?.push({ event, ...data });
  } catch {
    // no-op
  }
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) track("nav_mobile_open");
  }, [open]);

  return (
    <header
      className={[
        "sticky top-0 z-50",
        "bg-white/90 backdrop-blur",
        scrolled ? "border-b border-neutral-200 shadow-sm" : "border-b border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          IEB – Industrieelektronik Bonk
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {NAV.map((i) => (
            <Link key={i.href} href={i.href} className="hover:underline">
              {i.label}
            </Link>
          ))}
          <Link
            href="/anfrage"
            className="rounded-xl bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800"
            onClick={() => track("cta_click", { location: "header_desktop", cta: "anfrage" })}
          >
            Anfrage
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm md:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="flex flex-col gap-3">
              {NAV.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="rounded-xl px-3 py-2 hover:bg-neutral-50"
                  onClick={() => {
                    setOpen(false);
                    track("nav_click", { location: "header_mobile", href: i.href });
                  }}
                >
                  {i.label}
                </Link>
              ))}

              <Link
                href="/anfrage"
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-3 text-white hover:bg-neutral-800"
                onClick={() => {
                  setOpen(false);
                  track("cta_click", { location: "header_mobile", cta: "anfrage" });
                }}
              >
                Reparaturanfrage starten →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}