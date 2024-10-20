import Examples from "./_components/Examples";
import Features from "./_components/Features";
import Hero from "./_components/Hero";
import Working from "./_components/Working";

export default function Home() {
  return (
    <div className=" xl:w-[90%] flex flex-col items-center mx-auto p-6 overflow-hidden gap-20 ">
      <Hero />
      <Examples />
      <Working />
      <Features />
    </div>
  );
}
