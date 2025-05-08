
import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import FeatureCard from '../shared/FeatureCard';
import AnimatedSection from '../shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brush, Coffee, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const OfferingsSection: React.FC = () => {
  const offerings = [
    {
      title: 'Splatter Paint Room',
      description: 'Express yourself in our custom designed paint rooms. Perfect for all ages and skill levels. We provide everything you need - paints, canvases, protective gear, and guidance from our friendly staff. No experience necessary!',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2070',
      link: '/experiences',
      icon: Brush,
      features: ['All materials included', 'No experience needed', 'Take home your creation', '2-hour sessions']
    },
    {
      title: 'Tropical Cafe',
      description: 'Indulge in Hawaiian-inspired coffee drinks, smoothies, and light fare in our vibrant cafe space. Featuring locally sourced ingredients and island flavors, our menu offers refreshing options before or after your painting session.',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2070',
      link: '/cafe',
      icon: Coffee,
      features: ['Local coffee beans', 'Fresh tropical fruits', 'Homemade pastries', 'Vegan options']
    },
    {
      title: 'Private Events',
      description: 'Host your next birthday party, team building event, or special occasion with us for an unforgettable experience. Our versatile space accommodates groups of all sizes, and we offer customizable packages to suit your needs.',
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2070',
      link: '/events',
      icon: Calendar,
      features: ['Custom packages', 'Private rooms', 'Catering options', 'Perfect for celebrations']
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
                icon={offering.icon}
                className="h-full"
              >
                <div className="mt-4">
                  <h4 className="font-medium text-sm text-gray-600 mb-2">Highlights:</h4>
                  <ul className="space-y-1">
                    {offering.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-coral mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FeatureCard>
              <div className="mt-4 text-center">
                <Button 
                  variant="link" 
                  className="text-coral hover:text-coral-dark"
                  asChild
                >
                  <Link to={offering.link}>
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-in" delay={600}>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              At Hilo Splash Haus, we believe everyone has an artist within. Our experiences are designed to help you discover yours 
              while enjoying the relaxed island atmosphere that makes Hawaii so special.
            </p>
            <Button 
              className="bg-gradient-to-r from-teal to-teal-dark text-white hover:shadow-lg"
              asChild
            >
              <Link to="/book">
                Book Your Experience Today
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default OfferingsSection;
