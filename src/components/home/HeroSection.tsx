import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';
import heroImage from '@/assets/hero-caribbean.jpg';

const emailSchema = z.string().email("Please enter a valid email address").max(255);

export const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGuideSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = emailSchema.safeParse(email.trim());
    if (!validation.success) {
      toast({ title: "Invalid email", description: validation.error.errors[0].message, variant: "destructive" });
      return;
    }
    setIsLoading(true);
    try {
      const { error } = await supabase.from('newsletter_subscribers').insert({ email: email.trim().toLowerCase() });
      if (error && error.code === '23505') {
        toast({ title: "Welcome back!", description: "You're already on our list. Check your inbox for the guide!" });
      } else if (error) {
        throw error;
      } else {
        toast({ title: "Your guide is on the way! ✈️", description: "Check your inbox for the Caribbean Insider's Guide." });
      }
      setIsSubmitted(true);
    } catch {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Caribbean paradise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6">
              Experience the Caribbean,{' '}
              <span className="italic text-accent">Done Right.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              We've spent years uncovering the Caribbean's best-kept secrets so you don't have to. Join our community of savvy travelers who skip the tourist traps and experience the islands like insiders.
            </p>

            {/* Email Capture Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 max-w-lg mx-auto lg:mx-0 mb-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <Download className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground font-semibold text-sm uppercase tracking-wide">Free Download</span>
              </div>
              <h3 className="font-serif text-xl text-primary-foreground font-bold mb-2">
                The 5-Page Caribbean Insider's Guide
              </h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Our best flight hacks, shoulder-season secrets, and the beaches the resorts don't tell you about.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 text-accent"
                >
                  <CheckCircle className="w-6 h-6" />
                  <span className="font-medium text-primary-foreground">Check your inbox — your guide is on the way!</span>
                </motion.div>
              ) : (
                <form onSubmit={handleGuideSubmit} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your best email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-12 bg-primary-foreground/90 text-foreground placeholder:text-muted-foreground border-0"
                  />
                  <Button type="submit" variant="cta" size="lg" disabled={isLoading} className="whitespace-nowrap">
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Send Me the Guide'}
                  </Button>
                </form>
              )}
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="outline-light" size="lg" asChild>
                <Link to="/destinations">Explore Destinations</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-12 flex flex-wrap items-center gap-6 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-sm font-medium">6+ Caribbean Destinations</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-sm font-medium">Expert Local Guides</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-sm font-medium">Trusted Resources</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
