
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Events', path: '/events' },
    { name: 'Cafe', path: '/cafe' },
    { name: 'Book a Visit', path: '/book' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white bg-opacity-90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-coral to-sunset flex items-center justify-center">
            <span className="font-tropical text-white text-xl">H</span>
          </div>
          <div>
            <span className="font-tropical text-xl md:text-2xl">Hilo Splash Haus</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              className="nav-link font-medium text-gray-900 hover:text-coral-dark"
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-gradient-coral text-white hover:shadow-lg transition-all">
            Book Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobile && isMenuOpen && (
        <nav className="lg:hidden fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-white bg-opacity-95 backdrop-blur-md z-40 animate-fade-in">
          <div className="container mx-auto py-8 px-4 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <Link 
                key={link.name}
                to={link.path}
                className={`text-lg font-medium text-gray-900 hover:text-coral-dark py-3 border-b border-gray-100 animate-fade-in`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              className="bg-gradient-coral text-white hover:shadow-lg w-full mt-4 animate-fade-in"
              style={{ animationDelay: `${navLinks.length * 50}ms` }}
            >
              Book Now
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
