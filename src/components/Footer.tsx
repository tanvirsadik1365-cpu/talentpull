import { scrollToSection } from "@/lib/scroll-to-section";
import SocialLinks from "@/components/SocialLinks";

const quickLinks = [
  { label: "Features", href: "#features" },
  { label: "Calculator", href: "#calculator" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const companyHouseUrl =
  "https://find-and-update.company-information.service.gov.uk/company/16624016";

const Footer = () => {
  return (
    <footer className="border-t border-border/70 bg-background pb-10 pt-24 md:py-14">
      <div className="container-main">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.95fr_1.15fr_0.85fr] lg:gap-14">
          <div className="max-w-sm">
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

            <a
              href={companyHouseUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track-event="social_click"
              data-track-label="Companies House"
              data-track-location="footer_company"
              className="mt-4 inline-flex items-center rounded-lg border border-white/10 bg-accent/60 px-3 py-2 text-xs font-semibold text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
            >
              Company number: 16624016
            </a>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Quick Links</h4>

            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-muted-foreground sm:block sm:space-y-3">
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
            <h4 className="mb-4 text-sm font-semibold text-foreground">Connect</h4>
            <SocialLinks />
            <p className="mt-4 max-w-xs text-xs leading-5 text-muted-foreground">
              Follow, verify, or message Talentpull through official channels.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Legal</h4>

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
                <a
                  href={companyHouseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track-event="social_click"
                  data-track-label="Companies House"
                  data-track-location="footer_legal"
                  className="transition-colors hover:text-primary"
                >
                  Companies House
                </a>
              </li>
              <li>
                <span className="text-muted-foreground/70">Terms of Service</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} Talentpull Ltd. All rights reserved.</p>
          <p className="text-xs">Registered in England and Wales.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
