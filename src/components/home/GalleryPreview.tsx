
import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import AnimatedSection from '../shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const GalleryPreview: React.FC = () => {
  const galleryImages = [
    'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2070',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2070',
    'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2070',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070',
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=2070',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070',
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection animation="fade-in">
          <SectionTitle
            title="Gallery"
            subtitle="Peek into the colorful world of Hilo Splash Haus through our gallery"
            center
          />
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <AnimatedSection 
              key={index} 
              animation="zoom-in" 
              delay={index * 100} 
              className="group relative overflow-hidden rounded-lg shadow-md aspect-square"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:bg-opacity-20">
                    View Larger
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-gradient-to-r from-coral to-sunset text-white hover:shadow-lg">
            View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
