import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getDestinationBySlug } from '@/data/destinations';
import { getReviewBySlug } from '@/lib/content';

export const SITE_URL = 'https://island-odyssey-finder.lovable.app';

const pages: Record<string, [string, string]> = {
  '/': ['NumadaTravel | Private Caribbean Travel Club & Insider Guides', 'A private Caribbean travel club. Eleven vetted islands, honest guides and insider notes from locals — plus trusted deals on flights, hotels and tours.'],
  '/destinations': ['Caribbean Island Guides | NumadaTravel', 'Explore eleven Caribbean destinations with beach guides, seasonal advice, local highlights and flight, hotel and tour planning links.'],
  '/reviews': ['Caribbean Resort & Gear Reviews | NumadaTravel', 'Explore our Caribbean resort, travel gear and service reviews, with practical comparisons and booking links.'],
  '/about': ['About NumadaTravel & Ilesy Guity', 'Meet Ilesy Guity and discover our Caribbean travel club, island culture, beaches and local food. Contact us at hello@numadatravel.com.'],
  '/travel-stack': ['Travel Stack: Flights, Stays & Travel Essentials | NumadaTravel', 'Our curated travel partners for flights, accommodation, experiences, connectivity and other trip essentials.'],
  '/resources': ['Caribbean Travel Resources | NumadaTravel', 'Compare our travel planning resources for flights, hotels, tours and essentials for your Caribbean escape.'],
  '/blog': ['Caribbean Travel Journal & Planning Guides | NumadaTravel', 'Read our Caribbean island comparisons, honeymoon ideas, beach guides and practical trip-planning articles.'],
  '/quiz': ['Find Your Caribbean Island: Travel Quiz | NumadaTravel', 'Find a Caribbean island that suits your travel style, budget and interests with our island matchmaker quiz.'],
  '/insider': ['Numada Insiders: Caribbean Member Notes | NumadaTravel', 'Become a NumadaTravel member for Caribbean island notes and local travel recommendations.'],
  '/community': ['Join the NumadaTravel Community', 'Join our Caribbean travel community for island inspiration, hidden gems and travel planning ideas.'],
  '/favorites': ['Your Saved Caribbean Destinations | NumadaTravel', 'Review and compare the Caribbean destinations saved on your device.'],
  '/auth': ['Sign In to Numada Insiders | NumadaTravel', 'Sign in or create your NumadaTravel member account.'],
  '/concierge': ['Caribbean Trip Planning | NumadaTravel', 'Caribbean trip planning with NumadaTravel. Explore our destinations and local guides.'],
  '/privacy': ['Privacy Policy | NumadaTravel', 'How NumadaTravel collects and uses your information, and how to contact us about your privacy.'],
  '/terms': ['Terms of Use | NumadaTravel', 'Read the terms for NumadaTravel guides, partner bookings and membership.'],
  '/affiliate-disclosure': ['Affiliate Disclosure | NumadaTravel', 'Learn how our affiliate links support NumadaTravel and what happens when you book through our travel partners.'],
};

export const PageMetadata = () => {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, '') || '/';
  const destination = path.startsWith('/destinations/') ? getDestinationBySlug(path.split('/')[2]) : undefined;
  const review = path.startsWith('/reviews/') ? getReviewBySlug(path.split('/')[2]) : undefined;
  const [title, description] = destination
    ? [`${destination.name} Travel Guide | NumadaTravel`, destination.shortDescription]
    : review
      ? [`${review.meta.title} | NumadaTravel`, review.meta.description]
      : pages[path] || ['Caribbean Travel | NumadaTravel', 'Discover Caribbean island guides, travel stories and practical planning resources from NumadaTravel.'];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${SITE_URL}${path}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${SITE_URL}${path}`} />
      <meta property="og:type" content={review || path.startsWith('/blog/') ? 'article' : 'website'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};