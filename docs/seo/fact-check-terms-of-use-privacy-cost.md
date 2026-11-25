# Fact check — `terms-of-use-privacy-cost` (guide 3, group-guides batch 1)

Work order `.claude/work-orders/group-guides-batch-1.md`, PR 3. This is the one
guide in the batch making priced and legal factual claims, so the order
requires a record. **Every check below was done on 2026-11-25 by direct page
fetch** (not in a browser, not a Google read) against the page of the body that
either makes the rule or charges the money. Nothing here came from a model's
memory, and nothing in the guide states a number that is not in this file.

The guide's own rule, stated in its last section: every place it says it does
not know is a place where it does not know. This file is the other half of
that — it lists what was checked, and then what was deliberately left unknown.

---

## 1. Verified, and stated in the guide with the link inline

### 1.1 Google Play requires a privacy policy from every app, in two places

Source: [User Data — Play Console Help](https://support.google.com/googleplay/android-developer/answer/10144311), "Privacy Policy" section. Read 2026-11-25.

Verbatim from the page:

> All apps must post a privacy policy link in the designated field within Play
> Console, and a privacy policy link or text within the app itself.

The same section names the required contents (developer information and a
privacy point of contact or inquiry mechanism; the types of personal and
sensitive data accessed, collected, used and shared, and any parties it is
shared with; secure data handling procedures; the retention and deletion
policy; clear labelling as a privacy policy), requires that the entity named in
the store listing appears in the policy or that the app is named in it, and
then states:

> Apps that do not access any personal and sensitive user data must still
> submit a privacy policy.

> Please make sure your privacy policy is available on an active, publicly
> accessible and non-geofenced URL (no PDFs) and is non-editable.

### 1.2 Apple requires a privacy-policy link in two places, with named contents

Source: [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/), guideline **5.1.1(i) Privacy Policies**. Read 2026-11-25.

Verbatim:

> All apps must include a link to their privacy policy in the App Store Connect
> metadata field and within the app in an easily accessible manner.

The guideline then requires the policy to identify what data is collected, how,
and all uses of it; to confirm that any third party the data is shared with
will provide the same or equal protection; and to explain retention/deletion
and how a user can revoke consent and/or request deletion.

### 1.3 Account deletion is a separate store requirement

- Google Play, same page, "Account Deletion Requirement": if the app allows
  in-app account creation it must allow deletion requests, discoverable from
  inside the app **and** from outside it (a web resource whose URL goes in a
  designated Play Console field), and *"Temporary account deactivation,
  disabling, or 'freezing' the app account does not qualify as account
  deletion."*
- Apple, guideline **5.1.1(v)**: *"If your app supports account creation, you
  must also offer account deletion within the app."* **That sub-clause's own
  heading is `Account Sign-In`, not anything about deletion** — a reader sent
  to "5.1.1(v)" who scans Apple's page for a deletion heading will not find
  one. The guide names the heading for exactly that reason.

### 1.4 Apple publishes a standard EULA that applies by default

Source: [Licensed Application End User License Agreement](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/), apple.com. Read 2026-11-25.

Verbatim opening:

> Apps made available through the App Store are licensed, not sold, to you.
> Your license to each App is subject to your prior acceptance of either this
> Licensed Application End User License Agreement ("Standard EULA"), or a
> custom end user license agreement between you and the Application Provider
> ("Custom EULA"), if one is provided.

**Scope limit the guide states in words:** the two pages read above are Apple's
App Review Guidelines and Google's User Data policy. Neither requires an app to
publish its own document called "terms of use". The guide says that it found no
such requirement **on the pages it read**, and does not claim none exists
anywhere else on either platform. That distinction is load-bearing and is
written into the guide's own sentence, not only here.

### 1.5 Israeli law: the duty to inform, section 11

Source: [חובת יידוע במסגרת איסוף ושימוש במידע אישי](https://www.gov.il/he/pages/duty_to_notify) — the Privacy Protection Authority's own opinion document (גילוי דעת) on section 11 of חוק הגנת הפרטיות, התשמ״א־1981. Published 31.07.2022, page updated 13.08.2025, read 2026-11-25.

The page states that section 11 requires an approach to a person for
information intended for a database to be accompanied by a notice stating: the
purpose for which the information is requested; to whom it will be given and
the purposes of that transfer; whether there is a legal duty to provide it or
whether it depends on consent, and what the consequence of not consenting is.
It adds that the controller's name and contact details must be stated, together
with the existence of the right of inspection (section 13) and the right to
request correction (section 14).

Two specifics the guide uses:

- the duty applies **even where the person approached the organisation on their
  own initiative to receive a service** (*"החובה חלה גם כאשר הפנייה לאדם לקבלת
  מידע נעשתה בעקבות בקשתו של אותו אדם לקבלת שירות מסוים"*);
- where collection is done by **automated systems ("בוטים")**, all the section
  11 details must be presented within that flow.

### 1.6 The enforcement decision with a real number

Source: [הרשות להגנת הפרטיות הטילה עיצום כספי בסך 12,000 ש"ח](https://www.gov.il/he/pages/carting). Published 05.08.2026, read 2026-11-25.

The Authority imposed a financial sanction of **₪12,000** on a company
operating a karting venue for breaching section 11. The original amount was
**₪20,000**, reduced after the company's submissions because it had no prior
breaches and had acted to prevent recurrence. The complaint (received December
2025) was that registering for the activity required entering an ID number,
full name, date of birth, phone number, city and a minor child's details
through an online form, with no notice containing the section 11 details.

The finding the guide leans on, because it is the exact failure mode of a copied
template: *"החברה אכן לא כללה בתנאי השימוש או במדיניות הפרטיות שלה את כל הפרטים
הנדרשים בחוק"* — the right of inspection and correction, the controller's
details and contact, the purposes of use and the recipients — and at the time of
the complaint no full privacy policy was available on the site at all; it went
up only after the inquiry was opened. The Authority rejected the company's
arguments that this was a trifling matter and that the good-faith defence
applied.

**The guide does not name the company.** The government page does, and the guide
links to it. Naming a small venue adds nothing to a reader building an app, and
the claim stays fully checkable through the link.

### 1.7 Amendment 13: in force, and what it did to the registration duty

- **In force 14 August 2025**, a year after passing the Knesset on 5.8.2024 —
  [מדריך מקצועי: תיקון מס' 13](https://www.gov.il/he/pages/guide_tikon13_professional) (published 14.08.2025) and [תיקון 13 לחוק הגנת הפרטיות אושר בכנסת](https://www.gov.il/he/pages/13_amendment). **Note for a later session: it is 2025, not 2026.**
- **Registration duty, after the amendment** — [הגנת הפרטיות – נעים להכיר](https://www.gov.il/he/pages/privacy-protection-nice-to-meet-you) (published 23.02.2026): it applies to a database whose main purpose is collecting personal information in order to pass it on to another, for consideration or not, in the course of ongoing business activity (including direct-mail services), where the database holds information on **10,000 people or more** ("סוחרי מידע"), and to public bodies. The `13_amendment` page describes the same change as the private-sector duty being *"תבוטל כמעט לחלוטין"*.
- **The notification duty that replaced it for large sensitive databases** — [חובת הודעה לרשות להגנת הפרטיות על מאגר מידע](https://www.gov.il/he/service/notice-obligation) (page updated 12.05.2026): a database holding specially-sensitive information on **more than 100,000** data subjects must be notified to the Authority **within 30 days** of the condition arising, with a copy of the database definitions document.
- **The sentence that stops the wrong conclusion** — [שאלות ותשובות - רישום מאגרי מידע וחובת ההודעה](https://www.gov.il/he/pages/rishom_tikon13) (published 14.08.2025, updated 17.08.2025): *"הפטור מרישום אינו פטור מהחוק."* A database no longer requiring registration remains subject to every other obligation, including legality, consent, the right of inspection, data security and the duty to inform.

### 1.8 The "specially sensitive information" list

Source: [הגנת הפרטיות – נעים להכיר](https://www.gov.il/he/pages/privacy-protection-nice-to-meet-you), read 2026-11-25. The categories named there include family privacy and sexual orientation; health; genetic information; a biometric identifier intended to identify or authenticate a person; ethnic origin; criminal record; political opinions; religious beliefs or worldview; location data that reveals any of the above; a personality assessment made by a professional or by a tool intended for it; financial activity and salary data; and information subject to a statutory duty of confidentiality.

The guide quotes the list to make one point — that salary and financial activity are on it — and does not paraphrase it into a shorter list.

### 1.9 GDPR territorial scope

Source: [Regulation (EU) 2016/679, Article 3](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679), EUR-Lex. Read 2026-11-25. Quoted verbatim from the official text:

> 2. This Regulation applies to the processing of personal data of data
> subjects who are in the Union by a controller or processor not established in
> the Union, where the processing activities are related to: (a) the offering of
> goods or services, irrespective of whether a payment of the data subject is
> required, to such data subjects in the Union; or (b) the monitoring of their
> behaviour as far as their behaviour takes place within the Union.

The guide states the scope and **nothing about what the regulation requires**.
See §2.3 below.

### 1.10 Consumer Protection: distance-selling disclosures

Source: [קנייה חכמה ובטוחה ברשת](https://www.gov.il/he/pages/nlnov2022) — the Consumer Protection and Fair Trade Authority's own page. Published 25.12.2022, updated 04.11.2025, read 2026-11-25.

The page names sections **14ג–14ה** of חוק הגנת הצרכן as governing distance-sale
transactions, and lists what the dealer must disclose at marketing time: name,
ID number and address of the dealer in Israel and abroad; the main features of
the asset or service; its price and the possible payment terms; the date and
method of supply; how long the offer is valid; warranty details; and the
consumer's right to cancel. It then lists the written document (contract or
disclosure form) the dealer must supply after the transaction, and states the
14-day cancellation windows and that the dealer may charge cancellation fees of
5% of the price or ₪100, whichever is lower.

The same page lists, among purchases that **cannot** be cancelled,
*"נרכש מידע כהגדרתו בחוק המחשבים (כגון תוכנות)"*. See §2.4.

### 1.11 The two published document prices

Both read 2026-11-25, on the seller's own page, and both are stated in the guide
with the seller named and the price attached to the exact product.

- **DigitaLawyer** — [כתיבת תקנון לאתר אינטרנט אונליין](https://www.digitalawyer.co.il/כתיבת-תקנון-לאתר-אינטרנט/): *"החל מ-800 ₪ + מע״מ"*, for which *"עורך דין מטעמנו יכין עבורכם תקנון אתר ותנאי שימוש"*, with *"אופציה - עריכת מדיניות פרטיות והצהרת נגישות"*. So: the ₪800 floor covers the terms document; **the privacy policy is an add-on and the page does not state its price.** The guide says exactly that. Page's own modified date: 2026-04-26.
- **Ettorney** — [תנאי שימוש ומדיניות פרטיות לאתר/אפליקציה](https://www.ettorney.co.il/product/תנאי-שימוש-ומדיניות-פרטיות-לאתר/): the page's own FAQ asks *"כמה עולה עריכת תנאי שימוש ומדיניות פרטיות?"* and answers *"מחיר השירות שמוצג כיום באתר הוא 2,000 ₪ בתוספת מע״מ."* Page's own modified date: 2026-10-05.

**Caveat the guide carries in its own text, because it matters:** that same
Ettorney page also renders the price line for registering a limited company —
*"עלות פתיחת חברה בע״מ: ₪2000 + מע״מ"* — and part of the page returned a
WordPress critical error when fetched. The two figures are identical, which is
exactly how a number gets misattributed. The guide tells the reader to read the
price on the page on the day they buy.

---

## 2. Deliberately not stated anywhere in the guide

Written here so a later session reads these as decisions, not oversights.

### 2.1 Any lawyer fee, hourly or fixed — and the correction to the work order's own number

The work order's file map asks this document to *"verify the lawyer fee (≈₪1,500–2,000 + VAT)"*, a range the demand map carries as *"pay a lawyer ~₪1,500-2,000 plus VAT"* and attributes to *"Ettorney at a published ₪2,000+VAT"*.

**That did not survive verification, and the guide states no lawyer fee at all.** What was actually found:

1. The only ₪2,000 that can be tied to a page is **Ettorney's own fixed product price for an online document service** (§1.11) — not a lawyer's fee for bespoke drafting or review, and on a page that displays the same figure for a company registration and partly failed to load.
2. **No source for ₪1,500 was found.** Nothing read in this session publishes that figure for anything related to these documents.
3. **No Israeli lawyer's published hourly or fixed rate for drafting or reviewing terms of use and a privacy policy for a small product was found at all.** Searches in Hebrew returned law-firm content pages about the documents, two online document services with fixed prices, and no rate card.

The guide therefore says, in its own words, that it looked and found no published number, that it will not invent one, and that the only thing it can say about that price is what controls it — the hours — which is the whole reason the "what to have ready" section exists. A guide about legal documents that invents a legal fee is worse than a guide that says it does not know.

### 2.1b "You may write it yourself" is an inference, and is labelled as one on the page

The guide's free route rests on a reading of section 11: the section speaks to
what the notice must contain, not to who drafts it. **No source says a
self-drafted document is acceptable, and none was found.** That sentence was
rewritten before publish so it reads as this desk's reading of the section
rather than as a settled permission, and it sends a reader who wants certainty
on the point to a lawyer. It is the one sentence on the page that edges from
orientation toward advice, and it is marked.

### 2.2 Any claim that the two documents are, or are not, legally required by name

What is verified is narrower and is what the guide says: the stores require a document called a privacy policy (§1.1, §1.2); Israeli law as the Authority's own opinion describes it requires a **notice with defined contents** when a person is approached for information (§1.5); and the enforcement that happened examined the terms-of-use and privacy-policy pages as the place those contents were missing from (§1.6). The guide does not assert "the law does not require a privacy policy" as a bare legal conclusion — it states the duty that is published and where that duty is normally discharged.

### 2.3 What the GDPR actually requires

Only Article 3's scope was read (§1.9). Nothing about lawful bases, notices, data-subject rights, representatives, transfers or penalties was checked, and the guide says so in one sentence rather than summarising a regulation it did not read.

### 2.4 Whether a subscription to a product falls under "מידע כהגדרתו בחוק המחשבים"

The Consumer Protection Authority's page lists that category among purchases that cannot be cancelled (§1.10). Whether a recurring subscription to an AI-built product sits there is a question of application, not of reading, and the guide names it as one of the three things it deliberately left open.

### 2.5 The DPO appointment duty, beyond one line

The thresholds are published on the same Authority page (§1.8's source): data traders holding information on more than 10,000 people; a controller or holder whose main business includes processing specially-sensitive information at significant scale, or activity requiring ongoing and systematic monitoring of people at significant scale; and public bodies, with banks, insurers, hospitals and HMOs named expressly. The guide mentions this only to say the reader is nowhere near it. A non-enforcement policy on the DPO duty exists on the Authority's site and **was not read**; the guide makes no claim about it.

### 2.6 Anything about income tax, VAT, invoicing or incorporation

Out of this guide's subject. Where it touches money changing hands, it links to `sell-an-ai-built-app`, which carries the one tax figure this site has verified.

### 2.7 Any figure for what a copied document costs in a lawsuit, or any estimate of risk

One real, dated enforcement decision with one real number (§1.6) is the whole evidence the guide has, and it is presented as what it is: one decision about one company. No likelihood, no exposure range, no "could reach" figure.

---

## 3. Dates a later session should re-check first

| Fact | Where | Why it moves |
|---|---|---|
| Google Play's privacy-policy and account-deletion requirements | §1.1, §1.3 | Policy pages are rewritten without notice |
| Apple 5.1.1 wording | §1.2, §1.3 | Guidelines are revised several times a year |
| The two document prices | §1.11 | Published product prices, and one page is already unstable |
| The ₪122,833 / threshold figures in sibling guides | — | Not used here |
| Registration and notification thresholds | §1.7 | Secondary legislation under Amendment 13 is still landing |
