"use client";

import { CornerLeftDownIcon, CornerRightUpIcon } from "lucide-react";

const videos = [
  {
    url: "https://delivery.copycopter.ai/lpusecases0823/car_review_comp.mp4",
  },
  {
    url: "https://delivery.copycopter.ai/lpusecases0823/car_review_comp.mp4",
  },
  {
    url: "https://delivery.copycopter.ai/lpusecases0823/car_review_comp.mp4",
  },
];

export default function VideoDisplay() {
  return (
    <div className="relative mt-10 flex items-center justify-center w-full mx-auto py-6 h-[380px] overflow-hidden ">
      <div className="flex items-center justify-center w-fit">
        {/* First Video */}
        <div className=" relative z-10 scale-90 hover:scale-95 opacity-100 translate-x-28 lg:translate-x-14 -rotate-[25deg] transition-all duration-300 p-4 ease-in-out rounded-md">
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
              Boost your SEO with videos
            </h1>
          </div>
        </div>

        {/* Second Video */}
        <div className="relative z-20 scale-105 hover:scale-110 opacity-100 transition-all duration-300 p-4 ease-in-out rounded-md">
          <video
            src={videos[1].url}
            className="max-h-[280px] max-w-[160px] object-cover rounded-md"
            loop
            autoPlay
            muted
          />
          <div className="absolute -bottom-6 -left-6  gap-2 text-neutral-700 flex flex-row-reverse items-end justify-center">
            <CornerRightUpIcon className="h-6 w-6" />
            <h1 className="text-xs font-semibold max-w-40 ">
              Engage your audience with next-gen content
            </h1>
          </div>
        </div>

        {/* Third Video */}
        <div className="relative z-10 scale-90 hover:scale-95 opacity-100 -translate-x-28 lg:-translate-x-14 rotate-[25deg] transition-all duration-300 p-4 ease-in-out rounded-md">
          <video
            src={videos[2].url}
            className="max-h-[280px] max-w-[160px] object-cover rounded-md"
            loop
            autoPlay
            muted
          />
          <div className="absolute -top-6 right-6 gap-2  text-neutral-700 items-end justify-center flex">
            <CornerLeftDownIcon className="h-6 w-6" />
            <h1 className="text-xs font-semibold max-w-24 ">
              Get traffic with faceless videos
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
