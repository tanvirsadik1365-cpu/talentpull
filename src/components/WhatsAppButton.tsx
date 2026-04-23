import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/447424822813"
      target="_blank"
      rel="noopener noreferrer"
      className="mobile-fixed-action animate-pulse-glow fixed bottom-24 right-3 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-lg transition-opacity hover:opacity-90 will-change-transform md:bottom-6 md:right-4 md:h-14 md:w-14"
      aria-label="Chat on WhatsApp"
      style={{ boxShadow: "0 0 20px rgba(40, 168, 120, 0.3)" }}
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsAppButton;
