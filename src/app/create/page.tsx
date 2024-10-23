"use client";

import { useState } from "react";
import BottomBar from "./_components/BottomBar";
import CancelButton from "./_components/CancelButton";
import Topic from "./_components/Topic";
import Language from "./_components/Language";
import Voice from "./_components/Voice";
import Subtitle from "./_components/Subtitle";
import Review from "./_components/Review";

const CreatePage = () => {
  const [step, setStep] = useState<number>(0);

  return (
    <div className="min-h-screen pt-10 flex flex-col gap-2 items-center justify-center">
      <div className="w-full fixed top-0 left-0 p-2 ">
        <CancelButton />
      </div>
      {step === 0 && <Topic />}
      {step === 1 && <Language />}
      {step === 2 && <Voice />}
      {step === 3 && <Subtitle />}
      {step === 4 && <Review />}

      <div className="fixed bottom-0 left-0 right-0 w-full">
        <BottomBar step={step} setStep={setStep} />
      </div>
    </div>
  );
};

export default CreatePage;
