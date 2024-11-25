import {
  AbsoluteFill,
  Audio,
  Img,
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
          return (
            <>
              <Sequence
                key={index}
                from={getFrom(index)}
                durationInFrames={getDurationFrame()}
              >
                <AbsoluteFill className="justify-center items-center">
                  <Img src={img} className="w-full h-full object-cover" />
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
                    <h2 className="text-2xl font-semibold text-amber-500">
                      {getCurrentCaption()}
                    </h2>
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
