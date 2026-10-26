# Manual step: redirect `www.handinhandai.com` to the apex

This redirect cannot live in this repo. `public/_redirects` and any Cloudflare
Pages `_headers`/`_redirects` file only match on request *path*, never on
*hostname* — every existing rule in `public/_redirects` is a bare path with no
scheme/host, and a live audit showed `www.handinhandai.com` serving the full,
byte-near-identical site instead of redirecting. Nothing in `wrangler.toml`
configures custom domains either (it only has `name` /
`compatibility_date` / `pages_build_output_dir`). So the fix is a one-time
manual step in the Cloudflare dashboard.

## Steps

1. Confirm first, in the Cloudflare dashboard, whether `www.handinhandai.com`
   is attached as a second custom domain on the `handinhandai-site` Pages
   project (Pages project -> Custom domains) or is a plain DNS record pointing
   elsewhere. The rule below works either way, as long as the zone's Rules
   engine sees the request before Pages serves it, which is the default.
2. Cloudflare dashboard -> `handinhandai.com` zone -> Rules -> Redirect Rules
   -> Create rule (Single Redirect):
   - Rule name: `www to apex`
   - When incoming requests match: **Hostname equals** `www.handinhandai.com`
   - Then: **Dynamic** redirect to expression
     `concat("https://handinhandai.com", http.request.uri.path)`
   - Status code: `301`
   - Preserve query string: **on**
3. Save and deploy the rule, then verify with:

   ```
   curl -sI https://www.handinhandai.com/
   ```

   Expect `HTTP/2 301` and `location: https://handinhandai.com/`.

## Status

Not yet applied as of this branch (issue #75). The in-repo part of that issue
(preview `X-Robots-Tag: noindex`, deleting `/og-preview` and
`public/alex.jpg`) ships without this step; apply it separately in the
Cloudflare dashboard whenever convenient, then run the verification `curl`
above to confirm.
