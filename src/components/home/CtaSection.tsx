
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, CalendarCheck, Star } from 'lucide-react';
import ParallaxSection from '../shared/ParallaxSection';
import AnimatedSection from '../shared/AnimatedSection';
import { Link } from 'react-router-dom';

const CtaSection: React.FC = () => {
  return (
    <ParallaxSection 
      bgImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070"
      height="h-[70vh]"
      overlayOpacity={0.7} // Increased overlay opacity for better text visibility
    >
      <div className="text-center" style={{ position: 'relative', zIndex: 5 }}>
        <AnimatedSection animation="fade-in" forceVisible={true}>
          <span className="inline-block mb-4 bg-white bg-opacity-30 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium border border-white/20">
            Limited Time Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-shadow-lg">
            Ready to Create Your <span className="font-tropical text-coral-light">Splash</span> Masterpiece?
          </h2>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" delay={200} forceVisible={true}>
          <div className="flex flex-wrap justify-center gap-4 items-center mb-8">
            <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-4 w-64 text-white border border-white/10">
              <h3 className="font-bold text-lg mb-1">Standard Session</h3>
              <p className="text-sm mb-2">2-hour creative experience</p>
              <p className="font-bold text-xl text-coral-light">$45 per person</p>
            </div>
            
            <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-4 w-64 text-white border-2 border-coral-light relative">
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-coral-light text-white text-xs py-1 px-3 rounded-full">
                MOST POPULAR
              </span>
              <h3 className="font-bold text-lg mb-1">Glow Session</h3>
              <p className="text-sm mb-2">2-hour UV paint experience</p>
              <p className="font-bold text-xl text-coral-light">$55 per person</p>
            </div>
            
            <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-4 w-64 text-white border border-white/10">
              <h3 className="font-bold text-lg mb-1">Family Package</h3>
              <p className="text-sm mb-2">2-hour fun for 4 people</p>
              <p className="font-bold text-xl text-coral-light">$160 (save $20)</p>
            </div>
          </div>
          
          <p className="text-xl text-white mb-4 max-w-2xl mx-auto text-shadow">
            Book your session today and experience the perfect blend of creative expression and island relaxation.
          </p>
          
          <p className="text-lg text-white mb-8 max-w-3xl mx-auto text-shadow">
            No artistic experience required — just bring your imagination and we'll provide everything else! 
            Our friendly staff will guide you through the process, ensuring you have a memorable experience 
            and leave with a unique creation to take home.
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" delay={400} forceVisible={true}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              className="bg-gradient-coral hover:shadow-lg transition-all animate-subtle-pulse"
              asChild
            >
              <Link to="/book">
                <CalendarCheck className="mr-2 h-5 w-5" />
                Book Now
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
        
        <AnimatedSection animation="fade-in" delay={600} forceVisible={true}>
          <div className="mt-8 text-white">
            <div className="flex items-center justify-center space-x-1 mb-2">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <span className="ml-2 font-medium text-lg">4.9/5 from over 200 reviews!</span>
            </div>
            <p className="font-medium">Special offer: 10% off for groups of 4+</p>
            <p className="text-sm mt-1">Book for a weekday session and get a free tropical smoothie!</p>
          </div>
        </AnimatedSection>
      </div>
    </ParallaxSection>
  );
};

export default CtaSection;
