"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { getVideo } from "@/actions/get-video";
import { Skeleton } from "@/components/ui/skeleton";
import { useParams } from "next/navigation";
import VideoCard from "./VideoCard";
import { UpdateVideoFormValues, updateVideoSchema } from "@/db/schema";

export default function UpdateForm() {
  const params = useParams();
  const { id } = params;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [script, setScript] = useState<string>("This is a script");

  const form = useForm<UpdateVideoFormValues>({
    resolver: zodResolver(updateVideoSchema),
    defaultValues: {
      id: id.toString(),
      script: "This is a test",
    },
  });

  // useEffect(() => {
  //   const fetchVideo = async () => {
  //     const video = await getVideo(id.toString());
  //     form.reset({
  //       id: id.toString(),
  //       title: video.title,
  //       caption: video.caption,
  //       script: video.script,
  //     });
  //     setVidUrl(video.videoUrl);
  //     setIsLoading(false);
  //   };
  //   fetchVideo();
  // }, [id, form]);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-10 mx-auto px-4 py-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Skeleton className="h-[400px] mx-auto w-60" />
            <Skeleton className="h-[40px] mx-auto w-60" />
          </div>
          <div className="space-y-6">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-80 w-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* {vidUrl && <VideoCard src={vidUrl} />} */}
      <VideoCard src="https://delivery.copycopter.ai/lpexamples0823/one_compressed.mp4" />

      <div className="space-y-2">
        <label htmlFor="script" className="text-sm font-medium">
          SCRIPT
        </label>
        <Textarea
          id="script"
          readOnly
          value={script}
          className="min-h-[200px] "
        />
      </div>
    </div>
  );
}
