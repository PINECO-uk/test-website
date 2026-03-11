import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    pet: "Golden Retriever Luna",
    text: "Luna had the best time! The webcam let us check in anytime. She didn't want to leave!",
    rating: 5,
    initials: "SM",
  },
  {
    name: "David K.",
    pet: "Poodle Max",
    text: "The staff treated Max like royalty. The luxury suite was worth every penny!",
    rating: 5,
    initials: "DK",
  },
  {
    name: "Jessica R.",
    pet: "Beagle Bella",
    text: "Bella's been going to daycare for 6 months. She's happier and more social than ever!",
    rating: 5,
    initials: "JR",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-section-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Happy <span className="text-gradient-primary">Pet Parents</span>
          </h2>
          <p className="text-lg text-white/60">
            See what our guests have to say
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-secondary/80 rounded-2xl p-10 text-center border border-white/10"
            >
              <Quote className="h-10 w-10 text-primary/40 mx-auto mb-6" />

              <p className="text-xl md:text-2xl font-heading italic text-white leading-relaxed mb-8">
                "{testimonials[current].text}"
              </p>

              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {testimonials[current].initials}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white">
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-white/60">
                    {testimonials[current].pet}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
