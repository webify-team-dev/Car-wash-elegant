import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Phone, Sparkles, Shield, Clock, Car } from "lucide-react";
import paintCorrection from "@/assets/paint-correction.jpg";
import ceramicCoating from "@/assets/ceramic-coating.jpg";
import interiorDetail from "@/assets/interior-detail.jpg";
import maintenanceWash from "@/assets/maintenance-wash.jpg";

const paintCorrectionPricing = [
  { type: "Sedan/Coupe", price: "Starting at $350" },
  { type: "SUV/Crossover", price: "Starting at $450" },
  { type: "Truck/Large SUV", price: "Starting at $550" },
];

const ceramicPricing = [
  { 
    name: "Ceramic Coating Only", 
    description: "Without paint correction",
    price: "$550 - $800",
    features: ["2-3 year protection", "Hydrophobic finish", "UV protection", "Easy maintenance"]
  },
  { 
    name: "Full Package", 
    description: "With 1-step correction",
    price: "Starting at $1,150",
    features: ["Paint correction included", "5+ year protection", "Maximum gloss", "Full decontamination"]
  },
];

const maintenancePackages = [
  { type: "Sedan/Coupe", level1: "$65 - $75", level2: "$95 - $110" },
  { type: "SUV/Crossover", level1: "$75 - $85", level2: "$110 - $125" },
  { type: "Truck/Large SUV", level1: "$90 - $100", level2: "$125 - $150" },
];

const addOns = [
  "Headlight Restoration",
  "Engine Bay Cleaning",
  "Odor Elimination",
  "Leather Conditioning",
  "Pet Hair Removal",
  "Wheel/Rim Deep Clean",
  "Clay Bar Treatment",
  "Tar/Sap Removal",
];

const Services = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-charcoal-light to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Premium Services
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Our Services & <span className="text-gradient-gold">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Transparent pricing for premium detailing services. We bring professional-grade 
              equipment and expertise directly to you.
            </p>
          </div>
        </div>
      </section>

      {/* Paint Correction */}
      <section id="paint-correction" className="py-20 bg-background scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Paint <span className="text-gradient-gold">Correction</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our multi-stage paint correction process removes swirl marks, scratches, 
                oxidation, and other imperfections to restore your vehicle's paint to a 
                flawless, mirror-like finish.
              </p>
              <ul className="space-y-3">
                {["Removes swirl marks & scratches", "Multi-stage polishing", "Paint measurement analysis", "Showroom-quality finish"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Card variant="gold" className="mt-8">
                <CardHeader>
                  <CardTitle className="text-lg">Pricing by Vehicle Size</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {paintCorrectionPricing.map((item) => (
                    <div key={item.type} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="text-muted-foreground">{item.type}</span>
                      <span className="font-bold text-primary">{item.price}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border">
              <img src={paintCorrection} alt="Paint correction process" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Ceramic Coating */}
      <section id="ceramic-coating" className="py-20 bg-charcoal-light scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 aspect-[4/3] rounded-2xl overflow-hidden border border-border">
              <img src={ceramicCoating} alt="Ceramic coating application" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Ceramic <span className="text-gradient-gold">Coating</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Protect your investment with our professional ceramic coating service. 
                This advanced nanotechnology creates a permanent bond with your paint, 
                providing years of protection and an incredible hydrophobic finish.
              </p>
              <ul className="space-y-3">
                {["Long-lasting protection", "Extreme water beading", "UV & chemical resistance", "Enhanced gloss & depth"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {ceramicPricing.map((pkg) => (
                  <Card key={pkg.name} variant="gold" className="relative overflow-hidden">
                    <CardHeader>
                      <CardTitle className="text-lg">{pkg.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{pkg.description}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-primary mb-4">{pkg.price}</p>
                      <ul className="space-y-2">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Detailing */}
      <section id="interior-detailing" className="py-20 bg-background scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Interior <span className="text-gradient-gold">Detailing</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Experience a complete interior transformation. We deep clean every surface, 
                condition leather, sanitize high-touch areas, and eliminate odors to make 
                your vehicle's interior look and feel brand new.
              </p>
              <ul className="space-y-3">
                {[
                  "Full vacuuming & steam cleaning",
                  "Deep seat cleaning & conditioning",
                  "Dashboard & console sanitizing",
                  "Leather/fabric treatment",
                  "Pet hair removal specialty",
                  "Odor elimination"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <Check className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Card variant="gold" className="mt-8">
                <CardHeader>
                  <CardTitle className="text-lg">Starting Prices</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Sedan/Coupe</span>
                    <span className="font-bold text-primary">Starting at $150</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">SUV/Crossover</span>
                    <span className="font-bold text-primary">Starting at $180</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Truck/Large SUV</span>
                    <span className="font-bold text-primary">Starting at $220</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border">
              <img src={interiorDetail} alt="Interior detailing" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Packages */}
      <section id="maintenance" className="py-20 bg-charcoal-light scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Maintenance <span className="text-gradient-gold">Packages</span>
            </h2>
            <p className="text-muted-foreground">
              Keep your vehicle looking its best between full details with our maintenance packages.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border">
              <img src={maintenanceWash} alt="Maintenance wash" className="w-full h-full object-cover" />
            </div>
            
            <Card variant="gold">
              <CardHeader>
                <CardTitle>Maintenance Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 text-muted-foreground font-medium">Vehicle Type</th>
                        <th className="text-center py-3 text-muted-foreground font-medium">Level 1</th>
                        <th className="text-center py-3 text-muted-foreground font-medium">Level 2</th>
                      </tr>
                    </thead>
                    <tbody>
                      {maintenancePackages.map((pkg) => (
                        <tr key={pkg.type} className="border-b border-border last:border-0">
                          <td className="py-4 text-foreground">{pkg.type}</td>
                          <td className="py-4 text-center text-primary font-bold">{pkg.level1}</td>
                          <td className="py-4 text-center text-primary font-bold">{pkg.level2}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2"><strong>Level 1:</strong> Exterior wash, tire dressing, interior vacuum</p>
                  <p className="text-sm text-muted-foreground"><strong>Level 2:</strong> Full exterior detail, interior wipe-down, glass cleaning</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Available <span className="text-gradient-gold">Add-Ons</span>
            </h2>
            <p className="text-muted-foreground">
              Customize your detail with our additional services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {addOns.map((addon) => (
              <div key={addon} className="flex items-center gap-3 p-4 rounded-xl bg-charcoal-light border border-border hover:border-primary/50 transition-colors">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground text-sm">{addon}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal-light">
        <div className="container mx-auto px-4">
          <Card variant="gradient" className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
                  Ready to Book Your Service?
                </h2>
                <p className="text-muted-foreground">
                  Schedule your appointment today and experience the Elegant Detailing difference.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/book">
                    Book Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:6614014183">
                    <Phone className="w-5 h-5" />
                    Call Us
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
