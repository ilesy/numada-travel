import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Loader2, MapPin } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { destinations } from '@/data/destinations';

interface Note {
  id: string;
  destination_slug: string;
  title: string;
  content_md: string;
}

const renderMd = (md: string) =>
  md
    .split('\n\n')
    .map((para, i) => (
      <p
        key={i}
        className="text-foreground/90 leading-relaxed mb-3"
        dangerouslySetInnerHTML={{
          __html: para
            .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground">$1</strong>')
            .replace(/\n/g, '<br/>'),
        }}
      />
    ));

const Insider = () => {
  const [loading, setLoading] = useState(true);
  const [authed, setAuthed] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Insider Notes — Members Area | NumadaTravel';
    const init = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        setLoading(false);
        return;
      }
      setAuthed(true);
      const { data: rows } = await supabase
        .from('insider_notes')
        .select('id, destination_slug, title, content_md')
        .order('destination_slug');
      setNotes((rows as Note[]) || []);
      setLoading(false);
    };
    init();
  }, []);

  const destName = (slug: string) =>
    destinations.find((d) => d.slug === slug)?.name || slug;

  if (loading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-accent" />
        </div>
      </Layout>
    );
  }

  if (!authed) {
    return (
      <Layout>
        <section className="section-padding bg-cream-dark">
          <div className="container-narrow max-w-xl text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-7 h-7 text-accent" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Members-only: Insider Notes
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              The off-menu dishes, the WhatsApp numbers of local guides we trust, and the scams to skip — one short brief per island, for Numada members.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="lg" onClick={() => navigate('/auth')}>
                Become a member (free)
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/concierge">Get the full $99 brief</Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              Membership is free for now while we build the community.
            </p>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-primary py-16">
        <div className="container-narrow">
          <span className="text-accent font-medium text-xs tracking-widest uppercase mb-3 block">
            Members Area
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
            Insider Notes
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            One short brief per island. The stuff we'd only tell a friend.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-6">
            {notes.map((n) => (
              <motion.article
                key={n.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6 shadow-card"
              >
                <div className="flex items-center gap-2 text-accent text-xs font-medium uppercase tracking-wider mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  {destName(n.destination_slug)}
                </div>
                <h2 className="font-serif text-xl font-bold text-foreground mb-4">{n.title}</h2>
                <div className="text-sm">{renderMd(n.content_md)}</div>
                <Link
                  to={`/destinations/${n.destination_slug}`}
                  className="text-accent text-sm font-medium hover:underline mt-2 inline-block"
                >
                  Open destination guide →
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insider;
