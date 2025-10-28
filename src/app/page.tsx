import NavBar from "@/component/navbar";
import AnnouncementCard from "./HomeComponents/AnnouncementCard";
import CallToAction from "./HomeComponents/CallToAction";
import FeaturedList from "./HomeComponents/FeaturedList";
import Hero from "./HomeComponents/Hero";
import OurApproach from "./HomeComponents/OurApproach";
import VideoFeature from "./HomeComponents/VideoFeature";
import { Primary } from "@/constant/color";

export default function HomePage (){
    return (
        <div className="flex flex-col items-center "
        style={{
            backgroundColor:Primary
        }}
        >
            <div className="md:max-w-[1440px]">
            <div className="md:h-[156px] h-[96px]"> </div>
            <Hero/>
            <div className="md:h-[96px] h-0"> </div>
            <AnnouncementCard/>
            <VideoFeature/>
            <OurApproach/>
            <FeaturedList/>
            <CallToAction/>
            </div>
        </div>
    );
};