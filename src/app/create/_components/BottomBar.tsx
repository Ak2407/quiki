"use client";

import { Button } from "@/components/ui/button";
import { steps } from "@/lib/constants";
import { LoaderIcon } from "lucide-react";
import { useState } from "react";

type BottomBarProps = {
  step: number;
  setStep: (step: number) => void;
  nextDisabled?: boolean;
  onFinish: () => void;
};

const BottomBar = ({
  step,
  setStep,
  onFinish,
  nextDisabled = false,
}: BottomBarProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onBack = () => {
    setStep(step - 1);
  };

  const onNext = () => {
    setStep(step + 1);
  };

  const onFinishClick = () => {
    setIsLoading(true);
    onFinish();
  };

  const isLastStep = step === steps.length - 1;
  return (
    <div className="w-full h-24 px-4 bg-gray-50 border-t flex items-center justify-center gap-2">
      <Button
        variant="outline"
        className="w-full lg:w-[500px] "
        onClick={onBack}
        disabled={step === 0 || isLoading}
      >
        Back
      </Button>
      <Button
        variant="primary"
        className={`w-full lg:w-[500px] ${isLastStep ? "hidden" : "block"}`}
        onClick={onNext}
        disabled={nextDisabled}
      >
        Next
      </Button>
      <Button
        variant="primary"
        className={`w-full lg:w-[500px] ${isLastStep ? "block" : "hidden"}`}
        onClick={onFinishClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <LoaderIcon className="animate-spin h-5 w-full mr-2" />
        ) : (
          "Finish"
        )}
      </Button>
    </div>
  );
};

export default BottomBar;
