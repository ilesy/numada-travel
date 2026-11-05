import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export const TestimonialsSection = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (testimonials.length < 2) return;
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 7000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[i];

  if (!t) {
    const subject = encodeURIComponent('Our Caribbean travel story');
    const body = encodeURIComponent('First and last name:\nLocation (optional):\nIsland and trip dates:\nOur experience with NumadaTravel:\n\nPermission to publish our quote and name on NumadaTravel: Yes / No');
    return (
      <section className="section-padding bg-cream-dark">
        <div className="container-narrow">
          <div className="text-xs uppercase text-accent font-semibold mb-3">Our travel community</div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">Every island has a story. <span className="italic text-secondary">What’s yours?</span></h2>
          <p className="text-muted-foreground mt-6 max-w-2xl">We’re collecting genuine stories from travelers who have explored with our guides. We’d love to hear where you went and what made your trip memorable.</p>
          <Button asChild className="mt-8">
            <a href={`mailto:hello@numadatravel.com?subject=${subject}&body=${body}`}><Mail className="w-4 h-4 mr-2" />Share your travel story</a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">We only publish your story and name with your permission.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-cream-dark">
      <div className="container-narrow">
        <div className="mb-14">
          <div className="text-[10px] tracking-[0.3em] uppercase text-accent font-semibold mb-3">From The Members</div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
            What travelers <span className="italic text-secondary">are saying.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-[3fr_1fr] gap-10 items-start">
          <AnimatePresence mode="wait">
            <motion.blockquote key={t.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.4 }} className="relative">
              <div className="flex text-accent mb-4">
                {Array.from({ length: t.stars }).map((_, s) => <Star key={s} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="font-serif italic text-2xl md:text-4xl leading-[1.25] text-foreground">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 mt-8">
                <span className="w-10 h-px bg-accent" />
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{t.location} · {t.trip}</div>
                  {t.pending && <div className="text-[10px] italic text-accent/70 mt-1">Placeholder — real quotes being collected</div>}
                </div>
              </div>
            </motion.blockquote>
          </AnimatePresence>

          <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-6">
            <button onClick={() => setI((p) => (p - 1 + testimonials.length) % testimonials.length)} className="w-10 h-10 border border-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors" aria-label="Previous"><ChevronLeft className="w-4 h-4" /></button>
            <div className="text-xs text-muted-foreground font-mono">0{i + 1} / 0{testimonials.length}</div>
            <button onClick={() => setI((p) => (p + 1) % testimonials.length)} className="w-10 h-10 border border-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors" aria-label="Next"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </section>
  );
};
