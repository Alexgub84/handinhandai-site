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
    "fitness.page.title": "צ׳טבוט חכם לסטודיו",
    "fitness.topbar.brand": "סטודיו · צ׳טבוט חכם",
    "fitness.topbar.cta": "וואטסאפ",
    "fitness.hero.eyebrow": "לבעלי סטודיו בוטיק",
    "fitness.hero.title": "הסטודיו שלכם,\nפתוח גם בלילה.",
    "fitness.hero.lede":
      "צ׳טבוט חכם בוואטסאפ שעונה ללקוחות, קובע שיעורי ניסיון ומזכיר על אימונים. הכול בעברית, בקול שלכם.",
    "fitness.hero.cta": "דברו איתי בוואטסאפ",
    "fitness.hero.trust": "ללא טפסים. ללא התקנה. תגובה בדרך כלל באותו יום.",
    "fitness.hero.image.tag": "הדגמה",
    "fitness.hero.mock.title": "סטודיו שלך · בוט",
    "fitness.hero.mock.status": "מחובר",
    "fitness.hero.mock1.scenario": "הזמנת שיעור ניסיון אחרי שעות הפעילות",
    "fitness.hero.mock.aside.eyebrow": "תרחיש 1 · לסטודיו יוגה",
    "fitness.hero.mock.aside.title": "פנייה ב-22:48. בבוקר, השיעור כבר ביומן.",
    "fitness.hero.mock.aside.body":
      "לקוחה חדשה כותבת אחרי שעות הפעילות. הבוט מציע מועד אמיתי, מאשר את הפרטים, ושומר את השיעור ביומן של הסטודיו. את מתעוררת לפנייה סגורה.",
    "fitness.scenario2.label": "תרחיש 2 · לחדרי כושר",
    "fitness.scenario2.heading": "חבר ביטל ב-19:42. ב-19:43 המקום כבר תפוס.",
    "fitness.scenario2.desc":
      "יש לך כבר אפליקציית הזמנות (Arbox, Boost)? הבוט מתחבר אליה. אין? הבוט הופך לאחת: מנהל רשימת המתנה, מקבל ביטולים, ומציע את המקום שהתפנה לראשון בתור. אוטומטית, גם ב-19:42 בערב.",
    "fitness.scenario3.label": "תרחיש 3 · ל-MMA ואומנויות לחימה",
    "fitness.scenario3.heading":
      "הבוט שואל. נועה עונה משהו אמיתי. אתה מקבל התראה.",
    "fitness.scenario3.desc":
      "כל שיעור ניסיון מקבל פולואפ ביום שאחרי. תשובות שגרתיות נרשמות בלוח. תשובות שדורשות אותך מגיעות מיידית בוואטסאפ, ואתה נכנס אישית לשיחה.",
    "fitness.explainer.title": 'רגע, מה זה בעצם "בוט AI"?',
    "fitness.explainer.item1":
      "מתחבר למספר הוואטסאפ העסקי שלך. אותו מספר, בלי אפליקציה חדשה",
    "fitness.explainer.item2":
      "לומד איך אתם מדברים, את המחירים ואת הלו״ז, ועונה כמוכם",
    "fitness.explainer.item3":
      "שיחה אנושית, לא תפריט עם כפתורים. וכשצריך אתכם, מעביר אליכם",
    "fitness.explainer.closing":
      "מתחבר ליומן הסטודיו שלך (Google Calendar, Arbox, Boost). אין אפליקציית הזמנות? נבנה לך אחת.",
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
    "fitness.midcta.title": "דמיינו את הבוקר שלכם בלי 40 הודעות שמחכות.",
    "fitness.midcta.lede": "שיחה קצרה אחת בוואטסאפ, ונדע אם זה מתאים לכם.",
    "fitness.midcta.cta": "בואו נדבר בוואטסאפ",
    "fitness.how.eyebrow": "איך זה עובד",
    "fitness.how.title": "משיחה ראשונה לאוויר, תוך מספר שבועות.",
    "fitness.step1.title": "מתחברים לוואטסאפ",
    "fitness.step1.body": "מספר העסק נשאר אותו מספר. שום אפליקציה חדשה.",
    "fitness.step2.title": "מתאימים לסטודיו",
    "fitness.step2.body": "הקול, השיעורים, המחירון והשעות נכנסים לבוט.",
    "fitness.step3.title": "עולים לאוויר תוך מספר שבועות",
    "fitness.step3.body": "פתיחה הדרגתית, אתם רואים כל שיחה לפני שמשחררים.",
    "fitness.about.eyebrow": "מי אני",
    "fitness.about.title": "אלכס. מפתח עוזרים אישיים לעסקים קטנים בישראל.",
    "fitness.finalcta.title": "הצעד הראשון: שיחה אחת.",
    "fitness.finalcta.lede":
      "בלי מצגת, בלי התחייבות. נבין אם זה מתאים לסטודיו שלכם, ונחליט יחד.",
    "fitness.finalcta.cta": "שלחו לי הודעה בוואטסאפ",
    "fitness.faq.eyebrow": "שאלות",
    "fitness.faq.title": "דברים שבעלי סטודיו שואלים אותי.",
    "fitness.faq.q1": "כמה זמן עד שאפשר לראות את זה עובד?",
    "fitness.faq.q2": "איך זה עובד מבחינת תשלום?",
    "fitness.faq.q3": "מה אני צריך כדי שתתחילו?",
    "fitness.faq.a3":
      "שלושה דברים: שיחת היכרות של 30 דקות, מספר וואטסאפ עסקי פעיל, ורשימה קצרה של השאלות הכי נפוצות שלקוחות שואלים אתכם. זה הכל.",
    "fitness.faq.q4": "האם זה תומך בעברית?",
    "fitness.faq.a4":
      "כן, נבנה במקור לעברית, סלנג ישראלי וטון אישי שמותאם לסטודיו שלכם.",
    "fitness.footer.copyright": "© 2025 · Hand in Hand",
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
    "fitness.page.title": "Smart chatbot for studios",
    "fitness.topbar.brand": "Studio · Smart chatbot",
    "fitness.topbar.cta": "WhatsApp",
    "fitness.hero.eyebrow": "For Boutique Studio Owners",
    "fitness.hero.title": "Your studio,\nopen even at night.",
    "fitness.hero.lede":
      "A smart WhatsApp chatbot that responds to clients, books trial classes, and sends reminders, in your voice.",
    "fitness.hero.cta": "Talk to me on WhatsApp",
    "fitness.hero.trust":
      "No forms. No installation. Response usually the same day.",
    "fitness.hero.image.tag": "Demo",
    "fitness.hero.mock.title": "Your Studio · Bot",
    "fitness.hero.mock.status": "Online",
    "fitness.hero.mock1.scenario": "Booking a trial class after business hours",
    "fitness.hero.mock.aside.eyebrow": "Scenario 1 · Yoga studio",
    "fitness.hero.mock.aside.title":
      "Message at 22:48. By morning, the class is booked.",
    "fitness.hero.mock.aside.body":
      "A new client messages after hours. The bot offers a real time slot, confirms details, and saves the class to the studio calendar. You wake up to a closed inquiry.",
    "fitness.scenario2.label": "Scenario 2 · Gyms",
    "fitness.scenario2.heading":
      "A member cancelled at 19:42. By 19:43 the spot was taken.",
    "fitness.scenario2.desc":
      "Already have a booking app (Arbox, Boost)? The bot connects to it. No app? The bot becomes one: it manages the waitlist, takes cancellations, and offers the freed spot to the next person. Automatically, even at 19:42.",
    "fitness.scenario3.label": "Scenario 3 · MMA & martial arts",
    "fitness.scenario3.heading":
      "The bot asks. Noa replies with something real. You get an alert.",
    "fitness.scenario3.desc":
      "Every trial class gets a follow-up the next day. Routine replies are logged. Replies that need you arrive instantly on WhatsApp, and you step in personally.",
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
    "fitness.midcta.cta": "Let's talk on WhatsApp",
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
    "fitness.about.title":
      "Alex. Building personal AI assistants for small businesses in Israel.",
    "fitness.finalcta.title": "The first step: one conversation.",
    "fitness.finalcta.lede":
      "No presentation, no commitment. We'll figure out if this fits your studio, and decide together.",
    "fitness.finalcta.cta": "Send me a WhatsApp message",
    "fitness.faq.eyebrow": "Questions",
    "fitness.faq.title": "Things studio owners ask me.",
    "fitness.faq.q1": "How long before I see it working?",
    "fitness.faq.q2": "How does payment work?",
    "fitness.faq.q3": "What do I need to get started?",
    "fitness.faq.a3":
      "Three things: a 30-minute intro call, an active business WhatsApp number, and a short list of the most common questions your clients ask. That's it.",
    "fitness.faq.q4": "Does it support Hebrew?",
    "fitness.faq.a4":
      "Yes, built natively for Hebrew, Israeli slang, and a personal tone tailored to your studio.",
    "fitness.footer.copyright": "© 2025 · Hand in Hand",
  },
} as const;
