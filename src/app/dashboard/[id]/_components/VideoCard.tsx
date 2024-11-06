import { Button } from "@/components/ui/button";

type VideoCardProps = {
  src: string;
};

const VideoCard = ({ src }: VideoCardProps) => {
  return (
    <div className="flex flex-col gap-6 mx-auto">
      <div className="h-[500px] lg:h-[500px] mx-auto flex items-center justify-center aspect-[9/16] p-2 bg-gray-50 border">
        <video autoPlay muted src={src} className="h-[400px] lg:h-[600px]" />
      </div>
      <Button variant="primary">Download Video</Button>
    </div>
  );
};

export default VideoCard;
