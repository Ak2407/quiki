const Topic = () => {
  return (
    <div className="flex flex-row flex-wrap items-center lg:grid grid-cols-5 gap-4 overflow-auto h-full">
      <SelectButton text="Scary Stories" emoji="😱" />
      <SelectButton text="Motivational" emoji="💪" />
      <SelectButton text="Educational" emoji="📚" />
      <SelectButton text="Bedtime Stories" emoji="😴" />
      <SelectButton text="Love Stories" emoji="💞" />
      <SelectButton text="Interesting History" emoji="📜" />
      <SelectButton text="Fun Facts" emoji="🤔" />
      <SelectButton text="Mystery" emoji="🕵️‍♂️" />
      <SelectButton text="Life Pro Tips" emoji="💡" />
      <SelectButton text="Long Form Jokes" emoji="😂" />
      <SelectButton text="Travel Stories" emoji="✈️" />
      <SelectButton text="Philosophy" emoji="🤔" />
      <SelectButton text="Science Fiction" emoji="👽" />
      <SelectButton text="Custom" emoji="✍️" />
    </div>
  );
};

const SelectButton = ({ text, emoji }: { text: string; emoji: string }) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center p-5 lg:w-40 w-full h-40 bg-gray-50 border rounded-lg cursor-pointer hover:bg-gray-100 transition-all ease-in-out duration-200 text-center ">
      <h1 className="font-semibold">{text}</h1>
      <p className="text-4xl">{emoji}</p>
    </div>
  );
};

export default Topic;
