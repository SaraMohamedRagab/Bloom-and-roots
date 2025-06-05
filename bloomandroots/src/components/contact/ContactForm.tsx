import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you shortly.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-sage-800 mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-center text-sage-700 mb-12 max-w-2xl mx-auto">
          Have questions or need assistance? We're here to help! Fill out the form below,
          and a member of our team will get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="mt-1"
                />
              </div>

              <Button
                type="submit"
                className="bg-sage-500 hover:bg-sage-600 text-white w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-cream-100 p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-serif font-semibold text-sage-800 mb-6">
                Visit Our Store
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-terracotta-400 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Bloom & Root</p>
                    <p className="text-sage-700">
                      123 Botanical Avenue<br />
                      Garden District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-terracotta-400 mr-3" />
                  <a href="tel:+12125551234" className="text-sage-700 hover:underline">
                    (212) 555-1234
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-terracotta-400 mr-3" />
                  <a href="mailto:hello@bloomandroot.com" className="text-sage-700 hover:underline">
                    hello@bloomandroot.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-serif font-semibold text-sage-800 mb-4">
                Store Hours
              </h2>
              <div className="space-y-2 text-sage-700">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>11:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-sage-100 p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-serif font-semibold text-sage-800 mb-4">
                Customer Service
              </h2>
              <p className="text-sage-700 mb-4">
                Need help with an order or have a question about our products?
                Our customer service team is ready to assist you.
              </p>
              <p className="text-sage-700">
                Response time: Within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;