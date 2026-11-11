# Site guide — my.own.wrld

This is the persistent project notebook. Update it whenever a page, component, variable, route, or behavior changes. Keep all file paths and variable names accurate.

## Current architecture

GitHub Pages publishes the `public/` directory (configured in `.github/workflows/deploy.yml`). All website interface copy is in English.

| Page | File | Purpose |
|---|---|---|
| Home | `public/index.html` | Landing page |
| WTBF | `public/wtbf.html` | Clothing brand |
| zxcvGentleman | `public/profile.html` | Fortnite player profile |
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
- `.profile-grid`, `.profile-card` — Single-column Fortnite profile card.
- `.social-grid`, `.social-card`, `.social-name`, `.social-handle` — Social links.
- `.bottom-nav`, `.nav-link`, `.nav-link.active` — Fixed navigation.

## JavaScript

No shared JavaScript is currently required. All website copy is English.

## Social destinations

- Twitch: `https://www.twitch.tv/zxcvgentleman`
- Fortnite Telegram: `https://t.me/zxcvGentlemanTG`
- WTBF Telegram: `https://t.me/wtbf_official`
- AIR developers: `https://t.me/AIRdevelopers`
- Main TikTok: `https://www.tiktok.com/@my.own.wrld4me`

## Design decisions and constraints

- Text selection is disabled globally through `user-select: none` and `-webkit-user-select: none` on the universal selector in `public/assets/css/style.css`.

- Visual direction: dark, minimal, nearly full viewport width with modest edge spacing.
- Accent: white, not green.
- Navigation: bottom-centered floating glass panel, rounded, width determined by its content.
- Every navigation destination is a separate HTML document.
- All website interface text and metadata must remain in English.
- The About page is deleted and must not be reintroduced unless requested.
- Keep the interface restrained; avoid unnecessary decoration and filler copy.
- Social links use clean, text-only cards without decorative arrow icons.
- Social cards use a balanced three-column desktop grid, a centered final card in the two-column tablet layout, and a single-column mobile layout.
- Preserve responsive behavior and reduced-motion support.

## Change log

### 2026-11-11
- Replaced the original one-page navigation with separate HTML pages.
- Added shared stylesheet and JavaScript under `public/assets/`.
- Changed the accent from green to white.
- Redesigned social links as responsive cards.
- Kept the bottom-centered translucent rounded navigation.
- Added this project guide to track architecture and future changes.

### 2026-11-11 — Fortnite Telegram clarification
- Renamed the personal Telegram card to Fortnite Telegram and clarified that it is dedicated to Fortnite.

### 2026-11-11 — Social links update
- Removed the `MY LINKS` eyebrow and GitHub card from the Socials page.
- Added short destination descriptions to every social card.
- Added AIR developers Telegram and the main TikTok account (`@my.own.wrld4me`).

### 2026-11-11 — Header and footer removal
- Removed the top header and its `zxcvGentleman.` wordmark from all pages.
- Removed the footer, including the `zxcvGentleman.` wordmark and copyright/year text.
- Updated page minimum heights to use the full viewport; bottom navigation remains.
- Removed the now-unused footer-year JavaScript file and script references.

### 2026-11-11 — Profile heading cleanup
- Removed the decorative period after `zxcvGentleman` in the profile page heading.

### 2026-11-11 — Socials heading cleanup
- Removed the decorative period after `Socials` in the `public/socials.html` page heading.

### 2026-11-11 — Fortnite-inspired profile redesign
- Rebuilt `public/profile.html` as a Fortnite-inspired player profile screen with a blue/violet Battle Royale atmosphere, grid backdrop, player-name hero, overview panel, and responsive stat tiles.
- Preserved the existing player description and represented only supplied facts in the stat tiles: started in Season 21, nearly 4,000 hours, and competitive focus.
- Added page-scoped `.player-*` styles and profile-specific bottom-navigation colors in `public/assets/css/style.css`; no external game assets or trademarks were embedded.

### 2026-11-11 — Global text selection disabled
- Disabled text highlighting/selection across all site elements with `user-select: none` and the WebKit-prefixed equivalent in the global universal CSS rule.

### 2026-11-11 — WTBF brand landing page
- Removed the clothing-brand eyebrow, descriptive paragraph, and preparation copy from `public/wtbf.html`.
- Rebuilt WTBF as a full-screen colorful brand splash page with a large gradient wordmark and the concise first-drop date (May 2027).
- Added page-scoped `.wtbf-*` styles in `public/assets/css/style.css`, including layered gradient lighting, subtle orbit rings, responsive sizing, and a matching translucent navigation surface.
- Left the future official-brand-site destination unlinked until its URL is available.

### 2026-11-11 — Fortnite profile focus
- Removed the `PERSONAL PROFILE` eyebrow and the Development card from `public/profile.html`.
- Expanded the Fortnite section with the user-shared background: started in Season 21, nearly 4,000 hours played, and the goal of competing in Fortnite esports.
- Changed the profile layout to one wider, single-column card.

### 2026-11-11 — Social button layout refinement
- Reorganized the Socials cards into a balanced three-column desktop grid.
- Centered the fifth card on the two-column tablet layout and kept a clean single-column mobile layout.
- Standardized card height and spacing; removed the circular outbound-arrow decorations for a cleaner appearance.

### 2026-11-11 — English-only update
- Translated all website interface copy and metadata into English.
- Removed the language switcher and bilingual JavaScript behavior.
- Removed the About page from the project and bottom navigation.
- Updated README and this guide to reflect the four-page English-only site.


### 2026-11-11 — Fortnite player dashboard redesign
- Replaced the text-first profile composition in public/profile.html with a visual player dashboard: custom ZG emblem/player card, Season 21 badge, playtime and competitive-focus stat panels, player overview, and esports objective strip.
- Added responsive dashboard styling in public/assets/css/style.css: card geometry, emblem rings, HUD labels, stat visualizations, atmospheric lighting, background orbs, and mobile stacking.
- Kept all player claims grounded in supplied facts; decorative bars and shapes are visual styling, not additional gameplay statistics.
- Preserved the shared bottom navigation and English-only interface.


### 2026-11-11 — Fortnite visual profile rebuild
- Replaced the previous emblem-and-text dashboard with a full-bleed Fortnite key-art hero, large player-name treatment, Season 21 chip, and layered Battle Royale HUD labels in `public/profile.html`.
- Rebuilt the lower profile as colorful game-style stat cards, an about-player panel, and a dedicated Fortnite esports goal panel.
- Added responsive `.fn-*` styles in `public/assets/css/style.css`, using bold yellow/cyan accents, angular clipped panels, saturated blue/purple gradients, and mobile-specific layout changes.
- The hero uses Epic Games Store image asset hosted on Epic's CDN; all personal stats and claims remain limited to user-provided details.


### 2026-11-11 — Fortnite profile simplification
- Removed the decorative HUD labels, oversized season badge, ornamental stat-card graphics, separate esports feature card, and extra footer copy from `public/profile.html`.
- Kept the Fortnite key-art hero, player name, concise playtime/season facts, and one short About section.
- Replaced the final `.fn-*` profile style block in `public/assets/css/style.css` with a restrained layout: clean typography, a simple three-column stats row, subtle dividers, and a compact mobile stack.
- Preserved the shared bottom navigation and English-only copy.


### 2026-11-11 — Profile typography cleanup
- Removed the small `FORTNITE PLAYER` eyebrow from the hero in `public/profile.html`.
- Increased the size and contrast of hero metadata, section labels, stat captions, and About copy in the final profile CSS block in `public/assets/css/style.css`.
- Kept the simplified hero and statistics layout.
- Competitive rank and tournament history are not added yet: the Fortnite.gg search did not verify a matching player profile from the display name alone. Waiting for the exact Epic display name or player profile URL to avoid importing another player's results.
- The supplied ChatGPT share URL could not be opened as an image; waiting for the image uploaded directly in chat before replacing the hero artwork.
