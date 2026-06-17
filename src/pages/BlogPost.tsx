import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  body: { heading?: string; paragraph?: string; list?: string[] }[];
};

const posts: Record<string, Post> = {
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
      { paragraph: "Driest, sunniest, most reliable. Also the most expensive — Christmas, New Year and February school break are eye-watering. If you want guaranteed weather and don't mind crowds, this is your window. Book 4–6 months ahead." },
      { heading: 'May – June: The sweet spot' },
      { paragraph: "Our favorite window. Weather is still excellent, prices drop 20–40%, and hurricane season has barely started. Bonus: Barbados Crop Over warm-up events and Cayman Cookout (May) make this culturally exciting too." },
      { heading: 'July – August: Carnival season' },
      { paragraph: "Hot and humid, with afternoon showers, but this is when the islands come alive. Crop Over in Barbados, Spicemas in Grenada, and Carnival in St. Lucia and Antigua. If you want culture over calm, this is unbeatable." },
      { heading: 'September – early November: Hurricane peak' },
      { paragraph: "Cheapest but riskiest. If you go now, choose southern islands (Aruba, Curaçao, Grenada, Barbados) which sit outside the main hurricane track, and always buy travel insurance with trip-interruption coverage." },
      { heading: 'Mid-November – mid-December: Hidden gem' },
      { paragraph: "Hurricane season is effectively over but holiday pricing hasn't kicked in. You get peak-season weather at shoulder-season prices. Our top recommendation for first-timers." },
    ],
  },
  'island-hopping-101': {
    slug: 'island-hopping-101',
    title: 'Island Hopping 101: Planning a Multi-Island Caribbean Trip',
    excerpt: 'How to combine multiple destinations into one unforgettable adventure — ferries, regional flights, and timing tips.',
    category: 'Planning',
    readTime: '15 min read',
    date: 'Apr 8, 2026',
    image: '✈️',
    body: [
      { paragraph: "Island hopping sounds dreamy until you realize 'Caribbean' is bigger than 'Europe' on a map. The trick isn't fitting more in — it's picking islands that are actually well-connected." },
      { heading: 'The four hop-friendly clusters' },
      { list: [
        'Eastern Caribbean: St. Lucia → St. Vincent → Grenada (LIAT, regional ferries)',
        'Leeward: Antigua → St. Kitts → Anguilla (SeaBus, short flights)',
        'BVI/USVI: Tortola → St. John → St. Thomas (frequent ferries, $30–$50)',
        'Bahamas Out Islands: Nassau → Exuma → Eleuthera (Bahamasair, Makers Air)',
      ] },
      { heading: 'The 2–3 island rule' },
      { paragraph: "For a 7–10 day trip, never do more than 3 islands. Travel days eat ~5 hours each (boat, security, transfer). Two islands at 4–5 nights each is the sweet spot." },
      { heading: 'Book inter-island travel first' },
      { paragraph: "Regional schedules are limited. Book the hop, then book the hotels around it — not the other way around." },
    ],
  },
  'caribbean-on-a-budget': {
    slug: 'caribbean-on-a-budget',
    title: 'Caribbean on a Budget: How to Travel Smart Without Sacrificing Style',
    excerpt: 'Insider tips for experiencing luxury Caribbean vibes without breaking the bank.',
    category: 'Budget Travel',
    readTime: '10 min read',
    date: 'Mar 28, 2026',
    image: '💰',
    body: [
      { paragraph: "You don't need an all-inclusive to do the Caribbean well. Here's how we keep trips under $1,500/person/week without ever feeling like we're roughing it." },
      { heading: '1. Pick the right island' },
      { paragraph: "The Dominican Republic, Jamaica, and Puerto Rico are dramatically cheaper than Turks & Caicos, St. Barts, or the BVI. Same Caribbean sea, half the price." },
      { heading: '2. Travel May or November' },
      { paragraph: "Shoulder-season pricing on flights and hotels routinely beats peak by 40–60%, with weather that's 90% as good." },
      { heading: '3. Book apartments, not resorts' },
      { paragraph: "An Airbnb with a kitchen lets you do breakfast and lunch from a local supermarket, then splurge on dinner. This single move cuts trip cost by ~$40/person/day." },
      { heading: '4. Eat where locals eat' },
      { paragraph: "Roti shops in Trinidad. Fish fry on Friday in Oistins (Barbados) or Gros Islet (St. Lucia). Cook shops in Jamaica. Better food, a quarter of the price." },
    ],
  },
  'st-vincent-grenadines-guide': {
    slug: 'st-vincent-grenadines-guide',
    title: 'Ultimate Guide to St. Vincent & The Grenadines',
    excerpt: 'Discover the hidden gems of SVG, from the pristine Tobago Cays to the volcanic landscapes of mainland St. Vincent.',
    category: 'Destination Guide',
    readTime: '12 min read',
    date: 'Mar 20, 2026',
    image: '🏝️',
    body: [
      { paragraph: "SVG is what the Caribbean looked like 40 years ago. 32 islands, a fraction of the tourists, and the Tobago Cays — five uninhabited islands inside a marine park that's arguably the most beautiful single spot in the entire region." },
      { heading: 'How to structure a week' },
      { paragraph: "2 nights mainland St. Vincent (volcano, waterfalls), 3 nights Bequia (beaches, sailing, the most charming island in the chain), and one full-day sail to Tobago Cays. Mustique and Canouan are private/exclusive — skip unless you have a specific connection." },
      { heading: 'Getting there' },
      { paragraph: "Argyle International (SVD) on mainland St. Vincent now has direct flights from Miami and JFK. From there, ferry or short Mustique Airways hop to your island of choice." },
    ],
  },
  'caribbean-food-guide': {
    slug: 'caribbean-food-guide',
    title: 'Caribbean Food Guide: Must-Try Local Dishes on Every Island',
    excerpt: 'From jerk chicken in Jamaica to roti in Trinidad, explore the rich culinary traditions that define the islands.',
    category: 'Food & Culture',
    readTime: '7 min read',
    date: 'Mar 12, 2026',
    image: '🍽️',
    body: [
      { paragraph: "Caribbean food is wildly under-rated. Each island has a signature dish that's worth flying for. Skip the resort buffet and try these." },
      { list: [
        'Jamaica — Jerk pork from a roadside drum, with festival bread',
        'Trinidad — Doubles for breakfast, roti with curried goat for lunch',
        'Barbados — Cou-cou and flying fish (the national dish), pudding & souse on Saturdays',
        'St. Lucia — Green fig and saltfish, bouyon stew',
        'Bahamas — Conch salad made tableside at Potter\'s Cay',
        'Puerto Rico — Mofongo with garlic shrimp; lechón asado in Guavate',
        'Grenada — Oil down (the national dish, slow-cooked in coconut milk)',
      ] },
    ],
  },
  'hidden-caribbean-beaches': {
    slug: 'hidden-caribbean-beaches',
    title: "10 Hidden Caribbean Beaches You've Never Heard Of",
    excerpt: 'Skip the crowds and discover pristine shores known mostly to locals — and how to actually get to them.',
    category: 'Beaches',
    readTime: '6 min read',
    date: 'Mar 3, 2026',
    image: '🏖️',
    body: [
      { paragraph: "Every list of 'best Caribbean beaches' is the same: Grace Bay, Seven Mile, Pink Sands. Here are 10 we send people to instead." },
      { list: [
        'Petit Tabac, Tobago Cays (SVG) — the Pirates of the Caribbean island, accessible only by boat',
        'Loblolly Beach, Anegada (BVI) — empty even in peak season',
        'Sandy Island, Carriacou (Grenada) — a sandbar with three palm trees',
        'Cinnamon Bay, St. John (USVI) — inside a national park',
        'Pinney\'s Beach, Nevis — four miles of soft sand, almost nobody on it',
        'Anse Major, Mahé (Seychelles-ish vibes in SVG\'s Mayreau)',
        'Macaroni Beach, Mustique — public, even though Mustique isn\'t',
        'Shoal Bay East, Anguilla — the locals\' favorite',
        'Playa Rincón, DR (Samaná) — voted top-10 globally, almost no infrastructure',
        'Half Moon Bay, Antigua — perfect crescent, zero development',
      ] },
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
          <h1 className="font-serif text-3xl text-foreground mb-4">Article not found</h1>
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
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground mb-4"
            >
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
                  {block.paragraph && <p>{block.paragraph}</p>}
                  {block.list && (
                    <ul className="space-y-2 list-disc pl-6">
                      {block.list.map((li, j) => <li key={j}>{li}</li>)}
                    </ul>
                  )}
                </div>
              ))}
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
