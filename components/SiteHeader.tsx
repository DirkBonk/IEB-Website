
    
  

    
  
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

const NAV = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/service-ablauf", label: "Ablauf" },
  { href: "/reparaturbeispiele", label: "Reparaturbeispiele" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function SiteHeader() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="bg-[#102c40] px-4 py-2 text-center text-xs leading-relaxed text-white">
        Oderaue · Versand nach Absprache · Persönliche Annahme nach Vereinbarung
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" onClick={() => setOpen(false)} className="flex min-w-0 items-center gap-3 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-700">
          <span className="flex h-12 w-14 shrink-0 items-center justify-center rounded-xl bg-[#102c40] text-xl font-bold tracking-tight text-white" aria-hidden="true">IEB<span className="text-teal-300">.</span></span>
          <span>
            <span className="block text-sm font-semibold tracking-tight text-slate-900 sm:text-base">Industrieelektronik Bonk</span>
            <span className="mt-0.5 hidden text-xs text-slate-600 sm:block">Diagnose. Reparatur. Dokumentation.</span>
          </span>
        </Link>
        <nav aria-label="Hauptnavigation" className="hidden items-center gap-5 lg:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} aria-current={active(item.href) ? "page" : undefined}
              className={`border-b-2 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-700 ${active(item.href) ? "border-teal-700 font-semibold text-teal-800" : "border-transparent text-slate-600 hover:border-teal-300 hover:text-teal-800"}`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/anfrage" className="hidden rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 lg:inline-flex">Anfrage →</Link>
        <button ref={toggle} type="button" aria-expanded={open} aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
          className="shrink-0 rounded-lg border border-slate-300 px-3 py-3 text-sm font-semibold text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-700 lg:hidden">
          {open ? "Schließen" : "Menü"}
        </button>
      </div>
      {open && (
        <nav id="mobile-navigation" aria-label="Mobile Hauptnavigation"
          onKeyDown={(event) => { if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); } }}
          className="max-h-[70vh] overflow-y-auto border-t border-slate-200 bg-white px-4 pb-5 pt-2 lg:hidden">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
              aria-current={active(item.href) ? "page" : undefined}
              className={`block rounded-lg px-4 py-3 text-sm ${active(item.href) ? "bg-teal-50 font-semibold text-teal-800" : "text-slate-700 hover:bg-slate-50"}`}>
              {item.label}
            </Link>
          ))}
          <Link href="/anfrage" onClick={() => setOpen(false)} className="mt-3 block rounded-xl bg-teal-700 px-4 py-3 text-center font-semibold text-white hover:bg-teal-800">Reparaturanfrage starten →</Link>
        </nav>
      )}
    </header>
  );
}


