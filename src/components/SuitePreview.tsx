import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const suites = [
  {
    name: "Standard Suite",
    price: 55,
    description: "Cozy private rooms with daily walks",
    features: [
      "Private 6×8 room with comfortable bedding",
      "Daily walks (3× per day, 15 min each)",
      "Group playtime (2 sessions daily)",
      "Climate-controlled environment",
      "Daily photo updates via text",
    ],
    popular: false,
  },
  {
    name: "Deluxe Suite",
    price: 85,
    description: "Spacious suites with TV and extra playtime",
    features: [
      "Spacious 8×10 room with orthopedic bed",
      "Extended walks (4× per day, 20 min each)",
      "Premium playtime (3 sessions)",
      "Pet-safe TV with nature programming",
      "Twice-daily photo/video updates",
      "Bedtime treat and tuck-in service",
    ],
    popular: true,
  },
  {
    name: "Luxury Suite",
    price: 125,
    description: "Premium furniture, private patio, and webcam",
    features: [
      "Premium 10×12 suite with designer furniture",
      "Private outdoor patio (120 sq ft)",
      "Unlimited walks & one-on-one playtime",
      "24/7 personal webcam streaming",
      "Nightly tuck-in with bedtime story",
      "Daily grooming brush session",
      "Gourmet treat selection",
      "Hourly photo/video journal",
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
            Choose Your Pet's{" "}
            <span className="text-gradient-primary">Perfect Suite</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From comfortable stays to ultra-premium experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {suites.map((suite, index) => (
            <motion.div
              key={suite.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`relative bg-card rounded-2xl p-8 card-elevated hover:card-elevated-hover transition-all duration-300 ${
                suite.popular ? "ring-2 ring-accent scale-[1.02]" : ""
              }`}
            >
              {suite.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="font-heading text-2xl font-bold text-card-foreground mb-1">
                {suite.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">{suite.description}</p>

              <div className="mb-8">
                <span className="text-4xl font-bold text-primary font-body">
                  ${suite.price}
                </span>
                <span className="text-muted-foreground text-sm">/night</span>
              </div>

              <ul className="space-y-3 mb-8">
                {suite.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-accent-success flex-shrink-0 mt-0.5" />
                    <span className="text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => navigate("/contact")}
                className={`w-full rounded-lg py-6 font-semibold text-base ${
                  suite.popular
                    ? "bg-primary hover:bg-primary-dark text-primary-foreground"
                    : "bg-primary/90 hover:bg-primary text-primary-foreground"
                }`}
              >
                Book {suite.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuitePreview;
