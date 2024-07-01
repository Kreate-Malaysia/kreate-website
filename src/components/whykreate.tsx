import React, {useState} from "react";
import Image from "next/image";

const data = [
    {
      iconPath: '☁️',
      title: 'Get your ideas out to the world',
      description: 'kreate is your go to spot to make sure your ideas can flourish and get the recognition it deserves.'
    },
    {
      iconPath: '🧠',
      title: 'Connect with like-minded people',
      description: 'kreate is the place that provides you to mingle around with people with the same motive as you, which is to build!'
    },
    {
      iconPath: '🛠️',
      title: 'Make building fun',
      description: 'kreate aims to ensure all kreators can enjoy the process of building by providing the right environment to learn and build together.'
    }
];

export default function WhyKreate(){

    const [clickedIndex, setClickedIndex] = useState<boolean[]>(Array(data.length).fill(false));

    const handleClick = (index: number) => {
      setClickedIndex((prevStates) => {
        const newStates = [...prevStates];
        newStates[index] = !newStates[index];
        return newStates;
      });
    };

    return( 
        <div className="flex flex-col justify-center lg:text-2xl text-base items-center py-[140px] bg-cover" 
            style ={
                { 
                    backgroundImage: `url(/question-marks.svg)` 
                }
            }
        >
            <div className="flex items-center justify-center font-bold text-center mb-6 gap-x-2">
                <span className="flex items-center">
                    Why&nbsp;
                    <Image src="/logo.png" width={161} height={66} alt="logo" className="w-auto h-[38px] lg:h-[66px] max-w-full"/>
                    ?
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4">                                                                  
                {data.map((item, index) => (
                    <div 
                    key={index} 
                    className="text-white flex flex-col items-center text-center rounded-lg px-6 gap-4 justify-center bg-[#252525] w-[388px] max-w-full max-h-full lg:w-[488px] h-[304px]  relative cursor-pointer"
                    onClick={() => handleClick(index)}
                >
                    <span className={`p-10 transition-opacity duration-400 absolute mb-20 ${clickedIndex[index] && "absolute fadeaway"}`}>{item.iconPath}</span>
                    <span className={`w-11/12 lg:text-base text-sm linear-colour font-bold lg:mt-20 md:mt-16  mt-24 max-w-full min-h-[60px] transform transition-transform duration-400 ${clickedIndex[index] ? 'absolute lg:-translate-y-24 -translate-y-20' : 'translate-y-0'}`}>
                        {item.title}
                    </span>
                    <p className={`text-center lg:text-sm text-xs lg:font-normal w-11/12 mt-4 ${clickedIndex[index] ? "fadein absolute lg:mt-28 md:mt-20 mt-28 w-full" : "opacity-0 hidden"}`}>
                        {item.description}
                    </p>
                </div>
                

                ))}
            </div>

        </div>
    )
}