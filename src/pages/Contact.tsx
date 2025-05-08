
import React from 'react';
import Layout from '@/components/Layout/Layout';
import SectionTitle from '@/components/shared/SectionTitle';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would connect to a backend API
    // Here we're just showing a success message
    toast({
      title: "Message Sent!",
      description: "We've received your message and will respond within 24 hours.",
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-10">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <AnimatedSection animation="fade-in" forceVisible={true}>
            <SectionTitle
              title="Contact Us"
              subtitle="Have questions or want to learn more? We'd love to hear from you!"
              center
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-12">
            <AnimatedSection animation="fade-in-left" delay={200} forceVisible={true} className="order-2 lg:order-1">
              <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium">Name</label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium">Email</label>
                      <Input id="email" type="email" placeholder="Your email" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
                    <Input id="subject" placeholder="What's this about?" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..." 
                      className="min-h-[120px]"
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-coral hover:shadow-lg"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-right" delay={400} forceVisible={true} className="order-1 lg:order-2">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold">Get In Touch</h3>
                <p className="text-gray-700">
                  We're here to answer any questions you might have about our experiences, 
                  events, or anything else. Feel free to reach out to us!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-coral p-3 rounded-full text-white mr-4">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Location</h4>
                      <p className="text-gray-700">123 Oceanside Avenue<br />Hilo, Hawaii 96720</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-coral p-3 rounded-full text-white mr-4">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Phone</h4>
                      <p className="text-gray-700">(808) 555-1234</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-coral p-3 rounded-full text-white mr-4">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Email</h4>
                      <p className="text-gray-700">aloha@hilosplashhaus.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-coral p-3 rounded-full text-white mr-4">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Hours</h4>
                      <div className="text-gray-700">
                        <p>Monday - Thursday: 10am - 8pm</p>
                        <p>Friday - Saturday: 9am - 10pm</p>
                        <p>Sunday: 9am - 6pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 h-80 rounded-xl overflow-hidden shadow-lg">
                <iframe 
                  title="Hilo Splash Haus Map" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59590.07571297803!2d-155.11105376443793!3d19.71675711108058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x79524b5898188a9f%3A0x7661c268254a1990!2sHilo%2C%20HI!5e0!3m2!1sen!2sus!4v1714316893942!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
