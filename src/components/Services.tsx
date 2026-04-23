import { motion } from "framer-motion";
import { BarChart3, Facebook, Globe, Instagram, MapPin, Palette, Search, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Restaurant Website Development",
    desc: "Beautiful, fast websites designed to convert visitors into direct orders.",
  },
  {
    icon: Search,
    title: "Restaurant SEO",
    desc: "Get found on Google when hungry customers search near you.",
  },
  {
    icon: MapPin,
    title: "Google Maps Ranking",
    desc: "Dominate local search results and appear in the map pack.",
  },
  {
    icon: Facebook,
    title: "Facebook Ads",
    desc: "Targeted campaigns that bring local diners straight to your door.",
  },
  {
    icon: Instagram,
    title: "Instagram Marketing",
    desc: "Mouth-watering content that builds your brand and drives orders.",
  },
  {
    icon: ShoppingCart,
    title: "Online Ordering System",
    desc: "Commission-free ordering direct from your website.",
  },
  {
    icon: Palette,
    title: "Restaurant Branding",
    desc: "Stand out with a professional brand identity your customers remember.",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing Strategy",
    desc: "Data-driven plans tailored to grow your restaurant revenue.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:mb-16"
        >
          <h2 className="mb-4 text-[2rem] font-extrabold sm:text-3xl md:text-4xl lg:text-5xl">
            Everything Your Restaurant Needs To <span className="text-primary">Grow</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card-hover p-5 text-center sm:p-6"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <service.icon className="text-primary" size={28} />
              </div>

              <h3 className="mb-2 font-bold">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
