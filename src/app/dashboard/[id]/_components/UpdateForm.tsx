"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { getVideo } from "@/actions/get-video";
import { Skeleton } from "@/components/ui/skeleton";
import { useParams } from "next/navigation";
import VideoCard from "./VideoCard";

const UpdateForm = () => {
  const params = useParams();
  const { id } = params;

  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [script, setScript] = useState("");
  const [vidUrl, setVidUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      const video = await getVideo(id.toString());
      setTitle(video.title);
      setCaption(video.caption);
      setScript(video.script);
      setVidUrl(video.videoUrl);
      setIsLoading(false);
    };
    fetchVideo();
  }, [id]);

  const limits = {
    title: 100,
    caption: 200,
    script: 1200,
  };

  const getCharacterCount = (text: string, limit: number) => {
    const remaining = limit - text.length;
    return {
      count: text.length,
      remaining,
      isExceeded: remaining < 0,
    };
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-10 mx-auto px-4 py-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Skeleton className="h-[400px] mx-auto w-60" />
            <Skeleton className="h-[40px] mx-auto w-60" />
          </div>
          <div className="space-y-6">
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-60 w-full" />
            <Skeleton className="h-[40px] mx-auto w-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* VideoCard only rendered once */}
      {vidUrl && <VideoCard src={vidUrl} />}

      {/* Title Input */}
      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            TITLE
          </label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={cn(
              "mb-1",
              getCharacterCount(title, limits.title).isExceeded &&
                "border border-red-500 text-red-500 bg-red-50 placeholder:text-red-300",
            )}
          />
          <div className="flex justify-between items-center text-sm">
            <span
              className={cn(
                "text-right",
                getCharacterCount(title, limits.title).isExceeded
                  ? "text-red-500"
                  : "text-muted-foreground",
              )}
            >
              {getCharacterCount(title, limits.title).count} / {limits.title}
            </span>
          </div>
        </div>

        {/* Caption Input */}
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            CAPTION
          </label>
          <Input
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className={cn(
              "mb-1",
              getCharacterCount(caption, limits.caption).isExceeded &&
                "border border-red-500 text-red-500 bg-red-50 placeholder:text-red-300",
            )}
          />
          <div className="flex justify-between items-center text-sm">
            <span
              className={cn(
                "text-right",
                getCharacterCount(caption, limits.caption).isExceeded
                  ? "text-red-500"
                  : "text-muted-foreground",
              )}
            >
              {getCharacterCount(caption, limits.caption).count} /{" "}
              {limits.caption}
            </span>
          </div>
        </div>

        {/* Script Textarea */}
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-2 block">
            SCRIPT
          </label>
          <Textarea
            value={script}
            onChange={(e) => setScript(e.target.value)}
            className={cn(
              "mb-1",
              getCharacterCount(script, limits.script).isExceeded &&
                "border border-red-500 text-red-500 bg-red-50 placeholder:text-red-300",
              "min-h-[200px]",
            )}
          />
          <div className="flex justify-between items-center text-sm">
            <span className="text-blue-500">
              Note: We recommend verifying AI-generated scripts for accuracy.
            </span>
            <span
              className={cn(
                "text-right",
                getCharacterCount(script, limits.script).isExceeded
                  ? "text-red-500"
                  : "text-muted-foreground",
              )}
            >
              {getCharacterCount(script, limits.script).count} / {limits.script}
            </span>
          </div>
        </div>

        <Button className="w-full bg-sky-700 hover:bg-sky-600">
          Update Video
        </Button>
      </div>
    </div>
  );
};

export default UpdateForm;
