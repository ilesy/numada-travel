import { motion } from 'framer-motion';
import { Clock, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const posts = [
  {
    id: 1,
    slug: 'best-time-to-visit-caribbean',
    title: "Best Time to Visit the Caribbean: A Month-by-Month Guide",
    excerpt: "Navigate hurricane season, peak prices, and festivals with our comprehensive seasonal breakdown of every Caribbean island.",
    category: "Planning",
    readTime: "8 min read",
    date: "Apr 15, 2026",
    image: "📅",
  },
  {
    id: 2,
    slug: 'island-hopping-101',
    title: "Island Hopping 101: Planning a Multi-Island Caribbean Trip",
    excerpt: "Learn how to combine multiple destinations into one unforgettable adventure — ferries, regional flights, and timing tips.",
    category: "Planning",
    readTime: "15 min read",
    date: "Apr 8, 2026",
    image: "✈️",
  },
  {
    id: 3,
    slug: 'caribbean-on-a-budget',
    title: "Caribbean on a Budget: How to Travel Smart Without Sacrificing Style",
    excerpt: "Insider tips for experiencing luxury Caribbean vibes without breaking the bank — from local guesthouses to free experiences.",
    category: "Budget Travel",
    readTime: "10 min read",
    date: "Mar 28, 2026",
    image: "💰",
  },
  {
    id: 4,
    slug: 'st-vincent-grenadines-guide',
    title: "Ultimate Guide to St. Vincent & The Grenadines",
    excerpt: "Discover the hidden gems of SVG, from the pristine Tobago Cays to the volcanic landscapes of mainland St. Vincent.",
    category: "Destination Guide",
    readTime: "12 min read",
    date: "Mar 20, 2026",
    image: "🏝️",
  },
  {
    id: 5,
    slug: 'caribbean-food-guide',
    title: "Caribbean Food Guide: Must-Try Local Dishes on Every Island",
    excerpt: "From jerk chicken in Jamaica to roti in Trinidad, explore the rich culinary traditions that define the islands.",
    category: "Food & Culture",
    readTime: "7 min read",
    date: "Mar 12, 2026",
    image: "🍽️",
  },
  {
    id: 6,
    slug: 'hidden-caribbean-beaches',
    title: "10 Hidden Caribbean Beaches You've Never Heard Of",
    excerpt: "Skip the crowds and discover pristine shores known mostly to locals — and how to actually get to them.",
    category: "Beaches",
    readTime: "6 min read",
    date: "Mar 3, 2026",
    image: "🏖️",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="container-wide text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent font-medium text-sm tracking-widest uppercase mb-4 block"
          >
            The Numada Journal
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
          >
            Stories, Guides & Caribbean Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/80 max-w-2xl mx-auto text-lg"
          >
            Expert-written articles to help you plan smarter, travel deeper, and fall in love with every island we cover.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {posts.map((post) => (
              <motion.article
                key={post.id}
                variants={item}
                className="group bg-card rounded-xl overflow-hidden border border-border shadow-card hover:shadow-elevated transition-shadow"
              >
                <Link to={`/blog/${post.slug}`} className="block p-6">
                  <div className="text-5xl mb-4">{post.image}</div>
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h2 className="font-serif text-xl font-semibold text-foreground mt-2 mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent">
                    Read Article
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream-dark">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get the next story in your inbox
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Join the Numada newsletter for new guides, hidden-gem destinations, and Caribbean travel deals — straight from us.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/quiz">
              Find Your Island
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
