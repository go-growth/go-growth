import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function currencyFromCountry(country?: string) {
  if (!country) return "INR";
  if (country.toUpperCase() === "US") return "USD";
  if (country.toUpperCase() === "IN") return "INR";
  return "INR";
}

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const existing = req.cookies.get("gg_currency")?.value;

  if (!existing) {
    const country =
      req.geo?.country ||
      req.headers.get("x-vercel-ip-country") || // works in Vercel
      "IN"; // fallback

    const currency = currencyFromCountry(country);
    res.cookies.set("gg_currency", currency, {
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      sameSite: "lax",
    });

    console.log("🌍 Middleware set gg_currency:", currency);
  } else {
    console.log("✅ Currency cookie already exists:", existing);
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)|api).*)"],
};
