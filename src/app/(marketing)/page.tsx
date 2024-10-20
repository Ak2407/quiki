import Examples from "./_components/Examples";
import FAQ from "./_components/FAQ";
import Features from "./_components/Features";
import Hero from "./_components/Hero";
import Pricing from "./_components/pricing";
import Working from "./_components/Working";

export default function Home() {
  return (
    <div className="w-full  flex flex-col items-center mx-auto  overflow-hidden gap-20 py-10 ">
      <Hero />
      <Examples />
      <Working />
      <Features />
      <FAQ />
      <Pricing />
    </div>
  );
}
