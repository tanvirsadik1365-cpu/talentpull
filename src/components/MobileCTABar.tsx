import { Phone } from "lucide-react";

const MobileCTABar = ({ setOpenModal }: any) => {
  return (
    <div className="mobile-fixed-action fixed bottom-0 left-0 right-0 z-50 flex gap-2 border-t border-border/50 bg-background/90 px-3 py-2 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] backdrop-blur-xl md:hidden">
      <button
        onClick={() => setOpenModal(true)}
        className="flex-1 rounded-lg bg-primary py-2 text-center text-sm font-semibold text-primary-foreground"
      >
        Start Free Trial
      </button>

      <a
        href="tel:+447424822813"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-accent text-foreground"
        aria-label="Call"
      >
        <Phone size={20} />
      </a>
    </div>
  );
};

export default MobileCTABar;
