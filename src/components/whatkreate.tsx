import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

interface CarouselItem {
  image: string;
  name: string;
  description: string;
}

const carouselData = [
  {
    image: "/characters/Johnson.svg",
    name: "Johnson",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    image: "/characters/JunShen.svg",
    name: "Jun Shen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    image: "/characters/SiewWin.svg",
    name: "Siew Win",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    image: "/characters/SeanHoe.svg",
    name: "Sean Hoe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    image: "/characters/WeiHup.svg",
    name: "Wei Hup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    image: "/characters/JunIan.svg",
    name: "Jun Ian",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    image: "/characters/Elise.svg",
    name: "Elise",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
];

export default function WhatKreate() {
  const listRef = useRef<HTMLUListElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (list) {
      const itemWidth =
        list.firstChild instanceof HTMLElement
          ? list.firstChild.offsetWidth
          : 0;
      list.scrollTo({ left: currentIndex * itemWidth, behavior: "smooth" });
    }
  }, [currentIndex]);

  const scrollLeft = () => {
    const numItems = carouselData.length;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + numItems) % numItems);
  };

  const scrollRight = () => {
    const numItems = carouselData.length;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numItems);
  };

  const hideScrollbarStyle: React.CSSProperties = {
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  };

  return (
    <>
      <div className="flex flex-col gap-4 justify-center text-center w-screen ">
        <div className="pt-12 text-center text-base font-bold md:text-xl lg:text-2xl">
          What we&rsquo;re &lsquo;kreate&rsquo; ing
        </div>
        <div className="text-sm font-bold lg:text-lg">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E2C196] to-[#B5BF78]">
            Consistency
          </span>
          &nbsp;is the Key to&nbsp;
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#87BC58] to-[#69BB44]">
            Success
          </span>
        </div>
        <div className="pt-9 relative">
          <ul
            className="flex gap-2 overflow-x-scroll snap-x snap-mandatory lg:gap-6"
            style={hideScrollbarStyle}
          >
            {[
              ...carouselData.slice(-1),
              ...carouselData,
              ...carouselData.slice(0, 1),
            ].map((data, index) => (
              <li
                key={index}
                className="flex flex-col w-40 h-72 border border-white snap-center snap-always lg:w-[260px] lg:h-[430px] flex-shrink-0"
              >
                <div className="bg-white w-40 h-40 relative lg:w-[260px] lg:h-[260px]">
                  <Image src={data.image} alt={data.name} fill />
                </div>
                <div className="flex flex-col gap-1 p-2 lg:p-3 lg:gap-3">
                  <div className="text-white text-[14px] font-semibold text-left lg:text-base ">
                    {data.name}
                  </div>
                  <div className="text-white text-xs font-semibold text-justify lg:text-[18px] lg:font-normal lg:leading-6">
                    {data.description}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div>
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r to-transparent from-[#131313] pointer-events-none" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l to-transparent from-[#131313] pointer-events-none" />
          </div>
          <div
            className="absolute top-[50%] left-0 -translate-y-[50%] cursor-pointer"
            onClick={scrollLeft}
          >
            <IoIosArrowBack className="text-2xl text-white" />
          </div>
          <div
            className="absolute top-[50%] right-0 -translate-y-[50%] cursor-pointer"
            onTouchMove={scrollRight}
          >
            <IoIosArrowForward className="text-2xl text-white" />
          </div>
        </div>
      </div>
    </>
  );
}
