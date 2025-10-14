

'use client';
import { BaseLight, Primary } from "@/constant/color";
import { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { ChevronDown, ExternalLink, X } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Research", path: "/research" },
        { name: "Economic Futures", path: "/economic-futures" },
        {
            name: "Commitments",
            path: "/commitments",
            hasDropdown: true,
            dropdown: [
                {
                    title: 'Initiatives',
                    links: [
                        { name: 'Transparency', path: '/transparency' },
                        { name: 'Responsible Scaling Policy', path: '/responsible-scaling' },
                    ]
                },
                {
                    title: 'Trust center',
                    links: [
                        { name: 'Security and compliance', path: '/security' },
                    ]
                }
            ]
        },
        {
            name: "Learn",
            path: "/learn",
            hasDropdown: true,
            dropdown: [
                {
                    title: 'Company',
                    links: [
                        { name: 'About', path: '/about' },
                        { name: 'Careers', path: '/careers' },
                        { name: 'Events', path: '/events' },
                    ]
                }
            ]
        },
        { name: "News", path: "/news" },
    ];

    return (
        <div>
            {/* Desktop Navbar */}
            <nav
                className="h-[80px] z-50 text-[#141413] font-[16px] fixed top-0 w-screen hidden justify-between items-center px-8  md:flex"
                style={{
                    backgroundColor: Primary,
                    // color: BaseLight
                }}
            >
                <Link href="/" className="text-xl font-bold font-heading">
                    SEPTEMBER
                </Link>

                <ul className="flex gap-8 items-center">
                    {navItems.map((item) => (
                        <li key={item.path} className="relative group">
                            {/* THIS IS THE LINE THAT CHANGED */}
                            <Link
                                href={item.path}
                                className="relative flex items-center gap-1 py-2 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-current after:transition-transform after:duration-300 group-hover:after:scale-x-100"
                            >
                                {item.name}
                                {item.hasDropdown && <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />}
                            </Link>

                            {/* Dropdown Menu Logic */}
                            {item.dropdown && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 origin-top transform transition-all duration-300 ease-in-out scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 invisible group-hover:visible">
                                    <div className="bg-white rounded-xl shadow-lg p-6 text-black">
                                        {item.dropdown.map((section, index) => (
                                            <div key={section.title} className={index > 0 ? 'mt-4 pt-4 border-t border-gray-200' : ''}>
                                                <h3 className="font-bold text-lg mb-2">{section.title}</h3>
                                                <ul className="flex flex-col gap-2">
                                                    {section.links.map((link) => (
                                                        <li key={link.path}>
                                                            <Link href={link.path} className="hover:underline text-lg">
                                                                {link.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                    <li className="">
                        {/* Button Group */}
                        <div className="flex items-center">
                            <button className="bg-[#141413] h-[46px] w-[131px] text-white rounded-l-xl flex items-center justify-center gap-2 hover:cursor-pointer">
                                <p>Try BAP</p>
                            </button>
                            <button className="rounded-r-xl h-[46px] w-[48px] bg-[#141413] flex items-center justify-center relative group">
                                <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" color="White" />
                            </button>
                        </div>

                        {/* Dropdown Menu for "Try BAP" */}
                        {/* 2. Moved dropdown inside the group and adjusted positioning */}
                        {/* <div className="absolute top-full right-0 mt-3 w-72 origin-top transform transition-all duration-300 ease-in-out scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 invisible group-hover:visible">
                            <div className="bg-white rounded-xl shadow-lg p-6 text-black">
                                {navItems.dropdown.map((section, index) => (
                                    <div key={section.title} className={index > 0 ? 'mt-4 pt-4 border-t border-gray-200' : ''}>
                                        <h3 className="font-bold text-lg mb-2">{section.title}</h3>
                                        <ul className="flex flex-col gap-2">
                                            {section.links.map((link) => (
                                                <li key={link.path}>
                                                    <Link href={link.path} className="hover:underline text-lg">
                                                        {link.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div> */}
                        {/* </div> */}
                    </li>

                </ul>
            </nav>

            {/* --- Mobile Navbar and Menu (no changes here) --- */}
            {/* ... rest of your mobile code ... */}
            <nav
                className="md:hidden flex justify-between items-center shadow-md h-[60px] fixed w-full z-40 top-0 mb-18"
                style={{ backgroundColor: Primary, color: "#141413" }}
            >
                <div>
                    <h2 className="text-xl font-bold m-4">S/</h2>
                </div>
                <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="Open menu"
                >
                    <HiOutlineMenuAlt2 size={30} className="m-4" />
                </button>
            </nav>

            {/* Overlay Background */}
            <div
                className={`fixed inset-0 bg-black transition-opacity duration-300 ease-out z-40 md:hidden ${isMobileMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <div
                style={{ backgroundColor: BaseLight }}
                className={`fixed top-0 left-0 right-0 w-full h-screen shadow-2xl  transform transition-transform duration-500 ease-in-out z-50 md:hidden ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <div className="flex justify-between items-center px-6 py-4 border-b-gray-300 border-b text-black">
                    <h2 className="text-xl font-bold">September-website</h2>
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <X size={30} />
                    </button>
                </div>

                <div className="flex flex-col text-black p-6">
                    <ul className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <li key={item.path} className="border-b border-gray-200 pb-4">
                                <Link
                                    href={item.path}
                                    onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
                                    className="cursor-pointer text-3xl flex items-center gap-2"
                                >
                                    {item.name}
                                </Link>
                                {/* Also show dropdown items on mobile */}
                                {item.dropdown && (
                                    <div className="mt-3 ml-4 flex flex-col gap-2">
                                        {item.dropdown.map(section =>
                                            section.links.map(link => (
                                                <Link
                                                    key={link.path}
                                                    href={link.path}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="text-xl text-gray-700"
                                                >
                                                    {link.name}
                                                </Link>
                                            ))
                                        )}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                
            </div>
        </div>
    );
}