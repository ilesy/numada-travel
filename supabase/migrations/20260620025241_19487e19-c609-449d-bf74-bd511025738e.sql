
-- Add source column to newsletter_subscribers
ALTER TABLE public.newsletter_subscribers ADD COLUMN IF NOT EXISTS source text NOT NULL DEFAULT 'newsletter';

-- Insider notes table (members-only content per destination)
CREATE TABLE public.insider_notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  destination_slug text NOT NULL UNIQUE,
  title text NOT NULL,
  content_md text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.insider_notes TO authenticated;
GRANT ALL ON public.insider_notes TO service_role;

ALTER TABLE public.insider_notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated members can read insider notes"
  ON public.insider_notes FOR SELECT
  TO authenticated
  USING (true);

-- Seed insider notes for each destination
INSERT INTO public.insider_notes (destination_slug, title, content_md) VALUES
('st-lucia', 'St. Lucia Insider Notes', '**Best local guide:** Themba (WhatsApp +1 758 ###-####). Skip the visitor center, meets you at Gros Piton trailhead.\n\n**Off-menu dish:** Breadfruit gnocchi at Orlando''s in Soufrière — not on the printed menu.\n\n**Scam to avoid:** Taxi drivers at Hewanorra quoting "$80 flat" to Rodney Bay. Real rate is $85 USD round-trip pre-booked through your hotel.'),
('barbados', 'Barbados Insider Notes', '**Best local guide:** Cuzzy at Cuzzy''s Adventure Tours — knows every fish-fry vendor on the south coast personally.\n\n**Off-menu dish:** Macaroni pie with extra cheese skin at Cuz''s Fish Shack (ask for the corner piece).\n\n**Scam to avoid:** The "free rum tour" pitches outside Mount Gay — they''re a different operator, not the real distillery.'),
('svg', 'St. Vincent & Grenadines Insider Notes', '**Best local guide:** Captain Renaldo (Bequia, +1 784 ###-####) for Tobago Cays day-sails — half the price of resort tours, twice the time at Petit Tabac.\n\n**Off-menu dish:** Lambi (conch) souse at Mac''s Pizzeria in Bequia — only on Saturdays.\n\n**Scam to avoid:** Cab "fixed rates" from Argyle airport — always agree on EC$ not USD; the conversion games cost 30%.'),
('jamaica', 'Jamaica Insider Notes', '**Best local guide:** Everald in Treasure Beach (+1 876 ###-####) for the YS Falls + Pelican Bar combo without the Negril crowd.\n\n**Off-menu dish:** Mannish water at Scotchies — request it, they make it on Fridays only.\n\n**Scam to avoid:** "Free" airport transfers from non-JUTA drivers in Montego Bay. Always use red-plate JUTA taxis.'),
('turks-caicos', 'Turks & Caicos Insider Notes', '**Best local guide:** Big Blue Collective (eco-tour) for Iguana Island — quieter than the cruise-ship operators.\n\n**Off-menu dish:** Cracked conch with peas & rice at Da Conch Shack on Tuesday "locals night" — half-price.\n\n**Scam to avoid:** Grace Bay jet-ski rentals that don''t show you the damage waiver. Inspect before signing, photograph everything.'),
('antigua', 'Antigua Insider Notes', '**Best local guide:** Eli Fuller (Adventure Antigua) — his "Xtreme Circumnav" hits beaches you can''t reach otherwise.\n\n**Off-menu dish:** Goat water (stew) at Roti King in St. John''s — Saturday mornings only.\n\n**Scam to avoid:** "Beach chair rental" hustlers at Dickenson Bay — public beach, no chair fee owed.'),
('aruba', 'Aruba Insider Notes', '**Best local guide:** ABC Tours UTV for Arikok — go early (7am) before sun and crowds.\n\n**Off-menu dish:** Keshi yena at Gasparito Restaurant — call ahead, they only make a small batch nightly.\n\n**Scam to avoid:** Time-share "free breakfast" pitches at Palm Beach hotels. 2 hours of your trip for $20 of bacon.'),
('bahamas', 'Bahamas Insider Notes', '**Best local guide:** Captain Tim (Exuma, +1 242 ###-####) for swimming pigs without the Instagram herd — goes to Big Major before the Nassau day-trippers arrive.\n\n**Off-menu dish:** Fish in coconut at Tippy''s on Eleuthera — ask for the "local plate."\n\n**Scam to avoid:** Atlantis day-passes resold by touts on Paradise Island. Buy direct only.'),
('dominican-republic', 'Dominican Republic Insider Notes', '**Best local guide:** Iguana Mama (Cabarete) for the 27 Charcos waterfalls — proper safety gear, others rent worn-out vests.\n\n**Off-menu dish:** Chivo guisado (stewed goat) at La Yola in Punta Cana — locals-only Sunday lunch.\n\n**Scam to avoid:** Santo Domingo "cigar factory tours" that are just storefronts. Real factories are in Santiago.'),
('cayman-islands', 'Cayman Islands Insider Notes', '**Best local guide:** Captain Marvin''s for Stingray City — original operator, smaller boats than the cruise outfits.\n\n**Off-menu dish:** Cayman-style turtle stew at Vivine''s Kitchen in East End — call ahead.\n\n**Scam to avoid:** Seven Mile Beach "snorkel rentals" $40/day. Costco-style mart on Eastern Ave sells gear for less.'),
('grenada', 'Grenada Insider Notes', '**Best local guide:** Cutty (Telfor Bedeau''s nephew) for the Seven Sisters Falls hike — knows the unmarked upper pools.\n\n**Off-menu dish:** Oil down made over wood fire at Petite Anse Hotel — Wednesdays only, must reserve.\n\n**Scam to avoid:** "Spice tour" operators selling the same Marketing Board nutmegs you can buy direct at the market for half.');
