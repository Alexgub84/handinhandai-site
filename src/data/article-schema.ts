/**
 * JSON-LD for one article page, same shape/style as `organization-schema.ts`.
 * `author` and `publisher` both resolve by `@id` to the single Person and
 * ProfessionalService nodes defined elsewhere, so Google resolves one
 * identity per entity instead of a duplicate per article.
 */
export interface ArticleSchemaInput {
  title: string;
  description: string;
  slug: string;
  publishedAt: Date;
  lastVerified?: Date;
}

export interface ArticleSchemaBase {
  "@context": "https://schema.org";
  "@type": "Article";
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: { "@id": string };
  publisher: { "@id": string };
  mainEntityOfPage: string;
}

export function buildArticleSchema(
  siteOrigin: string,
  entry: ArticleSchemaInput
): ArticleSchemaBase {
  const origin = siteOrigin.replace(/\/$/, "");
  const dateModified = entry.lastVerified ?? entry.publishedAt;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.title,
    description: entry.description,
    datePublished: entry.publishedAt.toISOString(),
    dateModified: dateModified.toISOString(),
    author: { "@id": `${origin}/about#person` },
    publisher: { "@id": `${origin}/#organization` },
    mainEntityOfPage: `${origin}/articles/${entry.slug}/`,
  };
}
