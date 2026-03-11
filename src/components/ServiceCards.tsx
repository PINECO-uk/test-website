import { motion } from "framer-motion";
import { Briefcase, GraduationCap, FolderKanban, LineChart } from "lucide-react";
import consultingImage from "@/assets/strategy-consulting.jpg";
import trainingImage from "@/assets/training-workshop.jpg";
import projectImage from "@/assets/project-coordination.jpg";
import heroImage from "@/assets/hero-consultancy.jpg";

const services = [
  {
    icon: Briefcase,
    title: "Strategic Consultancy",
    description: "Expert guidance on business strategy, organisational development, and operational efficiency to drive growth.",
    image: consultingImage,
  },
  {
    icon: GraduationCap,
    title: "Professional Training",
    description: "Tailored training programmes that build skills, enhance performance, and empower your workforce.",
    image: trainingImage,
  },
  {
    icon: FolderKanban,
    title: "Project Coordination",
    description: "End-to-end project management ensuring timely delivery, stakeholder alignment, and quality outcomes.",
    image: projectImage,
  },
  {
    icon: LineChart,
    title: "Performance Analytics",
    description: "Data-driven insights and KPI frameworks to measure impact and optimise your operations.",
    image: heroImage,
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
            Comprehensive solutions tailored to your business needs
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
