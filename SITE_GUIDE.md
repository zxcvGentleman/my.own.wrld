# Site guide — my.own.wrld

This file is the persistent project notebook. Update it whenever a page, component, variable, route, or behavior changes. Keep file paths and variable names accurate.

## Current architecture

GitHub Pages publishes only the `public/` directory (configured in `.github/workflows/deploy.yml`).

| Page | File | Purpose |
|---|---|---|
| Home | `public/index.html` | Landing page |
| WTBF | `public/wtbf.html` | Clothing brand |
| zxcvGentleman | `public/profile.html` | Personal profile and interests |
| Socials | `public/socials.html` | Social profile links |
| About | `public/about.html` | Content intentionally cleared; waiting for user-provided text |

Shared resources:
- `public/assets/css/style.css` — global layout, typography, colors, cards, responsive behavior, bottom navigation.
- `public/assets/js/main.js` — language toggle and dynamic footer year.
- `.github/workflows/deploy.yml` — deploys `public/` on pushes to `main`.
- `README.md` — short project overview.

## Navigation

The same fixed bottom navigation is present on every page:
1. Головна → `index.html`
2. WTBF → `wtbf.html`
3. zxcvGentleman → `profile.html`
4. Соцмережі → `socials.html`
5. About → `about.html`

Each item is a normal page link, not an in-page anchor. The current page receives `.active` and `aria-current="page"`. The panel is centered, translucent, rounded, content-width (`width: max-content`), and horizontally scrollable on narrow screens.

## CSS design tokens

Defined in `:root` in `public/assets/css/style.css`:

| Variable | Current value | Purpose |
|---|---|---|
| `--bg` | `#101010` | Main background |
| `--surface` | `#191919` | Card surface |
| `--surface-hover` | `#222` | Card hover surface |
| `--text` | `#f5f5f5` | Main text |
| `--muted` | `#999` | Secondary text |
| `--line` | `rgba(255,255,255,.12)` | Borders and separators |
| `--accent` | `#fff` | White accent; green accent removed |
| `--gutter` | `clamp(20px, 3.5vw, 58px)` | Horizontal page spacing |
| `--nav-bottom` | `clamp(14px, 2.4vh, 26px)` | Bottom navigation offset |
| `--font` | system/Inter stack | Site typography |

Important CSS classes:
- `.site-header`, `.logo`, `.language` — shared header.
- `.page`, `.page-inner`, `.eyebrow`, `.lead` — page layout and text.
- `.home-page`, `.home-copy`, `.text-link` — home page.
- `.split-bottom`, `.meta` — WTBF information row.
- `.profile-grid`, `.profile-card` — profile cards.
- `.social-grid`, `.social-card`, `.social-name`, `.social-handle`, `.social-arrow` — social links.
- `.site-footer` — shared footer.
- `.bottom-nav`, `.nav-link`, `.nav-link.active` — fixed navigation.

## JavaScript

File: `public/assets/js/main.js`

- `languageButton` — shared language toggle button, selected with `[data-language-toggle]`.
- `supportedLanguages` — supported locale codes: `uk`, `en`.
- `language` — active language; persisted in `localStorage` under `site-language`.
- `applyLanguage(nextLanguage)` — updates document language, text elements with `data-ua` and `data-en`, and button label.
- `year` — footer year element selected with `[data-current-year]`.

To make text bilingual, add both `data-ua` and `data-en` attributes to the element.

## Social destinations currently in use

- Twitch: `https://www.twitch.tv/zxcvgentleman`
- Telegram: `https://t.me/zxcvGentlemanTG`
- WTBF Telegram: `https://t.me/wtbf_official`
- GitHub: `https://github.com/zxcvGentleman`

## Design decisions / constraints

- Visual direction: dark, minimal, nearly full viewport width with modest edge spacing.
- Accent: white, not green.
- Navigation: bottom-centered floating glass panel, rounded, width determined by its content.
- Every navigation destination is a separate HTML document.
- About page must remain empty apart from its page title until the user supplies copy.
- Keep the interface restrained: avoid unnecessary decoration, ornaments, and filler copy.
- Social links should use polished cards and clear outbound indicators.
- Keep responsive behavior and reduced-motion support.

## Change log

### 2026-11-11
- Replaced the original one-page/anchor navigation with five independent pages.
- Added shared stylesheet and JavaScript under `public/assets/`.
- Changed the accent from green to white.
- Cleared About me copy; only the title remains.
- Redesigned social links as responsive cards.
- Kept the bottom-centered translucent rounded navigation and made every item a real page link.
- Added bilingual UK/EN text handling and persistence for the selected language.
- Updated README to reflect the actual deployment structure.
