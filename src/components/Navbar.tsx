import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Products', href: '#products' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-warm-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-cream-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="font-display text-warm-900 font-bold text-sm">ST</span>
            </div>
            <div>
              <span className="font-display text-lg sm:text-xl font-bold text-cream-100 tracking-wide">
                Sharma Textiles
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-cream-200 hover:text-cream-400 font-body text-sm font-medium rounded-lg hover:bg-warm-800/50 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919876543210"
              className="ml-3 flex items-center gap-2 bg-cream-400 text-warm-900 px-4 py-2 rounded-full font-body text-sm font-semibold hover:bg-cream-300 transition-all duration-200 hover:shadow-lg hover:shadow-cream-400/20"
            >
              <Phone size={15} />
              <span className="hidden lg:inline">Call Now</span>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cream-200 p-2 rounded-lg hover:bg-warm-800/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-warm-900/95 backdrop-blur-md border-t border-warm-700/50 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 text-cream-200 hover:text-cream-400 hover:bg-warm-800/50 rounded-lg font-body text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 bg-cream-400 text-warm-900 px-4 py-2.5 rounded-full font-body text-sm font-semibold mt-2"
          >
            <Phone size={15} />
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
}
