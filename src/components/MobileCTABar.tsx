import { Phone, MessageCircle } from "lucide-react";

const MobileCTABar = ({ setOpenModal }: any) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass-card border-t border-border/50 px-3 py-2 flex gap-2">
      <button
  onClick={() => setOpenModal(true)}
  className="flex-1 py-2.5 rounded-lg bg-primary text-primary-foreground text-center text-sm font-semibold"
>
  Start Free Trial
</button>
      
      <a
        href="tel:+447424822813"
        className="w-11 h-11 rounded-lg bg-accent text-foreground flex items-center justify-center flex-shrink-0 border border-border"
        aria-label="Call"
      >
        <Phone size={20} />
      </a>
    </div>
  );
};

export default MobileCTABar;
