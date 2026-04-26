import { useEffect, useRef, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  Loader2,
  MailCheckIcon,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";

import WhatsAppIcon from "@/components/WhatsAppIcon";
import { trackEvent } from "@/lib/tracking";

const FORM_ENDPOINT = "/api/contact";
const SECURITY_ANSWER = "9";

const inputClassName =
  "w-full rounded-xl border border-white/10 bg-accent/90 px-4 py-3.5 text-sm text-foreground shadow-inner shadow-black/10 transition placeholder:text-muted-foreground/80 focus:border-primary/60 focus:bg-accent focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-60";

type FormStatus = "idle" | "error";

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
    icon: WhatsAppIcon,
    title: "WhatsApp (074 2482 2813)",
    body: "We'll contact you after submission.",
  },
  {
    icon: MailCheckIcon,
    title: "Email Us",
    body: "info@talentpull.uk",
  },
];

const quickReplies = [
  "Need more direct orders.",
  "New website.",
  "Meta ads support.",
  "Full growth system.",
];

const getSubmissionError = async (response: Response) => {
  try {
    const contentType = response.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      const data = await response.json();
      const responseMessage = data?.errors?.[0]?.message || data?.message;

      if (responseMessage) {
        return responseMessage;
      }
    }
  } catch {
    // Some hosts return an empty body on server failures.
  }

  if (response.status === 404) {
    return "The contact API was not found. Please check the Hostinger Node.js app setup.";
  }

  if (response.status >= 500) {
    return "The contact API is running but email failed. Please check Hostinger environment variables and SMTP.";
  }

  return "We could not send the form right now. Please try again or message us on WhatsApp.";
};

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        document.body.classList.toggle("contact-section-visible", entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    observer.observe(section);

    return () => {
      document.body.classList.remove("contact-section-visible");
      observer.disconnect();
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");
    setStatusMessage("");
    setLoading(true);

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    const securityAnswer = String(data.get("security") || "").trim();

    if (securityAnswer !== SECURITY_ANSWER) {
      const errorMessage = "Please answer the security check correctly before sending.";
      setStatus("error");
      setStatusMessage(errorMessage);
      trackEvent("lead_form_error", {
        event_category: "lead",
        form_name: "contact_section",
        error_type: "security_check_failed",
      });
      toast.error(errorMessage);
      setLoading(false);
      return;
    }

    payload.message = message.trim() || "No extra message provided.";
    payload.lead_source = "TalentPull website contact section";
    payload.page = window.location.href;

    trackEvent("lead_form_submit", {
      event_category: "lead",
      form_name: "contact_section",
      has_message: Boolean(message.trim()),
    });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorMessage = await getSubmissionError(response);
        setStatus("error");
        setStatusMessage(errorMessage);
        trackEvent("lead_form_error", {
          event_category: "lead",
          form_name: "contact_section",
          error_type: "api_error",
          response_status: response.status,
        });
        toast.error(errorMessage);
        return;
      }

      setSuccess(true);
      form.reset();
      setMessage("");
      trackEvent("lead_form_success", {
        event_category: "lead",
        form_name: "contact_section",
      });
      toast.success("Thanks, your request has been sent.");
    } catch {
      const errorMessage =
        "Something went wrong while sending. Please try again or contact us directly.";
      setStatus("error");
      setStatusMessage(errorMessage);
      trackEvent("lead_form_error", {
        event_category: "lead",
        form_name: "contact_section",
        error_type: "network_error",
      });
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      data-track-section="Contact"
      className="section-padding bg-background"
    >
      <div className="container-main grid items-start gap-8 lg:grid-cols-[0.92fr,1.08fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="lg:sticky lg:top-24"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
            <Clock3 size={14} />
            GET IN TOUCH
          </div>

          <h2 className="mb-5 max-w-xl text-[2rem] font-extrabold leading-tight sm:text-4xl md:text-5xl">
            Get a professional growth plan for your restaurant.
          </h2>

          <p className="mb-7 max-w-lg text-base leading-7 text-muted-foreground sm:mb-9">
            Stop relying on delivery apps. Build your own system, grow direct orders,
            and keep more of your profit.
          </p>

          <div className="mb-8 grid gap-3 text-sm sm:grid-cols-3 lg:max-w-lg">
            {["Free review", "Fast response", "No contract"].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-card/40 px-3 py-2.5 text-foreground"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-secondary" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="space-y-5">
            {contactItems.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-primary">
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
          className="glass-card overflow-hidden rounded-2xl border-white/10"
        >
          {!success ? (
            <form
              action={FORM_ENDPOINT}
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-5 p-5 sm:p-7 lg:p-8"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                  Free growth plan
                </p>
                <h3 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">
                  Tell us where to send your plan
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Complete the form and we will reply on WhatsApp or email.
                </p>
              </div>

              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Your name
                  </span>
                  <input
                    name="name"
                    type="text"
                    placeholder="Full name"
                    autoComplete="name"
                    required
                    disabled={loading}
                    className={inputClassName}
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Mobile number
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Mobile number"
                    autoComplete="tel"
                    required
                    disabled={loading}
                    className={inputClassName}
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Email address
                  </span>
                  <input
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    autoComplete="email"
                    required
                    disabled={loading}
                    className={inputClassName}
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Postcode
                  </span>
                  <input
                    name="postcode"
                    type="text"
                    placeholder="Restaurant postcode"
                    autoComplete="postal-code"
                    disabled={loading}
                    className={inputClassName}
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Business name
                  </span>
                  <input
                    name="business"
                    type="text"
                    placeholder="Restaurant name"
                    autoComplete="organization"
                    disabled={loading}
                    className={inputClassName}
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Website
                  </span>
                  <input
                    name="website"
                    type="url"
                    placeholder="https://"
                    inputMode="url"
                    disabled={loading}
                    className={inputClassName}
                  />
                </label>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  What do you need help with?
                </p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setMessage(item);
                        trackEvent("quick_reply_select", {
                          event_category: "lead",
                          form_name: "contact_section",
                          quick_reply: item,
                        });
                      }}
                      disabled={loading}
                      className={`rounded-full border px-3.5 py-2 text-xs font-medium transition disabled:cursor-not-allowed disabled:opacity-60 ${
                        message === item
                          ? "border-primary/60 bg-primary/15 text-white"
                          : "border-white/10 bg-accent/80 text-muted-foreground hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <label className="block space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Message
                </span>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Tell us about your restaurant, current orders, or what you want to improve."
                  disabled={loading}
                  className={`${inputClassName} min-h-32 resize-none`}
                />
              </label>

              <div className="grid grid-cols-1 gap-4 rounded-xl border border-white/10 bg-background/35 p-4 sm:grid-cols-[1fr,0.9fr] sm:items-center">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Security check</p>
                    <p className="text-sm text-muted-foreground">6 + 3 = ?</p>
                  </div>
                </div>

                <input
                  name="security"
                  type="text"
                  inputMode="numeric"
                  placeholder="Type answer"
                  required
                  disabled={loading}
                  className={inputClassName}
                />
              </div>

              {status === "error" ? (
                <div
                  role="alert"
                  aria-live="polite"
                  className="flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm leading-6 text-destructive-foreground"
                >
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                  <p>{statusMessage}</p>
                </div>
              ) : null}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-4 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-primary/50 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 sm:text-lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending request
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Get Free Growth Plan
                  </>
                )}
              </button>

              <div className="grid gap-2 border-t border-white/10 pt-4 text-center text-xs font-semibold text-muted-foreground sm:grid-cols-3">
                <p>No contracts</p>
                <p className="text-primary">Limited free trial slots</p>
                <p>WhatsApp reply available</p>
              </div>
            </form>
          ) : (
            <div className="flex min-h-[520px] flex-col items-center justify-center p-6 text-center sm:p-10">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <CheckCircle2 size={34} />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary sm:text-3xl">
                Request sent successfully
              </h3>
              <p className="max-w-md leading-7 text-muted-foreground">
                Thanks. We have received your details and will contact you shortly on
                WhatsApp or email.
              </p>
              <div className="mt-6 rounded-xl border border-white/10 bg-background/35 px-4 py-3 text-sm text-muted-foreground">
                Need faster help? WhatsApp us on{" "}
                <a
                  className="font-semibold text-primary"
                  href="https://wa.me/447424822813"
                  data-track-event="whatsapp_click"
                  data-track-label="Contact success WhatsApp"
                  data-track-location="contact_success"
                >
                  074 2482 2813
                </a>
                .
              </div>
              <button
                type="button"
                onClick={() => {
                  setSuccess(false);
                  setStatus("idle");
                  setStatusMessage("");
                }}
                data-track-event="lead_form_reset"
                data-track-label="Send another request"
                data-track-location="contact_success"
                className="mt-6 rounded-xl border border-white/10 bg-accent px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary/50 hover:text-primary"
              >
                Send another request
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
