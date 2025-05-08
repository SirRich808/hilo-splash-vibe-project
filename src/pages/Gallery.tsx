
import React, { useRef } from 'react';
import Layout from '@/components/Layout/Layout';
import SectionTitle from '@/components/shared/SectionTitle';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  ArrowRight, 
  Image, 
  Star 
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from '@/components/ui/badge';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

// Define the gallery data structure
const galleryItems = [
  {
    id: 1,
    title: "Island Sunset Splash",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2070",
    artist: "Sarah K.",
    description: "Created during our sunset splatter session, this piece captures the vibrant energy of Hawaii's famous sunsets.",
    tags: ["Beginner", "Featured"]
  },
  {
    id: 2,
    title: "Tropical Wave",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2070",
    artist: "Mike T.",
    description: "Inspired by North Shore waves, this piece uses layered techniques to create depth and movement.",
    tags: ["Intermediate", "Staff Pick"]
  },
  {
    id: 3,
    title: "Volcanic Inspiration",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2070",
    artist: "Lisa & Tom",
    description: "A couple's collaboration that draws inspiration from Hawaii's volcanic landscapes.",
    tags: ["Couples", "Popular"]
  },
  {
    id: 4,
    title: "Rainbow Falls",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070",
    artist: "David H.",
    description: "An abstract interpretation of the iconic Rainbow Falls, created during our advanced techniques workshop.",
    tags: ["Advanced", "Workshop"]
  },
  {
    id: 5,
    title: "Neon Jungle",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=2070",
    artist: "Teen Group",
    description: "Created during our special glow-in-the-dark teen night event using UV reactive paints.",
    tags: ["Teens", "Glow Session"]
  },
  {
    id: 6,
    title: "Digital Meets Analog",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070",
    artist: "Tech Summit Team",
    description: "A corporate team-building creation that bridges technology and artistic expression.",
    tags: ["Corporate", "Team Building"]
  },
  {
    id: 7,
    title: "Keiki Creativity",
    image: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?q=80&w=2068",
    artist: "Kids Summer Camp",
    description: "A collaborative piece from our Kids Summer Camp program, showcasing young artistic talents.",
    tags: ["Kids", "Collaborative"]
  },
  {
    id: 8,
    title: "Ocean Depths",
    image: "https://images.unsplash.com/photo-1518389611550-6f979e10e2bd?q=80&w=2070",
    artist: "Marine Biology Group",
    description: "A special project created in partnership with local marine biologists celebrating our ocean ecosystem.",
    tags: ["Special Project", "Educational"]
  }
];

const Gallery: React.FC = () => {
  const mainCarouselRef = useRef(null);
  
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-10">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <AnimatedSection animation="fade-in" forceVisible={true}>
            <SectionTitle
              title="Gallery of Splatter Masterpieces"
              subtitle="Dive into our colorful world of creativity - each piece tells a unique story of artistic expression and island inspiration"
              center
            />
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={200} className="mb-12" forceVisible={true}>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Our gallery showcases the incredible diversity of artwork created at Hilo Splash Haus. From first-time painters to experienced artists, 
              everyone leaves with a one-of-a-kind masterpiece that captures the essence of their Hawaiian experience.
            </p>
          </AnimatedSection>

          {/* Featured Gallery Carousel */}
          <AnimatedSection animation="fade-in" delay={400} className="mb-16" forceVisible={true}>
            <div className="relative px-4 py-10">
              <h3 className="text-2xl font-bold mb-8 text-center">Featured Creations</h3>
              
              <Carousel
                ref={mainCarouselRef}
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {galleryItems.map((item, index) => (
                    <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="group relative h-80 overflow-hidden rounded-xl shadow-lg hover-lift bg-white">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-70"></div>
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-4 z-20">
                          <h4 className="text-white font-bold text-xl mb-1">{item.title}</h4>
                          <p className="text-white text-sm opacity-90">by {item.artist}</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {item.tags.map((tag, tagIdx) => (
                              <Badge 
                                key={tagIdx}
                                variant="outline" 
                                className="bg-white/20 backdrop-blur-sm text-white border-white/10"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <Button variant="ghost" size="icon" className="absolute top-2 right-2 z-20 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                              <Image className="h-5 w-5" />
                            </Button>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-80">
                            <div className="space-y-2">
                              <h4 className="text-sm font-semibold">{item.title}</h4>
                              <p className="text-sm">{item.description}</p>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex items-center justify-center mt-8">
                  <CarouselPrevious className="relative mx-2 bg-white hover:bg-gray-100 border-gray-200" />
                  <CarouselNext className="relative mx-2 bg-white hover:bg-gray-100 border-gray-200" />
                </div>
              </Carousel>
            </div>
          </AnimatedSection>

          {/* Gallery Categories */}
          <AnimatedSection animation="fade-in" delay={600} forceVisible={true}>
            <h3 className="text-2xl font-bold mb-6 text-center">Explore by Category</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {[
                { name: "Beginner Sessions", count: 24 },
                { name: "Kids & Family", count: 18 },
                { name: "Couples Art", count: 15 },
                { name: "Glow Sessions", count: 12 },
                { name: "Team Building", count: 9 },
                { name: "Workshops", count: 8 },
                { name: "Special Events", count: 14 },
                { name: "Staff Creations", count: 7 },
              ].map((category, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-lg shadow-md p-4 hover-lift cursor-pointer transition-all hover:bg-gradient-to-br hover:from-coral-light/20 hover:to-teal-light/20"
                >
                  <h4 className="font-semibold">{category.name}</h4>
                  <p className="text-sm text-gray-600">{category.count} pieces</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Floating Tile Grid */}
          <AnimatedSection animation="fade-in" delay={800} forceVisible={true}>
            <h3 className="text-2xl font-bold mb-8 text-center">All Masterpieces</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryItems.map((item) => (
                <div 
                  key={item.id}
                  className="group relative h-64 overflow-hidden rounded-xl shadow-lg hover-lift bg-white"
                  style={{
                    animation: `float ${3 + Math.random() * 2}s ease-in-out infinite alternate`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-70 transition-opacity"></div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-white text-xs opacity-90">by {item.artist}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Call to Action */}
          <AnimatedSection animation="fade-in" delay={1000} className="text-center mt-16" forceVisible={true}>
            <h3 className="text-2xl font-bold mb-4">Ready to Create Your Own Masterpiece?</h3>
            <p className="max-w-2xl mx-auto mb-8">
              Join us at Hilo Splash Haus and unleash your creativity with our unique splatter painting experience.
              No artistic experience required – just bring your imagination!
            </p>
            <Button 
              className="bg-gradient-coral hover:shadow-lg transition-all animate-subtle-pulse"
              size="lg"
              asChild
            >
              <Link to="/book">Book Your Session Now</Link>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
