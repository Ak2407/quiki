"use client";

import { SelectButton } from "./SelectButton";
import { CirclePlayIcon } from "lucide-react";

const durations = [{ text: "45 to 60 seconds" }, { text: "60 to 90 seconds" }];

type DurationProps = {
  selectedDuration: string;
  setSelectedDuration: (duration: string) => void;
};

export default function Duration({
  selectedDuration,
  setSelectedDuration,
}: DurationProps) {
  return (
    <div className="flex flex-row flex-wrap items-center  lg:grid-cols-5 gap-4 overflow-auto h-full ">
      {durations.map((duration, index) => (
        <SelectButton
          key={index}
          isSelected={selectedDuration === duration.text}
          onSelect={() => setSelectedDuration(duration.text)}
        >
          <span className="w-full flex flex-col gap-2 item-center justify-center ">
            <div className="flex items-center justify-center w-full">
              <CirclePlayIcon
                className="h-10 w-10 text-white "
                fill="#0369a1"
              />
            </div>
            <h1 className="text-base text-center font-semibold">
              {duration.text}
            </h1>
          </span>
        </SelectButton>
      ))}
    </div>
  );
}
