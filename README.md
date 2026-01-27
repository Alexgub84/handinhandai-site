# Hand in Hand AI

A bilingual (Hebrew/English) marketing website for Hand in Hand AI - an AI solutions consultancy helping businesses grow with customized AI solutions.

**Live site:** https://handinhandai.com

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Astro](https://astro.build) | 5.16 | Static site framework |
| [Tailwind CSS](https://tailwindcss.com) | 4.1 | Utility-first CSS framework |
| [TypeScript](https://www.typescriptlang.org) | - | Type safety |
| [Cloudflare Pages](https://pages.cloudflare.com) | - | Hosting & CDN |
| [Make.com](https://make.com) | - | Form submission webhook |

## Features

- **Internationalization (i18n):** Full support for Hebrew (RTL) and English (LTR)
- **Responsive Design:** Mobile-first design with smooth transitions
- **Contact Form:** Client-side validation with Make.com webhook integration
- **SEO Optimized:** Open Graph and Twitter meta tags for social sharing
- **Performance:** Static site generation for fast load times

## Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Cloudflare Pages deployment
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── logo.png
│   ├── og-image.png          # Social sharing image
│   └── apple-touch-icon.png
├── src/
│   ├── components/
│   │   ├── ContactForm.astro # Contact form with validation
│   │   ├── Footer.astro
│   │   ├── Header.astro      # Navigation with mobile menu
│   │   └── LanguageSwitcher.astro
│   ├── i18n/
│   │   ├── ui.ts             # Translation strings (he/en)
│   │   └── utils.ts          # i18n helper functions
│   ├── layouts/
│   │   └── Layout.astro      # Base layout with meta tags
│   ├── pages/
│   │   ├── index.astro       # Hebrew homepage (default)
│   │   ├── contact.astro     # Hebrew contact page
│   │   └── en/
│   │       ├── index.astro   # English homepage
│   │       └── contact.astro # English contact page
│   └── styles/
│       └── global.css        # Tailwind imports & base styles
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Pages

| Route | Language | Description |
|-------|----------|-------------|
| `/` | Hebrew | Homepage with hero, features, and contact form |
| `/contact` | Hebrew | Dedicated contact page |
| `/en/` | English | English homepage |
| `/en/contact` | English | English contact page |

## Services Offered

The contact form allows users to inquire about:
- AI Consulting
- Automation
- Chatbot development
- Custom AI development

## Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build for production to `./dist/` |
| `npm run preview` | Preview production build locally |

## Deployment

The site automatically deploys to Cloudflare Pages on push to `main` via GitHub Actions.

**Required GitHub Secrets:**
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```
