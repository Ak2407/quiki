import CTA from "./CTA";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import VideoShowcase from "./VideoShowcase";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 justify-between items-center w-full overflow-hidden ">
      <div className="flex flex-col  gap-4 lg:items-start items-center justify-start w-full">
        <Heading />
        <SubHeading />
        <CTA />
      </div>
      <VideoShowcase />
    </div>
  );
};

export default Hero;
