import WhatsAppIcon from "@/components/WhatsAppIcon";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/447424822813"
      target="_blank"
      rel="noopener noreferrer"
      data-track-event="whatsapp_click"
      data-track-label="Floating WhatsApp"
      data-track-location="floating_button"
      className="mobile-fixed-action animate-pulse-glow fixed bottom-24 right-3 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-opacity hover:opacity-90 will-change-transform md:bottom-6 md:right-4 md:h-14 md:w-14"
      aria-label="Chat on WhatsApp"
      style={{ boxShadow: "0 0 20px rgba(37, 211, 102, 0.35)" }}
    >
      <WhatsAppIcon size={26} />
    </a>
  );
};

export default WhatsAppButton;
