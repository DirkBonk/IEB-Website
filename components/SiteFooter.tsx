
    
  
// components/SiteFooter.tsx
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-700 bg-[#102c40] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold">IEB – Industrieelektronik Bonk</div>
            <p className="mt-3 text-sm leading-relaxed text-teal-200">Persönliche Annahme nach Vereinbarung.<br />Einsendung per Paket nach Absprache.</p>
            <p className="mt-2 text-sm text-slate-200 leading-relaxed">
              Neugauler Str. 12<br />
              16259 Oderaue
            </p>
            <p className="mt-2 text-sm text-slate-200">
              <a className="underline-offset-4 hover:text-teal-200 underline" href="mailto:info@ieb-bonk.de">info@ieb-bonk.de</a>
              <br />
              <a className="underline-offset-4 hover:text-teal-200 underline" href="tel:+4915125855584">0151-25855584</a>
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold">Navigation</div>
            <ul className="mt-2 space-y-2 text-sm text-slate-200">
              <li><Link className="underline-offset-4 hover:text-teal-200 underline" href="/leistungen">Leistungen</Link></li>
              <li><Link className="underline-offset-4 hover:text-teal-200 underline" href="/service-ablauf">Service-Ablauf</Link></li>
              <li><Link className="underline-offset-4 hover:text-teal-200 underline" href="/industrieelektronik-reparatur-brandenburg">Industrieelektronik Reparatur Brandenburg</Link></li>
              <li><Link className="underline-offset-4 hover:text-teal-200 underline font-medium" href="/faq">FAQ</Link></li>
              <li><Link className="underline-offset-4 hover:text-teal-200 underline" href="/referenzen">Praxisbeispiel</Link></li>
              <li><Link className="underline-offset-4 hover:text-teal-200 underline" href="/kontakt">Kontakt</Link></li>
              <li><Link className="underline-offset-4 hover:text-teal-200 underline" href="/anfrage">Anfrage</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Rechtliches</div>
            <ul className="mt-2 space-y-2 text-sm text-slate-200">
              <li><Link className="underline-offset-4 hover:text-teal-200 underline" href="/impressum">Impressum</Link></li>
              <li><Link className="underline-offset-4 hover:text-teal-200 underline" href="/datenschutz">Datenschutz</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-6 text-xs text-slate-300">
          © {new Date().getFullYear()} IEB – Industrieelektronik Bonk
        </div>
      </div>
    </footer>
  );
}