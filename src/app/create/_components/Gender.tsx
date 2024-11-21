"use client";

import { SelectButton } from "./SelectButton";

const genders = [
  { text: "MALE", emoji: "👨" },
  { text: "FEMALE", emoji: "👩" },
];

type GenderProps = {
  selectedGender: string;
  setSelectedGender: (gender: string) => void;
};

export default function Gender({
  selectedGender,
  setSelectedGender,
}: GenderProps) {
  return (
    <div className="flex flex-row flex-wrap items-center  gap-4 overflow-auto h-full ">
      {genders.map((gender, index) => (
        <SelectButton
          key={index}
          isSelected={selectedGender === gender.text}
          onSelect={() => setSelectedGender(gender.text)}
        >
          <span className="w-full flex flex-col gap-2 item-center justify-center ">
            <h1 className="text-base text-center font-semibold">
              {gender.text}
            </h1>
            <p className="text-xl">{gender.emoji}</p>
          </span>
        </SelectButton>
      ))}
    </div>
  );
}
