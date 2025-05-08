
import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import FeatureCard from '../shared/FeatureCard';
import AnimatedSection from '../shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const OfferingsSection: React.FC = () => {
  const offerings = [
    {
      title: 'Splatter Paint Room',
      description: 'Express yourself in our custom designed paint rooms. Perfect for all ages and skill levels. We provide everything you need!',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2070',
      link: '/experiences'
    },
    {
      title: 'Tropical Cafe',
      description: 'Indulge in Hawaiian-inspired coffee drinks, smoothies, and light fare in our vibrant cafe space.',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2070',
      link: '/cafe'
    },
    {
      title: 'Private Events',
      description: 'Host your next birthday party, team building event, or special occasion with us for an unforgettable experience.',
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2070',
      link: '/events'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection animation="fade-in">
          <SectionTitle
            title="Our Experiences"
            subtitle="Explore the unique offerings that make Hilo Splash Haus the perfect destination for creativity and relaxation"
            center
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {offerings.map((offering, index) => (
            <AnimatedSection key={offering.title} animation="zoom-in" delay={200 * index}>
              <FeatureCard
                title={offering.title}
                description={offering.description}
                image={offering.image}
                className="h-full"
              />
              <div className="mt-4 text-center">
                <Button 
                  variant="link" 
                  className="text-coral hover:text-coral-dark"
                  asChild
                >
                  <a href={offering.link}>
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
