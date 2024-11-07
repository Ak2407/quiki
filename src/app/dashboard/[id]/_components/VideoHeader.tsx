import Link from "next/link";
import DeleteVideoBtn from "./DeleteVideoBtn";
import { ChevronLeftIcon } from "lucide-react";

const VideoHeader = () => {
  return (
    <div className="flex items-center justify-between border-b pb-4">
      <div className="flex items-center gap-4">
        <Link
          href="/dashboard/library"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-700"
        >
          <ChevronLeftIcon className="h-5 w-5 " />
          <span className="">Back to Library</span>
        </Link>
      </div>
      <div className="flex gap-2">
        <DeleteVideoBtn />
      </div>
    </div>
  );
};

export default VideoHeader;
