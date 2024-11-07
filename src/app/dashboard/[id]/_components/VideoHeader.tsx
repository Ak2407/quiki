"use client";

import DeleteVideoBtn from "./DeleteVideoBtn";
import { ChevronLeftIcon, LoaderIcon } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const VideoHeader = () => {
  const router = useRouter();
  const handleBack = () => {
    setLoading(true);
    router.push("/dashboard/library");
  };
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-between border-b pb-4">
      <div className="flex items-center gap-4">
        <button onClick={handleBack} disabled={loading}>
          {loading ? (
            <LoaderIcon className="h-5 w-5 animate-spin" />
          ) : (
            <div className="flex items-center gap-2 text-base hover:text-gray-800 group">
              <ChevronLeftIcon className="h-5 w-5 group-hover:-translate-x-1 transition-all duration-300 ease-in-out" />
              <span className="">Back to Library</span>
            </div>
          )}
        </button>
      </div>
      <div className="flex gap-2">
        <DeleteVideoBtn />
      </div>
    </div>
  );
};

export default VideoHeader;
