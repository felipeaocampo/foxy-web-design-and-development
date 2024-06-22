import AboutSection from "@/components/about/about-section";
import HeroSection from "@/components/hero/hero-section";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <meta title="Foxy Web Design and Development." />
        <meta
          name="google-site-verification"
          content="E_GvExkF0nliy7t9q1brFerYrXNoVYbI5O7-K9WzC4o"
        />
      </Head>
      <HeroSection />
      <AboutSection />
    </>
  );
}
