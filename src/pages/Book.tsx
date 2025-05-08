
import React from 'react';
import Layout from '@/components/Layout/Layout';
import SectionTitle from '@/components/shared/SectionTitle';
import BookingCalendar from '@/components/booking/BookingCalendar';
import ParallaxSection from '@/components/shared/ParallaxSection';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, CheckCircle, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const BookPage: React.FC = () => {
  const packages = [
    {
      title: "Standard Splash Experience",
      description: "Our classic splatter painting session perfect for all ages and skill levels",
      price: "$45 per person",
      includes: ["16\" x 20\" canvas", "All paint supplies", "Protective gear", "Guided instruction", "Complimentary beverage"]
    },
    {
      title: "Glow Splash Experience",
      description: "Evening sessions with black lights and glow-in-the-dark paints for a unique twist",
      price: "$55 per person",
      includes: ["16\" x 20\" canvas", "Glow-in-dark paints", "Protective gear", "Photo opportunity", "Specialty drink"]
    },
    {
      title: "Keiki (Kids) Splash",
      description: "Designed for younger artists (ages 5-12) with age-appropriate activities",
      price: "$35 per child",
      includes: ["12\" x 16\" canvas", "Kid-friendly paints", "Protective gear", "Simple snack", "Take-home craft"]
    }
  ];

  return (
    <Layout>
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=2070"
        height="h-[40vh]"
        overlayOpacity={0.6}
      >
        <div className="text-center">
          <AnimatedSection animation="fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Book Your <span className="font-tropical text-coral-light">Splash</span> Experience
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Reserve your spot for a creative adventure at Hilo Splash Haus
            </p>
          </AnimatedSection>
        </div>
      </ParallaxSection>

      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="fade-in">
            <SectionTitle
              title="Plan Your Visit"
              subtitle="Follow these simple steps to book your splatter paint session"
              center
            />
          </AnimatedSection>

          <div className="max-w-3xl mx-auto mb-16">
            <AnimatedSection animation="fade-in" delay={200}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-coral-light rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-2">Choose a Date & Time</h3>
                  <p className="text-gray-600">Select from our available time slots that work with your schedule</p>
                </div>

                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-coral-light rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-2">Provide Your Details</h3>
                  <p className="text-gray-600">Let us know who's coming so we can prepare for your visit</p>
                </div>

                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-coral-light rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-2">Confirm & Enjoy</h3>
                  <p className="text-gray-600">We'll contact you to confirm, then just show up and have fun!</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 mb-16">
          <AnimatedSection animation="fade-in">
            <SectionTitle
              title="Our Splash Packages"
              subtitle="Choose the perfect splash experience for you and your group"
              center
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 200}>
                <Card className="h-full">
                  <CardHeader className={`${index === 1 ? 'bg-gradient-coral' : 'bg-gradient-to-r from-teal to-teal-dark'} text-white`}>
                    <CardTitle>{pkg.title}</CardTitle>
                    <CardDescription className="text-white text-opacity-90">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-xl font-bold mb-4 text-center">{pkg.price}</p>
                    <h4 className="font-medium text-sm text-gray-600 mb-2">What's Included:</h4>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      <BookingCalendar />

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection animation="fade-in">
            <div className="max-w-3xl mx-auto">
              <SectionTitle
                title="Important Information"
                center
              />
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <Info className="h-5 w-5 text-coral mr-2" />
                    What to Wear
                  </h3>
                  <p>We recommend wearing clothes you don't mind getting paint on, although we provide aprons for everyone. Closed-toe shoes are recommended. The paint we use is water-based and washable, but may stain some fabrics. For the ultimate splash experience, white clothing can be fun as it shows the colors most vibrantly!</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <Info className="h-5 w-5 text-coral mr-2" />
                    Cancellation Policy
                  </h3>
                  <p>Cancellations made at least 24 hours in advance will receive a full refund. We understand plans change, but we appreciate your consideration as we prepare materials for each session. For cancellations within 24 hours, we offer a 50% credit that can be applied to a future booking within 60 days.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <Info className="h-5 w-5 text-coral mr-2" />
                    Group Bookings
                  </h3>
                  <p>For groups larger than 10 people, please contact us directly to arrange a private session. We offer special rates for large groups and can customize the experience based on your preferences. We're happy to accommodate parties, team building events, and other gatherings!</p>
                </div>
                
                <Alert className="bg-teal bg-opacity-10 border-teal">
                  <HelpCircle className="h-4 w-4 text-teal" />
                  <AlertTitle>Helpful Tips</AlertTitle>
                  <AlertDescription>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Arrive 10 minutes early to get settled and choose your colors</li>
                      <li>Sessions typically last 2 hours from start to finish</li>
                      <li>We have storage lockers for your belongings</li>
                      <li>Paintings need about 30 minutes to dry before taking home</li>
                      <li>Our café remains open 1 hour after your session if you'd like to enjoy a drink while your art dries</li>
                    </ul>
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </Layout>
  );
};

export default BookPage;
