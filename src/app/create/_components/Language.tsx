"use client";

import { SelectButton } from "./SelectButton";

const languages = [
  { text: "English", emoji: "🇺🇸" },
  { text: "Czech", emoji: "🇨🇿" },
  { text: "Danish", emoji: "🇩🇰" },
  { text: "Dutch", emoji: "🇳🇱" },
  { text: "French", emoji: "🇫🇷" },
  { text: "German", emoji: "🇩🇪" },
  { text: "Greek", emoji: "🇬🇷" },
  { text: "Hindi", emoji: "🇮🇳" },
  { text: "Indonesian", emoji: "🇮🇩" },
  { text: "Italian", emoji: "🇮🇹" },
  { text: "Japanese", emoji: "🇯🇵" },
  { text: "Norwegian", emoji: "🇳🇴" },
  { text: "Polish", emoji: "🇵🇱" },
  { text: "Portuguese", emoji: "🇵🇹" },
  { text: "Russian", emoji: "🇷🇺" },
  { text: "Spanish", emoji: "🇪🇸" },
  { text: "Swedish", emoji: "🇸🇪" },
  { text: "Turkish", emoji: "🇹🇷" },
  { text: "Ukrainian", emoji: "🇺🇦" },
];

type LanguageProps = {
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
};

export default function Language({
  selectedLanguage,
  setSelectedLanguage,
}: LanguageProps) {
  return (
    <div className="flex flex-row flex-wrap items-center lg:grid grid-cols-5 gap-4 overflow-auto h-full">
      {languages.map((lang, index) => (
        <SelectButton
          key={index}
          isSelected={selectedLanguage === lang.text}
          onSelect={() => setSelectedLanguage(lang.text)}
        >
          <span className="w-full flex flex-col gap-2 itec-center justify-center ">
            <h1 className="text-base text-center font-semibold">{lang.text}</h1>
            <p className="text-xl">{lang.emoji}</p>
          </span>
        </SelectButton>
      ))}
    </div>
  );
}
