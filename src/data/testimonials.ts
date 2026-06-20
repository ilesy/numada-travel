// Single source of truth for testimonials across the site.
// Replace `pending: true` placeholders with real customer quotes as you collect them.

export interface Testimonial {
  id: string;
  quote: string;
  name: string;          // First name + last initial
  location: string;      // City, Country
  trip: string;          // e.g. "Honeymoon, St. Lucia"
  photoUrl?: string;     // Square headshot ~256x256
  stars: 1 | 2 | 3 | 4 | 5;
  pending?: boolean;     // true = placeholder, replace with real quote
}

export const testimonials: Testimonial[] = [
  {
    id: 'pending-1',
    quote: 'Pending — replace with your first real customer quote. Keep it specific: what did Numada solve, what surprised them, what would they tell a friend?',
    name: '[First name + last initial]',
    location: '[City, Country]',
    trip: '[Trip type, Island]',
    stars: 5,
    pending: true,
  },
  {
    id: 'pending-2',
    quote: 'Pending — second real customer quote. Concrete numbers ("saved us $X", "discovered a beach we never would have found") beat adjectives.',
    name: '[First name + last initial]',
    location: '[City, Country]',
    trip: '[Trip type, Island]',
    stars: 5,
    pending: true,
  },
  {
    id: 'pending-3',
    quote: 'Pending — third real customer quote. A short one-liner here works great as the homepage rotator opener.',
    name: '[First name + last initial]',
    location: '[City, Country]',
    trip: '[Trip type, Island]',
    stars: 5,
    pending: true,
  },
];

export const realTestimonials = () => testimonials.filter((t) => !t.pending);
