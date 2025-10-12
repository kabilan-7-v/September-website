import NavBar from "@/component/navbar";
import AnnouncementCard from "./HomeComponents/AnnouncementCard";
import CallToAction from "./HomeComponents/CallToAction";
import FeaturedList from "./HomeComponents/FeaturedList";
import Hero from "./HomeComponents/Hero";
import OurApproach from "./HomeComponents/OurApproach";
import VideoFeature from "./HomeComponents/VideoFeature";

export default function HomePage (){
    return (
        <div className="bg-[#F8F7F3]">
            <Hero/>
            <AnnouncementCard/>
            <VideoFeature/>
            <OurApproach/>
            <FeaturedList/>
            <CallToAction/>



        </div>
    );
};