import Navbar from "@/components/Navbar";
import SuitePreview from "@/components/SuitePreview";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Suites = () => (
  <div className="bg-background">
    <Navbar />
    <div className="pt-28 pb-12 container mx-auto px-4 lg:px-8 text-center">
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
        Suites & <span className="text-gradient-primary">Accommodations</span>
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Every suite is designed for maximum comfort, safety, and happiness — because your pet deserves a true vacation.
      </p>
    </div>
    <SuitePreview />
    <CTASection />
    <Footer />
  </div>
);

export default Suites;
