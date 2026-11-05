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

// Add only authentic traveler quotes with permission to publish their details.
export const testimonials: Testimonial[] = [];

export const realTestimonials = () => testimonials.filter((t) => !t.pending);
