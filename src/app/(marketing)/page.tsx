import Header from "./_components/Header";
import VideoShowcase from "./_components/VideoShowcase";

export default function Home() {
  return (
    <div className="w-[95%] flex flex-col lg:flex-row items-center justify-between mx-auto py-6  ">
      <Header />
      <VideoShowcase />
    </div>
  );
}
