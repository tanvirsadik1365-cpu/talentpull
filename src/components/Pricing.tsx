import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "STARTER",
    price: "£149",
    popular: false,
    features: [
      "Social Media Marketing",
      "Creating Graphic Design",
      "Every Week Post",
      "Local SEO",
      "SMS Marketing",
      "Paid Marketing",
      "Monthly Working Report",
      "Google Ads",
      "Video Marketing",
      "Email Marketing",
      "Website On Page SEO Report",
    ],
  },
  {
    name: "STANDARD",
    price: "£249",
    popular: true,
    features: [
      "Social Media Marketing",
      "Creating Graphic Design",
      "Every Week Post",
      "Local SEO",
      "SMS Marketing",
      "Paid Marketing",
      "Google Ads",
      "Video Marketing",
      "Monthly Working Report",
      "Email Marketing",
      "Website On Page SEO Report",
    ],
  },
  {
    name: "BUSINESS",
    price: "£499",
    popular: false,
    features: [
      "Social Media Marketing",
      "Creating Graphic Design",
      "Post Every 2 Days",
      "Local SEO",
      "SMS Marketing",
      "Paid Marketing",
      "Monthly Working Report",
      "Google Ads",
      "Video Marketing",
      "Email Marketing",
      "Website On Page SEO Report",
    ],
  },
];

const Pricing = ({ setOpenModal }: any) => {
  return (
    <section id="pricing" className="section-padding">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Simple Monthly Packages For <span className="text-primary">Restaurant Growth</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-8 relative ${
                plan.popular ? "border-primary/50 glow-primary" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-sm font-bold tracking-widest text-muted-foreground mb-3">
                  {plan.name}
                </h3>
                <p className="text-4xl font-extrabold">
                  {plan.price}
                  <span className="text-base font-normal text-muted-foreground"> + VAT / Monthly</span>
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <Check className="text-secondary flex-shrink-0 mt-0.5" size={16} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
  onClick={() => setOpenModal(true)}
  className={`w-full text-center py-3 rounded-lg font-semibold transition-all hover:opacity-90 ${
    plan.popular
      ? "bg-primary text-primary-foreground"
      : "bg-accent text-foreground border border-border"
  }`}
>
  Start Free Trial
</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
