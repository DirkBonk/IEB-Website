import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ieb-bonk.de"),
  title: {
    default: "IEB – Industrieelektronik Bonk",
    template: "%s | IEB – Industrieelektronik Bonk",
  },
  description:
    "Reparatur & Service für elektronische Baugruppen (Industrie-, Steuer-, Leistungs- und Spezialelektronik). Fehlerdiagnose SMD/THT, Bauteiltausch, Rework – mit Dokumentation und optional Express.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.ieb-bonk.de",
    siteName: "IEB – Industrieelektronik Bonk",
    title: "IEB – Industrieelektronik Bonk",
    description:
      "Reparatur & Service für elektronische Baugruppen. SMD/THT-Diagnose, Bauteiltausch, Rework – mit Dokumentation und optional Express.",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "IEB – Industrieelektronik Bonk",
    description:
      "Reparatur & Service für elektronische Baugruppen. SMD/THT-Diagnose, Bauteiltausch, Rework – optional Express.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <SiteHeader />
        <div className="container">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}