# Fact-check: web-app-to-store-shell guide (issue #210, Gate 2)

Checked on 2026-11-13. Vendor pages only (Chrome for Developers,
Android Developers, Google Play Console Help, Apple Developer / App
Store Connect Help, WebKit/Safari Web Content Guide). Blog posts,
GitHub issues and search-result summaries were used only to locate the
right official page or to flag a gap — never as evidence. Every
CONFIRMED verdict below quotes the vendor's own current page, fetched
today, with the URL and date read. First-hand facts already recorded in
`docs/seo/capability-ledger.md` section A4 (the Koma build) are marked
as such and not re-presented as vendor-confirmed.

---

## 1. What a Trusted Web Activity is, full-screen rendering, assetlinks.json verification

**Verdict: CONFIRMED**

Definition (exact wording):

> "Trusted Web Activity is a new way to open your web-app content such
> as your Progressive Web App (PWA) from your Android app using a
> protocol based on Custom Tabs."

Full-screen, no browser UI (exact wording, two independent pages):

> "they're rendered by the user's browser, in exactly the same way as a
> user would see it in their browser except they are run fullscreen."

> "You can use a Trusted Web Activity for your Android App to launch a
> full screen browser tab, without any browser UI."

Verification mechanism (exact wording):

> "the app and the site it opens are expected to come from the same
> developer. (This is verified using Digital Asset Links.)"

Fallback on failed verification (exact wording):

> "If verification fails, the browser falls back to displaying your
> website as a Custom Tab."

The file path itself (exact wording):

> "you'll need to add the appropriate key to your `assetlinks.json`
> file. Then upload it to your website at `.well-known/assetlinks.json`"

Sources:
- [Overview](https://developer.chrome.com/docs/android/trusted-web-activity/overview) — Chrome for Developers. Read 2026-11-13.
- [Quick Start](https://developer.chrome.com/docs/android/trusted-web-activity/quick-start) — Chrome for Developers. Read 2026-11-13.
- [Android for web developers](https://developer.chrome.com/docs/android/trusted-web-activity/android-for-web-devs) — Chrome for Developers. Read 2026-11-13.

---

## 2. The certificate the phone checks is the Play App Signing certificate, not the upload key

**Verdict: CONFIRMED**

Exact wording (Android Developers):

> "Google uses the upload certificate to verify your identity, and
> signs your APK(s) with your app signing key for distribution."

> "You can download the certificate for the app signing key and your
> upload key from the Release > Setup > App signing page in the Play
> Console. This is used to register public key(s) with API providers; it's
> intended to be shared, as it does not contain your private key."

Reading across both sentences: the device/Chrome checks the certificate
Google itself generates and holds for re-signing distributed APKs (the
app signing key certificate), not the certificate on the developer's own
upload key — and that app-signing-key certificate is exactly what gets
registered with an "API provider" such as a Digital Asset Links
verification file. Google's page does not use the words "assetlinks.json"
here, but this is the same certificate concept the TWA pages in §1 point
back to via "Digital Asset Links."

Source: [Sign your app](https://developer.android.com/studio/publish/app-signing) — Android Developers. Read 2026-11-13.

---

## 3. Which changes force a new store upload for a TWA (origin, package name, version code)

**Verdict: PARTLY CONFIRMED — no single Google page states this as a closed list, and Google's own target-API-level policy is a fourth, undocumented-in-the-claim trigger. Mark the "exactly three reasons" framing as a first-hand Koma observation, not a vendor citation, and correct it.**

What IS vendor-confirmed, each from its own page, none of them framed by
Google as "the list of reasons a TWA needs a new upload":

- **Package name**: Android's own signing-identity rule means a package
  name cannot be swapped on an existing listing — doing so produces "a
  completely new app," not an update (Android Developers, `app-signing`
  page, read 2026-11-13, carried forward from the 2026-11-04 fact-check
  on this exact point).
- **versionCode**: "make sure that each successive release of your app
  uses a greater value" / "You can't upload an APK to the Play Store
  with a versionCode you have already used for a previous version" —
  [Version your app](https://developer.android.com/studio/publish/versioning), Android Developers (confirmed 2026-11-04 fact-check, re-cited
  here, not re-fetched).
- **Origin**: no vendor page states "changing the origin forces a new
  upload" directly. It follows from §1's own verification mechanism —
  Digital Asset Links ties a specific origin to a specific app package
  via `assetlinks.json` — but no Google or Chrome page spells out "if
  the origin changes, re-upload." **This is a first-hand inference, not
  a vendor-stated fact** — mark it as such if the article uses it.

**What CONTRADICTS the "exactly three reasons... nothing else" framing**:
Google Play's **target API level policy** is a fourth, real forcing
function that has nothing to do with the TWA's origin, package name, or
the developer's own choice to bump a version code:

> "New apps and app updates must target Android 16 (API level 36) or
> higher to be submitted to Google Play."

> "Existing apps must target Android 15 (API level 35) or higher to
> remain available to new users on devices running Android OS higher
> than your app's target API level."

> "When you update your app, you must target Android 16 (API level 36)
> or higher."

A TWA shell whose origin, package name, and version code never change
can still be forced into a rebuild-and-reupload cycle on a roughly
annual cadence purely to keep targeting a current API level, or newly
installing users on newer phones get blocked. The guide must not say "a
new upload is needed for exactly three reasons, nothing else" — that
sentence is contradicted by Google's own published policy.

Source: [Meet Google Play's target API level requirement](https://support.google.com/googleplay/android-developer/answer/11926878) — Play Console Help. Read 2026-11-13.

---

## 4. Internal app sharing requires the app to be published

**Verdict: PARTLY CONFIRMED — vendor wording is more conditional than the Koma ledger's absolute framing**

Exact wording (Play Console Help):

> "An app isn't published to production, or it's only published to a
> testing track that a user doesn't have access to."

This is Google's own stated reason a tester's internal-app-sharing
download fails. Read literally, it is a conditional (OR), not an
absolute "must be in production": an app on ANY testing track — including
an internal or closed test — works for a tester who already has access
to that track. The Koma ledger's framing ("Play explicitly refuses it
… even after accepting the Play Console Terms of Service — the only
route … is adding their exact Google account address to the
internal-testing tester list, with no workaround") is consistent with
this page's second clause (no track access = no download), but the
article should quote Google's own conditional wording rather than
state it as a flat "unreviewed apps can never be shared" rule — the
vendor page does not say that; it says access to a track is what's
missing, not review status specifically.

Source: [About internal app sharing](https://support.google.com/googleplay/android-developer/answer/9303479?hl=en) — Play Console Help. Read 2026-11-13.

---

## 5. Apple's current position on web-wrapper apps — Guideline 4.2 Minimum Functionality

**Verdict: CONFIRMED**

Exact wording, in full, as currently published:

> **4.2 Minimum Functionality**
>
> "Your app should include features, content, and UI that elevate it
> beyond a repackaged website. If your app is not particularly useful,
> unique, or 'app-like,' it doesn't belong on the App Store. If your
> App doesn't provide some sort of lasting entertainment value or
> adequate utility, it may not be accepted. Apps that are simply a song
> or movie should be submitted to the iTunes Store. Apps that are
> simply a book or game guide should be submitted to the Apple Books
> Store."
>
> "**4.2.2** Other than catalogs, apps shouldn't primarily be marketing
> materials, advertisements, web clippings, content aggregators, or a
> collection of links."
>
> "**4.2.3 (i)** Your app should work on its own without requiring
> installation of another app to function."
>
> "**4.2.6** Apps created from a commercialized template or app
> generation service will be rejected unless they are submitted
> directly by the provider of the app's content. These services should
> not submit apps on behalf of their clients and should offer tools
> that let their clients create customized, innovative apps that
> provide unique customer experiences. Another acceptable option for
> template providers is to create a single binary to host all client
> content in an aggregated or 'picker' model…"

This is the clause the guide must get right: the operative phrase is
"elevate it beyond a repackaged website" in 4.2's own opening sentence,
sharpened by 4.2.2's ban on apps that are mainly "web clippings," and by
4.2.6 for anyone publishing this kind of app on behalf of a third
party (exactly Hand in Hand AI's own app-publishing-service position,
already recorded in capability-ledger A1/A2).

Source: [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) — Apple Developer. Read 2026-11-13.

---

## 6. Whether Apple offers a TWA equivalent, and the honest route for an iOS shell today

**Verdict: NOT FOUND (no Apple TWA equivalent exists) — the three honest routes are vendor-sourced individually, with one asymmetry the article must state**

No Apple Developer page describes anything resembling Android's TWA —
an App-Store-distributed shell that renders live web content full
screen under a verified-origin trust relationship. Apple's own closest
mechanism is a **Home Screen web app**, which is not an App Store
listing at all:

> "A web application is designed to look and behave in a way similar to
> a native application—for example, it is scaled to fit the entire
> screen on iOS."

> "When you use this standalone mode, Safari is not used to display the
> web content—specifically, there is no browser URL text field at the
> top of the screen or button bar at the bottom of the screen. Only a
> status bar appears at the top of the screen."

This is visually close to a TWA (full screen, no browser chrome) but
the install path is fundamentally different: a person adds it from
Safari's own share sheet ("Add to Home Screen"), never through the App
Store, never reviewed, and not discoverable by search. That is the
asymmetry the guide must state plainly if it compares the two
platforms: **Android's TWA ships through the Play Store listing;
Apple's nearest equivalent explicitly does not use the App Store at
all.**

The three honest routes for an iOS presence around a web app, each
grounded in a vendor source already cited in this file, with no added
opinion:
1. **A native app with a WKWebView wrapper** — permitted, but it is
   judged against Guideline 4.2 (§5 above) exactly like any other app;
   Apple states no exemption for a web-content wrapper.
2. **A Home Screen web app installed from Safari** — vendor-documented
   above; not on the App Store, not reviewed, not store-discoverable.
3. **A real native app** — no vendor citation needed; this is simply
   "build the thing natively," outside the scope of a "wrapper" claim.

Source: [Configuring Web Applications](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html) — Apple Developer (archived reference page, still live). Read 2026-11-13.

---

## 7. Current developer account fees

**Verdict: CONFIRMED**

Google Play (exact wording):

> "There is a US$25 one-time registration fee."

Source: [Register for a Google Play Developer account](https://support.google.com/googleplay/android-developer/answer/6112435) — Play Console Help. Read 2026-11-13.

Apple Developer Program (exact wording):

> "$99 annual membership"

(A separate Apple Developer Enterprise Program, for private internal
distribution only, is listed on the same page at "$299/year" — not
relevant to a public App Store listing and should not appear in the
guide unless the guide specifically covers enterprise/internal
distribution.)

Source: [Apple Developer Program](https://developer.apple.com/programs/) — Apple Developer. Read 2026-11-13.

---

## Claims the article must NOT make

- **Must not say** "a new TWA upload is needed for exactly three
  reasons — origin, package name, or version code — and nothing else."
  Google's own target-API-level policy (§3) is a documented fourth
  trigger with no connection to any of those three. Say instead: these
  three are the ones a developer controls directly; Google's target-API
  policy can additionally force a rebuild on its own schedule regardless
  of what the developer changes.
- **Must not say** "changing the web app's origin requires a new Play
  Store upload" as a vendor-stated fact. No Google or Chrome page says
  this; it is a first-hand inference from how Digital Asset Links
  verification works (§3), and must be labelled as such if used at all.
- **Must not say** "internal app sharing refuses any app that hasn't
  completed store review" as a flat rule. Google's own page conditions
  the failure on track access, not review status (§4) — an app on a
  closed/internal testing track that a tester already has access to is
  not blocked by the wording Google actually publishes.
- **Must not say** Apple has "a Trusted Web Activity equivalent" or
  "an App-Store-distributed web-wrapper option" in any form. No such
  thing is documented anywhere on developer.apple.com (§6); the nearest
  analog (Home Screen web app) is explicitly not an App Store listing.
- **Must not quote** Guideline 4.2 selectively in a way that omits its
  opening sentence ("elevate it beyond a repackaged website") — that
  sentence, not a sub-clause number alone, is the operative wording for
  this guide's whole premise (§5).
- **Must not state** the Apple Developer Enterprise Program fee
  ($299/year) as if it were the relevant fee for a public App Store
  listing — it is a different program for internal-only distribution
  (§7).
