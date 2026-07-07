import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const schema = z.string().email().max(255);

export const InsiderGuideBand = () => {
  const [email, setEmail] = useState('');
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!schema.safeParse(email.trim()).success) return toast({ title: 'Invalid email', variant: 'destructive' });
    setLoading(true);
    try {
      const { error } = await supabase.from('newsletter_subscribers').insert({ email: email.trim().toLowerCase(), source: 'insider-band' as any });
      if (error && error.code !== '23505') throw error;
      setOk(true);
      toast({ title: 'Welcome to the Insiders' });
    } catch { toast({ title: 'Something went wrong', variant: 'destructive' }); }
    finally { setLoading(false); }
  };

  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="container-wide relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-accent font-semibold mb-4">Free Weekly Dispatch</div>
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-4">Get the Numada Insider's Guide.</h2>
            <p className="text-primary-foreground/75 text-lg leading-relaxed max-w-xl">
              Every Tuesday: one hidden beach, one shoulder-season flight deal, one restaurant the resorts don't tell you about. Written by us. No AI, no filler.
            </p>
          </div>
          <div>
            {ok ? (
              <div className="flex items-center gap-3 text-lg"><CheckCircle className="w-6 h-6 text-accent" /> You're in. Check your inbox.</div>
            ) : (
              <form onSubmit={submit} className="flex flex-col sm:flex-row gap-0 border border-accent/40 p-1 bg-primary-foreground/5 backdrop-blur-sm">
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" className="bg-transparent border-0 text-primary-foreground placeholder:text-primary-foreground/50 h-14 px-6 focus-visible:ring-0 flex-1" />
                <button type="submit" disabled={loading} className="bg-accent text-accent-foreground px-8 h-14 font-semibold uppercase tracking-widest text-xs hover:bg-accent/90 transition-colors flex items-center justify-center gap-2">
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Send It'}
                </button>
              </form>
            )}
            <p className="text-xs text-primary-foreground/50 mt-3">Unsubscribe any time. We never share your email.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
