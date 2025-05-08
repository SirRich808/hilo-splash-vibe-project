
import React, { useState, useEffect } from 'react';
import SectionTitle from '../shared/SectionTitle';
import AnimatedSection from '../shared/AnimatedSection';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah M.',
      role: 'Local Artist',
      comment: 'Hilo Splash Haus has become my creative sanctuary. The energy here is incredible, and the staff is so supportive of the artistic process. Not to mention their guava smoothies are to die for!'
    },
    {
      id: 2,
      name: 'John D.',
      role: 'Tourist from California',
      comment: 'We brought the whole family during our vacation, and it was the highlight of our trip! The kids had a blast with the paint, and my wife and I enjoyed the amazing coffee. A must-visit in Hilo!'
    },
    {
      id: 3,
      name: 'Leilani K.',
      role: 'Hilo Resident',
      comment: 'I hosted my daughter\'s 10th birthday here, and the team went above and beyond. The space is beautiful, the painting was so much fun, and they accommodated our group perfectly.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

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
                  <p className="text-lg md:text-xl mb-6 italic text-white">"{testimonial.comment}"</p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-coral-light flex items-center justify-center text-lg font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-teal-light">{testimonial.role}</p>
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
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
