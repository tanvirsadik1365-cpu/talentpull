import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { applyStoredTrackingConsent, trackEvent, trackPageView } from "@/lib/tracking";

const getTrackableElement = (target: EventTarget | null) => {
  if (!(target instanceof Element)) {
    return null;
  }

  return target.closest<HTMLElement>("[data-track-event]");
};

const getLinkUrl = (element: HTMLElement) => {
  const link = element instanceof HTMLAnchorElement ? element : element.closest("a");
  return link instanceof HTMLAnchorElement ? link.href : undefined;
};

const GtmPageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    applyStoredTrackingConsent();
  }, []);

  useEffect(() => {
    trackPageView();
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const element = getTrackableElement(event.target);

      if (!element) {
        return;
      }

      trackEvent(element.dataset.trackEvent || "site_interaction", {
        event_category: element.dataset.trackCategory || "engagement",
        event_label: element.dataset.trackLabel || element.textContent || undefined,
        event_location: element.dataset.trackLocation,
        link_url: getLinkUrl(element),
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const seenSections = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target as HTMLElement;
          const sectionId = section.id;

          if (!entry.isIntersecting || !sectionId || seenSections.has(sectionId)) {
            return;
          }

          seenSections.add(sectionId);
          trackEvent("section_view", {
            event_category: "engagement",
            section_id: sectionId,
            section_label: section.dataset.trackSection || sectionId,
          });
        });
      },
      { threshold: 0.45 },
    );

    const observeSections = () => {
      document.querySelectorAll<HTMLElement>("section[id]").forEach((section) => {
        if (!seenSections.has(section.id)) {
          observer.observe(section);
        }
      });
    };

    observeSections();

    const mutationObserver = new MutationObserver(observeSections);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  return null;
};

export default GtmPageTracker;
