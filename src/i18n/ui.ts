export const languages = {
  he: "עברית",
  en: "English",
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
    "nav.fitnessStudio": "סטודיו",
    "nav.fitnessChain": "רשת",
    "hero.title": "יד ביד עם בינה מלאכותית",
    "hero.subtitle":
      "אנחנו עוזרים לעסקים לצמוח באמצעות פתרונות AI מותאמים אישית",
    "hero.cta": "בואו נדבר",
    "footer.rights": "כל הזכויות שמורות",
    "contact.title": "צרו קשר",
    "contact.subtitle": "השאירו פרטים ונחזור אליכם בהקדם",
    "contact.firstName": "שם פרטי",
    "contact.lastName": "שם משפחה",
    "contact.email": "אימייל",
    "contact.phone": "טלפון",
    "contact.service": "איזה שירות אתם צריכים?",
    "contact.servicePlaceholder": "בחרו שירות",
    "contact.serviceConsulting": "ייעוץ AI",
    "contact.serviceAutomation": "אוטומציה",
    "contact.serviceChatbot": "צ׳אטבוט",
    "contact.serviceCustom": "פיתוח מותאם אישית",
    "contact.serviceOther": "אחר",
    "contact.submit": "שלחו",
    "contact.sending": "שולח...",
    "contact.error.firstName": "נא להזין שם פרטי",
    "contact.error.lastName": "נא להזין שם משפחה",
    "contact.error.email": "נא להזין כתובת אימייל תקינה",
    "contact.error.phone": "נא להזין מספר טלפון",
    "contact.error.service": "נא לבחור שירות",
    "contact.companyType": "סוג החברה",
    "contact.companyTypePlaceholder": "בחרו סוג חברה",
    "contact.companyTypeLawFirm": "משרד עורכי דין",
    "contact.companyTypeAccounting": "משרד רואי חשבון",
    "contact.companyTypeHealthcare": "בריאות",
    "contact.companyTypeRealEstate": 'נדל"ן',
    "contact.companyTypeEcommerce": "מסחר אלקטרוני",
    "contact.companyTypeManufacturing": "ייצור",
    "contact.companyTypeFinancial": "שירותים פיננסיים",
    "contact.companyTypeOther": "אחר",
    "contact.companyTypeOtherPlaceholder": "ציינו את סוג החברה",
    "contact.error.companyType": "נא לבחור סוג חברה",
    "contact.error.companyTypeOther": "נא לציין את סוג החברה",
    "contact.success.title": "תודה רבה!",
    "contact.success.message": "קיבלנו את הפרטים שלכם ונחזור אליכם בהקדם.",
    "features.fast.title": "מהיר ויעיל",
    "features.fast.description": "פתרונות AI שחוסכים זמן ומשאבים לעסק שלכם",
    "features.secure.title": "אמין ובטוח",
    "features.secure.description": "אבטחת מידע ברמה הגבוהה ביותר לשקט נפשי מלא",
    "features.support.title": "ליווי אישי",
    "features.support.description":
      "צוות מומחים שמלווה אתכם בכל שלב בדרך להצלחה",

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
    "fitness-chain.hero.tagline": "בונים לכם סוכן AI מותאם אישית לרשת שלכם.",
    "fitness-chain.hero.lede":
      "בונים סוכן AI שעונה ללקוחות בוואטסאפ, קובע שיעורים בכל סניף ומזהה מתאמנים בסיכון נטישה — מותאם לרשת ולמערכות שלכם.",
    "fitness-chain.hero.cta": "בואו נדבר",
    "fitness-chain.hero.trust": "שיחה של 20 דקות. בלי מצגות.",

    // Hero mock aside (churn-recovery scenario)
    "fitness-chain.hero.mock.aside.eyebrow": "דמו · החזרת מתאמנים",
    "fitness-chain.hero.mock.aside.title":
      "מתאמנת שכמעט עזבה — חוזרת לשיעור.",
    "fitness-chain.hero.mock.aside.body":
      "הסוכן שם לב לחוסר פעילות, פנה אישית, והחזיר אותה לסטודיו — בלי שאף אחד מהצוות התקשר.",

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
      "כשנדרשת התערבות אנושית, הצוות מקבל סיכום מלא ולא מתחיל מאפס.",

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
      "בונים סוכן AI שמכיר את המוצרים, המחירים, לוחות השיעורים והנהלים שלכם — מדבר בטון של הרשת, ויודע להתנהל בעברית טבעית.",
    "fitness-chain.how.step3.title": "אינטגרציה",
    "fitness-chain.how.step3.body":
      "מחברים לסוכן את המערכת שאתם כבר עובדים איתה — היומן, ה-CRM, וואטסאפ. שום דבר אצלכם לא משתנה.",
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
      "המדיניות של ינואר 2026 אסרה על צ׳אטבוטים כלליים מסוג ChatGPT בוואטסאפ העסקי, אבל מתירה במפורש סוכני AI ייעודיים לתפעול עסקי — מענה ללקוחות, קביעת תורים, ניהול לידים. בדיוק מה שאנחנו בונים.",
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
      "תלוי במורכבות — מספר הסניפים, מערכות לאינטגרציה והיקף השימוש. נסכם הצעת מחיר ספציפית אחרי שיחת ההיכרות.",

    // Why I build this
    "fitness-chain.why.eyebrow": "מי עומד מאחורי זה",
    "fitness-chain.why.title": "למה אני בונה את זה",
    "fitness-chain.why.body":
      "אני אוהב ספורט. החזון שלי הוא לעזור לעסקי כושר ובריאות לתת ללקוחות שלהם שירות באותה רמה כמו המוצר שהם נותנים.",

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
    "nav.fitnessStudio": "Studio",
    "nav.fitnessChain": "Chain",
    "hero.title": "Hand in Hand with AI",
    "hero.subtitle": "We help businesses grow with customized AI solutions",
    "hero.cta": "Let's Talk",
    "footer.rights": "All rights reserved",
    "contact.title": "Contact Us",
    "contact.subtitle": "Leave your details and we will get back to you soon",
    "contact.firstName": "First Name",
    "contact.lastName": "Last Name",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.service": "What service do you need?",
    "contact.servicePlaceholder": "Select a service",
    "contact.serviceConsulting": "AI Consulting",
    "contact.serviceAutomation": "Automation",
    "contact.serviceChatbot": "Chatbot",
    "contact.serviceCustom": "Custom Development",
    "contact.serviceOther": "Other",
    "contact.submit": "Submit",
    "contact.sending": "Sending...",
    "contact.error.firstName": "Please enter your first name",
    "contact.error.lastName": "Please enter your last name",
    "contact.error.email": "Please enter a valid email address",
    "contact.error.phone": "Please enter your phone number",
    "contact.error.service": "Please select a service",
    "contact.companyType": "Company Type",
    "contact.companyTypePlaceholder": "Select company type",
    "contact.companyTypeLawFirm": "Law Firm",
    "contact.companyTypeAccounting": "Accounting Firm",
    "contact.companyTypeHealthcare": "Healthcare",
    "contact.companyTypeRealEstate": "Real Estate",
    "contact.companyTypeEcommerce": "E-commerce",
    "contact.companyTypeManufacturing": "Manufacturing",
    "contact.companyTypeFinancial": "Financial Services",
    "contact.companyTypeOther": "Other",
    "contact.companyTypeOtherPlaceholder": "Specify your company type",
    "contact.error.companyType": "Please select a company type",
    "contact.error.companyTypeOther": "Please specify your company type",
    "contact.success.title": "Thank you!",
    "contact.success.message":
      "We have received your details and will get back to you soon.",
    "features.fast.title": "Fast & Efficient",
    "features.fast.description":
      "AI solutions that save time and resources for your business",
    "features.secure.title": "Reliable & Secure",
    "features.secure.description":
      "Top-tier data security for complete peace of mind",
    "features.support.title": "Personal Support",
    "features.support.description":
      "Expert team guiding you every step of the way to success",

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
} as const;
