import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { testimonials } from '@/data/testimonials';
import { Button } from '@/components/ui/button';

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const items = testimonials;

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % items.length), 6000);
    return () => clearInterval(timer);
  }, [items.length]);

  const next = () => setCurrent((p) => (p + 1) % items.length);
  const prev = () => setCurrent((p) => (p - 1 + items.length) % items.length);
  const t = items[current];

  return (
    <section className="section-padding bg-primary overflow-hidden">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-accent font-medium text-sm tracking-widest uppercase mb-4 block">
            Traveler Stories
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
            What our travelers say
          </motion.h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <Quote className="w-12 h-12 text-accent/30 mx-auto mb-6" />
          <div className="relative min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div key={t.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="text-center">
                <div className="flex justify-center gap-1 text-accent mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-primary-foreground/90 font-serif italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-semibold text-primary-foreground">{t.name}</p>
                  <p className="text-primary-foreground/70 text-sm">{t.location} · {t.trip}</p>
                  {t.pending && (
                    <p className="text-accent/80 text-xs mt-2 italic">
                      Placeholder — real customer quotes are being collected.
                    </p>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button onClick={prev} aria-label="Previous" className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {items.map((_, index) => (
                <button key={index} onClick={() => setCurrent(index)} aria-label={`Go to slide ${index + 1}`} className={`w-2 h-2 rounded-full transition-all ${index === current ? 'bg-accent w-6' : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'}`} />
              ))}
            </div>
            <button onClick={next} aria-label="Next" className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="text-center mt-10">
            <Button variant="cta" asChild>
              <Link to="/concierge">Plan your trip with us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
