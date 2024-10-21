type VidContainerProps = {
  url: string;
};

const VidContainer = ({ url }: VidContainerProps) => {
  return (
    <div>
      <video
        controls
        src={url}
        className=" rounded-lg aspect-[9/16] max-h-[200px] max-w-[150px] lg:max-h-[300px] lg:max-w-[200px]"
      />
    </div>
  );
};

export default VidContainer;
