import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-dog.jpg";
import spaImage from "@/assets/spa-dog.jpg";
import daycareImage from "@/assets/daycare-dogs.jpg";
import suiteImage from "@/assets/luxury-suite.jpg";

const images = [
  { src: heroImage, alt: "Happy golden retriever relaxing", caption: "VIP Guest Lounge" },
  { src: suiteImage, alt: "Luxury pet suite interior", caption: "Luxury Suite" },
  { src: spaImage, alt: "Dog enjoying spa treatment", caption: "Spa & Grooming" },
  { src: daycareImage, alt: "Dogs playing in daycare", caption: "Daycare Fun" },
  { src: heroImage, alt: "Pet relaxing in suite", caption: "Naptime Bliss" },
  { src: suiteImage, alt: "Premium suite view", caption: "Deluxe Suite" },
];

const Gallery = () => (
  <div className="bg-background">
    <Navbar />
    <div className="pt-28 pb-12 container mx-auto px-4 lg:px-8 text-center">
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
        Our <span className="text-gradient-primary">Gallery</span>
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Take a peek inside our resort and see why pets love staying with us.
      </p>
    </div>
    <section className="pb-24 container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative rounded-2xl overflow-hidden card-elevated hover:card-elevated-hover transition-all duration-300"
          >
            <img src={img.src} alt={img.alt} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="font-heading text-white text-lg font-semibold">{img.caption}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    <Footer />
  </div>
);

export default Gallery;
