import { motion } from "framer-motion";
import { ShieldCheck, Target, Users, TrendingUp } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    title: "Certified Experts",
    description: "Accredited consultants with 15+ years of industry experience",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Proven track record of delivering measurable business outcomes",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description: "We work alongside your team to build lasting capabilities",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Strategies designed to grow with your organisation",
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
