import GeneratedVid from "./GeneratedVid";

import HeaderBar from "./HeaderBar";
import { auth } from "@/auth";
import { toast } from "sonner";
import { getRecentlyMade } from "@/actions/get-video";
import EmptyState from "../library/_components/EmptyState";

const Recently = async () => {
  const session = await auth();

  if (!session?.user?.email) {
    toast.error("You must be logged in to view this page");
    return null;
  }

  const recentVideos = await getRecentlyMade(session.user?.email);

  return (
    <div className="flex flex-col gap-4 w-full sm:p-4 ">
      <HeaderBar title="Recently Created" />

      {recentVideos.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="flex flex-row justify-start flex-wrap gap-6">
          {recentVideos.map((video) => (
            <div key={video.id}>
              <GeneratedVid
                videoId={video.id}
                title={video.title}
                topic={video.topic}
                voice={video.voice}
                language={video.language}
                createdAt={video.createdAt}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Recently;
