import NavBar from "@/component/navbar";
import Hero from "./Components/Hero";
import AnnouncementCard from "./Components/AnnouncementCard";
import Footer from "@/component/Footer";
import VideoFeature from "./Components/VideoFeature";
import OurApproach from "./Components/OurApproach";
import FeaturedList from "./Components/FeaturedList";
import CallToAction from "./Components/CallToAction";

export default function HomePage (){
    return (
        <div className="bg-[#F8F7F3]">
            <NavBar />
            <Hero />
            <AnnouncementCard />
            <VideoFeature />
            <OurApproach/>
            <FeaturedList/>
            <CallToAction/>

            <Footer />


        </div>
    );
};