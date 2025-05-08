
import React, { useState, useEffect } from 'react';
import SectionTitle from '../shared/SectionTitle';
import AnimatedSection from '../shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  date: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah M.',
      role: 'Local Artist',
      comment: 'Hilo Splash Haus has become my creative sanctuary. The energy here is incredible, and the staff is so supportive of the artistic process. Not to mention their guava smoothies are to die for! I\'ve brought friends from the mainland here and they always leave with huge smiles and amazing artwork.',
      rating: 5,
      date: 'January 2023'
    },
    {
      id: 2,
      name: 'John D.',
      role: 'Tourist from California',
      comment: 'We brought the whole family during our vacation, and it was the highlight of our trip! The kids had a blast with the paint, and my wife and I enjoyed the amazing coffee. The staff was so patient with our little ones, and everyone left with a piece of art we\'re proud to display in our home. A must-visit in Hilo!',
      rating: 5,
      date: 'March 2023'
    },
    {
      id: 3,
      name: 'Leilani K.',
      role: 'Hilo Resident',
      comment: 'I hosted my daughter\'s 10th birthday here, and the team went above and beyond. The space is beautiful, the painting was so much fun, and they accommodated our group perfectly. The kids are still talking about it months later! The café also provided delicious snacks that even the pickiest eaters loved.',
      rating: 5,
      date: 'December 2022'
    },
    {
      id: 4,
      name: 'Mark T.',
      role: 'Corporate Team Leader',
      comment: 'Our team building event at Hilo Splash Haus was exactly what our office needed. It got everyone out of their comfort zones and laughing together. The staff facilitated some great creative exercises that really helped with communication, and the café space was perfect for our post-painting discussion.',
      rating: 4,
      date: 'February 2023'
    },
    {
      id: 5,
      name: 'Aiko Y.',
      role: 'Honolulu Visitor',
      comment: 'Worth the trip from Oahu! I came to visit family in Hilo and we decided to try this place. It was so therapeutic and different from the typical tourist activities. We all got to express ourselves and the paintings now hang in our homes as a reminder of our time together. The tropical drinks were the perfect complement to the creative experience!',
      rating: 5,
      date: 'April 2023'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-teal-dark to-teal text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection animation="fade-in">
          <SectionTitle
            title="What Our Guests Say"
            subtitle="Don't just take our word for it - hear from those who've experienced Hilo Splash Haus"
            center
            className="text-white"
          />
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[300px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute w-full transition-all duration-500 transform ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0 z-10' 
                    : 'opacity-0 translate-x-20 z-0'
                }`}
              >
                <AnimatedSection animation="fade-in" className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                  <div className="mb-4 flex justify-center">
                    <Quote className="h-10 w-10 text-coral-light opacity-50" />
                  </div>
                  <p className="text-lg md:text-xl mb-6 italic text-white">"{testimonial.comment}"</p>
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-coral-light flex items-center justify-center text-lg font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-teal-light">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                        <span className="ml-2 text-sm">{testimonial.date}</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-white' : 'bg-white bg-opacity-30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-teal-light max-w-2xl mx-auto mb-6">
              We're proud to have welcomed thousands of guests from around the world 
              to experience the creative joy of splatter painting in our tropical paradise.
            </p>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
              asChild
            >
              <Link to="/testimonials">
                Read More Testimonials
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
