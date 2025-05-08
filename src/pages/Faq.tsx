
import React from 'react';
import Layout from '@/components/Layout/Layout';
import SectionTitle from '@/components/shared/SectionTitle';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq: React.FC = () => {
  const faqCategories = [
    {
      category: "About Our Experiences",
      questions: [
        {
          question: "Do I need to have artistic experience?",
          answer: "Not at all! Our sessions are designed for everyone, regardless of artistic ability. Our staff provides all the guidance needed to create a beautiful piece."
        },
        {
          question: "What should I wear?",
          answer: "We provide aprons to protect your clothing, but we recommend wearing clothes you wouldn't mind getting a bit of paint on, just to be safe."
        },
        {
          question: "How long do sessions last?",
          answer: "Our standard sessions are 2 hours long, which includes setup, painting time, and cleanup. Special events may vary in duration."
        },
        {
          question: "Can I take my artwork home the same day?",
          answer: "Yes! Your artwork will be dry enough to transport home the same day. We provide carriers to safely transport your masterpiece."
        }
      ]
    },
    {
      category: "Bookings & Reservations",
      questions: [
        {
          question: "How far in advance should I book?",
          answer: "We recommend booking at least 48-72 hours in advance, especially for weekend sessions which tend to fill quickly. Last-minute bookings may be accommodated based on availability."
        },
        {
          question: "What is your cancellation policy?",
          answer: "Cancellations made 24 hours or more before your scheduled session will receive a full refund. Cancellations with less than 24 hours' notice may be eligible for a 50% refund or rescheduling option."
        },
        {
          question: "Can I book for a large group?",
          answer: "Absolutely! We accommodate groups of various sizes and offer special group rates. For groups of 8 or more, please contact us directly for availability and pricing."
        },
        {
          question: "Do you offer gift certificates?",
          answer: "Yes! Gift certificates are available for purchase online or in person and make excellent presents for birthdays, holidays, or just because."
        }
      ]
    },
    {
      category: "Cafe & Facilities",
      questions: [
        {
          question: "Can I visit the cafe without booking a painting session?",
          answer: "Absolutely! Our cafe is open to the public during our regular business hours. Feel free to stop by for a coffee or smoothie anytime."
        },
        {
          question: "Do you accommodate dietary restrictions?",
          answer: "Yes, we offer several vegan, gluten-free, and allergen-friendly options. Please let us know about any specific dietary needs when ordering."
        },
        {
          question: "Is your facility wheelchair accessible?",
          answer: "Yes, our entire facility is wheelchair accessible, including painting areas, the cafe, and restrooms."
        },
        {
          question: "Is there parking available?",
          answer: "Yes, we have a dedicated parking lot with free parking for our guests. Additional street parking is also available nearby."
        }
      ]
    },
    {
      category: "Private Events & Parties",
      questions: [
        {
          question: "What types of private events do you host?",
          answer: "We host a variety of private events including birthday parties, corporate team building, bachelorette/bachelor parties, family reunions, and more. Our space is versatile and can be customized for your needs."
        },
        {
          question: "Can you provide catering for private events?",
          answer: "Yes, we offer catering packages that can be added to your private event booking. We also allow outside catering with advance notice and approval."
        },
        {
          question: "How many people can you accommodate for a private event?",
          answer: "Our space can comfortably accommodate groups of up to 40 people for private events. For larger groups, please contact us to discuss options."
        },
        {
          question: "Do you offer any special packages for private events?",
          answer: "Yes! We have several packages designed for different types of events and group sizes. Contact our events coordinator for detailed information and custom options."
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-10">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <AnimatedSection animation="fade-in" forceVisible={true}>
            <SectionTitle
              title="Frequently Asked Questions"
              subtitle="Find answers to common questions about our experiences, bookings, and more"
              center
            />
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={200} className="mb-12" forceVisible={true}>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-center mb-8">
                Can't find what you're looking for? Feel free to <Link to="/contact" className="text-coral hover:underline">contact us</Link> directly!
              </p>
              
              {faqCategories.map((category, index) => (
                <div key={index} className="mb-10">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">{category.category}</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, i) => (
                      <AccordionItem key={i} value={`item-${index}-${i}`}>
                        <AccordionTrigger className="text-left font-medium text-gray-700 hover:text-coral">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={300} forceVisible={true} className="bg-gradient-to-r from-coral/10 to-teal/10 p-8 rounded-xl shadow-sm my-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="mb-6">
                Our friendly team is here to help! Reach out to us via phone, email, or visit us in person.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  className="bg-gradient-coral hover:shadow-lg"
                  asChild
                >
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-teal text-teal hover:bg-teal/10"
                  asChild
                >
                  <Link to="/book">
                    Book a Session
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </Layout>
  );
};

export default Faq;
