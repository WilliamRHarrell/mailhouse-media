# Mailhouse Media — Design System

The brand & UI system for **Mailhouse Media**, a hyperlocal advertising platform that sells
premium ad space on 9×12 postcards delivered to *every home* in targeted USPS routes via
EDDM (Every Door Direct Mail).

> **Positioning:** the physical ad network for local businesses. *"Google Ads, but for mailboxes."*
> Premium local advertising infrastructure — not a scrappy print shop, not a digital agency.

**Taglines in rotation:** "Every Door. Every Home." · "Local Ads That Actually Get Read" ·
"Your Route to Every Door" · "The Local Ad Network".

**Who we sell to:** local service businesses needing hyperlocal reach — realtors, roofers, HVAC,
plumbers, insurance agents, home services (lawn/cleaning/pest), restaurants, dentists, auto repair.

---

## Sources

This system was built from a written **brand brief** and a single uploaded **color-palette image**
(`uploads/IMG_1784.jpg` → ink `#030b18`, paper `#f5eae4`, signal `#fe0032`, navy `#313e60`).
No codebase, Figma file, or existing UI was provided — so the foundations, logo, and components
here are an original interpretation of the brief, not a recreation. Treat them as v1 proposals.

---

## CONTENT FUNDAMENTALS — how Mailhouse writes

The voice is **direct, results-focused, local, efficient, trustworthy**. No fluff, no jargon, no
corporate speak.

- **Person:** Speak to the advertiser as **"you"**; Mailhouse is **"we"**. Peer-to-peer, not
  vendor-to-client. *"We handle design, print, and mailing. You just show up."*
- **Lead with the number.** Copy is quantified wherever possible — response rates, cost per
  impression, jobs booked, slots left. *"2–5% response rate vs. 0.1% for digital."* ·
  *"~$0.06 per impression."* · *"8 slots left on this route."*
- **Scarcity without pressure.** Route inventory is genuinely limited, so urgency is stated as fact,
  not hype: *"Only 3 ad slots left on Route 33076-C."* Never "ACT NOW!!!".
- **Short sentences. Strong verbs.** Get read. Book jobs. Own the route. Period-heavy rhythm.
- **Casing:** Display headlines are frequently **UPPERCASE** for signage impact (`MAILHOUSE`,
  `EVERY DOOR.`), or tight title-case. Body is sentence case. Mono labels/eyebrows are UPPERCASE
  with wide tracking (`ROUTE 33076-C`, `EDDM`, `RESPONSE RATE`).
- **Outreach (SMS/email)** is casual and lowercase-leaning, peer-to-peer, with an honest opt-out:
  *"hey — got 2 postcard slots open on your neighborhood's route this month. want in? reply STOP to opt out."*
- **No emoji** in product UI or formal marketing. They may appear sparingly in casual SMS outreach
  only. Default: none.
- **Concrete over abstract.** "Booked jobs," "mailboxes," "your neighborhood" — never "solutions,"
  "synergy," "leverage."

**Words we use:** route, every door, EDDM, impression, response rate, slot, farm (a neighborhood),
booked jobs, turnaround, coverage. **Words we avoid:** spam, blast, leads-funnel jargon, "disrupt,"
SaaS-y abstractions.

---

## VISUAL FOUNDATIONS

The system is built to feel **tangible, direct, and printed** — like premium physical mail — while
staying modern. Think confident signage and postal authority, not techy SaaS or retro print shop.

### Color
- **Ink `#030b18`** — a cool near-black navy. Primary text and dark "authority" surfaces (footers,
  hero panels, nav on dark). Carries the brand's seriousness.
- **Paper `#f5eae4`** — warm cream. The primary canvas. The whole system sits on paper, not stark
  white, which gives a physical-mail warmth. Pure white (`#fff`) is reserved for raised cards.
- **Signal `#fe0032`** — vivid red. The action color: CTAs, scarcity indicators, the route dot,
  key stats. Used **sparingly and decisively** — one red thing per view earns attention. Never as a
  large background fill except for high-stakes CTA bands.
- **Navy `#313e60`** — slate navy. Secondary/trust color: secondary buttons, data viz, info states,
  supporting surfaces. Bridges ink and signal.
- Semantic hues (success green, warning amber) are derived to harmonize with the cool palette; they
  appear only in functional states (delivery confirmed, payment due), never decoratively.
- **No gradients** as decoration. The one allowed gradient is a subtle protection scrim over photos
  (ink → transparent) so white text stays legible. No bluish-purple gradients, ever.

### Typography
- **Display — Archivo (800/900):** strong, slightly condensed grotesque. Used for headlines, often
  UPPERCASE, tight tracking (`-0.02em`+). This is the signage voice.
- **Body — Public Sans (400/500/600):** a civic/postal-feeling humanist sans, highly legible. All
  paragraph and UI text. (Conceptual nod: Public Sans is the U.S. government typeface — fitting for
  an "every door, every home" postal product.)
- **Data — Space Mono (700):** monospace for stats, route codes, eyebrows, table figures, postmark
  labels. Gives numbers a receipt/postmark credibility and reinforces "accountable, measurable."
- Tabular numbers (`font-feature-settings:'tnum'`) on all stat figures.

### Spacing, radius, borders
- **4px spacing base.** Generous section padding (64–128px) on marketing; tighter 16–24px rhythm in
  app UI.
- **Restrained radii** — 3/6/10/14/20px. The brand reads tangible/printed, so corners are modest, not
  bubbly. Postcard previews use ~10px. Pills (`999px`) only for tags/badges and route chips.
- **Borders are structural and confident:** 1px hairlines (`rgba(ink,0.10)`) for dividers; 2px solid
  ink for emphasis frames (e.g. the postcard "stamp" frame, selected route). Dark surfaces use
  `rgba(paper,0.16)` hairlines.

### Elevation / cards
- Shadows are **soft and cool-ink tinted** (no black, no purple): `0 6px 18px rgba(3,11,24,0.10)`.
- **Standard card:** white surface, `--radius-lg` (14px), 1px hairline border + `--shadow-sm`.
- **Postcard/route previews** get a printed-lift shadow (`--shadow-card`) to feel like a physical
  card resting on paper — a defining brand object.
- Signal CTAs get a colored glow shadow (`--shadow-signal`) on hover only.

### Imagery
- **Warm, real, neighborhood-grounded:** suburban streets, porches, mailboxes, local storefronts,
  service trucks, hands holding a postcard. Slightly warm color grade to match the paper canvas.
  No cold corporate stock, no abstract 3D blobs.
- Full-bleed photos appear in marketing heroes with an ink protection scrim. App UI is largely
  photo-free (data-forward); imagery there is limited to postcard artwork previews and small route
  map thumbnails.
- A subtle **route-map line motif** and **postmark/EDDM stamp** can be used as background texture at
  low opacity on dark panels.

### Motion & states
- **Restrained, snappy, purposeful.** `--ease-out` (cubic-bezier(.22,1,.36,1)) for entrances,
  120–200ms. No bounces, no parallax theatrics. Subtle fades + 4–8px rises.
- **Hover:** buttons darken one step (signal→signal-600) and lift 1px with a shadow bump; cards lift
  2px + shadow-md; links go to signal and underline.
- **Press:** scale to ~0.98 and drop to the press color (signal-700). Tactile, like pressing a stamp.
- **Focus:** 3px `--focus-ring` (signal-400) offset ring, always visible for accessibility.
- **Disabled:** 45% opacity, no shadow, `not-allowed`.

### Layout rules
- Max content width 1200px; narrow reading column 760px. Generous gutters.
- Sticky top nav on marketing (paper with hairline) and app (white). CTA always reachable.
- Grid-and-gap everywhere; never inline-flow spacing.

---

## ICONOGRAPHY

- **Library: Lucide** (https://lucide.dev), loaded from CDN. Chosen as a substitution because no icon
  set was provided in the brief. Lucide's clean **2px stroke, rounded-join, geometric** style matches
  the direct-but-friendly brand and pairs well with Public Sans. *(Substitution flagged — swap for a
  bespoke set later if desired.)*
- **Usage:** stroke icons only, `1.75–2px` stroke, sized 16/20/24px, colored with `currentColor`
  (inherits text color — ink or muted in UI, paper on dark, signal for emphasis only).
- Favourite glyphs for this brand: `mail`, `mailbox`, `home`, `map-pin`, `map`, `route`, `send`,
  `truck`, `badge-check`, `trending-up`, `target`, `printer`, `calendar`. These carry the
  mail/route/local story.
- **Brand mark is not an icon** — see `assets/logos/`. The mark is the **MHM monogram** (stacked
  columns forming M·H·M) and is the only custom-drawn glyph; everything else is Lucide.
- **No emoji** as iconography. No unicode-symbol icons. Mark and Lucide only.

---

## Font substitution note

The brief suggested Montserrat/Poppins + Inter/Open Sans. We chose **Archivo + Public Sans + Space
Mono** instead (more distinctive, better postal/civic fit, avoids the most overused families). All
three are **loaded from Google Fonts via `tokens/fonts.css`** — no local binaries were supplied. If
you have licensed brand fonts or want self-hosted binaries, drop the `.woff2` files in `assets/fonts/`
and replace the `@import` with local `@font-face` rules. **Please confirm this type direction.**

---

## INDEX — what's in this system

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `layout.css` (spacing/radius/shadow/motion).
- `readme.md` — this file.
- `SKILL.md` — portable Agent-Skill manifest.

**Assets** — `assets/logos/` (mark, mark-red, mark-paper, wordmark, wordmark-paper).

**Foundation cards** (Design System tab) — `foundations/*.html`: color swatches, type specimens,
spacing, radius, shadow, brand logo lockups.

**Components** — `components/<group>/`:
- `core/` — Button, IconButton, Badge, Tag, Avatar
- `forms/` — Input, Select, Checkbox, Switch
- `surfaces/` — Card, StatBlock
- `feedback/` — Toast, Dialog
- `brand/` — RouteCard, PostcardPreview, SlotMeter (the brand-specific primitives)

**UI kits** — `ui_kits/`:
- `marketing/` — the advertiser-facing marketing site (hero, how-it-works, pricing, CTA).
- `dashboard/` — the advertiser app (campaigns, route browser, campaign detail).

See each component's `.prompt.md` and each UI kit's `README.md` for usage.
