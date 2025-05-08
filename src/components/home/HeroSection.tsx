
import React from 'react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '../shared/AnimatedSection';
import { ArrowRight, CalendarCheck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            Hawaii's Premier Paint Experience
          </span>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" delay={400} className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 text-shadow-lg">
            <span className="font-tropical text-coral-light">Splash</span> Your Way to Island <span className="font-tropical text-teal-light">Vibes</span>
          </h1>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" delay={600} className="max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl text-white mb-8 text-shadow">
            Express your creativity through splatter painting in our tropical paradise. 
            No experience needed — just pure artistic fun!
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" delay={800}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
            <Button 
              size="lg" 
              className="bg-gradient-coral hover:shadow-lg transition-all animate-subtle-pulse"
              asChild
            >
              <Link to="/book">
                <CalendarCheck className="mr-2 h-5 w-5" />
                Book an Experience
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white bg-opacity-10 backdrop-blur-sm border-white text-white hover:bg-white hover:bg-opacity-20"
              asChild
            >
              <Link to="/cafe">
                Explore the Cafe <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" delay={1000}>
          <div className="inline-flex items-center space-x-1 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="ml-1">Rated 4.9/5 from over 200 happy visitors!</span>
          </div>
        </AnimatedSection>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center justify-center">
        <div className="text-white text-sm mb-2">Scroll to discover</div>
        <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center animate-bounce">
          <ArrowRight className="h-5 w-5 text-white -rotate-90" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
