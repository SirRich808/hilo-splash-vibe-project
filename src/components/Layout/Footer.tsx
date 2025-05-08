
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-coral to-sunset flex items-center justify-center">
                <span className="font-tropical text-white text-xl">H</span>
              </div>
              <span className="font-tropical text-xl text-white">Hilo Splash Haus</span>
            </Link>
            <p className="text-gray-400 mt-4">
              Experience the perfect blend of artistic expression and island vibes at Hilo's premier splatter paint room and tropical cafe.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-gray-400 hover:text-coral-light transition-colors">Home</Link>
              <Link to="/about" className="text-gray-400 hover:text-coral-light transition-colors">About</Link>
              <Link to="/experiences" className="text-gray-400 hover:text-coral-light transition-colors">Experiences</Link>
              <Link to="/events" className="text-gray-400 hover:text-coral-light transition-colors">Events</Link>
              <Link to="/cafe" className="text-gray-400 hover:text-coral-light transition-colors">Cafe</Link>
              <Link to="/book" className="text-gray-400 hover:text-coral-light transition-colors">Book a Visit</Link>
              <Link to="/gallery" className="text-gray-400 hover:text-coral-light transition-colors">Gallery</Link>
              <Link to="/contact" className="text-gray-400 hover:text-coral-light transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-coral-light w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Oceanside Avenue, Hilo, Hawaii 96720</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-coral-light w-5 h-5 flex-shrink-0" />
                <span className="text-gray-400">(808) 555-1234</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-coral-light w-5 h-5 flex-shrink-0" />
                <span className="text-gray-400">aloha@hilosplashhaus.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Opening Hours</h3>
            <div className="space-y-2 text-gray-400">
              <p>Monday - Thursday: 10am - 8pm</p>
              <p>Friday - Saturday: 9am - 10pm</p>
              <p>Sunday: 9am - 6pm</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Hilo Splash Haus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
