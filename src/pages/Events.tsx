
import React from 'react';
import Layout from '@/components/Layout/Layout';
import SectionTitle from '@/components/shared/SectionTitle';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Users, Cake, Briefcase } from 'lucide-react';

const Events: React.FC = () => {
  const eventTypes = [
    {
      title: "Birthday Parties",
      description: "Celebrate your special day with a splash of color! Our birthday packages include private space, materials, and optional add-ons like cake and refreshments.",
      icon: Cake,
      features: [
        "Private party area",
        "All art supplies included",
        "Personalized birthday banner",
        "Optional add-on: cake & refreshments"
      ]
    },
    {
      title: "Corporate Team Building",
      description: "Strengthen team bonds through creative expression. Our corporate events offer a unique way to improve collaboration and communication while having fun.",
      icon: Briefcase,
      features: [
        "Facilitated team activities",
        "Private event space",
        "Custom packages available",
        "Catering options"
      ]
    },
    {
      title: "Private Gatherings",
      description: "From family reunions to friend get-togethers, create memories with your loved ones in our vibrant, creative environment.",
      icon: Users,
      features: [
        "Flexible group sizes",
        "Customizable experience",
        "Optional photography service",
        "Group discounts available"
      ]
    },
    {
      title: "Special Events",
      description: "Bachelor/bachelorette parties, graduation celebrations, or just because! Any occasion is better with art and aloha spirit.",
      icon: Calendar,
      features: [
        "Themed decoration options",
        "Flexible scheduling",
        "Customized activities",
        "Memorable photo opportunities"
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-10">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <AnimatedSection animation="fade-in" forceVisible={true}>
            <SectionTitle
              title="Host Your Event With Us"
              subtitle="Create colorful memories with friends, family, or colleagues in our unique splatter paint venue"
              center
            />
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={200} className="mb-12" forceVisible={true}>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Looking for a venue that offers something different? Hilo Splash Haus provides a one-of-a-kind setting
              for celebrations and gatherings of all kinds. Our spacious studio can accommodate groups of various sizes,
              and our team will work with you to create an event that's as unique as you are.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            {eventTypes.map((event, index) => (
              <AnimatedSection 
                key={event.title} 
                animation="zoom-in" 
                delay={index * 100} 
                forceVisible={true}
                className="bg-white rounded-xl shadow-lg p-6 hover-lift"
              >
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-coral to-sunset p-3 rounded-lg text-white mr-4">
                    <event.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    
                    <h4 className="font-medium text-gray-800 mb-2">What's included:</h4>
                    <ul className="space-y-2 mb-6">
                      {event.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-coral mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-in" forceVisible={true} className="bg-gradient-to-r from-coral-light/20 to-teal-light/20 p-8 rounded-xl shadow-sm my-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-6">Our Event Packages</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    name: "Small Gathering",
                    price: "$299",
                    people: "6-10 people",
                    details: "Perfect for intimate celebrations and small team events."
                  },
                  {
                    name: "Medium Event",
                    price: "$499",
                    people: "11-20 people",
                    details: "Our most popular package for birthdays and team building."
                  },
                  {
                    name: "Large Celebration",
                    price: "$899",
                    people: "21-40 people",
                    details: "Exclusive use of our entire facility for larger gatherings."
                  }
                ].map((pkg, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <h3 className="font-bold text-xl mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-coral-dark mb-1">{pkg.price}</div>
                    <div className="text-gray-600 mb-3">{pkg.people}</div>
                    <p className="text-gray-700 mb-4">{pkg.details}</p>
                    <Button 
                      variant="outline" 
                      className="w-full border-coral text-coral hover:bg-coral-light/10"
                      asChild
                    >
                      <Link to="/contact">
                        Inquire Now
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-gray-700">
                All packages include 2 hours of painting time, all necessary supplies, aprons, and basic refreshments.
                Custom packages are available - contact us to discuss your specific needs!
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={300} forceVisible={true} className="text-center mt-12">
            <h2 className="text-2xl font-bold mb-6">Ready to Plan Your Event?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your event needs and check availability.
              Our event coordinator will work with you to create a memorable experience for you and your guests.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg"
                className="bg-gradient-coral hover:shadow-lg"
                asChild
              >
                <Link to="/contact">
                  Contact Our Event Team
                </Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-teal text-teal hover:bg-teal-light/10"
                asChild
              >
                <Link to="/faq">
                  Event FAQ
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
