import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import { MotionReveal } from '@/components/motion/MotionReveal';
import { LoadingDots } from '@/components/motion/LoadingDots';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: 'We will get back to you within 24 hours.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Financial District', 'New York, NY 10004', 'United States'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['Main: +1 (555) 123-4567', 'Support: +1 (555) 123-4568', 'Toll-Free: 1-800-DSOUZA'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@dsouzabank.com', 'support@dsouzabank.com', 'careers@dsouzabank.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
    },
  ];

  return (
    <div className="flex flex-col">
      <Toaster />
      
      {/* Hero Section */}
      <MotionReveal>
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">Get in Touch</h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Have questions? We're here to help. Reach out to us through any of the channels below or fill out the contact form.
              </p>
            </div>
          </div>
        </section>
      </MotionReveal>

      {/* Contact Info Cards */}
      <MotionReveal delay={100}>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-border/50 premium-card">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex}>{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="mx-auto max-w-3xl">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="transition-all duration-base ease-premium focus:ring-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="transition-all duration-base ease-premium focus:ring-2"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={handleChange}
                          className="transition-all duration-base ease-premium focus:ring-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="How can we help?"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="transition-all duration-base ease-premium focus:ring-2"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="transition-all duration-base ease-premium focus:ring-2"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full premium-button" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <LoadingDots />
                          <span>Sending...</span>
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </MotionReveal>

      {/* Map Section */}
      <MotionReveal delay={100}>
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-8 text-center text-3xl font-bold tracking-tight md:text-4xl">
                Visit Our Headquarters
              </h2>
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368459391!3d40.71277597933027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a165bedccab%3A0x2cb2ddf003b5ae01!2sFinancial%20District%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DSOUZA BANK Location"
                />
              </div>
            </div>
          </div>
        </section>
      </MotionReveal>
    </div>
  );
}
