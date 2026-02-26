// components/SiteHeader.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type NavItem = { href: string; label: string };

const NAV: NavItem[] = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/service-ablauf", label: "Ablauf" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function SiteHeader() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  const activeLabel = useMemo(() => {
    const hit = NAV.find((i) => isActive(pathname, i.href));
    return hit?.label;
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
        {/* Brand */}
        <Link href="/" className="min-w-0" onClick={() => setOpen(false)}>
          <div className="truncate text-base font-semibold tracking-tight text-neutral-900">
            IEB – Industrieelektronik Bonk
          </div>
          <div className="truncate text-xs text-neutral-600">
            Reparatur elektronischer Baugruppen · Brandenburg
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 md:flex" aria-label="Hauptnavigation">
          {NAV.map((i) => {
            const active = isActive(pathname, i.href);
            return (
              <Link
                key={i.href}
                href={i.href}
                className={[
                  "rounded-xl px-3 py-2 text-sm transition",
                  active
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900",
                ].join(" ")}
              >
                {i.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Desktop secondary */}
          <Link
            href="/industrieelektronik-reparatur-brandenburg"
            className="hidden rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 hover:bg-neutral-50 md:inline-flex"
          >
            Brandenburg
          </Link>

          {/* Primary CTA */}
          <Link
            href="/anfrage"
            className="hidden items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 md:inline-flex"
          >
            Anfrage
          </Link>

          {/* Mobile: CTA + menu */}
          <Link
            href="/anfrage"
            className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800 md:hidden"
            onClick={() => setOpen(false)}
          >
            Anfrage
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 hover:bg-neutral-50 md:hidden"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden">
          {/* Overlay */}
          <button
            aria-label="Menü schließen"
            className="fixed inset-0 z-40 cursor-default bg-black/30"
            onClick={() => setOpen(false)}
          />
          {/* Panel */}
          <div className="fixed left-0 top-0 z-50 h-full w-[86%] max-w-sm border-r border-neutral-200 bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-4">
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold">Navigation</div>
                <div className="truncate text-xs text-neutral-600">
                  {activeLabel ? `Aktiv: ${activeLabel}` : "IEB – Industrieelektronik Bonk"}
                </div>
              </div>
              <button
                type="button"
                className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm hover:bg-neutral-50"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="px-3 py-3">
              <div className="flex flex-col gap-1">
                {NAV.map((i) => {
                  const active = isActive(pathname, i.href);
                  return (
                    <Link
                      key={i.href}
                      href={i.href}
                      onClick={() => setOpen(false)}
                      className={[
                        "rounded-xl px-3 py-3 text-sm transition",
                        active
                          ? "bg-neutral-900 text-white"
                          : "text-neutral-800 hover:bg-neutral-100",
                      ].join(" ")}
                    >
                      {i.label}
                    </Link>
                  );
                })}
                <Link
                  href="/industrieelektronik-reparatur-brandenburg"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-xl border border-neutral-200 bg-white px-3 py-3 text-sm text-neutral-900 hover:bg-neutral-50"
                >
                  Brandenburg
                </Link>
              </div>

              <div className="mt-4 rounded-xl border border-neutral-200 bg-neutral-50 p-3">
                <div className="text-xs text-neutral-600">Schnellkontakt</div>
                <div className="mt-2 text-sm">
                  <a className="underline" href="tel:+4915125855584">
                    0151-25855584
                  </a>
                  <span className="mx-2 text-neutral-300">|</span>
                  <a className="underline" href="mailto:info@ieb-bonk.de">
                    info@ieb-bonk.de
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}