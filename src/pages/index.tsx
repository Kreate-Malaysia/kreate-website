import Image from "next/image";
import WhyKreate from "../components/whykreate";
import Progress from "../components/progress";
import Footer from "@/components/layout/Footer";
import AboutUs from "@/components/aboutus";
import CommunityCarousel from "@/components/CommunityCarousel";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between md:px-[70px]`}
    >
      <WhyKreate />
      <CommunityCarousel />
      <Progress />
      <AboutUs />

      <Footer />
    </main>
  );
}
