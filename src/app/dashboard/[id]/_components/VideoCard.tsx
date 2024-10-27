type VideoCardProps = {
  src: string;
};

const VideoCard = ({ src }: VideoCardProps) => {
  return (
    <div className="h-[500px] lg:h-[600px] mx-auto flex items-center justify-center aspect-[9/16] p-4 bg-gray-50 border">
      <video src={src} className="h-[500px] lg:h-[600px]" />
    </div>
  );
};

export default VideoCard;
