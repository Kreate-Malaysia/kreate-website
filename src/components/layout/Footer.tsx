import React from "react";
import Image from "next/image";

const data = [
	{
		imgSrc: "/instagram.svg",
		alt: "Instagram",
		link: "@start.kreate",
	},
	{
		imgSrc: "/linkedin.svg",
		alt: "LinkedIn",
		link: "startkreate",
	},
	{
		imgSrc: "/gmail.svg",
		alt: "Gmail",
		link: "dmkreate@gmail.com",
	},
];
export default function Footer() {
	return (
		<div className='flex flex-col justify-center items-center pt-[100px] '>
			<span className='lg:text-2xl text-base font-bold text-center mb-10'>
				Not your typical&nbsp;
				<div>
					<Image
						src={"/footer-icon.svg"}
						width={52}
						height={52}
						alt='Footer icon'
						className='inline w-min max-h-52'
					/>{" "}
					er
				</div>
			</span>
			<div className='flex sm:flex-row flex-col gap-x-10 mb-[100px] '>
				{data.map((item, index) => (
					<div key={index} className='flex items-center mb-4'>
						<Image
							src={item.imgSrc}
							width={24}
							height={24}
							alt={item.alt}
							key={index}
							className='h-6'
						/>
						<span className='ml-2 lg:text-base text-xs'>{item.link}</span>
					</div>
				))}
			</div>

			<span>© 2024 Kreate????</span>
			<span className='text-[12px] font-medium mb-10'>All Rights Reserved.</span>
		</div>
	);
}
