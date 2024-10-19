import { CircleCheckIcon } from "lucide-react";

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
      <div className="flex flex-col items-center justify-center w-full gap-6">
        <section className="flex flex-col lg:flex-row gap-8 lg:gap-20 ">
          <div className="flex items-start justify-start flex-col gap-2">
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              Step 1
            </span>
            <h1 className="text-2xl lg:text-3xl text-neutral-700 font-bold">
              Generate script with prompt
            </h1>
            <p className="font-light lg:text-lg">
              Write a{" "}
              <span className="text-neutral-700 font-bold">unique idea</span>{" "}
              prompt and let the AI model generate a script.
            </p>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-row items-center gap-2 w-full">
                <CircleCheckIcon className="h-4 w-4 text-sky-700" />
                <p>
                  Provide a link to artice , write a prompt or bring your own
                  idea.
                </p>
              </div>
              <div className="flex flex-row items-center gap-2 w-full">
                <CircleCheckIcon className="h-4 w-4 text-sky-700" />
                <p>A full video script will be generated for you.</p>
              </div>
              <div className="flex flex-row items-center gap-2 w-full">
                <CircleCheckIcon className="h-4 w-4 text-sky-700" />
                <p>
                  Works for any topic, from sports to travel, entertainment to
                  health.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[500px] h-[200px] bg-sky-700 rounded-md"></div>
        </section>
      </div>
    </div>
  );
};

export default Working;
