// fitness/landing-page.jsx — long-form RTL Hebrew landing page for boutique
// fitness studio owners. Renders both calm (light) and bold (dark) variants
// at both mobile (390) and desktop (1280) widths.
// Copy is Hebrew live; English notes are kept in JSX comments for review.

const FS_ICONS = {
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.05 4.91A10 10 0 0 0 4.6 18.96L3 23l4.16-1.55A10 10 0 1 0 19.05 4.91Zm-7 15.42a8.32 8.32 0 0 1-4.24-1.16l-.3-.18-2.46.92.92-2.4-.2-.31a8.34 8.34 0 1 1 6.28 3.13Zm4.57-6.24c-.25-.13-1.48-.73-1.71-.81s-.4-.13-.56.13-.65.81-.79.97-.29.2-.54.07a6.85 6.85 0 0 1-2.01-1.24 7.55 7.55 0 0 1-1.4-1.74c-.15-.25 0-.39.11-.51.11-.11.25-.29.37-.43a1.7 1.7 0 0 0 .25-.41.46.46 0 0 0 0-.43c-.07-.13-.56-1.36-.77-1.86s-.41-.43-.56-.43h-.48a.91.91 0 0 0-.66.31 2.78 2.78 0 0 0-.87 2.07 4.83 4.83 0 0 0 1 2.55 11.06 11.06 0 0 0 4.23 3.74 14.32 14.32 0 0 0 1.41.52 3.39 3.39 0 0 0 1.56.1 2.55 2.55 0 0 0 1.67-1.18 2.07 2.07 0 0 0 .14-1.18c-.06-.13-.23-.2-.48-.33Z" />
    </svg>
  ),
  bell:    (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>),
  calendar:(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>),
  spark:   (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>),
  plus:    (<span aria-hidden style={{fontSize:22, lineHeight:1}}>+</span>),
};

// MockSlot — phone-frame placeholder with a labeled "drop zone".
// The real interactive WhatsApp mock components plug in here later.
function MockSlot({ id, scenario, height = 560 }) {
  return (
    <div className="fs-mock-slot is-dashed" style={{ height }} data-mock-slot={id} role="img" aria-label={`Mock #${id}: ${scenario}`}>
      <div className="fs-mock-slot-header">
        <div className="fs-mock-slot-avatar">{FS_ICONS.whatsapp}</div>
        <div>
          <div className="fs-mock-slot-title">סטודיו שלך · בוט</div>
          <div className="fs-mock-slot-sub">מחובר</div>
        </div>
      </div>
      <div className="fs-mock-slot-body">
        <div className="fs-mock-slot-label">
          Mock #{id}
          <small>{scenario}</small>
        </div>
      </div>
    </div>
  );
}

function CTAButton({ children = "דברו איתי בוואטסאפ", trust }) {
  return (
    <div>
      <a className="fs-btn fs-btn-primary" href="#" onClick={(e) => e.preventDefault()}>
        {FS_ICONS.whatsapp}
        <span>{children}</span>
      </a>
      {trust && <span className="fs-trust">{trust}</span>}
    </div>
  );
}

function TopBar() {
  return (
    <div className="fs-topbar">
      <div className="fs-brand">
        <span className="fs-brand-mark">{FS_ICONS.whatsapp}</span>
        <span>סטודיו · עוזר אישי</span>
      </div>
      <a className="fs-topbar-cta" href="#" onClick={(e)=>e.preventDefault()}>
        {FS_ICONS.whatsapp}
        <span>וואטסאפ</span>
      </a>
    </div>
  );
}

function Hero({ variant }) {
  const head = variant === "bold" ? (
    <>הסטודיו שלכם,<br/><strong>פתוח גם בלילה.</strong></>
  ) : (
    <>הסטודיו שלכם,<br/>פתוח גם בלילה.</>
  );
  return (
    <section className="fs-section fs-hero" data-screen-label="01 Hero">
      <div className="fs-hero-stage">
        <div className="fs-hero-image" style={{backgroundImage:"url(hero.png)"}}>
          <span className="fs-hero-image-tag">סטודיו אמיתי · לקוחה אמיתית</span>
        </div>
        <div className="fs-hero-copy">
          <p className="fs-eyebrow">לבעלי סטודיו בוטיק</p>
          <h1 className="fs-h1">{head}</h1>
          <p className="fs-lede">
            עוזר חכם בוואטסאפ שעונה ללקוחות, קובע שיעורי ניסיון ומזכיר על אימונים — בעברית, בקול שלכם.
          </p>
          <CTAButton trust="ללא טפסים. ללא התקנה. תשובה בתוך שעה." />
        </div>
      </div>
      <div className="fs-hero-mock-row">
        <div className="fs-hero-mock-slot">
          <MockSlot id="1" scenario="הזמנת שיעור ניסיון אחרי שעות הפעילות" />
        </div>
        <div className="fs-hero-mock-aside">
          <p className="fs-eyebrow">דוגמה חיה</p>
          <h3 className="fs-h3">כך זה נראה ללקוחה שלכם</h3>
          <p className="fs-muted">הודעה אחת בוואטסאפ, אחרי שעות הפעילות. הבוט מציע מועד, מאשר ושולח תזכורת.</p>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="fs-section fs-section-band" data-screen-label="02 Problem">
      <p className="fs-eyebrow">המציאות היומיומית</p>
      <h2 className="fs-h2">אתם מאמנים. ואז עונים להודעות עד אחת בלילה.</h2>
      <ul className="fs-pain-list">
        <li>פניות שמגיעות אחרי 21:00 ופשוט נשכחות עד הבוקר.</li>
        <li>ביטולים של רגע אחרון — והמקום נשאר ריק במקום להגיע לרשימת המתנה.</li>
        <li>אחרי שיעור ניסיון, אתם זוכרים לחזור רק למחצית מהאנשים.</li>
      </ul>
    </section>
  );
}

function ScenarioReminder() {
  return (
    <section className="fs-section" data-screen-label="03 Scenario · Reminder">
      <div className="fs-scenario-grid">
        <MockSlot id="2" scenario="תזכורת 24 שעות + העברה לרשימת המתנה" />
        <div>
          <p className="fs-eyebrow">תרחיש</p>
          <h2 className="fs-h2">הבוט מזכיר. החברה דוחה. המקום עובר הלאה.</h2>
          <p className="fs-caption">
            יום לפני האימון יוצאת תזכורת אוטומטית. אם המתאמנת דוחה — המערכת משחררת את המקום ושולחת הצעה למי שנמצאת ראשונה ברשימת ההמתנה.
          </p>
          <p className="fs-tiny">תוצאה: פחות חורים בלוח, בלי שעת עבודה אחת מצידכם.</p>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const items = [
    { icon: FS_ICONS.calendar, title: "קביעה והעברה של שיעורים", body: "ההזמנות, הביטולים והרשימה ממתינים מתחזקים את עצמם בוואטסאפ." },
    { icon: FS_ICONS.bell,     title: "תזכורות וצ׳ק-אין",        body: "הודעת תזכורת חצי יום מראש. המגיעים מאשרים בלחיצה." },
    { icon: FS_ICONS.spark,    title: "מעקב אישי אחרי ניסיון",    body: "פנייה חמה אחרי השיעור, ואתם מקבלים את התשובות מרוכזות." },
  ];
  return (
    <section className="fs-section fs-section-band" data-screen-label="04 What it does">
      <p className="fs-eyebrow">מה זה עושה</p>
      <h2 className="fs-h2">שלוש משימות שכבר לא יחכו לכם בערב.</h2>
      <div className="fs-cap-grid">
        {items.map((c, i) => (
          <div className="fs-cap-card" key={i}>
            <span className="fs-cap-icon">{c.icon}</span>
            <h3 className="fs-h3">{c.title}</h3>
            <p className="fs-muted" style={{margin:0}}>{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ScenarioFollowup() {
  return (
    <section className="fs-section" data-screen-label="05 Scenario · Follow-up">
      <div className="fs-scenario-grid is-flipped">
        <div>
          <p className="fs-eyebrow">תרחיש</p>
          <h2 className="fs-h2">פולואפ אישי — והעברה אליכם ברגע הנכון.</h2>
          <p className="fs-caption">
            יום אחרי שיעור ניסיון, הבוט שואל איך היה. כשהמתאמנת עונה במשהו אמיתי — הבוט מסמן ושולח לכם התראה כדי שתיכנסו אישית לשיחה.
          </p>
          <p className="fs-tiny">כל פיסת מידע נשמרת. אתם נכנסים רק כשזה באמת חשוב.</p>
        </div>
        <MockSlot id="3" scenario="פולואפ אישי + העברה לבעל הסטודיו" />
      </div>
    </section>
  );
}

function MidCTA() {
  return (
    <section className="fs-section fs-section-dark" data-screen-label="06 Mid CTA">
      <h2 className="fs-h2">דמיינו את הבוקר שלכם בלי 40 הודעות שמחכות.</h2>
      <p className="fs-lede" style={{maxWidth:"42ch"}}>שיחה קצרה אחת בוואטסאפ — ונדע אם זה מתאים לכם.</p>
      <CTAButton>בואו נדבר בוואטסאפ</CTAButton>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { t: "מתחברים לוואטסאפ", b: "מספר העסק נשאר אותו מספר. שום אפליקציה חדשה." },
    { t: "מתאימים לסטודיו", b: "הקול, השיעורים, המחירון, השעות — נכנסים לבוט." },
    { t: "עולים לאוויר תוך 5 ימים", b: "פתיחה הדרגתית, אתם רואים כל שיחה לפני שמשחררים." },
  ];
  return (
    <section className="fs-section fs-section-band" data-screen-label="07 How it works">
      <p className="fs-eyebrow">איך זה עובד</p>
      <h2 className="fs-h2">משיחה ראשונה לאוויר — חמישה ימים.</h2>
      <ol className="fs-step-list">
        {steps.map((s, i) => (
          <li key={i}>
            <span className="fs-step-num">{i+1}</span>
            <h3 className="fs-h3">{s.t}</h3>
            <p className="fs-muted" style={{margin:0}}>{s.b}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function About() {
  return (
    <section className="fs-section" data-screen-label="08 About">
      <p className="fs-eyebrow">מי אני</p>
      <div className="fs-about">
        <div className="fs-about-photo" style={{backgroundImage:"url(hero.png)", backgroundPosition:"center 20%"}} />
        <div>
          <h2 className="fs-h2" style={{marginBottom:8}}>אלכס. בונה עוזרים אישיים לעסקים קטנים.</h2>
          <p className="fs-muted" style={{margin:0, maxWidth:"54ch"}}>
            עבדתי עם רשת הסטודיואים <strong>Chillist</strong> ועם עוד עשרות עסקי בוטיק. אני בונה את הבוט אחד-על-אחד, לפי האופן שבו אתם מדברים עם הלקוחות שלכם — לא תבנית גנרית.
          </p>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="fs-section fs-section-dark" data-screen-label="09 Final CTA">
      <h2 className="fs-h2">הצעד הראשון: שיחה אחת.</h2>
      <p className="fs-lede" style={{maxWidth:"40ch"}}>בלי מצגת, בלי התחייבות. נבין אם זה מתאים לסטודיו שלכם — ונחליט יחד.</p>
      <CTAButton>שלחו לי הודעה בוואטסאפ</CTAButton>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = React.useState(0);
  const items = [
    { q: "כמה זה עולה?", a: "תלוי בהיקף וברמת ההתאמה. הטווח מתחיל ב-₪1,200 לחודש כולל הקמה. כל מחיר נסגר אחרי שיחה." },
    { q: "מה אני צריך כדי שתתחילו?", a: "מספר וואטסאפ עסקי, מחירון, מערכת ההזמנות שלכם — ושיחה של 30 דקות." },
    { q: "כמה זמן עד שאפשר לראות את זה עובד?", a: "סביב חמישה ימי עבודה מהשיחה הראשונה. אנחנו עולים בהדרגה ואתם רואים כל הודעה." },
    { q: "האם זה תומך בעברית?", a: "כן. הבוט מדבר עברית טבעית — לא תרגום מאנגלית — ויודע גם להתחלף לאנגלית כשצריך." },
  ];
  return (
    <section className="fs-section" data-screen-label="10 FAQ">
      <p className="fs-eyebrow">שאלות</p>
      <h2 className="fs-h2">דברים שבעלי סטודיו שואלים אותי.</h2>
      <div className="fs-faq">
        {items.map((it, i) => (
          <div key={i} className="fs-faq-item" data-open={open===i}>
            <button className="fs-faq-q" onClick={() => setOpen(open===i ? -1 : i)}>
              <span>{it.q}</span><span>+</span>
            </button>
            <div className="fs-faq-a">{it.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="fs-footer">
      <div>© 2025 · Hand in Hand</div>
      <div style={{display:"flex", gap:18}}>
        <a href="#">+972-50-000-0000</a>
        <a href="#">contact@handinhandagents.com</a>
      </div>
    </footer>
  );
}

function LandingPage({ variant = "calm", device = "mobile" }) {
  const cls = ["fs-page", device === "desk" ? "is-desk" : "", variant === "bold" ? "is-bold" : ""].filter(Boolean).join(" ");
  return (
    <div className={cls} dir="rtl" lang="he" data-screen-label={`Landing · ${variant} · ${device}`}>
      <TopBar />
      <Hero variant={variant} />
      <Problem />
      <ScenarioReminder />
      <Capabilities />
      <ScenarioFollowup />
      <MidCTA />
      <HowItWorks />
      <About />
      <FinalCTA />
      <FAQ />
      <Footer />
    </div>
  );
}

Object.assign(window, { LandingPage });
