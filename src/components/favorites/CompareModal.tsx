import { motion, AnimatePresence } from 'framer-motion';
import { X, Plane, Hotel, Compass, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Destination } from '@/data/destinations';

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  destinations: Destination[];
}

const CompareModal = ({ isOpen, onClose, destinations }: CompareModalProps) => {
  if (!isOpen) return null;

  const comparisonRows = [
    { label: 'Best Time to Visit', key: 'bestTimeToVisit' },
    { label: 'Currency', key: 'currency' },
    { label: 'Language', key: 'language' },
  ] as const;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-background rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Compare Destinations
              </h2>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto p-6">
              <div className="grid gap-6" style={{ gridTemplateColumns: `repeat(${destinations.length}, minmax(250px, 1fr))` }}>
                {/* Destination Headers */}
                {destinations.map((dest) => (
                  <div key={dest.id} className="text-center">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {dest.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {dest.shortDescription}
                    </p>
                  </div>
                ))}

                {/* Comparison Rows */}
                {comparisonRows.map((row) => (
                  <>
                    {destinations.map((dest, index) => (
                      <div
                        key={`${row.key}-${dest.id}`}
                        className={`p-4 rounded-lg ${index % 2 === 0 ? 'bg-muted/50' : 'bg-muted/30'}`}
                      >
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                          {row.label}
                        </p>
                        <p className="font-medium text-foreground">
                          {dest[row.key]}
                        </p>
                      </div>
                    ))}
                  </>
                ))}

                {/* Highlights */}
                {destinations.map((dest, index) => (
                  <div
                    key={`highlights-${dest.id}`}
                    className={`p-4 rounded-lg ${index % 2 === 0 ? 'bg-muted/50' : 'bg-muted/30'}`}
                  >
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                      Top Highlights
                    </p>
                    <ul className="space-y-1">
                      {dest.highlights.slice(0, 4).map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-sm text-foreground">
                          <Check className="w-4 h-4 text-accent" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Action Buttons */}
                {destinations.map((dest) => (
                  <div key={`actions-${dest.id}`} className="flex flex-col gap-2 pt-4">
                    <Button variant="cta" size="sm" className="gap-2" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Plane className="w-4 h-4" />
                        Book Flights
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Hotel className="w-4 h-4" />
                        Find Hotels
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Compass className="w-4 h-4" />
                        Explore Tours
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CompareModal;
