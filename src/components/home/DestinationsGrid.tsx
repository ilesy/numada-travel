import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/contexts/FavoritesContext';
import { destinations } from '@/data/destinations';

const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export const DestinationsGrid = () => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const featured = destinations[0];
  const side = destinations.slice(1, 3);
  const rest = destinations.slice(3, 9);

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Editorial header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="text-[10px] tracking-[0.3em] uppercase text-accent font-semibold mb-4">The Portfolio</div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground">
              Eleven curated <span className="italic text-secondary">Caribbean isles.</span>
            </h2>
          </div>
          <Link to="/destinations" className="text-xs uppercase tracking-[0.3em] font-semibold text-foreground border-b-2 border-accent pb-1 self-start md:self-end hover:text-accent transition-colors">
            View all 11 islands →
          </Link>
        </div>

        {/* Magazine 8/4 split */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Featured — big tile */}
          <motion.article variants={item} className="lg:col-span-8 group relative overflow-hidden">
            <Link to={`/destinations/${featured.slug}`} className="block relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden">
              <img src={featured.image} alt={featured.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
              <div className="absolute top-6 right-6 text-[10px] tracking-[0.3em] uppercase text-primary-foreground/90 font-semibold">01 / Featured</div>
              <div className="absolute inset-x-6 bottom-6 md:inset-x-10 md:bottom-10 text-primary-foreground">
                <div className="text-[10px] tracking-[0.3em] uppercase text-accent font-semibold mb-2">From ${featured.priceFrom.toLocaleString()} / 7 nights</div>
                <h3 className="font-serif text-4xl md:text-5xl mb-2">{featured.name}</h3>
                <p className="text-primary-foreground/85 max-w-md text-sm md:text-base">{featured.shortDescription}</p>
              </div>
              <button onClick={(e) => { e.preventDefault(); toggleFavorite(featured.id); }} className={`absolute top-6 left-6 w-10 h-10 flex items-center justify-center backdrop-blur ${isFavorite(featured.id) ? 'bg-accent text-accent-foreground' : 'bg-background/80 text-foreground'}`} aria-label="Save">
                <Heart className={`w-4 h-4 ${isFavorite(featured.id) ? 'fill-current' : ''}`} />
              </button>
            </Link>
          </motion.article>

          {/* Side stack */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {side.map((d, i) => (
              <motion.article key={d.id} variants={item} className="group relative flex-1">
                <Link to={`/destinations/${d.slug}`} className="block relative aspect-[4/3] lg:aspect-square overflow-hidden">
                  <img src={d.image} alt={d.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute top-4 right-4 text-[10px] tracking-[0.3em] uppercase text-primary-foreground/80 font-semibold">0{i + 2}</div>
                  <div className="absolute inset-x-5 bottom-5 text-primary-foreground">
                    <div className="text-[9px] tracking-[0.3em] uppercase text-accent font-semibold mb-1">From ${d.priceFrom.toLocaleString()}</div>
                    <h3 className="font-serif text-2xl">{d.name}</h3>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Editorial index — remaining islands as text tiles */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3 border-t border-border pt-8 mt-8">
          {rest.map((d, i) => (
            <motion.div key={d.id} variants={item}>
              <Link to={`/destinations/${d.slug}`} className="group flex items-baseline justify-between py-2 border-b border-border/50 hover:border-accent transition-colors">
                <div className="flex items-baseline gap-3">
                  <span className="text-[10px] text-accent font-mono">0{i + 4}</span>
                  <span className="font-serif italic text-lg text-foreground group-hover:text-accent transition-colors">{d.name}</span>
                </div>
                <span className="flex items-center gap-2 text-xs text-muted-foreground">
                  ${d.priceFrom.toLocaleString()}
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:text-accent transition-colors" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-14">
          <Button variant="outline" size="lg" asChild>
            <Link to="/destinations">Browse all destinations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
