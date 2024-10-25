import { CheckIcon } from "lucide-react";

export const SelectButton = ({
  children,
  isSelected,
  onSelect,
}: {
  children: React.ReactNode;
  isSelected: boolean;
  onSelect: () => void;
}) => {
  return (
    <button
      onClick={onSelect}
      className={` relative flex flex-col gap-2 items-center p-4 justify-center lg:w-40 w-full h-40 ${
        isSelected
          ? "bg-sky-200 border-sky-400 hover:bg-sky-200 shadow-lg"
          : "hover:bg-gray-100"
      } border rounded-lg cursor-pointer transition-all ease-in-out duration-200 text-center`}
    >
      {children}

      <div
        className={`absolute top-2 left-2 rounded-full h-6 w-6 bg-sky-700 flex items-center justify-center ${
          isSelected ? "" : "hidden"
        }`}
      >
        <CheckIcon className="h-4 w-4 text-white" />
      </div>
    </button>
  );
};
