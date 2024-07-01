import Image from "next/image";
import WhyKreate from "../components/whykreate";
import Progress from "../components/progress";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/hero";

export default function Home() {
	return (
		<main className={`flex min-h-screen flex-col items-center justify-between px-[70px]`}>
			<section className='pt-[180px]'>
				<Hero />
			</section>
			<WhyKreate />
			<div className='py-[200px] text-center text-2xl '>What we&lsquo;re kreating</div>
			<Progress />
			<Footer />
		</main>
	);
}
