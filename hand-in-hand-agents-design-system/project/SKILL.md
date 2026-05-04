# SKILL — Hand in Hand Agents (HIHA)

When designing for HIHA, **always** start by reading these three files in order:

1. `README.md` — brand voice, content fundamentals, visual foundations.
2. `colors_and_type.css` — every color, font, spacing, shadow, radius token. Link this stylesheet at the top of any HTML you create. Never invent new colors or font sizes; reach for a token first.
3. `ui_kits/web/` — the live recreation of the marketing site. Read `README.md`, `styles.css`, and the `.jsx` files. Treat them as source-of-truth for component shape, padding, and behaviour.

## Build rules

- **Tokens, not literals.** Use `var(--hiha-green)` etc. The only colors that live outside the token file are: `#fff`, `#000`, and the soft tints declared in `colors_and_type.css`.
- **Pills are signature.** Buttons, section openers, language switcher and even pain-point capsules use 32px or 64px radii. Don't ship rectangular CTAs.
- **The CTA gradient is sacred.** `var(--hiha-cta-gradient)` (green → orange, vertical) goes on the primary button and the gradient solution-pill — and nowhere else.
- **Layout grid is 1440 / 1064 / 188.** Page max-width 1440, content band 1064, gutters 188.
- **Type families:** Manrope (display + headings), Poppins (paragraphs), Outfit (UI / nav). Don't substitute. They're already preloaded by `colors_and_type.css`.
- **Iconography is sparse.** WhatsApp + phone + 5-pointed star + the EN/HE flag emoji. New flat-stroke icons may be added; flag any new visual style with the team.
- **Imagery placeholders.** When a real image is missing, fall back to a `.hiha-frame-card` (the 8px mint-bordered tile) — never SVG illustrations.
- **Voice:** human, calm, declarative. "Your team member that never sleeps." Avoid corporate hype, avoid emoji in body copy.

## When you need a component

Most marketing surfaces can be assembled from the React building blocks already in `ui_kits/web/`:

| Need | Component |
|------|-----------|
| Sticky nav | `<Header route setRoute />` |
| Hero | `<Hero eyebrow title sub primary secondary />` |
| Section opener | `<SolutionPill>…</SolutionPill>` |
| Pain capsules | `<PainPointGrid rows={[[…],[…]]} />` |
| Numbered process step | `<ProcessStep n title />` (compact) or `variant="tall"` |
| Floating tool tile | `<ToolChip>Automate CRM</ToolChip>` |
| Quote card | `<Testimonial quote name />` |
| Service card w/ orange tag | `<UserPainCard title body />` |
| Page-end CTA | `<CTABlock title sub />` |
| Footer plate | `<Footer />` |
| Buttons | `<PrimaryButton />`, `<SecondaryButton />`, `<LangPill />`, `<CTAPair />` |
| Atmospheric circle | `<ShadeBlob top left size opacity />` |

If you need something new, model its CSS on the existing `.hiha-*` classes in `styles.css` so spacing and motion stay consistent.

## When extending

- **New page:** copy a section block from `ui_kits/web/index.html`, change copy + props, never re-style from scratch.
- **New component:** add a new `.jsx` file alongside the others, attach to `window` via `Object.assign(window, { … })`, register in `index.html` with `<script type="text/babel" src="…"></script>`, add CSS to `styles.css` under a new comment header.
- **New color:** declare it in `colors_and_type.css` with a `--hiha-…` name first, then use the variable.
- **Print / decks / PPTX:** import `colors_and_type.css` and reach for the same tokens. Don't use UI kit components inside slides — re-implement using CSS only, since deck stages don't run JSX scripts unless wired up.

## Don'ts

- Don't introduce drop-shadows that aren't `--hiha-shadow-sm` or `--hiha-shadow-card`.
- Don't tilt or shear the logo. It's always a perfect circle.
- Don't add gradient text, glow effects, or "AI sparkle" tropes — they fight the calm, human tone.
- Don't use stock SVG illustrations. Placeholder tiles or real photography only.
