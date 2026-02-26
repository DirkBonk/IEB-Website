import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-semibold">IEB – Industrieelektronik Bonk</div>
            <p className="mt-3 text-sm text-neutral-700">
              Neugauler Str. 12<br />
              16259 Oderaue
            </p>
            <p className="mt-2 text-sm text-neutral-700">
              <a className="underline" href="mailto:info@ieb-bonk.de">info@ieb-bonk.de</a>
              <br />
              <a className="underline" href="tel:+4915125855584">0151-25855584</a>
            </p>
          </div>

          <div>
            <div className="font-semibold">Navigation</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li><Link className="underline" href="/leistungen">Leistungen</Link></li>
              <li><Link className="underline" href="/service-ablauf">Service-Ablauf</Link></li>
              <li><Link className="underline" href="/industrieelektronik-reparatur-brandenburg">Brandenburg</Link></li>
              <li><Link className="underline font-medium" href="/faq">FAQ</Link></li>
              <li><Link className="underline" href="/kontakt">Kontakt</Link></li>
              <li><Link className="underline" href="/anfrage">Anfrage</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold">Rechtliches</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li><Link className="underline" href="/impressum">Impressum</Link></li>
              <li><Link className="underline" href="/datenschutz">Datenschutz</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-200 pt-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} IEB – Industrieelektronik Bonk
        </div>
      </div>
    </footer>
  );
}