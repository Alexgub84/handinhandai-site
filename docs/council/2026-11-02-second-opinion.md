# Second opinion: the app-publishing service

Written 2 November 2026, in-house, deliberately without reading the council's answers.
Brief: `/tmp/brief-r1.txt`. Currency at roughly 3.6 shekels to the dollar.

My position in one paragraph, before the arguments: the offer as priced is worse paid
work than anything else he does, the Google half risks an asset worth more than the
product's entire plausible lifetime revenue, and the headline verb ("I publish your
app") is the one verb with a public $25 price. The business inside this brief is real,
but it is a paid pre-submission audit that ends in a fix list, not a publishing
service. Below: the economics, the account risk, the defensibility, the traps, then
the brief's two questions.

---

## 1. The economics, before anything else

### What a realistic "both stores" job actually costs him

The 1,290 shekel package is not a two-hour upload. Priced honestly, including the work
he does before being paid and the work the package promises after:

| Phase | Hours |
|---|---|
| Free readiness check, charged to the paying client at a 50% close rate (2 to 3h per prospect) | 4 to 6 |
| Google: signing, AAB, listing copy, 8 screenshots, feature graphic, content rating, Data safety form, app access, ads/audience/health declarations, upload, release | 4 to 6 |
| Apple: walking a non-developer through enrolment and the Admin invite, certificates and provisioning, bundle ID and App Store Connect record, getting an Expo/Flutter project to archive cleanly on *his* Mac, privacy labels, age rating, export compliance, three screenshot size classes, review notes, demo account | 6 to 10 |
| Rejection loop, expected value (first-submission rejection for an AI-built app by a non-developer is realistically 40 to 60%, commonly 5.1.1 account deletion, 4.3 design spam, 2.1 incomplete, 3.1.1 payments; each round is read, reproduce, explain in Hebrew, wait, rebuild, resubmit) | 3 to 6 |
| Included updates actually used (the package promises up to 6 per store over 3 months; assume half) | 3 to 5 |
| Three months of Hebrew WhatsApp support | 2 to 4 |
| **Total** | **22 to 37** |

Midpoint 28 hours for 1,290 shekels. **That is about 46 shekels an hour.**

Israeli minimum wage is around 34 shekels an hour. He has built a product that pays
roughly 1.3x minimum wage, before VAT, before the Mac, before tooling, and before any
allowance for the Google account risk in section 2.

The other two packages are no better, and the Apple one is the worst:

- Google only, 590: 9 to 13 hours, **45 to 65 shekels an hour**.
- Apple only, 790: 14 to 22 hours, **36 to 56 shekels an hour**.
- Both, 1,290: 22 to 37 hours, **35 to 59 shekels an hour**.

The Apple package being the worst-paid is backwards. Apple is the half with genuine
scarcity (a Mac, certificates, review handling, no Fiverr substitute at quality) and
it is priced at 790.

The one well-priced line on the whole sheet is the month-4 retainer: 290 shekels for
up to four updates is 2 to 3 hours, so 100 to 145 an hour. He priced the best product
as an afterthought.

### Against his alternative use of the same hour

His own rejection-diagnosis rate, in his own price list, is 250 an hour. So the
publishing packages pay him **14 to 23% of his own self-declared cheapest hourly
rate**, and well under 10% of what an Israeli solo AI/systems consultant actually
bills. Every hour spent uploading a stranger's app is an hour not spent on work that
pays five to ten times more.

Worse, the hours are the wrong *shape*. WhatsApp support in Hebrew over three months,
per client, is interruption-driven work. For someone whose real income depends on long
uninterrupted blocks, the true cost of a 1,290 shekel job is not 28 hours, it is 28
hours plus the context-switch tax on the consulting week around it. The constraint in
the brief ("must not consume all his time") is violated by the pricing structure
itself, not by the volume.

### The structural error

He priced the **labour** (an upload) when the scarce thing is the **judgement** (will
this pass, and what exactly must change). And then he gave away free the only part
that is pure judgement, cheap to deliver, asynchronous, and genuinely valuable: the
readiness check.

So: **the pricing is wrong, and in a specific way.** The fix is not a percentage
increase. It is to sell the check and stop subsidising the upload.

### What the prices should be

1. **Readiness audit: 490 shekels, paid, fixed scope, 2 to 3 hours.** Delivered as a
   written Hebrew document: go/no-go per store, a numbered fix list, a stated rejection-
   risk estimate with the specific guideline each risk maps to, and the exact wording to
   send App Review if rejected. That is 165 to 245 an hour, it carries zero account risk,
   it is asynchronous, and it is the product.
2. **Credit the 490 against a submission package** if they proceed. This removes the
   free-work leak without killing conversion, and it makes the audit a commitment test
   rather than a price.
3. **Submission packages: Apple 2,400 to 2,900. Google 1,200 to 1,500. Both 3,200 to
   3,900.** This lands at or just under app2store.co.il's 2,490 to 3,990, which is the
   correct place to be (see trap 2).
4. **Included updates: two total, not two per month for three months.** Then a care
   plan at 390 a month sold from day one.
5. **First rejection round included; after that 350 an hour, not 250.**
6. **Hard scope line: he does not fix the app.** Every line on the fix list is either
   the client's work or a separately quoted build from the software house.

At those numbers a "both stores" job is 3,500 shekels for perhaps 18 hours (fewer
included updates, paid audit, capped rejection rounds), which is about 195 an hour.
That is still below his consulting rate, which is the honest reason this is a side
service and not a business. But it is defensible, and the audit line on its own is
genuinely good paid work.

### Is this a product or a lead magnet?

Both, and the order matters. It should be run as a **qualified-lead machine with
positive unit economics**, not as a revenue line. The buyer persona is "I built an app
with AI and I am stuck at the gate." Read that again as a lead profile: a person with a
business idea, demonstrated willingness to pay for software, a working build, and the
fresh discovery that the last 10% is the hard 90%. That is the highest-intent lead
source he will ever have for an AI-agent software house, and the audit makes it pay for
itself.

But the lead-magnet instinct has a sharp correction attached: **a free magnet attracts
the $25 Fiverr buyer, who is the wrong lead.** A 490 shekel audit filters for the buyer
who has a budget. Price is the filter. Keeping the check free is the single most
expensive decision in the current plan, because it costs him 4 to 6 hours per paying
client *and* selects against the clients worth having.

---

## 2. The Google account risk, concretely

### What is actually at stake

Google Play policy strikes land on the developer account, not the app. Google's
associated-account enforcement suspends accounts linked by payment profile, D-U-N-S,
device, email, or app association, and reinstatement appeal success on account-level
terminations is low and opaque.

So the loss event is not "an app gets removed." It is:

- Every product currently shipped from that organisation account goes off Play. Based on
  this repo, that plausibly includes live client products (Plumberg under
  `com.zinberg.plumberg.app`, Koma under `com.handinhandai.koma`). A termination is then
  a client-facing contractual event on paying engagements, not an inconvenience.
- Google's association rule then threatens any replacement account opened by the same
  person or entity. The realistic loss is "the Hand in Hand AI identity is barred from
  Google Play", which ends the Android delivery half of the actual software house.

Conservatively valued, that is 150,000 to 400,000 shekels of delivery capability,
remediation, lost installs and ratings, and credibility with existing paying clients.
Take 250,000.

### The arithmetic

Let *p* be the chance a given hosted client app eventually produces an account-level
enforcement event. For a hand-audited app from a client he has met, whose code he
installed and whose data flows he enumerated: *p* around 0.5 to 1.5%. For an app
arriving as an AAB over WhatsApp from a stranger: **3 to 6%**, driven by the three
things he cannot verify (undisclosed data collection that makes the Data safety form a
misrepresentation, IP provenance of assets and logos in an AI-built app, and
undisclosed regulated content).

The risks are also **not independent**. Google's Repetitive Content and spam
enforcement evaluates the account's portfolio, exactly as Apple's 4.3 does. An
organisation account holding fifteen unrelated AI-built apps from fifteen strangers
looks, to a classifier, precisely like a template farm. So past roughly 10 to 15
unrelated apps, add a standing annual hazard of 5 to 10% from classification alone.

Survival at *p* = 4%:

| Unvetted hosted apps | P(account survives) |
|---|---|
| 5 | ~82% |
| 10 | ~66% |
| 15 | ~54%, and nearer 45 to 50% once the portfolio hazard is included |

### Expected loss per job versus revenue per job

- Revenue: 590 shekels.
- Expected loss at *p* = 4%: 0.04 × 250,000 = **10,000 shekels**.

The expected loss is about **17 times the revenue of the job**.

**Breakeven *p* is 590 / 250,000 = 0.24%.** Hosting a client app on that account is
rational only if the per-app chance of account-level enforcement is under a quarter of
one percent. He cannot credibly reach that on code he did not write, for a client he
met in a Facebook group, whose IP provenance he cannot verify, in a buyer segment
defined by "I built this with AI", which is the exact population that ships someone
else's logo, someone else's API key, and a Data safety form it does not understand.

Raise the price to 3,000 and breakeven *p* is still only 1.2%. Value the asset at a
pessimistic 150,000 and 590 shekels still needs *p* under 0.4%. **There is no price in
this market at which hosting unvetted apps on that account clears.**

### So: how many unvetted apps?

**Zero.** Not "a few, carefully." Zero. At ten jobs a month, which he cannot deliver
solo anyway, the whole service grosses perhaps 155,000 a year and nets far less, while
staking a 250,000 single-point asset on every single job.

### What vetting actually buys

Vetting moves *p* from roughly 4% to roughly 1%, no lower. It cannot touch the two
risks that matter most: a third-party IP complaint months later over an asset he had no
way to trace, and portfolio-level spam classification, which is a function of how many
apps are on the account rather than of any one app's quality. Vetting also costs 3 to 5
hours per app, which at 590 shekels destroys what little margin exists. **Vetting is
necessary and insufficient.**

### The call on the Google half

**Do not sell hosting. Sell "I get *your* account to production."**

The 12-tester gate is not actually the hard part, and he is the only person in this
market who knows that. Twelve testers for fourteen days costs $15 from a broker or is
one WhatsApp group of twelve friends. What people do not know is that the fourteen days
is wall-clock dead time they cannot compress, that the Data safety form is where they
will actually be rejected, and that their SDK target level is already wrong. So the
Android product is: readiness audit, plus the console work on *their* account, plus
running the closed test on their behalf. Same knowledge, same fee, no asset at risk.

Hosting on his organisation account survives only as a **rationed, audited,
time-boxed, premium exception**: a client whose code he personally audited and whose IP
he verified, priced at 3,000 or more, with a contractual mandatory transfer inside 60
days, and a hard cap he states to himself in writing (never more than two such apps
live at once). If separation is wanted long-term, it needs a genuinely separate entity,
separate D-U-N-S, separate payment profile, separate email domain, and a browser
profile and device never shared with the software house. Be honest about what that buys:
Google's association heuristics look at the human and the payment instrument, so
separation reduces the risk, it does not zero it.

### The best part of this answer

His own test post already produced the objection "how do I know you won't keep my app",
with a pointer to cheap tester services. He read it as a FAQ to answer. It is a product
correction. The market is telling him that hosting is a **trust liability, not a
feature**, and the fix turns the objection into his strongest headline:

> האפליקציה נשארת בחשבון שלך. אני לא מחזיק אפליקציות של לקוחות.
> ("The app stays in your account. I don't hold clients' apps.")

app2store, which bundles testers and therefore almost certainly hosts or brokers,
cannot say that sentence without changing its model.

---

## 3. What is defensible

Taking each candidate moat and timing how long it survives:

| Claimed moat | Time to copy |
|---|---|
| Doing the upload | one day, and already copied: Fiverr, app2store |
| The verified organisation account | two weeks and a D-U-N-S |
| Hebrew, a contract, a reachable human | one week, by any of a few hundred Israeli freelance mobile developers who see the page rank. app2store already has it |
| A content page explaining the 12-tester rule | one afternoon. Another operator published one four days before his research, so he is already behind on the only asset he is building |
| A Mac and Xcode | about 7,000 shekels |

**Honest answer: nothing in the stated offer is defensible.** Google is also actively
shortening the gap every quarter (the October 2026 AI Studio private-publishing feature
is a statement of intent), so the mechanical knowledge depreciates on a schedule set by
someone else.

One thing compounds, and it is not a blog.

**A private, structured rejection corpus.** Per job, paid or audited: the verbatim
rejection text, the guideline cited, the app type, the stack (Expo, Flutter, Lovable,
Base44, web-to-app wrapper), the fix that cleared it, and the number of rounds it took.
After 40 to 60 jobs he can say something nobody else in Hebrew can say, before taking
money:

> Apps built the way yours is built get rejected about 60% of the time, usually on
> 5.1.1 and 4.3. Here are the seven things to change first.

That cannot be copied in a month because it is not information, it is **outcomes**. It
takes six to twelve months of real jobs to accumulate, it improves with every job
including the ones he loses, and it is the thing that makes the paid audit credible
rather than a man guessing for 490 shekels.

Note what it implies: the corpus is only built by doing the audits, and the audits are
only priceable because of the corpus. That is a flywheel, and it is the only one here.
Hosting apps on his account builds no corpus and no flywheel; it just converts time and
risk into 590 shekels.

**What he should sell, built on the same knowledge:** the pre-submission audit with a
quoted rejection probability, plus an outsourced release-manager retainer for the
Israeli dev shops and freelancers who build apps and do not want to run releases. That
second buyer understands the value immediately, does not haggle, has no hostage fear,
and arrives in batches rather than one at a time.

---

## 4. What I would tell him not to do

**Trap 1: building the business on the organisation-account exemption.** It is the most
striking fact in the brief, it is the one thing Fiverr and app2store cannot easily
match, and it feels like *the* differentiator. It is a 17-to-1 bet against him per job
on an asset that carries his clients' live products, and the portfolio effect means app
*n+1* is riskier than app *n*. Every incentive points at scaling exactly the thing that
must not scale. This is the trap the brief is most likely to walk into.

**Trap 2: undercutting app2store.** Being two to four times cheaper than the only
comparable Hebrew provider is not positioning, it is a signal. His buyer's dominant
fear, per his own test post, is abandonment and hostage-taking, not price. To a small
business or a pre-seed founder, 590 shekels says "this person will vanish or is doing
this as a hobby." Price at or just under the competitor and spend the difference on a
written contract, named liability, and a stated 48-hour response commitment. Cheap is
the one position a one-person operation can never defend, because Fiverr sits ten times
below him and always will.

**Trap 3, lesser but real: translating the Hebrew page into English for volume.** See
section 6.

---

## 5. Brief question 1: framing and headline

### The frame

**Not "I publish your app to the stores."** That frame fails on four counts: its verb
is a commodity with a public $25 price, so he gets compared to Fiverr whether he likes
it or not; it implies he takes custody, which triggers the hostage objection; it
promises an outcome he openly cannot guarantee, so his honesty reads as a defect rather
than as expertise; and it sells the two hours instead of the two hundred hours of
accumulated store knowledge.

**The frame is the gatekeeper's reading.** He is the person who reads your app the way
App Review will read it, before App Review does, and then gets it through. That frame
prices judgement rather than labour, makes "no guarantee of approval" a feature (nobody
can guarantee it; what he can do is tell you your odds and cut them), gets stronger as
the corpus grows, generates build work for the software house, carries zero account
risk, and is asynchronous and bounded, which is what a side service has to be.

### The headline and the page

H1:

> **בנית אפליקציה. עכשיו תגלה למה היא תידחה — לפני שאתה מגיש.**
> ("You built an app. Now find out why it will be rejected, before you submit.")

Sub:

> בדיקת מוכנות כתובה לשתי החנויות, תוך 3 ימי עבודה: רשימת תיקונים ממוספרת, הערכת
> סיכוי דחייה לפי סעיף, ומה בדיוק להגיד ל-App Review אם נדחית. 490 ש״ח, מתקזז מול
> ליווי הגשה מלא.

Trust line, placed high and kept forever:

> **האפליקציה נשארת בחשבון שלך. אני לא מחזיק אפליקציות של לקוחות.**

The content-led structure he already planned is right, with one change: the page should
end at the audit, not at the packages. The packages belong on a second page the audit
links to. A page that explains the gates and then asks for 3,500 shekels converts worse
than a page that explains the gates and then asks for 490.

### What to give away free

Not the check. Give away **the corpus in public form**: a page per real rejection, with
the verbatim English rejection message as the heading, the Hebrew explanation of what
the reviewer actually means, and what cleared it. Desperate people paste
`Guideline 5.1.1 - Legal - Privacy - Data Collection and Storage` into Google verbatim,
and there is almost nothing in Hebrew on the other side of that search.

Plus exactly one bounded free thing: a 15-minute WhatsApp voice answer to one specific
question, once per person. Its smallness is the filter.

### Channels for the first ten clients

1. **The Facebook groups where the 12-tester question already appears weekly.** Not an
   ad. A complete public answer with the actual fix, no pitch, link in the signature. He
   already has tooling for watching those groups. Ten to fifteen real answers should
   produce the first three to five clients. In month one this is the only channel that
   matters.
2. **The despair search.** One Hebrew page each for the literal strings: `12 בודקים 14
   יום`, `Guideline 4.3 עברית`, `Guideline 5.1.1`, `דחו לי את האפליקציה באפל סטור`,
   `אין לי מק איך מעלים לאפ סטור`. Slow, and the only compounding channel. A competitor
   started four days ago, so this starts this week or he concedes it.
3. **The supply side of the AI-build boom.** The Israeli Lovable, Base44, Bolt and
   Cursor communities, and the people teaching those tools to Israeli audiences, all have
   students who finish an app and hit the wall. One referral arrangement with a course
   operator outweighs all the SEO. **Base44 is Israeli; that is the single
   highest-leverage conversation available to him.**
4. **The developers who vanished.** Israeli freelance app developers and small agencies
   who build but do not want to run releases. White-label the release half. They
   understand the value, arrive in batches, and have no hostage fear.

Not: paid ads, not Fiverr, not Upwork, not cold email.

---

## 6. Brief question 2: Hebrew only or English too

**Call: Hebrew only for the service. English only for the rejection corpus. No English
sales page for at least six months.**

His moat in Hebrew is distribution and trust, both local. In English the moat is not
merely zero, it is negative: non-native marketing copy, an Israeli timezone, and no
local legal standing make him *the risky option* against a Fiverr seller with four
hundred reviews, while charging ten times more. He loses on exactly the axes he
currently wins on.

The market-size worry is the wrong worry. **He is time-constrained, not
demand-constrained.** A few hundred relevant Hebrew buyers a year, at a 490 audit and a
3,500 package, is more than a side service can absorb at the hours in section 1. Adding
English solves a problem he does not have and creates one he cannot handle: 24-hour-cycle
support in a second language, on top of consulting.

The brief's own observation that the Apple half travels well is true and still leads to
the wrong conclusion. The Apple half travels on **skill**, but the sale does not travel
on skill, it travels on **trust**, and trust in English is bought with marketplace
reviews, which means Fiverr or Upwork, which means competing at their prices under their
take rate. If he ever wants international revenue the vehicle is not an English landing
page. It is being the person other people's *tools* recommend (an Expo, Base44 or
web-to-app partner listing) or productising the corpus as a paid English report.

The cheap exception: **publish the corpus in English.** The rejection text is already
English, it ranks far better than Hebrew, it costs nothing extra, and inbound from it
measures whether English demand is real before he builds an English offer. Revisit only
if English inbound exceeds roughly five qualified requests a month at Hebrew prices.

### If he ever does build an English page, what it must NOT copy

- **Not the trust section.** "A reachable Hebrew-speaking human with a contract under
  Israeli law" is meaningless to negative abroad. Replace it with verifiable artifacts:
  named case outcomes, a public rejection-resolution record, a fixed-scope written
  statement of work.
- **Not the prices.** 3,500 shekels reads as premium-sane next to app2store's 3,990. The
  same number in English sits next to a $75 gig and has to be justified completely
  differently, as release engineering against an engineer's day rate.
- **Not the Google-gate education, and not the organisation account at all.** Explaining
  the exemption invites "so host mine" from precisely the clients he can neither vet nor
  sue, in jurisdictions where his contract is decoration. The English page should never
  mention that he has an organisation account.
- **Not the WhatsApp response commitment.** A three-hour Hebrew reply is a real promise
  in Israel. The same promise across twelve timezones is one he will break.

---

## The one-line version

Put the Hebrew page up this week selling one thing, a 490 shekel written
pre-submission audit credited against a 3,200 shekel submission package, with "the app
stays in your account" where the organisation-account offer used to be.
