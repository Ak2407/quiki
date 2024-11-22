import GeneratedVid from "../_components/GeneratedVid";
import HeaderBar from "../_components/HeaderBar";
import { SearchBar } from "./_components/SearchBar";
import { toast } from "sonner";
import { getAllVideos } from "@/actions/get-video";
import { auth } from "@/auth";
import EmptyState from "./_components/EmptyState";

const Library = async () => {
  const session = await auth();

  if (!session?.user?.email) {
    toast.error("You must be logged in to view this page");
    return null;
  }

  const allUserVideos = await getAllVideos(session.user?.email);

  return (
    <div className="w-full pt-20 sm:pt-8 p-8 flex flex-col gap-6">
      <div className="w-full lg:w-fit flex justify-center sm:justify-end items-center fixed top-0 right-0 p-4">
        <SearchBar videos={allUserVideos} />
      </div>
      <HeaderBar title="Library" />
      <div className="flex flex-wrap justify-center sm:justify-start gap-6 w-full">
        {allUserVideos.length === 0 ? (
          <EmptyState />
        ) : (
          allUserVideos.map((video) => (
            <div key={video.id}>
              <GeneratedVid
                videoId={video.id}
                title={video.title}
                topic={video.topic}
                language={video.language}
                voice={video.voice}
                createdAt={video.createdAt}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Library;
