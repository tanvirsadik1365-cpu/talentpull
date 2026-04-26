import { Facebook, Instagram } from "lucide-react";

import { scrollToSection } from "@/lib/scroll-to-section";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const quickLinks = [
  { label: "Features", href: "#features" },
  { label: "Calculator", href: "#calculator" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 md:py-14">
      <div className="container-main">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <button
              type="button"
              onClick={() => scrollToSection("#top")}
              data-track-event="navigation_click"
              data-track-label="Footer logo"
              data-track-location="footer"
              className="mb-5 block bg-transparent p-0"
            >
              <img
                src="/logo-optimized.png"
                alt="Talentpull"
                width={2500}
                height={580}
                loading="lazy"
                decoding="async"
                className="h-6 w-auto object-contain"
              />
            </button>

            <address className="text-sm not-italic leading-relaxed text-muted-foreground">
              Talentpull Ltd
              <br />
              802 Salcombe Court
              <br />
              16 St Ives Place
              <br />
              London, E14 0HX
              <br />
              United Kingdom
            </address>

            <p className="mt-3 text-xs text-muted-foreground">Company number: 16624016</p>
          </div>

          <div>
            <h4 className="mb-5 font-semibold">Quick Links</h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => {
                      scrollToSection(item.href);
                    }}
                    data-track-event="navigation_click"
                    data-track-label={item.label}
                    data-track-location="footer"
                    className="text-left transition-colors hover:text-primary"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-semibold">Contact</h4>

            <a
              href="https://wa.me/447424822813"
              target="_blank"
              rel="noopener noreferrer"
              data-track-event="whatsapp_click"
              data-track-label="Footer WhatsApp"
              data-track-location="footer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <WhatsAppIcon size={18} />
              WhatsApp
            </a>

            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com/talentpull.uk.marketing/"
                target="_blank"
                rel="noopener noreferrer"
                data-track-event="social_click"
                data-track-label="Facebook"
                data-track-location="footer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-white"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/talentpull_marketing_agency"
                target="_blank"
                rel="noopener noreferrer"
                data-track-event="social_click"
                data-track-label="Instagram"
                data-track-location="footer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-white"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-semibold">Legal</h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="/privacy-policy"
                  data-track-event="navigation_click"
                  data-track-label="Privacy Policy"
                  data-track-location="footer"
                  className="transition-colors hover:text-primary"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <span className="text-muted-foreground/70">Terms of Service</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          Copyright {new Date().getFullYear()} Talentpull Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
