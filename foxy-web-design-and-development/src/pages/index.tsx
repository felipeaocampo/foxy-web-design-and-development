import AboutSection from "@/components/about/about-section";
import HeroSection from "@/components/hero/hero-section";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  );
}
