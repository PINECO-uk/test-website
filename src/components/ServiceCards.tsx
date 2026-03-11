import { motion } from "framer-motion";
import { FolderKanban, Heart, GraduationCap, MessageCircle } from "lucide-react";
import consultingImage from "@/assets/strategy-consulting.jpg";
import trainingImage from "@/assets/training-workshop.jpg";
import projectImage from "@/assets/project-coordination.jpg";
import heroImage from "@/assets/hero-consultancy.jpg";

const services = [
  {
    icon: FolderKanban,
    title: "Project Coordination",
    description: "Social and strategic projects — local and international. From design and planning to evaluation and reporting, delivered in Agile methodology.",
    image: projectImage,
  },
  {
    icon: Heart,
    title: "Volunteering Management",
    description: "Plan and implement a customised volunteering strategy from the early stages. Includes training of new volunteer coordinators.",
    image: heroImage,
  },
  {
    icon: GraduationCap,
    title: "Training",
    description: "Online and offline training sessions for organisations and groups, with select courses open for individual sign-up.",
    image: trainingImage,
  },
  {
    icon: MessageCircle,
    title: "Consulting",
    description: "Individual sessions to take your organisation to the next level — volunteering, funding opportunities, onboarding, AI workflow, and strategy.",
    image: consultingImage,
  },
];

const ServiceCards = () => {
  return (
    <section className="py-24 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored solutions for organisations ready to grow, optimise, and make an impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-card rounded-2xl overflow-hidden card-elevated hover:card-elevated-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-card-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
