"use client";

import { CornerLeftDownIcon, CornerRightUpIcon } from "lucide-react";

const videos = [
  {
    url: "https://delivery.copycopter.ai/lpexamples0823/one_compressed.mp4",
    title: "Save time with automation",
  },
  {
    url: "https://delivery.copycopter.ai/lpexamples0823/middle_compressed.mp4",
    title: "AI powered, unique video creation",
  },
  {
    url: "https://delivery.copycopter.ai/lpexamples0823/two_compressed.mp4",
    title: "No editing skills required",
  },
];

export default function VideoDisplay() {
  return (
    <div className="relative  flex items-center justify-center w-[1200px]  py-6 h-[400px] ">
      <div className="flex items-center justify-center w-fit ">
        {/* First Video */}
        <div className=" relative z-10 scale-75 sm:scale-90 lg:hover:scale-95 opacity-100 translate-x-24 sm:translate-x-14 -rotate-[25deg] transition-all duration-300 p-4 ease-in-out rounded-md">
          <video
            src={videos[0].url}
            className="max-h-[280px] max-w-[160px] object-cover rounded-md"
            loop
            autoPlay
            muted
          />
          <div className="absolute -top-6 left-6 gap-2  text-neutral-700 flex items-end justify-center ">
            <CornerLeftDownIcon className="h-6 w-6" />
            <h1 className="text-xs font-semibold max-w-24 ">
              {videos[0].title}
            </h1>
          </div>
        </div>

        {/* Second Video */}
        <div className="relative z-20 scale-90 sm:scale-105 lg:hover:scale-110 opacity-100 transition-all duration-300 p-4 ease-in-out rounded-md">
          <video
            src={videos[1].url}
            className="max-h-[280px] max-w-[160px] min-h-[280px] min-w-[160px] object-cover rounded-md"
            loop
            autoPlay
            muted
          />
          <div className="absolute -bottom-6 -left-6  gap-2 text-neutral-700 flex flex-row-reverse items-end justify-center">
            <CornerRightUpIcon className="h-6 w-6" />
            <h1 className="text-xs font-semibold max-w-40 ">
              {videos[1].title}
            </h1>
          </div>
        </div>

        {/* Third Video */}
        <div className="relative z-10 scale-75 sm:scale-90 lg:hover:scale-95 opacity-100 -translate-x-24 sm:-translate-x-14 rotate-[25deg] transition-all duration-300 p-4 ease-in-out rounded-md">
          <video
            src={videos[2].url}
            className="max-h-[280px] max-w-[160px] min-h-[280px] min-w-[160px] object-cover rounded-md"
            loop
            autoPlay
            muted
          />
          <div className="absolute -top-6 right-6 gap-2  text-neutral-700 items-end justify-center flex">
            <CornerLeftDownIcon className="h-6 w-6" />
            <h1 className="text-xs font-semibold max-w-24 ">
              {videos[2].title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
