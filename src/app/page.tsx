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
        <div className=""
        style={{
            backgroundColor:Primary
        }}
        >
            <Hero/>
            <AnnouncementCard/>
            <VideoFeature/>
            <OurApproach/>
            <FeaturedList/>
            <CallToAction/>



        </div>
    );
};