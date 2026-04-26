import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { toast } from "sonner";
import { trackEvent } from "@/lib/tracking";

const FORM_ENDPOINT = "/api/contact";

const getSubmissionError = async (response: Response) => {
  try {
    const contentType = response.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      const body = await response.json();

      if (body?.message) {
        return body.message;
      }
    }
  } catch {
    // Some hosts return HTML error pages instead of JSON.
  }

  if (response.status === 404) {
    return "The contact API was not found. Please check the Hostinger Node.js app setup.";
  }

  if (response.status >= 500) {
    return "The contact API is running but email failed. Please check Hostinger environment variables and SMTP.";
  }

  return "We could not send the form right now. Please message us on WhatsApp.";
};

const LeadModal = ({ open, setOpen }: any) => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    const rawMessage = String(payload.message || "").trim();

    payload.message = rawMessage || "No extra message provided.";
    payload.lead_source = "TalentPull start free trial modal";
    payload.page = window.location.href;

    trackEvent("lead_form_submit", {
      event_category: "lead",
      form_name: "start_free_trial_modal",
      has_message: Boolean(rawMessage),
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
        const message = await getSubmissionError(response);
        setError(message);
        trackEvent("lead_form_error", {
          event_category: "lead",
          form_name: "start_free_trial_modal",
          error_type: "api_error",
          response_status: response.status,
        });
        toast.error(message);
        return;
      }

      setSuccess(true);
      form.reset();
      trackEvent("lead_form_success", {
        event_category: "lead",
        form_name: "start_free_trial_modal",
      });
      toast.success("Thanks, your request has been sent.");
    } catch {
      const message = "Something went wrong while sending. Please try again.";
      setError(message);
      trackEvent("lead_form_error", {
        event_category: "lead",
        form_name: "start_free_trial_modal",
        error_type: "network_error",
      });
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
            className="glass-card relative w-full max-w-lg rounded-2xl p-8 shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
          >
            <button
              onClick={() => setOpen(false)}
              data-track-event="lead_modal_close"
              data-track-label="Close icon"
              data-track-location="start_free_trial_modal"
              className="absolute right-4 top-4 text-white/50 transition hover:text-white"
              aria-label="Close form"
            >
              <X />
            </button>

            {!success ? (
              <>
                <h2 className="mb-2 text-center text-2xl font-bold text-primary">
                  Let's start your free trial
                </h2>

                <p className="mb-6 text-center text-muted-foreground">
                  Get started in minutes. No credit card required.
                </p>

                <form action={FORM_ENDPOINT} method="POST" onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  <input name="name" required placeholder="Full Name" className="input-style" />
                  <input name="business" placeholder="Restaurant Name" className="input-style" />
                  <input name="email" required placeholder="Email Address" className="input-style" />

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input name="phone" required placeholder="Mobile" className="input-style" />
                    <input name="postcode" placeholder="Postcode" className="input-style" />
                  </div>

                  <textarea
                    name="message"
                    placeholder="Tell us about your restaurant"
                    className="input-style"
                  />

                  {error ? (
                    <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive-foreground">
                      {error}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-primary py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(255,122,61,0.4)] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? "Sending..." : "Start free trial"}
                  </button>

                  <p className="text-center text-xs text-muted-foreground">
                    No contracts - No setup fee - Cancel anytime
                  </p>
                  <p className="mt-1 text-center text-xs text-primary">
                    Only 5 free slots left this week
                  </p>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="py-10 text-center"
              >
                <h3 className="mb-3 text-2xl font-bold text-primary">You're all set!</h3>
                <p className="text-muted-foreground">
                  We'll contact you shortly to start your growth.
                </p>

                <button
                  onClick={() => setOpen(false)}
                  data-track-event="lead_modal_close"
                  data-track-label="Success close"
                  data-track-location="start_free_trial_modal"
                  className="mt-6 rounded-lg bg-primary px-6 py-3 text-white"
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
