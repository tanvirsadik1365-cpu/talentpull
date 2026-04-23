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
          className="mb-10 text-center md:mb-16"
        >
          <h2 className="mb-4 text-[2rem] font-extrabold sm:text-3xl md:text-4xl lg:text-5xl">
            Simple Monthly Packages For <span className="text-primary">Restaurant Growth</span>
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card relative mx-auto w-full max-w-md p-5 sm:p-8 ${
                plan.popular ? "border-primary/50 glow-primary" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                  Most Popular
                </div>
              )}

              <div className="mb-6 text-center">
                <h3 className="mb-3 text-sm font-bold tracking-widest text-muted-foreground">
                  {plan.name}
                </h3>

                <p className="text-3xl font-extrabold sm:text-4xl">
                  {plan.price}
                  <span className="block pt-1 text-sm font-normal text-muted-foreground sm:inline sm:pt-0 sm:text-base">
                    {" "}
                    + VAT / Monthly
                  </span>
                </p>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 shrink-0 text-secondary" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setOpenModal(true)}
                className={`w-full rounded-lg py-3 text-center font-semibold transition-all hover:opacity-90 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-accent text-foreground"
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
