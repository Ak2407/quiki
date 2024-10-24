"use client";

import { useState } from "react";
import { SelectButton } from "./SelectButton";

const topics = [
  { text: "Scary Stories", emoji: "😱" },
  { text: "Motivational", emoji: "💪" },
  { text: "Educational", emoji: "📚" },
  { text: "Bedtime Stories", emoji: "😴" },
  { text: "Love Stories", emoji: "💞" },
  { text: "Interesting History", emoji: "📜" },
  { text: "Fun Facts", emoji: "🤔" },
  { text: "Mystery", emoji: "🕵️‍♂️" },
  { text: "Life Pro Tips", emoji: "💡" },
  { text: "Long Form Jokes", emoji: "😂" },
  { text: "Travel Stories", emoji: "✈️" },
  { text: "Philosophy", emoji: "🤔" },
  { text: "Science Fiction", emoji: "👽" },
  { text: "Custom", emoji: "✍️" },
];

export default function Topic() {
  const [selectedTopic, setSelectedTopic] = useState<string>("");

  return (
    <div className="flex flex-row flex-wrap items-center lg:grid grid-cols-5 gap-4 overflow-auto h-full">
      {topics.map((topic, index) => (
        <SelectButton
          key={index}
          text={topic.text}
          emoji={topic.emoji}
          isSelected={selectedTopic === topic.text}
          onSelect={() => setSelectedTopic(topic.text)}
        />
      ))}
    </div>
  );
}
