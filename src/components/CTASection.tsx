import { motion } from "framer-motion";

const CTASection = ({ setOpenModal }: any) => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-12 md:p-16 text-center glow-primary"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4">
            Ready To Stop Paying 30% Commission On Every Order?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Take control of your restaurant's online growth with Talentpull.
          </p>
          <button
            onClick={() => setOpenModal(true)}
            className="inline-block px-10 py-4 rounded-xl bg-background text-foreground font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Start Free Trial
          </button>

        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
