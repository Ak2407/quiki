import VideoHeader from "./_components/VideoHeader";
import UpgradeAlert from "./_components/UpgradeAlert";
import VideoData from "./_components/VideoData";

export default async function VideoPage() {
  return (
    <div className="flex flex-col gap-4 mx-auto px-4 py-6 max-w-5xl">
      <VideoHeader />

      <UpgradeAlert />

      <VideoData />
    </div>
  );
}
