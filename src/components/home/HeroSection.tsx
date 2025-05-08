
import React from 'react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '../shared/AnimatedSection';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center parallax"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2070')`,
          }}
        />
        <div className="absolute inset-0 bg-black opacity-30" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 mt-16 text-center">
        <AnimatedSection animation="fade-in" delay={200}>
          <span className="inline-block py-1 px-3 rounded-full bg-white bg-opacity-20 text-white backdrop-blur-sm text-sm mb-4 font-medium">
            Welcome to Hilo Splash Haus
          </span>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" delay={400} className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 text-shadow-lg">
            <span className="font-tropical text-coral-light">Splash</span> Your Way to Island <span className="font-tropical text-teal-light">Vibes</span>
          </h1>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" delay={600} className="max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl text-white mb-8 text-shadow">
            Hawaii's premier splatter paint room & tropical cafe experience
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" delay={800}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              className="bg-gradient-coral hover:shadow-lg transition-all animate-subtle-pulse"
            >
              Book an Experience
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white bg-opacity-10 backdrop-blur-sm border-white text-white hover:bg-white hover:bg-opacity-20"
            >
              Explore the Cafe <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
          <ArrowRight className="h-5 w-5 text-white -rotate-90" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
