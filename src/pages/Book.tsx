
import React from 'react';
import Layout from '@/components/Layout/Layout';
import SectionTitle from '@/components/shared/SectionTitle';
import BookingCalendar from '@/components/booking/BookingCalendar';
import ParallaxSection from '@/components/shared/ParallaxSection';
import AnimatedSection from '@/components/shared/AnimatedSection';

const BookPage: React.FC = () => {
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
                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-coral-light rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-2">Choose a Date & Time</h3>
                  <p className="text-gray-600">Select from our available time slots that work with your schedule</p>
                </div>

                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-coral-light rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-2">Provide Your Details</h3>
                  <p className="text-gray-600">Let us know who's coming so we can prepare for your visit</p>
                </div>

                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
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
                  <h3 className="text-xl font-bold mb-2">What to Wear</h3>
                  <p>We recommend wearing clothes you don't mind getting paint on, although we provide aprons for everyone. Closed-toe shoes are recommended.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-2">Cancellation Policy</h3>
                  <p>Cancellations made at least 24 hours in advance will receive a full refund. We understand plans change, but we appreciate your consideration as we prepare materials for each session.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-2">Group Bookings</h3>
                  <p>For groups larger than 10 people, please contact us directly to arrange a private session. We're happy to accommodate parties, team building events, and other gatherings!</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </Layout>
  );
};

export default BookPage;
