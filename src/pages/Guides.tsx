import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const guides = [
  {
    id: 1,
    title: "Ultimate Guide to St. Vincent & The Grenadines",
    excerpt: "Discover the hidden gems of SVG, from the pristine Tobago Cays to the volcanic landscapes of mainland St. Vincent.",
    category: "Destination Guide",
    readTime: "12 min read",
    image: "🏝️",
  },
  {
    id: 2,
    title: "Best Time to Visit the Caribbean: Month-by-Month Guide",
    excerpt: "Navigate hurricane season, peak prices, and festivals with our comprehensive seasonal breakdown.",
    category: "Planning",
    readTime: "8 min read",
    image: "📅",
  },
  {
    id: 3,
    title: "Caribbean on a Budget: How to Travel Smart",
    excerpt: "Insider tips for experiencing luxury Caribbean vibes without breaking the bank.",
    category: "Budget Travel",
    readTime: "10 min read",
    image: "💰",
  },
  {
    id: 4,
    title: "Island Hopping 101: Planning Your Multi-Island Trip",
    excerpt: "Learn how to combine multiple Caribbean destinations into one unforgettable adventure.",
    category: "Planning",
    readTime: "15 min read",
    image: "✈️",
  },
  {
    id: 5,
    title: "Caribbean Food Guide: Must-Try Local Dishes",
    excerpt: "From jerk chicken to roti, explore the rich culinary traditions of the islands.",
    category: "Food & Culture",
    readTime: "7 min read",
    image: "🍽️",
  },
  {
    id: 6,
    title: "Top 10 Caribbean Beaches You've Never Heard Of",
    excerpt: "Skip the crowds and discover pristine shores known only to locals.",
    category: "Beaches",
    readTime: "6 min read",
    image: "🏖️",
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

const Guides = () => {
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
            Travel Guides
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 max-w-2xl mx-auto text-lg"
          >
            Expert-written guides to help you plan the perfect Caribbean adventure.
          </motion.p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {guides.map((guide) => (
              <motion.article
                key={guide.id}
                variants={item}
                className="group bg-card rounded-xl overflow-hidden card-elevated"
              >
                <div className="p-6">
                  <div className="text-5xl mb-4">{guide.image}</div>
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {guide.category}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-foreground mt-2 mb-3 group-hover:text-accent transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {guide.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {guide.readTime}
                    </span>
                    <Button variant="ghost" size="sm" className="gap-2 group-hover:text-accent">
                      Read Guide
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Guides;
