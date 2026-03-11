import Navbar from "@/components/Navbar";
import ServiceCards from "@/components/ServiceCards";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  FolderKanban,
  Heart,
  GraduationCap,
  MessageCircle,
  Clock,
  ArrowRight,
  Check,
  Globe,
  Users,
  Bot,
  Target,
  Handshake,
  FileText,
  Shield,
  Laptop,
  Lightbulb,
} from "lucide-react";

const trainings = [
  { title: "Onboarding — Volunteers / Workers", duration: "3 hours", icon: Users },
  { title: "AI Solutions for Easier Work", duration: "2 hours", icon: Bot },
  { title: "Strategy for the Organisation", duration: "3 hours", icon: Target },
  { title: "Remote Team Collaboration — Tools & Procedures", duration: "2 hours", icon: Laptop },
  { title: "AI for NGOs", duration: "2 hours", icon: Bot },
  { title: "Erasmus+ for UK Organisations", duration: "2 hours", icon: Globe },
  { title: "Communication & Proactivity in the Team", duration: "2 hours", icon: Handshake },
  { title: "Plan a Volunteering Programme", duration: "3 hours", icon: Heart },
];

const polishTrainings = [
  { title: "Child Protection Policy", duration: "2 hours", icon: Shield },
  { title: "Documentation for the Project", duration: "2 hours", icon: FileText },
  { title: "RODO (GDPR)", duration: "2 hours", icon: Shield },
];

const consultingTopics = [
  "Volunteering strategy & programme development",
  "New funding opportunities (Erasmus+ for UK)",
  "Onboarding and organisational processes",
  "AI use for better workflow",
  "Strategy for your organisation's next phase",
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background">
      <Navbar />
      <div className="pt-28 pb-12 container mx-auto px-4 lg:px-8 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
          Our <span className="text-gradient-primary">Services</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Four core areas of expertise to help your organisation grow, optimise, and deliver impact.
        </p>
      </div>

      {/* Overview Cards */}
      <ServiceCards />

      {/* Detailed Service Sections */}

      {/* 1. Project Coordination */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <FolderKanban className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground">Project Coordination</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I coordinate social and strategic projects — both local and international. My involvement spans the full project lifecycle: from the <strong className="text-foreground">design and planning phase</strong> through implementation, all the way to <strong className="text-foreground">evaluation and reporting</strong>.
              </p>
              <p>
                I work using <strong className="text-foreground">Agile methodology</strong>, ensuring flexibility, transparency, and continuous improvement throughout the project.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 card-elevated">
              <p className="text-sm font-medium text-foreground mb-1">Pricing</p>
              <p className="text-muted-foreground text-sm">Set based on the scope of the project and the amount of hours required. <button onClick={() => navigate("/contact")} className="text-primary hover:text-primary-dark font-medium underline underline-offset-2">Get a quote →</button></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Volunteering Management */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground">Volunteering Management</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I help organisations <strong className="text-foreground">plan and implement the early stages</strong> of a customised volunteering strategy — tailored to your mission, capacity, and goals.
              </p>
              <p>
                This includes <strong className="text-foreground">training for new volunteer coordinators</strong>, ensuring your team is equipped to manage and grow the programme independently.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 card-elevated">
              <p className="text-sm font-medium text-foreground mb-1">Pricing</p>
              <p className="text-muted-foreground text-sm">Set based on the scope of the organisation and the amount of hours required. <button onClick={() => navigate("/contact")} className="text-primary hover:text-primary-dark font-medium underline underline-offset-2">Get a quote →</button></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Training */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground">Training</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Available <strong className="text-foreground">online and offline</strong> for organisations and groups. Offline sessions include travel costs on top of the training fee. Some sessions are also <strong className="text-foreground">open for individual sign-up</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Browse the training catalogue below:
            </p>

            {/* Training catalogue */}
            <div className="mb-8">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Training Catalogue</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {trainings.map((t, i) => (
                  <motion.div
                    key={t.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between bg-card rounded-xl p-4 card-elevated"
                  >
                    <div className="flex items-center gap-3">
                      <t.icon className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium text-sm">{t.title}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground flex-shrink-0 ml-3">
                      <Clock className="h-3.5 w-3.5" />
                      <span className="text-xs font-medium">{t.duration}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Polish trainings */}
            <div className="mb-8">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-1">Polish-Language Trainings</h3>
              <p className="text-sm text-muted-foreground mb-4">Szkolenia dostępne w języku polskim</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {polishTrainings.map((t, i) => (
                  <motion.div
                    key={t.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between bg-card rounded-xl p-4 card-elevated"
                  >
                    <div className="flex items-center gap-3">
                      <t.icon className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium text-sm">{t.title}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground flex-shrink-0 ml-3">
                      <Clock className="h-3.5 w-3.5" />
                      <span className="text-xs font-medium">{t.duration}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 card-elevated">
              <p className="text-sm font-medium text-foreground mb-1">Pricing</p>
              <p className="text-muted-foreground text-sm">Training fee + travel costs for offline sessions. <button onClick={() => navigate("/contact")} className="text-primary hover:text-primary-dark font-medium underline underline-offset-2">Enquire about a session →</button></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Consulting */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground">Consulting</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Individual sessions designed to help you take your organisation to the next level. Whether you're exploring new opportunities or optimising what you already have, I'll provide focused, actionable guidance.
            </p>

            <div className="mb-8">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Topics I consult on:</h3>
              <ul className="space-y-3">
                {consultingTopics.map((topic) => (
                  <li key={topic} className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-accent-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button onClick={() => navigate("/contact")} className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-8 py-6 text-base font-semibold">
              Book a Consulting Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;
