import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/447424822813"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 right-4 z-50 w-14 h-14 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity animate-pulse-glow"
      aria-label="Chat on WhatsApp"
      style={{ boxShadow: "0 0 20px rgba(40, 168, 120, 0.3)" }}
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;