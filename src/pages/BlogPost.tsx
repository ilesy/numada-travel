import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

type Block = { heading?: string; paragraph?: string; list?: string[]; table?: { headers: string[]; rows: string[][] } };

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  body: Block[];
};

const posts: Record<string, Post> = {
  'st-lucia-vs-barbados': {
    slug: 'st-lucia-vs-barbados',
    title: 'St. Lucia vs. Barbados: Which Caribbean Island Is Right for Your First Trip?',
    excerpt: "Two iconic islands, two very different vacations. A detailed head-to-head — beaches, food, cost, vibe — to help you pick the right one your first time.",
    category: 'Destination Comparison',
    readTime: '12 min read',
    date: 'Jun 18, 2026',
    image: '🏝️',
    body: [
      { paragraph: "If you've narrowed your first Caribbean trip down to St. Lucia or Barbados, you've already done the hard part — both are excellent. They're also dramatically different, and the right pick depends almost entirely on what you actually want from your week off." },
      { paragraph: "We've spent more than 60 nights between them over the last decade. Here's the honest comparison, with no resort affiliations in the way." },

      { heading: 'The 30-second answer' },
      { paragraph: "Go to St. Lucia for the scenery — the Pitons are the most photographed view in the Caribbean for a reason, and the island feels lush, dramatic, and a little adventurous. Go to Barbados for the culture, food, and easy good time — flat-ish, breezy, and far more developed, with the best dining scene in the region." },
      { paragraph: "Couples who want a honeymoon-y, postcard backdrop usually pick St. Lucia. Friends or families who want beach days, casual dinners, and a lively island feel usually pick Barbados." },

      { heading: 'Side-by-side: the things that matter' },
      { table: {
        headers: ['', 'St. Lucia', 'Barbados'],
        rows: [
          ['Best for', 'Honeymoons, dramatic scenery, adventure', 'Foodies, families, social travelers'],
          ['Beaches', 'Volcanic black sand + a few white-sand gems', 'Long white-sand beaches all around the west and south'],
          ['Hike-able?', 'Yes — Gros Piton, rainforest trails', 'Not really — flat, with a few coastal walks'],
          ['Food scene', 'Resort-led, improving fast', 'World-class — Oistins, Cliff, fish-fry culture'],
          ['Average resort cost (mid-range, 7 nights)', '$2,800–$4,000', '$2,200–$3,400'],
          ['Crowd density', 'Calmer, fewer cruise ships', 'Busier, more options'],
          ['Flights from NYC', '~4h 30m direct (UVF)', '~4h 30m direct (BGI)'],
          ['Drive times', 'Slow & winding (1h+ each way)', 'Quick & easy (everywhere under 45m)'],
        ],
      } },

      { heading: 'Beaches: it depends what "beach" means to you' },
      { paragraph: "St. Lucia's beaches are scenic but limited. Sugar Beach and Anse Chastanet are stunners, but they're small, often resort-controlled, and the road between them is slow. If you want to walk a long stretch of sand at sunset, you'll find one or two spots." },
      { paragraph: "Barbados is a beach country. The platinum west coast (Mullins, Holetown) is calm and turquoise; the south coast (Dover, Worthing) has surfable swell and the best beach bars; the east coast (Bathsheba) is wild and photogenic. You can sample three coasts in a day." },

      { heading: 'Food: this is not close' },
      { paragraph: "Barbados is one of the best food islands in the Caribbean. Friday-night fish fry at Oistins is essential. The Cliff and Champers anchor a serious fine-dining scene. Local cou-cou, flying fish, and macaroni pie are genuinely worth flying for. Most travelers we send to Barbados return raving about a meal." },
      { paragraph: "St. Lucia's food is solid but heavily resort-mediated. Outside a few standouts — Orlando's in Soufrière, Jacques Waterfront in Rodney Bay — most meals happen at your hotel. Plan accordingly." },

      { heading: 'Adventure & nature' },
      { paragraph: "St. Lucia wins this one decisively. Gros Piton is a moderate, doable half-day hike with a guide, and the view from the top is the kind that ends up framed in your hallway. Sulphur Springs (drive-in volcano), Diamond Botanical Gardens, and the rainforest zip-lines round out a real itinerary." },
      { paragraph: "Barbados has Harrison's Cave, the Animal Flower Cave, and good surfing — but if 'hiking volcanoes' is on your list, it's not the right island." },

      { heading: "What it costs" },
      { paragraph: "Direct flights from the US East Coast are nearly identical (~4–5 hours, $400–$700 round-trip depending on season). The real cost difference is on the ground." },
      { list: [
        'St. Lucia mid-range resort: ~$350–$550/night',
        'Barbados mid-range hotel/villa: ~$250–$450/night',
        'St. Lucia dinner out: $60–$120 for two',
        'Barbados dinner out: $40–$100 for two (huge range — Oistins is $25/pp, Cliff is $300/pp)',
        'Inter-island transfer: Barbados is far cheaper because nothing is far',
      ] },
      { paragraph: "Rule of thumb: a Barbados week costs about 15–20% less than the equivalent St. Lucia week, mostly because of transport and dining." },

      { heading: 'When to go' },
      { paragraph: "Both islands share the dry season (December–April) as peak. Our preferred window for either is mid-May to mid-June: weather is still excellent, prices drop ~30%, and you've slipped in before hurricane season. Both sit on the southern edge of the hurricane track and are statistically safer in shoulder season than islands further north." },

      { heading: 'The honest verdict' },
      { paragraph: "Pick St. Lucia if your trip is built around two things: a dramatic view and quiet downtime with one person. The Pitons, a good resort, and few obligations — that's the formula." },
      { paragraph: "Pick Barbados if you want variety: beaches with different vibes, dinner reservations to look forward to, and the option to walk somewhere lively at night. It's the easier first Caribbean trip and almost always the safer recommendation for groups or families." },
      { paragraph: "Still torn? Most travelers who can't decide are actually describing a multi-island trip. Two short flights from either island, you can spend 4 nights in one and 3 in the other — it's the trip we'd plan for ourselves." },

      { heading: 'Frequently asked' },
      { paragraph: "Q: Is St. Lucia or Barbados safer?\nA: Both are generally very safe for tourists. Use the same common-sense precautions you would at home: don't flash valuables, take licensed taxis at night, don't wander unfamiliar areas after dark. Barbados has a slight edge on petty-crime statistics, but neither is a concern for a normal vacation." },
      { paragraph: "Q: Which has better all-inclusives?\nA: St. Lucia, by a meaningful margin. Sandals (3 properties), Jade Mountain, BodyHoliday — the island's economy leans on all-inclusives. Barbados has fewer and the island is built more around independent restaurants." },
      { paragraph: "Q: Can I do both in one trip?\nA: Yes, with a caveat. There's no direct ferry; you'll need a 45-minute regional flight (~$200 one-way on InterCaribbean). For a 7-night trip, plan 4 + 3 with the longer stay first." },
    ],
  },

  'best-time-to-visit-caribbean': {
    slug: 'best-time-to-visit-caribbean',
    title: 'Best Time to Visit the Caribbean: A Month-by-Month Guide',
    excerpt: 'Navigate hurricane season, peak prices, and festivals with our seasonal breakdown of every Caribbean island.',
    category: 'Planning',
    readTime: '8 min read',
    date: 'Apr 15, 2026',
    image: '📅',
    body: [
      { paragraph: "The Caribbean has two truths: the weather is rarely 'bad' anywhere, and the price difference between months can be more than double. Picking the right window is the single biggest lever you have on trip cost." },
      { heading: 'December – April: Peak season' },
      { paragraph: "Driest, sunniest, most reliable. Also the most expensive — Christmas, New Year and February school break are eye-watering. Book 4–6 months ahead." },
      { heading: 'May – June: The sweet spot' },
      { paragraph: "Our favorite window. Weather is still excellent, prices drop 20–40%, and hurricane season has barely started." },
      { heading: 'July – August: Carnival season' },
      { paragraph: "Hot and humid with afternoon showers, but this is when the islands come alive. Crop Over in Barbados, Spicemas in Grenada, Carnival in St. Lucia and Antigua." },
      { heading: 'September – early November: Hurricane peak' },
      { paragraph: "Cheapest but riskiest. If you go now, choose southern islands (Aruba, Curaçao, Grenada, Barbados) which sit outside the main hurricane track, and always buy travel insurance." },
      { heading: 'Mid-November – mid-December: Hidden gem' },
      { paragraph: "Hurricane season is effectively over but holiday pricing hasn't kicked in. Our top recommendation for first-timers." },
    ],
  },
  'island-hopping-101': {
    slug: 'island-hopping-101', title: 'Island Hopping 101: Planning a Multi-Island Caribbean Trip',
    excerpt: 'How to combine multiple destinations into one unforgettable adventure.',
    category: 'Planning', readTime: '15 min read', date: 'Apr 8, 2026', image: '✈️',
    body: [
      { paragraph: "Island hopping sounds dreamy until you realize 'Caribbean' is bigger than 'Europe' on a map. The trick isn't fitting more in — it's picking islands that are actually well-connected." },
      { heading: 'The four hop-friendly clusters' },
      { list: [
        'Eastern Caribbean: St. Lucia → St. Vincent → Grenada',
        'Leeward: Antigua → St. Kitts → Anguilla',
        'BVI/USVI: Tortola → St. John → St. Thomas (ferries, $30–$50)',
        'Bahamas Out Islands: Nassau → Exuma → Eleuthera',
      ] },
      { heading: 'The 2–3 island rule' },
      { paragraph: "For a 7–10 day trip, never do more than 3 islands. Travel days eat ~5 hours each. Two islands at 4–5 nights each is the sweet spot." },
    ],
  },
  'caribbean-on-a-budget': {
    slug: 'caribbean-on-a-budget', title: 'Caribbean on a Budget: How to Travel Smart Without Sacrificing Style',
    excerpt: 'Insider tips for experiencing luxury Caribbean vibes without breaking the bank.',
    category: 'Budget Travel', readTime: '10 min read', date: 'Mar 28, 2026', image: '💰',
    body: [
      { paragraph: "You don't need an all-inclusive to do the Caribbean well. Here's how we keep trips under $1,500/person/week without ever feeling like we're roughing it." },
      { heading: '1. Pick the right island' },
      { paragraph: "The Dominican Republic, Jamaica, and Puerto Rico are dramatically cheaper than Turks & Caicos or St. Barts. Same Caribbean sea, half the price." },
      { heading: '2. Travel May or November' },
      { paragraph: "Shoulder-season pricing routinely beats peak by 40–60%, with weather that's 90% as good." },
      { heading: '3. Book apartments, not resorts' },
      { paragraph: "A kitchen lets you do breakfast and lunch from a local supermarket. Cuts trip cost by ~$40/person/day." },
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? posts[slug] : undefined;

  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} — NumadaTravel`;
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      author: { '@type': 'Organization', name: 'NumadaTravel' },
    };
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.text = JSON.stringify(ld);
    document.head.appendChild(s);
    return () => { s.remove(); };
  }, [post]);

  if (!post) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-serif text-3xl text-foreground mb-4">Article coming soon</h1>
          <p className="text-muted-foreground mb-6 max-w-md">
            We're publishing this one shortly. In the meantime, our other articles are ready to read.
          </p>
          <Button asChild variant="outline"><Link to="/blog">Back to Journal</Link></Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="bg-background">
        <section className="bg-primary py-16 md:py-20">
          <div className="container-narrow">
            <Link to="/blog" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 text-sm">
              <ArrowLeft className="w-4 h-4 mr-1" /> All articles
            </Link>
            <span className="text-accent font-medium text-xs tracking-widest uppercase mb-3 block">{post.category}</span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              {post.title}
            </motion.h1>
            <div className="flex flex-wrap items-center gap-4 text-primary-foreground/70 text-sm">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</span>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-narrow max-w-2xl">
            <p className="text-xl text-foreground/80 leading-relaxed mb-10 italic">{post.excerpt}</p>
            <div className="space-y-6 text-foreground/90 leading-relaxed">
              {post.body.map((block, i) => (
                <div key={i}>
                  {block.heading && <h2 className="font-serif text-2xl font-bold text-foreground mt-8 mb-3">{block.heading}</h2>}
                  {block.paragraph && <p className="whitespace-pre-line">{block.paragraph}</p>}
                  {block.list && (
                    <ul className="space-y-2 list-disc pl-6">
                      {block.list.map((li, j) => <li key={j}>{li}</li>)}
                    </ul>
                  )}
                  {block.table && (
                    <div className="overflow-x-auto -mx-4 md:mx-0">
                      <table className="w-full text-sm border border-border rounded-lg overflow-hidden my-4">
                        <thead className="bg-cream-dark">
                          <tr>
                            {block.table.headers.map((h, hi) => (
                              <th key={hi} className="text-left p-3 font-semibold text-foreground border-b border-border">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {block.table.rows.map((row, ri) => (
                            <tr key={ri} className="border-b border-border last:border-b-0">
                              {row.map((cell, ci) => (
                                <td key={ci} className={`p-3 align-top ${ci === 0 ? 'font-medium text-foreground bg-muted/30' : 'text-muted-foreground'}`}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 p-5 bg-cream-dark rounded-xl border border-border text-sm text-muted-foreground">
              Related guides:{' '}
              <Link className="text-accent hover:underline" to="/destinations/st-lucia">St. Lucia</Link> ·{' '}
              <Link className="text-accent hover:underline" to="/destinations/barbados">Barbados</Link> ·{' '}
              <Link className="text-accent hover:underline" to="/quiz">Take the island quiz</Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-cream-dark">
          <div className="container-narrow text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">Want a trip planned around this?</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">Skip the research. Get a custom Caribbean itinerary built around your dates, party, and vibe — delivered in 48 hours.</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/concierge">Get My Custom Itinerary <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default BlogPost;
