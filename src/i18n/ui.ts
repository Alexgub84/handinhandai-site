export const languages = {
  he: 'עברית',
  en: 'English',
} as const;

export const defaultLang = 'he';

export type Lang = keyof typeof languages;

export const ui = {
  he: {
    'site.title': 'Hand in Hand AI',
    'site.description': 'פתרונות בינה מלאכותית לעסקים',
    'nav.home': 'בית',
    'nav.about': 'אודות',
    'nav.services': 'שירותים',
    'nav.contact': 'צור קשר',
    'hero.title': 'יד ביד עם בינה מלאכותית',
    'hero.subtitle': 'אנחנו עוזרים לעסקים לצמוח באמצעות פתרונות AI מותאמים אישית',
    'hero.cta': 'בואו נדבר',
    'footer.rights': 'כל הזכויות שמורות',
  },
  en: {
    'site.title': 'Hand in Hand AI',
    'site.description': 'AI solutions for businesses',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'hero.title': 'Hand in Hand with AI',
    'hero.subtitle': 'We help businesses grow with customized AI solutions',
    'hero.cta': "Let's Talk",
    'footer.rights': 'All rights reserved',
  },
} as const;
