"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BottomBar from "./_components/BottomBar";
import CancelButton from "./_components/CancelButton";
import Topic from "./_components/Topic";
import Language from "./_components/Language";
import Voice from "./_components/Voice";
import { steps } from "@/lib/constants";
import { useRouter } from "next/navigation";
import Duration from "./_components/Duration";
import { toast } from "sonner";
import axios from "axios";

import { v4 as uuidv4 } from "uuid";

type ScriptItem = {
  contentText: string;
  imagePrompt: string;
};

const CreatePage = () => {
  const router = useRouter();

  const [step, setStep] = useState<number>(0);
  const [selectedTopic, setSelectedTopic] = useState<string>("Scary Stories");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");
  const [selectedVoice, setSelectedVoice] = useState<string>("Echo");
  const [selectedDuration, setSelectedDuration] =
    useState<string>("45 to 60 seconds");

  const [script, setScript] = useState<ScriptItem[]>([]);
  const [audioUrl, setAudioUrl] = useState<string>();
  const [imageUrl, setImageUrl] = useState<string[]>([]);
  const [caption, setCaption] = useState();

  const onFinish = async () => {
    const data = {
      topic: selectedTopic,
      language: selectedLanguage,
      voice: selectedVoice,
      duration: selectedDuration,
    };
    console.log(data);
    try {
      await axios.post("/api/get-vid-text", data).then((response) => {
        setScript(response.data.result);
        console.log("Script:", script);
        console.log("Scriptt ==", response.data.result);
        GenerateAudio(response.data.result);
        toast.success("Video Script Generated Successfully");
      });
    } catch (error) {
      console.log(error);
      toast.error("Error Generating Video Script");
    }

    router.push("/dashboard");
  };

  const GenerateAudio = async (vidScript: ScriptItem[]) => {
    let script = "";
    vidScript.forEach((item) => {
      script = script + item.contentText + "";
    });

    const id = uuidv4();

    await axios
      .post("/api/get-audio", {
        script,
        id,
      })
      .then((response) => {
        toast.success("Audio Generated Successfully");
        setAudioUrl(response.data.result);
        console.log("Audio:", audioUrl);
        console.log("Audio ==", response.data.result);
        GenerateCaption(response.data.result, vidScript);
      });
  };

  const GenerateCaption = async (
    audioFileUrl: string,
    vidScript: ScriptItem[],
  ) => {
    await axios.post("/api/get-caption", { audioFileUrl }).then((response) => {
      setCaption(response.data.result);
      console.log("Caption:", caption);
      console.log("Caption ==", response.data.result);
      GenerateImages(vidScript);
      toast.success("Caption Generated Successfully");
    });
  };

  const GenerateImages = async (vidScript: ScriptItem[]) => {
    try {
      const imagePromises = vidScript.map((item) =>
        axios.post("/api/get-vid-images", { prompt: item?.imagePrompt }),
      );

      const responses = await Promise.all(imagePromises);
      const images = responses.map((response) => response.data.result);

      setImageUrl(images);
      console.log("Images:", imageUrl);
      console.log("Images ==", images);
      console.log(
        "Script:",
        script,
        "Images:",
        imageUrl,
        "Caption:",
        caption,
        "Audio:",
        audioUrl,
      );
    } catch (error) {
      console.error("Error generating images:", error);
      toast.error("Error generating images");
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
            <Voice
              selectedVoice={selectedVoice}
              setSelectedVoice={setSelectedVoice}
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
    </div>
  );
};

export default CreatePage;
