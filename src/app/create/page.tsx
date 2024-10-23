"use client";

import { useState } from "react";
import BottomBar from "./_components/BottomBar";
import CancelButton from "./_components/CancelButton";

const CreatePage = () => {
  const [step, setStep] = useState<number>(0);

  return (
    <div className="min-h-screen pt-10 flex items-center justify-center">
      <div className="w-full fixed top-0 left-0 p-2 ">
        <CancelButton />
      </div>
      <h1>Create Page</h1>

      <div className="fixed bottom-0 left-0 right-0 w-full">
        <BottomBar step={step} setStep={setStep} />
      </div>
    </div>
  );
};

export default CreatePage;
