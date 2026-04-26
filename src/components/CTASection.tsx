import { motion } from "framer-motion";

const CTASection = ({ setOpenModal }: any) => {
  return (
    <section id="final-cta" data-track-section="Final CTA" className="section-padding">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glow-primary rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 text-center sm:p-10 md:p-16"
        >
          <h2 className="mb-4 text-[2rem] font-extrabold text-primary-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            Ready To Stop Paying 30% Commission On Every Order?
          </h2>

          <p className="mx-auto mb-8 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
            Take control of your restaurant's online growth with Talentpull.
          </p>

          <button
            onClick={() => setOpenModal(true)}
            data-track-event="lead_modal_open"
            data-track-label="Start Free Trial"
            data-track-location="final_cta"
            className="inline-block rounded-xl bg-background px-8 py-3.5 text-base font-bold text-foreground transition-opacity hover:opacity-90 sm:px-10 sm:py-4 sm:text-lg"
          >
            Start Free Trial
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
