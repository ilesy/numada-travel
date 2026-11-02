import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { publishedReviews } from '@/lib/content';

export const FeaturedReviews = () => {
  const items = publishedReviews.slice(0, 3);
  if (!items.length) return null;
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-accent font-semibold mb-3">Honest reviews</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Tested by us, before you book</h2>
          </div>
          <Link to="/reviews" className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
            All reviews <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((r) => (
            <Link key={r.meta.slug} to={`/reviews/${r.meta.slug}`} className="group bg-card rounded-xl overflow-hidden border border-border shadow-card hover:shadow-elevated transition-shadow">
              <img src={r.hero.image} alt={r.meta.title} loading="lazy" className="w-full aspect-[3/2] object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="uppercase tracking-wider text-accent font-medium">{r.meta.category}</span>
                  <span className="flex items-center gap-1 text-muted-foreground"><Star className="w-3.5 h-3.5 fill-accent text-accent" />{r.meta.rating}/5</span>
                </div>
                <h3 className="font-serif text-xl text-foreground group-hover:text-accent transition-colors">{r.meta.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
