# Fact-check: do-you-need-a-mac guide (issue #85, Gate 2)

Checked **2026-11-25**. Vendor pages only — Apple Developer, Apple's own
Mac App Store listings for its two upload tools, Google Play Console Help,
and Expo's own documentation for the one cloud build/submit service the
guide names. Forum threads, blog posts and search summaries were used only
to locate the right vendor page, never as evidence. Every CONFIRMED verdict
quotes the vendor's current page, fetched today, with the URL.

First-hand facts come from `docs/seo/capability-ledger.md` (B1) and from a
real project's own store notes; they are marked FIRST-HAND and are never
presented as vendor-confirmed. The anonymity rule is applied: no product
name, domain or store link appears in the article for those facts.

---

## 1. Xcode runs only on macOS, and only on Apple-silicon Macs

**Verdict: CONFIRMED (and stronger than the usual claim)**

Apple's own Mac App Store listing for Xcode, read 2026-11-25:

> "Only for Mac"

> Compatibility: "Requires macOS 26.6 or later and a Mac with Apple M1
> chip or later."

Source: https://apps.apple.com/us/app/xcode/id497799835

**Why this matters to the article:** the common phrasing "you need a Mac"
is now also a hardware-generation claim. An Intel Mac does not run the
current Xcode. The article states both halves and dates them.

The marketing page (https://developer.apple.com/xcode/, read 2026-11-25)
does not state a system requirement in those words; it says "Prototype on
every device, all from your Mac". The App Store listing is the citable
source, so that is the one the article links.

## 2. A free Apple account can test on a device; submitting needs the paid programme

**Verdict: CONFIRMED**

Same Xcode listing, read 2026-11-25:

> "To test or run applications on an Apple device, all you need is a free
> Apple Account. To submit your apps to the App Store, you must be a
> member of the Apple Developer Program."

Corroborated by the Apple Developer Program page
(https://developer.apple.com/programs/, read 2026-11-25), whose free-account
column lists "Test your apps directly on your own devices using Xcode" and
whose paid column lists distribution on the App Store.

**Note for the article:** this is a *money* distinction, not an operating
system one — the free route still runs through Xcode, so it still needs a
Mac. The article says that explicitly so the two facts are not conflated.

## 3. Apple Developer Program fee

**Verdict: CONFIRMED**

https://developer.apple.com/programs/, read 2026-11-25:

> "Join the Apple Developer Program — $99 annual membership"

The same page names the Apple Developer Enterprise Program at $299/year,
for private in-house distribution only. Not relevant to a store listing and
not mentioned in the article.

Fee waivers (nonprofit, accredited educational institution, government
entity only) were verified for the `publish-app-to-stores` guide and are
unchanged in substance; the article points at that guide rather than
restating the condition.

## 4. Apple publishes no upload tool for Windows or Linux

**Verdict: CONFIRMED for Apple's two own tools. Stated as exactly that, and no wider.**

Apple's two documented ways to deliver a build are Xcode itself (§1 above,
Mac-only) and Transporter. Transporter's own Mac App Store listing, read
2026-11-25:

> "Only for Mac"

> Compatibility: "Requires macOS 10.15 or later."

> "Transporter is the simple and easy way to deliver content to Apple.
> Easily send apps, music, movies, TV shows, or books for distribution on
> the App Store…"

Source: https://apps.apple.com/us/app/transporter/id1450874784

**The careful wording the article uses:** "the two tools Apple itself
publishes for uploading a build run on macOS only." It does **not** claim
"there is no way to upload from Windows" — §5 is a counter-example. The
claim is about what Apple ships, which is what the two listings support.

## 5. A cloud service can build AND upload an iOS app with no local Mac

**Verdict: CONFIRMED, for a React Native / Expo project specifically**

Expo's own documentation, read 2026-11-25:

> "Expo Submit works on macOS, Linux, and Windows, so you don't need a Mac
> to ship iOS builds."

Source: https://docs.expo.dev/submit/ios/

Same page, on what the build is: `eas build --platform ios --profile
production` produces the production `.ipa` to submit, and `eas submit
--platform ios` "upload[s] the binary to App Store Connect."

The build service's own prerequisites page
(https://docs.expo.dev/build/setup/, read 2026-11-25) confirms three things
the article uses:

> "Expo Build is available to anyone with an Expo account, regardless of
> whether you pay for Expo Services or use the Free plan."

> "You can build and sign your app using Expo Build, but you can't upload
> it to the Google Play Store unless you have a membership, a one-time $25
> USD fee."

> "If you are going to use Expo Build to create release builds for the
> Apple App Store, you need access to an account with a $99 USD Apple
> Developer Program membership."

**Two catches on the same vendor pages, both in the article:**

1. The scope is a React Native project. The build page's own prerequisite
   is "A React Native Android or iOS project." A native Swift project or a
   Flutter project is not covered by this specific route.
2. The documented fallback is a Mac. From the submit page: "If Expo Submit
   is temporarily unavailable, you can upload to the Apple App Store
   manually from a Mac with Xcode." The article states this — the Mac does
   not vanish, it becomes someone else's and the dependency moves from
   hardware to a service.

## 6. Google Play developer fee, and that nothing on the Android side needs macOS

**Verdict: CONFIRMED (fee). Android-has-no-macOS-step is stated as the absence of any such requirement, not as a quote.**

The $25 one-time registration fee is Google's own
(https://support.google.com/googleplay/android-developer/answer/6112435),
already verified for the two shipped publishing guides and independently
restated today by Expo's page quoted in §5 ("a one-time $25 USD fee").

No Google page states "you do not need a Mac", because no Google page
raises the question. The article therefore phrases the Android side as what
it is: the Android toolchain is published for Windows, macOS and Linux, and
no step in Google's own publishing flow names macOS. That is an argument
from the absence of a requirement, and the article does not dress it up as
a quotation.

## 7. Cloud-Mac and macOS-CI pricing

**Verdict: NOT VERIFIED. Deliberately no figure in the article.**

No price for a rented cloud Mac, for macOS CI minutes, or for a paid tier
of any build service was checked today. These are per-minute or per-plan
figures that move, and the brief's own rule is that an unverified number
does not ship. The article says a figure exists, says it depends on the
provider and the plan, and says plainly that this guide does not quote one.
The only price-adjacent fact it does state is Expo's own "available on the
Free plan" sentence from §5, which is quoted and dated.

## 8. Xcode Cloud

**Verdict: PARTIAL — stated as a reading, not a prohibition.**

Apple's Xcode page (read 2026-11-25) describes Xcode Cloud as "a continuous
integration and delivery service **built into Xcode**". Apple does not
publish a sentence saying "Xcode Cloud cannot be set up without a Mac", so
the article does not assert one. It notes only what Apple's own wording
implies — the service is reached through Xcode, which is Mac-only — and
leaves it there. If a reader needs certainty on that specific point, the
article says to check it rather than trusting this page.

## 9. FIRST-HAND — the cloud route produced a real App Store-signed build

**Source:** `docs/seo/capability-ledger.md` §B1 plus the project's own
store-submission record. Not vendor-confirmed and not presented as such.

- An iOS build for a product published to both stores was produced by the
  cloud build service, which created the distribution certificate and the
  provisioning profile **on its own servers** from an App Store Connect API
  key. No local Xcode build was involved in producing that binary.
- Two failures, both on **2026-10-05**:
  - An app-specific password did not authenticate the developer portal.
    Apple answered `Invalid username and password combination`. Those
    passwords authenticate a build *upload*; the portal wants the real
    password with two-factor, or an API key.
  - The non-interactive run refused to create the first certificate:
    `Distribution Certificate is not validated for non-interactive builds`.
    The one-time credential setup has to be run by a person answering
    prompts — on any operating system, but not unattended.
- The uploads on that project in the end went through a **Mac** tool
  (`xcrun altool`), and the reason was not that the cloud upload was
  impossible: the cloud submit wanted the API-key path written inside the
  project's own config file, which would have put a machine-specific path
  into the repository. A repository-hygiene decision, not a platform limit.
  The article says it that way, because the opposite reading — "even they
  ended up needing a Mac" — would be false.

## 10. What the article does NOT claim

- No price for any cloud Mac, CI minute or paid build tier (§7).
- No claim that a native Swift or Flutter project has a documented
  Mac-free build-and-submit path as complete as §5's; it says those go to a
  macOS CI runner and that the macOS machine is then someone else's.
- No claim about Xcode Cloud's setup requirements beyond Apple's own words
  (§8).
- No claim about how long any store review takes — that lives in
  `publish-app-to-stores`, where it is sourced.
