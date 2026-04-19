import { motion } from "framer-motion";
import { AlertTriangle, EyeOff, Database, Percent } from "lucide-react";

const problems = [
  { icon: Percent, title: "High Commission Charges", desc: "Up to 35% taken from every single order you receive." },
  { icon: AlertTriangle, title: "Hidden Service Fees", desc: "Extra charges buried in contracts that eat into your margins." },
  { icon: Database, title: "Loss of Customer Data", desc: "You never see who your customers are or how to reach them." },
  { icon: EyeOff, title: "Brand Hidden in Listings", desc: "Your restaurant becomes just another option in a crowded marketplace." },
];

const ProblemSection = () => {
  return (
    <section id="features" className="section-padding">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Third Party Apps Are Eating Your{" "}
            <span className="text-primary">Restaurant Profits</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Delivery platforms are quietly draining your revenue with every order.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <p.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Order breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 max-w-lg mx-auto text-center"
        >
          <h3 className="font-bold text-xl mb-6">Where Your Money Goes</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Order Value</span>
              <span className="font-bold text-2xl">£50.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Commission (30%)</span>
              <span className="font-bold text-2xl text-destructive">-£15.00</span>
            </div>
            <div className="h-px bg-border" />
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">You Keep</span>
              <span className="font-bold text-2xl">£35.00</span>
            </div>
          </div>
          <a
            href="#calculator"
            className="mt-6 inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Calculate Your Lost Profit
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
