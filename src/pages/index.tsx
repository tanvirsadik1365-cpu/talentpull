import { Suspense, lazy, startTransition, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTABar from "@/components/MobileCTABar";
import { consumePendingSectionHref, scrollToSection } from "@/lib/scroll-to-section";

const LeadModal = lazy(() => import("@/components/LeadModal"));
const HomepageSections = lazy(() => import("@/components/HomepageSections"));

const Index = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showDeferredContent, setShowDeferredContent] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      startTransition(() => {
        setShowDeferredContent(true);
      });
    }, 350);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const pendingSectionHref = consumePendingSectionHref();

    if (!pendingSectionHref) {
      return;
    }

    startTransition(() => {
      setShowDeferredContent(true);
    });

    const timeoutId = window.setTimeout(() => {
      scrollToSection(pendingSectionHref);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background pb-24 md:pb-0">
      {openModal ? (
        <Suspense fallback={null}>
          <LeadModal open={openModal} setOpen={setOpenModal} />
        </Suspense>
      ) : null}

      <Navbar setOpenModal={setOpenModal} />
      <Hero setOpenModal={setOpenModal} />

      {showDeferredContent ? (
        <Suspense fallback={null}>
          <HomepageSections setOpenModal={setOpenModal} />
        </Suspense>
      ) : null}

      <WhatsAppButton />
      <MobileCTABar setOpenModal={setOpenModal} />
    </div>
  );
};

export default Index;
