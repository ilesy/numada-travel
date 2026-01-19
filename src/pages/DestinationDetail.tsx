import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { getDestinationBySlug } from '@/data/destinations';
import { useFavorites } from '@/contexts/FavoritesContext';
import { 
  Heart, 
  Plane, 
  Hotel, 
  Compass, 
  Calendar, 
  DollarSign, 
  Globe, 
  MapPin,
  Sun,
  CloudRain,
  Users,
  ChevronLeft
} from 'lucide-react';

const DestinationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const destination = getDestinationBySlug(slug || '');
  const { toggleFavorite, isFavorite } = useFavorites();

  if (!destination) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="font-heading text-3xl text-primary mb-4">Destination Not Found</h1>
          <p className="text-muted-foreground mb-6">The destination you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/destinations">View All Destinations</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const getCrowdIcon = (level: string) => {
    switch (level) {
      case 'High': return <Users className="w-4 h-4 text-destructive" />;
      case 'Medium': return <Users className="w-4 h-4 text-accent" />;
      default: return <Users className="w-4 h-4 text-green-600" />;
    }
  };

  const getPriceColor = (level: string) => {
    switch (level) {
      case 'Peak': return 'text-destructive';
      case 'Moderate': return 'text-accent';
      default: return 'text-green-600';
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pb-12">
          <Link 
            to="/destinations" 
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            All Destinations
          </Link>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-4"
          >
            {destination.name}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 max-w-2xl mb-6"
          >
            {destination.shortDescription}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            <Button
              variant={isFavorite(destination.id) ? 'cta' : 'outline-light'}
              onClick={() => toggleFavorite(destination.id)}
              className="gap-2"
            >
              <Heart className={`w-4 h-4 ${isFavorite(destination.id) ? 'fill-current' : ''}`} />
              {isFavorite(destination.id) ? 'Saved' : 'Save to Favorites'}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <div className="bg-muted/50 py-3 border-b border-border">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground text-center">
            <span className="affiliate-badge mr-2">Affiliate Disclosure</span>
            Some links below are affiliate links. We may earn a commission at no extra cost to you.
          </p>
        </div>
      </div>

      {/* Booking CTAs */}
      <section className="py-8 bg-background border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="cta" size="lg" className="gap-2" asChild>
              <a href={destination.flightsUrl} target="_blank" rel="noopener noreferrer sponsored">
                <Plane className="w-5 h-5" />
                Find Flights
              </a>
            </Button>
            <Button variant="cta" size="lg" className="gap-2" asChild>
              <a href={destination.hotelsUrl} target="_blank" rel="noopener noreferrer sponsored">
                <Hotel className="w-5 h-5" />
                Book Hotels
              </a>
            </Button>
            <Button variant="cta" size="lg" className="gap-2" asChild>
              <a href={destination.toursUrl} target="_blank" rel="noopener noreferrer sponsored">
                <Compass className="w-5 h-5" />
                Browse Tours
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
              <Calendar className="w-8 h-8 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Best Time to Visit</p>
                <p className="font-medium text-foreground">{destination.bestTimeToVisit}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
              <DollarSign className="w-8 h-8 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Currency</p>
                <p className="font-medium text-foreground">{destination.currency}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
              <Globe className="w-8 h-8 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Language</p>
                <p className="font-medium text-foreground">{destination.language}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
              <MapPin className="w-8 h-8 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Top Highlights</p>
                <p className="font-medium text-foreground">{destination.highlights.length} attractions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Highlights */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl text-primary mb-6">About {destination.name}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {destination.description}
              </p>
            </div>
            <div>
              <h2 className="font-heading text-3xl text-primary mb-6">Top Highlights</h2>
              <ul className="grid grid-cols-2 gap-4">
                {destination.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg shadow-sm">
                    <span className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-sm">
                      {index + 1}
                    </span>
                    <span className="font-medium text-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Suggested Itinerary */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl text-primary text-center mb-4">
            Suggested {destination.itinerary.length}-Day Itinerary
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A curated travel plan to help you experience the best of {destination.name}.
          </p>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {destination.itinerary.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-heading text-xl">Day {day.day}</span>
                </div>
                <div className="flex-1 bg-muted/30 rounded-lg p-6">
                  <h3 className="font-heading text-xl text-foreground mb-3">{day.title}</h3>
                  <ul className="space-y-2">
                    {day.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-accent mt-1">•</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="cta" size="lg" className="gap-2" asChild>
              <a href={destination.toursUrl} target="_blank" rel="noopener noreferrer sponsored">
                <Compass className="w-5 h-5" />
                Book Guided Tours
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Seasonal Tips */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl text-primary text-center mb-4">
            When to Visit
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Plan your trip based on weather, crowds, and budget.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {destination.seasonalTips.map((tip, index) => (
              <motion.div
                key={tip.season}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-xl p-6 shadow-sm border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  {tip.season.includes('Dry') ? (
                    <Sun className="w-8 h-8 text-accent" />
                  ) : tip.season.includes('Rainy') || tip.season.includes('Hurricane') ? (
                    <CloudRain className="w-8 h-8 text-blue-500" />
                  ) : (
                    <Sun className="w-8 h-8 text-yellow-500" />
                  )}
                  <div>
                    <h3 className="font-heading text-lg text-foreground">{tip.season}</h3>
                    <p className="text-sm text-muted-foreground">{tip.months}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{tip.description}</p>
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-2">
                    {getCrowdIcon(tip.crowdLevel)}
                    <span className="text-muted-foreground">{tip.crowdLevel} crowds</span>
                  </div>
                  <div className={`font-medium ${getPriceColor(tip.priceLevel)}`}>
                    {tip.priceLevel} prices
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl text-primary text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Everything you need to know before visiting {destination.name}.
          </p>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {destination.faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="bg-muted/30 rounded-lg px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
            Ready to Visit {destination.name}?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Start planning your Caribbean adventure today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="cta" size="lg" className="gap-2" asChild>
              <a href={destination.flightsUrl} target="_blank" rel="noopener noreferrer sponsored">
                <Plane className="w-5 h-5" />
                Find Flights
              </a>
            </Button>
            <Button variant="outline-light" size="lg" className="gap-2" asChild>
              <a href={destination.hotelsUrl} target="_blank" rel="noopener noreferrer sponsored">
                <Hotel className="w-5 h-5" />
                Book Hotels
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DestinationDetail;
