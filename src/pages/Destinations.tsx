import { motion } from 'framer-motion';
import { Heart, Plane, Hotel, Compass } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/contexts/FavoritesContext';
import { destinations } from '@/data/destinations';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Destinations = () => {
  const { toggleFavorite, isFavorite } = useFavorites();

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
            Caribbean Destinations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 max-w-2xl mx-auto text-lg"
          >
            Explore our curated collection of Caribbean islands, each offering unique experiences and unforgettable memories.
          </motion.p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {destinations.map((destination) => (
              <motion.article
                key={destination.id}
                variants={item}
                className="group relative bg-card rounded-xl overflow-hidden card-elevated"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                  
                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(destination.id)}
                    className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      isFavorite(destination.id)
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-background/90 text-foreground hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isFavorite(destination.id) ? 'fill-current' : ''}`} />
                  </button>

                  {/* Affiliate Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="affiliate-badge">Partner Links</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {destination.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.highlights.slice(0, 3).map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Plane className="w-4 h-4" />
                        Flights
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Hotel className="w-4 h-4" />
                        Hotels
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Compass className="w-4 h-4" />
                        Tours
                      </a>
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

export default Destinations;
