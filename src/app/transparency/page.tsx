import { lightbase } from "@/constant/color";
import TransparencyHub from "./component/TransparencyHub";
import HeroSection from "./component/herosection";

export default function ResearchPage() {
  return (
    <div
    style={{
        backgroundColor: lightbase
      }}
    >
    <div className="flex flex-col justify-center items-center"
  
      
    >
      <HeroSection />
       <div className="flex flex-col justify-center items-center"
  
      
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
