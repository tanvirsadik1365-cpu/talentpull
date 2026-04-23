import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MailCheckIcon, MapPin, MessageCircle, Phone } from "lucide-react";

const inputClassName =
  "w-full rounded-lg border border-border bg-accent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary";

const contactItems = [
  {
    icon: MapPin,
    title: "Visit Us",
    body: "802 Salcombe Court, Aberfeldy Village, London, United Kingdom",
  },
  {
    icon: Phone,
    title: "Call Support",
    body: "020 4578 3585",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp (074 2482 2813)",
    body: "We'll contact you after submission.",
  },
  {
    icon: MailCheckIcon,
    title: "Email Us",
    body: "info@talentpull.uk",
  },
];

const quickReplies = ["Need more orders.", "Website.", "Ads help.", "Full system."];

const ContactSection = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const form = event.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mnljpjyr", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setSuccess(true);
      form.reset();
      setMessage("");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-main grid items-start gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary">
            GET IN TOUCH
          </div>

          <h2 className="mb-6 text-[2rem] font-bold leading-tight text-primary sm:text-4xl md:text-5xl">
            Let's take back control of your restaurant.
          </h2>

          <p className="mb-8 max-w-md text-base text-muted-foreground sm:mb-10">
            Stop relying on delivery apps. Build your own system, grow direct orders,
            and keep more of your profit.
          </p>

          <div className="space-y-6">
            {contactItems.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon size={18} />
                </div>

                <div className="space-y-1">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm leading-6 text-muted-foreground">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="glass-card space-y-4 rounded-2xl p-5 sm:p-8"
        >
          {!success ? (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input name="name" placeholder="Your Name" required className={inputClassName} />
                <input name="phone" placeholder="Mobile Number" required className={inputClassName} />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input name="email" placeholder="Email Address" required className={inputClassName} />
                <input name="postcode" placeholder="Postcode" className={inputClassName} />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input name="business" placeholder="Business Name" className={inputClassName} />
                <input name="website" placeholder="Website URL" className={inputClassName} />
              </div>

              <div className="flex flex-wrap gap-2">
                {quickReplies.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setMessage(item)}
                    className="rounded-full border border-border bg-accent px-3 py-2 text-xs text-muted-foreground transition hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
                  >
                    {item}
                  </button>
                ))}
              </div>

              <textarea
                id="message"
                name="message"
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell us about your restaurant..."
                className={`${inputClassName} resize-none`}
              />

              <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 sm:items-center">
                <p className="text-sm text-foreground">
                  Security check: <span className="font-medium text-white">6 + 3 = ?</span>
                </p>

                <input
                  name="security"
                  placeholder="Type answer"
                  required
                  className={inputClassName}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-primary py-4 text-lg font-bold text-white shadow-lg shadow-primary/30 transition-all hover:shadow-primary/50"
              >
                {loading ? "Sending..." : "Get Free Growth Plan"}
              </button>

              <div className="space-y-1 text-center">
                <p className="text-xs font-bold text-muted-foreground">
                  No contracts, no setup fee, cancel anytime.
                </p>
                <p className="text-xs font-medium text-primary">
                  Limited free trial slots available this month
                </p>
                <p className="text-xs font-bold text-muted-foreground">
                  We reply within 10 minutes on WhatsApp
                </p>
              </div>
            </form>
          ) : (
            <div className="py-10 text-center">
              <h3 className="mb-3 text-2xl font-bold text-primary">You're all set!</h3>
              <p className="text-muted-foreground">
                Your request has been received.
                <br /> We'll contact you shortly.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
