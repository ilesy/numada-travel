
## Goal
Rebuild NumadaTravel around the "Layered Journal" direction (Emerald Prestige palette, Instrument Serif + Work Sans, magazine layout), swap every destination image for high-end editorial-quality photography, and turn blog posts into affiliate-monetized long-form guides. Concierge stays live in the app but is removed from this plan's scope of changes.

## 1. Design system refresh (sitewide)

- **Fonts**: `bun add @fontsource/instrument-serif @fontsource/work-sans`, import in `src/main.tsx`, swap Tailwind `serif`/`sans` in `tailwind.config.ts`. Retire Playfair + Source Sans.
- **Tokens (`src/index.css`)**: repaint HSL palette to Emerald Prestige.
  - `--background` cream `#f5f0e0`, `--foreground` emerald `#064e3b`
  - `--primary` emerald, `--secondary` `#0d7a5f`, `--accent` gold `#c9a84c`
  - Brand tokens `--navy*` → emerald scale, `--orange*` → gold scale, `--turquoise*` → muted emerald
  - Gradients: `--gradient-hero` emerald overlay, `--gradient-cta` gold, `--gradient-card` cream→cream-dark
- Audit `Header`, `Footer`, `HeroSection`, `About`, `Insider`, `Community`, `Auth`, `Quiz`, `BlogPost`, `DestinationDetail` for stray hardcoded colors and swap to tokens.

## 2. High-end imagery pass (the priority)

Replace every stock/AI-fast image with editorial-quality photography using the **premium** tier of the imagegen tool. Consistent art direction across all 11 destinations so the grid reads like a magazine spread, not a stock library.

**Art-direction lock (applied to every destination image):**
- Golden-hour or blue-hour light, medium-format film aesthetic (Portra 400 / Ektar 100 grain)
- Aspect 4:5 portrait for grid tiles, 16:9 for hero/detail masthead
- Depth of field: shallow foreground plants → hero subject → soft horizon
- Human scale rarely — no models, no visible tourists, no brand logos
- Palette bias toward emerald / turquoise / warm sand so images harmonize with the Emerald Prestige tokens
- Composition rule: negative space in the upper third for overlay type

**Regenerate at premium quality (`model: "premium"`):**
- 11 destination tiles under `src/assets/destinations/*.jpg` (portrait 1024×1280)
- 11 destination hero mastheads under `src/assets/destinations/hero/{slug}.jpg` (1920×1080)
- Homepage hero collage: 3 layered images under `src/assets/home/` (main volcanic peaks, inset crystal water, "Volume 03" magazine cover still)
- Blog post lead images: 1 hero + 2 in-body per published post (see §4)
- Founder portrait upgrade at `src/assets/founder.jpg` (editorial half-body, cream backdrop, natural window light)
- New OG image `public/og-image.jpg` (1200×630) — layered collage w/ wordmark

**Wire-up:**
- Update `src/data/destinations.ts` to import the new hero image per destination alongside the tile image (`image`, `heroImage`).
- `DestinationDetail` uses `heroImage` for the masthead, `image` for related-cards.
- Add a lightweight `<img loading="lazy" decoding="async">` audit across the codebase — every non-hero image lazy-loads.

## 3. Homepage rebuild — "Layered Journal"

Compose exactly to the chosen prototype, using the new imagery:

- **`HeroSection.tsx`**: left column = gold-rule "Volume 03 — The Caribbean Collection" kicker, massive Instrument Serif headline (`Caribbean,` italic in emerald-light), subhead, two CTAs (`Explore Destinations` primary → `/destinations`, `Take the Quiz` secondary → `/quiz`). Right column = overlapping rotated image collage using the 3 new home images + rotated gold "11 Private Destinations" tag.
- **New `InsiderGuideBand.tsx`**: emerald full-width band with blurred halo, inline email capture → `newsletter_subscribers` with `source: 'insider-guide'`. Replaces the in-hero email form.
- **`DestinationsGrid.tsx`**: rebuild to 8/4 magazine split (one large featured tile + two square). Keep existing "Trips from $X" badge; add magazine index number overlay + gold-rule "View all 11 islands".
- **`TestimonialsSection.tsx`**: rebuild to two-column pull-quote layout (large italic serif + gold rule + attribution) reading from `src/data/testimonials.ts`.
- **`Index.tsx` order**: Hero → InsiderGuideBand → QuickDestinations (restyled) → QuizPromoSection (restyled) → DestinationsGrid (magazine) → SampleItineraryCTA → TestimonialsSection → NewsletterSection. (ConciergeSection removed from the homepage flow; the `/concierge` route stays live and linked from Header/Footer for anyone who lands on it.)

## 4. Blog: affiliate-rich long-form guides

Blog is now the primary revenue surface. Every published post gets deep, contextual affiliate links (compliant with the existing FTC rules memory).

**Structure per post:**
- 1,200–1,800 words, real H2/H3 hierarchy, table of contents
- 1 editorial hero image + 2 in-body images (premium tier, same art direction as §2)
- Standardized "Where to book" section per recommendation with 3 affiliate CTAs each:
  - **Stays** → Booking.com + Hotels.com + Airbnb search links (deep-linked to the destination)
  - **Flights** → Kiwi.com + Skyscanner (deep-linked origin-agnostic to the airport code)
  - **Activities** → Viator + GetYourGuide (destination-scoped)
  - **Insurance** (one per post) → SafetyWing / World Nomads
- FTC disclosure banner above the first CTA block (reused from existing pattern)
- All affiliate anchors: `rel="noopener noreferrer sponsored"`, `target="_blank"`
- JSON-LD `Article` + `BreadcrumbList` via `react-helmet-async`
- Sticky right-rail "Book this trip" widget on desktop with the same affiliate CTAs pinned

**New shared component `AffiliateCTAGroup.tsx`** — accepts `{ destinationSlug, airportCode, category }` and renders the appropriate 3-partner card group with disclosure. Used inside blog posts, destination detail pages, and travel-stack page for consistency.

**Content shipped:**
- Keep + upgrade existing `st-lucia-vs-barbados` (add hero/inline images + AffiliateCTAGroup blocks)
- New long-form posts (drafted with placeholder byline "The Numada Team"):
  - `best-caribbean-island-for-honeymoon` — comparison + 3 destination deep-dives, each with affiliate group
  - `hidden-caribbean-beaches-locals-love` — 8 beaches, each with "how to get there" + affiliate stays nearby
  - `caribbean-island-hopping-guide` — multi-island itineraries with affiliate flights + ferries
- Remaining blog cards keep "Coming soon" badge and link to `/community` waitlist.

**Blog data source:** move inline post arrays in `src/pages/Blog.tsx` and `src/pages/BlogPost.tsx` into `src/data/blogPosts.ts` with typed schema (`slug`, `title`, `excerpt`, `hero`, `body` sections, `affiliateBlocks`, `faq`, `related`). Renderer walks the sections so future posts are a data edit, not a page edit.

## 5. Destination detail affiliate upgrade

- Add `AffiliateCTAGroup` under each destination hero (Stays / Flights / Activities).
- Add a "Best of {island} — from our blog" internal-link block pulling posts tagged with that destination slug.
- Keep existing "Trips from $X" badge and Insider Notes teaser.

## 6. Header + Footer polish

- **Header**: Instrument Serif italic "Numada" wordmark + small gold rule, uppercase tracked nav, primary CTA becomes gold "Take the Quiz" (Concierge moves to a secondary link in the nav).
- **Footer**: emerald bg, gold rules between columns, keep existing groups.

## 7. SEO — hub-and-spoke scaffolding

- Install `react-helmet-async`; add `HelmetProvider` in `src/main.tsx`.
- Per-route `<title>`, `<meta description>`, `<link rel=canonical>` (relative), `og:*` for `/`, `/destinations`, every `/destinations/:slug`, `/blog`, every `/blog/:slug`, `/about`, `/insider`, `/community`, `/travel-stack`, `/quiz`, `/concierge`.
- `index.html`: keep sitewide fallback tags, remove the static canonical, add `Organization` + `WebSite` JSON-LD, keep the Travelpayouts tracker.
- Regenerate `public/sitemap.xml` from routes + destinations + blog posts.
- `public/robots.txt`: keep `Allow: /`, add `Sitemap: /sitemap.xml`.
- Trigger SEO scan after build.

## Technical notes
- No DB changes. `newsletter_subscribers.source` already exists.
- `framer-motion ^11.15.0` stays locked. Slow fades, subtle parallax on hero collage — no bouncy springs.
- Premium imagery is the most expensive part of this plan (≈30 premium image generations). Worth flagging: this uses more credits than a normal build.
- New files: `src/components/home/InsiderGuideBand.tsx`, `src/components/AffiliateCTAGroup.tsx`, `src/data/blogPosts.ts`, 3 new blog post data entries, all new image assets under `src/assets/destinations/`, `src/assets/destinations/hero/`, `src/assets/home/`, `public/og-image.jpg`.
- Rewritten files: `HeroSection.tsx`, `DestinationsGrid.tsx`, `TestimonialsSection.tsx`, `Header.tsx`, `Footer.tsx`, `Index.tsx`, `Blog.tsx`, `BlogPost.tsx`, `DestinationDetail.tsx`, `About.tsx`, `index.css`, `tailwind.config.ts`, `main.tsx`, `index.html`, `sitemap.xml`, `robots.txt`, `src/data/destinations.ts`.

## Out of scope
- Any changes to `/concierge` page itself (it stays as-is, still linked from Header/Footer).
- Real Calendly, real community platform URL, real customer testimonials, founder video embed.
- New affiliate networks beyond the ones already in Travel Stack (Booking, Hotels, Airbnb, Kiwi, Skyscanner, Viator, GetYourGuide, SafetyWing, World Nomads).

## Questions before I build
1. **Affiliate priority per category** — for Stays, should Booking.com be the first CTA (highest commission on your Travelpayouts account), or Airbnb (higher intent for the "villa/honeymoon" audience)? Same question implied for Flights: Kiwi first or Skyscanner first?
2. **Image budget** — OK to spend ~30 premium image generations to re-shoot all 11 destinations + hero collage + blog leads? Or should I limit premium to the 5 most-visited destinations and keep `fast` tier for the rest?
3. **Blog voice** — draft all 3 new posts in a confident first-person-plural "we've walked this beach" editorial voice (matches Layered Journal), or keep it neutral third-person until you review?
