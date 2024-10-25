"use client";

import { useState } from "react";
import { SelectButton } from "./SelectButton";
import { CirclePlayIcon } from "lucide-react";

const voices = [
  { text: "Echo" },
  { text: "Alloy" },
  { text: "Onyx" },
  { text: "Fable" },
  { text: "Nova" },
  { text: "Shimmer" },
];

export default function Voice() {
  const [selectedVoice, setSelectedVoice] = useState<string>("");

  return (
    <div className="flex flex-row flex-wrap items-center lg:grid grid-cols-5 gap-4 overflow-auto h-full">
      {voices.map((voice, index) => (
        <SelectButton
          key={index}
          isSelected={selectedVoice === voice.text}
          onSelect={() => setSelectedVoice(voice.text)}
        >
          <span className="w-full flex flex-col gap-2 item-center justify-center ">
            <button className="flex items-center justify-center w-full">
              <CirclePlayIcon
                className="h-10 w-10 text-white "
                fill="#0369a1"
              />
            </button>
            <h1 className="text-base text-center font-semibold">
              {voice.text}
            </h1>
          </span>
        </SelectButton>
      ))}
    </div>
  );
}
