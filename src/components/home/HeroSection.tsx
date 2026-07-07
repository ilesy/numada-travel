import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';
import heroPitons from '@/assets/home/hero-pitons.jpg';
import heroWater from '@/assets/home/hero-water.jpg';

const emailSchema = z.string().email().max(255);

export const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = emailSchema.safeParse(email.trim());
    if (!v.success) return toast({ title: 'Invalid email', variant: 'destructive' });
    setLoading(true);
    try {
      const { error } = await supabase.from('newsletter_subscribers').insert({ email: email.trim().toLowerCase(), source: 'insider-guide' as any });
      if (error && error.code !== '23505') throw error;
      setSubmitted(true);
      toast({ title: 'Your guide is on the way ✈️', description: 'Check your inbox.' });
    } catch {
      toast({ title: 'Something went wrong', variant: 'destructive' });
    } finally { setLoading(false); }
  };

  return (
    <section className="relative bg-background overflow-hidden">
      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-12 lg:pt-20 pb-16 lg:pb-24">
          {/* LEFT — editorial masthead */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-px bg-accent" />
              <span className="text-[11px] font-semibold tracking-[0.35em] uppercase text-accent">
                Volume 03 — The Caribbean Collection
              </span>
            </div>
            <h1 className="font-serif text-[3rem] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight text-foreground mb-8">
              Experience the<br />
              <span className="italic text-secondary">Caribbean,</span><br />
              Done Right.
            </h1>
            <p className="text-lg text-foreground/75 max-w-lg mb-10 leading-relaxed">
              A private travel club for people who'd rather skip the tourist trail. Eleven vetted islands, insider notes from people who live there, and the honest reviews the resorts won't publish.
            </p>
            <div className="flex flex-wrap gap-4 mb-14">
              <Button size="lg" variant="hero" asChild>
                <Link to="/destinations">Explore Destinations <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/quiz">Take the Island Quiz</Link>
              </Button>
            </div>

            {/* Insider guide capture — small editorial card */}
            <div className="border-t border-border pt-8 max-w-md">
              <div className="text-[10px] uppercase tracking-[0.3em] text-accent font-semibold mb-2">Free · 5-page PDF</div>
              <div className="font-serif italic text-xl text-foreground mb-4">The Caribbean Insider's Guide</div>
              {submitted ? (
                <div className="flex items-center gap-2 text-secondary"><CheckCircle className="w-5 h-5" /> Sent to your inbox.</div>
              ) : (
                <form onSubmit={submit} className="flex gap-2 border-b border-foreground/30 pb-1">
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="border-0 bg-transparent px-0 focus-visible:ring-0 h-10" />
                  <button type="submit" disabled={loading} className="text-[10px] uppercase tracking-[0.3em] font-semibold text-foreground hover:text-accent transition-colors">
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Send it →'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* RIGHT — layered collage */}
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }} className="relative aspect-[4/5] lg:aspect-[3/4]">
            <div className="absolute inset-y-0 right-0 w-[85%] overflow-hidden rounded-sm shadow-2xl">
              <img src={heroPitons} alt="Pitons of St. Lucia at golden hour" className="w-full h-full object-cover" width={1024} height={1280} />
            </div>
            <div className="absolute -bottom-4 left-0 w-[52%] aspect-square overflow-hidden rounded-sm shadow-xl ring-8 ring-background rotate-[-3deg] z-10">
              <img src={heroWater} alt="Crystal Caribbean water on white sand" className="w-full h-full object-cover" width={1024} height={1024} loading="lazy" />
            </div>
            <div className="absolute -top-2 right-4 lg:-top-4 lg:right-8 bg-accent text-accent-foreground px-5 py-3 rotate-[4deg] shadow-lg z-20">
              <span className="font-serif italic text-3xl block leading-none">11</span>
              <span className="text-[9px] tracking-[0.25em] uppercase font-bold">Private Islands</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
