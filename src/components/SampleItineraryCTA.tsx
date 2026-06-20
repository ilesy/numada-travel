import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Loader2, CheckCircle, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const PDF_URL = '/sample-itinerary.pdf';

interface Props {
  variant?: 'section' | 'card';
  source?: string;
}

export const SampleItineraryCTA = ({ variant = 'section', source = 'sample-itinerary' }: Props) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const { toast } = useToast();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await supabase
        .from('newsletter_subscribers')
        .insert({ email: email.trim().toLowerCase(), source });
      // Trigger download
      const a = document.createElement('a');
      a.href = PDF_URL;
      a.download = 'numada-sample-itinerary.pdf';
      a.click();
      setDone(true);
      toast({ title: 'Check your downloads', description: 'Your sample itinerary is on the way.' });
    } catch {
      // Still allow download even if duplicate email
      window.open(PDF_URL, '_blank');
      setDone(true);
    } finally {
      setLoading(false);
    }
  };

  const wrap =
    variant === 'card'
      ? 'bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card'
      : 'bg-cream-dark rounded-2xl p-8 md:p-12 border border-border';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={wrap}
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-accent font-medium text-xs tracking-widest uppercase mb-3">
            <FileText className="w-4 h-4" /> Free Download
          </span>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
            See exactly what a Numada itinerary looks like
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            A real 3-day excerpt from a St. Lucia Concierge brief — vetted local guides, off-menu dishes,
            and the tourist traps to skip. No fluff, no "explore the area" filler.
          </p>
        </div>
        <div>
          {done ? (
            <div className="flex items-start gap-3 bg-background rounded-xl p-5 border border-border">
              <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-foreground mb-1">Sample on its way</div>
                <p className="text-sm text-muted-foreground mb-3">
                  If your download didn't start,{' '}
                  <a href={PDF_URL} className="text-accent underline" target="_blank" rel="noopener noreferrer">
                    grab it here
                  </a>
                  .
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-3">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="h-12 bg-background"
              />
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Download className="w-5 h-5 mr-2" /> Email me the sample
                  </>
                )}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                One email, one PDF. Unsubscribe in a click.
              </p>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
};
