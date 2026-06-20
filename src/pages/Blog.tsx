import { motion } from 'framer-motion';
import { Clock, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

type Post = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  status: 'published' | 'coming-soon';
  featured?: boolean;
};

const posts: Post[] = [
  {
    id: 0,
    slug: 'st-lucia-vs-barbados',
    title: 'St. Lucia vs. Barbados: Which Caribbean Island Is Right for Your First Trip?',
    excerpt: "Two iconic islands, two very different vacations. A detailed head-to-head — beaches, food, cost, vibe — to help you pick the right one.",
    category: 'Destination Comparison',
    readTime: '12 min read',
    date: 'Jun 18, 2026',
    image: '🏝️',
    status: 'published',
    featured: true,
  },
  { id: 1, slug: 'best-time-to-visit-caribbean', title: 'Best Time to Visit the Caribbean: A Month-by-Month Guide', excerpt: "Navigate hurricane season, peak prices, and festivals with our seasonal breakdown.", category: 'Planning', readTime: '8 min read', date: 'Apr 15, 2026', image: '📅', status: 'published' },
  { id: 2, slug: 'island-hopping-101', title: 'Island Hopping 101: Planning a Multi-Island Caribbean Trip', excerpt: "Combine multiple destinations into one adventure — ferries, regional flights, timing.", category: 'Planning', readTime: '15 min read', date: 'Apr 8, 2026', image: '✈️', status: 'published' },
  { id: 3, slug: 'caribbean-on-a-budget', title: 'Caribbean on a Budget: How to Travel Smart Without Sacrificing Style', excerpt: "Insider tips for luxury Caribbean vibes without breaking the bank.", category: 'Budget Travel', readTime: '10 min read', date: 'Mar 28, 2026', image: '💰', status: 'published' },
  { id: 4, slug: 'st-vincent-grenadines-guide', title: 'Ultimate Guide to St. Vincent & The Grenadines', excerpt: "Hidden gems of SVG — from Tobago Cays to volcanic mainland St. Vincent.", category: 'Destination Guide', readTime: '12 min read', date: 'Coming soon', image: '🏝️', status: 'coming-soon' },
  { id: 5, slug: 'caribbean-food-guide', title: 'Caribbean Food Guide: Must-Try Local Dishes on Every Island', excerpt: "Jerk in Jamaica, roti in Trinidad — the dishes worth flying for.", category: 'Food & Culture', readTime: '7 min read', date: 'Coming soon', image: '🍽️', status: 'coming-soon' },
  { id: 6, slug: 'hidden-caribbean-beaches', title: "10 Hidden Caribbean Beaches You've Never Heard Of", excerpt: "Skip the crowds — pristine shores known mostly to locals, and how to reach them.", category: 'Beaches', readTime: '6 min read', date: 'Coming soon', image: '🏖️', status: 'coming-soon' },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const PostCard = ({ post }: { post: Post }) => {
  const inner = (
    <div className="block p-6 h-full">
      <div className="flex items-start justify-between mb-3">
        <div className="text-5xl">{post.image}</div>
        {post.status === 'coming-soon' && (
          <span className="text-[10px] font-semibold uppercase tracking-wider bg-muted text-muted-foreground px-2 py-1 rounded">
            Coming soon
          </span>
        )}
      </div>
      <span className="text-xs font-medium text-accent uppercase tracking-wider">{post.category}</span>
      <h2 className="font-serif text-xl font-semibold text-foreground mt-2 mb-3 group-hover:text-accent transition-colors">
        {post.title}
      </h2>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
      </div>
      {post.status === 'published' ? (
        <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent">
          Read Article <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </span>
      ) : (
        <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">Notify me when live</span>
      )}
    </div>
  );

  const className = "group bg-card rounded-xl overflow-hidden border border-border shadow-card hover:shadow-elevated transition-shadow h-full";

  return post.status === 'published' ? (
    <Link to={`/blog/${post.slug}`} className={className}>{inner}</Link>
  ) : (
    <Link to="/community" className={`${className} opacity-90`}>{inner}</Link>
  );
};

const Blog = () => {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <Layout>
      <section className="bg-primary py-20 md:py-28">
        <div className="container-wide text-center">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-accent font-medium text-sm tracking-widest uppercase mb-4 block">
            The Numada Journal
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Stories, Guides & Caribbean Insights
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Expert-written articles to help you plan smarter, travel deeper, and fall in love with every island we cover.
          </motion.p>
        </div>
      </section>

      {featured && (
        <section className="section-padding bg-cream-dark">
          <div className="container-wide">
            <Link to={`/blog/${featured.slug}`} className="group block">
              <div className="bg-card rounded-2xl border border-border shadow-card hover:shadow-elevated transition-shadow overflow-hidden">
                <div className="grid md:grid-cols-[1fr_1.3fr]">
                  <div className="bg-primary text-primary-foreground p-10 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest mb-4">
                      <Sparkles className="w-4 h-4" /> Featured
                    </div>
                    <span className="text-primary-foreground/70 text-xs uppercase tracking-wider mb-2">{featured.category}</span>
                    <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4 group-hover:text-accent transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-primary-foreground/80 mb-6">{featured.excerpt}</p>
                    <div className="flex items-center gap-4 text-primary-foreground/60 text-sm">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{featured.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                    </div>
                    <div className="mt-6">
                      <span className="inline-flex items-center gap-2 text-accent font-semibold">
                        Read the comparison <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                  <div className="bg-accent/10 flex items-center justify-center text-[10rem] min-h-[260px]">
                    {featured.image}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <motion.article key={post.id} variants={item}>
                <PostCard post={post} />
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-cream-dark">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Get the next story in your inbox</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Join the Numada newsletter for new guides, hidden-gem destinations, and Caribbean travel deals.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/quiz">Find Your Island <ArrowRight className="w-5 h-5 ml-2" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
