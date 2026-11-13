# Capability ledger — source material for articles

Inventory of what Alex Guberman (Hand in Hand AI) actually does and can prove,
built for turning into public articles. Each entry: the plain-sentence
capability, the real project that proves it, the hard non-obvious facts a
competitor could not bluff, and whether it is Hebrew-market-specific or
universal.

Sources read: every skill under `~/.claude/skills/` named in the brief
(app-publishing + its six reference files, store-submission, store-release,
koma-release, plumberg-release, plumberg-qa, plumberg-db-update,
push-notifications + its plumberg reference, meta-business-setup + its
reference, meta-waba-per-product, whatsapp-agent-scaffold + its reference,
apple-dsa-trader-verification, bilton-extract, chillist-staging-qa,
railway-deploy, hebrew-document-generator, boss-brain-hand); the
`handinhandai-site` `docs/` handoff, specs, council and seo folders; the
second-brain `knowledge/` index (no file name there named a business
capability or client project, so none was opened, per the brief's own rule).

No product source code was read, as instructed.

---

## CONFIDENTIALITY — read this before writing anything

- **Card 1, construction quality-control client.** Ships on both app stores
  under the client's own developer account. The product name, its real
  domain, any store link, or anything that identifies the client must never
  appear in any article, file name, alt text, or commit. The site's own
  invented hostname (`qc.site-control.co.il`) and generic descriptor
  (`יזם בנייה למגורים`) are the only things that may stand in for it.
- **Card 2, materials-ordering / AI delivery-verification client.** Also
  anonymous, and must read as a **different, unrelated** client from card 1
  (`קבלן ביצוע`, construction and infrastructure) even though both are
  construction-industry. Same rule: no real name, no real domain
  (`orders.site-materials.co.il` is invented).
- **Chillist (card 3) is named and may be shown freely** — Alex cleared this
  2026-10-15. No anonymity constraint.
- **Every app-publishing-service client is client material by default**, the
  moment they make contact: name, business name, product name/domain (if they
  choose anonymity — ask, never assume), bundle id/package name once tied to
  them, any account id, any credential, any demo-account password, personal
  emails/phones, tax/bank details, and any unredacted console screenshot.
  None of it may ever appear in an article, even as a "for example" — this
  class of client has not agreed to anything resembling a case study.
- **No published figure may be invented or extrapolated and presented as
  measured.** Case 2's "1,800+ orders/year" is explicitly a run-rate
  projection from 75 real days, labelled as such; Alex rejected inventing
  usage numbers for Chillist outright when none existed yet. Any article
  reusing these numbers must carry the same honesty: label a projection as a
  projection, and never state a number with no real session/measurement
  behind it.
- **No metrics or store badges on the anonymous cards** (ruling of
  2026-10-16): a figure a reader can't verify costs more trust than it buys,
  and a store badge with no visible app name sends a reader on a search that
  can't succeed. Articles drawing on cases 1 and 2 should talk in terms of
  what the system does, not numbers, unless a client explicitly re-clears
  specific figures for publication.

---

## (a) Store publishing

### A1. Publish a client's own app to Google Play and the Apple App Store as a paid service, without ever holding it on Alex's own account
**Proven by:** the app-publishing service offering (not yet a live client at
time of writing, but fully specified and council-reviewed).
**Hard facts:**
- The account ruling (2 Nov 2026, unanimous across an independent four-model
  review): **no client app is ever hosted on Alex's own verified
  organisation account, on either store** — not even "a vetted few." One
  policy strike on a stranger's app would endanger his own live products
  (Koma, Chillist) sharing that account.
- Google: a **personal** Play developer account created after 13 Nov 2023
  must run a closed test with **12 testers for 14 continuous days**, per
  app, before Google grants production access; one tester uninstalling on
  day 10 resets the clock to zero. A **verified organisation account
  (D-U-N-S)** is exempt. This is the exact pain point competitors (Fiverr
  sellers, app2store.co.il) sell around by publishing from their own account
  — Alex's model instead walks the client through clearing it on their own
  account, because hosting it anywhere else just relocates the liability.
- Apple: **no way around the client's own account, ever** — Apple's
  guideline 5.2.1 requires the IP owner to submit, and 4.2.6 has gotten
  agencies that published many unrelated client apps under one account
  rejected and told to move them. The client pays Apple $99/year, registers
  as an **Individual** (no D-U-N-S needed), and invites Alex as **Admin**
  (App Manager floor) under App Store Connect → Users and Access — never a
  password, in either direction.
- A **developer readiness check** on a real device, before any store work
  starts, is what separates this from a plain uploader: install and run the
  actual build, log in with the demo account, confirm an in-app
  account-deletion path exists, confirm requested permissions match the
  privacy policy, confirm digital purchases go through the store's own IAP
  mechanism (not an external payment link — both stores require this).
- **Compliance gate, run before any payment**: banned categories (gambling,
  adult, crypto trading, consumer loans, medical-claims, brand copycats), no
  live/matching privacy policy, no in-app account deletion, any
  non-client-owned asset — any one of these is a plain decline, stated
  before money changes hands.
- Package name / bundle id lock at the **first upload**, not after a
  version publishes — confirmed with the client before that first upload,
  on both platforms (developer.android.com/studio/publish/app-signing;
  developer.apple.com/help/app-store-connect/transfer-an-app/overview-of-app-transfer —
  checked 2026-11-04).
- The upload keystore (Android) **stays with the client** and the app
  enrolls in **Play App Signing** so Google — not Alex — holds the actual
  signing key; losing the keystore means requesting an upload-key reset in
  Play Console (its own review delay, not instant) rather than losing the
  package name outright — still not something to lose casually
  (developer.android.com/studio/publish/app-signing — checked
  2026-11-04).
- Store review outcome is explicitly never promised — only that the
  submission is done correctly and every rejection is translated and
  resubmitted.
**Market context, verifiable:** the global anchor is $25–100/store on Fiverr
with no Hebrew support and no written agreement; an Israeli direct competitor
(app2store.co.il) charges 2,490 ₪/store or 3,990 ₪ both, confirming a real
Hebrew-speaking market exists and that it prices well above Fiverr. Median.co
sells a similar done-for-you service from $1,490 but only for apps built on
its own platform.
**Hebrew/universal:** Hebrew-market-specific go-to-market (pricing in ILS,
Hebrew listing text, WhatsApp support), but the store mechanics themselves
are universal.

### A2. Diagnose and answer a store rejection in plain language, on both platforms
**Proven by:** app-publishing service design; the Plumberg release runbook's
recorded rejection history.
**Hard facts:**
- Apple's **first-submission rejection is common** — stated to clients
  up front precisely so it doesn't read as failure.
- The client never answers Apple directly; Alex answers only through App
  Store Connect's own reviewer-reply channel. A client who answers Apple
  themselves, or who is routed through personal email, breaks the whole
  model Apple expects (5.2.1: the account holder answers).
- Common, named rejection reasons and their fixes: mockup screenshots → must
  be real captures (Apple rule 2.3.3); privacy-label mismatch → rebuilt from
  a data-inventory file, never from memory; version-string mismatch →
  `CFBundleShortVersionString` must equal the App Store Connect version page
  exactly; missing demo account → a fixed phone + fixed code that never
  rotates; default icon → real icon; "sign-up missing" flagged on an
  invite-only app → answered with the enterprise/company-issued-accounts
  guideline (5.1.1).
- App Store Connect's reply box caps replies at **4,000 characters** — a
  prepared reply that ran to 5,047 characters had to be condensed live on a
  real rejection thread.
- "Resubmit to App Review" stays greyed out on the rejection thread until
  **"Update Review" is pressed on the version page first** — a genuinely
  non-obvious UI trap that stalls a session that doesn't know it.
**Hebrew/universal:** universal mechanics; Hebrew-language translation of
the rejection is the differentiated part of the service.

### A3. Ship a store-build update without re-doing the whole submission
**Proven by:** Plumberg (`com.zinberg.plumberg.app`, App Store id
6812428960), Koma, the generic `store-release` method.
**Hard facts:**
- Every new Android upload needs a **strictly higher versionCode**; every
  new Apple build needs a **strictly higher build number**; keep both
  numbers in step across platforms.
- Apple: a version sitting at **"Pending Developer Release"** blocks every
  newer version from even being created — no "+" appears next to iOS App.
  There is no "hold this one, submit the next build instead" option; it
  must be released or cancelled first. Once in "Prepare for Submission," the
  version string is still an **editable field**, so a stale, unsubmitted
  version can be rolled forward in place (rename the version string, swap
  the build, replace What's New) rather than abandoned.
- Play caps release notes at **500 characters per language**; TestFlight and
  the App Store "What's New" box take the full text — two different
  versions of the same release notes must be kept ready.
- A data-inventory diff must be re-checked on every release: a new
  permission or data type means the Play Data Safety form and Apple App
  Privacy labels must be redone before submission, or the update is
  rejected on a form mismatch.
- A real production incident taught that **a green deploy status does not
  prove a database migration landed**: boot-time health checks never touch
  new columns, so a backend can report SUCCEEDED while every route touching
  the new schema returns 500 for half an hour. Proof has to come from the
  migration ledger or a live request, never from the deploy status alone.
**Hebrew/universal:** universal.

### A4. Build a store listing as a Trusted Web Activity shell around a live web app, with zero store review needed to ship a product change
**Proven by:** Koma (`com.handinhandai.koma`, Hand in Hand AI's own
organisation Play account).
**Hard facts:**
- The Android package is a shell, not a second codebase: Chrome renders the
  live web origin full-screen, verified against the origin via a file the
  origin itself serves (`.well-known/assetlinks.json`). A product change
  reaches every installed phone the moment the web app deploys — no new
  store upload, no review, no reinstall.
- A new store upload is needed for exactly three reasons the developer
  controls directly: the origin changes, the package name changes, or the
  Android version code changes. On top of those three, Google Play's own
  target-API-level policy can additionally force a rebuild and a new upload
  on its own schedule, with no origin, package-name or version-code change
  on the developer's side — "existing apps must target Android 15 (API
  level 35) or higher to remain available to new users on devices running
  Android OS higher than your app's target API level" ([Meet Google Play's
  target API level requirement](https://support.google.com/googleplay/android-developer/answer/11926878) — Play Console Help, read 2026-11-13).
- **The fingerprint two-step that catches everyone once**: Google Play App
  Signing re-signs every uploaded bundle with its own certificate, which is
  what the phone's Chrome actually checks against `assetlinks.json` — not
  the developer's upload-key fingerprint. Until that Play-generated
  certificate is copied into the asset-links file and deployed a second
  time, the installed app still technically works but loses its "trusted"
  address-bar-free appearance (cosmetic, not functional).
- **Internal app sharing was refused for Koma, tried and proved on
  2026-10-27** — Play's exact console message: "The app
  'com.handinhandai.koma' needs to be published before you can use internal
  app sharing." That is a dated first-hand observation for this app, not
  Google's general rule: Google's own wording conditions the failure on
  testing-track access, not on review status — "An app isn't published to
  production, or it's only published to a testing track that a user doesn't
  have access to" ([About internal app sharing](https://support.google.com/googleplay/android-developer/answer/9303479?hl=en) — Play Console Help, read
  2026-11-13). An app on any testing track a tester already has access to is
  not blocked by this wording; what Koma actually hit was the second clause
  (no track access), and the only route onto a tester's phone for an app
  that has never been reviewed is adding their exact Google account address
  to the internal-testing tester list, with no workaround.
- Invitation codes to the real product (as opposed to the store listing
  itself) are generated server-side and delivered **out of band from the
  Play opt-in link, on purpose** — two separate channels meeting on the same
  phone, by design, and the phone number used to generate one is piped in on
  stdin specifically so it never reaches shell history.
- **Apple has no Trusted Web Activity equivalent.** A Home Screen web app
  added from Safari's share sheet looks similar (full screen, no browser
  chrome — "there is no browser URL text field at the top of the screen or
  button bar at the bottom of the screen") but is never distributed through
  the App Store: it is installed from Safari, never reviewed, and not
  store-discoverable ([Configuring Web Applications](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html) — Apple
  Developer, read 2026-11-13). App Store Review Guideline 4.2 (Minimum
  Functionality) is the clause that governs a wrapped website on iOS: "Your
  app should include features, content, and UI that elevate it beyond a
  repackaged website. If your app is not particularly useful, unique, or
  'app-like,' it doesn't belong on the App Store" ([App Review
  Guidelines](https://developer.apple.com/app-store/review/guidelines/) —
  Apple Developer, read 2026-11-13).
**Hebrew/universal:** universal technique (TWA via Bubblewrap), applied here
to an Israeli building-management product.

### A5. Resolve "lost package name forever" and "I need testers but have no Mac/reviewed app yet" before they happen
**Proven by:** Koma, Plumberg, store-submission/store-release method docs.
**Hard facts:**
- If a client loses the Android upload keystore or its password, Play App
  Signing (mandatory for every app created after August 2021) makes it
  recoverable: an upload-key reset request in Play Console, after which
  updates keep shipping under the same package name
  (developer.android.com/studio/publish/app-signing — checked
  2026-11-04). The reset carries its own review delay, so the keystore is
  still never to be lost casually. The genuinely unrecoverable case is
  narrower — an app that manages its own app signing key instead of Play
  App Signing, in practice one created before August 2021 that opted out
  — and that case is communicated to clients plainly as a permanent
  failure mode, not softened.
- An Apple individual account can legally publish a client's app (no
  D-U-N-S needed) — the store page just shows the individual's name as
  seller until an app transfer. Google's official app-transfer process
  needs both accounts fully registered, a transfer request with both
  Play-registration transaction ids, and takes about 2 business days;
  reviews/ratings/installs carry over but pre-transfer purchase records stay
  tied to the original account by Google's own design, and testers do not
  carry over.
**Hebrew/universal:** universal.

---

## (b) Building apps — web and mobile

### B1. Ship a product as one codebase across web, iOS and Android, with an AI agent layered on top as a fourth "surface"
**Proven by:** Chillist (web: `chillist-fe`, React 19 + Vite + TanStack
Router at `chillist-fe.pages.dev`; native: `chillist-app`, Expo/Expo Router,
`app.chillist.mobile` on both stores; backend `chillist-be`; WhatsApp agent
`chillist-whatsapp-bot`).
**Hard facts:**
- Production runs the **official Meta WhatsApp Cloud API** (`WHATSAPP_PROVIDER=meta`,
  `graph.facebook.com/{v}/{PHONE_NUMBER_ID}/messages`), not a third-party
  bridge like Green API or Twilio, with a webhook that validates
  `X-Hub-Signature-256` and honours Meta's 24-hour free-form reply window.
- The WhatsApp agent runs on the Vercel AI SDK over Upstash Redis and can
  list plans, see items, update statuses, create plans, and link a group
  chat to a plan — conversational CRUD, not a scripted menu bot.
- Guests join a plan with **zero account creation** via an invite-token
  link — a deliberate choice to remove the signup barrier for casual
  participants.
- Product ships in 3 languages including Hebrew RTL, across web and native,
  from one shared item-suggestion library of 700+ entries.
**Hebrew/universal:** universal pattern (web + native + WhatsApp agent on
one backend); Hebrew RTL support is the Israel-specific proof point.

### B2. Build and operate a mobile/web product for a construction or field-operations client that works with no network connection on site
**Proven by:** Case 1, the anonymous construction quality-control client
(Flutter field app + React/Fastify/PostgreSQL/AWS office system).
**Hard facts:**
- The field app works fully offline; checklists are organised by building →
  floor → apartment, with a defect-fix cycle, a signature, and a locked PDF
  report at the end.
- Real structural scale actually handled: 7 buildings × 7 floors × 4
  apartments = 196 apartments × 17 room types = **over 3,300 distinct
  inspection points** on the first site alone — this was arithmetic on the
  real site, not an estimate.
- First commit to both stores submitted in **6 weeks**.
- Delivered on Android and iOS plus a separate office web screen, from one
  backend, in 4 full languages including RTL.
**Hebrew/universal:** Hebrew/RTL is core to the UI; the offline-first
architecture pattern is universal.

### B3. Build an ordering + AI-verified delivery system for a construction contractor, replacing WhatsApp-and-phone-call purchasing
**Proven by:** Case 2, the anonymous materials-ordering client (Remix +
PostgreSQL + Gemini Vision + WhatsApp API, installable PWA).
**Hard facts:**
- An AI vision model reads a **photographed delivery note** and reconciles
  it line-by-line against the original order — this is the "AI delivery
  verification" claim, not a marketing phrase: measured over a 75-day field
  window, 900 order lines were checked against a photographed note, 108
  deliveries (152 document pages) were verified by the model, and over that
  window **zero model-generated lines needed manual correction**.
- Measured, not extrapolated, over the same window: 377 orders, 1,742 order
  lines (26,545 material units), 111 short-or-absent lines caught across 38
  deliveries, 1,952 WhatsApp notifications sent across 11 automatic
  triggers, 17 active sites, 16 people raising orders, 93% of delivery notes
  verified within 36 hours of delivery, and a 20-minute median time from
  order raised to approved.
- Approval flows through WhatsApp to the supplier directly from the
  ordering system, not a separate manual step.
- Any article reusing the annualised "1,800+ orders/year" or "500+
  shortages/year" figures must label them explicitly as a current-rate
  projection from a 75-day window (as the source data itself insists) —
  never present them as a measured year.
**Hebrew/universal:** Hebrew/RTL, mobile-first PWA; AI-document-verification
pattern is universal.

### B4. Generate Israeli/Hebrew business documents programmatically (invoices, contracts, proposals, minutes) with correct RTL and legal formatting
**Proven by:** the `hebrew-document-generator` capability (a general tool,
not tied to one client).
**Hard facts:**
- Covers PDF (reportlab or WeasyPrint), DOCX (python-docx) and PPTX
  (pptxgenjs), each with its own RTL mechanism: `drawRightString()` +
  python-bidi reordering for reportlab (which has no native Hebrew support
  at all); native `dir="rtl"` CSS for WeasyPrint; explicit `w:bidi` /
  `w:rtl` XML properties for Word, since python-docx has no built-in RTL
  toggle; `rtlMode: true` for PPTX.
- A Hebrew Tax Invoice (חשבונית מס) under Israeli law must carry a
  sequential invoice number, the issuer's Osek Murshe number, the
  customer's TZ/company number, itemised lines, and **VAT calculated at
  18%**, with the total in NIS.
- A specific, non-obvious formatting trap: standard Israeli business/legal
  Hebrew does **not** use nikud (vowel marks) — adding it, which an AI
  agent defaults to doing "for clarity," actually reads as unprofessional in
  a formal document.
**Hebrew/universal:** entirely Hebrew/Israel-specific.

---

## (c) AI agents / WhatsApp

### C1. Get a business onto the official Meta WhatsApp Cloud API — not a grey-market bridge — from a rejected business-verification state through to a live, billable number
**Proven by:** the Hand In Hand AI portfolio's own Meta integration work
(meta-business-setup, meta-waba-per-product), which now backs Chillist and
other products.
**Hard facts:**
- Business verification rejection is usually one of: a legal-name mismatch
  between the portfolio and the uploaded document, an address mismatch, a
  personal (not business) phone number, a free-email domain, or a wrong
  document type (a lease or a personal bill is rejected outright).
- For Israel specifically: a **תעודת עוסק פטור / עוסק מורשה** (osek
  patur/murshe certificate) proves the legal name; an **ארנונה bill** or a
  bank's printed account-confirmation letter proves address + phone, must
  be under 90 days old, and must be in the business name, not a personal
  one. One document carrying both name and address on the same page (a bank
  confirmation) is the strongest single upload.
- The business-verification wizard has an undocumented trap: on the
  "Select your business" screen, Meta searches public records and offers a
  match — in Alex's own run it matched the wrong entity entirely (a
  same-named NGO) on every visible signal except the tax-id tail. Accepting
  a wrong match is a policy violation that can restrict the whole portfolio,
  not just fail the single verification.
- A second hidden trap on the document-upload screen: a "Did your document
  include your business phone number or address?" toggle **defaults to
  No**, which silently requires a second document most sole proprietors
  don't have; it must be manually set to Yes when the single document
  already covers both.
- Messaging limits are enforced **per portfolio, not per WABA**: 250
  unique business-initiated conversations per 24h while unverified
  (shared across every number in the whole portfolio), with no per-number
  increase available — only full business verification, or 2,000 delivered
  template messages to unique numbers inside 30 days, lifts it to the next
  tier.
- An unverified portfolio is capped at **2 phone numbers total**, and an
  unverified app cannot share an existing WABA it didn't create at signup
  time ("Cannot share WABA with an unverified BSP") — the only workaround
  is letting Google's own number-registration wizard create a fresh WABA
  rather than a pre-made one.
- A **published (Live) Meta app is a hard, invisible precondition for any
  production message to actually deliver**: an unpublished app returns a
  real-looking success response (`message_status: accepted`, a real
  `wamid`) for both inbound and outbound while silently discarding the
  message — no error anywhere, confirmed twice in production incidents.
  Publishing needs only a privacy-policy URL, an app icon and a category
  filled in — no App Review.
- A WABA with no payment method attached reports `can_send_message: BLOCKED`
  with error 141006 and silently stops every business-initiated send;
  only the account owner can attach the card, and a portfolio-level card
  does not automatically cover a WABA — each WABA has its own payment
  account that must be found and funded separately.
**Hebrew/universal:** Israel-specific documentation requirements; the Meta
API mechanics are universal but genuinely undocumented in Hebrew (confirmed:
no Hebrew guide exists on the 12-tester-equivalent pain points of this
process either).

### C2. Give each product its own isolated WhatsApp number/account so one product's customers never see another product's bot traffic
**Proven by:** the Chillist/Sasha WABA split (`meta-waba-per-product`),
executed live 2026-10-17 through -19.
**Hard facts:**
- Webhooks are delivered **per WhatsApp Business Account, not per phone
  number** — every app subscribed to a WABA receives every number's events
  in that account, all signed with the same app secret, so a signature
  check alone is no defence against cross-product leakage. For five real
  days in October, a second product's number was live on a shared WABA
  before the recipient filter reached production — verified against real
  audit logs, with no foreign traffic actually exercised in that window.
- Migrating an existing number's templates to a new WABA can **silently
  downgrade a template's category from Utility to Marketing**, which both
  costs more per message and gets suppressed for marketing-opted-out
  recipients — Meta refuses to fix a category on an already-approved
  template; the only remedy is submitting a brand-new template under a new
  name.
- A foreign app subscribed to your own WABA (observed: a third party's lead
  system left behind from an earlier integration) is **invisible and
  unremovable through any self-service control** — the owner-side UI only
  lists apps you yourself created, and Meta support tickets on this have
  gone nowhere across two separate cases.
**Hebrew/universal:** universal mechanics; Israel-specific only in that it
was executed against an Israeli portfolio.

### C3. Design and build a WhatsApp AI agent that is production-safe by construction, not by careful coding
**Proven by:** the whatsapp-agent-scaffold stack (Fastify + Green API +
Vercel AI SDK + Zod), the hand-in-hand/demo-platform lineage.
**Hard facts:**
- The webhook **always returns 200**, even on an internal failure — a
  non-200 makes the WhatsApp provider (Green API) retry the same inbound
  message forever, which is a worse failure than swallowing one message.
- `sendMessage` never throws; a failed send is logged and swallowed rather
  than killing the agent's turn.
- Session-close is a "closer-flag" pattern: state mutates only **after**
  sends succeed, specifically so a failed send can never leave a session
  half-closed in an inconsistent state.
- Replay protection multiplies the provider's timestamps by 1000, because
  Green API delivers them in seconds while the system's own clock
  comparisons assume milliseconds — a one-line unit mismatch that would
  otherwise let replayed messages through.
- A hard content rule baked into the architecture: the agent **never quotes
  a specific price** in chat — it always routes a pricing question to a
  human consultation instead.
**Hebrew/universal:** universal architecture pattern.

### C4. Add real push notifications to a mobile product without turning a returning offline phone into a notification storm for its owner
**Proven by:** Plumberg's push-notification build (FCM direct, APNs via
Firebase, council-reviewed transport decision).
**Hard facts:**
- The transport decision was put to an independent four-model review before
  building anything: the ruling was to send Firebase Cloud Messaging HTTP v1
  directly from the product's own server, letting FCM relay to iPhones via
  an uploaded Apple `.p8` key, rather than paying a wrapper (AWS SNS,
  OneSignal) for a service that still needs the same two underlying
  credentials plus its own new token registry and a third-party data
  surface.
- A **unique dispatch key** over (notification kind, subject id, recipient,
  day) makes a double-firing scheduler, a container restart, or a retried
  request all harmless by construction, and more than ~5 notifications of
  one kind for one recipient in a batch automatically collapse into one
  summary — built specifically because an offline phone coming back online
  can otherwise replay a day of work in seconds as a flood of individual
  alerts.
- The tray text is rendered **server-side, in the recipient's own
  language**, because the OS draws the notification without running any
  client code — the title and body must already be final text when they
  leave the server, not data the client renders afterward.
- A Google Workspace organisation can enforce
  `constraints/iam.disableServiceAccountKeyCreation`, which silently blocks
  the standard "generate a service-account key" step — discovered only
  after the Firebase project already existed. The real fix, used in
  production on Plumberg, is **keyless workload identity federation**: the
  server's own cloud role (an AWS App Runner role) is exchanged for a
  short-lived Google token, with no static secret anywhere.
- An Apple push key's environment setting ("Sandbox & Production") is
  **permanent** once chosen, and the same `.p8` file must be uploaded into
  both Firebase slots, or debug builds and the live App Store build end up
  on different, disconnected credentials.
**Hebrew/universal:** universal.

### C5. Diagnose and complete Apple's EU trader-status (DSA) compliance screen for an Israeli individual developer account
**Proven by:** the apple-dsa-trader-verification work on Alex's own Apple
account.
**Hard facts:**
- The osek patur certificate has no field matching Apple's form directly —
  the certificate is only the source of truth for the **address**, and the
  transliteration must match the developer account's existing address
  exactly (e.g. keeping "Ha-Eshel" consistent) or Apple's cross-check fails.
- The form has one **hidden required field**: "State or Province" — the
  Next button stays greyed out with no visible error until it has any text
  in it, even for an Israeli address where the concept barely applies.
- Submitting starts an irreversible verification code flow to a real phone
  and email that only the account holder can complete — a session can fill
  every field but must stop before the final submit.
**Hebrew/universal:** Israel-specific document mapping; the Apple mechanics
are universal (EU DSA affects every developer selling into the EU).

---

## (d) Industry-specific (construction, building management)

### D1. Run a legacy-system-to-new-system data migration for a construction QC company, preserving every defect photo, checklist and status history
**Proven by:** the BiltOn → Plumberg migration (bilton-extract).
**Hard facts:**
- The legacy vendor's own API (GraphQL, introspection disabled) had to be
  reverse-engineered by reading the compiled JS bundle for literal query
  strings — there was no documentation to migrate from.
- Getting bulk data **off the page at all** required building the payload
  inside the browser, hashing every internal record id into a short stable
  reference so ids survive both the transfer and later cross-referencing,
  then triggering a download to disk — because the page's own
  content-security-policy blocked any direct network call out, and the
  automation tool's own return channel silently redacted anything that
  looked like a base64 record id.
- The import is idempotent and reversible by design: every import script
  has a matching undo script, writes are soft-deletes, and nothing is
  force-mapped — any unit type with no matching equivalent in the new
  system is blocked and reported for a human decision rather than silently
  guessed at.
- At production scale this import runs for **1–2 hours** against a real
  database over the open internet, and a security-group change needed to
  reach that database is something the normal working session is blocked
  from doing by its own safety policy — it has to be delegated to a
  separate, explicitly-authorised process.
**Hebrew/universal:** the client and data are Israeli construction QC; the
migration technique is universal.

### D2. Operate a live, in-daily-use construction/building-management SaaS product end-to-end: release process, QA, and safe production data repairs
**Proven by:** Plumberg (`com.zinberg.plumberg.app`, a Zinberg Construction
org Play account, App Store id 6812428960) and Koma
(`com.handinhandai.koma`, a building-manager app on Hand In Hand AI's
account).
**Hard facts:**
- Every change to production data that a person could later ask "who did
  this, and when" about goes through an **operator script**, never raw SQL —
  it calls the exact same domain function the product's own UI would call,
  stamped `via: operator_script` in the audit trail, defaults to a dry run,
  and needs an explicit `--confirm-prod-run` flag to touch production at
  all. Raw SQL is reserved only for schema migrations or genuinely
  domain-meaningless repairs (a dangling foreign key).
- A real production incident taught that **a successful-looking deploy can
  still be running on a broken database for half an hour**: the deploy's own
  health check never exercised the new columns a migration had added, so
  the platform reported a clean success while every route touching that
  data returned server errors — the fix is to prove a migration landed by
  reading the migration ledger or a real request, never by trusting deploy
  status.
- Database access for a one-off repair opens a **temporary, scoped network
  rule** (an AWS security-group ingress rule for one IP, one port), runs the
  work, and closes it in the same breath — verified closed by printing the
  rule list and confirming it comes back empty, not by just saying "done."
- QA before a release batch runs a **fresh local copy of the whole stack**
  (Postgres, migrations, seed data, server with a real Chrome instance for
  real PDF generation) rather than trusting a staging environment, and
  walks every changed screen on both a web browser and an iOS simulator,
  screenshotting each one against a specific seeded test account.
- A Plumberg production app signing key that is already in the Play store
  cannot be fixed after the fact if the client's organisation misses a Play
  Console Terms-of-Service re-acceptance screen: that screen is a hard stop
  for any automated session — it is a legal acceptance on the client's own
  account and can only be clicked by the account owner, full stop, with no
  workaround route.
**Hebrew/universal:** the Play Console in this account runs in Hebrew
(screenshots and reports must quote the original Hebrew UI strings
alongside a translation); the operational discipline (operator scripts,
audit trails, dry-run-first) is universal.

### D3. Build and run a self-serve QA process for a product used daily by a real construction client, with proof instead of a green test suite
**Proven by:** plumberg-qa, chillist-staging-qa.
**Hard facts:**
- A mutating action is never marked "passed" from a screenshot alone — every
  check is **UI result + a matching backend log line + a matching database
  row**, in that order, before anything is reported as working.
- The real client (Zinberg Construction) opens the app every working day
  and sends feedback after every release, which is treated as the actual
  feedback loop — every build is pushed to every internal tester channel
  the moment it's uploaded, specifically so it never waits behind store
  review.
- A known, specific screen-content difference between the phone and the web
  app is tracked explicitly as intentional (a fourth tab reads "תיעודים" on
  the phone and "פרטים" on the web; defects render as rows on the phone and
  a table on the web), so a QA pass doesn't mistake a deliberate design
  choice for a bug.
**Hebrew/universal:** the product and its daily users are Israeli
construction; the QA discipline is universal.

---

## (e) Business / commercial (pricing, scoping, partnership)

### E1. Price and structure a new service line by running it past an independent panel before committing, then pre-register the conditions for killing it
**Proven by:** the app-publishing service's pricing decision (council of
four independent frontier models, 2 Nov 2026, three structural points
reached unanimously or 2-of-3).
**Hard facts:**
- **Unanimous across all three reviewed redesigns**: never host any client
  app on the verified Google organisation account — "the correct number is
  zero, not a vetted few," because the account carries Alex's own live
  products and one stranger's policy strike puts those at risk too.
- **Two of three, and the two rated best**: a free readiness check must be
  killed or priced, because an unpriced "free check" is first-contact free
  engineering — named by every independent pre-mortem as the leading cause
  of the whole offer losing money.
- **Unanimous**: no three-month inclusive support tail and no flat monthly
  retainer bundled into the launch price — identified as "the second half
  of the same leak" as the free check.
- Adopted pricing shape: a **390 ₪ gate, credited against the package if
  booked within 21 days**, 2,290 ₪ for one store, 3,490 ₪ for both, and
  450 ₪/hour for anything beyond scope, billed in pre-paid blocks. Modelled
  against a realistic job with one rejection loop, this nets roughly 540
  ILS/hour — against the unpriced status quo's roughly 46 ILS/hour.
- Explicit, numeric kill criteria set in advance rather than judged after
  the fact: stop if the blended rate across all jobs falls under 350
  ILS/hour by the fifth client, if fewer than 3 clients have paid by
  31 December 2026, if fewer than 4 jobs land in any trailing 90 days, or
  immediately if any client app ever lands on the organisation account.
**Hebrew/universal:** Israel-priced (ILS), but the pricing discipline
(council review, credited gate, pre-registered kill criteria) is universal
and itself demonstrates a working method, not just an outcome.

### E2. Read a market honestly, including when it contradicts your own prior research
**Proven by:** the app-publishing SEO/query research (2 Nov 2026).
**Hard facts:**
- An earlier planning document had stated "Hebrew results for this topic
  are nearly empty." Direct research **contradicted that**: a live Israeli
  competitor (app2store.co.il) sells the identical service — publishing an
  AI-built app to both stores, including handling the 12-tester
  requirement, no login sharing — at 2,490 ₪ per store or 3,990 ₪ for both,
  3–4x the planned price, with dedicated guides for Base44, Lovable,
  Flutter/Expo, D-U-N-S and Apple rejections already live. The correction
  was reported plainly and the plan was revised, rather than the
  contradictory finding being downplayed.
- The research is methodologically explicit about its own limits: Google's
  live search-results page could not be fetched directly (returns a
  JavaScript-only consent shell), so every query-relevance claim is tagged
  **Verified** (a real autocomplete suggestion or an exact phrase a live
  page already uses) or **Guessed** (no supporting evidence found) — no
  number in the research is presented as a search-volume estimate, because
  no tool used actually measures volume.
**Hebrew/universal:** Israel-specific market, but the research discipline
(flagging verified vs. guessed, correcting a stated prior) is universal and
itself a sellable trait for a consultant whose other work is similarly
fact-checked.

### E3. Scope a multi-platform product offering honestly: AI agents/WhatsApp bots, custom management systems, MVP app builds, fractional/outsourced CTO work
**Proven by:** the homepage's own service description and the site-exposure
council brief describing the current business (2026-10-30), cross-referenced
against the three real case studies.
**Hard facts:**
- The actual service list, as described for the site's own positioning
  review: AI agents and WhatsApp bots connected to the **official** Meta
  WhatsApp Cloud API (explicitly distinguished from grey-market bridges);
  custom management systems for orders, inventory, quality control and CRM;
  MVP app development; and fractional/outsourced CTO work for startups —
  with Chillist as the one named, fully public proof point tying all four
  together (web + native app + official WhatsApp agent, one person, one
  stack).
- As of the last Search Console pull (90 days, pulled 2026-10-30): 18
  impressions, 0 clicks, average position 6, with the only actual search
  query on record being a mistyped unrelated domain — i.e. the business to
  date has produced zero real inbound organic search, which is itself an
  honestly-reported fact rather than a hidden one, and the basis for why
  referrals/partnerships are rated the higher-return channel over organic
  SEO in the near term.
**Hebrew/universal:** Israel-specific client base; the four-service
structure itself is a universal consulting shape.

### E4. Run cross-session, multi-role business operations with a documented chain of custody for credentials and approvals
**Proven by:** the boss-brain-hand working method, used across the Meta
verification, app-store release, and Plumberg release work above.
**Hard facts:**
- A strict three-role separation — **Boss** (the human, who alone types
  passwords, OTP codes, and clicks anything irreversible or legally
  binding), **Brain** (the planning/coordinating session), **Hand** (the
  browser-driving session that clicks consoles under written instruction) —
  with an explicit list of what a Hand will always bounce back to the human
  no matter what: credentials, other people's personal data, files over
  10MB, and any field-length overflow the brief didn't anticipate.
- A documented, repeatable technique for making a stuck or blocked browser
  step unmistakable to a human who has many windows open and doesn't track
  which belongs to which session: overwrite the tab's title and favicon
  live, on an interval, so the target page can't be confused with any other
  open tab.
- A hard rule, learned from a real incident, that a refusal by the safety
  classifier is never routed around by asking a different session or role
  to attempt the same action instead — it goes back to the human, every
  time, because a classifier's refusal is not a verdict on whether the
  underlying command was actually dangerous, just a gate that only the
  human can clear.
**Hebrew/universal:** universal operating method, demonstrated across
Israeli client work.

---

## Count

**21 capabilities** (A1–A5, B1–B4, C1–C5, D1–D3, E1–E4): 5 in store
publishing, 4 in building apps (web + mobile), 5 in AI agents/WhatsApp, 3 in
industry-specific construction/building work, 4 in business/commercial
practice. Several entries bundle more than one discrete, separately
provable fact under "Hard facts," so the total count of citable claims in
this file runs well above 21.
