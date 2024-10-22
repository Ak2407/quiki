import { Button } from "@/components/ui/button";

const BottomBar = () => {
  return (
    <div className="w-full h-24 px-4 bg-gray-50 border-t flex items-center justify-center gap-2">
      <Button variant="outline" className="w-full lg:w-fit">
        Back
      </Button>
      <Button variant="primary" className="w-full lg:w-fit">
        Next
      </Button>
    </div>
  );
};

export default BottomBar;
