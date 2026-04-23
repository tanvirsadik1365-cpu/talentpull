const DEFAULT_SCROLL_OFFSET = 88;
const MAX_SMOOTH_SCROLL_DISTANCE = 1400;
const PENDING_SECTION_STORAGE_KEY = "talentpull:pending-section";

function clearPendingSection() {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.removeItem(PENDING_SECTION_STORAGE_KEY);
}

function storePendingSection(id: string) {
  if (typeof window === "undefined") {
    return;
  }

  if (!id || id === "top") {
    clearPendingSection();
    return;
  }

  window.sessionStorage.setItem(PENDING_SECTION_STORAGE_KEY, id);
}

function clearHashFromUrl() {
  if (typeof window === "undefined" || !window.location.hash) {
    return;
  }

  window.history.replaceState(null, "", window.location.pathname + window.location.search);
}

function scrollInstantly(top: number) {
  const previousInlineBehavior = document.documentElement.style.scrollBehavior;

  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo({ top, behavior: "auto" });

  window.requestAnimationFrame(() => {
    document.documentElement.style.scrollBehavior = previousInlineBehavior;
  });
}

function scrollWhenSectionIsAvailable(id: string, offset: number, attemptsLeft = 20) {
  const element = document.getElementById(id);

  if (element) {
    const top = Math.max(0, window.scrollY + element.getBoundingClientRect().top - offset);
    const distance = Math.abs(window.scrollY - top);

    if (distance > MAX_SMOOTH_SCROLL_DISTANCE) {
      scrollInstantly(top);
      return;
    }

    window.scrollTo({ top, behavior: "smooth" });
    return;
  }

  if (attemptsLeft <= 0) {
    return;
  }

  window.setTimeout(() => {
    scrollWhenSectionIsAvailable(id, offset, attemptsLeft - 1);
  }, 120);
}

export function consumePendingSectionHref() {
  if (typeof window === "undefined") {
    return null;
  }

  const hash = window.location.hash;

  if (hash.startsWith("#")) {
    clearPendingSection();
    clearHashFromUrl();
    return hash;
  }

  const pendingSection = window.sessionStorage.getItem(PENDING_SECTION_STORAGE_KEY);

  if (!pendingSection) {
    return null;
  }

  clearPendingSection();
  return `#${pendingSection}`;
}

export function scrollToSection(href: string, offset = DEFAULT_SCROLL_OFFSET) {
  if (typeof window === "undefined" || !href) {
    return;
  }

  if (!href.startsWith("#")) {
    clearPendingSection();
    window.location.assign(href);
    return;
  }

  const id = href.slice(1);

  if (window.location.pathname !== "/") {
    storePendingSection(id);
    window.location.assign("/");
    return;
  }

  clearHashFromUrl();

  if (!id || id === "top") {
    clearPendingSection();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const element = document.getElementById(id);

  if (!element) {
    storePendingSection(id);
    scrollWhenSectionIsAvailable(id, offset);
    return;
  }

  clearPendingSection();

  const top = Math.max(0, window.scrollY + element.getBoundingClientRect().top - offset);
  const distance = Math.abs(window.scrollY - top);

  if (distance > MAX_SMOOTH_SCROLL_DISTANCE) {
    scrollInstantly(top);
    return;
  }

  window.scrollTo({ top, behavior: "smooth" });
}
