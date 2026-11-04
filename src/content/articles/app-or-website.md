---
title: "אפליקציה או אתר — מה העסק שלך באמת צריך"
description: "מדריך להחלטה בין אפליקציה, אתר ו-Trusted Web Activity, לפי עלות תחזוקה, בדיקות חנות ושליטה בעדכונים."
slug: "app-or-website"
publishedAt: 2026-11-04
lastVerified: 2026-11-04
pillar: "/#services"
cluster: "decision"
relatedArticles: ["freelancer-or-agency", "spec-before-quotes"]
draft: true
---

<!-- Verification content for issue #107 (article page design port) — the
same text already reviewed and approved in the Claude Design specimen at
local/design/article-page.html, used here only so the port can be
screenshotted against every component the spec describes (heading rhythm,
table at 390px, aside, Latin-term chips, numbered procedure). The real,
final copy for this article ships separately under issue #100; whichever
of the two PRs lands second should take the other's body text, not both. -->

השאלה "אפליקציה או אתר" חוזרת כמעט בכל שיחת אפיון ראשונה, ולרוב היא
נשאלת הפוך: קודם בוחרים כיוון, ורק אחר כך בודקים אם הוא מתאים. בפועל
יש שלוש אופציות אמיתיות, לא שתיים — אפליקציה ילידית לאנדרואיד
ול-iOS, אתר רגיל שרץ בדפדפן, ואתר עטוף כאפליקציה שיושב בחנות אבל
מריץ בפנים את אותו האתר בדיוק. הבחירה הנכונה כמעט תמיד תלויה בשלוש
שאלות: כמה פעמים בשבוע משתמש אמיתי פותח את זה, כמה מהר התוכן
משתנה, וכמה מהתכונות באמת דורשות גישה לחומרה של הטלפון.

<aside class="art-aside">
קו מנחה מהיר: אם התשובה ל"כמה פעמים בשבוע" היא פחות מפעם אחת, התשובה
כמעט תמיד אתר — אפליקציה שלא נפתחת נמחקת תוך שבועות.
</aside>

## מתי אפליקציה ילידית היא הבחירה הנכונה

אפליקציה ילידית שווה את העלות הנוספת כשיש סיבה אמיתית שהדפדפן לא
יכול לתת: התראות Push שמגיעות גם כשהאפליקציה סגורה והטלפון נעול,
גישה לחומרה ברקע כמו מיקום מתמשך או חיישני תנועה, או ביצועים
שדפדפן פשוט לא עומד בהם — עיבוד תמונה כבד, אנימציה מורכבת, עבודה
אופליין ממושכת. אם אף אחד מהשלושה לא נכון עבורכם, אפליקציה ילידית
היא קוד נוסף לתחזק בלי תועלת שמצדיקה אותו.

- כמה פעמים בשבוע משתמש אמיתי פותח את זה, לא כמה פעמים אתם רוצים שיפתח
- האם יש תלות אמיתית בהתראות Push, לא רק "יהיה נחמד שיהיה"
- האם צריך גישה לחומרה ברקע — מיקום, חיישנים, בלוטות'
- מי מעדכן תוכן בפועל, ובאיזו תדירות
- מה התקציב לתחזוקת שתי גרסאות, Android ו-iOS, אם זו אפליקציה

<aside class="art-aside">
דוגמה מהשטח: ללקוחה אחת היה ברור שהיא "צריכה אפליקציה" — בבדיקה
התברר שהיא צריכה תזכורת שבועית, וזה בדיוק מה שהתראת Push מדפדפן כבר
נותנת, בלי חנות ובלי בדיקה.
</aside>

## מתי אתר עטוף (TWA) מספיק, ומתי לא

<span class="art-term">TWA</span> הוא פתרון ביניים אמיתי, לא פשרה
זמנית: אתר רגיל, עם אייקון במסך הבית ומסך פתיחה, ובלי שורת
הכתובת של הדפדפן — אבל התוכן בפנים הוא אותו אתר בדיוק, ועדכון הוא
פריסת שרת רגילה, לא גרסה חדשה בחנות. ה"לא" מגיע באותם שלושה
מקרים מהסעיף הקודם: אם צריך חומרה ברקע או Push אמיתי שעובד גם
כשהטלפון נעול, TWA לא ייתן את זה — הוא עדיין אתר, רק עטוף יפה.

הטבלה הבאה משווה את שלוש האופציות בשבעה פרמטרים שבאמת משנים החלטה:

<div class="art-table-scroll">
<table class="art-table">
<thead>
<tr><th scope="col"></th><th scope="col">אפליקציה ילידית</th><th scope="col">אתר עטוף (TWA)</th><th scope="col">אתר רגיל</th></tr>
</thead>
<tbody>
<tr><th scope="row">עדכון תוכן</th><td>גרסה חדשה בחנות</td><td>מיידי, כמו אתר</td><td>מיידי, כמו אתר</td></tr>
<tr><th scope="row">אייקון במסך הבית</th><td>כן</td><td>כן</td><td>רק אם מוסיפים ידנית</td></tr>
<tr class="art-row-highlight"><th scope="row">Push כשסגור ונעול</th><td>כן</td><td>חלקי, תלוי בדפדפן</td><td>לא</td></tr>
<tr><th scope="row">גישה לחומרה ברקע</th><td>מלאה</td><td>מוגבלת</td><td>לא</td></tr>
<tr><th scope="row">זמן עד השקה</th><td>שבועות</td><td>ימים</td><td>ימים</td></tr>
<tr><th scope="row">בדיקת חנות נדרשת</th><td>כן, לכל עדכון</td><td>כן, פעם אחת</td><td>לא</td></tr>
<tr><th scope="row">עלות תחזוקה שנתית</th><td>הכי גבוהה</td><td>בינונית</td><td>הכי נמוכה</td></tr>
</tbody>
</table>
</div>

<div class="art-cards">
<div class="art-card"><header><h3>אפליקציה ילידית</h3></header><dl>
<dt>עדכון תוכן</dt><dd>גרסה חדשה בחנות</dd>
<dt>אייקון במסך הבית</dt><dd>כן</dd>
<dt>Push כשסגור ונעול</dt><dd class="is-strong">כן</dd>
<dt>גישה לחומרה ברקע</dt><dd>מלאה</dd>
<dt>זמן עד השקה</dt><dd>שבועות</dd>
<dt>בדיקת חנות נדרשת</dt><dd>כן, לכל עדכון</dd>
<dt>עלות תחזוקה שנתית</dt><dd>הכי גבוהה</dd>
</dl></div>
<div class="art-card"><header><h3>אתר עטוף (TWA)</h3></header><dl>
<dt>עדכון תוכן</dt><dd>מיידי, כמו אתר</dd>
<dt>אייקון במסך הבית</dt><dd>כן</dd>
<dt>Push כשסגור ונעול</dt><dd class="is-strong">חלקי, תלוי בדפדפן</dd>
<dt>גישה לחומרה ברקע</dt><dd>מוגבלת</dd>
<dt>זמן עד השקה</dt><dd>ימים</dd>
<dt>בדיקת חנות נדרשת</dt><dd>כן, פעם אחת</dd>
<dt>עלות תחזוקה שנתית</dt><dd>בינונית</dd>
</dl></div>
<div class="art-card"><header><h3>אתר רגיל</h3></header><dl>
<dt>עדכון תוכן</dt><dd>מיידי, כמו אתר</dd>
<dt>אייקון במסך הבית</dt><dd>רק אם מוסיפים ידנית</dd>
<dt>Push כשסגור ונעול</dt><dd class="is-strong">לא</dd>
<dt>גישה לחומרה ברקע</dt><dd>לא</dd>
<dt>זמן עד השקה</dt><dd>ימים</dd>
<dt>בדיקת חנות נדרשת</dt><dd>לא</dd>
<dt>עלות תחזוקה שנתית</dt><dd>הכי נמוכה</dd>
</dl></div>
</div>

<aside class="art-aside">
המספר שהכי מפתיע לקוחות: גם ב-TWA עוברים בדיקת חנות — פעם אחת, לא
בכל עדכון כמו באפליקציה ילידית.
</aside>

## איך זה עובד בפועל, צעד אחר צעד

ברגע שהוחלט על אפליקציה ילידית או TWA, התהליך עד חנות עובר דרך
אותו חשבון <span class="art-term">Play Console</span> ואותם שלבים,
כמעט בלי קשר לאיזו אופציה נבחרה:

<ol class="pg-numbered">
<li><span class="pg-num">1</span><p>פותחים <span class="art-term">package name</span> קבוע לפרויקט (למשל <span class="art-term">com.yourbrand.app</span>) — הוא לא משתנה אחרי ההשקה, אז בוחרים אותו פעם אחת, נכון.</p></li>
<li><span class="pg-num">2</span><p>בונים את קובץ ההתקנה וממספרים אותו לפי <span class="art-term">versionCode</span> עולה — כל עדכון חייב מספר גבוה מהקודם, גם אם המספר שהמשתמש רואה לא השתנה.</p></li>
<li><span class="pg-num">3</span><p>פותחים חשבון מפתח ב-<span class="art-term">Play Console</span> אם אין עדיין, וממלאים את טפסי הפרטיות והתוכן.</p></li>
<li><span class="pg-num">4</span><p>מעלים לבדיקה סגורה, עוברים את דרישת הטסטרים, ורק אז מבקשים גישה לייצור.</p></li>
<li><span class="pg-num">5</span><p>אחרי אישור — כל עדכון הוא קובץ חדש עם <span class="art-term">versionCode</span> גבוה יותר, לא רק פריסה.</p></li>
</ol>
