import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Decide currency based on country
function currencyFromCountry(country?: string) {
  if (!country) return "INR";
  if (country.toUpperCase() === "US") return "USD";
  if (country.toUpperCase() === "IN") return "INR";
  return "INR";
}

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // 1️⃣ Check for ?currency=USD or ?currency=INR in the URL
  const urlCurrency = req.nextUrl.searchParams.get("currency");

  if (urlCurrency === "USD" || urlCurrency === "INR") {
    res.cookies.set("gg_currency", urlCurrency, {
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      sameSite: "lax",
    });
    console.log("💡 Currency manually set via URL:", urlCurrency);
    return res;
  }

  // 2️⃣ Otherwise, check if cookie already exists
  const existing = req.cookies.get("gg_currency")?.value;
  if (existing) {
    console.log("✅ Currency cookie already exists:", existing);
    return res;
  }

  // 3️⃣ Auto-detect via IP (Vercel Edge geo)
  const country =
    req.geo?.country ||
    req.headers.get("x-vercel-ip-country") ||
    "IN"; // default to India

  const currency = currencyFromCountry(country);

  // 4️⃣ Set cookie if not already present
  res.cookies.set("gg_currency", currency, {
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    sameSite: "lax",
  });

  console.log("🌍 Auto-detected country:", country, "| Currency set:", currency);

  return res;
}

// Run on all pages except static assets / API routes
export const config = {
  matcher: ["/((?!_next|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)|api).*)"],
};
