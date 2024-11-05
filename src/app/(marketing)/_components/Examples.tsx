"use client";

import { Card } from "@/components/ui/card";
import CTA from "./CTA";

const videos = [
  {
    url: "https://delivery.copycopter.ai/lpusecases0823/car_review_comp.mp4",
    title: "Car Review",
  },
  {
    url: "https://delivery.copycopter.ai/lpusecases0823/conspiracy_comp.mp4",
    title: "Conspiracy Theory",
  },

  {
    url: "https://delivery.copycopter.ai/lpusecases0823/product_comp.mp4",
    title: "Product Review",
  },
  {
    url: "https://delivery.copycopter.ai/lpusecases0823/meditation_comp.mp4",
    title: "Meditation",
  },
  {
    url: "https://delivery.copycopter.ai/lpusecases0823/car_review_comp.mp4",
    title: "Car Review",
  },
  {
    url: "https://delivery.copycopter.ai/lpusecases0823/conspiracy_comp.mp4",
    title: "Conspiracy Theory",
  },

  {
    url: "https://delivery.copycopter.ai/lpusecases0823/product_comp.mp4",
    title: "Product Review",
  },
  {
    url: "https://delivery.copycopter.ai/lpusecases0823/meditation_comp.mp4",
    title: "Meditation",
  },

  {
    url: "https://delivery.copycopter.ai/lpusecases0823/car_review_comp.mp4",
    title: "Car Review",
  },
  {
    url: "https://delivery.copycopter.ai/lpusecases0823/conspiracy_comp.mp4",
    title: "Conspiracy Theory",
  },

  {
    url: "https://delivery.copycopter.ai/lpusecases0823/product_comp.mp4",
    title: "Product Review",
  },
  {
    url: "https://delivery.copycopter.ai/lpusecases0823/meditation_comp.mp4",
    title: "Meditation",
  },
  {
    url: "https://delivery.copycopter.ai/lpusecases0823/car_review_comp.mp4",
    title: "Car Review",
  },
  {
    url: "https://delivery.copycopter.ai/lpusecases0823/conspiracy_comp.mp4",
    title: "Conspiracy Theory",
  },

  {
    url: "https://delivery.copycopter.ai/lpusecases0823/product_comp.mp4",
    title: "Product Review",
  },
  {
    url: "https://delivery.copycopter.ai/lpusecases0823/meditation_comp.mp4",
    title: "Meditation",
  },
];

export default function Examples() {
  return (
    <div
      id="examples"
      className="relative flex gap-20 items-center justify-center flex-col overflow-x-hidden inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
    >
      <div className="container mx-auto p-4 max-w-7xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Examples</h1>
          <p className="text-sm sm:text-xl text-neutral-500">
            Here are some <span className="text-neutral-800">use cases</span> of
            what you can create with Quiki.
          </p>
        </div>
        <div className="flex flex-row gap-6 items-center justify-center animate-marquee whitespace-nowrap">
          {videos.map((video, index) => (
            <div key={index}>
              <Card className="w-fit p-2 flex flex-col items-center justify-center gap-2 rounded-none  ">
                <video
                  muted
                  loop
                  src={video.url}
                  className="aspect-[9/16] max-h-[250px] sm:max-h-[300px] max-w-[300px] "
                />
                <p className="text-xs lg:text-lg font-semibold ">
                  {video.title}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center w-full">
        <h1 className="text-2xl font-bold">Like the examples?</h1>
        <p className="text-sm">
          Create yours now for free, no credit card required.
        </p>
        <CTA />
      </div>
    </div>
  );
}
