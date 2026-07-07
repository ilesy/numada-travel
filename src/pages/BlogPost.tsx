import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { AffiliateCTAGroup, AffiliateCategory } from '@/components/AffiliateCTAGroup';
import heroDefault from '@/assets/home/hero-pitons.jpg';
import waterImg from '@/assets/home/hero-water.jpg';
import coverImg from '@/assets/home/hero-cover.jpg';
import stLuciaImg from '@/assets/destinations/st-lucia.jpg';
import barbadosImg from '@/assets/destinations/barbados.jpg';
import turksImg from '@/assets/destinations/turks-caicos.jpg';
import antiguaImg from '@/assets/destinations/antigua.jpg';
import jamaicaImg from '@/assets/destinations/jamaica.jpg';
import svgImg from '@/assets/destinations/svg.jpg';

type AffBlock = { affiliate: { category: AffiliateCategory; destinationName: string; airportCode?: string } };
type Block =
  | { heading: string }
  | { paragraph: string }
  | { list: string[] }
  | { image: string; alt: string; caption?: string }
  | { table: { headers: string[]; rows: string[][] } }
  | AffBlock;

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  hero: string;
  body: Block[];
};

const posts: Record<string, Post> = {
  'st-lucia-vs-barbados': {
    slug: 'st-lucia-vs-barbados',
    title: 'St. Lucia vs. Barbados: Which Caribbean Island Is Right for Your First Trip?',
    excerpt: "Two iconic islands, two very different vacations. A detailed head-to-head — beaches, food, cost, vibe — to help you pick the right one.",
    category: 'Destination Comparison',
    readTime: '12 min read',
    date: 'Jun 18, 2026',
    hero: stLuciaImg,
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

      { image: barbadosImg, alt: 'Barbados fishing boat at golden hour', caption: 'Barbados — the platinum coast at golden hour.' },

      { heading: 'Beaches: it depends what "beach" means to you' },
      { paragraph: "St. Lucia's beaches are scenic but limited. Sugar Beach and Anse Chastanet are stunners, but they're small, often resort-controlled, and the road between them is slow. If you want to walk a long stretch of sand at sunset, you'll find one or two spots." },
      { paragraph: "Barbados is a beach country. The platinum west coast (Mullins, Holetown) is calm and turquoise; the south coast (Dover, Worthing) has surfable swell and the best beach bars; the east coast (Bathsheba) is wild and photogenic. You can sample three coasts in a day." },

      { heading: 'Where to stay in each' },
      { paragraph: "St. Lucia is dominated by all-inclusives — Sandals runs three properties, and Jade Mountain and BodyHoliday round out the aspirational tier. In Barbados, we usually skip the all-inclusive and book a boutique or villa on the west coast." },
      { affiliate: { category: 'stays', destinationName: 'St. Lucia' } },
      { affiliate: { category: 'stays', destinationName: 'Barbados' } },

      { heading: 'Food: this is not close' },
      { paragraph: "Barbados is one of the best food islands in the Caribbean. Friday-night fish fry at Oistins is essential. The Cliff and Champers anchor a serious fine-dining scene. Local cou-cou, flying fish, and macaroni pie are genuinely worth flying for." },
      { paragraph: "St. Lucia's food is solid but heavily resort-mediated. Outside a few standouts — Orlando's in Soufrière, Jacques Waterfront in Rodney Bay — most meals happen at your hotel. Plan accordingly." },

      { heading: 'Adventure & nature' },
      { paragraph: "St. Lucia wins this one decisively. Gros Piton is a moderate, doable half-day hike with a guide, and the view from the top is the kind that ends up framed in your hallway. Sulphur Springs (drive-in volcano), Diamond Botanical Gardens, and the rainforest zip-lines round out a real itinerary." },
      { paragraph: "Barbados has Harrison's Cave, the Animal Flower Cave, and good surfing — but if 'hiking volcanoes' is on your list, it's not the right island." },
      { affiliate: { category: 'activities', destinationName: 'St. Lucia' } },
      { affiliate: { category: 'activities', destinationName: 'Barbados' } },

      { heading: "What it costs" },
      { paragraph: "Direct flights from the US East Coast are nearly identical (~4–5 hours, $400–$700 round-trip depending on season). The real cost difference is on the ground." },
      { list: [
        'St. Lucia mid-range resort: ~$350–$550/night',
        'Barbados mid-range hotel/villa: ~$250–$450/night',
        'St. Lucia dinner out: $60–$120 for two',
        'Barbados dinner out: $40–$100 for two — Oistins is $25/pp, Cliff is $300/pp',
        'Inter-island transfer: Barbados is far cheaper because nothing is far',
      ] },
      { paragraph: "Rule of thumb: a Barbados week costs about 15–20% less than the equivalent St. Lucia week, mostly because of transport and dining." },
      { affiliate: { category: 'flights', destinationName: 'St. Lucia', airportCode: 'UVF' } },
      { affiliate: { category: 'flights', destinationName: 'Barbados', airportCode: 'BGI' } },

      { heading: 'When to go' },
      { paragraph: "Both islands share the dry season (December–April) as peak. Our preferred window for either is mid-May to mid-June: weather is still excellent, prices drop ~30%, and you've slipped in before hurricane season." },

      { heading: 'Protect the trip' },
      { paragraph: "Both islands sit at the southern edge of the hurricane track, but Barbados is statistically safer. Insurance is worth it either way once you're spending $3k+ on a trip." },
      { affiliate: { category: 'insurance', destinationName: 'the Caribbean' } },

      { heading: 'The honest verdict' },
      { paragraph: "Pick St. Lucia if your trip is built around two things: a dramatic view and quiet downtime with one person. The Pitons, a good resort, and few obligations — that's the formula." },
      { paragraph: "Pick Barbados if you want variety: beaches with different vibes, dinner reservations to look forward to, and the option to walk somewhere lively at night." },
    ],
  },

  'best-caribbean-island-for-honeymoon': {
    slug: 'best-caribbean-island-for-honeymoon',
    title: 'The Best Caribbean Island for Your Honeymoon (2026 Guide)',
    excerpt: "St. Lucia, Turks & Caicos, or the Grenadines? We break down which Caribbean island fits your honeymoon style — with real prices, real trade-offs, and where to actually stay.",
    category: 'Honeymoon',
    readTime: '10 min read',
    date: 'Jul 02, 2026',
    hero: turksImg,
    body: [
      { paragraph: "Every honeymoon guide online tells you the same three islands: St. Lucia, Turks & Caicos, and 'somewhere in the Grenadines'. They're not wrong — but they never tell you the trade-offs. Here's the honest breakdown after planning honeymoons for the last four years." },

      { heading: 'The three real contenders' },
      { paragraph: "For a first honeymoon, only three islands consistently deliver: St. Lucia (drama and privacy), Turks & Caicos (beach perfection), and St. Vincent & the Grenadines (barefoot luxury). Everything else is a compromise on one of those." },

      { heading: 'St. Lucia — for the postcard' },
      { image: stLuciaImg, alt: 'St. Lucia Marigot Bay at golden hour' },
      { paragraph: "If your honeymoon fantasy has a mountain view, it's probably St. Lucia. The Pitons frame every meal at Jade Mountain, Sugar Beach, and Ladera. Downside: you'll spend a lot of time at the resort — the roads are slow and the beaches outside Sugar Beach are underwhelming." },
      { paragraph: "Budget: $4,500–$8,000 for 7 nights, mid-range to upscale, excluding flights." },
      { affiliate: { category: 'stays', destinationName: 'St. Lucia' } },

      { heading: 'Turks & Caicos — for the beach' },
      { image: turksImg, alt: 'Grace Bay Turks & Caicos at golden hour' },
      { paragraph: "Grace Bay is the best beach on Earth by nearly every ranking, and the entire island is built around one thing: turquoise water and white sand. Amanyara, COMO Parrot Cay, and Grace Bay Club anchor the honeymoon tier. Downside: it's flat and low on culture — you're here for the beach, not the island." },
      { paragraph: "Budget: $5,000–$10,000 for 7 nights. TCI is expensive." },
      { affiliate: { category: 'stays', destinationName: 'Turks & Caicos' } },
      { affiliate: { category: 'flights', destinationName: 'Turks & Caicos', airportCode: 'PLS' } },

      { heading: 'The Grenadines — for barefoot luxury' },
      { image: svgImg, alt: 'Tobago Cays aerial from above' },
      { paragraph: "If you want to feel like you've disappeared, the Grenadines is the answer. Petit St. Vincent, Palm Island, and Mustique are private-island resorts with no wifi, no crowds, and unbeatable snorkeling in the Tobago Cays. Downside: getting there is a project — expect a connecting regional flight or a private boat." },
      { paragraph: "Budget: $6,000–$15,000 for 7 nights. Wide range depending on which island." },
      { affiliate: { category: 'stays', destinationName: 'Bequia' } },
      { affiliate: { category: 'activities', destinationName: 'Grenadines' } },

      { heading: "Side-by-side" },
      { table: {
        headers: ['', 'St. Lucia', 'Turks & Caicos', 'Grenadines'],
        rows: [
          ['Best for', 'Scenery + all-inclusive', 'Beach + spa', 'Total escape'],
          ['Ease of arrival', 'Direct flights, 4–5h', 'Direct flights, 3h from Miami', 'One connection + boat'],
          ['Beach quality', 'Good, small', 'Best in world', 'Empty, pristine'],
          ['Vibe', 'Romantic drama', 'Relaxed luxury', 'Barefoot exclusive'],
          ['Typical budget (7n)', '$4.5–8k', '$5–10k', '$6–15k'],
        ],
      } },

      { heading: 'Get the trip protected' },
      { paragraph: "A honeymoon is the one trip where insurance is non-negotiable. If a hurricane rolls in the week before, cancel-for-any-reason coverage saves you thousands." },
      { affiliate: { category: 'insurance', destinationName: 'the Caribbean' } },

      { heading: 'The Numada pick' },
      { paragraph: "If you can only pick one on your first Caribbean honeymoon: Turks & Caicos. It's the easiest, the most reliably beautiful, and the least likely to disappoint. Save St. Lucia and the Grenadines for the second and third trips — because you will absolutely be back." },
    ],
  },

  'hidden-caribbean-beaches': {
    slug: 'hidden-caribbean-beaches',
    title: "Eight Hidden Caribbean Beaches Locals Actually Love",
    excerpt: "The Caribbean's best beaches don't show up on Instagram. Eight locals-only spots — where they are, how to reach them, and where to stay nearby.",
    category: 'Beaches',
    readTime: '9 min read',
    date: 'Jun 28, 2026',
    hero: waterImg,
    body: [
      { paragraph: "The Caribbean's most famous beaches — Grace Bay, Seven Mile, Eagle Beach — are famous for a reason. But if you've done those, or you just don't want to share your beach with 400 cruise passengers, here are eight beaches locals still keep for themselves." },

      { heading: '1. Anse Cochon, St. Lucia' },
      { paragraph: "A small horseshoe of dark sand on St. Lucia's west coast, reachable only by boat or a rough 4x4 track. The snorkeling right off the beach is the best on the island." },
      { affiliate: { category: 'stays', destinationName: 'St. Lucia west coast' } },

      { heading: '2. Foul Bay, Barbados' },
      { paragraph: "Not the marketing name Barbados wants, but locals love it. Long, wild, mostly empty east-coast beach south of Crane. Rough for swimming, perfect for a barefoot walk at sunset." },

      { heading: '3. Petit Tabac, Grenadines' },
      { image: svgImg, alt: 'Tobago Cays sandbar', caption: 'The Grenadines — where the beaches have no addresses.' },
      { paragraph: "The sandbar where Pirates of the Caribbean was filmed. Only reachable by charter or catamaran day-trip from Union Island. No infrastructure — bring your own everything." },
      { affiliate: { category: 'activities', destinationName: 'Grenadines' } },

      { heading: '4. Pigeon Point, Tobago' },
      { paragraph: "A postcard palm-lined jetty over turquoise water. Locals go early — before the day-trippers arrive around 11." },

      { heading: '5. Half Moon Bay, Antigua' },
      { image: antiguaImg, alt: 'Antigua half moon shape beach' },
      { paragraph: "One of Antigua's 365 beaches, but the horseshoe shape and lack of hotels keep the crowds down. Bring a picnic — no restaurants." },
      { affiliate: { category: 'stays', destinationName: 'Antigua' } },

      { heading: '6. Frenchman\'s Cove, Jamaica' },
      { image: jamaicaImg, alt: 'Jamaica jungle waterfall meeting sea' },
      { paragraph: "Portland parish, near Port Antonio — a freshwater river runs into the sea across a perfect crescent of white sand. $10 entry, worth every penny." },
      { affiliate: { category: 'stays', destinationName: 'Port Antonio Jamaica' } },

      { heading: '7. Governor\'s Beach, Grand Turk' },
      { paragraph: "Cruise ships get dropped 15 minutes away but rarely make it here. Empty, powdery sand, calm turquoise water." },

      { heading: '8. Little Bay, Anguilla' },
      { paragraph: "A tiny cove reachable only by kayak from Crocus Bay. Snorkeling is spectacular. Bring your own everything — there's not even a shack." },
      { affiliate: { category: 'stays', destinationName: 'Anguilla' } },

      { heading: 'How to get to any of them' },
      { paragraph: "Most of these need an inter-island hop and a car rental. Book flights early — small Caribbean carriers sell out fast." },
      { affiliate: { category: 'flights', destinationName: 'the Caribbean' } },
      { affiliate: { category: 'insurance', destinationName: 'the Caribbean' } },
    ],
  },

  'best-time-to-visit-caribbean': {
    slug: 'best-time-to-visit-caribbean',
    title: 'Best Time to Visit the Caribbean: A Month-by-Month Guide',
    excerpt: 'Navigate hurricane season, peak prices, and festivals with our seasonal breakdown of every Caribbean island.',
    category: 'Planning',
    readTime: '8 min read',
    date: 'Apr 15, 2026',
    hero: coverImg,
    body: [
      { paragraph: "The Caribbean has two truths: the weather is rarely 'bad' anywhere, and the price difference between months can be more than double. Picking the right window is the single biggest lever you have on trip cost." },
      { heading: 'December – April: Peak season' },
      { paragraph: "Driest, sunniest, most reliable. Also the most expensive. Book 4–6 months ahead." },
      { affiliate: { category: 'stays', destinationName: 'the Caribbean' } },
      { heading: 'May – June: The sweet spot' },
      { paragraph: "Our favorite window. Weather is still excellent, prices drop 20–40%." },
      { affiliate: { category: 'flights', destinationName: 'the Caribbean' } },
      { heading: 'July – August: Carnival season' },
      { paragraph: "Hot and humid with afternoon showers, but this is when the islands come alive. Crop Over in Barbados, Spicemas in Grenada, Carnival in St. Lucia and Antigua." },
      { heading: 'September – early November: Hurricane peak' },
      { paragraph: "Cheapest but riskiest. If you go now, choose southern islands (Aruba, Curaçao, Grenada, Barbados) which sit outside the main hurricane track — and always buy travel insurance." },
      { affiliate: { category: 'insurance', destinationName: 'the Caribbean' } },
      { heading: 'Mid-November – mid-December: Hidden gem' },
      { paragraph: "Hurricane season is effectively over but holiday pricing hasn't kicked in. Our top recommendation for first-timers." },
    ],
  },

  'island-hopping-101': {
    slug: 'island-hopping-101',
    title: 'Island Hopping 101: Planning a Multi-Island Caribbean Trip',
    excerpt: 'How to combine multiple destinations into one unforgettable adventure — flights, ferries, timing, and which islands actually connect.',
    category: 'Planning', readTime: '15 min read', date: 'Apr 8, 2026',
    hero: coverImg,
    body: [
      { paragraph: "Island hopping sounds dreamy until you realize 'Caribbean' is bigger than 'Europe' on a map. The trick isn't fitting more in — it's picking islands that are actually well-connected." },
      { heading: 'The four hop-friendly clusters' },
      { list: [
        'Eastern Caribbean: St. Lucia → St. Vincent → Grenada',
        'Leeward: Antigua → St. Kitts → Anguilla',
        'BVI/USVI: Tortola → St. John → St. Thomas (ferries, $30–$50)',
        'Bahamas Out Islands: Nassau → Exuma → Eleuthera',
      ] },
      { affiliate: { category: 'flights', destinationName: 'Caribbean regional' } },
      { heading: 'The 2–3 island rule' },
      { paragraph: "For a 7–10 day trip, never do more than 3 islands. Travel days eat ~5 hours each. Two islands at 4–5 nights each is the sweet spot." },
      { affiliate: { category: 'stays', destinationName: 'the Caribbean' } },
      { affiliate: { category: 'insurance', destinationName: 'the Caribbean' } },
    ],
  },

  'caribbean-on-a-budget': {
    slug: 'caribbean-on-a-budget',
    title: 'Caribbean on a Budget: Travel Smart Without Sacrificing Style',
    excerpt: 'Insider tips for experiencing luxury Caribbean vibes without breaking the bank — under $1,500/person/week.',
    category: 'Budget Travel', readTime: '10 min read', date: 'Mar 28, 2026',
    hero: waterImg,
    body: [
      { paragraph: "You don't need an all-inclusive to do the Caribbean well. Here's how we keep trips under $1,500/person/week without ever feeling like we're roughing it." },
      { heading: '1. Pick the right island' },
      { paragraph: "The Dominican Republic, Jamaica, and Puerto Rico are dramatically cheaper than Turks & Caicos or St. Barts. Same Caribbean sea, half the price." },
      { affiliate: { category: 'stays', destinationName: 'Dominican Republic' } },
      { heading: '2. Travel May or November' },
      { paragraph: "Shoulder-season pricing routinely beats peak by 40–60%, with weather that's 90% as good." },
      { affiliate: { category: 'flights', destinationName: 'the Caribbean' } },
      { heading: '3. Book apartments, not resorts' },
      { paragraph: "A kitchen lets you do breakfast and lunch from a local supermarket. Cuts trip cost by ~$40/person/day." },
      { affiliate: { category: 'stays', destinationName: 'the Caribbean' } },
    ],
  },
};

const isAff = (b: Block): b is AffBlock => (b as AffBlock).affiliate !== undefined;

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? posts[slug] : undefined;

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!post) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-serif text-4xl text-foreground mb-4">Article coming soon</h1>
          <p className="text-muted-foreground mb-6 max-w-md">We're publishing this one shortly.</p>
          <Button asChild variant="outline"><Link to="/blog">Back to the Journal</Link></Button>
        </div>
      </Layout>
    );
  }

  const ldArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'NumadaTravel' },
    publisher: { '@type': 'Organization', name: 'NumadaTravel' },
    image: post.hero,
  };

  return (
    <Layout>
      <Helmet>
        <title>{post.title} — NumadaTravel</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`/blog/${post.slug}`} />
        <script type="application/ld+json">{JSON.stringify(ldArticle)}</script>
      </Helmet>

      <article className="bg-background">
        {/* Editorial masthead */}
        <section className="relative bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <img src={post.hero} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/40" />
          </div>
          <div className="container-narrow relative py-20 md:py-28">
            <Link to="/blog" className="inline-flex items-center text-primary-foreground/80 hover:text-accent mb-8 text-xs uppercase tracking-[0.25em]">
              <ArrowLeft className="w-3 h-3 mr-2" /> The Journal
            </Link>
            <div className="text-[10px] tracking-[0.35em] uppercase text-accent font-semibold mb-6">{post.category}</div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl md:text-6xl leading-[1.05] mb-8">
              {post.title}
            </motion.h1>
            <div className="flex flex-wrap items-center gap-6 text-primary-foreground/70 text-xs uppercase tracking-widest">
              <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
              <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container-narrow max-w-3xl">
            <p className="font-serif italic text-2xl md:text-3xl text-foreground/90 leading-snug mb-12 border-l-2 border-accent pl-6">
              {post.excerpt}
            </p>

            <div className="space-y-6 text-foreground/90 text-lg leading-relaxed">
              {post.body.map((block, i) => {
                if (isAff(block)) {
                  return <AffiliateCTAGroup key={i} {...block.affiliate} />;
                }
                if ('heading' in block) {
                  return <h2 key={i} className="font-serif text-3xl md:text-4xl italic text-foreground mt-14 mb-4">{block.heading}</h2>;
                }
                if ('paragraph' in block) {
                  return <p key={i} className="whitespace-pre-line">{block.paragraph}</p>;
                }
                if ('image' in block) {
                  return (
                    <figure key={i} className="my-10 -mx-4 md:mx-0">
                      <img src={block.image} alt={block.alt} loading="lazy" className="w-full aspect-[3/2] object-cover" />
                      {block.caption && <figcaption className="text-xs italic text-muted-foreground mt-2 text-center">{block.caption}</figcaption>}
                    </figure>
                  );
                }
                if ('list' in block) {
                  return (
                    <ul key={i} className="space-y-2 list-none pl-0">
                      {block.list.map((li, j) => (
                        <li key={j} className="flex gap-3 text-base"><span className="text-accent mt-1">→</span>{li}</li>
                      ))}
                    </ul>
                  );
                }
                if ('table' in block) {
                  return (
                    <div key={i} className="overflow-x-auto -mx-4 md:mx-0 my-8">
                      <table className="w-full text-sm border border-border">
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
                                <td key={ci} className={`p-3 align-top text-sm ${ci === 0 ? 'font-medium text-foreground bg-muted/30' : 'text-muted-foreground'}`}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }
                return null;
              })}
            </div>

            {/* Related */}
            <div className="mt-16 pt-8 border-t border-border">
              <div className="text-[10px] tracking-[0.3em] uppercase text-accent font-semibold mb-4">Keep reading</div>
              <div className="grid sm:grid-cols-2 gap-6">
                {Object.values(posts).filter((p) => p.slug !== post.slug).slice(0, 2).map((p) => (
                  <Link key={p.slug} to={`/blog/${p.slug}`} className="group">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{p.category}</div>
                    <div className="font-serif text-xl text-foreground group-hover:text-accent transition-colors">{p.title}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-cream-dark">
          <div className="container-narrow text-center">
            <h2 className="font-serif italic text-3xl md:text-4xl text-foreground mb-4">Not sure which island fits?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Take the 60-second quiz — we'll match you to the Caribbean island built for your travel style.</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/quiz">Take the Island Quiz <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default BlogPost;
