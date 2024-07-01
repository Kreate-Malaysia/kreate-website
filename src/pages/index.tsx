import Image from "next/image";
import WhyKreate from "../components/whykreate";
import Progress from "../components/progress";
import Footer from "@/components/layout/Footer";
import AboutUs from "@/components/aboutus";

export default function Home() {
	return (
		<main className={`flex min-h-screen flex-col items-center justify-between lg:px-[70px] px-4`}>
     		<AboutUs/>
			<WhyKreate />
			<div className='py-[200px] text-center text-2xl '>What we&lsquo;re kreating</div>
			<Progress />
			<Footer />
		</main>
	);
}
