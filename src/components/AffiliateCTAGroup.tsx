import { ExternalLink, Hotel, Plane, Compass, Shield } from 'lucide-react';

export type AffiliateCategory = 'stays' | 'flights' | 'activities' | 'insurance';

interface Props {
  category: AffiliateCategory;
  destinationName: string;
  destinationSlug?: string;
  airportCode?: string;
  className?: string;
}

// Trackable base URLs (existing Travelpayouts / Expedia affiliate accounts).
const EXPEDIA = 'https://expedia.com/affiliates/jbi_enterprises/numadatravel';
const AVIASALES = 'https://aviasales.tpo.lu/ijnjwuHV';
const KLOOK = 'https://klook.tpo.lu/pH5aNy8o';

const config: Record<AffiliateCategory, { icon: typeof Hotel; label: string; partners: (d: string, code?: string) => { name: string; href: string; tagline: string }[] }> = {
  stays: {
    icon: Hotel,
    label: 'Where to stay',
    partners: (d) => [
      { name: 'Booking.com', tagline: 'Widest inventory · free cancellation', href: `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(d)}&aid=304142` },
      { name: 'Hotels.com',  tagline: 'Rewards nights · every 10th free',      href: EXPEDIA },
      { name: 'Airbnb',      tagline: 'Villas & long-stay apartments',          href: `https://www.airbnb.com/s/${encodeURIComponent(d)}` },
    ],
  },
  flights: {
    icon: Plane,
    label: 'Best flight deals',
    partners: (d, code) => [
      { name: 'Skyscanner', tagline: 'Compare 1,200+ airlines',           href: `https://www.skyscanner.com/transport/flights-to/${code ?? ''}?ref=numada` },
      { name: 'Kiwi.com',   tagline: 'Mix carriers, hidden-city routes',   href: `https://www.kiwi.com/en/search/results/anywhere/${code ?? ''}` },
      { name: 'Aviasales',  tagline: 'Strong on Caribbean regional legs',   href: AVIASALES },
    ],
  },
  activities: {
    icon: Compass,
    label: 'Activities & tours',
    partners: (d) => [
      { name: 'Viator',        tagline: 'Free cancellation · reserve now, pay later', href: `https://www.viator.com/searchResults/all?text=${encodeURIComponent(d)}` },
      { name: 'GetYourGuide',  tagline: 'Mobile tickets · skip-the-line',              href: `https://www.getyourguide.com/s/?q=${encodeURIComponent(d)}` },
      { name: 'Klook',         tagline: 'Boat trips, snorkeling, day tours',           href: KLOOK },
    ],
  },
  insurance: {
    icon: Shield,
    label: 'Travel insurance',
    partners: () => [
      { name: 'SafetyWing',   tagline: 'Nomad-friendly monthly cover',           href: 'https://safetywing.com/nomad-insurance?referenceID=numadatravel' },
      { name: 'World Nomads', tagline: 'Adventure activities included',           href: 'https://www.worldnomads.com/' },
    ],
  },
};

export const AffiliateCTAGroup = ({ category, destinationName, airportCode, className = '' }: Props) => {
  const { icon: Icon, label, partners } = config[category];
  const items = partners(destinationName, airportCode);

  return (
    <div className={`my-8 border border-border rounded-lg bg-card overflow-hidden ${className}`}>
      <div className="flex items-center gap-3 px-5 py-3 bg-primary text-primary-foreground">
        <Icon className="w-4 h-4 text-accent" />
        <span className="font-serif italic text-lg">{label} — {destinationName}</span>
        <span className="ml-auto text-[10px] uppercase tracking-widest text-accent/80">Affiliate</span>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
        {items.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group p-5 hover:bg-cream-dark transition-colors flex flex-col"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-serif text-lg text-foreground group-hover:text-accent transition-colors">
                {p.name}
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-accent transition-colors" />
            </div>
            <span className="text-xs text-muted-foreground">{p.tagline}</span>
            <span className="mt-3 text-[10px] uppercase tracking-widest text-accent font-semibold border-b border-accent/40 self-start pb-0.5 group-hover:border-accent transition-colors">
              Check prices
            </span>
          </a>
        ))}
      </div>
      <p className="px-5 py-2 text-[11px] text-muted-foreground bg-muted/40 border-t border-border">
        We may earn a small commission if you book through these links — never at extra cost to you.
      </p>
    </div>
  );
};
