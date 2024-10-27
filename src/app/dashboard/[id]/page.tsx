import VideoHeader from "./_components/VideoHeader";
import UpgradeAlert from "./_components/UpgradeAlert";
import UpdateForm from "./_components/UpdateForm";
import VideoCard from "./_components/VideoCard";

export default function VideoPage() {
  return (
    <div className="flex flex-col gap-4 mx-auto px-4 py-6 max-w-5xl">
      <VideoHeader />

      <p className="text-muted-foreground mb-6">
        Congratulations! You have successfully created a video. Make changes to
        the video if you want.
      </p>

      <UpgradeAlert />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <VideoCard src="https://delivery.copycopter.ai/lpexamples0823/middle_compressed.mp4" />
        <UpdateForm />
      </div>
    </div>
  );
}

// const VideoPageSkeleton = () => {
//   return (
//     <div className="flex flex-col gap-10 mx-auto px-4 py-6 max-w-5xl">
//       <Skeleton className="h-20 w-full" />
//       <Skeleton className="h-6 w-full" />
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         <Skeleton className="h-[400px] mx-auto w-60" />
//         <div className="space-y-6">
//           <Skeleton className="h-20 w-full" />
//           <Skeleton className="h-20 w-full" />
//           <Skeleton className="h-60 w-full" />
//         </div>
//       </div>
//     </div>
//   );
// };
