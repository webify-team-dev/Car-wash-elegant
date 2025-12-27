import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal-light border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center font-heading font-bold text-charcoal text-2xl">
                E
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-foreground">
                  Elegant Detailing
                </span>
                <span className="text-sm text-muted-foreground">Bakersfield Mobile Detail</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Where Elegance Meets Every Detail. Premium mobile auto detailing services 
              in Bakersfield, CA.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/elegantautodetailing_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-charcoal-lighter flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/ElegantDetailingMobileCarWash"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-charcoal-lighter flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                Services & Pricing
              </Link>
              <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/book" className="text-muted-foreground hover:text-primary transition-colors">
                Book Appointment
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-foreground">Services</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/services#paint-correction" className="text-muted-foreground hover:text-primary transition-colors">
                Paint Correction
              </Link>
              <Link to="/services#ceramic-coating" className="text-muted-foreground hover:text-primary transition-colors">
                Ceramic Coating
              </Link>
              <Link to="/services#interior-detailing" className="text-muted-foreground hover:text-primary transition-colors">
                Interior Detailing
              </Link>
              <Link to="/services#maintenance" className="text-muted-foreground hover:text-primary transition-colors">
                Maintenance Packages
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:6614014183"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span>(661) 401-4183</span>
              </a>
              <a
                href="mailto:elegantdetailing100@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm">elegantdetailing100@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Bakersfield, CA 93309</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>Mon - Sat: 9AM - 5PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Family Owned
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                5-Star Rated
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Elegant Detailing. All rights reserved.
            </p>
          </div>
          <p className="text-center text-xs text-muted-foreground/60 mt-4 italic">
            "Whatever you do, work at it with all your heart, as working for the Lord" — Colossians 3:17
          </p>
        </div>
      </div>
    </footer>
  );
}
