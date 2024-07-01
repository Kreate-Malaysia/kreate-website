import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import type { AppProps } from "next/app";
import { Manrope } from "next/font/google";
const manrope = Manrope({subsets: ['latin']})

export default function App({ Component, pageProps }: AppProps) {
  return (
  <main className={manrope.className}>
      <Navbar />
      <Component {...pageProps} />;
  </main>

  )

}
