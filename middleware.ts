import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Wenn jemand /anfrage öffnet, Ticket-Cookie löschen,
  // damit man nicht "festhängt".
  if (req.nextUrl.pathname === "/anfrage") {
    const res = NextResponse.next();
    res.cookies.set("ieb_last_ticket", "", {
      path: "/",
      maxAge: 0,
    });
    return res;
  }

  return NextResponse.next();
}