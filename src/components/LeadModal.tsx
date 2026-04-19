import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const LeadModal = ({ open, setOpen }: any) => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mnljpjyr", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setSuccess(true);
      form.reset();
    }

    setLoading(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-md px-4"
          onClick={() => setOpen(false)}
        >

          {/* CARD */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg glass-card p-8 rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
          >

            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition"
            >
              <X />
            </button>

            {!success ? (
              <>
                {/* HEADER */}
                <h2 className="text-primary text-2xl font-bold mb-2 text-center">
                  Let’s start your free trial
                </h2>

                <p className="text-muted-foreground text-center mb-6">
                  Get started in minutes. No credit card required.
                </p>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-4">

                  <input name="name" required placeholder="Full Name" className="input-style" />
                  <input name="business" placeholder="Restaurant Name" className="input-style" />
                  <input name="email" required placeholder="Email Address" className="input-style" />

                  <div className="grid grid-cols-2 gap-4">
                    <input name="phone" required placeholder="Mobile" className="input-style" />
                    <input name="postcode" placeholder="Postcode" className="input-style" />
                  </div>

                  <textarea
                    name="message"
                    placeholder="Tell us about your restaurant"
                    className="input-style"
                  />

                  {/* BUTTON */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-primary text-white font-semibold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(255,122,61,0.4)]"
                  >
                    {loading ? "Sending..." : "Start free trial →"}
                  </button>

                  {/* TRUST */}
                  <p className="text-xs text-center text-muted-foreground">
                    No contracts • No setup fee • Cancel anytime
                  </p>
                  <p className="text-xs text-center text-primary mt-1">
  ⚡ Only 5 free slots left this week
</p>

                </form>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-10"
              >
                <h3 className="text-2xl font-bold text-primary mb-3">
                  🎉 You're all set!
                </h3>
                <p className="text-muted-foreground">
                  We’ll contact you shortly to start your growth.
                </p>

                <button
                  onClick={() => setOpen(false)}
                  className="mt-6 px-6 py-3 bg-primary rounded-lg text-white"
                >
                  Close
                </button>
              </motion.div>
            )}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadModal;