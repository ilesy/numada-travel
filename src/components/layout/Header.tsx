import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/contexts/FavoritesContext';
import logo from '@/assets/numada-logo.png';

const navLinks = [
  { name: 'Destinations', href: '/destinations' },
  { name: 'Guides', href: '/guides' },
  { name: 'Resources', href: '/resources' },
  { name: 'Quiz', href: '/quiz' },
  { name: 'About', href: '/about' },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { favorites } = useFavorites();
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="NumadaTravel" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium text-sm tracking-wide transition-colors hover:text-accent ${
                  location.pathname === link.href
                    ? 'text-accent'
                    : 'text-foreground/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <Link
              to="/favorites"
              className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted transition-colors"
            >
              <Heart className="w-5 h-5 text-foreground" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </Link>

            <Button variant="cta" size="sm" className="hidden sm:inline-flex" asChild>
              <Link to="/quiz">Find Your Island</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container-wide py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-lg font-medium text-foreground hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="cta" className="w-full mt-4" asChild>
                <Link to="/quiz" onClick={() => setIsMobileMenuOpen(false)}>
                  Find Your Island
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
