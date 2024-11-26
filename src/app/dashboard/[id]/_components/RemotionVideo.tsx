import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

type RemotionVideoProps = {
  script: string;
  imageList: string[];
  audioUrl: string;
  captions: any[];
  setDuration: (frameValue: number) => void;
};

const RemotionVideo = ({
  script,
  imageList,
  audioUrl,
  captions,
  setDuration,
}: RemotionVideoProps) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const getDurationFrame = () => {
    if (!captions.length) return 0;
    const duration = (captions[captions.length - 1].end / 1000) * fps;
    setDuration(duration);
    return duration;
  };

  const getFrom = (index: number) => {
    if (!imageList.length) return 0;
    return (index * getDurationFrame()) / imageList.length;
  };

  const getCurrentCaption = () => {
    const currentTime = (frame / 30) * 1000;
    const currentCaption = captions.find(
      (word) => currentTime >= word.start && currentTime <= word.end,
    );
    return currentCaption ? currentCaption.text : "";
  };

  return (
    script && (
      <AbsoluteFill className="bg-black">
        {imageList.map((img: string, index: number) => {
          const startTime = getFrom(index);
          const duration = getDurationFrame();

          const scale = (index: number) =>
            interpolate(
              frame,
              [startTime, startTime + duration / 2, startTime + duration],
              index % 2 === 0 ? [1, 1.8, 1] : [1.8, 1, 1.8],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
            );

          return (
            <>
              <Sequence
                key={index}
                from={getFrom(index)}
                durationInFrames={getDurationFrame()}
              >
                <AbsoluteFill className="justify-center items-center">
                  <Img
                    src={img}
                    className="w-full h-full object-cover"
                    style={{
                      transform: `scale(${scale(index)})`,
                    }}
                  />
                  <AbsoluteFill
                    style={{
                      color: "white",
                      justifyContent: "center",
                      top: undefined,
                      bottom: 50,
                      height: 150,
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    <div className="px-2 bg-black/50  rounded-md w-fit mx-auto">
                      <h2 className="text-xl font-semibold text-white">
                        {getCurrentCaption()}
                      </h2>
                    </div>
                  </AbsoluteFill>
                </AbsoluteFill>
              </Sequence>
            </>
          );
        })}

        {audioUrl && <Audio src={audioUrl} />}
      </AbsoluteFill>
    )
  );
};

export default RemotionVideo;
