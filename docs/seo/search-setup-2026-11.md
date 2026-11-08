# Search-engine registration — 2026-11-04

Done in Alex's own Chrome, signed in as `alexg@handinhandai.com` (the Google
account the Search Console property is actually verified under — the default
`alex.gub@gmail.com` session has no access to it). Screenshots for every step
are in `local/verify/search-setup/` (not committed).

## 1. Google Search Console

Property: `https://search.google.com/search-console` → `handinhandai.com`.

- **Property type**: Domain property (`sc-domain:handinhandai.com`). It is the
  only property on the account. Screenshot: `01-property-type-domain.jpg`.
- **Sitemap**: already submitted before this session — no action needed.
  `https://handinhandai.com/sitemap-index.xml`, type "Sitemap index",
  submitted 26 Oct 2026, last read 31 Oct 2026, status **Success**, 4
  discovered pages, 0 videos. Screenshot: `02-sitemaps.jpg`.
- **URL Inspection — homepage** (`https://handinhandai.com/`, tested 4 Nov
  2026): **indexed** ("URL is on Google"). No action needed. Screenshot:
  `04-url-inspect-homepage-indexed.jpg`.
- **URL Inspection — `/articles/`** (tested 4 Nov 2026): **not indexed**
  ("URL is unknown to Google", no referring sitemap detected despite being in
  sitemap-index.xml). Clicked **Request Indexing** → Google ran a live test
  and **rejected the request**: `Page cannot be indexed: Excluded by
  'noindex' tag`. See "blocked" section below — this is a real bug, not a
  tool failure. Screenshots: `05-url-inspect-articles-not-indexed.jpg`,
  `06-articles-indexing-request-rejected.jpg`, `07-articles-live-test-noindex.jpg`.
- **Pages report** (window ending 23 Oct 2026, last update shown in GSC):
  **3 indexed**, **33 not indexed**, 4 reasons:
  - Alternative page with proper canonical tag — 18
  - Page with redirect — 13
  - Blocked by robots.txt — 1
  - Duplicate, Google chose different canonical than user — 1
  These are almost certainly legacy/retired routes (`/en/*`, `/fitness-*`,
  `/examples`, etc.) now 301-redirected or canonicalised away, which is
  expected and not an error. Screenshot: `03-pages-not-indexed.jpg`.
- **Security issues**: none detected (as of 4 Nov 2026). Screenshot:
  `08-security-issues-none.jpg`.
- **Manual actions**: none detected (as of 4 Nov 2026). Screenshot:
  `09-manual-actions-none.jpg`.
- `/app-publishing/` was not touched anywhere in this session — not
  submitted, not inspected, not requested for indexing, per instruction.

## 2. Bing Webmaster Tools

`https://www.bing.com/webmasters`, signed in with the active Google session
for `alexg@handinhandai.com` — no DNS or Cloudflare changes.

- Used **Import from Google Search Console**: Bing found 1 importable site
  and added `handinhandai.com`, verification carried across automatically.
  Screenshot: `10-bing-site-added.jpg`.
- The import reported 0 sitemaps for the site, so the sitemap was submitted
  manually: `https://handinhandai.com/sitemap-index.xml`, submitted 4 Nov
  2026, status **Processing** as of this session (first-run status, normal —
  check back in a day or two). Screenshot: `11-bing-sitemap-submitted.jpg`.
- No pages indexed by Bing yet ("No pages found" in the dashboard) — expected
  immediately after adding a new site.

## 3. Rich Results Test (structured data)

`https://search.google.com/test/rich-results`.

- **Homepage** (`https://handinhandai.com/`, tested 4 Nov 2026, 12:24:38):
  **2 valid items detected** — `Organisation` (0 issues) and
  `Local businesses` / `ProfessionalService` (valid, with 3 **non-critical**
  warnings, all optional fields):
  - `Missing field 'telephone' (optional)`
  - `Missing field 'address' (optional)`
  - `Missing field 'priceRange' (optional)`
  No errors. Screenshots: `12-rich-results-homepage-overview.jpg`,
  `13-rich-results-homepage-localbusiness.jpg`.
- **`/articles/`** (tested 4 Nov 2026, 12:26:18): **"URL is not available to
  Google — it cannot be tested."** Crawl detail: `Indexing allowed? No:
  'noindex' detected in 'robots' meta tag`. Same root cause as the GSC
  rejection above. The tool still showed the site-wide `Organisation` /
  `Local businesses` structured data (same JSON-LD present on every page),
  but could not evaluate anything /articles/-specific because the crawl is
  blocked. Screenshots: `14-rich-results-articles-not-available.jpg`,
  `15-rich-results-articles-noindex-detail.jpg`.

## Code bug found (not fixed in this session — read-only task)

`https://handinhandai.com/articles/` currently serves
`<meta name="robots" content="noindex">` on the live site. Verified
independently with `curl`:

```
$ curl -s https://handinhandai.com/articles/ | grep -io '<meta name="robots"[^>]*>'
<meta name="robots" content="noindex">
```

Checked against the other four pages this task names as indexable — only
`/articles/` has this problem:

```
/               → index, follow, max-image-preview:large   (correct)
/about/         → (no robots meta — defaults to index)      (correct)
/articles/      → noindex                                   (BUG)
/privacy-sasha/ → (no robots meta)                           (correct)
/terms/         → (no robots meta)                           (correct)
/app-publishing/→ noindex, nofollow                          (correct, intentional)
```

This is why Google has never indexed `/articles/`, why the Request Indexing
call was rejected, and why Rich Results Test refuses to crawl it. Likely a
leftover `noindex` from when the page was still in development, never
removed when it went live. Needs a one-line fix in the page's frontmatter/
`<head>` logic wherever `/articles/` sets its robots meta — out of scope for
this session (registration only).

## What is pending with Google and Bing

- Google: indexing of `/articles/` is still blocked until the `noindex` tag
  is removed; after that, re-run URL Inspection → Request Indexing.
- Google: the other 4 live pages are either already indexed (homepage) or
  were never individually inspected in this session (`/about/`,
  `/privacy-sasha/`, `/terms/`) — worth a follow-up inspection pass once
  `/articles/` is fixed.
- Bing: sitemap status was "Processing" at the end of this session — normal,
  resolves on its own within a day or so.

## What remains blocked and why

Nothing was blocked by a missing login — the active Google session covered
both Google Search Console and the Bing "Sign in with Google" / "Import from
GSC" path, so all three jobs ran end to end. The only blocker found is the
code bug above (`/articles/` noindex), which stopped Google from accepting
the indexing request for that one page.
