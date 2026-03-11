import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import { motion } from "framer-motion";
import { Briefcase, Award, Users } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Projects Delivered", value: "500+" },
  { icon: Award, label: "Years of Experience", value: "15+" },
  { icon: Users, label: "Clients Served", value: "200+" },
];

const About = () => (
  <div className="bg-background">
    <Navbar />
    <div className="pt-28 pb-12 container mx-auto px-4 lg:px-8 text-center">
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
        About <span className="text-gradient-primary">PINECO</span>
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        PINECO was founded with a clear mission: to help organisations unlock their full potential through expert consultancy, impactful training, and exceptional project coordination.
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
            <p>What started as a small consultancy practice has grown into a trusted partner for organisations across multiple industries. Our team of seasoned professionals brings deep expertise in strategy, leadership development, and project execution.</p>
            <p>We believe in a hands-on, collaborative approach. We don't just advise — we work alongside your team to implement solutions, build capabilities, and drive measurable results.</p>
            <p>From start-ups to established enterprises, our tailored approach ensures that every engagement delivers real, lasting impact. Our commitment to excellence has earned us the trust of over 200 organisations worldwide.</p>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Integrity", desc: "We operate with transparency and honesty in every engagement." },
              { title: "Excellence", desc: "We deliver the highest quality of work, every time." },
              { title: "Collaboration", desc: "We succeed when our clients succeed — true partnership." },
              { title: "Innovation", desc: "We bring fresh perspectives and creative solutions." },
            ].map((value) => (
              <div key={value.title} className="bg-card rounded-xl p-6 card-elevated">
                <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    <TrustBadges />
    <Footer />
  </div>
);

export default About;
