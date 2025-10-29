import { lightbase } from "@/constant/color";
import TransparencyHub from "./component/TransparencyHub";
import HeroSection from "./component/herosection";

export default function ResearchPage() {
  return (
    <div
    style={{
        backgroundColor: lightbase
      }}
      className="w-full"
    >
    <div className="flex flex-col w-full"
  
      
    >
      <HeroSection />
       <div className="flex flex-col w-full"
  
      
    >
      <TransparencyHub />
      <div
        style={{
          height: "300px"
        }}
      ></div>
      </div>
      </div>
    </div>
  );
}
