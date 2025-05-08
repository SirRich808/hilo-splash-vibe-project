
import React from 'react';
import Layout from '@/components/Layout/Layout';
import SectionTitle from '@/components/shared/SectionTitle';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Coffee, Leaf, Fruit, Star } from 'lucide-react';

const Cafe: React.FC = () => {
  const menuCategories = [
    {
      title: "Coffee & Espresso",
      items: [
        { name: "Kona Coffee", price: "$4.50", description: "Locally sourced Hawaiian Kona coffee" },
        { name: "Coconut Latte", price: "$5.75", description: "Espresso with steamed coconut milk" },
        { name: "Macadamia Mocha", price: "$6.25", description: "Espresso with chocolate and macadamia syrup" },
        { name: "Vanilla Cold Brew", price: "$5.25", description: "Slow-steeped cold brew with vanilla" }
      ]
    },
    {
      title: "Fresh Smoothies",
      items: [
        { name: "Rainbow Splash", price: "$7.50", description: "Mango, pineapple, banana and strawberry" },
        { name: "Green Island", price: "$7.50", description: "Spinach, kale, pineapple, banana and coconut water" },
        { name: "Lava Flow", price: "$8.25", description: "Strawberry, coconut cream, pineapple and banana" },
        { name: "Blue Hawaii", price: "$8.50", description: "Blue spirulina, coconut milk, banana and pineapple" }
      ]
    },
    {
      title: "Light Bites",
      items: [
        { name: "Acai Bowl", price: "$11.25", description: "Acai blend topped with granola, fresh fruit and honey" },
        { name: "Avocado Toast", price: "$9.75", description: "Local bread with avocado, radish and microgreens" },
        { name: "Tropical Fruit Plate", price: "$8.50", description: "Selection of seasonal Hawaiian fruits" },
        { name: "Macadamia Cookies", price: "$3.50", description: "Freshly baked white chocolate macadamia cookies" }
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-10">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <AnimatedSection animation="fade-in" forceVisible={true}>
            <SectionTitle
              title="Tropical Cafe"
              subtitle="Refuel with island-inspired refreshments in our vibrant cafe space"
              center
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12 items-center">
            <AnimatedSection animation="fade-in-left" delay={200} forceVisible={true}>
              <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2070" 
                alt="Tropical cafe" 
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right" delay={400} forceVisible={true}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Island-Inspired Refreshments</h3>
                <p className="text-gray-700">
                  Our cafe offers a carefully curated menu of Hawaiian-inspired coffee drinks, fresh smoothies, and light bites.
                  We source local ingredients whenever possible, supporting Hawaiian farmers and businesses.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-teal to-teal-light p-2 rounded-lg text-white mr-3">
                      <Coffee size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Local Coffee</h4>
                      <p className="text-sm text-gray-600">Hawaiian-grown beans</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-teal to-teal-light p-2 rounded-lg text-white mr-3">
                      <Fruit size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Fresh Fruits</h4>
                      <p className="text-sm text-gray-600">Locally sourced produce</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-teal to-teal-light p-2 rounded-lg text-white mr-3">
                      <Leaf size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Plant Options</h4>
                      <p className="text-sm text-gray-600">Vegan-friendly choices</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-teal to-teal-light p-2 rounded-lg text-white mr-3">
                      <Star size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Island Flavors</h4>
                      <p className="text-sm text-gray-600">Unique Hawaiian tastes</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-in" delay={300} forceVisible={true} className="my-16">
            <h2 className="text-2xl font-bold text-center mb-12">Our Menu</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {menuCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover-lift">
                  <div className="bg-gradient-to-r from-coral to-sunset p-4 text-white">
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {category.items.map((item, i) => (
                        <li key={i} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                          <div className="flex justify-between items-center mb-1">
                            <h4 className="font-medium">{item.name}</h4>
                            <span className="font-bold text-coral">{item.price}</span>
                          </div>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={400} forceVisible={true} className="bg-gradient-to-r from-teal/20 to-coral/20 p-8 rounded-xl shadow-sm my-16">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Cafe Hours</h2>
              <p className="mb-6">
                Our cafe is open to the public - you don't need to book a painting session to enjoy our delicious offerings!
              </p>
              
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto text-left">
                <div className="font-medium">Monday - Thursday</div>
                <div>9:00 AM - 7:00 PM</div>
                <div className="font-medium">Friday - Saturday</div>
                <div>8:00 AM - 9:00 PM</div>
                <div className="font-medium">Sunday</div>
                <div>9:00 AM - 6:00 PM</div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={500} forceVisible={true} className="text-center my-12">
            <h2 className="text-2xl font-bold mb-4">Host Your Next Coffee Meeting With Us</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Our cafe space is available for small meetings and gatherings. Enjoy our delicious offerings while you connect in our creative atmosphere.
            </p>
            <Button 
              className="bg-gradient-to-r from-teal to-teal-dark text-white hover:shadow-lg"
            >
              Inquire About Reservations
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </Layout>
  );
};

export default Cafe;
