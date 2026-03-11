import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import TrustBadges from "@/components/TrustBadges";
import { motion } from "framer-motion";
import { Heart, Award, Users } from "lucide-react";

const stats = [
  { icon: Heart, label: "Pets Cared For", value: "5,000+" },
  { icon: Award, label: "Years of Excellence", value: "9+" },
  { icon: Users, label: "Happy Pet Parents", value: "3,200+" },
];

const About = () => (
  <div className="bg-background">
    <Navbar />
    <div className="pt-28 pb-12 container mx-auto px-4 lg:px-8 text-center">
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
        About <span className="text-gradient-primary">Pawington</span>
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Founded in 2015, The Pawington Resort was born from a simple belief: every pet deserves the same love and luxury they get at home — and then some.
      </p>
    </div>

    <section className="pb-20 container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center bg-card rounded-2xl p-8 card-elevated">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <stat.icon className="h-7 w-7 text-primary" />
            </div>
            <p className="font-heading text-4xl font-bold text-primary mb-1">{stat.value}</p>
            <p className="text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="py-20 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6 text-center">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>What started as a passion project by a team of veterinary professionals and pet lovers has grown into the region's most trusted premium pet care facility.</p>
            <p>Our certified staff undergo 200+ hours of training before ever caring for your pet. We maintain the highest standards in cleanliness, safety, and enrichment — because we treat every guest like our own.</p>
            <p>From climate-controlled suites to gourmet treat selections and live webcam access, every detail at Pawington is designed with one goal: making tails wag.</p>
          </div>
        </motion.div>
      </div>
    </section>

    <TrustBadges />
    <Testimonials />
    <Footer />
  </div>
);

export default About;
