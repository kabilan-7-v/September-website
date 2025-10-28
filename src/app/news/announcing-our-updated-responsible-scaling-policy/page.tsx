import { lightbase } from "@/constant/color";
import AnnouncementHero from "./components/AnnouncementHero";
import AnnouncementIllustration from "./components/AnnouncementIllustration";
import ArticleContent from "./components/ArticleContent";
import FootnotesSection from "./components/FootnotesSection";
import RelatedNews from "./components/RelatedNews";

export default function ResponsibleScalingPolicyPage() {
  return (
    <main style={{backgroundColor: lightbase}} className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <AnnouncementHero />
        <AnnouncementIllustration />
        <ArticleContent />
        <FootnotesSection />
      </div>
      <RelatedNews />
    </main>
  );
}
