/**
 * All content for `/app-publishing`, in render order.
 *
 * Round 3 of work order #82 restructures the page into a content-led
 * ("advertorial") flow, settled in `docs/specs/app-publishing/landing-best-practices.md`
 * ("Section flow for /app-publishing", 12 sections: header chrome + 11
 * content sections + footer chrome). The manager's binding ruling: reordering
 * a section must be a data edit, not an edit to `app-publishing.astro`'s
 * import list. `sections` below is the mechanism — `app-publishing.astro`
 * renders it in array order and dispatches on `kind`; nothing in that file
 * lists a section by hand.
 *
 * Pricing table, add-ons, exclusions, FAQ and `waMessage` carry over from
 * rounds 1–2 (edited per round 3's SEO rulings where noted below), still the
 * source of truth for the pricing section and the FAQPage JSON-LD.
 *
 * Standing invariants (all rounds): no "הסכם לדוגמה" (sample agreement PDF —
 * doesn't exist), no "form" wording (no intake form yet, #83), no client or
 * product name anywhere, never the Apple "exception you can keep quiet"
 * paragraph (offer.md's "Platform rules and risks" — pre-launch-on-our-account
 * carve-out is deliberately not public copy).
 *
 * Images: `public/home/alex-byline-240.webp` (hero byline) and
 * `alex-portrait-700.webp` (about section) are a transparent, background-
 * free cutout, referenced below via `ImageAsset` fields rather than
 * hardcoded in a component, same as every other piece of fillable content
 * in this file. `alex-cutout.webp` (1188×1400, the master this pair was
 * cropped from) is committed alongside them for a future page to use —
 * nothing on this page references it directly.
 */
import type { IconName } from "@/components/home/icons";

export interface PricingRow {
  label: string;
  /** [Google-only, Apple-only, both-stores] — same column order as `columns`. */
  values: [string, string, string];
  /** Marks the headline price row for visual emphasis. */
  highlight?: boolean;
}

export interface PricingTable {
  columns: [string, string, string];
  rows: PricingRow[];
}

export interface AddOn {
  label: string;
  price: string;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

/**
 * WhatsApp prefill text for every real WhatsApp CTA on this page (what-we-do,
 * pricing, closing-cta, and the page header) — issue #82 round 2, design §C3.
 * Not the homepage's own default greeting (`waGreeting` in site-contact.ts):
 * this one names the free readiness check so the conversation starts on-topic.
 */
export const waMessage = "היי אלכס, בניתי אפליקציה ואשמח לבדיקת מוכנות חינם לפני העלאה לחנויות";

export const pricingTable: PricingTable = {
  columns: ["השקה בגוגל פליי", "השקה באפ סטור", "שתי החנויות"],
  rows: [
    {
      label: "בדיקת מוכנות של מפתח",
      values: ["כלול", "כלול", "כלול"],
    },
    {
      label: "פרסום מלא: קובץ, דף חנות, טפסים, הגשה, סבב בדיקה",
      values: ["מהחשבון העסקי שלנו", "מהחשבון שלכם, אנחנו עושים הכל", "שניהם"],
    },
    {
      label: "עדכונים",
      values: ["עד 2 בחודש, 3 חודשים", "עד 2 בחודש, 3 חודשים", "עד 2 בחודש לכל חנות, 3 חודשים"],
    },
    {
      label: "תמיכה",
      values: ["וואטסאפ, בעברית", "וואטסאפ, בעברית", "וואטסאפ, בעברית"],
    },
    {
      label: "מחיר",
      values: ["590 ₪", "790 ₪", "1,290 ₪"],
      highlight: true,
    },
    {
      label: "אחרי 3 חודשים",
      values: ["150 ₪ לחודש או העברה", "190 ₪ לחודש", "290 ₪ לחודש"],
    },
  ],
};

export const addOns: AddOn[] = [
  { label: "העברת האפליקציה בגוגל לחשבון שלכם (כולל ליווי בפתיחת חשבון עסקי ומספר D-U-N-S)", price: "290 ₪" },
  { label: "עדכון מעבר לחבילה", price: "120 ₪ לחנות" },
  { label: "צילומי מסך מעוצבים", price: "200 ₪ לחנות" },
];

export const exclusions: string[] = [
  "אגרות החנויות (גוגל 25$ חד פעמי, אפל 99$ לשנה, משולמות ישירות לחנויות)",
  "פיתוח ותיקונים",
  "כתיבת מדיניות פרטיות מאפס (נפנה למחולל)",
];

/** Highlighted-row prices as plain numbers, parsed once from `pricingTable` so
 *  the new FAQ entry below (and the Service JSON-LD's `offers`) can compute
 *  from the data instead of retyping 590/790/1290 a third time. */
const highlightRow = pricingTable.rows.find((row) => row.highlight);
const priceFor = (columnIndex: number): string => highlightRow?.values[columnIndex] ?? "";

export const faq: FaqEntry[] = [
  {
    // New, placed first per round 3's Facebook/Trends/PAA follow-up
    // (docs/seo/app-publishing-queries.md, "## Round 2"): matches a real
    // People-Also-Ask question and a real Facebook post, verbatim. Given in
    // Hebrew spelling deliberately, as instructed — it quotes the exact
    // phrase found in the research, overriding the Latin-script rule below
    // for this one case. Answered from material already on the page (the
    // readiness check + the Google step of what-we-do), no new claims.
    question: "איך מעלים אפליקציה לגוגל פליי?",
    answer:
      "קודם בודקים מוכנות בחינם, לפני תשלום: טלפון אמיתי, הרשאות, פרטיות ומחיקת חשבון. אחרי האישור מעלים מהחשבון העסקי המאומת שלנו — בלי 12 טסטרים ובלי 14 יום המתנה — ממלאים Data Safety ודירוג תוכן, ומגישים. בדרך כלל האפליקציה באוויר תוך ימים.",
  },
  {
    question: "למה בגוגל מהחשבון שלכם ובאפל מהחשבון שלי?",
    answer:
      "גוגל מאפשרת פרסום מחשבון אחד והעברה רשמית לחשבון אחר, ולחשבון עסקי אין דרישת טסטרים, אז זה חוסך לכם שבועות. אפל רוצה שהאפליקציה תפורסם מחשבון של בעל האפליקציה, ומאפשרת להזמין אנשי מקצוע לחשבון. אז שם אתם פותחים חשבון (99$ לשנה, 20 דקות), ואנחנו עושים את העבודה.",
  },
  {
    // Question and answer-opening reworded to the bound SEO strings per work
    // order #82 round 3, ruling 3 — replaces the old "האם אני צריך מק?".
    // Store name switched to Latin script in the question per the Round 2
    // Trends follow-up (Israelis search "App Store", not "אפ סטור").
    question: "האם צריך מק כדי להעלות אפליקציה ל-App Store?",
    answer:
      "לא, אפשר להעלות אפליקציה לאפ סטור בלי מק. לאנדרואיד כל מחשב מספיק. ל-iOS אנחנו בונים ומעלים מהמק שלנו, או דרך Expo EAS אם האפליקציה שלכם ב-Expo.",
  },
  {
    // Reworded to the bound SEO string per round 3, ruling 3 — replaces the
    // old "מתי אוכל להעביר את האפליקציה בגוגל לחשבון שלי?". Store name
    // switched to Latin script per the Round 2 Trends follow-up.
    question: "מתי אפשר להעביר את האפליקציה לחשבון מפתח Google Play עסקי משלכם?",
    answer:
      "כשיש לכם חשבון עסקי (עוסק או חברה ומספר D-U-N-S) או חשבון פרטי שכבר קיבל גישה לייצור. העברה לחשבון פרטי חדש לא עוקפת את דרישת הטסטרים, כי הדרישה היא על החשבון. אנחנו מלווים בפתיחת החשבון העסקי.",
  },
  {
    question: "מה אם האפליקציה נדחית?",
    answer:
      "זה קורה, במיוחד באפל בהגשה ראשונה. תקבלו את סעיף הדחייה, הסבר בעברית, ומה בדיוק לשנות. אתם מתקנים (או המפתח שלכם), אנחנו מגישים מחדש. בלי תשלום נוסף בתוך החבילה.",
  },
  {
    question: "מה בודקים בבדיקת המוכנות?",
    answer:
      "התקנה והרצה על טלפון אמיתי, התחברות ופעולה מרכזית, מחיקת חשבון בתוך האפליקציה, מדיניות פרטיות מול מה שבאמת נאסף, גרסת SDK (אנדרואיד 16, iOS 26), הרשאות והסברים, תשלומים דיגיטליים דרך החנות, נכסים (אייקון, צילומי מסך), שם זמין, ואין נכסים או שמות של מותגים אחרים.",
  },
  {
    question: "אתם מתקנים באגים?",
    answer: "לא בחבילה. אם צריך, נציע הצעת מחיר נפרדת או נפנה למפתח.",
  },
  {
    question: "כמה זמן זה לוקח?",
    answer:
      "בדיקת מוכנות: יום עסקים. גוגל: באוויר בדרך כלל תוך 1 עד 7 ימים מהתשלום. אפל: 1 עד 3 ימים לבדיקה, פלוס זמן לתיקונים אם יש דחייה. חשבון אפל חדש לוקח לאפל 1 עד 3 ימים לאשר.",
  },
  {
    // Last sentence replaced per round 2, §C2 — "הטופס מפרט הכל" refers to
    // the intake form, which doesn't exist yet (#83).
    question: "מה צריך לשלוח?",
    answer:
      "גוגל: קובץ AAB חתום. אפל: גישה לריפו (GitHub) או פרויקט מכווץ. שניהם: אייקון 1024x1024, לפחות 3 צילומי מסך, שם, תיאור קצר וארוך, קישור למדיניות פרטיות, אימייל תמיכה, ומשתמש לבדיקה אם יש התחברות. את הרשימה המלאה תקבלו בתשובה הראשונה.",
  },
  {
    question: "מה אתם לא מפרסמים?",
    answer:
      "הימורים, תוכן למבוגרים, מסחר בקריפטו, הלוואות, אפליקציות עם הבטחות רפואיות, העתקות של אפליקציות או מותגים קיימים, ואפליקציות שהן רק אתר בתוך מסגרת.",
  },
  {
    question: "יש הנחה לכמה אפליקציות?",
    answer: "כן. מהאפליקציה השנייה 20% הנחה על ההשקה.",
  },
  {
    // New per round 3, ruling 3 — the strongest verified price-research
    // phrase found (docs/seo/app-publishing-queries.md, #5/#6, relevance
    // 1250). Answer computed from `pricingTable` above, not retyped, so a
    // future price change can't silently desync this answer. Store names
    // switched to Latin script per the Round 2 Trends follow-up.
    question: "כמה עולה להעלות אפליקציה ל-Google Play ול-App Store?",
    answer: `${pricingTable.columns[0]}: ${priceFor(0)}. ${pricingTable.columns[1]}: ${priceFor(1)}. ${pricingTable.columns[2]}: ${priceFor(2)}. המחירים לא כוללים מע"מ, ככל שחל.`,
  },
];

/* ---------------------------------------------------------------------- *
 * Section data model (round 3, design §0 — binding). `app-publishing.astro`
 * renders `sections` in order and dispatches on `kind`; it lists no
 * component by hand. One entry per visible H2-level block (header and
 * footer are shell/page chrome, not entries here).
 * ---------------------------------------------------------------------- */

export type SectionImage =
  | { kind: "placeholder"; alt: string; caption: string; aspect?: string }
  | { kind: "asset"; src: string; alt: string; width: number; height: number; caption?: string };

export type SectionCta =
  | { kind: "none" }
  /** In-page anchor — moves the reader, asks for nothing (CTA strategy §1). */
  | { kind: "soft-link"; text: string; targetId: string }
  /** A real WhatsApp CTA. `label` is the visible text; how "real" it looks
   *  (primary button vs. a soft inline link) is each component's own call —
   *  About's is deliberately soft even though it carries this same kind. */
  | { kind: "whatsapp"; label: string };

export interface ArticleSectionData {
  kind: "article";
  id: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  image?: SectionImage;
  cta: SectionCta;
  /** true only for ownership (ruling 6: the one dark band on the page). */
  dark?: boolean;
  /** 860px reading-width cap (ruling 5) — true for google, apple, rejection,
   *  who-for-not, ownership; false/omitted for anything that keeps the full
   *  1100px `pg-wrap` (pricing's own section sets its own width directly). */
  readingWidth?: boolean;
}

/** A real, already-shipped image asset (as opposed to `SectionImage`'s
 *  "placeholder" case, for slots that don't have a real asset yet). */
export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface HeroSectionData {
  kind: "hero";
  id: string;
  eyebrow: string;
  h1: string;
  sub: string;
  /** Small round avatar next to the "X שנים בתחום" byline line (ruling 3,
   *  asset round — not a hero image). */
  byline: ImageAsset;
  cta: SectionCta;
}

export interface WhatWeDoSectionData {
  kind: "what-we-do";
  id: string;
  items: { icon: IconName; text: string }[];
  /** Absorbs the old "איך זה עובד, צעד אחר צעד" 7-step walkthrough's
   *  remaining detail (store review timing, links on launch) that isn't
   *  already covered by `items` — round 3 drops that walkthrough as its
   *  own section (design, File map). */
  closingNote: string;
  cta: SectionCta;
}

export interface AboutSectionData {
  kind: "about";
  id: string;
  cta: SectionCta;
}

export interface PricingSectionData {
  kind: "pricing";
  id: string;
  heading: string;
  cta: SectionCta;
}

export interface FaqSectionData {
  kind: "faq";
  id: string;
  heading: string;
}

export interface ClosingCtaSectionData {
  kind: "closing-cta";
  id: string;
  text: string;
  cta: SectionCta;
}

export type Section =
  | HeroSectionData
  | ArticleSectionData
  | WhatWeDoSectionData
  | AboutSectionData
  | PricingSectionData
  | FaqSectionData
  | ClosingCtaSectionData;

export const sections: Section[] = [
  {
    kind: "hero",
    id: "hero",
    eyebrow: "מדריך מעשי: פרסום אפליקציות",
    h1: "פרסום אפליקציה בגוגל פליי ובאפ סטור תוך ימים. בלי 12 טסטרים, בלי 14 יום המתנה, בלי מק.",
    sub:
      "בניתם אפליקציה בוייב קודינג — עם Claude, Cursor, Lovable, Replit, Expo, Flutter או Base44 — ועכשיו גוגל רוצה טסטרים ואפל רוצה Xcode. אנחנו מפתחים. אנחנו בודקים שהאפליקציה מוכנה, מעלים, ממלאים את כל הטפסים, עוברים את הבדיקה, ומעדכנים כשצריך. האפליקציה נשארת שלכם, עם הסכם חתום.",
    byline: {
      src: "/home/alex-byline-240.webp",
      alt: "אלכס, בעלים של בית תוכנה",
      width: 240,
      height: 240,
    },
    cta: { kind: "soft-link", text: "או דלגו על ההסבר ושלחו לבדיקת מוכנות", targetId: "what-we-do" },
  },
  {
    kind: "article",
    id: "google",
    // Store name switched to Latin script per the Round 2 Trends follow-up
    // (docs/seo/app-publishing-queries.md): Israelis search "Google Play",
    // not "גוגל פליי", by a wide margin.
    heading: "12 טסטרים ל-Google Play: מה הכלל, ומתי לא חל עליכם",
    paragraphs: [
      "חשבון מפתח פרטי וחדש בגוגל פליי חייב להריץ בדיקה סגורה עם 12 טסטרים במשך 14 יום רצופים, לכל אפליקציה בנפרד, ורק אחר כך לבקש גישה לייצור. הכלל חל על חשבונות שנפתחו מאז 13 בנובמבר 2023. טסטר אחד שמוחק את האפליקציה ביום העשירי מאפס את הספירה, וממשיכים מאפס.",
      "חשבון עסקי מאומת עם מספר D-U-N-S פטור מהדרישה הזו לגמרי. זה מה שאנחנו מריצים עליו: מפרסמים מהחשבון העסקי שלנו, בלי טסטרים ובלי 14 יום המתנה.",
    ],
    image: {
      kind: "placeholder",
      alt: "מסך קונסולת גוגל פליי המציג את דרישת 12 הטסטרים למשך 14 יום",
      caption: "צילום מסך של בדיקה סגורה בקונסולת גוגל פליי — יתעדכן.",
      aspect: "1200/750",
    },
    cta: { kind: "soft-link", text: "חשבון עסקי מאומת פוטר מהדרישה הזו, וזה מה שאנחנו מריצים עליו", targetId: "what-we-do" },
    readingWidth: true,
  },
  {
    kind: "article",
    id: "apple",
    // New heading per round 3's Facebook/Trends/PAA follow-up (ruling 4):
    // matches a live "האם צריך מק" thread and PAA cluster, and leads with
    // the short answer before the explanation, per the same ruling.
    heading: "צריך מק כדי להעלות ל-App Store? התשובה הקצרה",
    paragraphs: [
      "לא, אתם לא צריכים מק כדי להעלות אפליקציה ל-App Store.",
      "אפל לא עובדת כמו Google Play: אין טסטרים, אבל יש Xcode שרץ רק על מק, סרטיפיקטים, Provisioning Profiles, TestFlight ותוויות פרטיות — ו-App Review שדוחה הרבה הגשות ראשונות על סעיפים שלא ידעתם שקיימים.",
      "לפי כללי אפל, אפליקציה צריכה להיות מוגשת מהחשבון של מי שבאמת מחזיק בה (סעיף 5.2.1), וסעיף 4.2.6 דוחה אפליקציות שמגיעות משירות תבנית בלי שבעל התוכן מגיש אותן בעצמו. בגלל זה אתם פותחים חשבון מפתח של אפל (99$ לשנה, בלי חברה) ומזמינים אותנו כ-Admin, ואנחנו עושים את כל העבודה הטכנית מהחשבון שלכם.",
    ],
    image: {
      kind: "placeholder",
      alt: "מסך App Store Connect בהרשאת Users and Access להזמנת מנהל חדש",
      caption: "מסך ההזמנה ב-App Store Connect — יתעדכן.",
      aspect: "1200/750",
    },
    cta: { kind: "soft-link", text: "ככה נראית ההזמנה בפועל, בלי סיסמאות", targetId: "what-we-do" },
    readingWidth: true,
  },
  {
    kind: "article",
    id: "rejection",
    heading: "איך נראית דחייה, ומה עושים איתה",
    paragraphs: [
      'דחייה בהגשה הראשונה נפוצה באפל. שני המיילים שחשוב להכיר: "We noticed an issue" (או "Your submission was rejected") — יש משהו לתקן ולהגיש מחדש. "Your submission was accepted" (או "Ready for Sale") — האפליקציה באוויר.',
      "התפקיד שלנו הוא לתרגם את הדחייה לעברית פשוטה, להגיד בדיוק מה לתקן, ולהגיש מחדש — בלי תשלום נוסף בתוך החבילה.",
    ],
    image: {
      kind: "placeholder",
      alt: "תרשים דחייה מאפל עם הסברים על החלקים החשובים",
      caption: "דיאגרמת דחייה מאפל, עם הסברים — יתעדכן.",
      aspect: "1000/1200",
    },
    cta: { kind: "soft-link", text: "התשובה המלאה בשאלות הנפוצות", targetId: "faq" },
    readingWidth: true,
  },
  {
    kind: "what-we-do",
    id: "what-we-do",
    items: [
      {
        icon: "scan-search",
        text:
          "בדיקת מוכנות של מפתח (כלול, לפני תשלום). מתקינים על טלפון אמיתי, עוברים על ההרשאות, הפרטיות, מחיקת החשבון, גרסת ה-SDK, התשלומים, והכללים של שתי החנויות. מקבלים דוח קצר בעברית: ירוק, או רשימה ברורה של מה לתקן ואיך. משלמים רק אחרי האישור, וחותמים דיגיטלית על הסכם קצר.",
      },
      {
        icon: "rocket",
        text:
          "פרסום בגוגל פליי מהחשבון העסקי המאומת שלנו. אין דרישת טסטרים לחשבון עסקי. אנחנו בונים את דף החנות בעברית ובאנגלית, ממלאים Data Safety, דירוג תוכן, קהל יעד, ומגישים. בדרך כלל באוויר תוך ימים.",
      },
      {
        icon: "handshake",
        text:
          "פרסום באפ סטור מהחשבון שלכם. אתם פותחים חשבון מפתח של אפל (99$ לשנה, בלי חברה) ומזמינים אותנו כמנהלים. אנחנו עושים את השאר מהמק שלנו: סרטיפיקטים, בנייה, העלאה, TestFlight, דף חנות, תוויות פרטיות, דירוג גיל, הגשה, ותשובות ל-App Review.",
      },
      {
        icon: "sparkles",
        text: "עדכונים. שולחים לנו גרסה חדשה בוואטסאפ, אנחנו מעלים ומגישים. כלול בחבילה.",
      },
      {
        icon: "trending-up",
        text: "העברה. כשתפתחו חשבון עסקי משלכם בגוגל, מעבירים את האפליקציה אליכם בתהליך הרשמי של גוגל, כולל ביקורות והורדות.",
      },
    ],
    closingNote:
      "מההגשה ועד שהאפליקציה באוויר: בדרך כלל בין יום לשבעה ימים לבדיקה בחנות, עם עדכון בוואטסאפ בכל שלב — הוגש, בבדיקה, באוויר, או נדחה עם הסבר בעברית ומה לעשות. כשהאפליקציה באוויר, שולחים לכם את הקישורים.",
    cta: { kind: "whatsapp", label: "שלחו את האפליקציה לבדיקת מוכנות חינם" },
  },
  {
    kind: "article",
    id: "who-for-not",
    heading: "למי זה מתאים, ולמי לא",
    bullets: [
      "בניתם אפליקציה עם AI והיא עובדת, ונתקעתם על החנויות",
      "יש לכם אפליקציה אבל אין מק, ואין רצון ללמוד App Store Connect",
      "עסק קטן שהזמין אפליקציה ממפתח שנעלם, או שלא רוצה להעסיק אחד רק בשביל ההעלאה",
      "סטארטאפ שצריך MVP בחנויות השבוע, לא בעוד חודש",
    ],
    paragraphs: [
      "אנחנו לא בונים ולא מתקנים את האפליקציה שלכם. אם בדיקת המוכנות מוצאת בעיות, תקבלו רשימה מדויקת ותתקנו (או נפנה אתכם למפתח). ואנחנו לא מבטיחים אישור: ההחלטה היא של גוגל ואפל. מה שאנחנו מבטיחים: שהאפליקציה תוגש נכון, שכל דחייה תתורגם לעברית פשוטה עם מה לעשות, ושנגיש מחדש.",
      // New per round 3's Facebook follow-up (ruling 6): names the cheap
      // tester-broker alternative (~$15/12 testers, confirmed in
      // docs/seo/app-publishing-queries.md "## Round 2") honestly — when it
      // fits, and why this service exists for the people it doesn't fit.
      "יש גם שירותי טסטרים בתשלום, בערך 15 דולר ל-12 בודקים — ואם יש לכם שבועיים וסבלנות לנהל אותם, זה פתרון לגיטימי. השירות הזה בשביל מי שאין לו את שניהם.",
    ],
    cta: { kind: "none" },
    readingWidth: true,
  },
  {
    kind: "article",
    id: "ownership",
    heading: "הבעלות שלכם, שחור על גבי לבן",
    bullets: [
      "האפליקציה, הקוד, השם והמותג שלכם. אנחנו מקבלים קובץ התקנה, לא קוד (באפל: גישה לקוד לצורך בנייה בלבד).",
      "הסכם קצר חתום לפני כל העלאה, כולל זכותכם לקבל את האפליקציה בכל רגע.",
      "בגוגל פליי: העברה לחשבון שלכם היא תהליך רשמי של גוגל. באפ סטור: האפליקציה מלכתחילה על החשבון שלכם ואנחנו רק מוזמנים אליו.",
      "אף פעם לא מבקשים סיסמאות. באפל מזמינים אותנו ב-App Store Connect, בגוגל לא צריך כלום.",
    ],
    // New per round 3's Facebook follow-up (ruling 5): a real reply to
    // Alex's own post asked this exact question. Names the fear plainly and
    // answers it in his voice, from the four facts already listed above —
    // no legal language, no promise beyond them, still no sample-agreement
    // link (none exists, unchanged since round 1).
    paragraphs: [
      'זו השאלה שהכי הרבה אנשים שואלים אותי — "איך אני יודע שלא תישארו עם האפליקציה שלי?" — והתשובה היא שהאפליקציה, הקוד והמותג שלכם מהרגע הראשון, בדיוק כמו שכתוב למעלה, ואני רק מעלה אותה לחנויות.',
    ],
    cta: { kind: "none" },
    // The dark band moved to the about-him section (ruling 1, copy-change
    // follow-up): the new cutout is a white shirt that dissolves into the
    // page's off-white background, and separates cleanly on dark. The page
    // keeps exactly one dark band.
    readingWidth: true,
  },
  {
    kind: "about",
    id: "about",
    cta: { kind: "whatsapp", label: "בואו נדבר, בגובה העיניים" },
  },
  {
    kind: "pricing",
    id: "pricing",
    heading: "כמה עולה להעלות אפליקציה לחנויות?",
    cta: { kind: "whatsapp", label: "שלחו את האפליקציה לבדיקת מוכנות חינם" },
  },
  {
    kind: "faq",
    id: "faq",
    heading: "שאלות נפוצות",
  },
  {
    kind: "closing-cta",
    id: "closing-cta",
    text: "שלחו את האפליקציה לבדיקת מוכנות חינם. תוך יום עסקים תקבלו תשובה: מוכנה, או מה לתקן. התשלום רק אחרי האישור שלנו.",
    cta: { kind: "whatsapp", label: "שלחו את האפליקציה לבדיקת מוכנות חינם" },
  },
];

/**
 * About-Alex content (section "about" above) — kept as its own export rather
 * than inlined in `sections`, same pattern as the rest of the site keeping
 * personal facts in one place (`home-profile.ts`). The years-in-field
 * figure itself is rendered separately by About.astro from
 * `homeProfile.yearsInField` — not duplicated here.
 *
 * The opening line and `closingSentence` are Alex's own positioning, given
 * verbatim (round 3, copy-change follow-up): leads with "owns a software
 * house, experience building systems," not the builder's first ("I build AI
 * agents every day...") draft, which he rejected outright. No needsReview
 * flag here — this is his own wording, not a guess awaiting approval.
 */
export const aboutAlex = {
  paragraphs: [
    "אני אלכס, בעלים של בית תוכנה, עם ניסיון בפיתוח מערכות.",
    "כשעובדים איתי, לא מקבלים קופסה שחורה של קוד, אלא בנאדם שאפשר לסמוך עליו, לדבר איתו בגובה העיניים ולדעת שהפרויקט שלכם בידיים בטוחות.",
  ],
  closingSentence: "בית תוכנה שבונה מערכות, מלווה אותן גם דרך הבדיקה של גוגל ואפל.",
  /** A transparent, background-free cutout — placed directly on the
   *  section background (ruling 2), not inside the homepage's bordered
   *  `object-fit: cover` card, which would defeat the transparency. */
  portrait: {
    src: "/home/alex-portrait-700.webp",
    alt: "אלכס, בעלים של בית תוכנה",
    width: 594,
    height: 700,
  } as ImageAsset,
  homeLinkLabel: "לאתר הראשי",
};

/**
 * Structured-data dates for the new Article JSON-LD (round 3, ruling 3). No
 * existing pattern in the repo computes a date at build time; this follows
 * `home-profile.ts`'s own `TODO(alex): bump ...` convention instead — a
 * literal constant the next meaningful copy edit should update by hand.
 * TODO(alex): bump both dates whenever this page's copy changes meaningfully.
 */
export const articleDates = {
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
} as const;
