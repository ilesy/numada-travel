import { motion } from 'framer-motion';
import { ExternalLink, Shield, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const tools = [
  {
    emoji: '✈️',
    name: 'Find the Best Flights: Skyscanner',
    description: 'We never book a flight without checking Skyscanner first. Why? Because the Caribbean has a lot of "hidden" regional airlines that big search engines often miss.',
    whyWeLoveIt: 'Use the "Whole Month" view to find the "Shoulder Season" price drops we talk about in our guides.',
    proTip: 'If you\'re flexible, use the "Everywhere" search to see which island is currently the cheapest to fly into from your home airport.',
    cta: 'Compare Caribbean Flights on Skyscanner',
    href: '#',
  },
  {
    emoji: '🏨',
    name: 'Secure Your Stay: Booking.com',
    description: 'From luxury cliffside villas in St. Lucia to cozy beachfront guesthouses in Barbados, Booking.com has the largest inventory in the islands.',
    whyWeLoveIt: 'The "Free Cancellation" filter is a lifesaver. Caribbean plans can change due to weather or shifted flights; having that flexibility is essential.',
    proTip: 'Look for properties with a "9.0+ Review Score" to ensure the photos actually match the reality of the beach!',
    cta: 'Browse Top-Rated Island Stays',
    href: 'https://booking.tpo.lu/egBLp5jl',
  },
  {
    emoji: '🛡️',
    name: 'Travel with Peace of Mind: World Nomads',
    description: 'If you\'re planning on hiking the Pitons, scuba diving in Turks & Caicos, or driving a 4x4 through the Jamaican hills, you need insurance that actually covers adventure.',
    whyWeLoveIt: 'They are designed by travelers for travelers. Their claims process is digital and straightforward, which is what you want if something goes sideways.',
    proTip: 'Don\'t wait until you\'re at the airport. Grab a quote now so you\'re covered from the moment you leave your front door.',
    cta: 'Get a Quote from World Nomads',
    href: '#',
  },
  {
    emoji: '⛵',
    name: 'Book Authentic Experiences: GetYourGuide',
    description: 'The best parts of the Caribbean are often hidden. GetYourGuide connects you with local experts for everything from private catamaran charters to guided rainforest treks.',
    whyWeLoveIt: 'You can read verified reviews from other travelers before you pay. It\'s the best way to avoid "tourist trap" excursions and find the hidden gems.',
    proTip: 'Book your "Friday Night Jump Up" or popular boat tours at least two weeks in advance — the best ones sell out fast!',
    cta: 'Explore Local Tours & Excursions',
    href: '#',
  },
];

const TravelStack = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-narrow text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent font-medium text-sm tracking-widest uppercase mb-4 block"
          >
            Our Booking Toolkit
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            The Numada Travel Stack 🧳
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Planning a trip to the Caribbean is exciting, but let's be real — the logistics can be a headache. We've narrowed down the <strong className="text-foreground">exact tools we use</strong> to find the best deals, the safest stays, and the most authentic experiences.
          </motion.p>
        </div>
      </section>

      {/* Tools */}
      <section className="section-padding bg-background">
        <div className="container-narrow space-y-12">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-card"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-5xl">{tool.emoji}</span>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                    {tool.name}
                  </h2>
                </div>
              </div>

              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                {tool.description}
              </p>

              <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                <p className="text-sm">
                  <strong className="text-foreground">Why we love it:</strong>{' '}
                  <span className="text-muted-foreground">{tool.whyWeLoveIt}</span>
                </p>
              </div>

              <div className="bg-accent/5 rounded-lg p-4 mb-6 border border-accent/10">
                <p className="text-sm">
                  <strong className="text-accent">💡 Pro Tip:</strong>{' '}
                  <span className="text-muted-foreground">{tool.proTip}</span>
                </p>
              </div>

              <Button variant="cta" size="lg" className="gap-2" asChild>
                <a href={tool.href} target="_blank" rel="noopener noreferrer sponsored">
                  🔗 {tool.cta}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-12 bg-background">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-secondary/30 rounded-xl p-6 md:p-8 border border-border"
          >
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-accent mt-0.5" />
              <h3 className="font-serif text-lg font-semibold text-foreground">A Quick Note from the Team</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Some of the links on this page are affiliate links. This means if you book through them, we may earn a small commission at no extra cost to you. This is how we keep NumadaTravel free of annoying banner ads and full of expert, curated advice. Thank you for supporting us!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-cream-dark">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Still can't decide which island to visit first?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              If your Travel Stack is ready but your destination isn't, take our Island Matchmaker Quiz to find your perfect Caribbean match in under 60 seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/quiz">
                  Take the Island Quiz
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/">
                  <Download className="w-4 h-4 mr-2" />
                  Get the Free Insider's Guide
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default TravelStack;
