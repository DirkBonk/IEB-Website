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

export const metadata = {
  title: "IEB – Industrieelektronik Bonk",
  description:
    "Reparatur & Service für elektronische Baugruppen in Brandenburg. Industrie-, Steuer- und Leistungselektronik.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "IEB – Industrieelektronik Bonk",
              url: "https://www.ieb-bonk.de",
              telephone: "+49 151 25855584",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Neugauler Str. 12",
                addressLocality: "Oderaue",
                postalCode: "16259",
                addressCountry: "DE",
              },
              areaServed: "Brandenburg",
              description:
                "Reparatur & Service für elektronische Baugruppen, Industrieelektronik und Steuerungstechnik.",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}