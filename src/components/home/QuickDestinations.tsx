import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { destinations } from '@/data/destinations';

export const QuickDestinations = () => {
  return (
    <section className="py-6 bg-cream-dark border-y border-border">
      <div className="container-wide">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          <span className="text-sm font-medium text-muted-foreground hidden md:inline">
            Popular Islands:
          </span>
          {destinations.slice(0, 6).map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/destinations/${destination.slug}`}
                className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors group"
              >
                <MapPin className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                <span>{destination.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
