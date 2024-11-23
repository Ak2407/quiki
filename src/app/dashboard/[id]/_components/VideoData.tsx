"use client";

import { useEffect, useState } from "react";
import { getVideo } from "@/actions/get-video";
import { Skeleton } from "@/components/ui/skeleton";
import { useParams } from "next/navigation";
import VideoCard from "./VideoCard";

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
      {/* {vidUrl && <VideoCard src={vidUrl} />} */}
      <VideoCard src="https://delivery.copycopter.ai/lpexamples0823/one_compressed.mp4" />

      <div className="space-y-6">
        <div className="flex flex-col gap-2 ">
          <label htmlFor="script" className="text-sm font-medium">
            TITLE
          </label>
          <div className="p-2 border border-input rounded-md text-sm">
            <p>{title}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 ">
          <label htmlFor="script" className="text-sm font-medium">
            SCRIPT
          </label>
          <div className="p-4 border border-input rounded-md text-sm">
            <p>{script}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
