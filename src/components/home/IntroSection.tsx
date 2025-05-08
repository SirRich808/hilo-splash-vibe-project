
import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import AnimatedSection from '../shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const IntroSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection animation="fade-in">
          <SectionTitle 
            title="Welcome to Hilo Splash Haus" 
            subtitle="Where artistic expression meets island relaxation in the heart of Hilo, Hawaii"
            center
          />
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <AnimatedSection animation="fade-in-left" delay={200}>
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Hilo Splash Haus is a one-of-a-kind destination that combines the therapeutic joy of splatter painting with the relaxed atmosphere of a tropical cafe.
              </p>
              <p className="text-lg mb-4">
                Located just minutes from downtown Hilo, our unique venue offers visitors and locals alike the perfect place to unleash their creativity, enjoy delicious island-inspired refreshments, and connect with others in a vibrant, welcoming space.
              </p>
              <p className="text-lg mb-6">
                Whether you're looking for a family outing, a date night with a twist, or just a place to unwind and express yourself, Hilo Splash Haus offers an experience unlike any other on the Big Island.
              </p>
              
              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-coral">
                <h3 className="text-xl font-semibold mb-2">Why Visitors Love Us</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-coral font-bold mr-2">✓</span>
                    <span>No artistic experience required - everyone creates something amazing!</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-coral font-bold mr-2">✓</span>
                    <span>All materials included - just bring yourself and your creativity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-coral font-bold mr-2">✓</span>
                    <span>Perfect for all ages - fun for keiki (children) to kupuna (elders)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-coral font-bold mr-2">✓</span>
                    <span>Take home your masterpiece - a unique souvenir of your Hawaii experience</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-6">
                <Button 
                  className="bg-gradient-to-r from-teal to-teal-dark text-white" 
                  asChild
                >
                  <Link to="/about">Learn Our Story</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-right" delay={400}>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070" 
                  alt="Creative splatter paint experience" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-teal p-4 rounded-lg shadow-lg text-white">
                <p className="font-tropical text-xl">Unleash your creativity!</p>
              </div>
              
              <div className="absolute -top-5 -left-5 bg-coral p-3 rounded-full shadow-lg text-white transform rotate-12">
                <p className="font-bold text-sm">Open Daily!</p>
              </div>
            </div>
            
            <div className="mt-12 bg-gray-50 p-5 rounded-lg">
              <h3 className="font-semibold mb-3">Hours of Operation</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Monday - Thursday</div>
                <div>10:00 AM - 6:00 PM</div>
                <div>Friday - Saturday</div>
                <div>9:00 AM - 9:00 PM</div>
                <div>Sunday</div>
                <div>11:00 AM - 5:00 PM</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
