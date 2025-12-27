import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Sparkles, ChevronDown, ChevronUp, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Paint Correction",
  "Ceramic Coating",
  "Interior Detailing",
  "Full Detail Package",
  "Maintenance Wash - Level 1",
  "Maintenance Wash - Level 2",
  "Other / Custom Request",
];

const faqs = [
  {
    question: "How far do you travel for mobile service?",
    answer: "We proudly serve all of Bakersfield and surrounding areas within a 30-mile radius. For locations outside this area, please contact us to discuss availability.",
  },
  {
    question: "How long does each service take?",
    answer: "Service times vary: Maintenance washes take 1-2 hours, interior details 2-4 hours, paint correction 4-8 hours, and ceramic coating packages 1-2 days depending on the prep work required.",
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept cash, all major credit cards, Venmo, Zelle, and PayPal for your convenience.",
  },
  {
    question: "Do I need to provide water or electricity?",
    answer: "Nope! Our mobile setup is fully self-contained. We bring our own water, power, and all necessary equipment.",
  },
  {
    question: "What if it rains on my appointment day?",
    answer: "We'll contact you to reschedule at no additional cost. Your appointment will be moved to the next available date that works for you.",
  },
];

const Book = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    service: "",
    date: "",
    time: "",
    address: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Request Submitted!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
    
    setFormData({
      name: "",
      phone: "",
      email: "",
      vehicle: "",
      service: "",
      date: "",
      time: "",
      address: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-charcoal-light to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Book Your Appointment
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Schedule Your <span className="text-gradient-gold">Detail</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Fill out the form below and we'll get back to you within 24 hours to confirm your appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form & Contact */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card variant="gold">
                <CardHeader>
                  <CardTitle className="text-2xl">Request an Appointment</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Full Name *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-charcoal-lighter border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Phone Number *</label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(661) 555-1234"
                          required
                          className="bg-charcoal-lighter border-border"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-charcoal-lighter border-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Vehicle (Year/Make/Model) *</label>
                      <Input
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleChange}
                        placeholder="2023 BMW M4"
                        required
                        className="bg-charcoal-lighter border-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Service Requested *</label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                      >
                        <SelectTrigger className="bg-charcoal-lighter border-border">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Preferred Date</label>
                        <Input
                          name="date"
                          type="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="bg-charcoal-lighter border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Preferred Time</label>
                        <Select
                          value={formData.time}
                          onValueChange={(value) => setFormData({ ...formData, time: value })}
                        >
                          <SelectTrigger className="bg-charcoal-lighter border-border">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                            <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                            <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                            <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                            <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                            <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                            <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                            <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Service Location Address *</label>
                      <Input
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="123 Main St, Bakersfield, CA 93309"
                        required
                        className="bg-charcoal-lighter border-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Additional Notes</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your vehicle's condition, specific concerns, or any special requests..."
                        rows={4}
                        className="bg-charcoal-lighter border-border resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="xl"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Request"}
                      <Send className="w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card variant="gold">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="tel:6614014183"
                    className="flex items-center gap-4 p-4 rounded-xl bg-charcoal-lighter hover:bg-primary/10 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call or Text</p>
                      <p className="font-bold text-foreground">(661) 401-4183</p>
                    </div>
                  </a>

                  <a
                    href="mailto:elegantdetailing100@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-charcoal-lighter hover:bg-primary/10 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email Us</p>
                      <p className="font-bold text-foreground text-sm">elegantdetailing100@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-charcoal-lighter">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Service Area</p>
                      <p className="font-bold text-foreground">Bakersfield, CA & Surrounding</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-charcoal-lighter">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Hours</p>
                      <p className="font-bold text-foreground">Mon - Sat: 9AM - 5PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card variant="gold" className="overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103537.67850166878!2d-119.10898!3d35.373292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ea6bc8e2cdae99%3A0x7ac25bf0abc3ed70!2sBakersfield%2C%20CA!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bakersfield service area map"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-charcoal-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Frequently Asked <span className="text-gradient-gold">Questions</span>
              </h2>
              <p className="text-muted-foreground">
                Have questions? We've got answers.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  variant="gold"
                  className="overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 flex items-center justify-between text-left"
                  >
                    <span className="font-heading font-bold text-foreground pr-4">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? "max-h-48" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-6 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Get Your Free Quote Today
            </h2>
            <p className="text-muted-foreground">
              Call us directly for immediate assistance or use the form above to request an appointment.
            </p>
            <a
              href="tel:6614014183"
              className="inline-flex items-center gap-3 text-3xl md:text-4xl font-heading font-bold text-primary hover:text-gold-light transition-colors"
            >
              <Phone className="w-8 h-8" />
              (661) 401-4183
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book;
