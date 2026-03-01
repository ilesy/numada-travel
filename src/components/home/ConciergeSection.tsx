import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Utensils, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  { icon: Calendar, text: 'Custom 7-day daily itinerary built around your vibe' },
  { icon: MapPin, text: 'Secret beaches & off-the-beaten-path gems' },
  { icon: Utensils, text: 'Vetted restaurant lists — skip the tourist traps' },
  { icon: Star, text: 'Direct booking links for every recommendation' },
];

export const ConciergeSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-medium text-sm tracking-widest uppercase mb-4 block">
              Premium Service
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Stop Researching.{' '}
              <span className="italic text-accent">Start Packing.</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-6 leading-relaxed">
              You've got 50 browser tabs open, three Reddit threads bookmarked, and you're still not sure if you booked the right resort. Sound familiar?
            </p>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              <strong className="text-primary-foreground">The Numada Concierge</strong> is our bespoke itinerary planning service. Tell us your travel style, and we'll build a complete Caribbean blueprint — so you can close those tabs and start packing.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-primary-foreground/90">{text}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <Link to="/concierge">
                Get My Custom Itinerary — $99
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
              <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-6 text-center">
                How It Works
              </h3>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Tell Us Your Vibe', desc: 'Fill out our quick intake form — your dates, budget, and what kind of trip excites you.' },
                  { step: '02', title: 'We Build Your Blueprint', desc: 'Our team curates a full 7-day itinerary with insider picks, daily schedules, and booking links.' },
                  { step: '03', title: 'You Pack & Go', desc: 'Receive your custom guide within 48 hours. All you have to do is show up.' },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <span className="flex-shrink-0 text-3xl font-serif font-bold text-accent">{step}</span>
                    <div>
                      <h4 className="font-semibold text-primary-foreground mb-1">{title}</h4>
                      <p className="text-sm text-primary-foreground/70">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
