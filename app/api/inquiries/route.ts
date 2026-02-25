export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function required(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { detail: "Bitte Name, E-Mail und Nachricht ausfüllen." },
        { status: 400 }
      );
    }

    const SMTP_HOST = required("SMTP_HOST"); // z.B. smtp.gmail.com
    const SMTP_PORT = Number(required("SMTP_PORT")); // 587
    const SMTP_USER = required("SMTP_USER"); // info@... oder gmail
    const SMTP_PASSWORD = required("SMTP_PASSWORD"); // App Passwort
    const MAIL_FROM_ADDRESS = required("MAIL_FROM_ADDRESS"); // Absender
    const ADMIN_EMAIL = required("ADMIN_EMAIL"); // Empfänger (du)

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465, // 465=true, 587=false
      auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    });

    const ticket = Math.floor(10000000 + Math.random() * 90000000).toString();

    // Mail an dich (Admin)
    await transporter.sendMail({
      from: MAIL_FROM_ADDRESS,
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: `Neue Reparaturanfrage (${ticket}) – ${name}`,
      text:
        `Ticket: ${ticket}\n` +
        `Name: ${name}\n` +
        `E-Mail: ${email}\n\n` +
        `Nachricht:\n${message}\n`,
    });

    // Bestätigung an Kunden
    await transporter.sendMail({
      from: MAIL_FROM_ADDRESS,
      to: email,
      subject: `Ihre Anfrage bei IEB – Ticket ${ticket}`,
      text:
        `Hallo ${name},\n\n` +
        `vielen Dank für Ihre Anfrage. Wir haben sie erhalten.\n` +
        `Ihre Ticketnummer lautet: ${ticket}\n\n` +
        `Wir melden uns schnellstmöglich.\n\n` +
        `IEB – Industrieelektronik Bonk\n` +
        `https://www.ieb-bonk.de\n`,
    });

    return NextResponse.json({ ticket, status: "sent" }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json(
      { detail: `Email-Versand fehlgeschlagen: ${e?.message || String(e)}` },
      { status: 500 }
    );
  }
}