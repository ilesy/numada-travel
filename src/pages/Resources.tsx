import { motion } from 'framer-motion';
import { ExternalLink, Shield, Plane, Hotel, ShieldCheck, Map } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const resources = [
  {
    name: 'Skyscanner',
    description: 'Compare flights from hundreds of airlines to find the best deals on Caribbean routes. Price alerts, flexible date searches, and trusted by millions.',
    logo: '✈️',
    category: 'Flights',
    cta: 'Search Flights',
    href: '#',
    featured: true,
  },
  {
    name: 'Booking.com',
    description: 'Over 28 million accommodation listings worldwide including Caribbean resorts, boutique hotels, and vacation rentals. Free cancellation on most properties.',
    logo: '🏨',
    category: 'Hotels',
    cta: 'Find Hotels',
    href: '#',
    featured: true,
  },
  {
    name: 'World Nomads',
    description: 'Adventure travel insurance designed for independent travelers. Covers medical emergencies, trip cancellation, and adventure activities.',
    logo: '🛡️',
    category: 'Insurance',
    cta: 'Get a Quote',
    href: '#',
    featured: true,
  },
  {
    name: 'GetYourGuide',
    description: 'Book unforgettable tours and activities with local guides. Snorkeling, sailing, food tours, and hidden gem experiences across the Caribbean.',
    logo: '🗺️',
    category: 'Tours',
    cta: 'Explore Tours',
    href: '#',
    featured: true,
  },
  {
    name: 'Viator',
    description: 'TripAdvisor-owned platform with thousands of Caribbean experiences. Read verified reviews and book with confidence.',
    logo: '🎯',
    category: 'Tours',
    cta: 'Browse Activities',
    href: '#',
    featured: false,
  },
  {
    name: 'Airbnb',
    description: 'Unique stays and experiences from local hosts. Find everything from beachfront villas to cozy apartments in the Caribbean.',
    logo: '🏠',
    category: 'Accommodation',
    cta: 'Find Stays',
    href: '#',
    featured: false,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Resources = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="container-wide text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
          >
            Travel Resources
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 max-w-2xl mx-auto text-lg"
          >
            Trusted booking platforms and tools we personally use and recommend.
          </motion.p>
        </div>
      </section>

      {/* FTC Disclosure */}
      <section className="bg-accent/10 py-4 border-b border-accent/20">
        <div className="container-wide">
          <p className="text-sm text-foreground/80 text-center">
            <Shield className="w-4 h-4 inline mr-2 text-accent" />
            <strong>Disclosure:</strong> This page contains affiliate links. We earn a commission from qualifying purchases at no extra cost to you.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {resources.map((resource) => (
              <motion.div
                key={resource.name}
                variants={item}
                className={`bg-card rounded-xl p-6 card-elevated ${
                  resource.featured ? 'ring-2 ring-accent/20' : ''
                }`}
              >
                {resource.featured && (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-accent mb-4">
                    <ShieldCheck className="w-3 h-3" />
                    Recommended
                  </span>
                )}
                <div className="text-5xl mb-4">{resource.logo}</div>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {resource.name}
                    </h3>
                    <span className="text-xs text-muted-foreground">{resource.category}</span>
                  </div>
                  <span className="affiliate-badge text-xs">
                    <Shield className="w-3 h-3" />
                    Affiliate
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {resource.description}
                </p>
                <Button variant="cta" className="w-full gap-2" asChild>
                  <a href={resource.href} target="_blank" rel="noopener noreferrer">
                    {resource.cta}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
