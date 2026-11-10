# 2026-11-10 — is GitHub's `download_count` trustworthy?

Issue #167. Evidence only; no code changed.

## The observation to explain

Earlier on 2026-11-10, 2 genuine downloads of `meta-whatsapp-cloud-api.zip` were
made from the live hand-off card on handinhandai.com (both real ZIP files, 15 KB,
valid header). Before and after, both `/stats` and a direct call to GitHub's
releases API reported the same total of 5 for that asset, unchanged, including
after a wait.

Two candidate explanations were on the table:

1. `functions/stats.ts`'s 5-minute module-scope cache — but that cannot explain
   a flat *direct* API call, which bypasses that cache entirely.
2. GitHub's own `download_count` is delayed or doesn't count every download path.

## Method

All counts below are read straight from GitHub's REST API, never through
`/stats` or any cache in this repo:

```
GET https://api.github.com/repos/Alexgub84/claude-skills/releases
```

Header on every call: `User-Agent: hih-evidence-check` (required by GitHub
for unauthenticated requests; no auth token used).

### 1. Baseline — every asset, every release

Read at **2026-11-10T12:00:38Z**:

| Release | Asset | `download_count` |
|---|---|---|
| v1.0.0 (id 440066238, published 2026-11-10T07:40:15Z) | `meta-whatsapp-cloud-api.zip` | 6 |
| v1.0.0 | `store-publishing.zip` | 5 |

Note this baseline (6) is already higher than the "flat at 5" the original
observation reported hours earlier — so between that observation and this
baseline, the count had already moved on its own, with no action from this run.

### 2. One download, made exactly once

- URL fetched: `https://github.com/Alexgub84/claude-skills/releases/download/v1.0.0/meta-whatsapp-cloud-api.zip`
  (the asset's `browser_download_url`, read off the same API response above).
- Method: `curl -sL` (full GET, following GitHub's redirect to its signed
  `release-assets.githubusercontent.com` CDN URL), body written to disk, no
  `HEAD`, no `assets/` API endpoint.
- Result: HTTP 200, 15,172 bytes written, file confirmed as a valid ZIP
  (`PK\x03\x04` header; `file` reports "Zip archive data").
- Completed at **2026-11-10T12:00:48Z** (this is the clock the poll schedule
  below is measured from). No second download was made at any point in this run.

### 3. Poll series (direct API call, same URL as the baseline)

| Checkpoint | UTC time | `meta-whatsapp-cloud-api.zip` `download_count` | `store-publishing.zip` (control, untouched) |
|---|---|---|---|
| Baseline (pre-download) | 2026-11-10T12:00:38Z | 6 | 5 |
| T+1 min | 2026-11-10T12:01:48Z | 6 | — |
| T+5 min | 2026-11-10T12:05:48Z | **7** | — |
| T+10 min | 2026-11-10T12:10:48Z | 7 | — |
| T+20 min | 2026-11-10T12:20:48Z | **8** | — |
| T+30 min | 2026-11-10T12:30:48Z | 8 | 5 (confirmed unchanged) |

The untouched control asset (`store-publishing.zip`) read 5 at the start and
5 at the end of the run — ruling out a transient API-wide glitch; only the
asset that was actually downloaded moved.

## What moved, and what that does not prove

The count is **not** frozen: it moved twice during this 30-minute run —
once between T+1 and T+5 (6→7), and again between T+10 and T+20 (7→8).

Only **one** download was made in this entire run (at 12:00:48Z), yet the
counter rose by **two**. That second rise cannot be attributed to this run's
download — it either reflects GitHub finally crediting one of the two
genuine downloads from earlier in the day that the original observation
caught mid-delay, or independent organic traffic (the hand-off card is live
on the production site). Either way, the counter's updates are not
synchronous with the download event and do not arrive in lockstep, one
increment per event, within a predictable window — they are delayed and
appear to be applied out of step with when the download actually happened.

This was read from the **direct API call** at every checkpoint, never through
`/stats` or its cache — so the delay is upstream, on GitHub's side, not in
this repo's code.

## Verdict

GitHub's `download_count` itself is delayed/eventually-consistent — our
5-minute `functions/stats.ts` cache is not the cause of the flat reading the
original observation saw, and no code in this repo needs to change.
