"use client";

import { Button } from "@/components/ui/button";
import { LoaderIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Player } from "@remotion/player";
import RemotionVideo from "./RemotionVideo";
import { getVideo } from "@/actions/get-video";

type VideoCardProps = {
  vidId: string;
};

const VideoCard = ({ vidId }: VideoCardProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [vidData, setVidData] = useState<any>(null);
  const [duration, setDuration] = useState<number>(100);

  useEffect(() => {
    if (vidId) getVidData();
  }, [vidId]);

  const getVidData = async () => {
    const result = await getVideo(vidId);
    setVidData(result);
  };

  return (
    <div className="flex flex-col gap-6 mx-auto">
      <div className="h-[500px] lg:h-[500px] mx-auto flex items-center justify-center aspect-[9/16] p-2 bg-gray-50 border">
        <Player
          component={RemotionVideo}
          durationInFrames={Number(duration.toFixed(0))}
          compositionWidth={300}
          compositionHeight={450}
          fps={30}
          inputProps={{
            ...vidData,
            setDuration: (frameValue: number) => setDuration(frameValue),
          }}
          controls
        />
      </div>
      <Button variant="primary" className="w-full " disabled={loading}>
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
