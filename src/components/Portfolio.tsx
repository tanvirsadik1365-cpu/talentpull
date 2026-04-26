import { motion } from "framer-motion";
import { TrendingUp, ArrowRight } from "lucide-react";

const projects = [
  { name: "Naira Indian and Bangladeshi cuisine", location: "Waltham Abbey", before: 45, after: 75 },
  { name: "Kacchi Dine", location: "London", before: 65, after: 105 },
  { name: "Ruchita", location: "London", before: 35, after: 60 },
  { name: "Rajshahi Restaurant", location: "Bradford", before: 45, after: 95 },
];

const Portfolio = () => {
  return (
    <section id="portfolio" data-track-section="Portfolio" className="section-padding">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Real Restaurants. <span className="text-primary">Real Growth.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((p, i) => {
            const growth = Math.round(((p.after - p.before) / p.before) * 100);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card-hover p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{p.name}</h3>
                    <p className="text-sm text-muted-foreground">{p.location}</p>
                  </div>
                  <div className="flex items-center gap-1 text-secondary font-bold">
                    <TrendingUp size={18} />
                    +{growth}%
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground mb-1">Before</p>
                    <p className="font-bold">{p.before} orders/week</p>
                  </div>
                  <ArrowRight className="text-primary flex-shrink-0" size={20} />
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground mb-1">After</p>
                    <p className="font-bold text-secondary">{p.after} orders/week</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
