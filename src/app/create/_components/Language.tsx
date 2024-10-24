"use client";

import { useState } from "react";
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

export default function Language() {
  const [selectedLang, setSelectedLang] = useState<string>("");

  return (
    <div className="flex flex-row flex-wrap items-center lg:grid grid-cols-5 gap-4 overflow-auto h-full">
      {languages.map((lang, index) => (
        <SelectButton
          key={index}
          text={lang.text}
          emoji={lang.emoji}
          isSelected={selectedLang === lang.text}
          onSelect={() => setSelectedLang(lang.text)}
        />
      ))}
    </div>
  );
}
