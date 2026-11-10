# 2026-11-10 — is GitHub's `download_count` trustworthy?

Issue #167. The investigation below is evidence-only — no code was touched to
produce the series. The one code change in this PR (a one-line caveat on
`/stats`) was decided afterward, by the manager, on the strength of this
evidence; it is described at the end, not part of the method.

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

## What moved, and the +2 that lag alone does not explain

The count is **not** frozen: it moved twice during this 30-minute run —
once between T+1 and T+5 (6→7), and again between T+10 and T+20 (7→8).

Only **one** download was made in this entire run (at 12:00:48Z). A count
rising by one, once, with some delay, would be fully explained by lag. A
count rising by **two** while exactly one download happened is an
**unexplained excess of 1** that "GitHub is just slow" does not by itself
account for. Three candidates, none eliminated by each other:

1. **A real stranger downloaded the asset independently**, from the live
   hand-off card on handinhandai.com, sometime in this run's 30-minute
   window. The GitHub releases API gives only the running total — it names
   no downloader, no timestamp, no IP, no referrer per download. **Cannot be
   confirmed or ruled out from the data gathered in this run.** Doing either
   would need this site's own click analytics for that exact window, which
   this evidence run did not query (it was out of scope for this order, and
   reading it now was not part of the method this note is reporting on).
2. **A single `curl -sL` GET was counted twice** — once for the
   `releases/download/...` hop, once for the signed CDN URL it redirects to.
   Exactly one `curl -sL` call was made (confirmed above: one 200, one file
   on disk, one SHA-256). That is the same request shape an ordinary browser
   click produces, so if GitHub double-counted it, every normal download of
   every GitHub release asset would read double — which is not the commonly
   reported behavior of this API. That is a reason to doubt this candidate,
   not proof against it: this run captured no verbose/request-level trace
   of how many hits GitHub's own server logged for the one click made, so
   **it cannot be ruled out from the data in hand**, only argued against.
3. **One of the two pre-baseline genuine downloads landed late, during this
   run's window**, independent of anything done in this run. This is the
   only candidate with direct supporting evidence already inside this
   dataset: the baseline itself (6) was already one higher than the "flat
   at 5" the original observation recorded hours earlier, proving at least
   one of those two earlier downloads had already landed late before this
   run even started. It is plausible the second one landed during the
   30-minute window measured here. But the API gives no per-event
   timestamp — only a running total — so **this cannot be pinned to either
   specific increment (6→7 or 7→8) from the data gathered**, it can only be
   said to be consistent with the one piece of corroborating evidence this
   dataset already contains.

**Net:** none of the three can be ruled out from this run's data, and none
should be picked as "the" answer without that proof. What the data does
support without qualification: the delay is real, it is read on the direct
API call (never through `/stats` or its cache), so it is upstream on
GitHub's side; and the magnitude of the discrepancy (+1 beyond the single
download made) means the dashboard should not present this number as if it
were a precise, current count of real readers.

## Verdict

GitHub's `download_count` is delayed and, on this evidence, also moves by
more than the known download events in a given window — it is not a bug in
this repo's 5-minute `functions/stats.ts` cache (every reading above bypassed
that cache entirely), but it is not a trustworthy exact count either. Per the
manager's decision, the dashboard now carries a one-line caveat next to this
figure instead of presenting a bare number (`functions/stats.ts`, in the
per-guide section): the count lags by tens of minutes and includes downloads
made while testing, so it is a floor on real interest, not a count of
readers.
