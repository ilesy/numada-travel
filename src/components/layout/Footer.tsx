import { Link } from 'react-router-dom';
import { Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import logo from '@/assets/numada-logo.png';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* FTC Disclosure Banner */}
      <div className="bg-primary/95 border-b border-primary-foreground/10 py-4">
        <div className="container-wide">
          <p className="text-xs text-primary-foreground/70 text-center">
            <strong className="text-primary-foreground/90">Affiliate Disclosure:</strong> NumadaTravel may earn a commission from qualifying purchases made through links on this site. This helps support our work at no additional cost to you.
          </p>
        </div>
      </div>

      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="NumadaTravel" className="h-16 w-auto brightness-0 invert opacity-90" />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Curated Caribbean travel experiences, expert guides, and handpicked resources to help you explore the islands with confidence.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com/numadatravel" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/numadatravel" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/numadatravel" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Destinations</h4>
            <ul className="space-y-3">
              {['St. Lucia', 'Barbados', 'St. Vincent', 'Jamaica', 'Turks & Caicos', 'Antigua'].map((dest) => (
                <li key={dest}>
                  <Link to="/destinations" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    {dest}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {[
                { name: 'Concierge ($99)', href: '/concierge' },
                { name: 'Insider Notes', href: '/insider' },
                { name: 'Join the Insiders', href: '/community' },
                { name: 'Travel Stack', href: '/travel-stack' },
                { name: 'Island Quiz', href: '/quiz' },
                { name: 'About / Founder', href: '/about' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Stay Inspired</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Get exclusive travel tips and destination guides delivered to your inbox.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="cta" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-primary-foreground/60">
              © {new Date().getFullYear()} NumadaTravel. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-xs text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/affiliate-disclosure" className="text-xs text-primary-foreground/60 hover:text-accent transition-colors">
                Affiliate Disclosure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
