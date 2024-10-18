import CTA from "./_components/CTA";
import Heading from "./_components/Heading";
import SubHeading from "./_components/SubHeading";
import VideoShowcase from "./_components/VideoShowcase";

export default function Home() {
  return (
    <div className=" xl:w-[90%] flex flex-col lg:flex-row items-center justify-between mx-auto p-6 overflow-hidden ">
      <div className="flex flex-col gap-6 lg:items-start items-center justify-start w-full">
        <Heading />
        <SubHeading />
        <CTA />
      </div>
      <VideoShowcase />
    </div>
  );
}
