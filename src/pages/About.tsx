import { useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, PlayCircle, Heart, Globe, Users, Award } from 'lucide-react';
import founderImg from '@/assets/founder.jpg';
import videoPoster from '@/assets/founder-video-poster.jpg';
import { GuaranteeBadge } from '@/components/GuaranteeBadge';

// Optional — set in env when the founder records the intro video.
// e.g. VITE_FOUNDER_VIDEO_ID=dQw4w9WgXcQ
const FOUNDER_VIDEO_ID = import.meta.env.VITE_FOUNDER_VIDEO_ID as string | undefined;

// [REPLACE] — placeholder founder copy. Swap with the real founder name and story.
const FOUNDER_NAME = '[Founder name]';
const FOUNDER_ROLE = 'Founder, NumadaTravel';
const ISLANDS_VISITED = 22;
const YEARS_IN_REGION = 11;

const About = () => {
  useEffect(() => {
    document.title = 'About NumadaTravel — Meet the founder';
  }, []);

  return (
    <Layout>
      {/* Founder hero */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
            <div>
              <span className="text-accent font-medium text-xs tracking-widest uppercase mb-3 block">
                The person behind Numada
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm <span className="italic text-accent">{FOUNDER_NAME}</span>.
              </h1>
              <p className="text-primary-foreground/85 text-lg leading-relaxed mb-5">
                I started NumadaTravel after my tenth Caribbean trip turned into another month of scrolling Reddit at 2&nbsp;AM, comparing 14 nearly-identical resort pages. The Caribbean deserves better than that — and so do the travelers who love it.
              </p>
              <p className="text-primary-foreground/85 text-lg leading-relaxed mb-8">
                Numada is the friend-with-a-spreadsheet I wish I'd had: vetted recommendations, real local guides, and an honest "skip this" list — for the {ISLANDS_VISITED}+ islands I've spent the last {YEARS_IN_REGION} years exploring.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="cta" size="lg" asChild>
                  <a href="mailto:hi@numadatravel.com?subject=Free%2015-min%20call">
                    <Calendar className="w-5 h-5 mr-2" /> Book a free 15-min call
                  </a>
                </Button>
                <Button variant="outline-light" size="lg" asChild>
                  <Link to="/concierge">See the Concierge service</Link>
                </Button>
              </div>
              <p className="text-primary-foreground/60 text-xs mt-4">
                Replies within one business day, usually faster.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-elevated border-4 border-accent/30">
                <img
                  src={founderImg}
                  alt={`${FOUNDER_NAME}, ${FOUNDER_ROLE}`}
                  className="w-full h-full object-cover"
                  loading="eager"
                  width={896}
                  height={1120}
                />
              </div>
              <div className="absolute -bottom-4 left-6 right-6 bg-background text-foreground rounded-xl shadow-card border border-border px-4 py-3 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <div className="text-sm">
                  <div className="font-semibold">{ISLANDS_VISITED}+ islands · {YEARS_IN_REGION} years</div>
                  <div className="text-muted-foreground">Currently writing from Bequia.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 60-second video */}
      <section className="section-padding bg-background">
        <div className="container-narrow max-w-3xl">
          <div className="text-center mb-8">
            <span className="text-accent font-medium text-xs tracking-widest uppercase mb-3 block">
              60 seconds
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Why we started Numada
            </h2>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-primary shadow-elevated">
            {FOUNDER_VIDEO_ID ? (
              <iframe
                src={`https://www.youtube.com/embed/${FOUNDER_VIDEO_ID}`}
                title="Why we started Numada"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <>
                <img
                  src={videoPoster}
                  alt="Caribbean coastline at golden hour"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1280}
                  height={720}
                />
                <div className="absolute inset-0 bg-primary/40 flex flex-col items-center justify-center text-primary-foreground">
                  <PlayCircle className="w-20 h-20 text-accent mb-3" />
                  <p className="font-serif text-lg italic">Intro video coming soon</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream-dark">
        <div className="container-wide">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            What we stand for
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Heart, title: 'Honest first', text: 'We say "skip this" as often as "book this." No paid placement masquerading as a review.' },
              { Icon: Globe, title: 'Local-rooted', text: 'Every recommendation is sourced from someone who actually lives or works on the island.' },
              { Icon: Users, title: 'Small by design', text: 'We cap Concierge briefs so every one gets real attention. Quality over volume.' },
              { Icon: Award, title: 'Stand-behind', text: 'A 7-day money-back guarantee on every paid service. Try it — see for yourself.' },
            ].map(({ Icon, title, text }) => (
              <div key={title} className="bg-card border border-border rounded-xl p-6 shadow-card">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate honesty */}
      <section className="section-padding bg-background">
        <div className="container-narrow max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-6">
            How we're supported
          </h2>
          <div className="bg-muted/30 rounded-xl p-6 md:p-8 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Numada makes money two ways: a small commission when you book through some of our partner links (at no extra cost to you), and the $99 Concierge service.
            </p>
            <p>
              <strong className="text-foreground">Our promise:</strong> we never let a commission decide what we recommend. If a partner pays more but the experience is worse, we send you to the better one — or to a non-affiliate option.
            </p>
          </div>
          <div className="mt-8 max-w-md mx-auto">
            <GuaranteeBadge variant="card" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-narrow text-center text-primary-foreground">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Let's plan your next trip.</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-lg">
            Tell me where you're going — or where you're stuck — and I'll point you at the right next step.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/concierge">Get a custom itinerary <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
            <Button variant="outline-light" size="lg" asChild>
              <Link to="/community">Join the Insiders</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
