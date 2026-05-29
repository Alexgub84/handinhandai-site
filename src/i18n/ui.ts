export const languages = {
  he: "עברית",
  en: "English",
  ru: "Русский",
  uk: "Українська",
} as const;

export const defaultLang = "he";

export type Lang = keyof typeof languages;

export const ui = {
  he: {
    "site.title": "Hand in Hand AI",
    "site.description": "פתרונות בינה מלאכותית לעסקים",
    "nav.home": "בית",
    "nav.about": "אודות",
    "nav.services": "שירותים",
    "nav.contact": "צור קשר",
    "nav.privacy": "מדיניות פרטיות",
    "nav.fitnessStudio": "סטודיו",
    "nav.fitnessChain": "רשת",
    "hero.title": "יד ביד עם בינה מלאכותית",
    "hero.subtitle":
      "אנחנו עוזרים לעסקים לצמוח באמצעות פתרונות AI מותאמים אישית",
    "hero.cta": "בואו נדבר",
    "footer.rights": "כל הזכויות שמורות",
    "footer.privacy": "מדיניות פרטיות — סשה",
    "contact.title": "צרו קשר",
    "contact.subtitle": "דברו עם הסוכן ה-AI שלי, קבלו מידע וקבעו פגישה",
    "contact.whatsappCta": "שוחחו עם הסוכן שלנו בוואטסאפ",
    "features.fast.title": "מהיר ויעיל",
    "features.fast.description": "פתרונות AI שחוסכים זמן ומשאבים לעסק שלכם",
    "features.secure.title": "אמין ובטוח",
    "features.secure.description": "אבטחת מידע ברמה הגבוהה ביותר לשקט נפשי מלא",
    "features.support.title": "ליווי אישי",
    "features.support.description":
      "צוות מומחים שמלווה אתכם בכל שלב בדרך להצלחה",

    // ── Homepage ───────────────────────────────────────────────────
    "home.hero.headline": "תפסיקו לרוץ אחרי המערכות, תתחילו לנהל עסק",
    "home.hero.subheadline":
      "עוזר AI שעובד בשבילכם 24/7, מסדר את כל השוטף, ומשחרר אתכם לדברים שבאמת חשובים — לצמוח, להנשים, ולהיות בבית",
    "home.hero.cta.primary": "קבעו שיחת גילוי",
    "home.hero.cta.secondary": "שוחחו עם סשה",
    "home.hero.cta.secondary.hint": "סשה היא עוזרת ה-AI של העסק שלנו",

    "home.valueProps.custom.title": "התאמה אישית מלאה",
    "home.valueProps.custom.description":
      "לא פלטפורמה, לא תבנית. פתרון שנבנה במיוחד עבור העסק שלכם",
    "home.valueProps.transformation.title": "שינוי עסקי ואישי",
    "home.valueProps.transformation.description":
      "לא רק יעילות. יותר הכנסות, פחות שעות, ויותר זמן לדברים שחשובים לכם.",
    "home.valueProps.process.title": "תהליך מונחה גילוי",
    "home.valueProps.process.description":
      "מתחילים בהבנה עמוקה של הכאבים, מסיימים בפתרון שעובד",

    "home.process.title": "איך זה עובד",
    "home.process.subtitle": "תהליך פשוט בשלושה שלבים — מהמפגש הראשון ועד תוצאות מדידות",
    "home.process.stage1.title": "גילוי",
    "home.process.stage1.description":
      "שיחה עם סשה (AI) או איתי ישירות. מבינים את העסק, הכאבים, המטרות",
    "home.process.stage2.title": "עיצוב",
    "home.process.stage2.description":
      "יחד מזהים את נקודות המינוף. AI? CRM? אוטומציה? מה ישנה הכי הרבה",
    "home.process.stage3.title": "פריסה",
    "home.process.stage3.description":
      "בונים, מטמיעים, מלווים. הפתרון עובד, אתם רואים תוצאות",

    "home.about.title": "היי, אני אלכס",
    "home.about.bio.paragraph1":
      "אני עוזר לבעלי עסקים קטנים ובינוניים שהטכנולוגיה תעבוד בשבילם — לא להיפך.",
    "home.about.bio.paragraph2":
      "בשנים האחרונות בניתי לעסקים קטנים ובינוניים פתרונות AI מותאמים אישית — סוכנים חכמים, מערכות CRM ואוטומציות — שחוסכים להם שעות עבודה בכל שבוע.",
    "home.about.bio.paragraph3":
      "העבודה שלי לא רק על טכנולוגיה. היא על לעזור לכם לנהל עסק שמרוויח יותר, דורש פחות, ומשאיר לכם זמן למשפחה ולחזון.",
    "home.about.stat1.value": "AI + CRM",
    "home.about.stat1.label": "התמחות",
    "home.about.stat2.value": "SMB",
    "home.about.stat2.label": "עסקים קטנים ובינוניים",

    "home.services.title": "פתרונות לפי תחום",
    "home.services.subtitle": "כל פתרון מותאם במיוחד לסוג העסק ולאתגרים הייחודיים שלו",
    "home.services.fitnessStudio.title": "סטודיו כושר",
    "home.services.fitnessStudio.description":
      "עוזר חכם בוואטסאפ שמטפל בהזמנות, מחזק נאמנות ומחזיר מתאמנים שנעלמו",
    "home.services.fitnessChain.title": "רשת כושר",
    "home.services.fitnessChain.description":
      "סוכן AI לרשת — עונה ללקוחות בכל סניף, קובע שיעורים ומזהה מתאמנים בסיכון נשירה",
    "home.services.learnMore": "למידע נוסף",
    "home.services.moreComing": "תחומים נוספים בקרוב — סלונים, קליניקות, ועוד",

    "home.cta.title": "מוכנים לשנות את הדרך בה אתם מנהלים את העסק?",
    "home.cta.subtitle":
      "בואו נדבר. 20 דקות, בלי מצגת, בלי התחייבות. נבין ביחד מה לוחץ לכם ונראה אם AI יכול לעזור.",
    "home.cta.primary": "קבעו שיחה",
    "home.cta.secondary": "שוחחו עם סשה",
    "home.cta.secondary.hint": "סשה היא עוזרת ה-AI של העסק שלנו",

    // ── Fitness Studio landing page ───────────────────────────────
    "fitness-studio.page.title": "עוזר חכם בוואטסאפ לסטודיו",
    "fitness-studio.topbar.brand": "סטודיו · עוזר חכם בוואטסאפ",
    "fitness-studio.topbar.cta": "וואטסאפ",
    "fitness-studio.hero.eyebrow": "לבעלי סטודיו",
    "fitness-studio.hero.title": "מנהל חכם בוואטסאפ.\nאתה מלמד. אנחנו מטפלים בשאר.",
    "fitness-studio.hero.lede":
      "קובע שיעורי ניסיון, מחזק נאמנות ומחזיר מתאמנים שנעלמו. הכול בוואטסאפ, בעברית, בקול שלך.",
    "fitness-studio.hero.cta": "דברו איתי בוואטסאפ",
    "fitness-studio.hero.trust": "ללא טפסים. ללא התקנה. תגובה בדרך כלל באותו יום.",
    "fitness-studio.hero.mock.title": "סטודיו שלך · בוט",
    "fitness-studio.hero.mock.status": "מחובר",
    "fitness-studio.hero.mock1.scenario": "הזמנת שיעור ניסיון אחרי שעות הפעילות",
    "fitness-studio.hero.mock.aside.eyebrow": "תרחיש 1 · לסטודיו יוגה",
    "fitness-studio.hero.mock.aside.title": "פנייה ב-22:48. בבוקר, השיעור כבר ביומן.",
    "fitness-studio.hero.mock.aside.body":
      "לקוחה חדשה כותבת אחרי שעות הפעילות. הבוט מציע שני מועדים, עונה על שאלה, ומאשר את ההרשמה. את מתעוררת לפנייה סגורה.",
    "fitness-studio.promise.eyebrow": "מה זה עושה",
    "fitness-studio.promise.title": "אתה מלמד. אנחנו מטפלים בשאר.",
    "fitness-studio.promise.body":
      "עוזר חכם בוואטסאפ שמנהל את מחזור החיים של המתאמן שלך: מהפנייה הראשונה ועד לנאמן שמגיע כל שבוע.",
    "fitness-studio.jobs.eyebrow": "שלוש משימות",
    "fitness-studio.jobs.title": "הדברים שהיית צריך לעשות אחרי כל יום אימון.",
    "fitness-studio.job1.title": "ממלא שיעורים",
    "fitness-studio.job1.body": "עונה לפניות, מציע מועדים ומסגר שיעורי ניסיון. גם ב-23:00.",
    "fitness-studio.job2.title": "בונה נאמנות",
    "fitness-studio.job2.body":
      "שולח מסרים שבועיים לפי נוכחות. מי שבא שלוש פעמים מקבל אחד, מי שבא פעם אחת מקבל אחר.",
    "fitness-studio.job3.title": "מונע נשירה",
    "fitness-studio.job3.body":
      "מחזיר מתאמנים שנעלמו בגישה אמפתית. כשצריך אותך, מעביר אליך.",
    "fitness-studio.scenario2.label": "תרחיש 2 · מתאמנת נאמנה",
    "fitness-studio.scenario2.heading": "באת 3 פעמים השבוע. ידענו. שלחנו לך הודעה.",
    "fitness-studio.scenario2.desc":
      "עוזר עוקב אחרי נוכחות ושולח הודעה שבועית מותאמת. מי שבא שלוש פעמים מקבל עידוד ומוצע לו שיעור חדש. מי שלא בא מקבל הודעה שונה לגמרי.",
    "fitness-studio.scenario3.label": "תרחיש 3 · מתאמן שנעלם",
    "fitness-studio.scenario3.heading": "לא ראינו אותך שבוע. הכל בסדר?",
    "fitness-studio.scenario3.desc":
      "אחרי שבוע היעדרות, העוזר שואל. כשהמתאמן עונה בכנות, העוזר מגיב בהבנה — לא בלחץ. ואם צריך, מציע שבעל הסטודיו יחזור אישית.",
    "fitness-studio.channels.eyebrow": "ערוצים",
    "fitness-studio.channels.title": "בוחרים איפה לקוחות מוצאים אתכם.",
    "fitness-studio.channel1.title": "וואטסאפ",
    "fitness-studio.channel1.body": "הערוץ הכי טבעי בישראל. מספר העסק נשאר אותו מספר.",
    "fitness-studio.channel2.title": "אינסטגרם",
    "fitness-studio.channel2.body": "מישהו שלח DM? העוזר עונה ומקבע שיעור ניסיון.",
    "fitness-studio.channel3.title": "פייסבוק",
    "fitness-studio.channel3.body": "מסנג׳ר עובד בדיוק כמו וואטסאפ. אותו עוזר, אותה חוויה.",
    "fitness-studio.midcta.title": "דמיינו את הבוקר שלכם בלי 40 הודעות שמחכות.",
    "fitness-studio.midcta.lede": "שיחה קצרה אחת בוואטסאפ, ונדע אם זה מתאים לכם.",
    "fitness-studio.midcta.cta": "דברו איתי בוואטסאפ",
    "fitness-studio.how.eyebrow": "איך זה עובד",
    "fitness-studio.how.title": "משיחה ראשונה לאוויר, תוך מספר שבועות.",
    "fitness-studio.step1.title": "מתחברים לוואטסאפ",
    "fitness-studio.step1.body": "מספר העסק נשאר אותו מספר. שום אפליקציה חדשה.",
    "fitness-studio.step2.title": "מתאימים לסטודיו",
    "fitness-studio.step2.body": "הקול, השיעורים, המחירון והשעות נכנסים לעוזר.",
    "fitness-studio.step3.title": "עולים לאוויר תוך מספר שבועות",
    "fitness-studio.step3.body": "פתיחה הדרגתית, אתם רואים כל שיחה לפני שמשחררים.",
    "fitness-studio.about.eyebrow": "מי אני",
    "fitness-studio.about.title": "אלכס. בניתי את הפלטפורמה הזאת מאפס.",
    "fitness-studio.finalcta.title": "הצעד הראשון: שיחה אחת.",
    "fitness-studio.finalcta.lede":
      "בלי מצגת, בלי התחייבות. נבין אם זה מתאים לסטודיו שלכם, ונחליט יחד.",
    "fitness-studio.finalcta.cta": "דברו איתי בוואטסאפ",
    "fitness-studio.faq.eyebrow": "שאלות",
    "fitness-studio.faq.title": "דברים שבעלי סטודיו שואלים אותי.",
    "fitness-studio.faq.q1": "האם העוזר מתחבר ליומן שלי?",
    "fitness-studio.faq.q2": "יש לי כבר מערכת הזמנות — העוזר יעבוד איתה?",
    "fitness-studio.faq.q3": "כמה זמן עד שזה באוויר?",
    "fitness-studio.faq.a3": "בין כמה שבועות לחודשיים, תלוי במפרט והיקף הבדיקות.",
    "fitness-studio.faq.q4": "כמה זה עולה?",
    "fitness-studio.faq.a4":
      "שני חלקים, שקופים מההתחלה: תשלום חד-פעמי על הפיתוח (נקבע לפי המפרט), ועלויות תפעול חודשיות של מאות שקלים לחודש לשירותים חיצוניים. הסכומים נסגרים בפגישה הראשונה, לפני שמתחילים.",
    "fitness-studio.footer.copyright": "© 2025 · Hand in Hand",
    // Orphaned keys for [lang]/fitness-studio.astro compatibility
    "fitness-studio.explainer.title": 'רגע, מה זה בעצם "בוט AI"?',
    "fitness-studio.explainer.item1":
      "מתחבר למספר הוואטסאפ העסקי שלך. אותו מספר, בלי אפליקציה חדשה",
    "fitness-studio.explainer.item2":
      "לומד איך אתם מדברים, את המחירים ואת הלו״ז, ועונה כמוכם",
    "fitness-studio.explainer.item3":
      "שיחה אנושית, לא תפריט עם כפתורים. וכשצריך אתכם, מעביר אליכם",
    "fitness-studio.explainer.closing":
      "מתחבר ליומן הסטודיו שלך (Google Calendar, Arbox). אין אפליקציית הזמנות? נבנה לך אחת.",
    "fitness-studio.problem.eyebrow": "המציאות היומיומית",
    "fitness-studio.problem.title": "אתם מאמנים כל היום. ובלילה עונים לוואטסאפ.",
    "fitness-studio.problem.pain1": "פניות שמגיעות אחרי 21:00 ופשוט נשכחות עד הבוקר.",
    "fitness-studio.problem.pain2":
      "ביטולים של רגע אחרון והמקום נשאר ריק במקום להגיע לרשימת המתנה.",
    "fitness-studio.problem.pain3":
      "אחרי שיעור ניסיון, אתם זוכרים לחזור רק למחצית מהאנשים.",
    "fitness-studio.reminder.eyebrow": "תרחיש",
    "fitness-studio.reminder.title": "הבוט מזכיר. החברה דוחה. המקום עובר הלאה.",
    "fitness-studio.reminder.caption":
      "יום לפני האימון יוצאת תזכורת אוטומטית. אם המתאמנת דוחה, המערכת משחררת את המקום ושולחת הצעה למי שנמצאת ראשונה ברשימת ההמתנה.",
    "fitness-studio.reminder.tiny":
      "תוצאה: פחות חורים בלוח, בלי שעת עבודה אחת מצידכם.",
    "fitness-studio.reminder.mock.scenario": "תזכורת 24 שעות + העברה לרשימת המתנה",
    "fitness-studio.capabilities.eyebrow": "מה זה עושה",
    "fitness-studio.capabilities.title": "שלוש משימות שכבר לא יחכו לכם בערב.",
    "fitness-studio.cap1.title": "קביעה והעברה של שיעורים",
    "fitness-studio.cap1.body":
      "ההזמנות, הביטולים והרשימה ממתינים מתחזקים את עצמם בוואטסאפ.",
    "fitness-studio.cap2.title": "תזכורות וצ'ק-אין",
    "fitness-studio.cap2.body": "הודעת תזכורת חצי יום מראש. המגיעים מאשרים בלחיצה.",
    "fitness-studio.cap3.title": "מעקב אישי אחרי ניסיון",
    "fitness-studio.cap3.body":
      "פנייה חמה אחרי השיעור, ואתם מקבלים את התשובות מרוכזות.",
    "fitness-studio.followup.eyebrow": "תרחיש",
    "fitness-studio.followup.title": "פולואפ אישי, והעברה אליכם ברגע הנכון.",
    "fitness-studio.followup.caption":
      "יום אחרי שיעור ניסיון, הבוט שואל איך היה. כשהמתאמנת עונה במשהו אמיתי, הבוט מסמן ושולח לכם התראה כדי שתיכנסו אישית לשיחה.",
    "fitness-studio.followup.tiny":
      "כל פיסת מידע נשמרת. אתם נכנסים רק כשזה באמת חשוב.",
    "fitness-studio.followup.mock.scenario": "פולואפ אישי + העברה לבעל הסטודיו",

    // ── Fitness Chain landing page ───────────────────────────────
    "fitness-chain.page.title": "סוכן AI לרשתות כושר | בנייה מותאמת אישית לרשת שלכם",
    "fitness-chain.topbar.brand": "Hand in Hand AI · רשתות כושר",
    "fitness-chain.topbar.cta": "וואטסאפ",

    // Hero
    "fitness-chain.hero.eyebrow": "לרשתות כושר",
    "fitness-chain.hero.title": "סוכן AI לרשת הכושר שלכם",
    "fitness-chain.hero.tagline": "סוכן AI שנבנה במיוחד עבור הרשת שלכם — לא כלי מהמדף.",
    "fitness-chain.hero.lede":
      "עונה ללקוחות בוואטסאפ בכל סניף, קובע שיעורי ניסיון, ושם לב למתאמנים שמפסיקים להגיע — לפני שהם מבטלים מנוי.",
    "fitness-chain.hero.cta": "בואו נדבר",
    "fitness-chain.hero.trust": "שיחה של 20 דקות. בלי מצגות.",

    // Hero mock aside (churn-recovery scenario)
    "fitness-chain.hero.mock.aside.eyebrow": "דמו · החזרת מתאמנת שעברה עיר",
    "fitness-chain.hero.mock.aside.title":
      "עברה עיר. הסוכן הציע לה את הסניף הקרוב לבית החדש.",
    "fitness-chain.hero.mock.aside.body":
      "הסוכן שם לב שהיא נעלמה כבר 3 שבועות. כשענתה שעברה דירה, הציע לה את הסניף ברשת שהכי קרוב לבית החדש. אף אחד מהצוות לא היה צריך להתקשר.",

    // What the agent does (4 capability cards)
    "fitness-chain.agent.eyebrow": "יום-יום",
    "fitness-chain.agent.title": "מה הסוכן עושה ביום-יום",
    "fitness-chain.agent.lede": "ארבעה דברים שהוא מטפל בהם — בלעדיכם.",
    "fitness-chain.agent.card1.title": "עונה ללידים חדשים תוך שניות",
    "fitness-chain.agent.card1.body":
      "24/7. ליד שמגיע ב-23:00 לא נופל בין הכיסאות.",
    "fitness-chain.agent.card2.title": "קובע שיעורים בכל סניף",
    "fitness-chain.agent.card2.body":
      "יודע את לוחות הזמנים בכל סניפי הרשת, ומציע ללקוח את מה שמתאים לו.",
    "fitness-chain.agent.card3.title":
      "מזהה מתאמנים שהפסיקו להגיע ומחזיר אותם",
    "fitness-chain.agent.card3.body":
      "רואה מי לא מגיע כבר שבועיים-שלושה, פונה לפני שמבטלים מנוי.",
    "fitness-chain.agent.card4.title":
      "מעביר אליכם מקרים מורכבים — עם כל הרקע",
    "fitness-chain.agent.card4.body":
      "כשצריך מישהו מהצוות, הוא מקבל את כל הרקע על הלקוח ולא מתחיל מאפס.",

    // Problem (uses .problems.* to avoid collision with orphan .problem.* used by [lang] variant)
    "fitness-chain.problems.eyebrow": "המציאות היומיומית",
    "fitness-chain.problems.title":
      "כל סניף עונה אחרת. כל פנייה שמפספסים — מתאמן של מתחרה.",
    "fitness-chain.problems.pain1":
      "ליד נכנס לסניף בתל אביב ב-22:00. נענה למחרת ב-9:00. כבר נסגר במקום אחר.",
    "fitness-chain.problems.pain2":
      "כל סניף נותן מחירים אחרים, מדבר בטון אחר, מבטיח דברים אחרים.",
    "fitness-chain.problems.pain3":
      "מתאמנת מפסיקה להגיע. שלושה שבועות אחר כך — מבטלת. אף אחד לא ראה את זה מגיע.",
    "fitness-chain.problems.pain4":
      "הצוות שורף שעות על שאלות חוזרות במקום על מכירה ושימור.",

    // How it works (4 steps — bespoke build)
    "fitness-chain.how.eyebrow": "איך זה עובד",
    "fitness-chain.how.title":
      "סוכן AI שנבנה לרשת שלכם — לא כלי מהמדף",
    "fitness-chain.how.step1.title": "שיחת היכרות",
    "fitness-chain.how.step1.body":
      "נבין את הרשת, הסניפים, המערכות שלכם (Arbox / LEAP / מה שלא יהיה), ואיפה הצוות שורף הכי הרבה זמן.",
    "fitness-chain.how.step2.title": "בנייה מותאמת",
    "fitness-chain.how.step2.body":
      "בונים סוכן שמכיר את החבילות, המחירים, לוחות השיעורים והנהלים שלכם — ומדבר בטון של הרשת. עברית טבעית, בלי תפריטים וכפתורים.",
    "fitness-chain.how.step3.title": "אינטגרציה",
    "fitness-chain.how.step3.body":
      "מחברים את הסוכן למערכות שאתם כבר עובדים איתן — יומן, CRM, וואטסאפ. שום דבר אצלכם לא משתנה.",
    "fitness-chain.how.step4.title": "עלייה לאוויר וליווי",
    "fitness-chain.how.step4.body":
      "הסוכן עולה לאוויר בכל הסניפים, ואנחנו ממשיכים לכייל ולשפר על בסיס שיחות אמיתיות מהשטח.",

    // Comparison vs shelf-SaaS
    "fitness-chain.compare.eyebrow": "השוואה",
    "fitness-chain.compare.title": "למה לא מערכת AI מהמדף?",
    "fitness-chain.compare.intro":
      "יש בשוק כלי SaaS שמתחברים לוואטסאפ. הם זולים יותר. הם גם מרגישים ככה ללקוחות שלכם.",
    "fitness-chain.compare.col1": "מערכת AI מהמדף",
    "fitness-chain.compare.col2": "סוכן AI שנבנה לרשת שלכם",
    "fitness-chain.compare.row1.shelf": "תפריטים גנריים שצריך להתאים אליהם",
    "fitness-chain.compare.row1.custom": "נבנה סביב התהליכים והנהלים שלכם",
    "fitness-chain.compare.row2.shelf": "לא מכיר את המערכת שלכם",
    "fitness-chain.compare.row2.custom":
      "מחובר למערכת שכבר עובדת אצלכם",
    "fitness-chain.compare.row3.shelf": "תשובות גנריות בטון של הכלי",
    "fitness-chain.compare.row3.custom": "מדבר בטון הברנד שלכם",
    "fitness-chain.compare.row4.shelf": "מנוי לכלי שמשרת אלפי עסקים",
    "fitness-chain.compare.row4.custom": "פתרון שנבנה לרשת שלכם בלבד",
    "fitness-chain.compare.row5.shelf": "אתם מסתגלים אליו",
    "fitness-chain.compare.row5.custom": "הוא נבנה סביבכם",

    // FAQ (6 items)
    "fitness-chain.faq.eyebrow": "שאלות",
    "fitness-chain.faq.title": "שאלות נפוצות",
    "fitness-chain.faq.q1":
      "אנחנו כבר עובדים עם מערכת משלנו. צריך להחליף משהו?",
    "fitness-chain.faq.a1":
      "לא. אנחנו בונים את הסוכן סביב המערכת שכבר יש לכם. שום דבר אצלכם לא משתנה.",
    "fitness-chain.faq.q2": "מה עם מדיניות מטא החדשה לגבי AI בוואטסאפ?",
    "fitness-chain.faq.a2":
      "המדיניות של ינואר 2026 חסמה את ChatGPT וצ'אטבוטים כלליים בוואטסאפ העסקי, אבל אישרה במפורש סוכני AI שבנויים למשימה ספציפית — מענה ללקוחות, קביעת שיעורים, ניהול לידים. זה בדיוק מה שאנחנו בונים.",
    "fitness-chain.faq.q3": "כמה זמן לוקח לבנות?",
    "fitness-chain.faq.a3":
      "גרסה ראשונה באוויר בתוך 2-4 שבועות, תלוי במורכבות. אחרי זה אנחנו ממשיכים לכייל ולהוסיף יכולות לפי הצורך.",
    "fitness-chain.faq.q4": "זה מחליף את הצוות?",
    "fitness-chain.faq.a4":
      "לא. זה מפנה אותם. במקום לענות \"באיזה שעות אתם פתוחים?\" 200 פעם ביום, הצוות מתעסק במכירה, שימור מתאמנים VIP וטיפול במקרים מורכבים.",
    "fitness-chain.faq.q5": "מה קורה כשהסוכן לא יודע לענות?",
    "fitness-chain.faq.a5":
      "הוא מעביר את השיחה לצוות, עם סיכום מלא של מה הלקוח שאל ומה כבר נענה. הצוות לא מתחיל מאפס.",
    "fitness-chain.faq.q6": "כמה זה עולה?",
    "fitness-chain.faq.a6":
      "תלוי במורכבות — כמה סניפים, איזה מערכות צריך לחבר, וכמה שיחות צפויות. נסכם הצעת מחיר אחרי שיחת ההיכרות.",

    // Why I build this
    "fitness-chain.why.eyebrow": "מי אני",
    "fitness-chain.why.title": "היי, אני אלכס.",
    "fitness-chain.why.body":
      "אני אוהב ספורט. בניתי את הסוכן הזה מאפס, ואני בונה אותו לכל רשת מחדש — סביב המערכות והנהלים שלכם. כי רשת שנותנת אימון מעולה ראויה גם לשירות באותה רמה.",

    // Final CTA
    "fitness-chain.finalcta.title": "מוכנים לראות איך זה ייראה אצלכם?",
    "fitness-chain.finalcta.lede":
      "שיחה של 20 דקות. נבין את הרשת ונראה אם זה מתאים.",
    "fitness-chain.finalcta.cta": "בואו נדבר",

    "fitness-chain.footer.copyright": "© 2025 · Hand in Hand",

    // Orphaned keys for [lang]/fitness-chain.astro compatibility
    // (placeholder variant — not used by root /fitness-chain. Retained so [lang] build doesn't break.)
    "fitness-chain.hero.mock.title": "סטודיו שלך · בוט",
    "fitness-chain.hero.mock.status": "מחובר",
    "fitness-chain.hero.mock1.scenario": "הזמנת שיעור ניסיון אחרי שעות הפעילות",
    "fitness-chain.step1.title": "מתחברים לוואטסאפ",
    "fitness-chain.step1.body": "מספר העסק נשאר אותו מספר. שום אפליקציה חדשה.",
    "fitness-chain.step2.title": "מתאימים לסטודיו",
    "fitness-chain.step2.body": "הקול, השיעורים, המחירון והשעות נכנסים לעוזר.",
    "fitness-chain.step3.title": "עולים לאוויר תוך מספר שבועות",
    "fitness-chain.step3.body": "פתיחה הדרגתית, אתם רואים כל שיחה לפני שמשחררים.",
    "fitness-chain.about.eyebrow": "מי אני",
    "fitness-chain.about.title": "אלכס. בניתי את הפלטפורמה הזאת מאפס.",
    "fitness-chain.midcta.title": "דמיינו את הבוקר שלכם בלי 40 הודעות שמחכות.",
    "fitness-chain.midcta.lede": "שיחה קצרה אחת בוואטסאפ, ונדע אם זה מתאים לכם.",
    "fitness-chain.midcta.cta": "דברו איתי בוואטסאפ",
    "fitness-chain.explainer.title": 'רגע, מה זה בעצם "בוט AI"?',
    "fitness-chain.explainer.item1":
      "מתחבר למספר הוואטסאפ העסקי שלך. אותו מספר, בלי אפליקציה חדשה",
    "fitness-chain.explainer.item2":
      "לומד איך אתם מדברים, את המחירים ואת הלו״ז, ועונה כמוכם",
    "fitness-chain.explainer.item3":
      "שיחה אנושית, לא תפריט עם כפתורים. וכשצריך אתכם, מעביר אליכם",
    "fitness-chain.explainer.closing":
      "מתחבר ליומן הסטודיו שלך (Google Calendar, Arbox). אין אפליקציית הזמנות? נבנה לך אחת.",
    "fitness-chain.problem.eyebrow": "המציאות היומיומית",
    "fitness-chain.problem.title": "אתם מאמנים כל היום. ובלילה עונים לוואטסאפ.",
    "fitness-chain.problem.pain1": "פניות שמגיעות אחרי 21:00 ופשוט נשכחות עד הבוקר.",
    "fitness-chain.problem.pain2":
      "ביטולים של רגע אחרון והמקום נשאר ריק במקום להגיע לרשימת המתנה.",
    "fitness-chain.problem.pain3":
      "אחרי שיעור ניסיון, אתם זוכרים לחזור רק למחצית מהאנשים.",
    "fitness-chain.reminder.eyebrow": "תרחיש",
    "fitness-chain.reminder.title": "הבוט מזכיר. החברה דוחה. המקום עובר הלאה.",
    "fitness-chain.reminder.caption":
      "יום לפני האימון יוצאת תזכורת אוטומטית. אם המתאמנת דוחה, המערכת משחררת את המקום ושולחת הצעה למי שנמצאת ראשונה ברשימת ההמתנה.",
    "fitness-chain.reminder.tiny":
      "תוצאה: פחות חורים בלוח, בלי שעת עבודה אחת מצידכם.",
    "fitness-chain.reminder.mock.scenario": "תזכורת 24 שעות + העברה לרשימת המתנה",
    "fitness-chain.capabilities.eyebrow": "מה זה עושה",
    "fitness-chain.capabilities.title": "שלוש משימות שכבר לא יחכו לכם בערב.",
    "fitness-chain.cap1.title": "קביעה והעברה של שיעורים",
    "fitness-chain.cap1.body":
      "ההזמנות, הביטולים והרשימה ממתינים מתחזקים את עצמם בוואטסאפ.",
    "fitness-chain.cap2.title": "תזכורות וצ'ק-אין",
    "fitness-chain.cap2.body": "הודעת תזכורת חצי יום מראש. המגיעים מאשרים בלחיצה.",
    "fitness-chain.cap3.title": "מעקב אישי אחרי ניסיון",
    "fitness-chain.cap3.body":
      "פנייה חמה אחרי השיעור, ואתם מקבלים את התשובות מרוכזות.",
    "fitness-chain.followup.eyebrow": "תרחיש",
    "fitness-chain.followup.title": "פולואפ אישי, והעברה אליכם ברגע הנכון.",
    "fitness-chain.followup.caption":
      "יום אחרי שיעור ניסיון, הבוט שואל איך היה. כשהמתאמנת עונה במשהו אמיתי, הבוט מסמן ושולח לכם התראה כדי שתיכנסו אישית לשיחה.",
    "fitness-chain.followup.tiny":
      "כל פיסת מידע נשמרת. אתם נכנסים רק כשזה באמת חשוב.",
    "fitness-chain.followup.mock.scenario": "פולואפ אישי + העברה לבעל הסטודיו",
  },
  en: {
    "site.title": "Hand in Hand AI",
    "site.description": "AI solutions for businesses",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.privacy": "Privacy Policy",
    "nav.fitnessStudio": "Studio",
    "nav.fitnessChain": "Chain",
    "hero.title": "Hand in Hand with AI",
    "hero.subtitle": "We help businesses grow with customized AI solutions",
    "hero.cta": "Let's Talk",
    "footer.rights": "All rights reserved",
    "footer.privacy": "Privacy Policy — Sasha",
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
    "home.services.fitnessStudio.title": "Fitness Studio",
    "home.services.fitnessStudio.description":
      "Smart WhatsApp assistant that handles bookings, builds loyalty, and re-engages members who disappear",
    "home.services.fitnessChain.title": "Fitness Chain",
    "home.services.fitnessChain.description":
      "AI agent for chains — responds to clients at every location, books classes, identifies at-risk members",
    "home.services.learnMore": "Learn more",
    "home.services.moreComing": "More industries coming soon — salons, clinics, and more",

    "home.cta.title": "Ready to change how you run your business?",
    "home.cta.subtitle":
      "Let's talk. 20-minute discovery call, no presentation, no commitment. We'll understand your business and see how AI can help",
    "home.cta.primary": "Book a Call",
    "home.cta.secondary": "Chat with Sasha",
    "home.cta.secondary.hint": "Sasha is our business AI assistant",

    // ── Fitness Studio landing page ───────────────────────────────
    "fitness-studio.page.title": "Smart studio manager on WhatsApp",
    "fitness-studio.topbar.brand": "Studio · Smart WhatsApp manager",
    "fitness-studio.topbar.cta": "WhatsApp",
    "fitness-studio.hero.eyebrow": "For Studio Owners",
    "fitness-studio.hero.title": "Smart manager on WhatsApp.\nYou teach. We handle the rest.",
    "fitness-studio.hero.lede":
      "Books trial classes, builds loyalty, and re-engages members who disappear. All on WhatsApp, in Hebrew, in your voice.",
    "fitness-studio.hero.cta": "Talk to me on WhatsApp",
    "fitness-studio.hero.trust":
      "No forms. No installation. Response usually the same day.",
    "fitness-studio.hero.mock.title": "Your Studio · Bot",
    "fitness-studio.hero.mock.status": "Online",
    "fitness-studio.hero.mock1.scenario": "Booking a trial class after business hours",
    "fitness-studio.hero.mock.aside.eyebrow": "Scenario 1 · Yoga studio",
    "fitness-studio.hero.mock.aside.title":
      "Message at 22:48. By morning, the class is booked.",
    "fitness-studio.hero.mock.aside.body":
      "A new client messages after hours. The assistant offers two time slots, answers a question, and confirms the booking. You wake up to a closed inquiry.",
    "fitness-studio.promise.eyebrow": "What it does",
    "fitness-studio.promise.title": "You teach. We handle the rest.",
    "fitness-studio.promise.body":
      "A smart WhatsApp assistant that manages your member lifecycle: from the first enquiry to the loyal regular who shows up every week.",
    "fitness-studio.jobs.eyebrow": "Three jobs",
    "fitness-studio.jobs.title": "The things you used to do after every training day.",
    "fitness-studio.job1.title": "Fill classes",
    "fitness-studio.job1.body": "Answers leads, offers time slots, and locks in trial classes. Even at 11 PM.",
    "fitness-studio.job2.title": "Build loyalty",
    "fitness-studio.job2.body":
      "Sends weekly messages based on attendance. Someone who came three times gets one message. Someone who came once gets a different one.",
    "fitness-studio.job3.title": "Prevent churn",
    "fitness-studio.job3.body":
      "Re-engages members who disappear — with empathy, not pressure. When you're needed, it hands off to you.",
    "fitness-studio.scenario2.label": "Scenario 2 · Loyal member",
    "fitness-studio.scenario2.heading": "You came 3 times this week. We noticed. We reached out.",
    "fitness-studio.scenario2.desc":
      "The assistant tracks attendance and sends a tailored weekly message. Three visits gets encouragement and a new class suggestion. Zero visits gets a different message entirely.",
    "fitness-studio.scenario3.label": "Scenario 3 · Member who disappeared",
    "fitness-studio.scenario3.heading": "We haven't seen you in a week. Everything okay?",
    "fitness-studio.scenario3.desc":
      "After a week away, the assistant checks in. When the member replies honestly, it responds with understanding — not pressure. And if needed, offers an owner callback.",
    "fitness-studio.channels.eyebrow": "Channels",
    "fitness-studio.channels.title": "Choose where clients find you.",
    "fitness-studio.channel1.title": "WhatsApp",
    "fitness-studio.channel1.body": "The most natural channel in Israel. Your business number stays the same.",
    "fitness-studio.channel2.title": "Instagram",
    "fitness-studio.channel2.body": "Someone sent a DM? The assistant replies and books a trial class.",
    "fitness-studio.channel3.title": "Facebook",
    "fitness-studio.channel3.body": "Messenger works just like WhatsApp. Same assistant, same experience.",
    "fitness-studio.faq.q1": "Does the assistant connect to my calendar?",
    "fitness-studio.faq.q2": "I already have a booking system — will it work with that?",
    "fitness-studio.faq.q3": "How long until it's live?",
    "fitness-studio.faq.q4": "How does payment work?",
    "fitness-studio.faq.a4":
      "Two parts, transparent from the start: a one-time development fee (set at the first meeting based on your spec), and monthly operational costs of a few hundred shekels for external services. No surprises.",
    // Orphaned for [lang]/fitness-studio.astro compatibility
    "fitness-studio.explainer.title": 'Wait, what exactly is an "AI bot"?',
    "fitness-studio.explainer.item1":
      "Connects to your business WhatsApp number. Same number, no new app",
    "fitness-studio.explainer.item2":
      "Learns how you talk, your pricing, and your schedule, and replies in your voice",
    "fitness-studio.explainer.item3":
      "A real conversation, not a button menu. When you're needed, it hands off to you",
    "fitness-studio.explainer.closing":
      "Connects to your studio calendar (Google Calendar, Arbox, Boost). No booking app? We'll build you one.",
    "fitness-studio.problem.eyebrow": "Day-to-day reality",
    "fitness-studio.problem.title": "You train all day. At night you answer WhatsApp.",
    "fitness-studio.problem.pain1":
      "Enquiries that come in after 9 PM and just get forgotten until morning.",
    "fitness-studio.problem.pain2":
      "Last-minute cancellations leave the spot empty instead of offering it to the waitlist.",
    "fitness-studio.problem.pain3":
      "After a trial class, you only remember to follow up with half the people.",
    "fitness-studio.reminder.eyebrow": "Scenario",
    "fitness-studio.reminder.title":
      "The bot reminds. The client reschedules. The spot moves on.",
    "fitness-studio.reminder.caption":
      "The day before the class, an automatic reminder goes out. If the client cancels, the system releases the spot and sends an offer to the first person on the waitlist.",
    "fitness-studio.reminder.tiny":
      "Result: fewer gaps in the schedule, without a single hour of work on your end.",
    "fitness-studio.reminder.mock.scenario": "24-hour reminder + waitlist transfer",
    "fitness-studio.capabilities.eyebrow": "What it does",
    "fitness-studio.capabilities.title":
      "Three tasks that will no longer wait for you in the evening.",
    "fitness-studio.cap1.title": "Class booking & transfers",
    "fitness-studio.cap1.body":
      "Bookings, cancellations, and the waitlist manage themselves on WhatsApp.",
    "fitness-studio.cap2.title": "Reminders & check-in",
    "fitness-studio.cap2.body":
      "A reminder message half a day in advance. Attendees confirm with one tap.",
    "fitness-studio.cap3.title": "Personal trial follow-up",
    "fitness-studio.cap3.body":
      "A warm message after the class, and you get the responses in one place.",
    "fitness-studio.followup.eyebrow": "Scenario",
    "fitness-studio.followup.title":
      "Personal follow-up, and a handoff to you at exactly the right moment.",
    "fitness-studio.followup.caption":
      "A day after the trial class, the bot asks how it went. When the client replies with something real, the bot flags it and sends you a notification so you can join the conversation personally.",
    "fitness-studio.followup.tiny":
      "Every piece of information is saved. You step in only when it truly matters.",
    "fitness-studio.followup.mock.scenario":
      "Personal follow-up + handoff to studio owner",
    "fitness-studio.midcta.title": "Imagine your morning without 40 messages waiting.",
    "fitness-studio.midcta.lede":
      "One short WhatsApp conversation, and we'll know if this is right for you.",
    "fitness-studio.how.eyebrow": "How it works",
    "fitness-studio.how.title": "From first conversation to live in a few weeks.",
    "fitness-studio.step1.title": "Connect to WhatsApp",
    "fitness-studio.step1.body": "Your business number stays the same. No new app.",
    "fitness-studio.step2.title": "Tailor it to your studio",
    "fitness-studio.step2.body":
      "Your voice, classes, pricing, and hours go into the bot.",
    "fitness-studio.step3.title": "Go live within a few weeks",
    "fitness-studio.step3.body":
      "A gradual rollout. You see every conversation before we release it.",
    "fitness-studio.about.eyebrow": "Who I am",
    "fitness-studio.about.title": "Alex. I built this platform from scratch.",
    "fitness-studio.midcta.cta": "Talk to me on WhatsApp",
    "fitness-studio.finalcta.title": "The first step: one conversation.",
    "fitness-studio.finalcta.lede":
      "No presentation, no commitment. We'll figure out if this fits your studio, and decide together.",
    "fitness-studio.finalcta.cta": "Talk to me on WhatsApp",
    "fitness-studio.faq.eyebrow": "Questions",
    "fitness-studio.faq.title": "Things studio owners ask me.",
    "fitness-studio.faq.a3": "A few weeks to two months, depending on the spec and testing scope.",
    "fitness-studio.footer.copyright": "© 2025 · Hand in Hand",

    // ── Fitness Chain landing page ───────────────────────────────
    "fitness-chain.page.title": "Smart studio manager on WhatsApp",
    "fitness-chain.topbar.brand": "Studio · Smart WhatsApp manager",
    "fitness-chain.topbar.cta": "WhatsApp",
    "fitness-chain.hero.eyebrow": "For Studio Owners",
    "fitness-chain.hero.title": "Smart manager on WhatsApp.\nYou teach. We handle the rest.",
    "fitness-chain.hero.lede":
      "Books trial classes, builds loyalty, and re-engages members who disappear. All on WhatsApp, in Hebrew, in your voice.",
    "fitness-chain.hero.cta": "Talk to me on WhatsApp",
    "fitness-chain.hero.trust":
      "No forms. No installation. Response usually the same day.",
    "fitness-chain.hero.mock.title": "Your Studio · Bot",
    "fitness-chain.hero.mock.status": "Online",
    "fitness-chain.hero.mock1.scenario": "Booking a trial class after business hours",
    "fitness-chain.hero.mock.aside.eyebrow": "Scenario 1 · Yoga studio",
    "fitness-chain.hero.mock.aside.title":
      "Message at 22:48. By morning, the class is booked.",
    "fitness-chain.hero.mock.aside.body":
      "A new client messages after hours. The assistant offers two time slots, answers a question, and confirms the booking. You wake up to a closed inquiry.",
    "fitness-chain.promise.eyebrow": "What it does",
    "fitness-chain.promise.title": "You teach. We handle the rest.",
    "fitness-chain.promise.body":
      "A smart WhatsApp assistant that manages your member lifecycle: from the first enquiry to the loyal regular who shows up every week.",
    "fitness-chain.jobs.eyebrow": "Three jobs",
    "fitness-chain.jobs.title": "The things you used to do after every training day.",
    "fitness-chain.job1.title": "Fill classes",
    "fitness-chain.job1.body": "Answers leads, offers time slots, and locks in trial classes. Even at 11 PM.",
    "fitness-chain.job2.title": "Build loyalty",
    "fitness-chain.job2.body":
      "Sends weekly messages based on attendance. Someone who came three times gets one message. Someone who came once gets a different one.",
    "fitness-chain.job3.title": "Prevent churn",
    "fitness-chain.job3.body":
      "Re-engages members who disappear — with empathy, not pressure. When you're needed, it hands off to you.",
    "fitness-chain.scenario2.label": "Scenario 2 · Loyal member",
    "fitness-chain.scenario2.heading": "You came 3 times this week. We noticed. We reached out.",
    "fitness-chain.scenario2.desc":
      "The assistant tracks attendance and sends a tailored weekly message. Three visits gets encouragement and a new class suggestion. Zero visits gets a different message entirely.",
    "fitness-chain.scenario3.label": "Scenario 3 · Member who disappeared",
    "fitness-chain.scenario3.heading": "We haven't seen you in a week. Everything okay?",
    "fitness-chain.scenario3.desc":
      "After a week away, the assistant checks in. When the member replies honestly, it responds with understanding — not pressure. And if needed, offers an owner callback.",
    "fitness-chain.channels.eyebrow": "Channels",
    "fitness-chain.channels.title": "Choose where clients find you.",
    "fitness-chain.channel1.title": "WhatsApp",
    "fitness-chain.channel1.body": "The most natural channel in Israel. Your business number stays the same.",
    "fitness-chain.channel2.title": "Instagram",
    "fitness-chain.channel2.body": "Someone sent a DM? The assistant replies and books a trial class.",
    "fitness-chain.channel3.title": "Facebook",
    "fitness-chain.channel3.body": "Messenger works just like WhatsApp. Same assistant, same experience.",
    "fitness-chain.faq.q1": "Does the assistant connect to my calendar?",
    "fitness-chain.faq.q2": "I already have a booking system — will it work with that?",
    "fitness-chain.faq.q3": "How long until it's live?",
    "fitness-chain.faq.q4": "How does payment work?",
    "fitness-chain.faq.a4":
      "Two parts, transparent from the start: a one-time development fee (set at the first meeting based on your spec), and monthly operational costs of a few hundred shekels for external services. No surprises.",
    // Orphaned for [lang]/fitness-chain.astro compatibility
    "fitness-chain.explainer.title": 'Wait, what exactly is an "AI bot"?',
    "fitness-chain.explainer.item1":
      "Connects to your business WhatsApp number. Same number, no new app",
    "fitness-chain.explainer.item2":
      "Learns how you talk, your pricing, and your schedule, and replies in your voice",
    "fitness-chain.explainer.item3":
      "A real conversation, not a button menu. When you're needed, it hands off to you",
    "fitness-chain.explainer.closing":
      "Connects to your studio calendar (Google Calendar, Arbox, Boost). No booking app? We'll build you one.",
    "fitness-chain.problem.eyebrow": "Day-to-day reality",
    "fitness-chain.problem.title": "You train all day. At night you answer WhatsApp.",
    "fitness-chain.problem.pain1":
      "Enquiries that come in after 9 PM and just get forgotten until morning.",
    "fitness-chain.problem.pain2":
      "Last-minute cancellations leave the spot empty instead of offering it to the waitlist.",
    "fitness-chain.problem.pain3":
      "After a trial class, you only remember to follow up with half the people.",
    "fitness-chain.reminder.eyebrow": "Scenario",
    "fitness-chain.reminder.title":
      "The bot reminds. The client reschedules. The spot moves on.",
    "fitness-chain.reminder.caption":
      "The day before the class, an automatic reminder goes out. If the client cancels, the system releases the spot and sends an offer to the first person on the waitlist.",
    "fitness-chain.reminder.tiny":
      "Result: fewer gaps in the schedule, without a single hour of work on your end.",
    "fitness-chain.reminder.mock.scenario": "24-hour reminder + waitlist transfer",
    "fitness-chain.capabilities.eyebrow": "What it does",
    "fitness-chain.capabilities.title":
      "Three tasks that will no longer wait for you in the evening.",
    "fitness-chain.cap1.title": "Class booking & transfers",
    "fitness-chain.cap1.body":
      "Bookings, cancellations, and the waitlist manage themselves on WhatsApp.",
    "fitness-chain.cap2.title": "Reminders & check-in",
    "fitness-chain.cap2.body":
      "A reminder message half a day in advance. Attendees confirm with one tap.",
    "fitness-chain.cap3.title": "Personal trial follow-up",
    "fitness-chain.cap3.body":
      "A warm message after the class, and you get the responses in one place.",
    "fitness-chain.followup.eyebrow": "Scenario",
    "fitness-chain.followup.title":
      "Personal follow-up, and a handoff to you at exactly the right moment.",
    "fitness-chain.followup.caption":
      "A day after the trial class, the bot asks how it went. When the client replies with something real, the bot flags it and sends you a notification so you can join the conversation personally.",
    "fitness-chain.followup.tiny":
      "Every piece of information is saved. You step in only when it truly matters.",
    "fitness-chain.followup.mock.scenario":
      "Personal follow-up + handoff to studio owner",
    "fitness-chain.midcta.title": "Imagine your morning without 40 messages waiting.",
    "fitness-chain.midcta.lede":
      "One short WhatsApp conversation, and we'll know if this is right for you.",
    "fitness-chain.how.eyebrow": "How it works",
    "fitness-chain.how.title": "From first conversation to live in a few weeks.",
    "fitness-chain.step1.title": "Connect to WhatsApp",
    "fitness-chain.step1.body": "Your business number stays the same. No new app.",
    "fitness-chain.step2.title": "Tailor it to your studio",
    "fitness-chain.step2.body":
      "Your voice, classes, pricing, and hours go into the bot.",
    "fitness-chain.step3.title": "Go live within a few weeks",
    "fitness-chain.step3.body":
      "A gradual rollout. You see every conversation before we release it.",
    "fitness-chain.about.eyebrow": "Who I am",
    "fitness-chain.about.title": "Alex. I built this platform from scratch.",
    "fitness-chain.midcta.cta": "Talk to me on WhatsApp",
    "fitness-chain.finalcta.title": "The first step: one conversation.",
    "fitness-chain.finalcta.lede":
      "No presentation, no commitment. We'll figure out if this fits your studio, and decide together.",
    "fitness-chain.finalcta.cta": "Talk to me on WhatsApp",
    "fitness-chain.faq.eyebrow": "Questions",
    "fitness-chain.faq.title": "Things studio owners ask me.",
    "fitness-chain.faq.a3": "A few weeks to two months, depending on the spec and testing scope.",
    "fitness-chain.footer.copyright": "© 2025 · Hand in Hand",
  },
  ru: {
    "site.title": "Hand in Hand AI",
    "site.description": "AI-решения для бизнеса",
    "nav.home": "Главная",
    "nav.about": "О нас",
    "nav.services": "Услуги",
    "nav.contact": "Контакты",
    "nav.privacy": "Политика конфиденциальности",
    "nav.fitnessStudio": "Студия",
    "nav.fitnessChain": "Сеть",
    "hero.title": "Рука об руку с искусственным интеллектом",
    "hero.subtitle":
      "Мы помогаем бизнесу расти с помощью персонализированных AI-решений",
    "hero.cta": "Давайте поговорим",
    "footer.rights": "Все права защищены",
    "footer.privacy": "Политика конфиденциальности — Саша",
    "contact.title": "Связаться с нами",
    "contact.subtitle":
      "Поговорите с моим AI-ассистентом, узнайте больше и запишитесь на встречу",
    "contact.whatsappCta": "Напишите нашему AI-ассистенту в WhatsApp",
    "features.fast.title": "Быстро и эффективно",
    "features.fast.description":
      "AI-решения, которые экономят время и ресурсы вашего бизнеса",
    "features.secure.title": "Надежно и безопасно",
    "features.secure.description":
      "Безопасность данных высочайшего уровня для полного спокойствия",
    "features.support.title": "Личное сопровождение",
    "features.support.description":
      "Команда экспертов сопровождает вас на каждом этапе пути к успеху",

    // ── Homepage ───────────────────────────────────────────────────
    "home.hero.headline": "Хватит гнаться за системами — начните управлять бизнесом",
    "home.hero.subheadline":
      "Персональная AI-команда, которая работает круглосуточно, берет на себя операционную рутину и освобождает вас для того, что важно — роста, стратегии и семьи",
    "home.hero.cta.primary": "Записаться на диагностическую встречу",
    "home.hero.cta.secondary": "Написать Саше",
    "home.hero.cta.secondary.hint": "Саша — наш ИИ-ассистент",

    "home.valueProps.custom.title": "Полная персонализация",
    "home.valueProps.custom.description":
      "Не платформа, не шаблон. Решение, созданное специально под ваш бизнес",
    "home.valueProps.transformation.title": "Трансформация бизнеса и жизни",
    "home.valueProps.transformation.description":
      "Не просто эффективность. Больше дохода, меньше часов, больше времени для семьи и стратегии",
    "home.valueProps.process.title": "Процесс через диагностику",
    "home.valueProps.process.description":
      "Начинаем с глубокого понимания боли, заканчиваем решением, которое работает",

    "home.process.title": "Как это работает",
    "home.process.subtitle":
      "Простой процесс в три этапа — от первой встречи до измеримых результатов",
    "home.process.stage1.title": "Диагностика",
    "home.process.stage1.description":
      "Общаетесь с Сашей (AI) или напрямую со мной. Разбираемся в бизнесе, проблемах, целях",
    "home.process.stage2.title": "Проектирование",
    "home.process.stage2.description":
      "Вместе определяем точки приложения сил. AI? CRM? Автоматизация? Что изменит больше всего",
    "home.process.stage3.title": "Внедрение",
    "home.process.stage3.description":
      "Создаем, внедряем, сопровождаем. Решение работает, вы видите результаты",

    "home.about.title": "Привет, я Алекс",
    "home.about.bio.paragraph1":
      "Я помогаю владельцам малого и среднего бизнеса превратить технологии в стратегический актив, а не в бремя.",
    "home.about.bio.paragraph2":
      "За последние годы я создал персонализированные AI-решения — умных ассистентов, CRM-системы и автоматизации — которые освобождают владельцев бизнеса от операционной рутины и возвращают им контроль над жизнью.",
    "home.about.bio.paragraph3":
      "Моя работа — не только о технологиях. Она о том, чтобы помочь вам вести бизнес, который зарабатывает больше, требует меньше и оставляет вам время для семьи и стратегии.",
    "home.about.stat1.value": "AI + CRM",
    "home.about.stat1.label": "Специализация",
    "home.about.stat2.value": "МСБ",
    "home.about.stat2.label": "Малый и средний бизнес",

    "home.services.title": "Решения по отраслям",
    "home.services.subtitle":
      "Каждое решение адаптировано под тип бизнеса и его уникальные вызовы",
    "home.services.fitnessStudio.title": "Фитнес-студия",
    "home.services.fitnessStudio.description":
      "Умный ассистент в WhatsApp, который обрабатывает запросы, укрепляет лояльность и возвращает пропавших клиентов",
    "home.services.fitnessChain.title": "Сеть фитнес-клубов",
    "home.services.fitnessChain.description":
      "AI-агент для сети — отвечает клиентам во всех локациях, записывает на занятия, выявляет клиентов из группы риска",
    "home.services.learnMore": "Узнать больше",
    "home.services.moreComing": "Скоро больше отраслей — салоны, клиники и другие",

    "home.cta.title": "Готовы изменить то, как вы управляете бизнесом?",
    "home.cta.subtitle":
      "Давайте поговорим. 20-минутная диагностическая встреча, без презентаций, без обязательств. Разберемся в вашем бизнесе и посмотрим, как AI может помочь",
    "home.cta.primary": "Записаться на встречу",
    "home.cta.secondary": "Написать Саше",
    "home.cta.secondary.hint": "Саша — наш ИИ-ассистент",

    // ── Fitness Studio landing page ───────────────────────────────
    "fitness-studio.page.title": "Умный менеджер студии в WhatsApp",
    "fitness-studio.topbar.brand": "Студия · Умный менеджер WhatsApp",
    "fitness-studio.topbar.cta": "WhatsApp",
    "fitness-studio.hero.eyebrow": "Для владельцев студий",
    "fitness-studio.hero.title": "Умный менеджер в WhatsApp.\nВы тренируете. Мы занимаемся остальным.",
    "fitness-studio.hero.lede":
      "Записывает на пробные занятия, укрепляет лояльность, возвращает пропавших клиентов. Всё в WhatsApp, на вашем языке, вашим голосом.",
    "fitness-studio.hero.cta": "Написать мне в WhatsApp",
    "fitness-studio.hero.trust": "Никаких форм. Никаких установок. Ответ обычно в тот же день.",
    "fitness-studio.hero.mock.title": "Ваша студия · Бот",
    "fitness-studio.hero.mock.status": "Онлайн",
    "fitness-studio.hero.mock1.scenario": "Запись на пробное занятие после рабочих часов",
    "fitness-studio.hero.mock.aside.eyebrow": "Сценарий 1 · Йога-студия",
    "fitness-studio.hero.mock.aside.title": "Сообщение в 22:48. К утру — занятие записано.",
    "fitness-studio.hero.mock.aside.body":
      "Новый клиент пишет после рабочих часов. Ассистент предлагает два времени, отвечает на вопрос и подтверждает запись. Вы просыпаетесь — заявка закрыта.",
    "fitness-studio.promise.eyebrow": "Что это делает",
    "fitness-studio.promise.title": "Вы тренируете. Мы занимаемся остальным.",
    "fitness-studio.promise.body":
      "Умный ассистент в WhatsApp, который управляет жизненным циклом клиента: от первого запроса до постоянного посетителя, который приходит каждую неделю.",
    "fitness-studio.jobs.eyebrow": "Три задачи",
    "fitness-studio.jobs.title": "То, что вы делали после каждого тренировочного дня.",
    "fitness-studio.job1.title": "Заполняет занятия",
    "fitness-studio.job1.body": "Отвечает на запросы, предлагает время и фиксирует пробные занятия. Даже в 23:00.",
    "fitness-studio.job2.title": "Укрепляет лояльность",
    "fitness-studio.job2.body":
      "Отправляет еженедельные сообщения на основе посещаемости. Кто пришел три раза — получает одно, кто один раз — другое.",
    "fitness-studio.job3.title": "Предотвращает отток",
    "fitness-studio.job3.body":
      "Возвращает пропавших клиентов — с эмпатией, без давления. Когда нужны вы, передает вам.",
    "fitness-studio.scenario2.label": "Сценарий 2 · Постоянный клиент",
    "fitness-studio.scenario2.heading": "Вы пришли 3 раза на этой неделе. Мы заметили. Написали вам.",
    "fitness-studio.scenario2.desc":
      "Ассистент отслеживает посещаемость и отправляет персонализированное еженедельное сообщение. Три визита — поощрение и предложение нового занятия. Ноль визитов — совсем другое сообщение.",
    "fitness-studio.scenario3.label": "Сценарий 3 · Пропавший клиент",
    "fitness-studio.scenario3.heading": "Мы не видели вас неделю. Всё в порядке?",
    "fitness-studio.scenario3.desc":
      "После недели отсутствия ассистент связывается. Когда клиент отвечает честно, он реагирует с пониманием — без давления. И при необходимости предлагает звонок от владельца.",
    "fitness-studio.channels.eyebrow": "Каналы",
    "fitness-studio.channels.title": "Выбирайте, где клиенты вас найдут.",
    "fitness-studio.channel1.title": "WhatsApp",
    "fitness-studio.channel1.body": "Самый естественный канал. Номер вашего бизнеса остается прежним.",
    "fitness-studio.channel2.title": "Instagram",
    "fitness-studio.channel2.body": "Кто-то отправил DM? Ассистент отвечает и записывает на пробное занятие.",
    "fitness-studio.channel3.title": "Facebook",
    "fitness-studio.channel3.body": "Messenger работает так же, как WhatsApp. Тот же ассистент, тот же опыт.",
    "fitness-studio.faq.q1": "Ассистент подключается к моему календарю?",
    "fitness-studio.faq.q2": "У меня уже есть система бронирования — он будет с ней работать?",
    "fitness-studio.faq.q3": "Сколько времени до запуска?",
    "fitness-studio.faq.q4": "Как происходит оплата?",
    "fitness-studio.faq.a4":
      "Две части, прозрачно с самого начала: разовая плата за разработку (устанавливается на первой встрече на основе вашей спецификации) и ежемесячные операционные расходы в несколько сотен шекелей на внешние сервисы. Без сюрпризов.",
    "fitness-studio.explainer.title": "Подождите, что такое \"AI-бот\" вообще?",
    "fitness-studio.explainer.item1":
      "Подключается к вашему бизнес-номеру WhatsApp. Тот же номер, нет нового приложения",
    "fitness-studio.explainer.item2":
      "Изучает, как вы говорите, ваши цены и расписание, и отвечает вашим голосом",
    "fitness-studio.explainer.item3":
      "Настоящий разговор, а не меню с кнопками. Когда вы нужны, передает вам",
    "fitness-studio.explainer.closing":
      "Подключается к календарю вашей студии (Google Calendar, Arbox, Boost). Нет приложения для бронирования? Мы создадим для вас.",
    "fitness-studio.problem.eyebrow": "Повседневная реальность",
    "fitness-studio.problem.title": "Вы тренируете весь день. Ночью отвечаете в WhatsApp.",
    "fitness-studio.problem.pain1": "Запросы после 21:00 просто забываются до утра.",
    "fitness-studio.problem.pain2":
      "Отмены в последнюю минуту оставляют место пустым, вместо того чтобы предложить его из листа ожидания.",
    "fitness-studio.problem.pain3":
      "После пробного занятия вы помните связаться только с половиной людей.",
    "fitness-studio.reminder.eyebrow": "Сценарий",
    "fitness-studio.reminder.title": "Бот напоминает. Клиент переносит. Место переходит дальше.",
    "fitness-studio.reminder.caption":
      "За день до занятия уходит автоматическое напоминание. Если клиент отменяет, система освобождает место и отправляет предложение первому в листе ожидания.",
    "fitness-studio.reminder.tiny":
      "Результат: меньше пробелов в расписании, без единого часа работы с вашей стороны.",
    "fitness-studio.reminder.mock.scenario": "Напоминание за 24 часа + перенос в лист ожидания",
    "fitness-studio.capabilities.eyebrow": "Что это делает",
    "fitness-studio.capabilities.title": "Три задачи, которые больше не будут ждать вас вечером.",
    "fitness-studio.cap1.title": "Бронирование и переносы занятий",
    "fitness-studio.cap1.body": "Записи, отмены и лист ожидания управляются сами в WhatsApp.",
    "fitness-studio.cap2.title": "Напоминания и регистрация",
    "fitness-studio.cap2.body": "Сообщение-напоминание за полдня. Участники подтверждают одним нажатием.",
    "fitness-studio.cap3.title": "Личный follow-up после пробного",
    "fitness-studio.cap3.body": "Теплое сообщение после занятия, и вы получаете ответы в одном месте.",
    "fitness-studio.followup.eyebrow": "Сценарий",
    "fitness-studio.followup.title": "Личный follow-up и передача вам в нужный момент.",
    "fitness-studio.followup.caption":
      "Через день после пробного занятия бот спрашивает, как прошло. Когда клиент отвечает чем-то настоящим, бот помечает это и отправляет вам уведомление, чтобы вы лично присоединились к разговору.",
    "fitness-studio.followup.tiny":
      "Каждая часть информации сохранена. Вы вступаете только когда это действительно важно.",
    "fitness-studio.followup.mock.scenario": "Личный follow-up + передача владельцу студии",
    "fitness-studio.midcta.title": "Представьте свое утро без 40 ожидающих сообщений.",
    "fitness-studio.midcta.lede": "Один короткий разговор в WhatsApp, и мы узнаем, подходит ли это вам.",
    "fitness-studio.midcta.cta": "Написать мне в WhatsApp",
    "fitness-studio.how.eyebrow": "Как это работает",
    "fitness-studio.how.title": "От первого разговора до запуска за несколько недель.",
    "fitness-studio.step1.title": "Подключаемся к WhatsApp",
    "fitness-studio.step1.body": "Номер вашего бизнеса остается прежним. Нет нового приложения.",
    "fitness-studio.step2.title": "Адаптируем под вашу студию",
    "fitness-studio.step2.body": "Ваш голос, занятия, цены и часы добавляются в бота.",
    "fitness-studio.step3.title": "Запускаемся за несколько недель",
    "fitness-studio.step3.body": "Постепенное развертывание. Вы видите каждый разговор, прежде чем мы запустим.",
    "fitness-studio.about.eyebrow": "Кто я",
    "fitness-studio.about.title": "Алекс. Я создал эту платформу с нуля.",
    "fitness-studio.finalcta.title": "Первый шаг: один разговор.",
    "fitness-studio.finalcta.lede":
      "Без презентаций, без обязательств. Выясним, подходит ли это вашей студии, и решим вместе.",
    "fitness-studio.finalcta.cta": "Написать мне в WhatsApp",
    "fitness-studio.faq.eyebrow": "Вопросы",
    "fitness-studio.faq.title": "Что владельцы студий меня спрашивают.",
    "fitness-studio.faq.a3":
      "От нескольких недель до двух месяцев, в зависимости от спецификации и объема тестирования.",
    "fitness-studio.footer.copyright": "© 2025 · Hand in Hand",

    // ── Fitness Chain landing page ───────────────────────────────
    "fitness-chain.page.title": "AI-агент для фитнес-сетей | Создан специально для вашей сети",
    "fitness-chain.topbar.brand": "Hand in Hand AI · Фитнес-сети",
    "fitness-chain.topbar.cta": "WhatsApp",
    "fitness-chain.hero.eyebrow": "Для фитнес-сетей",
    "fitness-chain.hero.title": "AI-агент для вашей фитнес-сети",
    "fitness-chain.hero.tagline": "AI-агент, созданный специально для вашей сети — не готовое решение с полки.",
    "fitness-chain.hero.lede":
      "Отвечает клиентам в WhatsApp во всех локациях, записывает на пробные занятия и замечает клиентов, которые перестают приходить — до того, как они отменят подписку.",
    "fitness-chain.hero.cta": "Давайте поговорим",
    "fitness-chain.hero.trust": "Встреча 20 минут. Без презентаций.",
    "fitness-chain.hero.mock.aside.eyebrow": "Демо · Возврат клиента, переехавшего в другой город",
    "fitness-chain.hero.mock.aside.title":
      "Переехала в другой город. Агент предложил ей ближайший к новому дому филиал.",
    "fitness-chain.hero.mock.aside.body":
      "Агент заметил, что она пропала уже 3 недели. Когда она ответила, что переехала, он предложил ей филиал сети, ближайший к новому дому. Никто из команды не должен был звонить.",
    "fitness-chain.agent.eyebrow": "Каждый день",
    "fitness-chain.agent.title": "Что агент делает каждый день",
    "fitness-chain.agent.lede": "Четыре вещи, которыми он занимается — без вас.",
    "fitness-chain.agent.card1.title": "Отвечает новым лидам за секунды",
    "fitness-chain.agent.card1.body": "24/7. Лид, пришедший в 23:00, не проваливается.",
    "fitness-chain.agent.card2.title": "Записывает на занятия во всех филиалах",
    "fitness-chain.agent.card2.body":
      "Знает расписания всех филиалов сети и предлагает клиенту то, что ему подходит.",
    "fitness-chain.agent.card3.title": "Выявляет клиентов, которые перестали приходить, и возвращает их",
    "fitness-chain.agent.card3.body":
      "Видит, кто не приходит уже две-три недели, связывается до того, как они отменят подписку.",
    "fitness-chain.agent.card4.title": "Передает вам сложные случаи — со всей предысторией",
    "fitness-chain.agent.card4.body":
      "Когда нужен кто-то из команды, он получает всю предысторию по клиенту и не начинает с нуля.",
    "fitness-chain.problems.eyebrow": "Повседневная реальность",
    "fitness-chain.problems.title":
      "Каждый филиал отвечает по-разному. Каждый пропущенный запрос — клиент конкурента.",
    "fitness-chain.problems.pain1":
      "Лид приходит в филиал в Тель-Авиве в 22:00. Получает ответ на следующий день в 9:00. Уже записался в другое место.",
    "fitness-chain.problems.pain2":
      "Каждый филиал дает разные цены, говорит в разном тоне, обещает разные вещи.",
    "fitness-chain.problems.pain3":
      "Клиент перестает приходить. Три недели спустя — отменяет. Никто не видел, что это приближается.",
    "fitness-chain.problems.pain4":
      "Команда тратит часы на повторяющиеся вопросы вместо продаж и удержания.",
    "fitness-chain.how.eyebrow": "Как это работает",
    "fitness-chain.how.title": "AI-агент, созданный для вашей сети — не готовое решение",
    "fitness-chain.how.step1.title": "Знакомство",
    "fitness-chain.how.step1.body":
      "Разбираемся в сети, филиалах, ваших системах (Arbox / LEAP / любых других) и где команда тратит больше всего времени.",
    "fitness-chain.how.step2.title": "Кастомная разработка",
    "fitness-chain.how.step2.body":
      "Создаем агента, который знает ваши пакеты, цены, расписания и процедуры — и говорит в тоне вашего бренда. Естественный язык, без меню и кнопок.",
    "fitness-chain.how.step3.title": "Интеграция",
    "fitness-chain.how.step3.body":
      "Подключаем агента к системам, с которыми вы уже работаете — календарь, CRM, WhatsApp. У вас ничего не меняется.",
    "fitness-chain.how.step4.title": "Запуск и поддержка",
    "fitness-chain.how.step4.body":
      "Агент запускается во всех филиалах, и мы продолжаем настраивать и улучшать на основе реальных разговоров.",
    "fitness-chain.compare.eyebrow": "Сравнение",
    "fitness-chain.compare.title": "Почему не готовая AI-система?",
    "fitness-chain.compare.intro":
      "На рынке есть SaaS-инструменты, которые подключаются к WhatsApp. Они дешевле. Они также так и выглядят для ваших клиентов.",
    "fitness-chain.compare.col1": "Готовая AI-система",
    "fitness-chain.compare.col2": "AI-агент, созданный для вашей сети",
    "fitness-chain.compare.row1.shelf": "Общие меню, к которым нужно подстраиваться",
    "fitness-chain.compare.row1.custom": "Создан вокруг ваших процессов и процедур",
    "fitness-chain.compare.row2.shelf": "Не знает вашей системы",
    "fitness-chain.compare.row2.custom": "Подключен к системе, которая у вас уже работает",
    "fitness-chain.compare.row3.shelf": "Общие ответы в тоне инструмента",
    "fitness-chain.compare.row3.custom": "Говорит в тоне вашего бренда",
    "fitness-chain.compare.row4.shelf": "Подписка на инструмент, обслуживающий тысячи бизнесов",
    "fitness-chain.compare.row4.custom": "Решение, созданное только для вашей сети",
    "fitness-chain.compare.row5.shelf": "Вы подстраиваетесь под него",
    "fitness-chain.compare.row5.custom": "Он создан вокруг вас",
    "fitness-chain.faq.eyebrow": "Вопросы",
    "fitness-chain.faq.title": "Частые вопросы",
    "fitness-chain.faq.q1": "Мы уже работаем со своей системой. Нужно что-то менять?",
    "fitness-chain.faq.a1":
      "Нет. Мы создаем агента вокруг системы, которая у вас уже есть. У вас ничего не меняется.",
    "fitness-chain.faq.q2": "А как насчет новой политики Meta по AI в WhatsApp?",
    "fitness-chain.faq.a2":
      "Политика января 2026 заблокировала ChatGPT и общие чат-боты в бизнес-WhatsApp, но явно разрешила AI-агентов, созданных для конкретной задачи — ответы клиентам, запись на занятия, управление лидами. Это именно то, что мы создаем.",
    "fitness-chain.faq.q3": "Сколько времени нужно на создание?",
    "fitness-chain.faq.a3":
      "Первая версия в эфире за 2-4 недели, в зависимости от сложности. После этого мы продолжаем настраивать и добавлять возможности по мере необходимости.",
    "fitness-chain.faq.q4": "Это заменит команду?",
    "fitness-chain.faq.a4":
      "Нет. Это освободит их. Вместо ответа \"в какие часы вы открыты?\" 200 раз в день, команда занимается продажами, удержанием VIP-клиентов и сложными случаями.",
    "fitness-chain.faq.q5": "Что происходит, когда агент не знает ответа?",
    "fitness-chain.faq.a5":
      "Он передает разговор команде с полным резюме того, что спросил клиент и что уже было отвечено. Команда не начинает с нуля.",
    "fitness-chain.faq.q6": "Сколько это стоит?",
    "fitness-chain.faq.a6":
      "Зависит от сложности — сколько филиалов, какие системы нужно подключить и сколько разговоров ожидается. Предложение по цене после встречи-знакомства.",
    "fitness-chain.why.eyebrow": "Кто я",
    "fitness-chain.why.title": "Привет, я Алекс.",
    "fitness-chain.why.body":
      "Я люблю спорт. Я создал этого агента с нуля, и создаю его для каждой сети заново — вокруг ваших систем и процедур. Потому что сеть, которая дает отличные тренировки, заслуживает сервиса на том же уровне.",
    "fitness-chain.finalcta.title": "Готовы увидеть, как это будет выглядеть у вас?",
    "fitness-chain.finalcta.lede": "Встреча 20 минут. Разберемся в сети и посмотрим, подходит ли это.",
    "fitness-chain.finalcta.cta": "Давайте поговорим",
    "fitness-chain.footer.copyright": "© 2025 · Hand in Hand",
    // Orphaned keys for [lang]/fitness-chain.astro compatibility
    "fitness-chain.hero.mock.title": "Ваша студия · Бот",
    "fitness-chain.hero.mock.status": "Онлайн",
    "fitness-chain.hero.mock1.scenario": "Запись на пробное занятие после рабочих часов",
    "fitness-chain.step1.title": "Подключаемся к WhatsApp",
    "fitness-chain.step1.body": "Номер вашего бизнеса остается прежним. Нет нового приложения.",
    "fitness-chain.step2.title": "Адаптируем под вашу студию",
    "fitness-chain.step2.body": "Ваш голос, занятия, цены и часы добавляются в ассистента.",
    "fitness-chain.step3.title": "Запускаемся за несколько недель",
    "fitness-chain.step3.body": "Постепенное развертывание. Вы видите каждый разговор, прежде чем мы запустим.",
    "fitness-chain.about.eyebrow": "Кто я",
    "fitness-chain.about.title": "Алекс. Я создал эту платформу с нуля.",
    "fitness-chain.midcta.title": "Представьте свое утро без 40 ожидающих сообщений.",
    "fitness-chain.midcta.lede": "Один короткий разговор в WhatsApp, и мы узнаем, подходит ли это вам.",
    "fitness-chain.midcta.cta": "Написать мне в WhatsApp",
    "fitness-chain.explainer.title": "Подождите, что такое \"AI-бот\" вообще?",
    "fitness-chain.explainer.item1":
      "Подключается к вашему бизнес-номеру WhatsApp. Тот же номер, без нового приложения",
    "fitness-chain.explainer.item2":
      "Изучает, как вы говорите, ваши цены и расписание, и отвечает как вы",
    "fitness-chain.explainer.item3":
      "Настоящий разговор, не меню с кнопками. Когда вы нужны, передает вам",
    "fitness-chain.explainer.closing":
      "Подключается к календарю вашей студии (Google Calendar, Arbox). Нет приложения для бронирования? Мы создадим для вас.",
    "fitness-chain.problem.eyebrow": "Повседневная реальность",
    "fitness-chain.problem.title": "Вы тренируете весь день. Ночью отвечаете в WhatsApp.",
    "fitness-chain.problem.pain1": "Запросы после 21:00 просто забываются до утра.",
    "fitness-chain.problem.pain2":
      "Отмены в последнюю минуту оставляют место пустым, вместо того чтобы предложить его из листа ожидания.",
    "fitness-chain.problem.pain3":
      "После пробного занятия вы помните связаться только с половиной людей.",
    "fitness-chain.reminder.eyebrow": "Сценарий",
    "fitness-chain.reminder.title": "Бот напоминает. Клиент переносит. Место переходит дальше.",
    "fitness-chain.reminder.caption":
      "За день до занятия уходит автоматическое напоминание. Если клиент отменяет, система освобождает место и отправляет предложение первому в листе ожидания.",
    "fitness-chain.reminder.tiny":
      "Результат: меньше пробелов в расписании, без единого часа работы с вашей стороны.",
    "fitness-chain.reminder.mock.scenario": "Напоминание за 24 часа + перенос в лист ожидания",
    "fitness-chain.capabilities.eyebrow": "Что это делает",
    "fitness-chain.capabilities.title": "Три задачи, которые больше не будут ждать вас вечером.",
    "fitness-chain.cap1.title": "Бронирование и переносы занятий",
    "fitness-chain.cap1.body": "Записи, отмены и лист ожидания управляются сами в WhatsApp.",
    "fitness-chain.cap2.title": "Напоминания и регистрация",
    "fitness-chain.cap2.body": "Сообщение-напоминание за полдня. Участники подтверждают одним нажатием.",
    "fitness-chain.cap3.title": "Личный follow-up после пробного",
    "fitness-chain.cap3.body": "Теплое сообщение после занятия, и вы получаете ответы в одном месте.",
    "fitness-chain.followup.eyebrow": "Сценарий",
    "fitness-chain.followup.title": "Личный follow-up и передача вам в нужный момент.",
    "fitness-chain.followup.caption":
      "Через день после пробного занятия бот спрашивает, как прошло. Когда клиент отвечает чем-то настоящим, бот помечает это и отправляет вам уведомление, чтобы вы лично присоединились к разговору.",
    "fitness-chain.followup.tiny":
      "Каждая часть информации сохранена. Вы вступаете только когда это действительно важно.",
    "fitness-chain.followup.mock.scenario": "Личный follow-up + передача владельцу студии",
  },
  uk: {
    "site.title": "Hand in Hand AI",
    "site.description": "AI-рішення для бізнесу",
    "nav.home": "Головна",
    "nav.about": "Про нас",
    "nav.services": "Послуги",
    "nav.contact": "Контакти",
    "nav.privacy": "Політика конфіденційності",
    "nav.fitnessStudio": "Студія",
    "nav.fitnessChain": "Мережа",
    "hero.title": "Рука в руці зі штучним інтелектом",
    "hero.subtitle":
      "Ми допомагаємо бізнесу зростати за допомогою персоналізованих AI-рішень",
    "hero.cta": "Поговорімо",
    "footer.rights": "Усі права захищені",
    "footer.privacy": "Політика конфіденційності — Саша",
    "contact.title": "Зв'язатися з нами",
    "contact.subtitle":
      "Поспілкуйтеся з моїм AI-асистентом, дізнайтеся більше та запишіться на зустріч",
    "contact.whatsappCta": "Напишіть нашому AI-асистенту у WhatsApp",
    "features.fast.title": "Швидко та ефективно",
    "features.fast.description":
      "AI-рішення, що заощаджують час і ресурси вашого бізнесу",
    "features.secure.title": "Надійно та безпечно",
    "features.secure.description":
      "Безпека даних найвищого рівня для цілковитого спокою",
    "features.support.title": "Особистий супровід",
    "features.support.description":
      "Команда експертів супроводжує вас на кожному кроці шляху до успіху",

    // ── Homepage ───────────────────────────────────────────────────
    "home.hero.headline": "Досить ганятися за системами — почніть керувати бізнесом",
    "home.hero.subheadline":
      "Персональна AI-команда, яка працює цілодобово, бере на себе операційну рутину та звільняє вас для того, що важливо — зростання, стратегії та родини",
    "home.hero.cta.primary": "Записатися на діагностичну зустріч",
    "home.hero.cta.secondary": "Написати Саші",
    "home.hero.cta.secondary.hint": "Саша — наш ШІ-асистент",

    "home.valueProps.custom.title": "Повна персоналізація",
    "home.valueProps.custom.description":
      "Не платформа, не шаблон. Рішення, створене спеціально під ваш бізнес",
    "home.valueProps.transformation.title": "Трансформація бізнесу та життя",
    "home.valueProps.transformation.description":
      "Не лише ефективність. Більше доходу, менше годин, більше часу для родини та стратегії",
    "home.valueProps.process.title": "Процес через діагностику",
    "home.valueProps.process.description":
      "Починаємо з глибокого розуміння болю, завершуємо рішенням, яке працює",

    "home.process.title": "Як це працює",
    "home.process.subtitle":
      "Простий процес у три етапи — від першої зустрічі до вимірюваних результатів",
    "home.process.stage1.title": "Діагностика",
    "home.process.stage1.description":
      "Спілкуєтеся з Сашею (AI) або безпосередньо зі мною. Розбираємося в бізнесі, проблемах, цілях",
    "home.process.stage2.title": "Проєктування",
    "home.process.stage2.description":
      "Разом визначаємо точки докладання зусиль. AI? CRM? Автоматизація? Що змінить найбільше",
    "home.process.stage3.title": "Впровадження",
    "home.process.stage3.description":
      "Створюємо, впроваджуємо, супроводжуємо. Рішення працює, ви бачите результати",

    "home.about.title": "Привіт, я Алекс",
    "home.about.bio.paragraph1":
      "Я допомагаю власникам малого та середнього бізнесу перетворити технології на стратегічний актив, а не на тягар.",
    "home.about.bio.paragraph2":
      "За останні роки я створив персоналізовані AI-рішення — розумних асистентів, CRM-системи та автоматизації — які звільняють власників бізнесу від операційної рутини й повертають їм контроль над життям.",
    "home.about.bio.paragraph3":
      "Моя робота — не лише про технології. Вона про те, щоб допомогти вам вести бізнес, який заробляє більше, потребує менше й залишає вам час для родини та стратегії.",
    "home.about.stat1.value": "AI + CRM",
    "home.about.stat1.label": "Спеціалізація",
    "home.about.stat2.value": "МСБ",
    "home.about.stat2.label": "Малий та середній бізнес",

    "home.services.title": "Рішення за галузями",
    "home.services.subtitle":
      "Кожне рішення адаптоване під тип бізнесу та його унікальні виклики",
    "home.services.fitnessStudio.title": "Фітнес-студія",
    "home.services.fitnessStudio.description":
      "Розумний асистент у WhatsApp, який обробляє запити, зміцнює лояльність і повертає клієнтів, що зникли",
    "home.services.fitnessChain.title": "Мережа фітнес-клубів",
    "home.services.fitnessChain.description":
      "AI-агент для мережі — відповідає клієнтам у всіх локаціях, записує на заняття, виявляє клієнтів із групи ризику",
    "home.services.learnMore": "Дізнатися більше",
    "home.services.moreComing": "Незабаром більше галузей — салони, клініки та інші",

    "home.cta.title": "Готові змінити те, як ви керуєте бізнесом?",
    "home.cta.subtitle":
      "Поговорімо. 20-хвилинна діагностична зустріч, без презентацій, без зобов'язань. Розберемося у вашому бізнесі й подивимося, як AI може допомогти",
    "home.cta.primary": "Записатися на зустріч",
    "home.cta.secondary": "Написати Саші",
    "home.cta.secondary.hint": "Саша — наш ШІ-асистент",

    // ── Fitness Studio landing page ───────────────────────────────
    "fitness-studio.page.title": "Розумний менеджер студії у WhatsApp",
    "fitness-studio.topbar.brand": "Студія · Розумний менеджер WhatsApp",
    "fitness-studio.topbar.cta": "WhatsApp",
    "fitness-studio.hero.eyebrow": "Для власників студій",
    "fitness-studio.hero.title": "Розумний менеджер у WhatsApp.\nВи тренуєте. Ми беремо на себе решту.",
    "fitness-studio.hero.lede":
      "Записує на пробні заняття, зміцнює лояльність, повертає клієнтів, що зникли. Усе у WhatsApp, вашою мовою, вашим голосом.",
    "fitness-studio.hero.cta": "Написати мені у WhatsApp",
    "fitness-studio.hero.trust": "Жодних форм. Жодного встановлення. Відповідь зазвичай того ж дня.",
    "fitness-studio.hero.mock.title": "Ваша студія · Бот",
    "fitness-studio.hero.mock.status": "Онлайн",
    "fitness-studio.hero.mock1.scenario": "Запис на пробне заняття після робочих годин",
    "fitness-studio.hero.mock.aside.eyebrow": "Сценарій 1 · Йога-студія",
    "fitness-studio.hero.mock.aside.title": "Повідомлення о 22:48. До ранку — заняття записане.",
    "fitness-studio.hero.mock.aside.body":
      "Новий клієнт пише після робочих годин. Асистент пропонує два варіанти часу, відповідає на запитання й підтверджує запис. Ви прокидаєтеся — заявку закрито.",
    "fitness-studio.promise.eyebrow": "Що це робить",
    "fitness-studio.promise.title": "Ви тренуєте. Ми беремо на себе решту.",
    "fitness-studio.promise.body":
      "Розумний асистент у WhatsApp, який керує життєвим циклом клієнта: від першого запиту до постійного відвідувача, що приходить щотижня.",
    "fitness-studio.jobs.eyebrow": "Три завдання",
    "fitness-studio.jobs.title": "Те, що ви робили після кожного тренувального дня.",
    "fitness-studio.job1.title": "Заповнює заняття",
    "fitness-studio.job1.body": "Відповідає на запити, пропонує час і фіксує пробні заняття. Навіть о 23:00.",
    "fitness-studio.job2.title": "Зміцнює лояльність",
    "fitness-studio.job2.body":
      "Надсилає щотижневі повідомлення на основі відвідуваності. Хто прийшов тричі — отримує одне, хто один раз — інше.",
    "fitness-studio.job3.title": "Запобігає відтоку",
    "fitness-studio.job3.body":
      "Повертає клієнтів, що зникли — з емпатією, без тиску. Коли потрібні ви, передає вам.",
    "fitness-studio.scenario2.label": "Сценарій 2 · Постійний клієнт",
    "fitness-studio.scenario2.heading": "Ви прийшли 3 рази цього тижня. Ми помітили. Написали вам.",
    "fitness-studio.scenario2.desc":
      "Асистент відстежує відвідуваність і надсилає персоналізоване щотижневе повідомлення. Три візити — заохочення та пропозиція нового заняття. Нуль візитів — зовсім інше повідомлення.",
    "fitness-studio.scenario3.label": "Сценарій 3 · Клієнт, що зник",
    "fitness-studio.scenario3.heading": "Ми не бачили вас тиждень. Усе гаразд?",
    "fitness-studio.scenario3.desc":
      "Після тижня відсутності асистент звертається. Коли клієнт відповідає чесно, він реагує з розумінням — без тиску. І за потреби пропонує дзвінок від власника.",
    "fitness-studio.channels.eyebrow": "Канали",
    "fitness-studio.channels.title": "Обирайте, де клієнти вас знайдуть.",
    "fitness-studio.channel1.title": "WhatsApp",
    "fitness-studio.channel1.body": "Найприродніший канал. Номер вашого бізнесу залишається тим самим.",
    "fitness-studio.channel2.title": "Instagram",
    "fitness-studio.channel2.body": "Хтось надіслав DM? Асистент відповідає й записує на пробне заняття.",
    "fitness-studio.channel3.title": "Facebook",
    "fitness-studio.channel3.body": "Messenger працює так само, як WhatsApp. Той самий асистент, той самий досвід.",
    "fitness-studio.faq.q1": "Асистент підключається до мого календаря?",
    "fitness-studio.faq.q2": "У мене вже є система бронювання — він з нею працюватиме?",
    "fitness-studio.faq.q3": "Скільки часу до запуску?",
    "fitness-studio.faq.q4": "Як відбувається оплата?",
    "fitness-studio.faq.a4":
      "Дві частини, прозоро з самого початку: разова плата за розробку (визначається на першій зустрічі на основі вашої специфікації) та щомісячні операційні витрати в кілька сотень шекелів на зовнішні сервіси. Без сюрпризів.",
    "fitness-studio.explainer.title": "Стривайте, що таке \"AI-бот\" взагалі?",
    "fitness-studio.explainer.item1":
      "Підключається до вашого бізнес-номера WhatsApp. Той самий номер, без нового застосунку",
    "fitness-studio.explainer.item2":
      "Вивчає, як ви говорите, ваші ціни та розклад, і відповідає вашим голосом",
    "fitness-studio.explainer.item3":
      "Справжня розмова, а не меню з кнопками. Коли потрібні ви, передає вам",
    "fitness-studio.explainer.closing":
      "Підключається до календаря вашої студії (Google Calendar, Arbox, Boost). Немає застосунку для бронювання? Ми створимо для вас.",
    "fitness-studio.problem.eyebrow": "Щоденна реальність",
    "fitness-studio.problem.title": "Ви тренуєте весь день. Уночі відповідаєте у WhatsApp.",
    "fitness-studio.problem.pain1": "Запити після 21:00 просто забуваються до ранку.",
    "fitness-studio.problem.pain2":
      "Скасування в останню хвилину залишають місце порожнім, замість того щоб запропонувати його з листа очікування.",
    "fitness-studio.problem.pain3":
      "Після пробного заняття ви пам'ятаєте зв'язатися лише з половиною людей.",
    "fitness-studio.reminder.eyebrow": "Сценарій",
    "fitness-studio.reminder.title": "Бот нагадує. Клієнт переносить. Місце переходить далі.",
    "fitness-studio.reminder.caption":
      "За день до заняття надходить автоматичне нагадування. Якщо клієнт скасовує, система звільняє місце й надсилає пропозицію першому в листі очікування.",
    "fitness-studio.reminder.tiny":
      "Результат: менше прогалин у розкладі, без жодної години роботи з вашого боку.",
    "fitness-studio.reminder.mock.scenario": "Нагадування за 24 години + перенесення в лист очікування",
    "fitness-studio.capabilities.eyebrow": "Що це робить",
    "fitness-studio.capabilities.title": "Три завдання, які більше не чекатимуть вас увечері.",
    "fitness-studio.cap1.title": "Бронювання та перенесення занять",
    "fitness-studio.cap1.body": "Записи, скасування та лист очікування керуються самі у WhatsApp.",
    "fitness-studio.cap2.title": "Нагадування та реєстрація",
    "fitness-studio.cap2.body": "Повідомлення-нагадування за пів дня. Учасники підтверджують одним натисканням.",
    "fitness-studio.cap3.title": "Особистий follow-up після пробного",
    "fitness-studio.cap3.body": "Тепле повідомлення після заняття, і ви отримуєте відповіді в одному місці.",
    "fitness-studio.followup.eyebrow": "Сценарій",
    "fitness-studio.followup.title": "Особистий follow-up і передача вам у потрібний момент.",
    "fitness-studio.followup.caption":
      "Через день після пробного заняття бот запитує, як минуло. Коли клієнт відповідає чимось справжнім, бот позначає це й надсилає вам сповіщення, щоб ви особисто долучилися до розмови.",
    "fitness-studio.followup.tiny":
      "Кожна частина інформації збережена. Ви втручаєтеся лише коли це справді важливо.",
    "fitness-studio.followup.mock.scenario": "Особистий follow-up + передача власнику студії",
    "fitness-studio.midcta.title": "Уявіть свій ранок без 40 повідомлень, що чекають.",
    "fitness-studio.midcta.lede": "Одна коротка розмова у WhatsApp, і ми дізнаємося, чи підходить це вам.",
    "fitness-studio.midcta.cta": "Написати мені у WhatsApp",
    "fitness-studio.how.eyebrow": "Як це працює",
    "fitness-studio.how.title": "Від першої розмови до запуску за кілька тижнів.",
    "fitness-studio.step1.title": "Підключаємося до WhatsApp",
    "fitness-studio.step1.body": "Номер вашого бізнесу залишається тим самим. Без нового застосунку.",
    "fitness-studio.step2.title": "Адаптуємо під вашу студію",
    "fitness-studio.step2.body": "Ваш голос, заняття, ціни та години додаються до бота.",
    "fitness-studio.step3.title": "Запускаємося за кілька тижнів",
    "fitness-studio.step3.body": "Поступове розгортання. Ви бачите кожну розмову, перш ніж ми запустимо.",
    "fitness-studio.about.eyebrow": "Хто я",
    "fitness-studio.about.title": "Алекс. Я створив цю платформу з нуля.",
    "fitness-studio.finalcta.title": "Перший крок: одна розмова.",
    "fitness-studio.finalcta.lede":
      "Без презентацій, без зобов'язань. З'ясуємо, чи підходить це вашій студії, і вирішимо разом.",
    "fitness-studio.finalcta.cta": "Написати мені у WhatsApp",
    "fitness-studio.faq.eyebrow": "Запитання",
    "fitness-studio.faq.title": "Що власники студій мене запитують.",
    "fitness-studio.faq.a3":
      "Від кількох тижнів до двох місяців, залежно від специфікації та обсягу тестування.",
    "fitness-studio.footer.copyright": "© 2025 · Hand in Hand",

    // ── Fitness Chain landing page ───────────────────────────────
    "fitness-chain.page.title": "AI-агент для фітнес-мереж | Створений спеціально для вашої мережі",
    "fitness-chain.topbar.brand": "Hand in Hand AI · Фітнес-мережі",
    "fitness-chain.topbar.cta": "WhatsApp",
    "fitness-chain.hero.eyebrow": "Для фітнес-мереж",
    "fitness-chain.hero.title": "AI-агент для вашої фітнес-мережі",
    "fitness-chain.hero.tagline": "AI-агент, створений спеціально для вашої мережі — не готове рішення з полиці.",
    "fitness-chain.hero.lede":
      "Відповідає клієнтам у WhatsApp у всіх локаціях, записує на пробні заняття й помічає клієнтів, які перестають приходити — до того, як вони скасують підписку.",
    "fitness-chain.hero.cta": "Поговорімо",
    "fitness-chain.hero.trust": "Зустріч 20 хвилин. Без презентацій.",
    "fitness-chain.hero.mock.aside.eyebrow": "Демо · Повернення клієнтки, що переїхала в інше місто",
    "fitness-chain.hero.mock.aside.title":
      "Переїхала в інше місто. Агент запропонував їй найближчий до нового дому філіал.",
    "fitness-chain.hero.mock.aside.body":
      "Агент помітив, що вона зникла вже 3 тижні. Коли вона відповіла, що переїхала, він запропонував їй філіал мережі, найближчий до нового дому. Нікому з команди не довелося телефонувати.",
    "fitness-chain.agent.eyebrow": "Щодня",
    "fitness-chain.agent.title": "Що агент робить щодня",
    "fitness-chain.agent.lede": "Чотири речі, якими він займається — без вас.",
    "fitness-chain.agent.card1.title": "Відповідає новим лідам за секунди",
    "fitness-chain.agent.card1.body": "24/7. Лід, що прийшов о 23:00, не загубиться.",
    "fitness-chain.agent.card2.title": "Записує на заняття в усіх філіалах",
    "fitness-chain.agent.card2.body":
      "Знає розклади всіх філіалів мережі й пропонує клієнту те, що йому підходить.",
    "fitness-chain.agent.card3.title": "Виявляє клієнтів, які перестали приходити, і повертає їх",
    "fitness-chain.agent.card3.body":
      "Бачить, хто не приходить уже два-три тижні, звертається до того, як вони скасують підписку.",
    "fitness-chain.agent.card4.title": "Передає вам складні випадки — з усією передісторією",
    "fitness-chain.agent.card4.body":
      "Коли потрібен хтось із команди, він отримує всю передісторію щодо клієнта й не починає з нуля.",
    "fitness-chain.problems.eyebrow": "Щоденна реальність",
    "fitness-chain.problems.title":
      "Кожен філіал відповідає по-різному. Кожен пропущений запит — клієнт конкурента.",
    "fitness-chain.problems.pain1":
      "Лід заходить у філіал у Тель-Авіві о 22:00. Отримує відповідь наступного дня о 9:00. Уже записався в інше місце.",
    "fitness-chain.problems.pain2":
      "Кожен філіал дає різні ціни, говорить у різному тоні, обіцяє різні речі.",
    "fitness-chain.problems.pain3":
      "Клієнтка перестає приходити. Три тижні по тому — скасовує. Ніхто не бачив, що це наближається.",
    "fitness-chain.problems.pain4":
      "Команда витрачає години на повторювані запитання замість продажів та утримання.",
    "fitness-chain.how.eyebrow": "Як це працює",
    "fitness-chain.how.title": "AI-агент, створений для вашої мережі — не готове рішення",
    "fitness-chain.how.step1.title": "Знайомство",
    "fitness-chain.how.step1.body":
      "Розбираємося в мережі, філіалах, ваших системах (Arbox / LEAP / будь-яких інших) і де команда витрачає найбільше часу.",
    "fitness-chain.how.step2.title": "Кастомна розробка",
    "fitness-chain.how.step2.body":
      "Створюємо агента, який знає ваші пакети, ціни, розклади та процедури — і говорить у тоні вашого бренду. Природна мова, без меню та кнопок.",
    "fitness-chain.how.step3.title": "Інтеграція",
    "fitness-chain.how.step3.body":
      "Підключаємо агента до систем, з якими ви вже працюєте — календар, CRM, WhatsApp. У вас нічого не змінюється.",
    "fitness-chain.how.step4.title": "Запуск і супровід",
    "fitness-chain.how.step4.body":
      "Агент запускається в усіх філіалах, і ми продовжуємо налаштовувати та покращувати на основі реальних розмов.",
    "fitness-chain.compare.eyebrow": "Порівняння",
    "fitness-chain.compare.title": "Чому не готова AI-система?",
    "fitness-chain.compare.intro":
      "На ринку є SaaS-інструменти, які підключаються до WhatsApp. Вони дешевші. Вони також так і виглядають для ваших клієнтів.",
    "fitness-chain.compare.col1": "Готова AI-система",
    "fitness-chain.compare.col2": "AI-агент, створений для вашої мережі",
    "fitness-chain.compare.row1.shelf": "Загальні меню, до яких треба підлаштовуватися",
    "fitness-chain.compare.row1.custom": "Створений навколо ваших процесів та процедур",
    "fitness-chain.compare.row2.shelf": "Не знає вашої системи",
    "fitness-chain.compare.row2.custom": "Підключений до системи, яка у вас уже працює",
    "fitness-chain.compare.row3.shelf": "Загальні відповіді в тоні інструмента",
    "fitness-chain.compare.row3.custom": "Говорить у тоні вашого бренду",
    "fitness-chain.compare.row4.shelf": "Підписка на інструмент, що обслуговує тисячі бізнесів",
    "fitness-chain.compare.row4.custom": "Рішення, створене лише для вашої мережі",
    "fitness-chain.compare.row5.shelf": "Ви підлаштовуєтеся під нього",
    "fitness-chain.compare.row5.custom": "Він створений навколо вас",
    "fitness-chain.faq.eyebrow": "Запитання",
    "fitness-chain.faq.title": "Часті запитання",
    "fitness-chain.faq.q1": "Ми вже працюємо зі своєю системою. Треба щось міняти?",
    "fitness-chain.faq.a1":
      "Ні. Ми створюємо агента навколо системи, яка у вас уже є. У вас нічого не змінюється.",
    "fitness-chain.faq.q2": "А як щодо нової політики Meta стосовно AI у WhatsApp?",
    "fitness-chain.faq.a2":
      "Політика січня 2026 заблокувала ChatGPT і загальні чат-боти в бізнес-WhatsApp, але явно дозволила AI-агентів, створених для конкретного завдання — відповіді клієнтам, запис на заняття, керування лідами. Це саме те, що ми створюємо.",
    "fitness-chain.faq.q3": "Скільки часу потрібно на створення?",
    "fitness-chain.faq.a3":
      "Перша версія в ефірі за 2-4 тижні, залежно від складності. Після цього ми продовжуємо налаштовувати й додавати можливості за потреби.",
    "fitness-chain.faq.q4": "Це замінить команду?",
    "fitness-chain.faq.a4":
      "Ні. Це звільнить їх. Замість відповіді \"о котрій годині ви відкриті?\" 200 разів на день, команда займається продажами, утриманням VIP-клієнтів та складними випадками.",
    "fitness-chain.faq.q5": "Що відбувається, коли агент не знає відповіді?",
    "fitness-chain.faq.a5":
      "Він передає розмову команді з повним резюме того, що запитав клієнт і що вже було відповідено. Команда не починає з нуля.",
    "fitness-chain.faq.q6": "Скільки це коштує?",
    "fitness-chain.faq.a6":
      "Залежить від складності — скільки філіалів, які системи треба підключити та скільки розмов очікується. Пропозицію щодо ціни — після зустрічі-знайомства.",
    "fitness-chain.why.eyebrow": "Хто я",
    "fitness-chain.why.title": "Привіт, я Алекс.",
    "fitness-chain.why.body":
      "Я люблю спорт. Я створив цього агента з нуля, і створюю його для кожної мережі заново — навколо ваших систем та процедур. Бо мережа, яка дає чудові тренування, заслуговує на сервіс того ж рівня.",
    "fitness-chain.finalcta.title": "Готові побачити, як це виглядатиме у вас?",
    "fitness-chain.finalcta.lede": "Зустріч 20 хвилин. Розберемося в мережі й подивимося, чи підходить це.",
    "fitness-chain.finalcta.cta": "Поговорімо",
    "fitness-chain.footer.copyright": "© 2025 · Hand in Hand",
    // Orphaned keys for [lang]/fitness-chain.astro compatibility
    "fitness-chain.hero.mock.title": "Ваша студія · Бот",
    "fitness-chain.hero.mock.status": "Онлайн",
    "fitness-chain.hero.mock1.scenario": "Запис на пробне заняття після робочих годин",
    "fitness-chain.step1.title": "Підключаємося до WhatsApp",
    "fitness-chain.step1.body": "Номер вашого бізнесу залишається тим самим. Без нового застосунку.",
    "fitness-chain.step2.title": "Адаптуємо під вашу студію",
    "fitness-chain.step2.body": "Ваш голос, заняття, ціни та години додаються до асистента.",
    "fitness-chain.step3.title": "Запускаємося за кілька тижнів",
    "fitness-chain.step3.body": "Поступове розгортання. Ви бачите кожну розмову, перш ніж ми запустимо.",
    "fitness-chain.about.eyebrow": "Хто я",
    "fitness-chain.about.title": "Алекс. Я створив цю платформу з нуля.",
    "fitness-chain.midcta.title": "Уявіть свій ранок без 40 повідомлень, що чекають.",
    "fitness-chain.midcta.lede": "Одна коротка розмова у WhatsApp, і ми дізнаємося, чи підходить це вам.",
    "fitness-chain.midcta.cta": "Написати мені у WhatsApp",
    "fitness-chain.explainer.title": "Стривайте, що таке \"AI-бот\" взагалі?",
    "fitness-chain.explainer.item1":
      "Підключається до вашого бізнес-номера WhatsApp. Той самий номер, без нового застосунку",
    "fitness-chain.explainer.item2":
      "Вивчає, як ви говорите, ваші ціни та розклад, і відповідає як ви",
    "fitness-chain.explainer.item3":
      "Справжня розмова, не меню з кнопками. Коли потрібні ви, передає вам",
    "fitness-chain.explainer.closing":
      "Підключається до календаря вашої студії (Google Calendar, Arbox). Немає застосунку для бронювання? Ми створимо для вас.",
    "fitness-chain.problem.eyebrow": "Щоденна реальність",
    "fitness-chain.problem.title": "Ви тренуєте весь день. Уночі відповідаєте у WhatsApp.",
    "fitness-chain.problem.pain1": "Запити після 21:00 просто забуваються до ранку.",
    "fitness-chain.problem.pain2":
      "Скасування в останню хвилину залишають місце порожнім, замість того щоб запропонувати його з листа очікування.",
    "fitness-chain.problem.pain3":
      "Після пробного заняття ви пам'ятаєте зв'язатися лише з половиною людей.",
    "fitness-chain.reminder.eyebrow": "Сценарій",
    "fitness-chain.reminder.title": "Бот нагадує. Клієнт переносить. Місце переходить далі.",
    "fitness-chain.reminder.caption":
      "За день до заняття надходить автоматичне нагадування. Якщо клієнт скасовує, система звільняє місце й надсилає пропозицію першому в листі очікування.",
    "fitness-chain.reminder.tiny":
      "Результат: менше прогалин у розкладі, без жодної години роботи з вашого боку.",
    "fitness-chain.reminder.mock.scenario": "Нагадування за 24 години + перенесення в лист очікування",
    "fitness-chain.capabilities.eyebrow": "Що це робить",
    "fitness-chain.capabilities.title": "Три завдання, які більше не чекатимуть вас увечері.",
    "fitness-chain.cap1.title": "Бронювання та перенесення занять",
    "fitness-chain.cap1.body": "Записи, скасування та лист очікування керуються самі у WhatsApp.",
    "fitness-chain.cap2.title": "Нагадування та реєстрація",
    "fitness-chain.cap2.body": "Повідомлення-нагадування за пів дня. Учасники підтверджують одним натисканням.",
    "fitness-chain.cap3.title": "Особистий follow-up після пробного",
    "fitness-chain.cap3.body": "Тепле повідомлення після заняття, і ви отримуєте відповіді в одному місці.",
    "fitness-chain.followup.eyebrow": "Сценарій",
    "fitness-chain.followup.title": "Особистий follow-up і передача вам у потрібний момент.",
    "fitness-chain.followup.caption":
      "Через день після пробного заняття бот запитує, як минуло. Коли клієнт відповідає чимось справжнім, бот позначає це й надсилає вам сповіщення, щоб ви особисто долучилися до розмови.",
    "fitness-chain.followup.tiny":
      "Кожна частина інформації збережена. Ви втручаєтеся лише коли це справді важливо.",
    "fitness-chain.followup.mock.scenario": "Особистий follow-up + передача власнику студії",
  },
} as const;
