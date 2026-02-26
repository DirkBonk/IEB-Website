// app/layout.tsx
import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-white text-neutral-900">
        <SiteHeader />
        <div className="mx-auto max-w-6xl px-4">
          <main className="py-10">{children}</main>
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}