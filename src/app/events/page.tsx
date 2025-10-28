import { lightbase } from "@/constant/color";
import HeroSection from "./components/HeroSection";
import FilterSidebar from "./components/FilterSidebar";
import EventsGrid from "./components/EventsGrid";
import WebinarsSection from "./components/WebinarsSection";
import WhatsNewSection from "./components/WhatsNewSection";
import NewsletterSection from "./components/NewsletterSection";

export default function EventsPage() {
  return (
    <main style={{ backgroundColor: lightbase }} className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <HeroSection />
        
        {/* Filter and Events Layout */}
        <div className="flex flex-col lg:flex-row gap-8 mt-16">
          <FilterSidebar />
          <EventsGrid />
        </div>
      </div>
      <WebinarsSection />
      <WhatsNewSection />
      <NewsletterSection />
    </main>
  );
}
