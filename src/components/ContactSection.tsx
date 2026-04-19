import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, MailCheckIcon } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const ContactSection = () => {

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mnljpjyr", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setSuccess(true);
      form.reset();
    }

    setLoading(false);
  };

  return (
    <section className="py-24 px-4">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}>

          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            GET IN TOUCH
          </div>

          <h2 className="text-primary text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Let’s take back control of your restaurant.
          </h2>

          <p className="text-black-foreground mb-10 max-w-md">
            Stop relying on delivery apps. Build your own system,
            grow direct orders, and keep more of your profit.
          </p>

          <div className="space-y-6">

            <div className="flex gap-4 items-center">
              <div className="icon-box"><MapPin size={18}/></div>
              <div>
                <p className="font-semibold">Visit Us</p>
                <p className="font-bold text-sm text-muted-foreground">802 Salcombe Court, Aberfeldy Village, London, United Kingdom</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="icon-box"><Phone size={18}/></div>
              <div>
                <p className="font-semibold">Call Support</p>
                <p className="text-sm text-muted-foreground">
                  020 4578 3585
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="icon-box"><MessageCircle size={18}/></div>
              <div>
                <p className="font-semibold">WhatsApp (074 2482 2813)</p>
                <p className="text-sm text-muted-foreground">
                  We’ll contact you after submission
                </p>
              </div>
            </div>

          <div className="flex gap-4 items-center">
              <div className="icon-box"><MailCheckIcon size={18}/></div>
              <div>
                <p className="font-semibold">Email Us</p>
                <p className="text-sm text-muted-foreground">
                  info@talentpull.uk
                </p>
              </div>
            </div>

          </div>
        </motion.div>


        {/* RIGHT FORM (AUDIT STYLE) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-primary glass-card p-8 rounded-2xl space-y-4"
        >

          {!success ? (

            <form onSubmit={handleSubmit} className="space-y-5">

  {/* ROW 1 */}
  <div className="text-primary grid grid-cols-1 sm:grid-cols-2 gap-4">
    <input name="name" placeholder="Your Name" required className="w-half bg-white/10 border border-border rounded-lg pl-10 pr-4 py-3 text-sm placeholder:text-foreground focus:outline-none focus:ring-1 focus:ring-primary"/>
    <input name="phone" placeholder="Mobile Number" required className="w-half bg-white/10 border border-border rounded-lg pl-10 pr-4 py-3 text-sm placeholder:text-foreground focus:outline-none focus:ring-1 focus:ring-primary"/>
  </div>

  {/* ROW 2 */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <input name="email" placeholder="Email Address" required className="w-half bg-white/10 border border-border rounded-lg pl-10 pr-4 py-3 text-sm placeholder:text-foreground focus:outline-none focus:ring-1 focus:ring-primary"/>
    <input name="postcode" placeholder="Postcode" className="w-half bg-white/10 border border-border rounded-lg pl-10 pr-4 py-3 text-sm placeholder:text-foreground focus:outline-none focus:ring-1 focus:ring-primary"/>
  </div>

 {/* ROW 3 */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <input name="business" placeholder="Business Name" className="w-half bg-white/10 border border-border rounded-lg pl-10 pr-4 py-3 text-sm placeholder:text-foreground focus:outline-none focus:ring-1 focus:ring-primary"/>
  <input name="Website" placeholder="Website Url" className="w-half bg-white/10 border border-border rounded-lg pl-10 pr-4 py-3 text-sm placeholder:text-foreground focus:outline-none focus:ring-1 focus:ring-primary"/>
  </div>

  {/* TAGS */}
  <div className="flex flex-wrap gap-2">
    {["Need more orders.","Website.","Ads help.","Full system"].map((item)=>(
      <button
        key={item}
        type="button"
        onClick={()=>{
          const textarea = document.getElementById("message") as HTMLTextAreaElement;
          if(textarea) textarea.value = item;
        }}
        className="tag-btn"
      >
        {item}
      </button>
    ))}
  </div>

  {/* MESSAGE */}
  <textarea
  id="message"
  name="message"
  placeholder="Tell us about your restaurant..."
  className="w-half bg-white/10 border border-border rounded-lg pl-10 pr-4 py-3 text-sm placeholder:text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
/>

  {/* SECURITY (FIXED POSITION) */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">

  <p className="text-sm text-foreground">
    Security check: <span className="text-white font-medium">6 + 3 = ?</span>
  </p>

  <input
    name="security"
    placeholder="Type answer"
    required
    className="w-half bg-white/10 border border-border rounded-lg pl-10 pr-4 py-3 text-sm placeholder:text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
  />

</div>

  {/* BUTTON */}
  <button
    type="submit"
    disabled={loading}
    className="
      w-full py-4 text-lg font-bold
      rounded-xl
      bg-primary
      text-white
      shadow-lg shadow-primary/30
      hover:shadow-primary/50
      transition-all
    "
  >
    {loading ? "Sending..." : "Get Free Growth Plan"}
  </button>

  {/* TRUST */}
  <div className="text-center space-y-1">
    <p className="text-xs font-bold text-muted-foreground">
      No contracts • No setup fee • Cancel anytime
    </p>

    <p className="text-xs text-primary font-medium">
      Limited free trial slots available this month
    </p>

    <p className="text-xs font-bold text-muted-foreground">
      We reply within 10 minutes on WhatsApp
    </p>
  </div>

</form>

          ) : (

            <div className="text-center py-10">
              <h3 className="text-2xl font-bold text-primary mb-3">
                🎉 You're all set!
              </h3>
              <p className="text-muted-foreground">
                Your request has been received.
                <br /> We’ll contact you shortly.
              </p>
            </div>

          )}

        </motion.div>

      </div>

    </section>
  );
};

export default ContactSection;