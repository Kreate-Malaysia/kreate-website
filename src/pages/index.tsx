import Image from "next/image";
import WhyKreate from "../components/whykreate";
import Progress from "../components/progress";
import Footer from "@/components/layout/Footer";
import WhatKreate from "@/components/whatkreate";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between md:px-[70px]`}
    >
      <WhyKreate />
      <WhatKreate />
      <Progress />
      <Footer />
    </main>
  );
}
