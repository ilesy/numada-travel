import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="border-b border-primary-foreground/10 py-4">
        <div className="container-wide">
          <p className="text-[11px] text-primary-foreground/70 text-center">
            <strong className="text-primary-foreground/90">Affiliate disclosure:</strong> NumadaTravel may earn a commission from qualifying purchases made through partner links. This supports our work at no extra cost to you.
          </p>
        </div>
      </div>

      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="inline-flex items-baseline gap-2 mb-6">
              <span className="font-serif italic text-4xl">Numada</span>
              <span className="w-6 h-px bg-accent" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-accent">Travel</span>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-6 max-w-xs">
              A private Caribbean travel club. Eleven vetted islands, honest guides, insider notes from people who live there.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com/numadatravel" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary-foreground/70 hover:text-accent transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="https://instagram.com/numadatravel" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary-foreground/70 hover:text-accent transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="https://twitter.com/numadatravel" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-primary-foreground/70 hover:text-accent transition-colors"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-accent font-semibold mb-6">Destinations</h4>
            <ul className="space-y-3">
              {['St. Lucia', 'Barbados', 'St. Vincent', 'Jamaica', 'Turks & Caicos', 'Antigua'].map((d) => (
                <li key={d}><Link to="/destinations" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors font-serif italic">{d}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-accent font-semibold mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                { name: 'Journal', href: '/blog' },
                { name: 'Insider Notes', href: '/insider' },
                { name: 'Travel Stack', href: '/travel-stack' },
                { name: 'Island Quiz', href: '/quiz' },
                { name: 'Concierge', href: '/concierge' },
                { name: 'Community', href: '/community' },
                { name: 'About', href: '/about' },
              ].map((i) => (
                <li key={i.name}><Link to={i.href} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">{i.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-accent font-semibold mb-6">The Dispatch</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">One hidden gem, one flight hack, every Tuesday.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="your@email.com" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40" />
              <Button variant="cta" className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/60">© {new Date().getFullYear()} NumadaTravel. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-primary-foreground/60 hover:text-accent transition-colors">Privacy</Link>
            <Link to="/terms" className="text-xs text-primary-foreground/60 hover:text-accent transition-colors">Terms</Link>
            <Link to="/affiliate-disclosure" className="text-xs text-primary-foreground/60 hover:text-accent transition-colors">Affiliate Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
