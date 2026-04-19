import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Calculator", href: "#calculator" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ setOpenModal }: any) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-6 flex items-center justify-between h-[72px]">

        {/* LOGO */}
        <a href="#" className="flex items-center">
          <img
            src="/logo.png"
            alt="Talentpull"
            className="h-9 md:h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10">

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              {link.label}

              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* CTA BUTTON */}
          <button
  onClick={() => setOpenModal(true)}
  className="ml-4 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
>
  Start Free Trial
</button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden backdrop-blur-xl bg-background/90 border-t border-border/50 overflow-hidden"
          >
            <div className="max-w-[1300px] mx-auto px-6 py-6 flex flex-col gap-4">

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground py-2 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#pricing"
                className="mt-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-center font-semibold shadow-lg"
                onClick={() => setMobileOpen(false)}
              >
                Start Free Trial
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;