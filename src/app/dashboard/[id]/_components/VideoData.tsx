"use client";

import { useEffect, useState } from "react";
import { getVideo } from "@/actions/get-video";
import { Skeleton } from "@/components/ui/skeleton";
import { useParams } from "next/navigation";
import VideoCard from "./VideoCard";
import { toast } from "sonner";

export default function VideoData() {
  const params = useParams();
  const { id } = params;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [script, setScript] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    const fetchVideo = async () => {
      const video = await getVideo(id.toString());
      const joinedScript = video.script
        .map((item) => item.contentText)
        .join(". ");
      setScript(joinedScript);
      setTitle(video.title);
      setIsLoading(false);
    };
    fetchVideo();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-10 mx-auto px-4 py-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Skeleton className="h-[400px] mx-auto w-60" />
            <Skeleton className="h-[40px] mx-auto w-60" />
          </div>
          <div className="space-y-6">
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-20 w-full" />

            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-60 w-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <VideoCard vidId={id.toString()} />

      <div className="space-y-6">
        <CopyTextBox label="Title" text={title} />
        <CopyTextBox label="Script" text={script} />
      </div>
    </div>
  );
}

const CopyTextBox = ({ text, label }: { text: string; label: string }) => {
  const handleCopy = () => {
    toast.success("Copied to clipboard");

    navigator.clipboard.writeText(text);
  };

  return (
    <div className="flex flex-col gap-2 ">
      <label htmlFor="script" className="text-sm font-medium">
        {label}
      </label>
      <div
        className="relative p-2 border border-input rounded-md text-sm cursor-copy "
        onClick={handleCopy}
      >
        <p className="text-justify hover:opacity-80 transition-all ease-in-out duration-200">
          {text}
        </p>
      </div>
    </div>
  );
};
