// frontend/components/SiteHeader.tsx
import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/service-ablauf", label: "Service & Ablauf" },
];

export default function SiteHeader() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(11,15,25,0.72)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 14,
        }}
      >
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: 12 }}
          aria-label="Startseite"
        >
          <Image
            src="/logo.png"
            alt="IEB – Industrieelektronik Bonk"
            width={120}
            height={52}
            priority
          />
        </Link>

        <nav
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="small">
              {i.label}
            </Link>
          ))}

          <Link href="/anfrage" className="btn btn-primary">
            Reparaturanfrage
          </Link>
        </nav>
      </div>
    </header>
  );
}