import { CircleCheckIcon } from "lucide-react";
import CTA from "./CTA";

type Step = {
  number: number;
  title: string;
  description: string;
  image?: string;
  checklist: string[];
};

const steps = [
  {
    number: 1,
    title: "Generate script with prompt",
    description:
      "Write a unique idea prompt and let the AI model generate a script.",
    checklist: [
      "Provide a link to artice , write a prompt or bring your own idea.",
      "A full video script will be generated for you.",
      "Works for any topic, from sports to travel, entertainment to health.",
    ],
    image:
      "https://copycopter.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstep1_v3.3bfbcc0a.jpg&w=1920&q=75",
  },
  {
    number: 2,
    title: "Customise the Video",
    description: "Make the video look and feel just the way you want.",
    checklist: [
      "Modify the Voice",
      "Change the background music",
      "Re-generate the AI images if you do not like them.",
    ],
    image:
      "https://copycopter.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstep21.ef6f3dc3.jpg&w=1080&q=75",
  },
  {
    number: 3,
    title: "Post that Content",
    description: "Video is ready. Show it to the public.",
    checklist: [
      "Post on Social Media with one click button.",
      "Download it locally without any watermark.",
      "Share the link with your friends.",
    ],
    image:
      "https://copycopter.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstep3.d045ed03.jpg&w=1920&q=75",
  },
];

const Working = () => {
  return (
    <div
      id="working"
      className="flex flex-col items-center justify-center w-full gap-20"
    >
      <div className="flex flex-col items-center justify-center w-full gap-4">
        <h1 className="text-3xl lg:text-4xl font-bold">
          Steps to create video:
        </h1>
        <p className="">
          Creating video with Quiki is as{" "}
          <span className="text-neutral-700 font-semibold">easy</span> as 3
          steps.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-20 lg:gap-40 ">
        {steps.map((step, index) => (
          <StepBox key={index} step={step} />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-4">
        <h1 className="font-bold text-2xl lg:text-2xl">Easy enough?</h1>
        <p className="text-sm">Make your own video with just 3 steps.</p>
        <CTA />
      </div>
    </div>
  );
};

const StepBox = ({ step }: { step: Step }) => {
  return (
    <section
      className={`flex flex-col ${step.number % 2 === 0 ? "justify-start" : "justify-end"} lg:flex-row gap-8 w-full xl:w-[80%]`}
    >
      <div className="flex items-start justify-start flex-col gap-2">
        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
          Step {step.number}
        </span>
        <h1 className="text-2xl lg:text-3xl text-neutral-700 font-bold">
          {step.title}
        </h1>
        <p className="font-light lg:text-lg">{step.description}</p>
        <div className="flex flex-col gap-2 w-full">
          {step.checklist?.map((item: string, index: number) => (
            <div
              className="flex flex-row items-center gap-2 w-full"
              key={index}
            >
              <CircleCheckIcon className="h-4 w-4 text-sky-700" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <img
          src={step.image}
          alt="step"
          className="sm:max-w-[500px]  mx-auto border rounded-md shadow"
        />
      </div>
    </section>
  );
};

export default Working;
