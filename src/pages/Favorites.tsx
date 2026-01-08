import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Trash2, Share2, Plane, Hotel, Compass, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/contexts/FavoritesContext';
import { destinations, Destination } from '@/data/destinations';
import { useToast } from '@/hooks/use-toast';
import CompareModal from '@/components/favorites/CompareModal';

const Favorites = () => {
  const { favorites, removeFavorite, clearFavorites } = useFavorites();
  const { toast } = useToast();
  const [compareList, setCompareList] = useState<string[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  const favoriteDestinations = destinations.filter((d) =>
    favorites.includes(d.id)
  );

  const compareDestinations = destinations.filter((d) =>
    compareList.includes(d.id)
  );

  const toggleCompare = (id: string) => {
    setCompareList((prev) => {
      if (prev.includes(id)) {
        return prev.filter((i) => i !== id);
      }
      if (prev.length >= 3) {
        toast({
          title: "Maximum 3 destinations",
          description: "Remove one to add another.",
          variant: "destructive",
        });
        return prev;
      }
      return [...prev, id];
    });
  };

  const openCompare = () => {
    if (compareList.length < 2) {
      toast({
        title: "Select at least 2 destinations",
        description: "Add more destinations to compare.",
      });
      return;
    }
    setIsCompareOpen(true);
  };

  const handleClearAll = () => {
    if (favorites.length === 0) return;
    clearFavorites();
    toast({
      title: "Favorites cleared",
      description: "All destinations have been removed from your favorites.",
    });
  };

  const handleShare = () => {
    const shareText = `Check out my Caribbean travel wishlist: ${favoriteDestinations
      .map((d) => d.name)
      .join(", ")}`;
    
    if (navigator.share) {
      navigator.share({
        title: "My Caribbean Favorites",
        text: shareText,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(shareText);
      toast({
        title: "Copied to clipboard!",
        description: "Share your favorites with friends.",
      });
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 rounded-full mb-6"
          >
            <Heart className="w-10 h-10 text-accent fill-accent" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
          >
            My Favorites
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/80 max-w-2xl mx-auto text-lg"
          >
            {favorites.length > 0
              ? `You have ${favorites.length} destination${favorites.length > 1 ? "s" : ""} saved.`
              : "Start saving destinations you'd like to visit!"}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-wide">
          {favorites.length > 0 && (
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <p className="text-muted-foreground">
                {favoriteDestinations.length} saved destination
                {favoriteDestinations.length > 1 ? "s" : ""}
                {compareList.length > 0 && (
                  <span className="ml-2 text-accent font-medium">
                    • {compareList.length} selected for comparison
                  </span>
                )}
              </p>
              <div className="flex flex-wrap gap-2">
                {compareList.length > 0 && (
                  <Button
                    variant="cta"
                    size="sm"
                    className="gap-2"
                    onClick={openCompare}
                  >
                    <Scale className="w-4 h-4" />
                    Compare ({compareList.length})
                  </Button>
                )}
                <Button variant="outline" size="sm" className="gap-2" onClick={handleShare}>
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 text-destructive hover:text-destructive"
                  onClick={handleClearAll}
                >
                  <Trash2 className="w-4 h-4" />
                  Clear All
                </Button>
              </div>
            </div>
          )}

          {favoriteDestinations.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {favoriteDestinations.map((destination) => (
                <motion.article
                  key={destination.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
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
                    
                    {/* Compare Checkbox */}
                    <button
                      onClick={() => toggleCompare(destination.id)}
                      className={`absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        compareList.includes(destination.id)
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-background/80 text-muted-foreground hover:bg-background'
                      }`}
                    >
                      <Scale className="w-5 h-5" />
                    </button>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFavorite(destination.id)}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:bg-destructive transition-colors"
                    >
                      <Heart className="w-5 h-5 fill-current" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {destination.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {destination.shortDescription}
                    </p>

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
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 bg-muted rounded-full mb-6">
                <Heart className="w-12 h-12 text-muted-foreground" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                No favorites yet
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Explore our destinations and click the heart icon to save your favorites for easy access.
              </p>
              <Button variant="cta" size="lg" asChild>
                <Link to="/destinations">Explore Destinations</Link>
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Compare Modal */}
      <CompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        destinations={compareDestinations}
      />
    </Layout>
  );
};

export default Favorites;
