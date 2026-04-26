import { motion } from "framer-motion";
import { AlertTriangle, Database, EyeOff, Percent } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-to-section";

const problems = [
  {
    icon: Percent,
    title: "High Commission Charges",
    desc: "Up to 35% taken from every single order you receive.",
  },
  {
    icon: AlertTriangle,
    title: "Hidden Service Fees",
    desc: "Extra charges buried in contracts that eat into your margins.",
  },
  {
    icon: Database,
    title: "Loss of Customer Data",
    desc: "You never see who your customers are or how to reach them.",
  },
  {
    icon: EyeOff,
    title: "Brand Hidden in Listings",
    desc: "Your restaurant becomes just another option in a crowded marketplace.",
  },
];

const ProblemSection = () => {
  return (
    <section id="features" data-track-section="Features" className="section-padding">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:mb-16"
        >
          <h2 className="mb-4 text-[2rem] font-extrabold sm:text-3xl md:text-4xl lg:text-5xl">
            Third Party Apps Are Eating Your{" "}
            <span className="text-primary">Restaurant Profits</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            Delivery platforms are quietly draining your revenue with every order.
          </p>
        </motion.div>

        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:mb-16 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card-hover p-5 sm:p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <problem.icon className="text-primary" size={24} />
              </div>

              <h3 className="mb-2 text-lg font-bold">{problem.title}</h3>
              <p className="text-sm text-muted-foreground">{problem.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card mx-auto max-w-lg p-5 text-center sm:p-8"
        >
          <h3 className="mb-6 text-xl font-bold">Where Your Money Goes</h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Order Value</span>
              <span className="text-2xl font-bold">£50.00</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Commission (30%)</span>
              <span className="text-2xl font-bold text-destructive">-£15.00</span>
            </div>

            <div className="h-px bg-border" />

            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">You Keep</span>
              <span className="text-2xl font-bold">£35.00</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => scrollToSection("#calculator")}
            data-track-event="navigation_click"
            data-track-label="Calculate Your Lost Profit"
            data-track-location="features"
            className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Calculate Your Lost Profit
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
