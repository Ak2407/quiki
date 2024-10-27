import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

const VideoHeader = () => {
  return (
    <div className="flex items-center justify-between border-b pb-4">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          Scary Stories
          <Pencil className="h-4 w-4" />
        </h1>
      </div>
      <div className="flex gap-2">
        <Button variant="destructive">Delete</Button>
      </div>
    </div>
  );
};

export default VideoHeader;
