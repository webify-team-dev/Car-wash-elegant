import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ZoomIn } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import paintCorrection from "@/assets/paint-correction.jpg";
import ceramicCoating from "@/assets/ceramic-coating.jpg";
import interiorDetail from "@/assets/interior-detail.jpg";
import maintenanceWash from "@/assets/maintenance-wash.jpg";

const categories = ["All", "Paint Correction", "Ceramic Coating", "Interior", "Full Detail"];

const galleryItems = [
  { id: 1, image: heroCar, category: "Full Detail", title: "McLaren Full Detail" },
  { id: 2, image: paintCorrection, category: "Paint Correction", title: "BMW Paint Correction" },
  { id: 3, image: ceramicCoating, category: "Ceramic Coating", title: "Lexus Ceramic Coating" },
  { id: 4, image: interiorDetail, category: "Interior", title: "Audi Interior Detail" },
  { id: 5, image: maintenanceWash, category: "Full Detail", title: "Mercedes Maintenance" },
  { id: 6, image: heroCar, category: "Ceramic Coating", title: "Lamborghini Urus Coating" },
  { id: 7, image: paintCorrection, category: "Paint Correction", title: "Corvette Correction" },
  { id: 8, image: ceramicCoating, category: "Ceramic Coating", title: "Tesla Model S Coating" },
  { id: 9, image: interiorDetail, category: "Interior", title: "Range Rover Interior" },
  { id: 10, image: maintenanceWash, category: "Full Detail", title: "Porsche 911 Detail" },
  { id: 11, image: heroCar, category: "Paint Correction", title: "Ferrari Paint Restoration" },
  { id: 12, image: ceramicCoating, category: "Ceramic Coating", title: "Aston Martin Coating" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-charcoal-light to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Our Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Our Work: Before & <span className="text-gradient-gold">After</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              See the transformations we create. Every vehicle gets the VIP treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-charcoal-light text-muted-foreground hover:text-foreground hover:bg-charcoal-lighter"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative aspect-square rounded-xl overflow-hidden border border-border cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedImage(item.id)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-heading font-bold text-foreground">{item.title}</p>
                  <p className="text-sm text-primary">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-20 bg-charcoal-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Featured <span className="text-gradient-gold">Vehicles</span>
            </h2>
            <p className="text-muted-foreground">
              Some of the luxury vehicles we've had the pleasure of detailing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Lamborghini Urus", service: "Ceramic Coating + Full Detail", image: heroCar },
              { name: "Corvette C8", service: "Paint Correction", image: paintCorrection },
              { name: "Lexus LC 500", service: "Full Interior Restoration", image: interiorDetail },
            ].map((vehicle, index) => (
              <div
                key={vehicle.name}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-1">{vehicle.name}</h3>
                  <p className="text-primary text-sm">{vehicle.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Make Your Car Look <span className="text-gradient-gold">This Good</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to transform your vehicle? Book your appointment today.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/book">
                Book Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <img
              src={galleryItems.find(item => item.id === selectedImage)?.image}
              alt=""
              className="w-full h-auto rounded-xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-charcoal-lighter flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
