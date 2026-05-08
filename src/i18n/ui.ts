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

    // ── Fitness studio landing page ───────────────────────────────
    "fitness.page.title": "עוזר חכם בוואטסאפ לסטודיו",
    "fitness.topbar.brand": "סטודיו · עוזר חכם בוואטסאפ",
    "fitness.topbar.cta": "וואטסאפ",
    "fitness.hero.eyebrow": "לבעלי סטודיו",
    "fitness.hero.title": "מנהל חכם בוואטסאפ.\nאתה מלמד. אנחנו מטפלים בשאר.",
    "fitness.hero.lede":
      "קובע שיעורי ניסיון, מחזק נאמנות ומחזיר מתאמנים שנעלמו. הכול בוואטסאפ, בעברית, בקול שלך.",
    "fitness.hero.cta": "דברו איתי בוואטסאפ",
    "fitness.hero.trust": "ללא טפסים. ללא התקנה. תגובה בדרך כלל באותו יום.",
    "fitness.hero.mock.title": "סטודיו שלך · בוט",
    "fitness.hero.mock.status": "מחובר",
    "fitness.hero.mock1.scenario": "הזמנת שיעור ניסיון אחרי שעות הפעילות",
    "fitness.hero.mock.aside.eyebrow": "תרחיש 1 · לסטודיו יוגה",
    "fitness.hero.mock.aside.title": "פנייה ב-22:48. בבוקר, השיעור כבר ביומן.",
    "fitness.hero.mock.aside.body":
      "לקוחה חדשה כותבת אחרי שעות הפעילות. הבוט מציע שני מועדים, עונה על שאלה, ומאשר את ההרשמה. את מתעוררת לפנייה סגורה.",
    // Core promise
    "fitness.promise.eyebrow": "מה זה עושה",
    "fitness.promise.title": "אתה מלמד. אנחנו מטפלים בשאר.",
    "fitness.promise.body":
      "עוזר חכם בוואטסאפ שמנהל את מחזור החיים של המתאמן שלך: מהפנייה הראשונה ועד לנאמן שמגיע כל שבוע.",
    // Three jobs
    "fitness.jobs.eyebrow": "שלוש משימות",
    "fitness.jobs.title": "הדברים שהיית צריך לעשות אחרי כל יום אימון.",
    "fitness.job1.title": "ממלא שיעורים",
    "fitness.job1.body": "עונה לפניות, מציע מועדים ומסגר שיעורי ניסיון. גם ב-23:00.",
    "fitness.job2.title": "בונה נאמנות",
    "fitness.job2.body":
      "שולח מסרים שבועיים לפי נוכחות. מי שבא שלוש פעמים מקבל אחד, מי שבא פעם אחת מקבל אחר.",
    "fitness.job3.title": "מונע נשירה",
    "fitness.job3.body":
      "מחזיר מתאמנים שנעלמו בגישה אמפתית. כשצריך אותך, מעביר אליך.",
    // Scenarios
    "fitness.scenario2.label": "תרחיש 2 · מתאמנת נאמנה",
    "fitness.scenario2.heading": "באת 3 פעמים השבוע. ידענו. שלחנו לך הודעה.",
    "fitness.scenario2.desc":
      "עוזר עוקב אחרי נוכחות ושולח הודעה שבועית מותאמת. מי שבא שלוש פעמים מקבל עידוד ומוצע לו שיעור חדש. מי שלא בא מקבל הודעה שונה לגמרי.",
    "fitness.scenario3.label": "תרחיש 3 · מתאמן שנעלם",
    "fitness.scenario3.heading": "לא ראינו אותך שבוע. הכל בסדר?",
    "fitness.scenario3.desc":
      "אחרי שבוע היעדרות, העוזר שואל. כשהמתאמן עונה בכנות, העוזר מגיב בהבנה — לא בלחץ. ואם צריך, מציע שבעל הסטודיו יחזור אישית.",
    // Channel options
    "fitness.channels.eyebrow": "ערוצים",
    "fitness.channels.title": "בוחרים איפה לקוחות מוצאים אתכם.",
    "fitness.channel1.title": "וואטסאפ",
    "fitness.channel1.body": "הערוץ הכי טבעי בישראל. מספר העסק נשאר אותו מספר.",
    "fitness.channel2.title": "אינסטגרם",
    "fitness.channel2.body": "מישהו שלח DM? העוזר עונה ומקבע שיעור ניסיון.",
    "fitness.channel3.title": "פייסבוק",
    "fitness.channel3.body": "מסנג׳ר עובד בדיוק כמו וואטסאפ. אותו עוזר, אותה חוויה.",
    // Mid CTA (kept for structural compatibility, updated wording)
    "fitness.midcta.title": "דמיינו את הבוקר שלכם בלי 40 הודעות שמחכות.",
    "fitness.midcta.lede": "שיחה קצרה אחת בוואטסאפ, ונדע אם זה מתאים לכם.",
    "fitness.midcta.cta": "דברו איתי בוואטסאפ",
    // How it works
    "fitness.how.eyebrow": "איך זה עובד",
    "fitness.how.title": "משיחה ראשונה לאוויר, תוך מספר שבועות.",
    "fitness.step1.title": "מתחברים לוואטסאפ",
    "fitness.step1.body": "מספר העסק נשאר אותו מספר. שום אפליקציה חדשה.",
    "fitness.step2.title": "מתאימים לסטודיו",
    "fitness.step2.body": "הקול, השיעורים, המחירון והשעות נכנסים לעוזר.",
    "fitness.step3.title": "עולים לאוויר תוך מספר שבועות",
    "fitness.step3.body": "פתיחה הדרגתית, אתם רואים כל שיחה לפני שמשחררים.",
    // About
    "fitness.about.eyebrow": "מי אני",
    "fitness.about.title": "אלכס. בניתי את הפלטפורמה הזאת מאפס.",
    // Final CTA
    "fitness.finalcta.title": "הצעד הראשון: שיחה אחת.",
    "fitness.finalcta.lede":
      "בלי מצגת, בלי התחייבות. נבין אם זה מתאים לסטודיו שלכם, ונחליט יחד.",
    "fitness.finalcta.cta": "דברו איתי בוואטסאפ",
    // FAQ
    "fitness.faq.eyebrow": "שאלות",
    "fitness.faq.title": "דברים שבעלי סטודיו שואלים אותי.",
    "fitness.faq.q1": "האם העוזר מתחבר ליומן שלי?",
    "fitness.faq.q2": "יש לי כבר מערכת הזמנות — העוזר יעבוד איתה?",
    "fitness.faq.q3": "כמה זמן עד שזה באוויר?",
    "fitness.faq.a3": "בין כמה שבועות לחודשיים, תלוי במפרט והיקף הבדיקות.",
    "fitness.faq.q4": "כמה זה עולה?",
    "fitness.faq.a4":
      "שני חלקים, שקופים מההתחלה: תשלום חד-פעמי על הפיתוח (נקבע לפי המפרט), ועלויות תפעול חודשיות של מאות שקלים לחודש לשירותים חיצוניים. הסכומים נסגרים בפגישה הראשונה, לפני שמתחילים.",
    "fitness.footer.copyright": "© 2025 · Hand in Hand",
    // Orphaned keys kept for [lang]/fitness.astro compatibility
    "fitness.explainer.title": 'רגע, מה זה בעצם "בוט AI"?',
    "fitness.explainer.item1":
      "מתחבר למספר הוואטסאפ העסקי שלך. אותו מספר, בלי אפליקציה חדשה",
    "fitness.explainer.item2":
      "לומד איך אתם מדברים, את המחירים ואת הלו״ז, ועונה כמוכם",
    "fitness.explainer.item3":
      "שיחה אנושית, לא תפריט עם כפתורים. וכשצריך אתכם, מעביר אליכם",
    "fitness.explainer.closing":
      "מתחבר ליומן הסטודיו שלך (Google Calendar, Arbox). אין אפליקציית הזמנות? נבנה לך אחת.",
    "fitness.problem.eyebrow": "המציאות היומיומית",
    "fitness.problem.title": "אתם מאמנים כל היום. ובלילה עונים לוואטסאפ.",
    "fitness.problem.pain1": "פניות שמגיעות אחרי 21:00 ופשוט נשכחות עד הבוקר.",
    "fitness.problem.pain2":
      "ביטולים של רגע אחרון והמקום נשאר ריק במקום להגיע לרשימת המתנה.",
    "fitness.problem.pain3":
      "אחרי שיעור ניסיון, אתם זוכרים לחזור רק למחצית מהאנשים.",
    "fitness.reminder.eyebrow": "תרחיש",
    "fitness.reminder.title": "הבוט מזכיר. החברה דוחה. המקום עובר הלאה.",
    "fitness.reminder.caption":
      "יום לפני האימון יוצאת תזכורת אוטומטית. אם המתאמנת דוחה, המערכת משחררת את המקום ושולחת הצעה למי שנמצאת ראשונה ברשימת ההמתנה.",
    "fitness.reminder.tiny":
      "תוצאה: פחות חורים בלוח, בלי שעת עבודה אחת מצידכם.",
    "fitness.reminder.mock.scenario": "תזכורת 24 שעות + העברה לרשימת המתנה",
    "fitness.capabilities.eyebrow": "מה זה עושה",
    "fitness.capabilities.title": "שלוש משימות שכבר לא יחכו לכם בערב.",
    "fitness.cap1.title": "קביעה והעברה של שיעורים",
    "fitness.cap1.body":
      "ההזמנות, הביטולים והרשימה ממתינים מתחזקים את עצמם בוואטסאפ.",
    "fitness.cap2.title": "תזכורות וצ'ק-אין",
    "fitness.cap2.body": "הודעת תזכורת חצי יום מראש. המגיעים מאשרים בלחיצה.",
    "fitness.cap3.title": "מעקב אישי אחרי ניסיון",
    "fitness.cap3.body":
      "פנייה חמה אחרי השיעור, ואתם מקבלים את התשובות מרוכזות.",
    "fitness.followup.eyebrow": "תרחיש",
    "fitness.followup.title": "פולואפ אישי, והעברה אליכם ברגע הנכון.",
    "fitness.followup.caption":
      "יום אחרי שיעור ניסיון, הבוט שואל איך היה. כשהמתאמנת עונה במשהו אמיתי, הבוט מסמן ושולח לכם התראה כדי שתיכנסו אישית לשיחה.",
    "fitness.followup.tiny":
      "כל פיסת מידע נשמרת. אתם נכנסים רק כשזה באמת חשוב.",
    "fitness.followup.mock.scenario": "פולואפ אישי + העברה לבעל הסטודיו",
  },
  en: {
    "site.title": "Hand in Hand AI",
    "site.description": "AI solutions for businesses",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Contact",
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

    // ── Fitness studio landing page ───────────────────────────────
    "fitness.page.title": "Smart studio manager on WhatsApp",
    "fitness.topbar.brand": "Studio · Smart WhatsApp manager",
    "fitness.topbar.cta": "WhatsApp",
    "fitness.hero.eyebrow": "For Studio Owners",
    "fitness.hero.title": "Smart manager on WhatsApp.\nYou teach. We handle the rest.",
    "fitness.hero.lede":
      "Books trial classes, builds loyalty, and re-engages members who disappear. All on WhatsApp, in Hebrew, in your voice.",
    "fitness.hero.cta": "Talk to me on WhatsApp",
    "fitness.hero.trust":
      "No forms. No installation. Response usually the same day.",
    "fitness.hero.mock.title": "Your Studio · Bot",
    "fitness.hero.mock.status": "Online",
    "fitness.hero.mock1.scenario": "Booking a trial class after business hours",
    "fitness.hero.mock.aside.eyebrow": "Scenario 1 · Yoga studio",
    "fitness.hero.mock.aside.title":
      "Message at 22:48. By morning, the class is booked.",
    "fitness.hero.mock.aside.body":
      "A new client messages after hours. The assistant offers two time slots, answers a question, and confirms the booking. You wake up to a closed inquiry.",
    // Core promise
    "fitness.promise.eyebrow": "What it does",
    "fitness.promise.title": "You teach. We handle the rest.",
    "fitness.promise.body":
      "A smart WhatsApp assistant that manages your member lifecycle: from the first enquiry to the loyal regular who shows up every week.",
    // Three jobs
    "fitness.jobs.eyebrow": "Three jobs",
    "fitness.jobs.title": "The things you used to do after every training day.",
    "fitness.job1.title": "Fill classes",
    "fitness.job1.body": "Answers leads, offers time slots, and locks in trial classes. Even at 11 PM.",
    "fitness.job2.title": "Build loyalty",
    "fitness.job2.body":
      "Sends weekly messages based on attendance. Someone who came three times gets one message. Someone who came once gets a different one.",
    "fitness.job3.title": "Prevent churn",
    "fitness.job3.body":
      "Re-engages members who disappear — with empathy, not pressure. When you're needed, it hands off to you.",
    // Scenarios
    "fitness.scenario2.label": "Scenario 2 · Loyal member",
    "fitness.scenario2.heading": "You came 3 times this week. We noticed. We reached out.",
    "fitness.scenario2.desc":
      "The assistant tracks attendance and sends a tailored weekly message. Three visits gets encouragement and a new class suggestion. Zero visits gets a different message entirely.",
    "fitness.scenario3.label": "Scenario 3 · Member who disappeared",
    "fitness.scenario3.heading": "We haven't seen you in a week. Everything okay?",
    "fitness.scenario3.desc":
      "After a week away, the assistant checks in. When the member replies honestly, it responds with understanding — not pressure. And if needed, offers an owner callback.",
    // Channel options
    "fitness.channels.eyebrow": "Channels",
    "fitness.channels.title": "Choose where clients find you.",
    "fitness.channel1.title": "WhatsApp",
    "fitness.channel1.body": "The most natural channel in Israel. Your business number stays the same.",
    "fitness.channel2.title": "Instagram",
    "fitness.channel2.body": "Someone sent a DM? The assistant replies and books a trial class.",
    "fitness.channel3.title": "Facebook",
    "fitness.channel3.body": "Messenger works just like WhatsApp. Same assistant, same experience.",
    // FAQ
    "fitness.faq.q1": "Does the assistant connect to my calendar?",
    "fitness.faq.q2": "I already have a booking system — will it work with that?",
    "fitness.faq.q3": "How long until it's live?",
    "fitness.faq.q4": "How does payment work?",
    "fitness.faq.a4":
      "Two parts, transparent from the start: a one-time development fee (set at the first meeting based on your spec), and monthly operational costs of a few hundred shekels for external services. No surprises.",
    // Orphaned — kept for [lang]/fitness.astro compatibility
    "fitness.explainer.title": 'Wait, what exactly is an "AI bot"?',
    "fitness.explainer.item1":
      "Connects to your business WhatsApp number. Same number, no new app",
    "fitness.explainer.item2":
      "Learns how you talk, your pricing, and your schedule, and replies in your voice",
    "fitness.explainer.item3":
      "A real conversation, not a button menu. When you're needed, it hands off to you",
    "fitness.explainer.closing":
      "Connects to your studio calendar (Google Calendar, Arbox, Boost). No booking app? We'll build you one.",
    "fitness.problem.eyebrow": "Day-to-day reality",
    "fitness.problem.title": "You train all day. At night you answer WhatsApp.",
    "fitness.problem.pain1":
      "Enquiries that come in after 9 PM and just get forgotten until morning.",
    "fitness.problem.pain2":
      "Last-minute cancellations leave the spot empty instead of offering it to the waitlist.",
    "fitness.problem.pain3":
      "After a trial class, you only remember to follow up with half the people.",
    "fitness.reminder.eyebrow": "Scenario",
    "fitness.reminder.title":
      "The bot reminds. The client reschedules. The spot moves on.",
    "fitness.reminder.caption":
      "The day before the class, an automatic reminder goes out. If the client cancels, the system releases the spot and sends an offer to the first person on the waitlist.",
    "fitness.reminder.tiny":
      "Result: fewer gaps in the schedule, without a single hour of work on your end.",
    "fitness.reminder.mock.scenario": "24-hour reminder + waitlist transfer",
    "fitness.capabilities.eyebrow": "What it does",
    "fitness.capabilities.title":
      "Three tasks that will no longer wait for you in the evening.",
    "fitness.cap1.title": "Class booking & transfers",
    "fitness.cap1.body":
      "Bookings, cancellations, and the waitlist manage themselves on WhatsApp.",
    "fitness.cap2.title": "Reminders & check-in",
    "fitness.cap2.body":
      "A reminder message half a day in advance. Attendees confirm with one tap.",
    "fitness.cap3.title": "Personal trial follow-up",
    "fitness.cap3.body":
      "A warm message after the class, and you get the responses in one place.",
    "fitness.followup.eyebrow": "Scenario",
    "fitness.followup.title":
      "Personal follow-up, and a handoff to you at exactly the right moment.",
    "fitness.followup.caption":
      "A day after the trial class, the bot asks how it went. When the client replies with something real, the bot flags it and sends you a notification so you can join the conversation personally.",
    "fitness.followup.tiny":
      "Every piece of information is saved. You step in only when it truly matters.",
    "fitness.followup.mock.scenario":
      "Personal follow-up + handoff to studio owner",
    "fitness.midcta.title": "Imagine your morning without 40 messages waiting.",
    "fitness.midcta.lede":
      "One short WhatsApp conversation, and we'll know if this is right for you.",
    "fitness.how.eyebrow": "How it works",
    "fitness.how.title": "From first conversation to live in a few weeks.",
    "fitness.step1.title": "Connect to WhatsApp",
    "fitness.step1.body": "Your business number stays the same. No new app.",
    "fitness.step2.title": "Tailor it to your studio",
    "fitness.step2.body":
      "Your voice, classes, pricing, and hours go into the bot.",
    "fitness.step3.title": "Go live within a few weeks",
    "fitness.step3.body":
      "A gradual rollout. You see every conversation before we release it.",
    "fitness.about.eyebrow": "Who I am",
    "fitness.about.title": "Alex. I built this platform from scratch.",
    "fitness.midcta.cta": "Talk to me on WhatsApp",
    "fitness.finalcta.title": "The first step: one conversation.",
    "fitness.finalcta.lede":
      "No presentation, no commitment. We'll figure out if this fits your studio, and decide together.",
    "fitness.finalcta.cta": "Talk to me on WhatsApp",
    "fitness.faq.eyebrow": "Questions",
    "fitness.faq.title": "Things studio owners ask me.",
    "fitness.faq.a3": "A few weeks to two months, depending on the spec and testing scope.",
    "fitness.footer.copyright": "© 2025 · Hand in Hand",
  },
} as const;
