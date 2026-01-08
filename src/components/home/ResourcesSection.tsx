import { motion } from 'framer-motion';
import { ExternalLink, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const resources = [
  {
    name: 'Skyscanner',
    description: 'Compare flights from hundreds of airlines and find the best deals to Caribbean destinations.',
    logo: '✈️',
    cta: 'Search Flights',
    href: '#',
  },
  {
    name: 'Booking.com',
    description: 'Book hotels, resorts, and vacation rentals with free cancellation on most properties.',
    logo: '🏨',
    cta: 'Find Hotels',
    href: '#',
  },
  {
    name: 'World Nomads',
    description: 'Travel insurance designed for adventurous travelers. Get covered for your Caribbean trip.',
    logo: '🛡️',
    cta: 'Get a Quote',
    href: '#',
  },
  {
    name: 'GetYourGuide',
    description: 'Book tours, activities, and experiences with local experts across the Caribbean.',
    logo: '🗺️',
    cta: 'Explore Tours',
    href: '#',
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

export const ResourcesSection = () => {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-medium text-sm tracking-widest uppercase mb-4 block"
          >
            Trusted Partners
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Travel Resources
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            We partner with industry-leading platforms to bring you the best booking options.
          </motion.p>
        </div>

        {/* Resources Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {resources.map((resource) => (
            <motion.div
              key={resource.name}
              variants={item}
              className="bg-card rounded-xl p-6 card-elevated group"
            >
              <div className="text-4xl mb-4">{resource.logo}</div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {resource.name}
                </h3>
                <span className="affiliate-badge text-xs">
                  <Shield className="w-3 h-3" />
                  Affiliate
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {resource.description}
              </p>
              <Button variant="cta" size="sm" className="w-full gap-2" asChild>
                <a href={resource.href} target="_blank" rel="noopener noreferrer">
                  {resource.cta}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* FTC Inline Disclosure */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-muted-foreground mt-8 max-w-2xl mx-auto"
        >
          <strong>Disclosure:</strong> NumadaTravel earns a commission from qualifying purchases through the links above. This helps support our site at no additional cost to you.
        </motion.p>
      </div>
    </section>
  );
};
