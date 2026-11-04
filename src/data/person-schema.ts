import { legal } from "@/data/site-contact";

/**
 * Shared JSON-LD identity for the author, same `@id` everywhere an article
 * points at it (`author.@id` in `article-schema.ts`). `sameAs` is omitted —
 * same precedent as `organization-schema.ts`: no verified social profile URL
 * exists anywhere in the repo, and issue #74's ruling forbids inventing one.
 */
export interface PersonSchemaBase {
  "@context": "https://schema.org";
  "@type": "Person";
  "@id": string;
  name: string;
  url: string;
}

export function buildPersonSchema(siteOrigin: string): PersonSchemaBase {
  const origin = siteOrigin.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${origin}/about#person`,
    name: legal.legalName.he,
    url: `${origin}/about`,
  };
}
