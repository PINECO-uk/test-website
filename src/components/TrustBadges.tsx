import { motion } from "framer-motion";
import { ShieldCheck, Clock, Video, Thermometer } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    title: "Certified Professionals",
    description: "Certified Pet Care Professionals Since 2015",
  },
  {
    icon: Clock,
    title: "24/7 Staff & Vet Support",
    description: "On-Site Staff & Veterinary Support Around the Clock",
  },
  {
    icon: Video,
    title: "Live Webcam Access",
    description: "Watch Your Pet's Suite in Real-Time From Anywhere",
  },
  {
    icon: Thermometer,
    title: "Climate-Controlled",
    description: "Indoor & Outdoor Facilities Maintained at 68-72°F",
  },
];

const TrustBadges = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-card card-elevated hover:card-elevated-hover transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <badge.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">
                {badge.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
