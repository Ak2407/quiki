import VideoHeader from "./_components/VideoHeader";
import UpgradeAlert from "./_components/UpgradeAlert";
import UpdateForm from "./_components/UpdateForm";

export default async function VideoPage() {
  return (
    <div className="flex flex-col gap-4 mx-auto px-4 py-6 max-w-5xl">
      <VideoHeader />

      <p className="text-muted-foreground mb-6">
        You can update your video details here. Update the changes in the form
        and click update video.
      </p>

      <UpgradeAlert />

      <UpdateForm />
    </div>
  );
}
