/**
 * Shared JSON-LD identity for the business, consumed by both `SEOHead.astro`
 * (about/terms/privacy-sasha via `Layout.astro`) and every page in the
 * homepage design system (`index.astro`, `app-publishing.astro`, … via
 * `HomeDocumentShell.astro`). One `@id` everywhere so Google resolves one
 * entity, not two that disagree.
 *
 * `sameAs` is intentionally omitted — no LinkedIn/GitHub/Instagram profile URL
 * exists anywhere in the repo yet, and none may be invented (issue #74,
 * manager ruling). Add it here once a real profile URL exists.
 */

/** Fallback site origin used when `Astro.site` is unset (e.g. local dev without
 *  `site` configured in astro.config.mjs). Exported once so callers don't each
 *  repeat the literal (issue #82, round 2). */
export const DEFAULT_SITE_ORIGIN = "https://handinhandai.com";

/** `Astro.site` is a `URL | undefined`; this resolves it to a concrete `URL`
 *  using the shared fallback above. */
export function resolveSite(astroSite: URL | undefined): URL {
  return astroSite ?? new URL(DEFAULT_SITE_ORIGIN);
}

export interface OrganizationSchemaBase {
  "@context": "https://schema.org";
  "@type": "ProfessionalService";
  "@id": string;
  name: string;
  alternateName: string;
  url: string;
  logo: string;
}

export function buildOrganizationSchema(siteOrigin: string): OrganizationSchemaBase {
  const origin = siteOrigin.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${origin}/#organization`,
    name: "handinhand",
    alternateName: "HandInHandAI",
    url: `${origin}/`,
    logo: `${origin}/icon-512.png`,
  };
}
