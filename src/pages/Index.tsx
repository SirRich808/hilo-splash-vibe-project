
import React, { useEffect } from 'react';
import Layout from '@/components/Layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import OfferingsSection from '@/components/home/OfferingsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import GalleryPreview from '@/components/home/GalleryPreview';
import CtaSection from '@/components/home/CtaSection';

const Index: React.FC = () => {
  // Preload critical images for better UX
  useEffect(() => {
    const preloadImages = [
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2070',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2070'
    ];
    
    preloadImages.forEach(image => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <OfferingsSection />
      <TestimonialsSection />
      <GalleryPreview />
      <CtaSection />
    </Layout>
  );
};

export default Index;
