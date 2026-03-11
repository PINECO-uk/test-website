import Navbar from "@/components/Navbar";
import ServiceCards from "@/components/ServiceCards";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Services = () => (
  <div className="bg-background">
    <Navbar />
    <div className="pt-28 pb-12 container mx-auto px-4 lg:px-8 text-center">
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
        Our <span className="text-gradient-primary">Services</span>
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        From luxury boarding to spa days, we offer everything your pet needs for the ultimate staycation.
      </p>
    </div>
    <ServiceCards />
    <CTASection />
    <Footer />
  </div>
);

export default Services;
