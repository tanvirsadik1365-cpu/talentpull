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

type HomepageSectionsProps = {
  setOpenModal: (open: boolean) => void;
};

const HomepageSections = ({ setOpenModal }: HomepageSectionsProps) => {
  return (
    <>
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
    </>
  );
};

export default HomepageSections;
