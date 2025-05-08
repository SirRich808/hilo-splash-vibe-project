
import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format, addDays, isBefore, startOfDay } from "date-fns";
import { CalendarIcon, CalendarCheck, Clock, Users } from "lucide-react";
import AnimatedSection from '../shared/AnimatedSection';
import { toast } from "@/components/ui/use-toast";

const BookingCalendar: React.FC = () => {
  const today = new Date();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | undefined>(undefined);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [participants, setParticipants] = useState('2');
  const [specialRequests, setSpecialRequests] = useState('');

  // Generate time slots (these would come from a backend in a real app)
  const generateTimeSlots = (selectedDate: Date | undefined) => {
    if (!selectedDate) return [];
    
    // Return different time slots based on day of week for variety
    const day = selectedDate.getDay();
    
    // Weekend slots (more options)
    if (day === 0 || day === 6) {
      return [
        "9:00 AM - 11:00 AM", 
        "11:30 AM - 1:30 PM", 
        "2:00 PM - 4:00 PM", 
        "4:30 PM - 6:30 PM",
        "7:00 PM - 9:00 PM" // Evening slot on weekends
      ];
    }
    
    // Weekday slots
    return [
      "10:00 AM - 12:00 PM",
      "1:00 PM - 3:00 PM",
      "3:30 PM - 5:30 PM"
    ];
  };

  const timeSlots = generateTimeSlots(date);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !selectedTimeSlot) {
      toast({
        title: "Booking incomplete",
        description: "Please select both a date and time slot for your painting session.",
        variant: "destructive"
      });
      return;
    }

    if (!name || !email) {
      toast({
        title: "Information needed",
        description: "Please provide your name and email to complete the booking request.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Booking Request Received!",
      description: `Thank you ${name}! Your booking request for ${format(date, 'MMMM d, yyyy')} at ${selectedTimeSlot} has been received. We'll contact you shortly to confirm. Prepare for a splash-tastic time!`,
      className: "bg-teal text-white",
    });

    // Reset form
    setDate(undefined);
    setSelectedTimeSlot(undefined);
    setName('');
    setEmail('');
    setParticipants('2');
    setSpecialRequests('');
  };

  const isDateDisabled = (date: Date) => {
    // Disable dates in the past or more than 3 months in the future
    const today = startOfDay(new Date());
    const maxDate = addDays(today, 90);
    return isBefore(date, today) || isBefore(maxDate, date);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection animation="fade-in">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Splash Experience</h2>
            <p className="text-lg text-gray-600">
              Select a date and time that works for you, and we'll prepare everything for your creative adventure!
              Our 2-hour sessions include all materials and guidance from our friendly staff.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in" delay={200}>
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="bg-gradient-coral text-white rounded-t-lg">
              <CardTitle className="text-center">Schedule Your Visit</CardTitle>
              <CardDescription className="text-white text-opacity-90 text-center">
                Sessions are 2 hours long, all materials included
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Calendar Selection */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <CalendarIcon className="h-5 w-5 text-coral" />
                      <Label htmlFor="date" className="text-lg font-medium">Select Date</Label>
                    </div>
                    
                    <div className="border rounded-md p-2">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={isDateDisabled}
                        className="rounded-md"
                      />
                    </div>
                  </div>

                  {/* Time Slots & User Info */}
                  <div className="space-y-6">
                    {date ? (
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-coral" />
                          <Label className="text-lg font-medium">Available Time Slots</Label>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {timeSlots.map((slot) => (
                            <Button
                              key={slot}
                              type="button"
                              variant={selectedTimeSlot === slot ? "default" : "outline"}
                              className={selectedTimeSlot === slot ? "bg-coral text-white" : ""}
                              onClick={() => setSelectedTimeSlot(slot)}
                            >
                              {slot}
                            </Button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-32 border rounded-md bg-gray-50">
                        <p className="text-gray-500">Please select a date first</p>
                      </div>
                    )}

                    <div className="space-y-4 pt-4">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-coral" />
                        <Label className="text-lg font-medium">Your Information</Label>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input 
                            id="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="Your name"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="your.email@example.com"
                            type="email"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="participants">Number of Participants</Label>
                          <Input 
                            id="participants" 
                            value={participants} 
                            onChange={(e) => setParticipants(e.target.value)} 
                            type="number"
                            min="1"
                            max="10"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="special-requests">Special Requests (Optional)</Label>
                          <Input
                            id="special-requests"
                            value={specialRequests}
                            onChange={(e) => setSpecialRequests(e.target.value)}
                            placeholder="Any special requests or accommodations"
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-4">
                  <Button type="submit" className="bg-gradient-coral hover:shadow-lg transition-all animate-subtle-pulse w-full md:w-auto px-8 py-2">
                    <CalendarCheck className="mr-2 h-5 w-5" /> Request Booking
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BookingCalendar;
