"use client";

import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>  
            {/* Mobile Navbar */}
            <nav className="sticky top-0 z-20 flex justify-end p-4 bg-[#131313] lg:hidden">
                <HiMenu 
                    className={`text-[32px] gradient-icon transform transition-transform duration-300 cursor-pointer  ${isOpen ? 'rotate-180' : ''}`} 
                    onClick={handleMenuClick}
                /> 
                <svg className="gradient-defs absolute invisible">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#E2C196', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#69BB44', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                </svg>
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-[#131313] text-white shadow-[0_10px_20px_rgba(165,190,109,0.5)] z-10 text-center text-[16px] flex flex-col space-y-[32px] py-6 rounded-b-3xl">
                        <a href="#about" className="hover:font-bold">About</a>
                        <a href="#why-kreate" className="hover:font-bold">Why kreate</a>
                        <a href="#why" className="hover:font-bold">Community</a>
                        <a href="#contact-us" className="hover:font-bold">Contact Us</a>
                    </div>
                )}
            </nav>

            {/* Desktop Navbar */}
            <nav className="text-white sticky top-0 z-20 bg-[#131313] justify-between items-center p-4 hidden lg:flex">
                <Image 
                    src="/logo.png"
                    alt="Kreate Logo"
                    width={200}
                    height={81}
                    className="pl-[70px]"
                />
                <div className="flex space-x-8 text-[20px] pr-[70px]">
                    <a href="#about-us" className="hover:font-bold">About Us</a>
                    <a href="#kreate-ing" className="hover:font-bold">Kreate&apos;ing</a>
                    <a href="#why-kreate" className="hover:font-bold">Why kreate</a>
                    <a href="#contact" className="hover:font-bold">Contact</a>
                </div>
            </nav>
        </>
    );
}