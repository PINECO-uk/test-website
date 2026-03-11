import { Link } from "react-router-dom";
import { PawPrint, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/80">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <PawPrint className="h-7 w-7 text-accent" />
              <span className="font-heading text-xl font-bold text-primary-foreground">
                Pawington Resort
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Where luxury meets care. Premium boarding, daycare & spa services for your beloved companion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {["Suites", "Services", "Gallery", "Pricing", "About", "Contact"].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase()}`} className="hover:text-accent transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li>Luxury Boarding</li>
              <li>Doggy Daycare</li>
              <li>Spa & Grooming</li>
              <li>Training Programs</li>
              <li>Airport Pickup</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                2847 Oak Valley Drive, Riverside, CA 92501
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                hello@pawingtonresort.com
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                Mon-Fri: 7am-7pm<br />Sat-Sun: 8am-6pm
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/50">
          © 2024 The Pawington Resort. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
