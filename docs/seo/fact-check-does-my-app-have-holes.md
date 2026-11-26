# Fact check — `does-my-app-have-holes` (group guide 4)

Written 2026-11-26, the same session as the article. Every claim the article
states as a fact is below, with the source that was actually read and how it
was read. `lastVerified: 2026-11-26` on the article means this file.

## Method, stated plainly because it is not a browser read

The pages below were fetched as pages — a page fetch and a `curl` of the
same URL, with the raw text searched for the sentence being cited — not
opened in a browser and not read off a Google results page. That is a real,
dated read of the cited page, and it is **not** a Google read: the search
findings behind this guide's keyword brief are reuses of earlier sessions'
dated reads, and the brief says so.

**Two sources could not be read at all in this session**, and the article
therefore states nothing from them (see "Deliberately not stated" below):
`gov.il` returned HTTP 403 to every attempt, both for the Privacy
Protection Authority's data-security pages and for its explainer pages.

## Verified, and used on the page

### 1. Supabase — a table in an exposed schema with no row-level security

Source: <https://supabase.com/docs/guides/database/postgres/row-level-security>,
read 2026-11-26. The page's own "Danger" callout, verbatim:

> "A table in an exposed schema without RLS is readable and writable by any
> role with a grant on it."

and, verbatim:

> "Enable RLS on every table in an exposed schema."

and:

> "Once RLS is enabled, no data is accessible through the API when using a
> publishable key, until you create policies."

**How the article uses it:** to support the one load-bearing idea of the
guide — that the rule "a customer sees only their own rows" either sits in
the data or sits only in the screen — and to make the first question to the
builder a question with a documented answer shape. Stated as Supabase's own
documented behaviour of its own product, never as a weakness of anybody's
app. **Stack-dependent, and the article says so**: a product that does not
use this service has the same question with a different answer.

### 2. Supabase — which key is designed to be public, and which must never be

Source: <https://supabase.com/docs/guides/api/api-keys>, read 2026-11-26,
confirmed verbatim in the raw page text:

> Publishable key — "Safe to expose online: web page, mobile or desktop app,
> GitHub actions, CLIs, source code."

> "Anyone can read it, so it only reaches what Row Level Security allows."

> "A secret key bypasses every Row Level Security policy you have. Never put
> one in a browser, a shipped application, or source control."

> "A secret key doesn't work in a browser. Supabase matches on the
> User-Agent header and returns HTTP 401 Unauthorized."

**How the article uses it:** the second question to the builder (which keys
travel to the client, and what each one opens), and the correction of a
common owner assumption — that a key being visible is itself the hole. By
the vendor's own documentation one kind of key is *meant* to be visible, and
what it can reach is decided by the row-level rule. The last quote is used
to make one honest point: the vendor built a guard against this specific
mistake, which is why "there is a key in the app" is not on its own a
finding.

### 3. Google Play — secure handling, limited access, third-party code, policy link

Source: <https://support.google.com/googleplay/android-developer/answer/10144311>
(User Data policy), read 2026-11-26. Verbatim:

> "Handle all personal and sensitive user data securely, including
> transmitting it using modern cryptography (for example, over HTTPS)."

> "Limit the access, collection, use and sharing of personal and sensitive
> user data acquired through the app to app and service functionality and
> policy-conforming purposes reasonably expected by the user."

> "If you include third party code (for example, an SDK) in your app, you
> must ensure that the third party code used in your app, and that third
> party's practices with respect to user data from your app, are compliant
> with Google Play Developer Program policies."

> "All apps must post a privacy policy link in the designated field within
> Play Console, and a privacy policy link or text within the app itself."

**How the article uses it:** the `HTTPS` check an owner can do from the
address bar is grounded in a store requirement rather than in folklore; and
the third-party sentence is the backbone of the article's "whose problem is
this" section — the store puts the supplier's behaviour on the person whose
account the app sits in.

### 4. Apple — guideline 1.6 (Data Security) and 5.1.1

Source: <https://developer.apple.com/app-store/review/guidelines/>, read
2026-11-26, section number confirmed against the raw page text
("1.6 Data Security" immediately precedes the sentence):

> 1.6 Data Security — "Apps should implement appropriate security measures
> to ensure proper handling of user information collected pursuant to the
> Apple Developer Program License Agreement and these Guidelines (see
> Guideline 5.1 for more information) and prevent its unauthorized use,
> disclosure, or access by third parties."

> 5.1.1(i) — the privacy policy must "Confirm that any third party with whom
> an app shares user data ... will provide the same or equal protection of
> user data as stated in the app's privacy policy and required by these
> Guidelines," and must "Explain its data retention/deletion policies and
> describe how a user can revoke consent and/or request deletion of the
> user's data."

> 5.1.1(v) — "If your app supports account creation, you must also offer
> account deletion within the app."

**How the article uses it:** the deletion question to the builder (a
requirement with a named clause, not an opinion), and the second half of the
"whose problem" section — Apple requires the owner's own policy to vouch for
third parties.

**Note carried into the article:** 1.6 sits in section 1 (Safety), not in
section 5, and it says "should", not "must". The article does not inflate it
into a hard store rejection rule.

### 5. Reused from this repo, already verified on 2026-11-25

`docs/seo/fact-check-terms-of-use-privacy-cost.md` and the published guide
`terms-of-use-privacy-cost` carry the store privacy-policy and
account-deletion requirements, verified against the same two primary sources
on **2026-11-25**. Where this article touches the documents side it links
that guide rather than restating its law.

## Deliberately not stated, and why

- **Israeli data-security law.** The Privacy Protection (Data Security)
  Regulations 5777-2017 and the Authority's own guidance on who carries the
  obligation could not be read: every `gov.il` URL returned HTTP 403 in this
  session. A Knesset PDF of a consolidated text was reachable but is marked
  on its own first page *"נוסח משולב, לא סופי [לפני הצבעה ולפני נסחות
  סופית]"* and *"הנוסח המחייב הוא נוסח הצעת החוק ולא הנוסח המשולב"* — a
  draft, not current law, and therefore not a citable source. **The article
  states no Israeli legal obligation about data security and says in words
  that it does not**, pointing the legal question at
  `terms-of-use-privacy-cost` and at a lawyer.
- **How common any of these holes is.** No count, no percentage, no "most
  AI-built apps". Nothing in this repo or in any source read today supports a
  frequency claim, and the article says the frequency is unknown to it.
- **That AI-built apps are generally less secure than other apps.** Not
  claimed anywhere on the page. No source read supports it.
- **Any named product's real weakness.** None named, none described.
- **A breach figure, a fine figure, or a price for a security review.** No
  published Israeli price for this work was found (the same gap
  `terms-of-use-privacy-cost` records for lawyers' fees), so no number is
  given.
- **Whether the near-competitor's Hebrew page covers the owner's angle.**
  Seen once in a results listing on 2026-11-24, never opened. The brief says
  so.

## Attack-surface review of the page itself

Every check the article asks the reader to perform is on the reader's own
product, with their own accounts, and the page says that in its own words in
two places (the diagram footnote and the checks section). Nothing on the
page describes how to find or exploit a weakness in a product that is not
the reader's: no payload, no tool, no endpoint-guessing, no "try this
against". The two checks that could read as probing — opening your own
product signed out, and comparing two of your own accounts — are the
ordinary acts of using your own product as two of your own customers, and
the page states their limit (a pass proves nothing about the data behind the
screen) rather than presenting them as a clearance.
