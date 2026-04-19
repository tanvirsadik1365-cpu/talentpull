import { motion } from "framer-motion";
import { ShoppingCart, Users, BarChart3, TrendingUp, Lightbulb } from "lucide-react";

const features = [
  { icon: ShoppingCart, title: "Direct Ordering System", desc: "Accept orders commission-free, directly from your website." },
  { icon: Users, title: "Customer Database", desc: "Own your customer data and build lasting relationships." },
  { icon: BarChart3, title: "Marketing Analytics", desc: "Track campaign performance and ROI in real time." },
  { icon: TrendingUp, title: "Revenue Insights", desc: "Understand your revenue trends and spot growth opportunities." },
  { icon: Lightbulb, title: "Growth Recommendations", desc: "AI-powered suggestions tailored to your restaurant." },
];

const GrowthOS = () => {
  return (
    <section className="section-padding">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Talentpull Restaurant <span className="text-primary">Growth OS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            One platform to manage your online presence, orders, and growth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card-hover p-6"
            >
              <f.icon className="text-primary mb-3" size={28} />
              <h3 className="font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthOS;
