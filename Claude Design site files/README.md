# Handoff: Mailhouse Media marketing website

## Overview
Mailhouse Media is a hyperlocal advertising platform — *"Google Ads, but for mailboxes."* It sells premium ad space on 9×12 postcards delivered to **every home** on targeted USPS carrier routes via EDDM (Every Door Direct Mail). This package is the **advertiser-facing marketing website**: a clickable multi-page prototype whose #1 job is to get a local business to **check whether routes near them are still open** and claim one.

The prototype contains five pages, a persistent nav + footer, and a global "route reserved" confirmation toast.

## About the design files
The files in this bundle are **design references created in HTML** — a prototype showing the intended look, copy, and behavior. **They are not production code to ship directly.** The `.dc.html` file uses a small proprietary component runtime (`support.js`) and is not a normal React/HTML app.

**Your task:** recreate these designs in the target codebase's environment using its established patterns and libraries. If there is no codebase yet, choose the most appropriate stack for a marketing site (e.g. **Next.js + React**, or Astro) and implement there. Treat the HTML as the source of truth for layout, spacing, color, type, copy, and interaction — not as code to copy verbatim.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, copy, and interactions. Recreate the UI pixel-close using the codebase's libraries. All exact values are in **Design Tokens** below (they also live in `_ds/.../tokens/*.css`).

---

## Design language (read first)
- **Voice:** direct, results-focused, local. Lead with the number ("2–5% response rate vs. 0.1% digital", "~$0.06 per home", "8 slots left"). Short sentences, strong verbs. Scarcity stated as fact, never hype. No emoji.
- **Feel:** tangible and printed — confident postal signage, not techy SaaS. Everything sits on **warm paper (`#f5eae4`)**, never stark white; pure white is reserved for raised cards. **Ink (`#030b18`)** is the dark authority surface. **Signal red (`#fe0032`)** is the one action/scarcity color — one red thing per view. **Navy (`#313e60`)** is the secondary/trust color.
- **No decorative gradients.** The only motif is a faint dashed **route-line** SVG on dark panels and a **postmark/EDDM stamp** on postcards.
- **Type:** Archivo (display, 800/900, often UPPERCASE, tight tracking) · Public Sans (body) · Space Mono (700 — stats, route codes, eyebrows). Tabular numbers on all figures.
- **Icons:** Lucide, 2px stroke, `currentColor`.

---

## Screens / Views

Navigation is client-side (single-page app feel). The sticky top nav and the red CTA band + ink footer are **persistent on every page**. Changing pages scrolls to top.

### Persistent — Top Nav
- **Layout:** sticky, `z-index:40`, full-width. `background: rgba(245,234,228,.92)` + `backdrop-filter: blur(10px)`, 1px hairline bottom border. Horizontal padding `clamp(20px,5vw,56px)`, vertical `14px`. Three groups: wordmark (left), nav links (center), Sign in + primary CTA (right).
- **Wordmark:** `assets/logos/wordmark.svg`, height 26px, clickable → Home.
- **Links** (Public Sans 600, 15px): "How it works", "Targeted lists", "Pricing", "About". Active page link color = `--signal-600`; inactive = `--text-body`. Hover → `--signal-600`.
- **Right:** "Sign in" text link (`--text-strong`) + primary Button (sm) labeled **"Check my coverage"** (this label is a configurable prop — see Tweaks).

### Persistent — CTA band + Footer (bottom of every page)
- **CTA band:** full-bleed `--signal-500` (red). Left: Archivo 900 headline **"Your route to every door."** + subcopy "Check which routes near you are still open. Claim yours before a neighbor does." Right: secondary (ink) Button "Check my coverage" with arrow + outline Button "Talk to us" (white text, `rgba(255,255,255,.55)` border). Max width 1120px, padding `64px clamp(20px,5vw,56px)`, space-between, wraps.
- **Footer:** `--ink-900` background, `--paper-100` text. 4-column grid (`1.4fr 1fr 1fr 1fr`, gap 32px): brand col (`wordmark-paper.svg` + tagline "The physical ad network for local businesses. Every door. Every home.") then Product / Company / Get started link columns. Column headers use the mono eyebrow style in `--text-on-ink-muted`. Sub-bar (top border `--border-on-ink`): "© 2026 Mailhouse Media. EDDM® is a registered service of the USPS." + mono "EVERY DOOR · EVERY HOME".

### 1. Home
- **Purpose:** convince a local business, then get them to check/claim a route.
- **Hero** — **ink `#030b18` background**, padding `64px clamp(20px,5vw,56px) 72px`, faint paper route-line SVG at `opacity:.06`. Two-column grid (`1.04fr .96fr`, gap 48px, max 1120px):
  - **Left column:**
    - Scarcity chip (only if `showScarcity` prop true): pill, `background: rgba(254,0,50,.13)`, `border: 1px solid rgba(254,0,50,.32)`, pulsing 8px `--signal-500` dot (keyframe `mh-pulse`, opacity 1↔.35, 1.8s), mono text `8 SLOTS LEFT · ROUTE 33076-C` in `--paper-100`.
    - Eyebrow (mono, `--signal-400`): "ADVERTISE TO YOUR LOCAL CUSTOMERS".
    - H1 (Archivo 900, `clamp(40px,5vw,60px)`, line-height .98, `-0.03em`, **#fff**): "Advertise to every home / on your street." (`<br>` before "on your street").
    - Sub (Public Sans 18.5px, `--text-on-ink-muted`, max 470px): "A 9×12 postcard in every mailbox on the USPS routes you pick. Can't be blocked, muted, or scrolled past. We design, print, and mail it — you book the jobs."
    - **Coverage checker card** (white `--surface-card`, `--radius-lg`, `--shadow-md`, padding `18px 18px 16px`, max 500px): mono label "SEE OPEN ROUTES NEAR YOU"; a row (flex, gap 9px, wraps) of [ZIP `<input>` with map-pin icon, numeric, maxlength 5], [trade `<select>`: Your trade / Roofing / HVAC / Realtor / Home services / Restaurant / Dental], [primary Button "Check" with search icon]. On check, a mono confirmation line appears in `--signal-600` with a check icon: "8 open routes near {zip} — see them below ↓".
  - **Right column:** the postcard star. A rotated (−8°) red medallion (100px circle, `--signal-500`, `--shadow-signal`) reading "2–5% / RESPONSE"; a large `PostcardPreview` (width 440, rotated +4°, z-index 2); a smaller navy-accent `PostcardPreview` (width 240, rotated −6°, z-index 1) tucked bottom-right.
- **Signal proof band** — full-bleed `--signal-500`, 3-col grid, white text, columns divided by `rgba(255,255,255,.22)`: **$0.06 / home** "Cheapest customer acquisition in your market" · **100%** "Of doors on every route you claim" · **48hr** "From your offer to print-ready artwork".
- **How it works teaser** — max 1120px, padding-top 80px. Section head (eyebrow "HOW IT WORKS" + Archivo 900 h2 "You pick the route. We do the rest.") with a right-aligned "See the full process →" link (→ How it works page). 4-col grid of cards (white, `--radius-lg`, `--shadow-sm`, padding 22px): each has a 42px ink icon tile + mono step number (01–04), Archivo 800 title, muted body. Steps: **Pick your routes** / **We design it** / **We print & mail** / **You book jobs** (copy below in State/Content).
- **Open routes** — max 1120px. Head: eyebrow ("OPEN ROUTES", or "OPEN THIS WEEK" after a check) + h2 "Open routes near {you|zip}" + right blurb about capped inventory. 3-col grid of `RouteCard` components (see Components). Each Claim button fires the global toast.
- **Comparison band** — `--ink-900`, white text, max 1120px, padding 76px. Eyebrow "MAILBOX VS. THE FEED" + h2 "Digital ads get skipped. Postcards get read at the kitchen table." Two cards side by side: left "A DIGITAL IMPRESSION" (translucent, `rgba(245,234,228,.05)` bg, `--border-on-ink`) with 4 red-✕ negatives; right "A MAILHOUSE POSTCARD" (paper `--paper-100` bg, `--shadow-lg`) with 4 green-✓ positives. Exact list items in the HTML.
- **Testimonial** — narrow (max 860px), centered. Mono kicker "BOOKED JOBS, NOT IMPRESSIONS" (`--signal-500`), Archivo 800 pull quote (`clamp(22px,3vw,30px)`): "We mailed two routes in March and booked 14 roof jobs off one postcard. It paid for the whole year of mailings in a week." Attribution: 44px navy avatar "JR" + "Javier Reyes / Owner, Reyes Roofing · Coral Springs, FL".

### 2. How it works
- **Purpose:** explain the 4-step process in depth.
- Ink hero band: eyebrow, Archivo 900 h1 "From your offer to every mailbox in four steps.", subcopy.
- Body: two-column grid (`1fr 1fr`, gap 44px). Left = 4 stacked step cards (48px ink icon tile, mono "STEP 0N" in signal, Archivo 800 title, longer body — see `stepsFull` copy in the HTML). Right = **sticky** (`top:100px`) column with a rotated `PostcardPreview` (440) + a stat card showing **48hr** "Design turnaround" and **7–10d** "In mailboxes".

### 3. Targeted Mail List  *(the added page)*
- **Purpose:** contrast EDDM (whole route) vs. a filtered targeted list, and let the user build a list live.
- Paper hero: eyebrow "TARGETED MAIL LISTS", h1 "Every door, or just the right ones.", subcopy about filtering by homeowner status, home value, age of home, income, new movers.
- **Two-mode cards** (2-col): **EDDM — every door** (ink icon tile; stats $0.06/home, 100% coverage) vs. **Targeted list** (2px `--signal-500` border, "PRECISION" tag, signal icon tile; stats $0.11/home, "Filtered"). Copy in HTML.
- **List builder** (`1.3fr .9fr` grid):
  - **Filters card** (white): *Homeowner status* segmented pills (All / Homeowners / Renters); *Min. home value* range slider (6 stops: Any / $200k+ / $350k+ / $500k+ / $750k+ / $1M+); *Age of home* range slider (5 stops: Any / Built pre-1990 / Pre-2000 / Pre-2010 / 10+ yrs old); *Extra filters* toggle pills (New movers / No pool / Income $100k+ / Pet owners). Selected pill = `--signal-500` bg / white; unselected = `--paper-50` bg / `--border-soft`. Slider `accent-color: --signal-500`.
  - **Result panel** (sticky, `--ink-900`): mono eyebrow "ESTIMATED REACH", huge mono reach figure (e.g. "42k"), "matching households in your area", divider, "Cost per home $0.11", "Estimated mailing $X,XXX" (signal-400), full-width primary Button "Reserve this list", fine print "Design & mailing included. No contract."
  - **Reach math** (recreate exactly): base `42000` × ownerMult (all 1 / homeowner .68 / renter .32) × valueMult `[1, .82, .6, .4, .24, .12]` × ageMult `[1, .7, .82, .9, .85]` × each active tag (movers .14, nopool .65, income .45, pets .55). Clamp min 120, round to nearest 10. Cost = reach × $0.11. Reserve button fires the toast with the reach number.

### 4. Pricing
- **Purpose:** show the flat per-home model.
- Centered paper hero: eyebrow, h1 "One flat price per home. Everything included.", subcopy (design + printing + USPS postage all-in, no setup fees/contracts).
- 3-col tier grid, equal height. Middle tier **featured** = `--ink-900` card, 2px `--signal-500` border, `--shadow-lg`, "MOST POPULAR" tag, primary Button; others = white card, `--shadow-sm`, outline Button. Each: name, description, mono price "$0.0X / home", example total, ✓ feature list (signal checks). Tiers:
  - **Single route** — $0.06 — "$49 for ~800 homes" — Test one neighborhood. (1 route, design incl., print & postage incl., tracking # + QR)
  - **Neighborhood** *(featured)* — $0.06 — "$145 for ~2,400 homes" — Own a few adjacent routes. (up to 3 routes, design incl., priority 48hr design, response dashboard, route protection)
  - **Farm** — $0.055 — "$550 for ~10,000 homes" — Blanket your whole market. (5+ routes, volume pricing, dedicated AM, monthly recurring mailings, A/B offer testing)
- Footnote linking to the Targeted Mail List page.

### 5. About
- **Purpose:** brand story + credibility.
- Ink hero (centered, max 820px): eyebrow, h1 "We built the local ad network for mailboxes.", story paragraph.
- Stats band (white card, 4-col `StatBlock`s): **300+** businesses · **1,400+** routes · **6.2M** postcards mailed · **2–5%** avg response (accent).
- Values (3-col): **Local, not global** / **Accountable by design** / **Done for you** — each a signal-tint icon tile + Archivo 800 title + muted body. Copy in HTML.

---

## Interactions & Behavior
- **Client-side routing:** nav links + footer links + in-page links switch the active page and `window.scrollTo({top:0})`. No URL change in the prototype — in production, use real routes (`/`, `/how-it-works`, `/targeted-lists`, `/pricing`, `/about`).
- **Coverage checker:** ZIP input strips non-digits, max 5 chars. "Check" sets a checked flag → shows the confirmation line and updates the "Open routes near {zip}" heading + route codes to the entered ZIP.
- **RouteCard claim / list Reserve:** open a global confirmation **toast** (fixed, bottom-center, ink, `--shadow-lg`, green check, dismissible ✕, `mh-rise` entrance). Message e.g. "Route 33076-C reserved — we'll email you to finish setup."
- **List builder:** every filter change recomputes reach + cost live (formula above).
- **Motion:** page changes fade+rise (`mh-rise`, .32s `--ease-out`). Buttons darken one step + lift on hover, scale .98 on press. Cards lift 2px + shadow-md on hover. Focus = 3px `--focus-ring` offset ring. Durations 120–200ms. Keep it snappy, no bounces/parallax.
- **Responsive:** prototype is desktop-first (fixed multi-column grids). For production, collapse the hero + all multi-column grids to single column under ~900px, and turn the nav links into a mobile menu.

## State Management
- `page`: 'home' | 'how' | 'pricing' | 'about' | 'lists'
- Checker: `zip` (string, digits), `trade` (string), `checked` (bool)
- List builder: `owner` ('all'|'owner'|'renter'), `valueIdx` (0–5), `ageIdx` (0–4), `tags` (map of movers/nopool/income/pets → bool)
- `toast`: string | null
- No data fetching in the prototype — the ZIP checker and reach numbers are computed client-side stand-ins. In production, wire these to the real route-inventory API.

## Content
All copy in the prototype is final, on-brand marketing copy — use it as-is. The step copy, comparison bullets, tier features, and value cards live in the logic class of the `.dc.html` (`renderVals()` → `steps`, `stepsFull`, `values`, `tiers`) and in the template. Sample business names used: Reyes Roofing, Cool Breeze HVAC. Sample route: 33076-C, Coral Springs / Parkland FL.

## Design Tokens
Full source: `_ds/mailhouse-media-design-system-2c4d5fb0-3489-4a48-9210-868d267da1fc/tokens/*.css`. Key values:

**Color — brand core**
- Ink `#030b18` · Paper `#f5eae4` · Signal (red) `#fe0032` · Navy `#313e60`

**Ink scale:** 900 `#030b18` · 800 `#0a1424` · 700 `#131e31` · 600 `#1d2a40` · 500 `#313e60` · 400 `#55618a` · 300 `#8189ab` · 200 `#b4bacd` · 100 `#d9dce6`
**Paper scale:** 50 `#fffdfb` · 100 `#fbf5f0` · 200 `#f5eae4` · 300 `#ecddd4` · 400 `#ddcabf` · 500 `#c8b3a6`
**Signal scale:** 700 `#c40027` · 600 `#e1002d` · 500 `#fe0032` · 400 `#ff3358` · 300 `#ff8197` · 100 `#ffe1e7`
**Navy scale:** 700 `#232d47` · 600 `#2a3553` · 500 `#313e60` · 400 `#475583` · 100 `#e3e6ef`
**Semantic:** success `#1f8a4c` (bg `#e3f3e9`) · warning `#c9760a` (bg `#fbeede`) · info `#313e60`
**Text:** strong = ink-900 · body = ink-700 · muted = ink-400 · faint = ink-300 · on-ink = paper-100 · on-ink-muted = ink-200 · accent = signal-500 · link = signal-600
**Surfaces:** canvas = paper-200 · card = `#ffffff` · raised = paper-50 · ink = ink-900
**Borders:** hairline `rgba(3,11,24,.10)` · soft `rgba(3,11,24,.16)` · on-ink `rgba(245,234,228,.16)`
**Focus ring:** signal-400

**Typography**
- Display: **Archivo** (weights 800/900), often UPPERCASE, tracking `-0.02em`+
- Body: **Public Sans** (400/500/600)
- Data/labels: **Space Mono** (700), tabular numbers (`font-feature-settings:'tnum'`)
- Scale (px): display-2xl 76 · display-xl 58 · display-lg 44 · h1 34 · h2 27 · h3 21 · h4 18 · body-lg 18 · body 16 · body-sm 14 · caption 13 · micro 11
- Line heights: tight 1.02 · snug 1.14 · heading 1.2 · body 1.55 · relaxed 1.7
- Eyebrow tracking: `0.14em` uppercase mono
- Loaded via Google Fonts (see `_ds/.../tokens/fonts.css`).

**Spacing (4px base):** 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128
**Radius:** xs 3 · sm 6 · md 10 · lg 14 · xl 20 · pill 999. Cards use lg (14). Postcards ~md (10). Pills only for tags/chips.
**Borders:** 1px hairline dividers; 2px solid ink/signal for emphasis frames.
**Shadows (cool ink-tinted, no black/purple):**
- xs `0 1px 2px rgba(3,11,24,.08)` · sm `0 2px 6px rgba(3,11,24,.08)` · md `0 6px 18px rgba(3,11,24,.10)` · lg `0 18px 44px rgba(3,11,24,.16)`
- signal (hover glow) `0 8px 22px rgba(254,0,50,.28)`
- card (printed lift) `0 1px 0 rgba(3,11,24,.04), 0 10px 30px rgba(3,11,24,.12)`
**Motion:** ease-out `cubic-bezier(.22,1,.36,1)` · ease-in-out `cubic-bezier(.65,0,.35,1)` · fast 120ms · base 200ms · slow 360ms
**Layout:** container max 1200px (this site uses 1120px content), narrow reading column 760px.

## Components (from the Mailhouse design system)
Recreate these as real components in your framework. Reference source: `/components/...` in the design system project; full behavior visible in the prototype.
- **Button** — variants: `primary` (signal red, one per view), `secondary` (ink), `navy`, `outline`, `ghost`; sizes sm/md/lg; `iconLeft`/`iconRight`; hover darkens + lifts, press scales .98.
- **Badge / Tag** — mono uppercase status/scarcity chips; tones neutral/signal/navy/success/warning, soft or solid.
- **StatBlock** — `value` (mono figure), `label` (mono eyebrow), optional `delta`/`sublabel`, `accent` (signal label), `onDark`.
- **RouteCard** — the core inventory object. Props: `route`, `place`, `homes`, `pricePerHome` ($0.06), `total`/`taken` slots, `premium`, `onClaim`. Header with route icon + ROUTE code + place; homes / per-home stats; embedded **SlotMeter**; "Claim this route" button (disabled + "Route full" when 0 left). Hover lifts 2px.
- **SlotMeter** — segmented scarcity bar; taken slots fill ink, remaining glow signal red (turns urgent when ≤3 left); "N/total slots taken · N left" label.
- **PostcardPreview** — the hero brand object: a 9×12 (12:9 landscape) postcard mock with EDDM·STD tag + postmark stamp corner, dark artwork band with an offer chip + Archivo headline, footer with business name + phone. Props: `headline`, `offer`, `business`, `phone`, `accent`, `image`, `width`.

## Assets
- Logos in `assets/logos/`: `wordmark.svg` (dark, for paper nav), `wordmark-paper.svg` (light, for ink footer), `mark.svg`, `mark-red.svg`, `mark-paper.svg` (MHM monogram). Use `wordmark.svg` on light surfaces, `wordmark-paper.svg` on dark.
- **Icons:** Lucide (https://lucide.dev) — install the Lucide package for your framework rather than copying inline SVGs. Glyphs used: map-pin, search, edit/pencil, truck, trending-up/bar-chart, mail, target, building, check-circle, check, x, arrow-right, play, radio/route.
- **Fonts:** Archivo, Public Sans, Space Mono — from Google Fonts.
- No photography is used yet. The brand calls for warm, real, neighborhood-grounded imagery (suburban streets, porches, mailboxes, service trucks, hands holding a postcard) with a subtle warm grade — add later behind an ink protection scrim in heroes if desired.

## Files in this bundle
- `Mailhouse Media Site.dc.html` — the full prototype (all 5 pages + nav/footer/toast). Source of truth. *(Uses a proprietary runtime; open it in the design tool to view, or read the markup/logic directly — do not ship it.)*
- `support.js` — the prototype runtime (reference only; do not port).
- `_ds/mailhouse-media-design-system-.../` — design-system tokens (`tokens/colors.css`, `typography.css`, `layout.css`, `fonts.css`) and `styles.css`. **Port these tokens into your codebase** (CSS variables, Tailwind theme, or design-token file).
- `assets/logos/` — brand logos (SVG).
