/**
 * Preview-host noindex guard.
 *
 * `handinhandai.com` and its permanent Cloudflare Pages preview alias
 * (`handinhandai-site.pages.dev`) serve the exact same build output — there
 * is no build-time signal that tells them apart. This runs on every request,
 * ahead of static assets and the other Functions (`functions/wa/`,
 * `functions/api/`, `functions/stats.ts`), and is the only place that sees
 * which hostname the request actually arrived on.
 *
 * Production (`handinhandai.com`) must never carry `X-Robots-Tag`. Every
 * other hostname — the preview alias, any future preview deploy — gets
 * `X-Robots-Tag: noindex` so a search engine never indexes a duplicate.
 */

interface Env {}

const PRODUCTION_HOSTNAME = 'handinhandai.com';

export const onRequest: PagesFunction<Env> = async (context) => {
  const response = await context.next();

  const { hostname } = new URL(context.request.url);
  if (hostname === PRODUCTION_HOSTNAME) {
    return response;
  }

  const noindexResponse = new Response(response.body, response);
  noindexResponse.headers.set('X-Robots-Tag', 'noindex');
  return noindexResponse;
};
