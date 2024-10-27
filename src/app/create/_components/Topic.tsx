"use client";

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

type TopicProps = {
  selectedTopic: string;
  setSelectedTopic: (topic: string) => void;
};

export default function Topic({ selectedTopic, setSelectedTopic }: TopicProps) {
  return (
    <div className="flex flex-row flex-wrap items-center lg:grid grid-cols-5 gap-4 overflow-auto h-full">
      {topics.map((topic, index) => (
        <SelectButton
          key={index}
          isSelected={selectedTopic === topic.text}
          onSelect={() => setSelectedTopic(topic.text)}
        >
          <span className="w-full flex flex-col gap-2 item-center justify-center ">
            <h1 className="text-base text-center font-semibold">
              {topic.text}
            </h1>
            <p className="text-xl">{topic.emoji}</p>
          </span>
        </SelectButton>
      ))}
    </div>
  );
}
