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


### 2026-11-11 — Profile hero subtitle removal
- Removed only the `PLAYING SINCE SEASON 21 · ~4,000 HOURS` line directly beneath the `zxcvGentleman` hero heading in `public/profile.html`.
- Kept the Season 21 and playtime statistics in the lower Player Profile section unchanged.


### 2026-11-11 — Profile section counter removal
- Removed the `01 — 03` decorative counter from the `PLAYER PROFILE` heading in `public/profile.html`.
- The uploaded replacement hero image is available in the conversation, but is not yet in the repository; the current GitHub integration exposes text/blob operations but no direct binary upload action. Keep the existing hero image until the uploaded asset can be committed.
- Fortnite Tracker stats were not imported because a matching player profile for `zxcvGentleman` could not be verified. Do not invent stats; request the exact Epic display name or the direct Fortnite Tracker profile URL.


### 2026-11-11 — Fortnite hero image replacement
- Added the user-uploaded Fortnite Battle Bus image at `public/assets/images/fortnite-battle-bus.jpg` (optimized JPEG for the full-bleed hero background).
- Updated the `.fn-hero-art` background in `public/assets/css/style.css` to use the repository-local image instead of the previous Epic CDN artwork.
- Kept the player-name layout, lower profile statistics, and responsive hero treatment unchanged.


### 2026-11-11 — Fortnite Tracker profile link
- Added a direct external link to the user's confirmed Fortnite Tracker profile in the `PLAYER PROFILE` heading of `public/profile.html`.
- The supplied profile page could not be read by the web retrieval service (request blocked), so no rank, match, or tournament values were copied into the site. Wait for readable page data or a screenshot before adding exact statistics.
- Replaced the malformed first Battle Bus asset with a fresh optimized JPEG generated directly from the user's uploaded image and committed at `public/assets/images/fortnite-battle-bus.jpg`.

- Styled the external Fortnite Tracker link with the profile's yellow accent in `public/assets/css/style.css`.


### 2026-11-11 — Fortnite hero artwork refresh
- Replaced the profile hero's previous Battle Bus background with the matching Fortnite Pizza Party artwork supplied by the user (1920×1080). The same original artwork is hosted by Epic Developer Community's official CDN; CSS now references its original PNG source rather than a compressed thumbnail.
- Hero background remains `center center / cover`; overlay/vignette and layout are unchanged.


### 2026-11-11 — Fortnite Pizza Party profile theme
- Restyled the profile page in `public/assets/css/style.css` to coordinate with the red Fortnite Pizza Party hero artwork.
- Replaced the previous navy/blue profile palette with tomato-red, warm cream, and pizza-yellow accents.
- Redesigned the details area as a warm cream panel; stats are separate rounded cards with red values; About is a light card with a red accent border.
- Styled the Fortnite Tracker link as a red button and updated the profile bottom navigation to a translucent dark-red glass treatment with a yellow active state.
- Kept the existing profile content and Tracker destination unchanged; this change is visual only.


### 2026-11-11 — Correct Fortnite Pizza Party hero image source
- Fixed the profile hero image in `public/assets/css/style.css`: it had still been pointing to the old local `fortnite-battle-bus.jpg` asset, which is why the old Battle Bus image remained visible.
- Updated `.fn-hero-art` to use the exact original Pizza Party JPEG hosted on Epic Developer Community's forum CDN: `https://d3kjluh73b9h9o.cloudfront.net/original/4X/e/0/2/e02871e939e1c1192059c4980e8703bf0662b655.jpeg`.
- Kept the current crop, overlay, and Pizza Party color theme unchanged.


### 2026-11-11 — Animated pizza decorations
- Added two decorative pizza slices to `public/profile.html`, positioned at the left and right sides of the profile statistics/About area and hidden from assistive technology.
- Added CSS 3D-style perspective rotation, subtle vertical floating, depth shadows, staggered reverse motion, and reduced-motion support in `public/assets/css/style.css`.
- Decorations are hidden on narrow mobile screens to avoid covering profile content; no JavaScript or external image dependency added.


### 2026-11-11 — Fortnite profile glass dashboard redesign
- Rebuilt `public/profile.html` with a Fortnite wordmark, compact player identity header, monogram avatar, direct Fortnite Tracker link, working in-page Overview/About anchors, and responsive dashboard.
- Removed the previously added decorative pizza-slice elements completely.
- Replaced the cream dashboard palette with dark red/black translucent glass panels, red active states, and warm yellow details to match the user's supplied visual reference.
- Preserved only the existing profile facts (started Season 21, approximately 4,000 hours, esports goal) and existing About copy; did not copy mockup-only rank, K/D, tournament, or win numbers.
- Reworked `public/assets/css/style.css` profile section; no JavaScript required. Responsive layout stacks cards and About panel on smaller screens; site bottom navigation remains shared.
- Automatic stats integration remains a separate potential feature. Fortnite Tracker has no publicly available Fortnite API and prohibits scraping; a separate Fortnite stats provider documents Battle Royale stats endpoints requiring an API key. Any future integration should keep its key server-side (for example, in repository secrets) and clearly distinguish supported BR stats from ranked/event/tournament data.

- CSS verification: kept the hero/background image enabled by declaring the body base as `background-color` rather than a shorthand `background` that would reset the image layer.


### 2026-11-11 — Remove decorative profile tabs and avatar
- Removed the non-functional Overview / About / Tracker pill navigation from `public/profile.html`; the main site bottom navigation remains unchanged.
- Removed the `PLAYER PROFILE` kicker and circular Z avatar from the profile identity block.
- Kept the player's name and the real external Fortnite Tracker button.
- Updated responsive profile header grid rules in `public/assets/css/style.css` to fit the simplified identity row.


### 2026-11-11 — Simplify Fortnite header and move Tracker logo
- Removed the overlay wordmark from `public/profile.html`; the Fortnite lettering remains only where it is part of the Pizza Party hero artwork itself.
- Removed the `FORTNITE PLAYER` status label beneath the player name.
- Removed the text-based Fortnite Tracker button from the hero header.
- Added a compact image-only link using the Tracker Network logo asset (`https://fortnitetracker.com/Images/General/logo.png`) beside `COMPETITIVE MINDSET` in the About footer. It opens the user's confirmed Fortnite Tracker profile in a new tab.
- Removed the decorative crown from the About footer and adjusted the profile heading to use the now-uncluttered player name.


### 2026-11-11 — Use user-supplied Fortnite Tracker logo
- Added the user's uploaded square Fortnite Tracker logo as `public/assets/images/fortnite-tracker-logo.webp` (optimized WebP, original 447×447 source).
- Replaced the previous externally hosted logo image in the About footer with the new local asset.
- Enlarged the image-only Tracker button so the complete supplied square logo is clearly visible; the image remains a link to the player's Fortnite Tracker profile.

- Final display sizing: the supplied square Tracker logo is displayed as a 72×72 image-only button with no extra letter/icon or button label; it is fully clickable and opens the user's profile.


### 2026-11-11 — Single full-page Pizza Party backdrop and separate Fortnite wordmark
- Removed the duplicate hero artwork layer from `public/profile.html`; the Pizza Party art now appears once as the page-wide body backdrop.
- Added a fixed, softly feathered gradient cleanup layer over the original embedded lettering so the background no longer shows its old title.
- Added `public/assets/images/fortnite-wordmark-original.webp`, a transparent pixel-derived cutout of the exact Fortnite lettering and registered mark extracted from the user's original Pizza Party image. It is displayed independently at the top; its lettering is not retyped or regenerated.
- The user name, stats/About cards, clickable square Fortnite Tracker logo and bottom navigation remain unchanged.


### 2026-11-11 — Expand background wordmark removal
- The user reported that the previous central cleanup patch left part of the embedded Fortnite wordmark visible.
- Enlarged and recentered the cleanup layer in `public/assets/css/style.css` to cover the original title region on desktop and portrait/mobile viewports. Kept the separately extracted original Fortnite wordmark at the top as its own object.
- “Competitive mindset” translates as “змагальне мислення” or “націленість на змагання”; no visible page copy was changed for this translation question.


### 2026-11-11 — Natural removal of the embedded Fortnite lettering
- Reconstructed the logo area directly in the original Pizza Party artwork using the surrounding red/orange gradient and background color field. The letters and their anti-aliased edges are removed; no rectangular or oval paint-over layer remains.
- The cleaned full-bleed background is stored as 1024×576 WebP at `public/assets/images/fortnite-pizza-clean-natural.webp` during the Pages build. Its Base64 source chunks are kept in `.github/assets/fortnite-pizza-clean-natural/` and concatenated by `.github/workflows/deploy.yml` before upload.
- Updated `public/assets/css/style.css` to use the natural, cleaned image as the sole Pizza Party page background and removed the old CSS cleanup overlay. Removed its obsolete HTML element from `public/profile.html`.
- The separate original transparent Fortnite wordmark at the top, username, stats/About cards, Tracker image button and bottom navigation remain unchanged.


### 2026-11-11 — Restore profile background after invalid generated image
- The previous background-rebuild step assembled a corrupt WebP file from incorrectly sized Base64 chunks. Removed that build step so deployment no longer produces or references the invalid file.
- Restored the profile background CSS to the prior image source so the page can display its backdrop again.
- The separate Fortnite wordmark and all profile layout elements are unchanged. A clean, directly stored background asset remains to be uploaded in a later correction.


### 2026-11-11 — Connect the naturally cleaned full-page Pizza Party background
- Added the user's Pizza Party artwork as a naturally cleaned 1920×1080 WebP background. The embedded Fortnite lettering is removed directly in the image; the surrounding red gradient and decorative pizza/box artwork remain intact.
- Stored the WebP as five Base64 chunks under `.github/assets/fortnite-pizza-bg-clean/part-*.b64`; the Pages workflow reconstructs it into `public/assets/images/fortnite-pizza-clean-natural.webp` before upload.
- Added build assertions for the exact 37,236-byte file size and the `WEBP` signature. This prevents publishing an incomplete or malformed image.
- Updated `public/assets/css/style.css` to use the local reconstructed image as the full-page background. The independent original Fortnite wordmark remains a separate object above it. Removed all temporary CSS paint-over behavior; profile content, statistics, About panel, Tracker logo button and bottom navigation remain unchanged.


### 2026-11-11 — Home page visual redesign and future-updates notice
- Rebuilt `public/index.html` as a responsive editorial-style landing page; existing Home / WTBF / zxcvGentleman / Socials navigation remains intact.
- New page structure: compact identity/status top bar; two-column hero with headline, introduction and link to the profile; abstract orbit illustration card; three clickable discovery tiles for WTBF, Fortnite profile and Socials; dedicated “This is only the beginning” panel explaining that many parts are in development and new sections, projects, features and details will be added in the future; compact closing metadata line.
- Added page-scoped `.home-*` styles to `public/assets/css/style.css`. These include dark layered gradient background, subtle grid texture, glass surfaces, restrained hover/focus states, responsive card layouts and mobile stacking. Global tokens and non-Home page styles are unchanged.
- Website copy remains English to match the site's existing language. All Home cards link to existing local pages; no new routes or JavaScript dependencies were introduced.


### 2026-11-11 — Simplify Home to match the Socials page
- Replaced the oversized, decorative Home design with the same page structure and shared styling used by `public/socials.html`: standard `.page` / `.page-inner`, shared heading and lead typography, and the existing `.social-grid` / `.social-card` components.
- Home now has one straightforward title and introduction, three consistent navigation cards (WTBF, zxcvGentleman / Fortnite profile, Socials), and a simple `.split-bottom` message explaining that many sections, projects, features and details will be added in the future.
- Removed the Home-only visual system, orbit illustration, status labels and custom decorative backgrounds by restoring `public/assets/css/style.css` to the complete pre-Home shared stylesheet. WTBF, Socials and Fortnite profile styles — including the cleaned Pizza Party background — are preserved.
- Kept the existing bottom navigation and all existing page destinations. No JavaScript or new dependencies added.


### 2026-11-11 — Rebuild Socials in the Fortnite glass-dashboard style
- Replaced the plain `public/socials.html` list with a full-screen layout modeled on the Fortnite profile architecture: oversized independent SOCIALS wordmark, centered translucent identity bar for `zxcvGentleman`, main links panel and separate ABOUT panel.
- Preserved all five original destinations and descriptive copy: Twitch, Fortnite Telegram, WTBF Telegram, AIR developers and TikTok. Each link now has a compact monogram tile, clear title/description, and external-link affordance.
- Added page-scoped `.socials-*` styles in `public/assets/css/style.css`: dark temporary backdrop (awaiting the user's custom image), red-tinted translucent panels, border/shadow system aligned to the Fortnite dashboard, two-column links grid on desktop and stacked mobile layout. The bottom navigation active state now uses a matching red accent on Socials.
- No other page layouts or link destinations changed. The custom background image will be connected after the user provides it.


### 2026-11-11 — Apply the supplied abstract gradient background to Socials
- Added the user's supplied 1920×1080 blue/purple/cyan/pink abstract artwork, optimized as a 1280×720 WebP at `public/assets/images/socials-background.webp`.
- Reworked `public/socials.html` into a standalone Socials design rather than a copy of the Fortnite profile: centered title and short intro, a three-column desktop grid of five social links, and a concise About strip below. All five original link destinations and descriptions are preserved.
- Replaced the previous red glass palette with translucent indigo panels, subtle cool-toned borders and restrained cyan/lilac/pink accents that complement the supplied background. Background covers the page; mobile layout stacks the cards into one column.
- Bottom navigation remains shared and its active Socials state is recolored to match the background. No other page markup or global design tokens changed.


### 2026-11-11 — Remove extra text from Socials
- Simplified `public/socials.html` to keep only the main `Socials.` heading and the five platform names.
- Removed the decorative “Stay connected” eyebrow, introductory sentence, “My platforms” label, link count, per-card explanatory copy/handles, and the About panel.
- Preserved the supplied full-page abstract gradient background, platform monograms, outgoing link URLs, card styling and bottom navigation.
- The cards now use a cleaner, more spacious single-line label layout.


### 2026-11-11 — Remove the period from the Socials heading
- Changed the Socials page title from `Socials.` to `Socials` in `public/socials.html`.
- No other layout, copy, links, or styling changed.


### 2026-11-11 — Remove icon tiles and arrow circles from Socials cards
- Removed the monogram-letter rounded squares and circular arrow decorations from all five cards in `public/socials.html`.
- Simplified `.socials-link-card` to text-only cards with consistent left alignment and adjusted padding/height so the layout remains balanced without the icons.
- Removed obsolete icon and arrow styles and updated reduced-motion/mobile rules. Background, card colors, links, heading and navigation remain unchanged.
