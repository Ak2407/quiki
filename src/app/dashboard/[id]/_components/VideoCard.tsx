"use client";

import { Button } from "@/components/ui/button";
import { LoaderIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type VideoCardProps = {
  src: string;
};

const VideoCard = ({ src }: VideoCardProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const filename = src.split("/").pop() || "video.mp4";

  const downloadFile = async () => {
    setLoading(true);
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const element = document.createElement("a");
      element.href = URL.createObjectURL(blob);
      element.download = filename;
      document.body.appendChild(element);
      element.click();
      element.remove();
      toast.success("Video downloaded successfully!");
    } catch (error) {
      console.error("Error downloading file:", error);
      toast.error("Error downloading file!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 mx-auto">
      <div className="h-[500px] lg:h-[500px] mx-auto flex items-center justify-center aspect-[9/16] p-2 bg-gray-50 border">
        <video src={src} className="h-[400px] lg:h-[600px]" />
      </div>
      <Button
        variant="primary"
        className="w-full "
        onClick={downloadFile}
        disabled={loading}
      >
        {loading ? (
          <LoaderIcon className="animate-spin h-5 w-5 mr-2" />
        ) : (
          <h1>Download</h1>
        )}
      </Button>
    </div>
  );
};

export default VideoCard;
