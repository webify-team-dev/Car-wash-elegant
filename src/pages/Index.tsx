import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, Users, Truck, Sparkles, Award, ArrowRight, Phone, Quote } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import paintCorrection from "@/assets/paint-correction.jpg";
import ceramicCoating from "@/assets/ceramic-coating.jpg";
import interiorDetail from "@/assets/interior-detail.jpg";
import maintenanceWash from "@/assets/maintenance-wash.jpg";

const services = [
  {
    title: "Paint Correction",
    description: "Restore your paint to a flawless, mirror-like finish by removing swirls, scratches, and oxidation.",
    image: paintCorrection,
    href: "/services#paint-correction",
  },
  {
    title: "Ceramic Coating",
    description: "Ultimate paint protection with long-lasting hydrophobic properties and brilliant shine.",
    image: ceramicCoating,
    href: "/services#ceramic-coating",
  },
  {
    title: "Interior Detailing",
    description: "Complete interior restoration including deep cleaning, conditioning, and sanitizing.",
    image: interiorDetail,
    href: "/services#interior-detailing",
  },
  {
    title: "Maintenance Packages",
    description: "Regular maintenance to keep your vehicle looking its best between full details.",
    image: maintenanceWash,
    href: "/services#maintenance",
  },
];

const trustBadges = [
  { icon: Users, label: "Family Owned" },
  { icon: Star, label: "5-Star Rated" },
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Truck, label: "Mobile Service" },
];

const reviews = [
  {
    text: "My car looks brand new! Ethan's attention to detail is unmatched. Best detailer in Bakersfield!",
    author: "Michael R.",
    rating: 5,
  },
  {
    text: "Professional, punctual, and the results speak for themselves. Highly recommend Elegant Detailing!",
    author: "Sarah T.",
    rating: 5,
  },
  {
    text: "The ceramic coating on my Lexus is incredible. Water beads off like magic. Worth every penny!",
    author: "David L.",
    rating: 5,
  },
];

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroCar}
            alt="Luxury vehicle showcasing premium auto detailing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Premium Mobile Detailing in Bakersfield
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-foreground leading-tight animate-slide-up">
              Premium Mobile Auto Detailing in{" "}
              <span className="text-gradient-gold">Bakersfield</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
              We bring elite detailing to your home or office. Your car deserves elegance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/book">
                  Get Instant Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="tel:6614014183">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-charcoal-light border-y border-border py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustBadges.map((badge, index) => (
              <div
                key={badge.label}
                className="flex items-center justify-center gap-3 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <badge.icon className="w-6 h-6 text-primary" />
                <span className="font-medium text-foreground">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Premium <span className="text-gradient-gold">Services</span>
            </h2>
            <p className="text-muted-foreground">
              From paint correction to ceramic coatings, we offer comprehensive detailing services 
              to transform your vehicle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.title}
                variant="elevated"
                className="group overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="gold" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-charcoal-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  Why Choose <span className="text-gradient-gold">Elegant Detailing?</span>
                </h2>
                <p className="text-muted-foreground">
                  We're not just another detailing service. We bring passion, precision, 
                  and professional-grade equipment directly to you.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Truck,
                    title: "We Come to You",
                    description: "Mobile convenience—we detail at your home, office, or anywhere you need us.",
                  },
                  {
                    icon: Sparkles,
                    title: "Attention to Every Detail",
                    description: "Our 50-point certified detail process ensures nothing is overlooked.",
                  },
                  {
                    icon: Award,
                    title: "Brand New Results",
                    description: "We transform vehicles to look like they just rolled off the showroom floor.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="flex gap-4 animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="gold" size="lg" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-border">
                <img
                  src={heroCar}
                  alt="Premium detailing results"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-charcoal-lighter border border-border rounded-xl p-6 shadow-2xl">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">4.9 Average Rating</p>
                <p className="font-bold text-foreground">100+ Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              What Our <span className="text-gradient-gold">Customers Say</span>
            </h2>
            <p className="text-muted-foreground">
              Don't just take our word for it. Here's what our satisfied customers have to say.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card
                key={index}
                variant="gold"
                className="p-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="text-foreground mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-foreground">{review.author}</span>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-gradient-to-r from-charcoal-light via-charcoal to-charcoal-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(45_90%_55%_/_0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(45_90%_55%_/_0.1),transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
              Ready to Transform Your <span className="text-gradient-gold">Vehicle?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Book your appointment today and experience the Elegant Detailing difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/book">
                  Book Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="tel:6614014183">
                  <Phone className="w-5 h-5" />
                  (661) 401-4183
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
