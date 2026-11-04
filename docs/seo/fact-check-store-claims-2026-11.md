# Fact-check: app-store claims for Hebrew marketing copy

Checked on 2026-11-04. Primary sources only (Google Play Console Help, Android
Developers, Apple Developer / App Store Connect Help, Apple App Review
Guidelines). Blog posts and forums were used only to locate the official page,
never as evidence; every claim below was confirmed on the official page itself.

---

## 1. Closed-testing requirement for personal Google Play accounts

**Verdict: VERIFIED**

- Tester count: **12** testers minimum.
- Duration: **14** continuous days.
- Must testers be continuously opted in: **yes**.
- Does losing a tester reset the clock: **yes**, for that tester's count toward
  the 14 days — the days must be consecutive.
- Cutoff: applies to personal developer accounts **created after November 13,
  2023**.

Exact wording (Play Console Help):

> "At least 12 testers must be opted in to your closed test when you apply for
> production access" and "they must have been opted in continuously for the
> preceding 14 days."
>
> "Testers who opt in, test for fewer than 14 days, and then opt out do not
> count toward the requirement."
>
> "If a tester opts out and opts back in later, the 14 days must be consecutive
> to count toward the minimum requirement."
>
> "Google Play requires personal developer accounts created after November 13,
> 2023, to test their apps before those apps are eligible for distribution."

Source: [App testing requirements for new personal developer accounts](https://support.google.com/googleplay/android-developer/answer/14151465?hl=en) — Play Console Help.

---

## 2. Android versionCode must increase on every upload

**Verdict: VERIFIED**

Exact wording (Android Developers):

> "make sure that each successive release of your app uses a greater value"
>
> "You can't upload an APK to the Play Store with a versionCode you have
> already used for a previous version."

Source: [Version your app](https://developer.android.com/studio/publish/versioning) — Android Developers.

---

## 3. iOS build number must increase within the same version string

**Verdict: VERIFIED**

Exact wording (Apple Technical Note TN2420):

> "For every new build you submit, you will need to invent a new build number
> whose value is greater than the last build number you used (for that same
> version)."
>
> "For iOS apps you can re-use build numbers in different release trains, but
> you cannot re-use build numbers within the same release train."

(A "release train" is Apple's term for all builds under one version string.
Note: macOS apps are stricter — build numbers there must increase across every
version ever submitted, not just within one version string.)

Source: [Technical Note TN2420 — Version Numbers and Build Numbers](https://developer.apple.com/library/prerelease/content/technotes/tn2420/_index.html) — Apple Developer.

---

## 4. Apple rejects for similarity to an existing app / minimum functionality

**Verdict: VERIFIED** — correct guideline numbers, with the sub-clauses that
actually hit AI/no-code-builder apps identified below.

**Guideline 4.2 — Minimum Functionality** (exact wording):

> "Your app should include features, content, and UI that elevate it beyond a
> repackaged website. If your app is not particularly useful, unique, or
> 'app-like,' it doesn't belong on the App Store."

The specific sub-clause that targets no-code/template/AI-generated apps is
**4.2.6**:

> "Apps created from a commercialized template or app generation service will
> be rejected unless they are submitted directly by the provider of the app's
> content. These services should not submit apps on behalf of their clients
> and should offer tools that let their clients create customized, innovative
> apps that provide unique customer experiences."

**Guideline 4.3 — Spam** (exact wording, sub-clause **4.3(b)**, the one about
similarity to existing apps):

> "Don't submit apps that are indistinguishable from what's already widely
> available. Opportunistically creating variants of existing app categories or
> popular apps degrades App Store discovery, reduces overall app quality, and
> harms both users and developers."

Sub-clause 4.3(a) is the "don't create multiple Bundle IDs of the same app"
rule (e.g., a separate app per city instead of one app).

Source: [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) — Apple Developer.

---

## 5. Neither store commits to a review outcome or turnaround time

**Verdict: VERIFIED**

**Google Play** (exact wording, Play Console Help):

> "For certain developer accounts, we'll take more time to thoroughly review
> your app to help better protect users. This may result in review times of up
> to seven days or longer in exceptional cases."

This is conditional language ("may result in"), not a commitment.

Source: [Publish your app](https://support.google.com/googleplay/android-developer/answer/9859751?hl=en) — Play Console Help.

**Apple** (exact wording, Apple Developer):

> "App Review works around the clock, typically reviewing at least 50% of
> submissions in less than 24 hours and 90% in less than 48 hours."

"Typically" is an estimate, not a guarantee, and Apple states elsewhere that
submissions needing extra scrutiny (incomplete info, sensitive categories,
high volume periods) can take longer.

Source: [App Review](https://developer.apple.com/distribute/app-review/) — Apple Developer.

Neither official page states a guaranteed approval outcome; both only
describe the review process and typical/possible timeframes.

---

## 6. TWA package name / bundle ID can never change, and a lost Android keystore permanently blocks updates

**Verdict: WRONG** — both halves of this claim are inaccurate or outdated.

**Package name / bundle ID — correct the timing, not just the permanence.**
The lock happens earlier than "after the first version ships":

- Android: the package name (application ID) is fixed **at the first upload
  to Play Console** — before any release goes live. Google Play documentation
  states it is "unable to delete apps or let multiple apps have the same
  package name," and Google's own Trusted Web Activity guidance confirms
  "Play never lets a published app change its application id."
  Source: [Sign your app](https://developer.android.com/studio/publish/app-signing) — Android Developers; [Android Concepts for Web Developers](https://developer.chrome.com/docs/android/trusted-web-activity/android-for-web-devs) — Chrome for Developers.
- iOS: the Bundle ID locks once a build has been uploaded, per Apple's own
  wording: "When an app is transferred it maintains its Bundle ID, which
  can't be changed once a build has been uploaded for the app."
  Source: [Overview of app transfer](https://developer.apple.com/help/app-store-connect/transfer-an-app/overview-of-app-transfer/) — App Store Connect Help.

**Losing the Android upload keystore — this is the outdated part.** Since
**Play App Signing became mandatory for all new apps in August 2021**, losing
the *upload* key does **not** permanently block updates. From Android
Developers (exact wording):

> "When you use Play App Signing, if you lose your upload key, or if it is
> compromised, you can request an upload key reset in the Play Console.
> Because your app signing key is secured by Google, you can continue to
> upload new versions of your app as updates to the original app, even if you
> change upload keys."
>
> "Resetting your upload key will not affect the app signing key that Google
> Play uses to re-sign APKs before delivering to users."

The permanent-lockout scenario only applies if a developer manages their own
*app signing key* and loses it — only possible for apps created **before
August 2021** that opted out of Play App Signing:

> "By comparison, for apps that have not opted in to Play App Signing, if you
> lose your app's signing key, you lose the ability to update your app."

Source: [Sign your app](https://developer.android.com/studio/publish/app-signing) — Android Developers; [Upload your app to the Play Console](https://developer.android.com/studio/publish/upload-bundle) — Android Developers (confirms Play App Signing is "the mandatory way to upload and sign all new apps since August 2021").

**Corrected fact for the copy:** the package name/bundle ID locks at first
upload (not "after it ships"), and for any current app (Play App Signing is
mandatory since August 2021), losing the upload keystore is recoverable via
an upload-key reset in Play Console — it does not block updates.

---

## 7. Digital Asset Links must carry the Play App Signing certificate, not the local upload key

**Verdict: VERIFIED**

With Play App Signing, Google re-signs the uploaded app bundle with the app
signing key before distributing it to users — the device only ever sees that
certificate, not the developer's upload-key certificate. Android Developers
confirms this is also the certificate to register with external services such
as Digital Asset Links:

> "Google uses the upload certificate to verify your identity, and signs your
> APK(s) with your app signing key for distribution."
>
> "You can download the certificate for the app signing key and your upload
> key from the Release > Setup > App signing page in the Play Console. This is
> used to register public key(s) with API providers."

Source: [Sign your app](https://developer.android.com/studio/publish/app-signing) — Android Developers.

(The assetlinks.json file served by the website must carry the SHA-256
fingerprint of the **app signing key certificate**, which Play Console's App
signing page provides directly — not the upload key fingerprint, which is a
different certificate once Play App Signing is enrolled.)
