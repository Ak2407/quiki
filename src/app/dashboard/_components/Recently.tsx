import Link from "next/link";
import GeneratedVid from "./GeneratedVid";

import { Card, CardContent } from "@/components/ui/card";
import HeaderBar from "./HeaderBar";
import { auth } from "@/auth";
import { toast } from "sonner";
import { getRecentlyMade } from "@/actions/get-video";
import EmptyState from "../library/_components/EmptyState";

const Recently = async () => {
  const session = await auth();

  if (!session) {
    toast.error("You must be logged in to view this page");
    return null;
  }

  const recentVideos = await getRecentlyMade(session.user?.id);

  return (
    <div className="flex flex-col gap-4 w-full sm:p-4 ">
      <HeaderBar title="Recently Created" />

      {recentVideos.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="flex flex-col lg:flex-row justify-center sm:justify-start flex-wrap gap-6">
          {recentVideos.map((video) => (
            <div key={video.id}>
              <GeneratedVid
                videoId={video.id}
                title={video.title}
                caption={video.caption}
                createdAt={video.createdAt}
              />
            </div>
          ))}
          <Link href="/dashboard/library">
            <Card className="w-full  lg:w-[300px] h-[150px] hover:bg-gray-50 border-2 border-dashed transition-all duration-200 ease-in-out ">
              <CardContent className="p-4 flex items-center justify-center h-full w-full ">
                <h1 className="text-xl text-neutral-500">Show More +</h1>
              </CardContent>
            </Card>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Recently;
