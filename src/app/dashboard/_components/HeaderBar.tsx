import { Separator } from "@/components/ui/separator";

type HeaderBarProps = {
  title: string;
};

const HeaderBar = ({ title }: HeaderBarProps) => {
  return (
    <div className="w-full space-y-4">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-xl font-medium">{title}</h1>
      </div>
      <Separator className="w-full" />
    </div>
  );
};

export default HeaderBar;
