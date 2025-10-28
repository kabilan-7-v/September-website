import { lightbase } from "@/constant/color";
import HeroSection from "./components/HeroSection";
import BenefitsSection from "./components/BenefitsSection";
import ValuesSection from "./components/ValuesSection";
import TechnicalInterviewsSection from "./components/TechnicalInterviewsSection";
import OtherThingsSection from "./components/OtherThingsSection";

export default function CareersPage() {
  return (
    <main style={{ backgroundColor: lightbase }} className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <ValuesSection />
      <TechnicalInterviewsSection />
      <OtherThingsSection />
    </main>
  );
}
