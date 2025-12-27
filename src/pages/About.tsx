import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Shield, Award, Sparkles, Users, CheckCircle, Wrench } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";

const values = [
  {
    icon: Heart,
    title: "Family Owned",
    description: "We're a local family business committed to serving our Bakersfield community with integrity.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Your vehicle is protected. We carry full liability insurance for your peace of mind.",
  },
  {
    icon: Award,
    title: "Excellence Driven",
    description: "We hold ourselves to the highest standards in every detail we perform.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our priority. We go above and beyond for every client.",
  },
];

const certifiedProcess = [
  "Pre-wash foam application",
  "Hand wash with pH-neutral soap",
  "Clay bar decontamination",
  "Iron remover treatment",
  "Tar and sap removal",
  "Paint depth measurement",
  "Multi-stage polish",
  "Panel wipe down",
  "Ceramic coating application",
  "Final inspection",
];

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-charcoal-light to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Meet Ethan & <span className="text-gradient-gold">Our Story</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Where passion meets precision. Discover the people behind Elegant Detailing.
            </p>
          </div>
        </div>
      </section>

      {/* Owner Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border">
                <img
                  src={heroCar}
                  alt="Ethan - Owner of Elegant Detailing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-charcoal-lighter border border-border rounded-xl p-6 shadow-2xl">
                <p className="text-3xl font-heading font-bold text-primary mb-1">5+</p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Passion for <span className="text-gradient-gold">Perfection</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi, I'm Ethan, the founder and lead detailer at Elegant Detailing. My journey 
                  into auto detailing started with a simple love for cars and a desire to see 
                  them shine like they did on the showroom floor.
                </p>
                <p>
                  What began as a weekend hobby quickly grew into a passion. I spent countless 
                  hours learning advanced techniques, investing in professional-grade equipment, 
                  and perfecting my craft. Today, I'm proud to bring that same dedication to 
                  every vehicle I touch.
                </p>
                <p>
                  As a family-owned business, we understand the value of trust and personal 
                  service. When you choose Elegant Detailing, you're not just getting a service—
                  you're getting a partner who cares about your vehicle as much as you do.
                </p>
              </div>
              <Card variant="glass" className="p-6">
                <p className="text-lg italic text-foreground">
                  "My mission is simple: to deliver elite customer service while transforming 
                  vehicles with meticulous attention to every detail."
                </p>
                <p className="text-primary font-heading font-bold mt-3">— Ethan, Owner</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-charcoal-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our <span className="text-gradient-gold">Values</span>
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do at Elegant Detailing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={value.title}
                variant="elevated"
                className="p-6 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certified Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                50-Point Certified <span className="text-gradient-gold">Detail Process</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Every full detail follows our comprehensive checklist to ensure nothing is 
                overlooked. Here's a sample of what goes into our premium detailing process:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {certifiedProcess.map((step, index) => (
                  <div key={step} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-border">
                <img
                  src={heroCar}
                  alt="Professional detailing process"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-heading font-bold">
                50+ Checkpoints
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 bg-charcoal-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Professional <span className="text-gradient-gold">Equipment</span>
            </h2>
            <p className="text-muted-foreground">
              We use only the best professional-grade tools and premium products.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Rupes Polishers", description: "Industry-leading dual-action polishing machines for flawless correction." },
              { title: "IK Foam Sprayers", description: "Premium foam cannons for safe and effective pre-wash treatment." },
              { title: "Gtechniq Coatings", description: "Professional-grade ceramic coatings with proven durability." },
              { title: "Paint Thickness Gauge", description: "Digital measurement ensures safe and effective paint correction." },
              { title: "LED Inspection Lights", description: "High-powered lighting reveals every imperfection." },
              { title: "Steam Cleaners", description: "Deep sanitization for interior surfaces and fabrics." },
            ].map((item, index) => (
              <Card
                key={item.title}
                variant="gold"
                className="p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Wrench className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faith Statement */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg italic text-muted-foreground mb-4">
              "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters."
            </p>
            <p className="text-primary font-heading font-bold">— Colossians 3:23</p>
            <p className="text-sm text-muted-foreground mt-4">
              As a Christian-owned business, we approach every job with integrity, excellence, and gratitude.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Experience the Elegant <span className="text-gradient-gold">Difference</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to give your vehicle the care it deserves? Let's get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/book">
                  Book Appointment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
