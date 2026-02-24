// frontend/components/SiteFooter.tsx
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.10)",
        marginTop: 40,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <div className="small">
          © {new Date().getFullYear()} IEB – Industrieelektronik Bonk ·{" "}
          <a href="mailto:info@ieb-bonk.de">info@ieb-bonk.de</a> ·{" "}
          <a href="tel:+4915125855584">0151-25855584</a> ·{" "}
          <a href="https://www.ieb-bonk.de" target="_blank" rel="noreferrer">
            www.ieb-bonk.de
          </a>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link className="small" href="/impressum">
            Impressum
          </Link>
          <Link className="small" href="/datenschutz">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}