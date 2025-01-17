import Image from "next/image";
import React from "react";
import { teamData } from "@/data/teamData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface CarouselItem {
  image: string;
  name: string;
  description: string;
}

export default function CommunityCarousel() {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center text-center w-[99%] ">
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
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              React.useRef(Autoplay({ delay: 1800, stopOnInteraction: true }))
                .current,
            ]}
            onMouseEnter={
              React.useRef(Autoplay({ delay: 1800, stopOnInteraction: true }))
                .current.stop
            }
            onMouseLeave={
              React.useRef(Autoplay({ delay: 1800, stopOnInteraction: true }))
                .current.reset
            }
          >
            <CarouselContent className="">
              {teamData.map((data, index) => (
                <CarouselItem
                  key={index}
                  className="lg:basis-[280px] basis-[200px] md:pl-4"
                  //   className="w-40 h-72 ] md:basis-[144px] lg:basis-[260px] border border-white transition-all"
                >
                  <div className="border border-white w-40 h-72 lg:w-[260px] lg:h-[430px] md:w-36">
                    <div className="bg-white w-40 h-40 relative lg:w-[260px] lg:h-[260px] md:w-36 md:h-36 ">
                      <Image src={data.image} alt={data.name} fill />
                    </div>
                    <div className="flex flex-col gap-1 p-2 lg:p-3 lg:gap-3">
                      <div className="text-white text-[14px] font-semibold text-left lg:text-base">
                        {data.name}
                      </div>
                      <div className="text-white text-xs font-semibold text-justify lg:text-[18px] lg:font-normal lg:leading-6">
                        {data.description}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div>
              <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r to-transparent from-[#131313] pointer-events-none" />
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l to-transparent from-[#131313] pointer-events-none" />
            </div>
            <CarouselPrevious variant={"link"} />
            <CarouselNext variant={"link"} />
          </Carousel>
        </div>
      </div>
    </>
  );
}
