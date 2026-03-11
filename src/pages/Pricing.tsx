import Navbar from "@/components/Navbar";
import SuitePreview from "@/components/SuitePreview";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const addons = [
  { name: "Extra Walk (20 min)", price: "$12" },
  { name: "One-on-One Playtime (30 min)", price: "$18" },
  { name: "Bath & Brush", price: "$35" },
  { name: "Full Grooming Package", price: "$65" },
  { name: "Training Session (45 min)", price: "$40" },
  { name: "Airport Pickup/Drop-off", price: "$25" },
];

const Pricing = () => (
  <div className="bg-background">
    <Navbar />
    <div className="pt-28 pb-12 container mx-auto px-4 lg:px-8 text-center">
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
        Simple, Transparent <span className="text-gradient-primary">Pricing</span>
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Choose the perfect suite for your pet. No hidden fees, no surprises.
      </p>
    </div>
    <SuitePreview />
    <section className="py-24 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Add-On Services</h2>
          <p className="text-muted-foreground">Enhance your pet's stay with extras</p>
        </motion.div>
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {addons.map((addon, i) => (
            <motion.div key={addon.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-center justify-between bg-card rounded-xl p-4 card-elevated">
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-accent-success flex-shrink-0" />
                <span className="text-foreground font-medium">{addon.name}</span>
              </div>
              <span className="text-primary font-bold font-heading">{addon.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Pricing;
