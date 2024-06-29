import Image from "next/image";
import WhyKreate from "./whykreate";
import Progress from "./progress";
import Footer from "@/components/layout/Footer";


export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between px-[70px]`}
    >
      <WhyKreate/>
      <div className="py-[200px] text-center text-2xl ">
        What we&lsquo;re kreating
      </div>
      <Progress/>
      <Footer/>
    </main>
  );
}
