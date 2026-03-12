import { motion } from 'framer-motion';
import { ExternalLink, Shield, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const tools = [
  {
    emoji: '✈️',
    name: 'Find the Best Flights: Aviasales',
    description: 'We never book a Caribbean flight without checking Aviasales first. It searches hundreds of airlines — including the small regional carriers between islands that Google Flights completely misses.',
    whyWeLoveIt: 'The calendar price view makes it dead simple to spot "Shoulder Season" deals. We\'ve saved $300+ per person just by shifting dates by a few days.',
    proTip: 'If you\'re flexible on your destination, compare prices across multiple islands at once to see which one is cheapest to fly into right now.',
    cta: 'Compare Caribbean Flights on Aviasales',
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
    emoji: '🚗',
    name: 'Rent a Car from Locals: GetRentacar.com',
    description: 'Exploring the Caribbean properly means having your own wheels. GetRentacar connects you with local car owners who offer better prices and more flexibility than big airport rental desks.',
    whyWeLoveIt: 'No hidden fees, no airport counter queues. You deal directly with local owners who know the roads and often throw in tips about hidden beaches.',
    proTip: 'In St. Lucia and Jamaica, always book a 4x4. The mountain roads are no joke, and a small sedan won\'t cut it.',
    cta: 'Find Island Car Rentals',
    href: '#',
  },
  {
    emoji: '⛵',
    name: 'Book Authentic Experiences: Klook',
    description: 'The best parts of the Caribbean are often hidden from the resort crowd. Klook connects you with verified local experiences — from private catamaran charters to guided rainforest treks and street food tours.',
    whyWeLoveIt: 'Verified reviews from real travelers mean you can skip the "tourist trap" excursions and find the genuine hidden gems that locals actually recommend.',
    proTip: 'Book your popular boat tours and "Friday Night Jump Up" at least two weeks in advance — the best ones sell out fast!',
    cta: 'Explore Local Tours & Excursions',
    href: '#',
  },
  {
    emoji: '📱',
    name: 'Stay Connected: Yesim eSIM',
    description: 'Nothing kills the Caribbean vibe faster than a $200 roaming bill. Yesim provides affordable eSIM data plans that work across multiple Caribbean islands — no SIM swapping needed.',
    whyWeLoveIt: 'One eSIM covers multiple islands, which is perfect for island-hopping. Set it up before you even board your flight.',
    proTip: 'Download offline maps of your destination before you go, then use your eSIM data for real-time translation and restaurant lookups.',
    cta: 'Get Your Caribbean eSIM',
    href: '#',
  },
  {
    emoji: '🛡️',
    name: 'Travel Insurance: EKTA',
    description: 'If you\'re hiking the Pitons, scuba diving in Turks & Caicos, or driving a 4x4 through the Jamaican hills, you need insurance that actually covers adventure activities — not just hotel cancellations.',
    whyWeLoveIt: 'Competitive pricing with genuine adventure coverage. Their digital claims process means no paperwork headaches if something goes sideways on the trail.',
    proTip: 'Don\'t wait until you\'re at the airport. Get covered before you leave your front door — most policies won\'t cover pre-existing incidents.',
    cta: 'Get an Insurance Quote',
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
