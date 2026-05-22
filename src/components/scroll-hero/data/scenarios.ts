import type { Lang } from "@i18n/ui";

export type AppCard = {
  id: string;
  label: string;
  tone: "green" | "blue" | "gold" | "violet" | "rose" | "teal";
  /** Random-ish initial offset (px) from centre. Set in scenario so layout is deterministic. */
  startX: number;
  startY: number;
  /** Rotation in degrees at progress 0. */
  startRot: number;
};

export type ChaosScene = {
  step: string;
  label: string;
  /** Progress range [start, end) within the pinned section (0..1). */
  start: number;
  end: number;
  headline: string;
  body?: string;
};

export type Vignette = {
  id: string;
  num: string;
  kicker: string;
  title: string;
  body: string;
  chip?: string;
  /** Progress range [start, end) within the vignettes pin (0..1). */
  start: number;
  end: number;
};

export type Scenario = {
  lang: Lang;
  dir: "rtl" | "ltr";

  loader: {
    kicker: string;
    line1: string;
    line2: string;
    aside: string;
    meta: string;
  };

  topbar: {
    cta: string;
  };

  chaos: {
    scrollHint: string;
    apps: AppCard[];
    scenes: ChaosScene[];
  };

  reveal: {
    kicker: string;
    title: string;
    lede: string;
    body: string;
  };

  bespoke: {
    kicker: string;
    title: string;
    body: string;
    nodes: string[];
    center: string;
  };

  vignettes: {
    kicker: string;
    title: string;
    items: Vignette[];
  };

  engineering: {
    kicker: string;
    title: string;
    body: string;
  };

  process: {
    kicker: string;
    title: string;
    body: string;
    steps: { num: string; title: string; body: string }[];
  };

  cta: {
    kicker: string;
    title: string;
    body: string;
    button: string;
    href: string;
  };

  footer: {
    text: string;
  };
};

const APPS_EN: AppCard[] = [
  { id: "gmail",    label: "Gmail",    tone: "rose",   startX: -340, startY: -180, startRot: -8 },
  { id: "calendar", label: "Calendar", tone: "blue",   startX:  320, startY: -210, startRot:  6 },
  { id: "drive",    label: "Drive",    tone: "gold",   startX:  280, startY:  140, startRot: -4 },
  { id: "slack",    label: "Slack",    tone: "violet", startX: -260, startY:  160, startRot:  7 },
  { id: "crm",      label: "HubSpot",  tone: "green",  startX: -120, startY: -260, startRot: -3 },
  { id: "notion",   label: "Notion",   tone: "teal",   startX:  100, startY:  240, startRot:  5 },
  { id: "sheets",   label: "Sheets",   tone: "green",  startX:  420, startY:    0, startRot: 10 },
  { id: "linear",   label: "Linear",   tone: "violet", startX: -420, startY:   20, startRot: -9 },
  { id: "stripe",   label: "Stripe",   tone: "blue",   startX:    0, startY: -310, startRot:  2 },
  { id: "zoom",     label: "Zoom",     tone: "teal",   startX: -180, startY:  280, startRot: -6 },
];

const APPS_HE: AppCard[] = APPS_EN.map((a) => ({ ...a }));

const VIGNETTES_EN: Vignette[] = [
  {
    id: "lead",
    num: "01",
    kicker: "Inbound lead",
    title: "A new lead emails. Reply drafted before you read it.",
    body: "Agent pulls their full history, drafts a personalised reply in your voice, waits for your approval.",
    chip: "Email · CRM",
    start: 0.0,
    end: 0.22,
  },
  {
    id: "meeting",
    num: "02",
    kicker: "Meeting just ended",
    title: "Summary in the deal. Follow-up on the calendar. Before you leave the room.",
    body: "Recording transcribed, action items extracted, CRM updated, next touch scheduled.",
    chip: "Calendar · Notes",
    start: 0.22,
    end: 0.44,
  },
  {
    id: "dashboard",
    num: "03",
    kicker: "Ask anything",
    title: "“What’s pending this week?”",
    body: "Everything across every system, on one screen, in seconds. No tab-switching.",
    chip: "Dashboard",
    start: 0.44,
    end: 0.66,
  },
  {
    id: "sunday",
    num: "04",
    kicker: "Sunday night",
    title: "Your week is already briefed. You haven’t logged in yet.",
    body: "Priorities, follow-ups, and the three calls that matter. Ready Monday morning.",
    chip: "Briefing",
    start: 0.66,
    end: 0.84,
  },
  {
    id: "surface",
    num: "05",
    kicker: "Memory that works",
    title: "A document from six months ago becomes relevant today.",
    body: "The agent surfaces it before you knew you needed it.",
    chip: "Drive · Docs",
    start: 0.84,
    end: 1.0,
  },
];

const VIGNETTES_HE: Vignette[] = [
  {
    id: "lead",
    num: "01",
    kicker: "ליד חדש",
    title: "מייל ליד חדש. תשובה כבר טיוטה — לפני שקראתם.",
    body: "הסוכן שולף את כל ההיסטוריה, מנסח תשובה אישית בקול שלכם, ומחכה לאישור שלכם.",
    chip: "מייל · CRM",
    start: 0.0,
    end: 0.22,
  },
  {
    id: "meeting",
    num: "02",
    kicker: "פגישה הסתיימה",
    title: "סיכום בעסקה. המשך ביומן. עוד לפני שיצאתם מהחדר.",
    body: "השיחה תומללה, ה-action items נשלפו, ה-CRM התעדכן, הפגישה הבאה נקבעה.",
    chip: "יומן · סיכומים",
    start: 0.22,
    end: 0.44,
  },
  {
    id: "dashboard",
    num: "03",
    kicker: "שאלו כל שאלה",
    title: "״מה ממתין השבוע?״",
    body: "הכול ממערכת אחת, על מסך אחד, בשניות. בלי לעבור בין טאבים.",
    chip: "דשבורד",
    start: 0.44,
    end: 0.66,
  },
  {
    id: "sunday",
    num: "04",
    kicker: "ראשון בערב",
    title: "השבוע שלכם כבר מסוכם. עוד לא נכנסתם לעבודה.",
    body: "סדרי עדיפויות, פולואפים, ושלוש השיחות שחשובות. מוכן ליום שני בבוקר.",
    chip: "תדריך",
    start: 0.66,
    end: 0.84,
  },
  {
    id: "surface",
    num: "05",
    kicker: "זיכרון שעובד",
    title: "מסמך מלפני חצי שנה נהיה רלוונטי היום.",
    body: "הסוכן מציף אותו לפני שידעתם שאתם צריכים.",
    chip: "Drive · מסמכים",
    start: 0.84,
    end: 1.0,
  },
];

export const scenarioEN: Scenario = {
  lang: "en",
  dir: "ltr",
  loader: {
    kicker: "Before we start",
    line1: "What if your team",
    line2: "stopped running software?",
    aside: "Loading the system. A few seconds.",
    meta: "ready",
  },
  topbar: { cta: "Book a call" },
  chaos: {
    scrollHint: "Scroll",
    apps: APPS_EN,
    scenes: [
      {
        step: "01",
        label: "Opened tabs",
        start: 0.0,
        end: 0.42,
        headline: "You didn’t start your business to live inside spreadsheets.",
        body: "Five tabs to find one client. Copying data between systems. Chasing your team to update the CRM. Hunting for that document you know exists.",
      },
      {
        step: "02",
        label: "Not running your business",
        start: 0.42,
        end: 0.66,
        headline: "You’re not running your business. You’re running software.",
        body: "There’s a better way.",
      },
      {
        step: "03",
        label: "Meet the workforce",
        start: 0.66,
        end: 1.01,
        headline: "Meet your AI workforce.",
        body: "Not chatbots. Real AI employees, connected to the systems you already use. They remember everything. They never sleep.",
      },
    ],
  },
  reveal: {
    kicker: "01 / What it is",
    title: "An AI workforce, not a chatbot.",
    lede: "AI employees that live inside your business — connected to your email, calendar, documents, CRM, and the tools you already rely on.",
    body: "You give them an instruction in plain language. They do the work. You see the result. It’s like hiring a team — except they never sleep, never forget, and never need onboarding twice.",
  },
  bespoke: {
    kicker: "02 / Built for you",
    title: "Built around your business. Not a template.",
    body: "Every business is different. Yours has its own clients, its own deals, its own way of working. We design a custom AI operations system tailored to your business — connected to your systems, in your voice, on one clean dashboard.",
    nodes: ["Your Email", "Your CRM", "Your Calendar", "Your Docs"],
    center: "Your AI Workforce",
  },
  vignettes: {
    kicker: "03 / In real life",
    title: "What it actually looks like.",
    items: VIGNETTES_EN,
  },
  engineering: {
    kicker: "04 / Under the hood",
    title: "Serious engineering. Made simple.",
    body: "Secure agent isolation. Persistent memory. Production-grade integrations. Built on the same architectural patterns used by the most advanced AI companies — adapted for businesses like yours. You don’t need to understand any of it. We do.",
  },
  process: {
    kicker: "05 / How we work",
    title: "From discovery to live in 8–10 weeks.",
    body: "Operator-led businesses, 10–250 people, drowning in tools.",
    steps: [
      { num: "01", title: "Discovery",  body: "We sit with you. Map workflows, tools, and bottlenecks. Find where time is lost." },
      { num: "02", title: "Design",     body: "Architect a custom AI operations system tailored to your business — not a template." },
      { num: "03", title: "Build",      body: "Deploy agents, integrate systems, ship your dashboard. Usually live in 8–10 weeks." },
      { num: "04", title: "Operate",    body: "Monitor, improve, expand. New agents as new needs appear. We grow with you." },
    ],
  },
  cta: {
    kicker: "06 / Ready",
    title: "Stop running software. Start running your business.",
    body: "No pitch deck. No hard sell. A real conversation about your operations and what we can actually build for you.",
    button: "Book a free consultation",
    href: "/wa/home-cta",
  },
  footer: { text: "© 2026 · Hand in Hand AI" },
};

export const scenarioHE: Scenario = {
  lang: "he",
  dir: "rtl",
  loader: {
    kicker: "רגע לפני שמתחילים",
    line1: "מה אם הצוות שלכם",
    line2: "יפסיק להריץ תוכנה?",
    aside: "טוען את המערכת. כמה שניות.",
    meta: "מוכן",
  },
  topbar: { cta: "קבעו שיחה" },
  chaos: {
    scrollHint: "גללו",
    apps: APPS_HE,
    scenes: [
      {
        step: "01",
        label: "טאבים פתוחים",
        start: 0.0,
        end: 0.42,
        headline: "לא הקמתם את העסק כדי לחיות בתוך גיליונות.",
        body: "חמישה טאבים כדי למצוא לקוח אחד. העתקת מידע בין מערכות. רדיפה אחרי הצוות שיעדכן את ה-CRM. חיפוש אחרי מסמך שאתם יודעים שקיים.",
      },
      {
        step: "02",
        label: "אתם לא מנהלים את העסק",
        start: 0.42,
        end: 0.66,
        headline: "אתם לא מנהלים את העסק. אתם מנהלים תוכנה.",
        body: "יש דרך טובה יותר.",
      },
      {
        step: "03",
        label: "הצוות החדש",
        start: 0.66,
        end: 1.01,
        headline: "הכירו את צוות ה-AI שלכם.",
        body: "לא צ׳אטבוטים. עובדים אמיתיים — מחוברים למערכות שאתם כבר עובדים איתן. זוכרים הכול. לא ישנים.",
      },
    ],
  },
  reveal: {
    kicker: "01 / מה זה",
    title: "צוות AI. לא צ׳אטבוט.",
    lede: "עובדי AI שחיים בתוך העסק שלכם — מחוברים למייל, ליומן, למסמכים, ל-CRM ולכל הכלים שאתם עובדים איתם.",
    body: "אתם נותנים הוראה בשפה רגילה. הם עושים את העבודה. אתם רואים תוצאה. כמו לשכור צוות — רק בלי שינה, בלי שכחה, ובלי לחזור על הדרכה.",
  },
  bespoke: {
    kicker: "02 / נבנה עבורכם",
    title: "נבנה סביב העסק שלכם. לא תבנית.",
    body: "כל עסק שונה. לכם יש לקוחות משלכם, עסקאות משלכם ודרך עבודה משלכם. אנחנו מתכננים מערכת AI מותאמת אישית לעסק שלכם — מחוברת למערכות, בקול שלכם, על דשבורד אחד נקי.",
    nodes: ["המייל שלכם", "ה-CRM שלכם", "היומן שלכם", "המסמכים שלכם"],
    center: "צוות ה-AI שלכם",
  },
  vignettes: {
    kicker: "03 / בחיים האמיתיים",
    title: "איך זה נראה בפועל.",
    items: VIGNETTES_HE,
  },
  engineering: {
    kicker: "04 / מתחת למכסה",
    title: "הנדסה רצינית. ממשק פשוט.",
    body: "בידוד מאובטח של סוכנים. זיכרון מתמשך. אינטגרציות ברמת ייצור. בנוי על אותם דפוסים שמפעילות חברות ה-AI המתקדמות בעולם — מותאם לעסקים כמו שלכם. אתם לא צריכים להבין אף מילה. אנחנו כן.",
  },
  process: {
    kicker: "05 / איך עובדים",
    title: "מהיכרות לעלייה לאוויר תוך 8–10 שבועות.",
    body: "עסקים מובלי-מנכ״ל, 10 עד 250 עובדים, שטובעים בכלים.",
    steps: [
      { num: "01", title: "היכרות", body: "יושבים איתכם. ממפים תהליכים, כלים וצווארי בקבוק. מאתרים איפה הזמן הולך לאיבוד." },
      { num: "02", title: "תכנון", body: "מארכיטקטים מערכת AI מותאמת לעסק שלכם — לא תבנית מהמדף." },
      { num: "03", title: "בנייה", body: "פורסים סוכנים, מחברים מערכות, משחררים דשבורד. בדרך כלל באוויר תוך 8–10 שבועות." },
      { num: "04", title: "תפעול", body: "מנטרים, משפרים, מרחיבים. סוכנים חדשים לפי צרכים חדשים. גדלים יחד אתכם." },
    ],
  },
  cta: {
    kicker: "06 / מוכנים?",
    title: "תפסיקו להריץ תוכנה. תתחילו לנהל עסק.",
    body: "בלי מצגות. בלי מכירה אגרסיבית. שיחה אמיתית על התפעול שלכם ומה אפשר לבנות לכם.",
    button: "קבעו שיחת ייעוץ חינם",
    href: "/wa/home-cta",
  },
  footer: { text: "© 2026 · Hand in Hand AI" },
};

export function getScenario(lang: Lang): Scenario {
  return lang === "he" ? scenarioHE : scenarioEN;
}
