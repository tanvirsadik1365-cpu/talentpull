import { Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-14">
      <div className="container-main">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>

            {/* LOGO */}
            <div className="mb-5">
              <img
                src="/logo.png"
                alt="Talentpull"
                className="h-6 w-auto object-contain"
              />
            </div>

            {/* ADDRESS */}
            <address className="text-sm text-muted-foreground not-italic leading-relaxed">
              Talentpull Ltd<br/>
              802 Salcombe Court<br/>
              16 St Ives Place<br/>
              London, E14 0HX<br/>
              United Kingdom
            </address>

            <p className="text-xs text-muted-foreground mt-3">
              Company number: 16624016
            </p>

          </div>


          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold mb-5">Quick Links</h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Features",
                "Calculator",
                "Portfolio",
                "Pricing",
                "Testimonials",
                "Contact"
              ].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="hover:text-primary transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* CONTACT */}
          <div>

            <h4 className="font-semibold mb-5">Contact</h4>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/447424822813"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>


            {/* SOCIAL ICONS */}
            <div className="flex gap-3 mt-5">

              <a
                href="https://www.facebook.com/talentpull.uk.marketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Facebook size={18}/>
              </a>

              <a
                href="https://www.instagram.com/talentpull_marketing_agency"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Instagram size={18}/>
              </a>

            </div>

          </div>


          {/* LEGAL */}
          <div>

            <h4 className="font-semibold mb-5">Legal</h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a 
                href="/privacy-policy" 
                className="hover:text-primary transition-colors"
                > 
                Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>

          </div>

        </div>


        {/* BOTTOM */}
        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Talentpull Ltd. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;