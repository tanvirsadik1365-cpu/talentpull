import { useEffect, useState } from "react";
import {
  getStoredTrackingConsent,
  setTrackingConsent,
  updateGoogleConsent,
  type TrackingConsent,
} from "@/lib/tracking";

const CookieConsent = () => {
  const [choice, setChoice] = useState<TrackingConsent | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = getStoredTrackingConsent();

    if (stored) {
      updateGoogleConsent(stored);
      setChoice(stored);
    }

    setReady(true);
  }, []);

  const choose = (nextChoice: TrackingConsent) => {
    setTrackingConsent(nextChoice);
    setChoice(nextChoice);
  };

  if (!ready || choice) {
    return null;
  }

  return (
    <div className="fixed inset-x-3 bottom-3 z-[1000] mx-auto max-w-4xl rounded-2xl border border-white/10 bg-card/95 p-4 text-sm text-foreground shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:bottom-5 sm:p-5">
      <div className="grid gap-4 md:grid-cols-[1fr,auto] md:items-center">
        <div>
          <p className="font-semibold">Cookies and visitor analytics</p>
          <p className="mt-1 leading-6 text-muted-foreground">
            We use Google Tag Manager to understand visits, clicks, forms, and marketing performance.
            We do not send names, phone numbers, email addresses, or message text to analytics.
          </p>
          <a href="/privacy-policy" className="mt-2 inline-block font-semibold text-primary">
            Privacy Policy
          </a>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row md:flex-col lg:flex-row">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="rounded-xl border border-white/10 px-4 py-2.5 font-semibold text-muted-foreground transition hover:border-primary/50 hover:text-foreground"
          >
            Reject non-essential
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="rounded-xl bg-primary px-4 py-2.5 font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
