import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Plane, Hotel, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/contexts/FavoritesContext';
import { destinations } from '@/data/destinations';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const DestinationsGrid = () => {
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-medium text-sm tracking-widest uppercase mb-4 block"
          >
            Featured Destinations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Explore the Caribbean
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            From iconic beaches to hidden gems, discover the islands that dreams are made of.
          </motion.p>
        </div>

        {/* Destinations Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
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
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFavorite(destination.id);
                  }}
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
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {destination.shortDescription}
                </p>

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

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="default" size="lg" asChild>
            <Link to="/destinations">View All Destinations</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
