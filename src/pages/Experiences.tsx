
import React from 'react';
import Layout from '@/components/Layout/Layout';
import SectionTitle from '@/components/shared/SectionTitle';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Brush, Calendar, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Experiences: React.FC = () => {
  const experiences = [
    {
      title: "Standard Splash Session",
      description: "Our classic splatter paint experience. Perfect for beginners and experienced artists alike.",
      price: "$45",
      duration: "2 hours",
      features: [
        "All materials included",
        "Canvas to take home",
        "Guided instruction",
        "Perfect for all skill levels"
      ],
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2070"
    },
    {
      title: "Glow Splash",
      description: "Create stunning artwork that glows in the dark using our special UV reactive paints.",
      price: "$55",
      duration: "2 hours",
      features: [
        "Glow-in-the-dark paints",
        "UV lighting effects",
        "Canvas to take home",
        "Perfect for evening sessions"
      ],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=2070"
    },
    {
      title: "Keiki (Children's) Session",
      description: "A fun and engaging paint experience designed especially for young artists.",
      price: "$35",
      duration: "1.5 hours",
      features: [
        "Kid-friendly materials",
        "Extra supervision",
        "Smaller canvas size",
        "Ages 5-12 welcome"
      ],
      image: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?q=80&w=2068"
    },
    {
      title: "Date Night Experience",
      description: "Create memories together with this romantic and creative experience for couples.",
      price: "$99",
      duration: "2.5 hours",
      features: [
        "2 canvases to create together",
        "Complimentary tropical drinks",
        "Private painting area",
        "Photo opportunity"
      ],
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-10">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <AnimatedSection animation="fade-in" forceVisible={true}>
            <SectionTitle
              title="Our Creative Experiences"
              subtitle="Discover the perfect artistic adventure to unleash your creativity at Hilo Splash Haus"
              center
            />
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={200} className="mb-12" forceVisible={true}>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Whether you're looking for a fun family activity, a unique date night, or a solo creative escape,
              we have the perfect experience waiting for you. No artistic skills required—just bring your imagination!
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            {experiences.map((exp, index) => (
              <AnimatedSection 
                key={exp.title} 
                animation={index % 2 === 0 ? "fade-in-left" : "fade-in-right"} 
                delay={index * 100} 
                forceVisible={true}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift"
              >
                <div className="flex flex-col h-full">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={exp.image} 
                      alt={exp.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-bold">{exp.title}</h3>
                      <div className="flex items-center bg-coral-light text-white px-3 py-1 rounded-full text-lg font-semibold">
                        {exp.price}
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{exp.duration}</span>
                    </div>
                    <p className="text-gray-700 mb-6">{exp.description}</p>
                    <ul className="space-y-2 mb-6">
                      {exp.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-coral mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 pt-0">
                    <Button 
                      className="w-full bg-gradient-coral hover:shadow-lg"
                      asChild
                    >
                      <Link to="/book">
                        Book Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-in" forceVisible={true} className="bg-gray-50 p-8 rounded-xl shadow-sm mt-12 mb-8">
            <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  q: "Do I need any artistic experience?",
                  a: "Not at all! Our experiences are designed for all skill levels, and our staff provides guidance throughout your session."
                },
                {
                  q: "What should I wear?",
                  a: "We provide aprons, but we recommend wearing clothes you don't mind getting a little paint on, just in case."
                },
                {
                  q: "Can I book for a large group?",
                  a: "Absolutely! We offer group bookings and special rates. Please contact us directly for groups of 8 or more."
                },
                {
                  q: "How far in advance should I book?",
                  a: "We recommend booking at least 48 hours in advance, especially for weekend sessions which tend to fill quickly."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={300} forceVisible={true} className="text-center mt-12">
            <p className="text-xl mb-6">Ready to unleash your creativity?</p>
            <Button 
              size="lg"
              className="bg-gradient-coral hover:shadow-lg animate-subtle-pulse"
              asChild
            >
              <Link to="/book">
                Book Your Experience
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </Layout>
  );
};

export default Experiences;
