import React from "react";
import Image from "next/image";


export default function Progress(){
    return(
        <div className="flex flex-col justify-center items-center py-[200px] max-w-[800px]">   
            <span className="lg:text-2xl text-base font-bold text-center flex">
			🚧 Progress map WIP 🚧
            </span>
            <div className="text-center text-white lg:text-lg text-xs font-normal mt-6">
                How about following our 
                <span className="linear-colour lg:text-xl text-sm">&nbsp;INstaGRAM&nbsp;</span>
                <span className="">
                    to get further updates on this? 
                    <Image src={'/smiley-icon.svg'} width={40} height={40} alt="Smiley icon" className="inline"/>
                </span>
            </div>
        </div>

    )
}