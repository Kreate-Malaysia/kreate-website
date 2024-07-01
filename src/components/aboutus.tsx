import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function AboutUs() {
	const ref = useRef<HTMLDivElement | null>(null);

	const [inView, setInView] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setInView(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.7 }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (observer) {
				observer.disconnect();
			}
		};
	}, []);

	return (
		//     <div ref={ref} className={inView ? 'in-view' : ''}>
		//     {/* Your content here */}
		//     <h1 className='text-3xl'>{inView ? 'Element is in view' : 'Element is not in view'}</h1>
		//   </div>
		<div
			ref={ref}
			id='about-kreate'
			className='flex flex-col justify-center items-center text-center py-[100px] max-w-[1200px] h-[800px] about-kreate'
		>
			<div
				className={`transition-transform duration-1000 text-2xl  
                ${
									inView
										? "translate-x-[10vw] md:translate-x-[19vw] lg:translate-x-[25vw] translate-y-[384px] lg:translate-y-[500px] lg:text-2xl text-sm font-bold"
										: ""
								}`}
			>
				<span className={`${inView ? "lg:text-base text-xs lg:font-medium font-normal" : ""}`}>
					If you are&nbsp;
				</span>
				<div className='inline text-lg lg:text-3xl'>
					<span
						className={`linear-colour  ${
							inView ? "lg:text-2xl text-sm lg:font-bold font-normal" : ""
						}`}
					>
						Wonde
					</span>
					<span className={`${inView ? "lg:text-2xl text-sm lg:font-bold font-normal" : ""}`}>
						💍
					</span>
				</div>
				<span className={`${inView ? "lg:text-base text-xs  lg:font-medium font-normal" : ""}`}>
					what is kreate...
				</span>
			</div>
			<div
				className={`transition-opacity duration-800 flex flex-col items-center max-w-[840px] ${
					inView ? "opacity-100" : "opacity-0"
				}`}
			>
				<Image src={"/logo.png"} width={315} height={124} alt='logo' />
				<div className='inline'>
					<span className='lg:text-xl text-sm font-normal'>is a place where 🫵🏻 can give </span>
					<span className='lg:text-2xl text-base' style={{ color: `var(--Beige, #E2C196)` }}>
						honest feedback,
					</span>
					<span className='lg:text-2xl text-base' style={{ color: `var(--Beige-green, #A5BE6D)` }}>
						support each other&nbsp;
					</span>
					<span className='lg:text-xl text-sm font-normal'>
						regardless of our backgrounds, and{" "}
					</span>
					<span className='lg:text-2xl text-base' style={{ color: `var(--Green, #69BB44)` }}>
						build something of our own together{" "}
					</span>
				</div>
			</div>
		</div>
	);
}
