import Examples from "./_components/Examples";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div className=" xl:w-[90%] flex flex-col items-center mx-auto p-6 overflow-hidden gap-10 ">
      <Hero />
      <Examples />
    </div>
  );
}
