import React from "react";
import Image from "next/image";

const data = [
    {
      icon: '💡',
      title: 'Get your ideas out to the world',
      description: 'kreate is your go to spot to make sure your ideas can flourish and get the recognition it deserves.'
    },
    {
      icon: '🧠',
      title: 'Connect with like-minded people',
      description: 'kreate is the place that provides you to mingle around with people with the same motive as you, which is to build!'
    },
    {
      icon: '🛠️',
      title: 'Make building fun',
      description: 'kreate aims to ensure all kreators can enjoy the process of building by providing the right environment to learn and build together.'
    }
];

export default function WhyKreate(){
    return(
        <div className="flex flex-col justify-center text-2xl items-center py-[140px] bg-cover" 
            style ={
                { 
                    backgroundImage: `url(/question-marks.png)` 
                }
            }
        >
            <div className="flex items-center mb-6">
                <span>Why&nbsp;</span> 
                <Image src={"/logo.png"} width={161} height={66} alt="logo"/>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-y-4">
                {data.map((item, index) => (
                    <div key={index} className="text-white flex flex-col items-center text-center">
                    <span className="text-4xl mb-2">{item.icon}</span>
                    <span className="text-base linear-colour font-bold mb-2 min-h-[60px]">{item.title}</span>
                    <p className="text-center text-sm font-normal">{item.description}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}