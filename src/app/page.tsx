'use client';

import { useState, useEffect } from "react";
import NavBar from "@/component/navbar";
import AnnouncementCard from "./HomeComponents/AnnouncementCard";
import CallToAction from "./HomeComponents/CallToAction";
import FeaturedList from "./HomeComponents/FeaturedList";
import Hero from "./HomeComponents/Hero";
import OurApproach from "./HomeComponents/OurApproach";
import VideoFeature from "./HomeComponents/VideoFeature";
import WaitlistPopup from "@/component/WaitlistPopup";
import { Primary } from "@/constant/color";

export default function HomePage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Automatically show popup after 2 seconds on page load
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsPopupOpen(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* Wrapper with blur effect when popup is open */}
            <div className={`transition-all duration-300 ${isPopupOpen ? 'blur-sm' : ''}`}>
                <NavBar />
                <div 
                    className="flex flex-col items-center"
                    style={{
                        backgroundColor: Primary
                    }}
                >
                    <div className="md:max-w-[1440px]">
                        <div className="md:h-[156px] h-[96px]"> </div>
                        <Hero />
                        <div className="md:h-[96px] h-0"> </div>
                        <AnnouncementCard />
                        <VideoFeature />
                        <OurApproach />
                        <FeaturedList />
                        <CallToAction />
                    </div>
                </div>
            </div>

            {/* Waitlist Popup */}
            <WaitlistPopup 
                isOpen={isPopupOpen} 
                onClose={() => setIsPopupOpen(false)} 
            />
        </>
    );
}