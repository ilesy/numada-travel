import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, MessageCircle, Calendar, Sparkles, Loader2, CheckCircle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const INVITE_URL = (import.meta.env.VITE_COMMUNITY_INVITE_URL as string | undefined) || '';

const perks = [
  { icon: MessageCircle, title: 'Members-only chat', text: 'Trip-planning help, last-minute deals, and "I\'m in Soufrière right now, what should I eat" threads.' },
  { icon: Calendar, title: 'Live monthly Q&A', text: 'Hop on once a month with the Numada team to ask anything about an upcoming trip.' },
  { icon: Sparkles, title: 'Insider Notes access', text: 'The off-menu dishes, vetted local guides, and tourist-trap blacklist for every destination.' },
  { icon: Users, title: 'Travel-buddy matching', text: 'Find Numada members heading to the same island around your dates.' },
];

const Community = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await supabase
        .from('newsletter_subscribers')
        .insert({ email: email.trim().toLowerCase(), source: 'community' });
      setSent(true);
      toast({ title: "You're on the list", description: "We'll email you the invite link as soon as the doors open." });
    } catch {
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="bg-primary py-20">
        <div className="container-narrow text-center">
          <span className="text-accent font-medium text-xs tracking-widest uppercase mb-3 block">
            Numada Insiders
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-5">
            Caribbean travel is better{' '}
            <span className="italic text-accent">with the right people.</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            A small, private community of travelers who actually go — swapping tips, finding deals, and helping each other plan trips that don't suck.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {perks.map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border shadow-card flex gap-4"
              >
                <div className="flex-shrink-0 w-11 h-11 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-dark">
        <div className="container-narrow max-w-xl">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-card text-center">
            {INVITE_URL ? (
              <>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Doors are open
                </h2>
                <p className="text-muted-foreground mb-6">
                  Join the Numada Insiders chat — free while we build.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <a href={INVITE_URL} target="_blank" rel="noopener noreferrer">
                    Open invite →
                  </a>
                </Button>
              </>
            ) : sent ? (
              <div>
                <CheckCircle className="w-14 h-14 text-accent mx-auto mb-4" />
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                  You're on the invite list
                </h2>
                <p className="text-muted-foreground">
                  We'll email you the link as soon as the community opens.
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Request your invite
                </h2>
                <p className="text-muted-foreground mb-6">
                  We're opening the community in small batches to keep the signal high. Drop your email and we'll send your invite link.
                </p>
                <form onSubmit={submit} className="space-y-3">
                  <Input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12"
                  />
                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Request invite'}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Community;
