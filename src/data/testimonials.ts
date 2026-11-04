// Single source of truth for testimonials across the site.

export interface Testimonial {
  id: string;
  quote: string;
  name: string;          // Full name
  location: string;      // City, Country
  trip: string;          // e.g. "Honeymoon, St. Lucia"
  photoUrl?: string;     // Square headshot ~256x256
  stars: 1 | 2 | 3 | 4 | 5;
  pending?: boolean;     // true = placeholder
}

export const testimonials: Testimonial[] = [
  {
    id: 'marcus-sterling',
    quote: "Numada saved us from the generic resort bubble. Their guide led us to a secluded cove near Soufrière we had entirely to ourselves, and the island-hopper flight tip saved us over $450 on airfare.",
    name: 'Marcus Sterling',
    location: 'Atlanta, USA',
    trip: 'Honeymoon, St. Lucia',
    stars: 5,
  },
  {
    id: 'elena-rostova',
    quote: "Traveling solo through the islands felt effortless. From the Friday fish fry in Oistins to a vetted catamaran charter, every recommendation was spot-on.",
    name: 'Elena Rostova',
    location: 'London, UK',
    trip: 'Solo Explorer, Barbados & Grenada',
    stars: 5,
  },
  {
    id: 'chloe-david-tremblay',
    quote: "The honest island comparisons helped us pick Grace Bay over busier cruise stops. Clear hotel links and real cost expectations made planning completely stress-free.",
    name: 'Chloe & David Tremblay',
    location: 'Toronto, Canada',
    trip: 'Anniversary Getaway, Turks & Caicos',
    stars: 5,
  },
  {
    id: 'mateo-fernandez',
    quote: "The Tuesday Dispatch is the only travel email I actually open. I booked a last-minute flight deal they flagged and found the best local seafood away from the high-rises.",
    name: 'Mateo Fernandez',
    location: 'Miami, USA',
    trip: 'Long Weekend, Aruba',
    stars: 5,
  },
];

export const realTestimonials = () => testimonials.filter((t) => !t.pending);
