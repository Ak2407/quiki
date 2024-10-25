"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BottomBar from "./_components/BottomBar";
import CancelButton from "./_components/CancelButton";
import Topic from "./_components/Topic";
import Language from "./_components/Language";
import Voice from "./_components/Voice";
import { steps } from "@/lib/constants";

const CreatePage = () => {
  const [step, setStep] = useState<number>(0);

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
            <Topic />
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
            <Language />
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
            <Voice />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="fixed bottom-0 left-0 right-0 w-full">
        <BottomBar step={step} setStep={setStep} />
      </div>
    </div>
  );
};

export default CreatePage;
