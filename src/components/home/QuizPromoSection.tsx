import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const QuizPromoSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="text-accent font-medium text-sm tracking-widest uppercase mb-4 block">
              Interactive Tool
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Not Sure Which Island Is{' '}
              <span className="italic text-accent">Your Match?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Every island has its own personality. St. Lucia is for romance and adventure. Barbados is for foodies and culture lovers. Turks & Caicos is for those who want postcard-perfect beaches and nothing else.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Take our <strong className="text-foreground">Island Matchmaker Quiz</strong> — answer 4 quick questions about your travel style, and we'll tell you exactly which Caribbean island was made for you.
            </p>

            <div className="flex items-center gap-3 text-muted-foreground text-sm mb-8">
              <Clock className="w-4 h-4 text-accent" />
              <span>Takes under 60 seconds • No sign-up required</span>
            </div>

            <Button variant="hero" size="lg" asChild>
              <Link to="/quiz">
                Find My Perfect Island
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="bg-gradient-card rounded-2xl p-8 md:p-10 border border-border shadow-card text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6">
                <Compass className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Island Matchmaker Quiz
              </h3>
              <div className="space-y-3 text-left max-w-sm mx-auto mb-6">
                {[
                  'What\'s your ideal vacation vibe?',
                  'How do you prefer to travel?',
                  'What activities excite you most?',
                  'What\'s your budget range?',
                ].map((q, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                    <span className="flex-shrink-0 w-7 h-7 bg-accent/10 text-accent font-bold text-sm rounded-full flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-sm text-foreground">{q}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                Get your personalized island recommendation instantly
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
