
import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import AnimatedSection from '../shared/AnimatedSection';

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
              <p className="text-lg">
                Whether you're looking for a family outing, a date night with a twist, or just a place to unwind and express yourself, Hilo Splash Haus offers an experience unlike any other on the Big Island.
              </p>
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
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
