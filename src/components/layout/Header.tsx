import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/contexts/FavoritesContext';

const navLinks = [
  { name: 'Destinations', href: '/destinations' },
  { name: 'Journal', href: '/blog' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Insiders', href: '/insider' },
  { name: 'Travel Stack', href: '/travel-stack' },
  { name: 'Quiz', href: '/quiz' },
  { name: 'About', href: '/about' },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { favorites } = useFavorites();
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container-wide">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-serif italic text-3xl text-foreground group-hover:text-accent transition-colors leading-none">Numada</span>
            <span className="hidden sm:inline-block w-6 h-px bg-accent mt-2" />
            <span className="hidden sm:inline text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">Travel</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href}
                className={`text-xs tracking-[0.2em] uppercase font-semibold transition-colors hover:text-accent ${
                  location.pathname === link.href ? 'text-accent' : 'text-foreground/80'
                }`}>
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link to="/favorites" aria-label={`Favorites${favorites.length > 0 ? ` (${favorites.length})` : ''}`}
              className="relative flex items-center justify-center w-10 h-10 hover:bg-muted transition-colors">
              <Heart className="w-4 h-4 text-foreground" />
              {favorites.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </Link>

            <Button variant="cta" size="sm" className="hidden sm:inline-flex uppercase tracking-widest text-[10px]" asChild>
              <Link to="/quiz">Take the Quiz</Link>
            </Button>

            <button onClick={() => setOpen(!open)} className="lg:hidden flex items-center justify-center w-10 h-10 hover:bg-muted transition-colors" aria-label={open ? 'Close menu' : 'Open menu'}>
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden">
            <div className="container-wide py-6 space-y-1">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href} onClick={() => setOpen(false)}
                  className="block py-3 text-sm uppercase tracking-[0.2em] font-semibold text-foreground hover:text-accent transition-colors">
                  {link.name}
                </Link>
              ))}
              <Button variant="cta" className="w-full mt-4" asChild>
                <Link to="/quiz" onClick={() => setOpen(false)}>Take the Quiz</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
