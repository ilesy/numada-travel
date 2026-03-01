import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const resources = [
  {
    name: 'Skyscanner',
    description: 'We never book a Caribbean flight without checking here first. Use the "Whole Month" view to find shoulder-season price drops that save hundreds.',
    logo: '✈️',
    cta: 'Compare Caribbean Flights',
    href: '#',
    tip: 'Use the "Everywhere" search to find the cheapest island to fly into.',
  },
  {
    name: 'Booking.com',
    description: 'From cliffside villas in St. Lucia to beachfront guesthouses in Barbados — the "Free Cancellation" filter is a lifesaver when Caribbean plans shift.',
    logo: '🏨',
    cta: 'Browse Top-Rated Stays',
    href: 'https://booking.tpo.lu/egBLp5jl',
    tip: 'Filter for 9.0+ review scores so photos match reality.',
  },
  {
    name: 'World Nomads',
    description: "If you're hiking the Pitons or diving in Turks & Caicos, you need insurance that actually covers adventure. Digital claims process means no paperwork headaches.",
    logo: '🛡️',
    cta: 'Get a Quote',
    href: '#',
    tip: 'Get covered before you leave — not at the airport.',
  },
  {
    name: 'GetYourGuide',
    description: 'The best Caribbean experiences are often hidden. Verified reviews help you avoid tourist traps and find authentic local excursions.',
    logo: '⛵',
    cta: 'Explore Local Tours',
    href: '#',
    tip: 'Book popular boat tours 2+ weeks in advance — they sell out fast!',
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
            Our Booking Toolkit
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            The Numada Travel Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            We plan Caribbean trips constantly. These are the <strong className="text-foreground">only platforms we trust</strong> to find the best deals, safest stays, and most authentic experiences.
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
              className="bg-card rounded-xl p-6 card-elevated group flex flex-col"
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
              <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                {resource.description}
              </p>
              <p className="text-xs text-accent font-medium mb-4">
                💡 Pro Tip: {resource.tip}
              </p>
              <div className="mt-auto">
                <Button variant="cta" size="sm" className="w-full gap-2" asChild>
                  <a href={resource.href} target="_blank" rel="noopener noreferrer sponsored">
                    {resource.cta}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View Full Toolkit CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button variant="outline" size="lg" asChild>
            <Link to="/travel-stack">
              View Our Full Travel Stack
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>

        {/* FTC Inline Disclosure */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-muted-foreground mt-8 max-w-2xl mx-auto"
        >
          <strong>Disclosure:</strong> Some links on this page are affiliate links. If you book through them, we earn a small commission at no extra cost to you. This is how we keep NumadaTravel free of banner ads and full of expert advice.
        </motion.p>
      </div>
    </section>
  );
};
