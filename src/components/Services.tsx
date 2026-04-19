import { motion } from "framer-motion";
import { Globe, Search, MapPin, Facebook, Instagram, ShoppingCart, Palette, BarChart3 } from "lucide-react";

const services = [
  { icon: Globe, title: "Restaurant Website Development", desc: "Beautiful, fast websites designed to convert visitors into direct orders." },
  { icon: Search, title: "Restaurant SEO", desc: "Get found on Google when hungry customers search near you." },
  { icon: MapPin, title: "Google Maps Ranking", desc: "Dominate local search results and appear in the map pack." },
  { icon: Facebook, title: "Facebook Ads", desc: "Targeted campaigns that bring local diners straight to your door." },
  { icon: Instagram, title: "Instagram Marketing", desc: "Mouth-watering content that builds your brand and drives orders." },
  { icon: ShoppingCart, title: "Online Ordering System", desc: "Commission-free ordering direct from your website." },
  { icon: Palette, title: "Restaurant Branding", desc: "Stand out with a professional brand identity your customers remember." },
  { icon: BarChart3, title: "Digital Marketing Strategy", desc: "Data-driven plans tailored to grow your restaurant revenue." },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Everything Your Restaurant Needs To <span className="text-primary">Grow</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card-hover p-6 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <s.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
