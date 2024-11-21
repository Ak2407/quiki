"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BottomBar from "./_components/BottomBar";
import CancelButton from "./_components/CancelButton";
import Topic from "./_components/Topic";
import Language from "./_components/Language";
import { steps } from "@/lib/constants";
import { useRouter } from "next/navigation";
import Duration from "./_components/Duration";
import { toast } from "sonner";
import axios from "axios";
import { useSession } from "next-auth/react";
import { v4 as uuidv4 } from "uuid";
import { addVideoData } from "@/actions/add-vid-data";
import Gender from "./_components/Gender";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Loader } from "lucide-react";

type ScriptItem = {
  contentText: string;
  imagePrompt: string;
};

type VidData = {
  script: ScriptItem[];
  audioUrl: string;
  imageList: string[];
  caption: string;
};

const CreatePage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [step, setStep] = useState<number>(0);
  const [selectedTopic, setSelectedTopic] = useState<string>("Scary Stories");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");
  const [selectedGender, setSelectedGender] = useState<string>("MALE");
  const [selectedDuration, setSelectedDuration] =
    useState<string>("45 to 60 seconds");
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const [dialogMessage, setDialogMessage] = useState("Processing...");

  const [vidData, setVidData] = useState<VidData>({
    script: [],
    audioUrl: "",
    imageList: [],
    caption: "",
  });

  const updateVidData = (newData: Partial<VidData>) => {
    setVidData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const onFinish = async () => {
    setIsDialogOpen(true);
    setDialogMessage("Generating Video Script...");
    const data = {
      topic: selectedTopic,
      language: selectedLanguage,
      gender: selectedGender,
      duration: selectedDuration,
    };
    console.log(data);
    try {
      await axios.post("/api/get-vid-text", data).then((response) => {
        updateVidData({ script: response.data.result });
        GenerateAudio(response.data.result);
        toast.success("Video Script Generated Successfully");
      });
    } catch (error) {
      console.log(error);
      toast.error("Error Generating Video Script");
      setIsDialogOpen(false);
    }
  };

  const GenerateAudio = async (vidScript: ScriptItem[]) => {
    setDialogMessage("Generating Audio...");
    let script = "";
    vidScript.forEach((item) => {
      script = script + item.contentText + "";
    });

    const id = uuidv4();

    await axios
      .post("/api/get-audio", {
        script,
        id,
        gender: selectedGender,
        language: selectedLanguage,
      })
      .then((response) => {
        toast.success("Audio Generated Successfully");
        updateVidData({ audioUrl: response.data.result });
        GenerateCaption(response.data.result, vidScript);
      });
  };

  const GenerateCaption = async (
    audioFileUrl: string,
    vidScript: ScriptItem[],
  ) => {
    setDialogMessage("Generating Caption...");
    await axios.post("/api/get-caption", { audioFileUrl }).then((response) => {
      updateVidData({ caption: response.data.result });
      GenerateImages(vidScript);
      toast.success("Caption Generated Successfully");
    });
  };

  const GenerateImages = async (vidScript: ScriptItem[]) => {
    setDialogMessage("Generating Images...");
    try {
      const imagePromises = vidScript.map((item) =>
        axios.post("/api/get-vid-images", { prompt: item?.imagePrompt }),
      );

      const responses = await Promise.all(imagePromises);
      const images = responses.map((response) => response.data.result);

      toast.success("Images Generated Successfully");

      updateVidData({ imageList: images });
    } catch (error) {
      console.error("Error generating images:", error);
      toast.error("Error generating images");
      setIsDialogOpen(false);
    }
  };

  useEffect(() => {
    const { script, audioUrl, caption, imageList } = vidData;

    if (script.length > 0 && audioUrl && caption && imageList.length > 0) {
      addVidData(vidData);
    }
  }, [vidData]);

  const addVidData = async (vidData: VidData) => {
    setDialogMessage("Saving Video Data...");
    try {
      const userEmail = session?.user?.email;
      await addVideoData(vidData, userEmail!);
      setDialogMessage("Video Generated Successfully");
      setTimeout(() => {
        setIsDialogOpen(false);
        router.push("/dashboard");
      }, 2000);
    } catch (error) {
      console.error("Error adding video data:", error);
      toast.error("Error adding video data");
      setIsDialogOpen(false);
    }
  };

  const fadeInFromBottom = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen p-10 pb-40 flex flex-col gap-2 items-center justify-center">
      <div className="w-full fixed top-0 left-0 p-2">
        <CancelButton />
      </div>
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step-0"
            {...fadeInFromBottom}
            className="flex flex-col gap-10"
          >
            <h1 className="text-2xl font-bold text-center">
              {steps[step].title}
            </h1>
            <Topic
              selectedTopic={selectedTopic}
              setSelectedTopic={setSelectedTopic}
            />
          </motion.div>
        )}
        {step === 1 && (
          <motion.div
            key="step-1"
            {...fadeInFromBottom}
            className="flex flex-col gap-10"
          >
            <h1 className="text-2xl font-bold text-center">
              {steps[step].title}
            </h1>
            <Language
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
            />
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            key="step-2"
            {...fadeInFromBottom}
            className="flex flex-col gap-10"
          >
            <h1 className="text-2xl font-bold text-center">
              {steps[step].title}
            </h1>
            <Gender
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
            />
          </motion.div>
        )}
        {step === 3 && (
          <motion.div
            key="step-3"
            {...fadeInFromBottom}
            className="flex flex-col gap-10"
          >
            <h1 className="text-2xl font-bold text-center">
              {steps[step].title}
            </h1>
            <Duration
              selectedDuration={selectedDuration}
              setSelectedDuration={setSelectedDuration}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="fixed bottom-0 left-0 right-0 w-full">
        <BottomBar step={step} setStep={setStep} onFinish={onFinish} />
      </div>
      <Dialog open={isDialogOpen} onOpenChange={() => {}}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogTitle></DialogTitle>
          <div className="flex flex-col items-center justify-center min-h-[200px] text-center">
            {dialogMessage !== "Video Generated Successfully" ? (
              <>
                <Loader className="h-8 w-8 animate-spin mb-4" />
                <p className="text-lg font-semibold">{dialogMessage}</p>
              </>
            ) : (
              <p className="text-lg font-semibold text-green-600">
                {dialogMessage}
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreatePage;
