import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Plane, Hotel, Compass, ArrowRight } from 'lucide-react';
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
                {/* Image - Clickable */}
                <Link to={`/destinations/${destination.slug}`} className="block relative aspect-[4/3] overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                  
                  {/* Affiliate Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="affiliate-badge">Partner Links</span>
                  </div>

                  {/* View Details Overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-background/90 text-foreground px-4 py-2 rounded-full font-medium flex items-center gap-2">
                      View Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>

                {/* Favorite Button - Outside Link */}
                <button
                  onClick={() => toggleFavorite(destination.id)}
                  className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all z-10 ${
                    isFavorite(destination.id)
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-background/90 text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavorite(destination.id) ? 'fill-current' : ''}`} />
                </button>

                {/* Content */}
                <div className="p-6">
                  <Link to={`/destinations/${destination.slug}`}>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2 hover:text-accent transition-colors">
                      {destination.name}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {destination.shortDescription}
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
                      <a href={destination.flightsUrl} target="_blank" rel="noopener noreferrer sponsored">
                        <Plane className="w-4 h-4" />
                        Flights
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={destination.hotelsUrl} target="_blank" rel="noopener noreferrer sponsored">
                        <Hotel className="w-4 h-4" />
                        Hotels
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={destination.toursUrl} target="_blank" rel="noopener noreferrer sponsored">
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
