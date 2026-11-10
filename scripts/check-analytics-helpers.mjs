#!/usr/bin/env node

/**
 * Standalone acceptance check for the pure helpers behind the issue #149 /
 * #155-funnel analytics work: `functions/lib/environment.mjs` and
 * `functions/lib/github-releases.mjs`. Plain `node`, no wrangler/D1/astro
 * involved — same pattern as `scripts/check-articles.mjs` /
 * `scripts/check-rtl.mjs`: a short list of fixed cases, `process.exitCode =
 * 1` on any failure, prints `ok` on success.
 *
 * Not wired into `npm run build`'s chain by this order — a standalone
 * acceptance command, run by hand before reporting (see the work order's
 * Acceptance criteria).
 */

import { classifyEnvironment } from '../functions/lib/environment.mjs';
import { formatDownloadCount, sumDownloads } from '../functions/lib/github-releases.mjs';

const failures = [];

function check(label, actual, expected) {
  const same = Object.is(actual, expected);
  if (!same) failures.push(`${label}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
}

// classifyEnvironment
check('classifyEnvironment(production host)', classifyEnvironment('handinhandai.com'), 'live');
check(
  'classifyEnvironment(pages.dev preview alias)',
  classifyEnvironment('handinhandai-site.pages.dev'),
  'preview',
);
check('classifyEnvironment(localhost)', classifyEnvironment('localhost:8788'), 'preview');

// formatDownloadCount
check('formatDownloadCount(42)', formatDownloadCount(42), '42');
const unavailable = formatDownloadCount(null);
if (!/[-—]/.test(unavailable) || !/github/i.test(unavailable)) {
  failures.push(
    `formatDownloadCount(null): expected a dash plus a note that GitHub did not answer, got ${JSON.stringify(
      unavailable,
    )}`,
  );
}

// sumDownloads — two fake releases sharing one asset name; only the matching
// asset's download_count should be summed, across every release, not just
// the latest.
const fakeReleases = [
  { tag_name: 'v1.0.0', assets: [{ name: 'store-publishing.zip', download_count: 3 }] },
  {
    tag_name: 'v1.1.0',
    assets: [
      { name: 'store-publishing.zip', download_count: 5 },
      { name: 'meta-whatsapp-cloud-api.zip', download_count: 9 },
    ],
  },
];
check('sumDownloads(store-publishing.zip)', sumDownloads(fakeReleases, 'store-publishing.zip'), 8);
check('sumDownloads(meta-whatsapp-cloud-api.zip)', sumDownloads(fakeReleases, 'meta-whatsapp-cloud-api.zip'), 9);
check('sumDownloads(no matching asset)', sumDownloads(fakeReleases, 'nothing-matches.zip'), 0);

if (failures.length > 0) {
  console.error('check-analytics-helpers: found failures:\n');
  for (const failure of failures) console.error(`  - ${failure}`);
  console.error(`\n${failures.length} failure(s) found.`);
  process.exitCode = 1;
} else {
  console.log('ok');
}
