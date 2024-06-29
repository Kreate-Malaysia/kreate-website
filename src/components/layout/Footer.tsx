import React from "react";
import Image from "next/image";

const data = [
    {
        imgSrc: "/instagram.png",
        alt: "Instagram",
        link: "@start.kreate"
    },
    {
        imgSrc: "/linkedin.png",
        alt: "LinkedIn",
        link: "startkreate"
    },
    {
        imgSrc: "/gmail.png",
        alt: "Gmail",
        link: "dmkreate@gmail.com"
    }
]
export default function Footer(){
    return(
        <div className="flex flex-col justify-center items-center pt-[100px] ">
            <span className="text-2xl text-center mb-10">Not your typical 🦶er  </span>
            <div className="flex sm:flex-row flex-col gap-x-10 mb-[100px] ">
                {data.map((item, index) => (
                    <div className="flex items-center">
                        <Image src={item.imgSrc} width={24} height={24} alt={item.alt} className="h-6"/>
                        <span className="ml-2 text-base">{item.link}</span>
                    </div>
                ))}
            </div>

            <span>© 2024 Kreate????</span>
            <span className="text-[12px] font-medium mb-10">All Rights Reserved.</span>

        </div>

    )
}