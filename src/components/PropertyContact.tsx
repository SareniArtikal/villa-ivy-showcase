import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Calendar,
  MessageCircle
} from "lucide-react";

export const PropertyContact = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-villa-text mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-villa-text/70 max-w-2xl mx-auto">
            Ready to make Villa Ivy your home? Get in touch with our team for more information
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-card shadow-villa-card">
              <CardHeader>
                <CardTitle className="text-2xl text-villa-text">
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-villa-blue/10">
                    <Mail className="w-6 h-6 text-villa-blue" />
                  </div>
                  <div>
                    <div className="font-medium text-villa-text">Email</div>
                    <div className="text-villa-text/70">viktor.pirovic@gmail.com</div>
                    <div className="text-sm text-villa-text/50">Primary contact for inquiries</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-villa-blue/10">
                    <Phone className="w-6 h-6 text-villa-blue" />
                  </div>
                  <div>
                    <div className="font-medium text-villa-text">Phone</div>
                    <div className="text-villa-text/70">+385 (0) 21 757 239</div>
                    <div className="text-villa-text/70">+385 (0) 91 585 6216</div>
                    <div className="text-sm text-villa-text/50">Available during business hours</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-villa-blue/10">
                    <MapPin className="w-6 h-6 text-villa-blue" />
                  </div>
                  <div>
                    <div className="font-medium text-villa-text">Office Location</div>
                    <div className="text-villa-text/70">DRAGE IVANIŠEVIĆA 1</div>
                    <div className="text-villa-text/70">21310 OMIŠ, Croatia</div>
                    <div className="text-sm text-villa-text/50">STUDIO FRADRIGO d.o.o.</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-villa-blue/10">
                    <Clock className="w-6 h-6 text-villa-blue" />
                  </div>
                  <div>
                    <div className="font-medium text-villa-text">Business Hours</div>
                    <div className="text-villa-text/70">Monday - Friday: 9:00 AM - 6:00 PM</div>
                    <div className="text-villa-text/70">Saturday: 10:00 AM - 4:00 PM</div>
                    <div className="text-sm text-villa-text/50">Closed on Sundays</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-card shadow-villa-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-villa-text mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button 
                    className="w-full justify-start bg-gradient-primary hover:shadow-villa-hover"
                    size="lg"
                  >
                    <Calendar className="w-5 h-5 mr-3" />
                    Schedule a Viewing
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-villa-blue text-villa-blue hover:bg-villa-blue hover:text-white"
                    size="lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-3" />
                    Live Chat Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card shadow-villa-card">
            <CardHeader>
              <CardTitle className="text-2xl text-villa-text">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-villa-text">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="Your first name"
                    className="border-villa-blue/20 focus:border-villa-blue"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-villa-text">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Your last name"
                    className="border-villa-blue/20 focus:border-villa-blue"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-villa-text">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="border-villa-blue/20 focus:border-villa-blue"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-villa-text">Phone (Optional)</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+385 xx xxx xxxx"
                  className="border-villa-blue/20 focus:border-villa-blue"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-villa-text">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="Inquiry about Villa Ivy"
                  className="border-villa-blue/20 focus:border-villa-blue"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-villa-text">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Please tell us more about your interest in Villa Ivy..."
                  className="border-villa-blue/20 focus:border-villa-blue min-h-[120px]"
                />
              </div>

              <Button 
                className="w-full bg-gradient-primary hover:shadow-villa-hover transition-all duration-300"
                size="lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>

              <p className="text-sm text-villa-text/50 text-center">
                We'll get back to you within 24 hours during business days.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};