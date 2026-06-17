import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Utensils, Star, CheckCircle, Clock, Shield, Loader2, Lock } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const testimonials = [
  { name: 'Maya & Tom', trip: 'Honeymoon, St. Lucia', quote: 'It would have taken us 3 weekends to plan what they delivered in 48 hours. Best $99 we spent on the trip.', stars: 5 },
  { name: 'Daniel R.', trip: 'Family of 5, Turks & Caicos', quote: "Every restaurant they sent us to was perfect. The 'avoid this one tourist trap' note alone earned the fee back.", stars: 5 },
  { name: 'Priya K.', trip: 'Girls trip, Barbados', quote: "Felt like getting a Caribbean-obsessed friend on speed-dial. The shoulder-season tip saved us almost $1,200.", stars: 5 },
];

const conciergeFaqs = [
  { q: 'How is this different from a travel agent?', a: "We don't book your trip — you keep full control. We hand you a complete, opinionated blueprint (where to stay, where to eat, what to skip) with direct booking links, so you can book at your own pace using the best deal you find." },
  { q: 'What if I haven\'t picked an island yet?', a: "That's actually our favorite kind of brief. Tell us your dates, party, and vibe — we'll recommend the best-fit island and explain why." },
  { q: 'When am I charged?', a: "Not today. You submit the form, we confirm we can take the brief, then we send a Stripe link for $99. No charge until we start." },
  { q: 'How fast is delivery?', a: 'Within 48 hours of payment. Most are delivered next-day.' },
  { q: 'What if I need changes?', a: 'One round of revisions is included. Most travelers don\'t need them.' },
  { q: 'Do you take commission on my bookings?', a: 'Some of the links we send may be affiliate links (flights, hotels, tours) — disclosed up front. It never changes the price for you, and we never recommend something just because it pays.' },
];

const sampleDay = {
  title: 'Day 3 — Soufrière deep dive (sample from a real St. Lucia itinerary)',
  blocks: [
    { time: '7:30 AM', text: "Leave Sugar Beach early — the road to Soufrière gets slow after 9. Coffee + croissant at Petit Peak (cash only, $8 USD)." },
    { time: '9:00 AM', text: 'Gros Piton hike with Themba (WhatsApp +1 758 ###-####). Tell him we sent you — he\'ll meet you at the trailhead and skip the visitor center line. Allow 4 hours round trip, moderate fitness.' },
    { time: '2:00 PM', text: "Lunch at Orlando's. Skip the printed menu — ask for the Creole tasting (3 courses, ~$45). Order the breadfruit gnocchi." },
    { time: '4:00 PM', text: 'Sulphur Springs mud bath — go to the lower pools, not the upper tourist deck. Bring a swimsuit you\'re okay ruining.' },
    { time: '7:30 PM', text: 'Sunset at Ladera Resort\'s open-air bar. Non-guests welcome until 9 PM. Order the Piton Mary.' },
  ],
};




const whatYouGet = [
  { icon: Calendar, text: 'A custom 7-day daily itinerary built around your exact travel dates and vibe' },
  { icon: MapPin, text: 'Secret beaches, scenic drives, and off-the-beaten-path locations the resorts don\'t tell you about' },
  { icon: Utensils, text: 'A vetted restaurant list — from fine dining to the best local rum shack, curated to your taste' },
  { icon: Star, text: 'Direct booking links for every single recommendation so you can book in minutes' },
  { icon: Shield, text: 'Our personal "What to Pack" checklist tailored to your island and season' },
  { icon: Clock, text: 'Delivered to your inbox within 48 hours of submitting your intake form' },
];

const Concierge = () => {
  const [formData, setFormData] = useState({ name: '', email: '', island: '', dates: '', partySize: '', budget: '', vibe: '' });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({ title: "Please fill in your name and email", variant: "destructive" });
      return;
    }
    setIsLoading(true);
    try {
      // Store lead in newsletter_subscribers for now
      await supabase.from('newsletter_subscribers').insert({ email: formData.email.trim().toLowerCase() });
      setIsSubmitted(true);
      toast({ title: "Request received! 🎉", description: "We'll be in touch within 24 hours to finalize your itinerary." });
    } catch {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const ld = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: 'Numada Caribbean Concierge',
          provider: { '@type': 'Organization', name: 'NumadaTravel' },
          description: 'Custom 7-day Caribbean itinerary delivered within 48 hours.',
          offers: { '@type': 'Offer', price: '99', priceCurrency: 'USD' },
          areaServed: 'Caribbean',
        },
        {
          '@type': 'FAQPage',
          mainEntity: conciergeFaqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        },
      ],
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(ld);
    document.head.appendChild(script);
    document.title = 'Caribbean Concierge — Custom Itinerary in 48h | NumadaTravel';
    return () => { script.remove(); };
  }, []);


  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent font-medium text-sm tracking-widest uppercase mb-4 block"
          >
            Premium Service
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
          >
            Your Dream Caribbean Trip,{' '}
            <span className="italic text-accent">Planned for You.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Stop drowning in browser tabs. We'll build your perfect Caribbean itinerary so you can close the laptop and start packing.
          </motion.p>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Sound Familiar?
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>You've got <strong className="text-foreground">50 browser tabs</strong> open. Three Reddit threads bookmarked. A half-finished Google Doc of "places to check out."</p>
                <p>You <em>know</em> you want to go to the Caribbean, but you're terrified of booking the wrong resort, missing the best beach, or paying tourist-trap prices for a mediocre experience.</p>
                <p>You have the money and the vacation days. What you don't have is <strong className="text-foreground">time</strong>.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-destructive/5 rounded-2xl p-8 border border-destructive/10"
            >
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">The Research Spiral:</h3>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  '"Is this resort actually good or just well-marketed?"',
                  '"Which side of the island should I stay on?"',
                  '"Will this tour be a tourist trap?"',
                  '"Am I paying too much for flights?"',
                  '"Do I really need travel insurance?"',
                ].map((q, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✗</span>
                    <span className="text-sm">{q}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-cream-dark">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              What You Get with The Numada Concierge
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg max-w-xl mx-auto"
            >
              A complete, ready-to-book Caribbean blueprint built around your exact vibe — for just <strong className="text-foreground">$99</strong>.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {whatYouGet.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border shadow-card">
                <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <p className="text-foreground text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Intake Form */}
      <section className="section-padding bg-background" id="book">
        <div className="container-narrow">
          <div className="max-w-lg mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-card"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
                Get Your Custom Itinerary
              </h2>
              <p className="text-muted-foreground text-center mb-6">
                Takes 2 minutes. Delivered in 48 hours.
              </p>

              {/* Trust signals */}
              <div className="flex items-center justify-center gap-4 mb-8 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><Lock className="w-3 h-3" /> Secure</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> 48h delivery</span>
                <span className="flex items-center gap-1.5"><Shield className="w-3 h-3" /> No charge today</span>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">We're on it!</h3>
                  <p className="text-muted-foreground">
                    Check your inbox — we'll be in touch within 24 hours to finalize your Caribbean blueprint.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Your Name *</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sarah & James"
                        className="h-12"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="h-12"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Which island(s)?</label>
                    <Input
                      value={formData.island}
                      onChange={(e) => setFormData({ ...formData, island: e.target.value })}
                      placeholder="e.g. St. Lucia, or open to suggestions"
                      className="h-12"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Travel dates</label>
                      <Input
                        value={formData.dates}
                        onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                        placeholder="March 15–22, 2026"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Party size</label>
                      <Select value={formData.partySize} onValueChange={(v) => setFormData({ ...formData, partySize: v })}>
                        <SelectTrigger className="h-12"><SelectValue placeholder="Select…" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="solo">Solo</SelectItem>
                          <SelectItem value="couple">Couple</SelectItem>
                          <SelectItem value="family">Family (3–5)</SelectItem>
                          <SelectItem value="group">Group (6+)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Approximate budget (excl. flights)</label>
                    <Select value={formData.budget} onValueChange={(v) => setFormData({ ...formData, budget: v })}>
                      <SelectTrigger className="h-12"><SelectValue placeholder="Select a range…" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-3k">Under $3,000</SelectItem>
                        <SelectItem value="3-6k">$3,000 – $6,000</SelectItem>
                        <SelectItem value="6-10k">$6,000 – $10,000</SelectItem>
                        <SelectItem value="10k+">$10,000+</SelectItem>
                        <SelectItem value="flexible">Flexible / no limit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Describe your dream trip</label>
                    <Textarea
                      value={formData.vibe}
                      onChange={(e) => setFormData({ ...formData, vibe: e.target.value })}
                      placeholder="Romantic + adventurous. Love snorkeling, hate crowded resorts. We're foodies — would love a rum distillery tour…"
                      className="min-h-[110px]"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full mt-2" disabled={isLoading}>
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Build My Itinerary — $99
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-3">
                    You'll receive payment instructions after we confirm your request. No charge until we start.
                  </p>
                </form>
              )}

            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Concierge;
