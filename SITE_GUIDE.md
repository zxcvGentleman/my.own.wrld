# Site guide — my.own.wrld

This is the persistent project notebook. Update it whenever a page, component, variable, route, or behavior changes. Keep all file paths and variable names accurate.

## Current architecture

GitHub Pages publishes the `public/` directory (configured in `.github/workflows/deploy.yml`). All website interface copy is in English.

| Page | File | Purpose |
|---|---|---|
| Home | `public/index.html` | Landing page |
| WTBF | `public/wtbf.html` | Clothing brand |
| zxcvGentleman | `public/profile.html` | Personal profile and interests |
| Socials | `public/socials.html` | Social media links |

The About page has been deleted. It is no longer part of the site or navigation.

Shared resources:
- `public/assets/css/style.css` — Global layout, typography, colors, cards, responsive behavior, and bottom navigation.
- `.github/workflows/deploy.yml` — Deploys `public/` on pushes to `main`.
- `README.md` — Project overview.

## Navigation

The only persistent site chrome is the fixed bottom navigation; there is no top header or footer. The same navigation appears on every page:
1. Home → `index.html`
2. WTBF → `wtbf.html`
3. zxcvGentleman → `profile.html`
4. Socials → `socials.html`

Each item is a normal link to a separate HTML page, not an in-page anchor. The current page receives `.active` and `aria-current="page"`. The panel is centered, translucent, rounded, content-width (`width: max-content`), and horizontally scrollable on narrow screens.

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
- `.page`, `.page-inner`, `.eyebrow`, `.lead` — Page layout and text.
- `.home-page`, `.home-copy`, `.text-link` — Home page.
- `.split-bottom`, `.meta` — WTBF information row.
- `.profile-grid`, `.profile-card` — Profile cards.
- `.social-grid`, `.social-card`, `.social-name`, `.social-handle`, `.social-arrow` — Social links.
- `.bottom-nav`, `.nav-link`, `.nav-link.active` — Fixed navigation.

## JavaScript

No shared JavaScript is currently required. All website copy is English.

## Social destinations

- Twitch: `https://www.twitch.tv/zxcvgentleman`
- Telegram: `https://t.me/zxcvGentlemanTG`
- WTBF Telegram: `https://t.me/wtbf_official`
- AIR developers: `https://t.me/AIRdevelopers`
- Main TikTok: `https://www.tiktok.com/@my.own.wrld4me`

## Design decisions and constraints

- Visual direction: dark, minimal, nearly full viewport width with modest edge spacing.
- Accent: white, not green.
- Navigation: bottom-centered floating glass panel, rounded, width determined by its content.
- Every navigation destination is a separate HTML document.
- All website interface text and metadata must remain in English.
- The About page is deleted and must not be reintroduced unless requested.
- Keep the interface restrained; avoid unnecessary decoration and filler copy.
- Social links use polished cards and clear outbound indicators.
- Preserve responsive behavior and reduced-motion support.

## Change log

### 2026-11-11
- Replaced the original one-page navigation with separate HTML pages.
- Added shared stylesheet and JavaScript under `public/assets/`.
- Changed the accent from green to white.
- Redesigned social links as responsive cards.
- Kept the bottom-centered translucent rounded navigation.
- Added this project guide to track architecture and future changes.

### 2026-11-11 — Social links update
- Removed the `MY LINKS` eyebrow and GitHub card from the Socials page.
- Added short destination descriptions to every social card.
- Added AIR developers Telegram and the main TikTok account (`@my.own.wrld4me`).

### 2026-11-11 — Header and footer removal
- Removed the top header and its `zxcvGentleman.` wordmark from all pages.
- Removed the footer, including the `zxcvGentleman.` wordmark and copyright/year text.
- Updated page minimum heights to use the full viewport; bottom navigation remains.
- Removed the now-unused footer-year JavaScript file and script references.

### 2026-11-11 — English-only update
- Translated all website interface copy and metadata into English.
- Removed the language switcher and bilingual JavaScript behavior.
- Removed the About page from the project and bottom navigation.
- Updated README and this guide to reflect the four-page English-only site.
