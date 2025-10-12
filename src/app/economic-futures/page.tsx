import AnthropicHeader from "./Component/AnthropicHeader";
import EconomicIndexSection from "./Component/EconomicIndexSection";
import IntroAndConnect from "./Component/IntroAndConnect";
import UpdatesAndFeatures from "./Component/UpdatesAndFeatures";

export default function EconomicFeaturePage() {
  return (
    <div className="">
        <AnthropicHeader/>
        <UpdatesAndFeatures/>
        <IntroAndConnect/>
    </div>
  );
}
