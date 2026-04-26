export const GTM_ID = "GTM-M3GVZZK2";

const CONSENT_STORAGE_KEY = "talentpull_cookie_consent";

export type TrackingConsent = "accepted" | "rejected";

type TrackingValue = string | number | boolean | null | undefined;
export type TrackingPayload = Record<string, TrackingValue>;

let lastPageView: { key: string; timestamp: number } | null = null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const consentStateFor = (choice: TrackingConsent) => {
  const permission = choice === "accepted" ? "granted" : "denied";

  return {
    ad_storage: permission,
    analytics_storage: permission,
    ad_user_data: permission,
    ad_personalization: permission,
    functionality_storage: "granted",
    security_storage: "granted",
  };
};

const cleanPayload = (payload: TrackingPayload) =>
  Object.fromEntries(
    Object.entries(payload).flatMap(([key, value]) => {
      if (typeof value === "undefined") {
        return [];
      }

      if (typeof value === "string") {
        return [[key, value.replace(/\s+/g, " ").trim().slice(0, 160)]];
      }

      return [[key, value]];
    }),
  );

export const getStoredTrackingConsent = (): TrackingConsent | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  return stored === "accepted" || stored === "rejected" ? stored : null;
};

export const updateGoogleConsent = (choice: TrackingConsent) => {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  const consentState = consentStateFor(choice);

  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", consentState);
    return;
  }

  window.dataLayer.push(["consent", "update", consentState]);
};

export const trackEvent = (event: string, payload: TrackingPayload = {}) => {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...cleanPayload(payload),
  });
};

export const setTrackingConsent = (choice: TrackingConsent) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  updateGoogleConsent(choice);
  trackEvent("cookie_consent_update", {
    consent_choice: choice,
    analytics_storage: choice === "accepted" ? "granted" : "denied",
    ad_storage: choice === "accepted" ? "granted" : "denied",
  });
};

export const applyStoredTrackingConsent = () => {
  const stored = getStoredTrackingConsent();

  if (stored) {
    updateGoogleConsent(stored);
  }
};

export const trackPageView = () => {
  if (typeof window === "undefined") {
    return;
  }

  const pagePath = window.location.pathname + window.location.search;
  const now = Date.now();

  if (lastPageView?.key === pagePath && now - lastPageView.timestamp < 1000) {
    return;
  }

  lastPageView = { key: pagePath, timestamp: now };

  trackEvent("page_view", {
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
  });
};
