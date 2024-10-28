import TitleForm from "./TitleForm";
import DeleteVideoBtn from "./DeleteVideoBtn";

const VideoHeader = () => {
  return (
    <div className="flex items-center justify-between border-b pb-4">
      <div className="flex items-center gap-4">
        <TitleForm />
      </div>
      <div className="flex gap-2">
        <DeleteVideoBtn />
      </div>
    </div>
  );
};

export default VideoHeader;
