
'use client';
import { BaseLight, Primary } from "@/constant/color";
import { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Menu, X, ChevronDown } from "lucide-react";

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div>
            <nav className="h-[80px] text-black hidden justify-between items-center px-8 shadow-md md:flex"
            style={{
                backgroundColor:Primary,
                color:BaseLight
            }}
            >
                <h2 className="text-xl font-bold font-heading">
                    September-website
                </h2>
                <div>
                    <ul className="flex gap-8 items-center">
                        <li className=" hover:cursor-pointer hover:border-b-1">Research</li>
                        <li className="hover:cursor-pointer hover:border-b-1 ">Economic Futures</li>
                        <li className="flex  hover:cursor-pointer hover:border-b-1">Commitments
                            <RiArrowDropDownLine size={25} className="" />

                        </li>
                        <li className="flex hover:cursor-pointer  hover:border-b-1">Learn
                            <RiArrowDropDownLine size={25} className="" />

                        </li>
                        <li className="hover:cursor-pointer  hover:border-b-1">News</li>
                        <button className="bg-black text-white rounded-xl flex items-center gap-2 hover:cursor-pointer">
                            <p className="p-[8px] m-[6px]">Try BAP</p>
                            <div className="self-stretch bg-gray-200 w-[1px] "></div>
                            <RiArrowDropDownLine size={25} className="m-[6px]" />
                        </button>
                    </ul>
                </div>

            </nav>



                        {/* Mobile Navbar */}


            
            <nav className="md:hidden flex justify-between items-center shadow-md h-[60px]" style={{backgroundColor:Primary,color:BaseLight}}>
                <div>
                    <h2 className="text-xl font-bold m-4">S/</h2>
                </div>

                <HiOutlineMenuAlt2 size={30} className="m-4" onClick={()=>setIsMobileMenuOpen(true)} />
            </nav>
            <div 
                className={`fixed inset-0 bg-black transition-all duration-700 ease-out z-40 md:hidden ${
                    isMobileMenuOpen ? 'opacity-50 visible' : 'opacity-0 invisible'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu - Slides from top */}
            <div 
                style={{ backgroundColor: BaseLight }}
                className={`fixed top-0 left-0 right-0 w-full h-screen shadow-2xl transform transition-all duration-700 ease-out z-50 md:hidden ${
                    isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                }`}
            >
                <div className="flex justify-between items-center px-6 py-4  border-b-gray-300 border-b text-black">
                    <h2 className="text-xl font-bold">September-website</h2>
                    <button 
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <X size={30} />
                    </button>
                </div>
                
                <div className="flex flex-col  text-black">
                    <div className="flex flex-col gap-6 p-6">
                    <p className={`cursor-pointer text-3xl border-b-gray-300 border-b pb-2 transition-all duration-500 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{ transitionDelay: '100ms' }}>Research</p>
                    <p className={`cursor-pointer text-3xl  border-b-gray-300 border-b pb-2 transition-all duration-500 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>Economic Futures</p>
                    <div className={`cursor-pointer text-3xl  border-b-gray-300 border-b pb-2 flex items-center justify-between transition-all duration-500 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
                        <span>Commitments</span>
                        <ChevronDown size={25} />
                    </div>
                    <div className={`cursor-pointer text-3xl border-b border-b-gray-300  pb-2 flex items-center justify-between transition-all duration-500 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
                        <span>Learn</span>
                        <ChevronDown size={25} />
                    </div>
                    <p className={`cursor-pointer text-3xl border-b-gray-300 border-b pb-2 transition-all duration-500 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{ transitionDelay: '500ms' }}>News</p>
                 </div>  
                 <div className="p-4">
                 <button 
                        style={{ backgroundColor: Primary, transitionDelay: '600ms' }}
                        className={`text-white px-6 py-3 rounded-xl mt-4 w-full flex items-center border-b-gray-300  justify-center gap-2 transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    >
                        <span className="text-xl  ">Log in to BAP</span>

                    </button>
                    <button 
                        style={{  transitionDelay: '600ms' }}
                        className={`text-white px-6 py-3 rounded-xl mt-4 w-full flex items-center border-gray-300 border-2  justify-center gap-2 transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    >
                        <span className="text-xl text-black ">Try BAP</span>

                    </button>
                    </div>
                </div>
            </div>
        </div>
    )

}