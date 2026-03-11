import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Essentials",
    price: "Contact Us",
    description: "Focused consulting for specific challenges",
    features: [
      "Initial business assessment",
      "Strategy recommendations report",
      "2 consulting sessions (2hrs each)",
      "Email support for 30 days",
      "Implementation roadmap",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "Contact Us",
    description: "Comprehensive support for growing businesses",
    features: [
      "Full organisational assessment",
      "Custom strategy development",
      "Monthly consulting sessions",
      "Training workshops (up to 20 people)",
      "Project coordination support",
      "Quarterly progress reviews",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    description: "Full-scale transformation programmes",
    features: [
      "Enterprise-wide assessment",
      "Dedicated consulting team",
      "Unlimited consulting sessions",
      "Custom training programmes",
      "Full project management",
      "Change management support",
      "Executive coaching",
      "Annual strategy retreats",
    ],
    popular: false,
  },
];

const SuitePreview = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your{" "}
            <span className="text-gradient-primary">Partnership</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible engagement models designed for your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`relative bg-card rounded-2xl p-8 card-elevated hover:card-elevated-hover transition-all duration-300 ${
                pkg.popular ? "ring-2 ring-accent scale-[1.02]" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="font-heading text-2xl font-bold text-card-foreground mb-1">
                {pkg.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">{pkg.description}</p>

              <div className="mb-8">
                <span className="text-2xl font-bold text-primary font-body">
                  {pkg.price}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-accent-success flex-shrink-0 mt-0.5" />
                    <span className="text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => navigate("/contact")}
                className={`w-full rounded-lg py-6 font-semibold text-base ${
                  pkg.popular
                    ? "bg-primary hover:bg-primary-dark text-primary-foreground"
                    : "bg-primary/90 hover:bg-primary text-primary-foreground"
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuitePreview;
