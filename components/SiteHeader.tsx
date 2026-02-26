"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/service-ablauf", label: "Ablauf" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function SiteHeader() {
  const pathname = usePathname() || "/";

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        
        {/* Logo / Brand */}
        <Link href="/" className="group">
          <div className="text-base font-semibold tracking-tight text-neutral-900">
            IEB – Industrieelektronik Bonk
          </div>
          <div className="text-xs text-neutral-600">
            Reparatur elektronischer Baugruppen
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm transition ${
                  active
                    ? "text-neutral-900"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-neutral-900" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/anfrage"
          className="hidden rounded-2xl bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:bg-neutral-800 md:inline-flex"
        >
          Anfrage
        </Link>
      </div>
    </header>
  );
}