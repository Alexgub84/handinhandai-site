/**
 * Geo-routing middleware for the root path.
 *
 * Behavior on `/`:
 *   1. If the `hiha_lang` cookie is set to `he` or `en`, honor it (the user's
 *      explicit choice always wins over geo).
 *   2. Else look at `request.cf.country` / `CF-IPCountry`:
 *        - `IL`  → serve `/` (Hebrew is the default root)
 *        - other → 302 to `/en/`
 *   3. Bot crawlers (Googlebot, social-card scrapers, etc.) are never
 *      redirected — we don't want to confuse search engines about which URL
 *      canonical-points to which language. Hreflang handles that.
 *   4. Preview deploys (`*.pages.dev`) always serve the requested URL so QA
 *      can hit `/` directly without surprise redirects.
 *   5. Missing `CF-IPCountry` → default to EN.
 *
 * All other paths pass through untouched — the URL already encodes the lang.
 */

interface Env {}

const BOT_UA_PATTERNS = [
  "googlebot",
  "bingbot",
  "duckduckbot",
  "baiduspider",
  "yandexbot",
  "applebot",
  "whatsapp",
  "facebookexternalhit",
  "facebot",
  "twitterbot",
  "slackbot",
  "linkedinbot",
  "telegrambot",
  "discordbot",
  "skypeuripreview",
  "pinterest",
];

function isBot(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return BOT_UA_PATTERNS.some((pattern) => ua.includes(pattern));
}

function readLangCookie(cookieHeader: string | null): "he" | "en" | null {
  if (!cookieHeader) return null;
  // Simple parse — we only care about hiha_lang.
  for (const part of cookieHeader.split(";")) {
    const [rawName, ...rest] = part.split("=");
    if (!rawName) continue;
    if (rawName.trim() === "hiha_lang") {
      const value = rest.join("=").trim();
      if (value === "he" || value === "en") return value;
    }
  }
  return null;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, next } = context;
  const url = new URL(request.url);

  // Only act on the root path. Everything else (incl. /en/, /fitness-studio, /wa/*) passes through.
  if (url.pathname !== "/") {
    return next();
  }

  // Preview deploys: don't redirect, let QA hit whatever URL they typed.
  if (url.hostname.endsWith(".pages.dev")) {
    return next();
  }

  const userAgent = request.headers.get("user-agent") ?? "";
  if (isBot(userAgent)) {
    return next();
  }

  const cookieLang = readLangCookie(request.headers.get("cookie"));

  let serveLang: "he" | "en";
  if (cookieLang) {
    serveLang = cookieLang;
  } else {
    // Cloudflare provides request.cf.country at runtime; fall back to the header.
    const cfCountry =
      ((request as unknown as { cf?: { country?: string } }).cf?.country) ||
      request.headers.get("cf-ipcountry") ||
      "";
    serveLang = cfCountry.toUpperCase() === "IL" ? "he" : "en";
  }

  if (serveLang === "en") {
    const redirect = new URL("/en/", url);
    return new Response(null, {
      status: 302,
      headers: {
        Location: redirect.toString(),
        "Cache-Control": "no-store",
        Vary: "CF-IPCountry, Cookie",
      },
    });
  }

  // Serve the Hebrew root, but make sure caches vary on the geo signal + cookie.
  const response = await next();
  const headers = new Headers(response.headers);
  headers.set("Vary", "CF-IPCountry, Cookie");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
};
