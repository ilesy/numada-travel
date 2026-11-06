import { Layout } from '@/components/layout/Layout';

type Section = { h: string; p: string[] };
type Doc = { title: string; intro: string; sections: Section[] };

const UPDATED = 'November 2, 2026';
const CONTACT = 'hello@numadatravel.com';

const DOCS: Record<'privacy' | 'terms' | 'affiliate', Doc> = {
  privacy: {
    title: 'Privacy Policy',
    intro: 'We respect your privacy. This policy explains what we collect when you use NumadaTravel and how we use it.',
    sections: [
      { h: 'What we collect', p: ['Your email address when you join our newsletter, download a guide, or create an account.', 'Basic, anonymous usage data (pages visited, device type) to help us improve the site.', 'Destinations you save as favorites, stored on your device.'] },
      { h: 'How we use it', p: ['To send the guides, island notes, and newsletters you asked for.', 'To improve our content and recommendations.', 'We never sell your personal information.'] },
      { h: 'Partners and cookies', p: ['When you click a partner link (for example Expedia, Aviasales, Klook, Yesim, EKTA, or GetRentacar), that partner may set cookies to credit us for your booking. Their own privacy policies apply on their sites.'] },
      { h: 'Your choices', p: ['You can unsubscribe from any email with one click, or ask us to delete your data at any time by writing to ' + CONTACT + '.'] },
    ],
  },
  terms: {
    title: 'Terms of Use',
    intro: 'By using NumadaTravel you agree to these simple terms.',
    sections: [
      { h: 'Our content', p: ['Our guides and recommendations are for inspiration and planning. Prices, schedules, entry rules, and availability change — always confirm details with the provider before you book.'] },
      { h: 'Bookings', p: ['Bookings made through partner links are contracts between you and that partner. We are not responsible for their services, cancellations, or refunds.'] },
      { h: 'Membership', p: ['Insider membership is personal. Please keep your account secure and do not share or republish members-only content.'] },
      { h: 'Intellectual property', p: ['Text, photos, and guides on this site belong to NumadaTravel unless stated otherwise. Please ask before reusing them.'] },
      { h: 'Contact', p: ['Questions? Write to us at ' + CONTACT + '.'] },
    ],
  },
  affiliate: {
    title: 'Affiliate Disclosure',
    intro: 'Transparency matters to us. Some links on NumadaTravel are affiliate links.',
    sections: [
      { h: 'What this means', p: ['If you book through one of our partner links, we may earn a small commission — at no extra cost to you. This keeps our guides free and our site free of banner ads.'] },
      { h: 'Our partners', p: ['We currently work with Expedia, Aviasales, Klook, Yesim, EKTA, and GetRentacar, among others.'] },
      { h: 'Our promise', p: ['We never let a commission decide what we recommend. If a better option exists that does not pay us, we will still tell you about it.'] },
    ],
  },
};

const Legal = ({ doc }: { doc: keyof typeof DOCS }) => {
  const d = DOCS[doc];
  return (
    <Layout>
      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">{d.title}</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated {UPDATED}</p>
        <p className="text-lg text-foreground/80 mb-10">{d.intro}</p>
        {d.sections.map((s) => (
          <section key={s.h} className="mb-8">
            <h2 className="font-display text-2xl text-foreground mb-3">{s.h}</h2>
            {s.p.map((t) => <p key={t} className="text-foreground/80 leading-relaxed mb-3">{t}</p>)}
          </section>
        ))}
      </article>
    </Layout>
  );
};

export default Legal;
