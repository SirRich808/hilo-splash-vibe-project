
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import ParallaxSection from '../shared/ParallaxSection';
import AnimatedSection from '../shared/AnimatedSection';
import { Link } from 'react-router-dom';

const CtaSection: React.FC = () => {
  return (
    <ParallaxSection 
      bgImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070"
      height="h-[60vh]"
      overlayOpacity={0.6}
    >
      <div className="text-center">
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-shadow">
            Ready to Create Your <span className="font-tropical text-coral-light">Splash</span> Masterpiece?
          </h2>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" delay={200}>
          <p className="text-xl text-white mb-4 max-w-2xl mx-auto text-shadow">
            Book your session today and experience the perfect blend of creative expression and island relaxation.
          </p>
          
          <p className="text-lg text-white mb-8 max-w-3xl mx-auto text-shadow">
            No artistic experience required — just bring your imagination and we'll provide everything else! 
            Our friendly staff will guide you through the process, ensuring you have a memorable experience 
            and leave with a unique creation to take home.
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              className="bg-gradient-coral hover:shadow-lg transition-all animate-subtle-pulse"
              asChild
            >
              <Link to="/book">
                Book Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white bg-opacity-10 backdrop-blur-sm border-white text-white hover:bg-white hover:bg-opacity-20"
              asChild
            >
              <Link to="/contact">
                <Phone className="mr-2 h-4 w-4" /> Contact Us
              </Link>
            </Button>
          </div>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" delay={600}>
          <div className="mt-8 text-white text-opacity-90">
            <p className="font-medium">Special offer: 10% off for groups of 4+</p>
            <p className="text-sm mt-1">Book for a weekday session and get a free tropical smoothie!</p>
          </div>
        </AnimatedSection>
      </div>
    </ParallaxSection>
  );
};

export default CtaSection;
