export const languages = {
  he: "עברית",
  en: "English",
} as const;

export const defaultLang = "he";

export type Lang = keyof typeof languages;

export const ui = {
  he: {
    "site.title": "Hand in Hand AI",
    "site.description":
      "Hand in Hand AI בונה מערכות ניהול, אפליקציות וסוכני AI מותאמים לעסקים קטנים ובינוניים, ומלווה מיזמים כשותף טכנולוגי (CTO) מהרעיון ועד ההשקה.",
    "nav.home": "בית",
    "nav.about": "אודות",
    "nav.services": "שירותים",
    "nav.contact": "צור קשר",
    "nav.privacy": "מדיניות פרטיות",
    "hero.title": "יד ביד עם בינה מלאכותית",
    "hero.subtitle": "עוזרים לעסקים לצמוח עם AI שנבנה בשבילם",
    "hero.cta": "בואו נדבר",
    "footer.rights": "כל הזכויות שמורות",
    "footer.privacy": "מדיניות פרטיות",
    "footer.terms": "תנאי שימוש",
    "contact.title": "צרו קשר",
    "contact.subtitle": "שלחו הודעה לסשה — היא תענה, תספר ותקבע",
    "contact.whatsappCta": "כתבו לנו בוואטסאפ",
    "features.fast.title": "מהיר ויעיל",
    "features.fast.description": "AI שחוסך לכם שעות בכל שבוע",
    "features.secure.title": "אמין ובטוח",
    "features.secure.description": "הנתונים שלכם מוגנים. נקודה.",
    "features.support.title": "ליווי אישי",
    "features.support.description":
      "אנחנו לא נעלמים אחרי ההשקה — תמיד יש למי לפנות",

    // ── Homepage ───────────────────────────────────────────────────
    "home.hero.headline": "תפסיקו לרוץ אחרי המערכות, תתחילו לנהל עסק",
    "home.hero.subheadline":
      "עוזר AI שעובד בשבילכם 24/7, מסדר את כל השוטף, ומשחרר אתכם לדברים שבאמת חשובים — לצמוח, להנשים, ולהיות בבית",
    "home.hero.cta.primary": "בואו נדבר",
    "home.hero.cta.secondary": "שוחחו עם סשה",
    "home.hero.cta.secondary.hint": "סשה היא עוזרת ה-AI של העסק שלנו",

    "home.valueProps.custom.title": "התאמה אישית מלאה",
    "home.valueProps.custom.description":
      "לא פלטפורמה, לא תבנית. משהו שנבנה בשביל העסק שלכם בדיוק.",
    "home.valueProps.transformation.title": "שינוי אמיתי",
    "home.valueProps.transformation.description":
      "לא רק יעילות. יותר הכנסות, פחות שעות, ויותר זמן לדברים שחשובים לכם.",
    "home.valueProps.process.title": "מתחילים מכם",
    "home.valueProps.process.description":
      "מתחילים מלהבין מה מפריע לכם, מסיימים בפתרון שבאמת עובד.",

    "home.process.title": "איך זה עובד",
    "home.process.subtitle": "שלושה שלבים — משיחה ראשונה ועד שזה עובד בשטח",
    "home.process.stage1.title": "מבינים אתכם",
    "home.process.stage1.description":
      "שיחה עם סשה (AI) או איתי ישירות. מבינים מה קורה, מה לוחץ, ולאן רוצים להגיע.",
    "home.process.stage2.title": "בונים תוכנית",
    "home.process.stage2.description":
      "מחליטים ביחד מה עושים קודם. AI? CRM? אוטומציה? מה יזיז הכי הרבה.",
    "home.process.stage3.title": "יוצאים לדרך",
    "home.process.stage3.description":
      "בונים, מחברים, מלווים. אתם רואים את זה עובד.",

    "home.about.title": "היי, אני אלכס",
    "home.about.bio.paragraph1":
      "אני עוזר לבעלי עסקים קטנים ובינוניים שהטכנולוגיה תעבוד בשבילם — לא להיפך.",
    "home.about.bio.paragraph2":
      "בשנים האחרונות בניתי לעסקים קטנים ובינוניים פתרונות AI מותאמים אישית — סוכנים חכמים, מערכות CRM ואוטומציות — שחוסכים להם שעות עבודה בכל שבוע.",
    "home.about.bio.paragraph3":
      "העבודה שלי לא רק על טכנולוגיה. היא על לעזור לכם לנהל עסק שמרוויח יותר ודורש פחות — ומשאיר לכם זמן לדברים שחשובים.",
    "home.about.stat1.value": "AI + CRM",
    "home.about.stat1.label": "התמחות",
    "home.about.stat2.value": "SMB",
    "home.about.stat2.label": "עסקים קטנים ובינוניים",

    "home.services.title": "פתרונות לפי תחום",
    "home.services.subtitle": "כל פתרון נבנה בשביל העסק הספציפי הזה — לא קופי-פייסט",
    "home.services.learnMore": "למידע נוסף",
    "home.services.moreComing": "תחומים נוספים בקרוב — סלונים, קליניקות, ועוד",

    "home.cta.title": "רוצים שזה יעבוד גם אצלכם?",
    "home.cta.subtitle":
      "בואו נדבר. 20 דקות, בלי מצגת, בלי התחייבות. נבין ביחד מה לוחץ לכם ונראה אם AI יכול לעזור.",
    "home.cta.primary": "קבעו שיחה",
    "home.cta.secondary": "שוחחו עם סשה",
    "home.cta.secondary.hint": "סשה היא עוזרת ה-AI של העסק שלנו",
  },
  en: {
    "site.title": "Hand in Hand AI",
    "site.description": "AI solutions for businesses",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.privacy": "Privacy Policy",
    "hero.title": "Hand in Hand with AI",
    "hero.subtitle": "We help businesses grow with customized AI solutions",
    "hero.cta": "Let's Talk",
    "footer.rights": "All rights reserved",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    "contact.title": "Contact Us",
    "contact.subtitle": "Talk to my AI agent, learn more and book a meeting",
    "contact.whatsappCta": "Chat with our AI agent on WhatsApp",
    "features.fast.title": "Fast & Efficient",
    "features.fast.description":
      "AI solutions that save time and resources for your business",
    "features.secure.title": "Reliable & Secure",
    "features.secure.description":
      "Top-tier data security for complete peace of mind",
    "features.support.title": "Personal Support",
    "features.support.description":
      "Expert team guiding you every step of the way to success",

    // ── Homepage ───────────────────────────────────────────────────
    "home.hero.headline": "Stop chasing systems, start running a business",
    "home.hero.subheadline":
      "Custom AI team that works 24/7, handles operations, and frees you to focus on what matters — growth, vision, and family",
    "home.hero.cta.primary": "Book Discovery Call",
    "home.hero.cta.secondary": "Chat with Sasha",
    "home.hero.cta.secondary.hint": "Sasha is our business AI assistant",

    "home.valueProps.custom.title": "Full Customization",
    "home.valueProps.custom.description":
      "Not a platform, not a template. Solution built specifically for your business",
    "home.valueProps.transformation.title": "Business + Personal Transformation",
    "home.valueProps.transformation.description":
      "Not just efficiency. More revenue, fewer hours, more time for family and vision",
    "home.valueProps.process.title": "Discovery-Driven Process",
    "home.valueProps.process.description":
      "Start with deep understanding of pain points, end with solution that works",

    "home.process.title": "How It Works",
    "home.process.subtitle": "Simple three-stage process — from first meeting to measurable results",
    "home.process.stage1.title": "Discover",
    "home.process.stage1.description":
      "Chat with Sasha (AI) or directly with me. Understand your business, pain points, goals",
    "home.process.stage2.title": "Design",
    "home.process.stage2.description":
      "Together identify leverage points. AI? CRM? Automation? What will change the most",
    "home.process.stage3.title": "Deploy",
    "home.process.stage3.description":
      "Build, implement, support. The solution works, you see results",

    "home.about.title": "Hi, I'm Alex",
    "home.about.bio.paragraph1":
      "I help small and medium business owners turn technology into a strategic asset, not a burden.",
    "home.about.bio.paragraph2":
      "Over the past few years I've built custom AI solutions — smart agents, CRM systems, and automations — that free business owners from operational work and give them back control of their lives.",
    "home.about.bio.paragraph3":
      "My work isn't just about technology. It's about helping you run a business that earns more, demands less, and leaves you time for family and vision.",
    "home.about.stat1.value": "AI + CRM",
    "home.about.stat1.label": "Expertise",
    "home.about.stat2.value": "SMB",
    "home.about.stat2.label": "Small & Medium Business",

    "home.services.title": "Solutions by Industry",
    "home.services.subtitle": "Each solution tailored to the business type and its unique challenges",
    "home.services.learnMore": "Learn more",
    "home.services.moreComing": "More industries coming soon — salons, clinics, and more",

    "home.cta.title": "Ready to change how you run your business?",
    "home.cta.subtitle":
      "Let's talk. 20-minute discovery call, no presentation, no commitment. We'll understand your business and see how AI can help",
    "home.cta.primary": "Book a Call",
    "home.cta.secondary": "Chat with Sasha",
    "home.cta.secondary.hint": "Sasha is our business AI assistant",
  },
} as const;
