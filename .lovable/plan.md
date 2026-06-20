## Goal
Add the trust, proof, and community elements an ideal customer needs to actually buy the Concierge and join the community.

## Scope

### 1. Founder story page (`/about` rebuild)
- Add founder name, photo (AI-generated portrait), short origin story ("why we started Numada"), Caribbean credentials (islands visited, years).
- Calendly-style "Book a free 15-min call" CTA (mailto link for now; Calendly slot ready to swap).
- Link from Header, Footer, Concierge page, and homepage Concierge section.

### 2. Free sample itinerary download (lead magnet upgrade)
- Generate a real 3-day St. Lucia sample PDF (`/mnt/documents` → ship in `/public/sample-itinerary.pdf`).
- New `SampleItineraryCTA` block on Homepage + Concierge page: email-gated download stored in `newsletter_subscribers`.

### 3. Real testimonial structure
- Replace invented testimonials sitewide with a single `testimonials.ts` source supporting `name`, `location`, `trip`, `photoUrl`, `verified` flag.
- Seed with 3 placeholder slots clearly marked "Pending — replace with real customer" so the user can swap.
- Update `TestimonialsSection`, Concierge page, and Quiz result to read from this source.

### 4. "Trips from $X" price badges on destination cards
- Add `priceFrom: number` field to each destination in `src/data/destinations.ts` (research-based estimates: 7-day, mid-range, excl. flights).
- Render badge on `DestinationsGrid` cards and `DestinationDetail` hero ("Trips from $2,400 / 7 nights").

### 5. Members area — "Insider Notes"
- New `/insider` route, auth-gated (existing Lovable Cloud auth).
- Per-destination private notes (one short markdown block per island: best local guide WhatsApp, off-menu dish, scam to avoid).
- DB table `insider_notes` with RLS: SELECT only for `authenticated`. Seed with 11 rows (one per destination).
- Sign-up CTA on every destination page: "🔒 Members see the off-menu list" → /auth.

### 6. 60-second founder video placeholder
- On `/about` and Concierge hero, embed a 16:9 video slot with a "Watch the 60-sec intro" poster (AI-generated still). YouTube `<iframe>` with a `VITE_FOUNDER_VIDEO_ID` env placeholder; falls back to poster if unset.

### 7. Money-back guarantee on Concierge
- Add "Love it or your $99 back — no questions, 7 days" badge near the price and in the FAQ.

### 8. One real long-form blog post
- Replace the first blog card with a fully written 1,500-word post: **"St. Lucia vs. Barbados: which Caribbean island is right for your first trip?"** — comparison tables, FAQs, internal links to both destinations, JSON-LD `Article`.
- Other blog cards stay but get a "Coming soon" badge instead of dead links.

### 9. Community surface
- Footer + dedicated `/community` page: "Join the Numada Insiders" → Circle/Discord invite link (env var `VITE_COMMUNITY_INVITE_URL`, fallback to a "Request invite" email form that writes to `newsletter_subscribers` with a `source: 'community'` tag).
- Add `source` column to `newsletter_subscribers` if missing.

## Technical notes
- New DB migration: `insider_notes` table (id, destination_slug, content_md, created_at) + RLS + GRANTs; `newsletter_subscribers.source text default 'newsletter'`.
- New files: `src/pages/Insider.tsx`, `src/pages/Community.tsx`, `src/data/testimonials.ts`, `src/components/SampleItineraryCTA.tsx`, `src/components/GuaranteeBadge.tsx`, `public/sample-itinerary.pdf`, `src/assets/founder.jpg`, `src/assets/founder-video-poster.jpg`.
- Routing: add `/insider`, `/community` to `src/App.tsx`; rebuild `/about`.
- Auth: reuse existing Cloud auth; gate `/insider` with a redirect to `/auth` if no session.

## Out of scope (ask later)
- Real Stripe checkout for $99 (currently form-only).
- Real Calendly embed (placeholder mailto until user shares link).
- Actual community platform (Circle/Discord invite URL needs user input).

## Questions before I build
1. **Founder name & 1-paragraph origin story** — or should I draft placeholder copy clearly marked `[REPLACE]` for you to edit?
2. **Community platform** — Circle, Discord, Skool, or "Request invite" form only for now?
3. **Founder video** — leave as poster placeholder (no embed) until you record one?
