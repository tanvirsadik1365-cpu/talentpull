import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ProfitCalculator from "@/components/ProfitCalculator";
import GrowthAudit from "@/components/GrowthAudit";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import GrowthOS from "@/components/GrowthOS";
import DashboardPreview from "@/components/DashboardPreview";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTABar from "@/components/MobileCTABar";
import LeadModal from "@/components/LeadModal";

const Index = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="min-h-screen bg-background">

      <LeadModal open={openModal} setOpen={setOpenModal} />

      <Navbar setOpenModal={setOpenModal} />
      <Hero setOpenModal={setOpenModal} />
      <ProblemSection />
      <ProfitCalculator setOpenModal={setOpenModal} />
      <GrowthAudit />
      <Services />
      <Pricing setOpenModal={setOpenModal} />
      <Portfolio />
      <GrowthOS />
      <DashboardPreview />
      <Testimonials />
      <ContactSection />
      <CTASection setOpenModal={setOpenModal} />
      <Footer />
      <WhatsAppButton />
      <MobileCTABar setOpenModal={setOpenModal} />
    </div>
  );
};

export default Index;