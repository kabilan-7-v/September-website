import { lightbase } from "@/constant/color";
import HeroSection from "./components/HeroSection";
import OurPurpose from "./components/PurposeSection";
import TeamSection from "./components/TeamSection";
import ValuesSection from "./components/ValuesSection";
import GovernanceSection from "./components/GovernanceSection";
import JoinUsSection from "./components/JoinUsSection";


export default function NewsPage() {
  return (
    <main style={{backgroundColor:lightbase}}   >
      <HeroSection/>
      <OurPurpose/>
      <TeamSection/>
      <ValuesSection/>
      <GovernanceSection/>
      <JoinUsSection/>
    </main>
  );
}
