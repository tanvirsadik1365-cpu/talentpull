import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Sonner } from "@/components/ui/sonner";
import CookieConsent from "@/components/CookieConsent";
import GtmPageTracker from "@/components/GtmPageTracker";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

import Index from "./pages/index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Sonner />

        <BrowserRouter>
          <GtmPageTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

        <CookieConsent />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
