
import React from 'react';
import Layout from '@/components/Layout/Layout';
import SectionTitle from '@/components/shared/SectionTitle';
import AnimatedSection from '@/components/shared/AnimatedSection';
import ParallaxSection from '@/components/shared/ParallaxSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Heart, Users, Map, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <ParallaxSection 
        bgImage="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2070"
        height="h-[50vh]"
        overlayOpacity={0.5}
      >
        <div className="text-center">
          <AnimatedSection animation="fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-shadow-lg">
              Our <span className="font-tropical text-coral-light">Story</span>
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto text-shadow">
              How a passion for art, community, and Hawaiian culture became Hilo's most colorful destination
            </p>
          </AnimatedSection>
        </div>
      </ParallaxSection>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-left">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2070" 
                alt="Hilo Splash Haus Founders" 
                className="rounded-lg shadow-lg h-full object-cover"
              />
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-right" delay={200}>
              <h2 className="text-3xl font-bold mb-6">From Dream to Reality</h2>
              <p className="text-lg text-gray-700 mb-4">
                Hilo Splash Haus began in 2019 when local artists Kainoa and Leilani noticed that while Hawaii 
                had plenty of natural beauty, there were limited creative outlets for both locals and tourists 
                to express their artistic side.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Inspired by the vibrant colors of Hawaiian sunsets, marine life, and tropical flora, they 
                envisioned a space where people could create unique artwork through the joyful, liberating 
                process of splatter painting.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                What started as weekend pop-ups at local markets quickly gained popularity, leading to the 
                opening of our permanent location in downtown Hilo, where we've welcomed over 10,000 visitors 
                since opening our doors.
              </p>
              <div className="flex items-center mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2070" 
                  alt="Founder Kainoa" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=2070" 
                  alt="Founder Leilani" 
                  className="w-12 h-12 rounded-full object-cover -ml-4"
                />
                <div className="ml-4">
                  <p className="font-bold">Kainoa & Leilani</p>
                  <p className="text-sm text-gray-600">Founders of Hilo Splash Haus</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="fade-in" className="text-center mb-12">
            <SectionTitle 
              title="Our Mission" 
              subtitle="We believe that creativity belongs to everyone, not just professional artists" 
              center
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 rounded-full bg-coral-light/20 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-coral" />
                </div>
                <h3 className="text-xl font-bold mb-3">Accessible Creativity</h3>
                <p className="text-gray-600">
                  Making art accessible to everyone regardless of experience or skill level. 
                  We create an environment where artistic expression is fun, not intimidating.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 rounded-full bg-coral-light/20 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-coral" />
                </div>
                <h3 className="text-xl font-bold mb-3">Building Community</h3>
                <p className="text-gray-600">
                  Fostering connections and creating shared experiences that bring people together
                  through creativity, conversation, and collaborative artistic expression.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={300}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 rounded-full bg-coral-light/20 flex items-center justify-center mb-4">
                  <Map className="h-6 w-6 text-coral" />
                </div>
                <h3 className="text-xl font-bold mb-3">Hawaiian Heritage</h3>
                <p className="text-gray-600">
                  Celebrating and preserving Hawaiian culture by incorporating elements of local 
                  heritage into our space, events, and the creative experience we provide.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="fade-in">
            <SectionTitle 
              title="Why Choose Hilo Splash Haus" 
              subtitle="What makes our creative experience unique and unforgettable" 
              center
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-coral to-sunset mx-auto flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Premium Experience</h3>
                <p className="text-gray-600">
                  High-quality materials, expert guidance, and a beautiful venue designed for maximum creativity.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-coral to-sunset mx-auto flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Variety of Sessions</h3>
                <p className="text-gray-600">
                  From standard sessions to glow-in-the-dark experiences, we offer something for everyone.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={300}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-coral to-sunset mx-auto flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Staff</h3>
                <p className="text-gray-600">
                  Our team of passionate artists provide guidance while allowing your creativity to shine.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={400}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-coral to-sunset mx-auto flex items-center justify-center mb-4">
                  <Map className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Perfect Location</h3>
                <p className="text-gray-600">
                  Centrally located in downtown Hilo with beautiful indoor-outdoor spaces inspired by nature.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="fade-in">
            <SectionTitle 
              title="Meet Our Team" 
              subtitle="The creative minds behind Hilo Splash Haus" 
              center
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                name: "Kainoa Silva",
                title: "Co-Founder & Creative Director",
                image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2070",
                bio: "Local artist with over 15 years of experience in various mediums and community art projects."
              },
              {
                name: "Leilani Wong",
                title: "Co-Founder & Operations Manager",
                image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=2070",
                bio: "Former art teacher and community organizer passionate about making art accessible to everyone."
              },
              {
                name: "Kai Martinez",
                title: "Lead Artist",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070",
                bio: "Specializes in abstract art and has been with Hilo Splash Haus since its opening day."
              },
              {
                name: "Nani Kealoha",
                title: "Events Coordinator",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070",
                bio: "Expert in planning memorable events and ensuring every guest has an amazing experience."
              }
            ].map((member, index) => (
              <AnimatedSection animation="fade-in" delay={index * 100} key={index}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-coral mb-3">{member.title}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-coral to-sunset text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Splash?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us at Hilo Splash Haus for a creative adventure you'll never forget. 
              No experience necessary—just bring your imagination!
            </p>
            <Button 
              size="lg" 
              className="bg-white text-coral hover:bg-gray-100"
              asChild
            >
              <Link to="/book">
                Book Your Session <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
