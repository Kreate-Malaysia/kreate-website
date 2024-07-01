import Image from "next/image";
import WhyKreate from "../components/whykreate";
import Progress from "../components/progress";
import Footer from "@/components/layout/Footer";
import AboutUs from "@/components/aboutus";
import CommunityCarousel from "@/components/CommunityCarousel";
import Hero from "@/components/hero";

export default function Home() {
	return (
		<main className={`flex min-h-screen flex-col items-center justify-between md:px-[70px]`}>
			<section className='pt-[180px]'>
				<Hero />
			</section>
			<AboutUs />
			<WhyKreate />
			<CommunityCarousel />
			<Progress />
			<Footer />
		</main>
	);
}
