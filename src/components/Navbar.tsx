import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowRight,
  BarChart3,
  Calculator,
  Globe,
  Menu,
  MessageCircle,
  Phone,
  ShoppingBag,
  TrendingUp,
  X,
} from "lucide-react";

import { scrollToSection } from "@/lib/scroll-to-section";

const navLinks = [
  {
    label: "Features",
    href: "#features",
    icon: BarChart3,
    description: "See where revenue is leaking",
  },
  {
    label: "Calculator",
    href: "#calculator",
    icon: Calculator,
    description: "Estimate lost commission fast",
  },
  {
    label: "Services",
    href: "#services",
    icon: Globe,
    description: "Explore the full growth stack",
  },
  {
    label: "Portfolio",
    href: "#portfolio",
    icon: ShoppingBag,
    description: "Browse real restaurant wins",
  },
  {
    label: "Pricing",
    href: "#pricing",
    icon: TrendingUp,
    description: "Choose the right package",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
    icon: MessageCircle,
    description: "Hear from restaurant owners",
  },
  {
    label: "Contact",
    href: "#contact",
    icon: Phone,
    description: "Talk to the Talentpull team",
  },
];

const Navbar = ({ setOpenModal }: any) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.classList.toggle("mobile-nav-open", mobileOpen);

    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.classList.remove("mobile-nav-open");
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const navigateTo = (href: string, closeMobileMenu = false) => {
    if (closeMobileMenu) {
      setMobileOpen(false);
      window.setTimeout(() => scrollToSection(href), 180);
      return;
    }

    scrollToSection(href);
  };

  const mobileMenu =
    mobileOpen && typeof document !== "undefined"
      ? createPortal(
          <>
            <button
              type="button"
              aria-label="Close mobile menu"
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[80] bg-black/55 backdrop-blur-[2px] animate-in fade-in duration-200 lg:hidden"
            />

            <div
              id="mobile-navigation"
              className="pointer-events-auto fixed bottom-[88px] left-4 right-4 top-[84px] z-[90] overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,24,38,0.98),rgba(10,13,21,0.98))] shadow-[0_30px_80px_rgba(0,0,0,0.45)] animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-300 lg:hidden"
            >
              <div className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
              <div className="pointer-events-none absolute left-0 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-secondary/10 blur-3xl" />
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-white/20" />

              <div className="relative h-full overflow-y-auto overscroll-contain p-4">
                <div
                  className="mb-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 animate-in fade-in-0 slide-in-from-top-1"
                  style={{ animationDelay: "40ms", animationFillMode: "both" } as CSSProperties}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-foreground">Quick Navigation</p>
                      <p className="text-xs text-muted-foreground">Jump to any section instantly</p>
                    </div>
                    <div className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                      Mobile
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon;

                    return (
                      <button
                        key={link.href}
                        type="button"
                        onClick={() => navigateTo(link.href, true)}
                        data-track-event="navigation_click"
                        data-track-label={link.label}
                        data-track-location="mobile_nav"
                        className="group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.05] active:scale-[0.98] animate-in fade-in-0 slide-in-from-bottom-2"
                        style={
                          {
                            animationDelay: `${80 + index * 60}ms`,
                            animationDuration: "300ms",
                            animationFillMode: "both",
                          } as CSSProperties
                        }
                      >
                        <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.05),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/20 to-secondary/10 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                          <Icon size={18} />
                        </span>

                        <span className="relative min-w-0 flex-1">
                          <span className="block text-sm font-semibold text-foreground">{link.label}</span>
                          <span className="block truncate text-xs text-muted-foreground">{link.description}</span>
                        </span>

                        <ArrowRight
                          size={16}
                          className="relative shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary"
                        />
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    window.setTimeout(() => setOpenModal?.(true), 180);
                  }}
                  data-track-event="lead_modal_open"
                  data-track-label="Start Free Trial"
                  data-track-location="mobile_nav"
                  className="relative mt-4 flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-primary px-6 py-3.5 text-center font-semibold text-primary-foreground shadow-[0_16px_36px_rgba(255,122,61,0.28)] transition-all duration-300 hover:shadow-[0_18px_40px_rgba(255,122,61,0.36)] active:scale-[0.98] animate-in fade-in-0 slide-in-from-bottom-2"
                  style={
                    {
                      animationDelay: "220ms",
                      animationDuration: "320ms",
                      animationFillMode: "both",
                    } as CSSProperties
                  }
                >
                  <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.18),transparent_35%,transparent_65%,rgba(255,255,255,0.12))]" />
                  <span className="relative">Start Free Trial</span>
                  <ArrowRight size={16} className="relative" />
                </button>
              </div>
            </div>
          </>,
          document.body,
        )
      : null;

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-[70] transition-all duration-300 ${
          scrolled
            ? "border-b border-border/50 bg-background/75 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1300px] items-center justify-between px-4 sm:px-6">
          <button
            type="button"
            onClick={() => navigateTo("#top")}
            data-track-event="navigation_click"
            data-track-label="Logo"
            data-track-location="navbar"
            className="flex items-center bg-transparent p-0"
            aria-label="Go to top"
          >
            <img
              src="/logo-optimized.png"
              alt="Talentpull"
              width={2500}
              height={580}
              className="h-8 w-auto object-contain transition-transform duration-300 hover:scale-105 md:h-10"
            />
          </button>

          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => {
                  navigateTo(link.href);
                }}
                data-track-event="navigation_click"
                data-track-label={link.label}
                data-track-location="desktop_nav"
                className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}

            <button
              onClick={() => setOpenModal?.(true)}
              data-track-event="lead_modal_open"
              data-track-label="Start Free Trial"
              data-track-location="desktop_nav"
              className="ml-4 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl active:scale-95"
            >
              Start Free Trial
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            data-track-event="mobile_menu_toggle"
            data-track-label={mobileOpen ? "Close" : "Open"}
            data-track-location="navbar"
            className={`relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border transition-all duration-300 active:scale-95 lg:hidden ${
              mobileOpen
                ? "border-primary/50 bg-primary/15 text-primary shadow-[0_12px_32px_rgba(255,122,61,0.2)]"
                : "border-white/10 bg-white/[0.04] text-foreground shadow-[0_12px_32px_rgba(0,0,0,0.2)]"
            }`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_60%)]" />
            <span className="pointer-events-none absolute inset-x-2 top-0 h-px bg-white/25" />
            <span
              className={`relative z-10 transition-transform duration-200 ${
                mobileOpen ? "rotate-90 scale-105" : "rotate-0 scale-100"
              }`}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </span>
          </button>
        </div>
      </nav>

      {mobileMenu}
    </>
  );
};

export default Navbar;
