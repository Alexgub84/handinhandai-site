/**
 * Shared JSON-LD identity for the business, consumed by both `SEOHead.astro`
 * (about/terms/privacy-sasha via `Layout.astro`) and `HomeDocument.astro`.
 * One `@id` everywhere so Google resolves one entity, not two that disagree.
 *
 * `sameAs` is intentionally omitted — no LinkedIn/GitHub/Instagram profile URL
 * exists anywhere in the repo yet, and none may be invented (issue #74,
 * manager ruling). Add it here once a real profile URL exists.
 */
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
