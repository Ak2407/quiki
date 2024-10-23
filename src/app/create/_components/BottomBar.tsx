import { Button } from "@/components/ui/button";
import { steps } from "@/lib/constants";
import Link from "next/link";

type BottomBarProps = {
  step: number;
  setStep: (step: number) => void;
};

const BottomBar = ({ step, setStep }: BottomBarProps) => {
  const onBack = () => {
    setStep(step - 1);
  };

  const onNext = () => {
    setStep(step + 1);
  };

  const isLastStep = step === steps.length - 1;
  return (
    <div className="w-full h-24 px-4 bg-gray-50 border-t flex items-center justify-center gap-2">
      <Button
        variant="outline"
        className="w-full lg:w-[500px]  "
        onClick={onBack}
        disabled={step === 0}
      >
        Back
      </Button>
      <Button
        variant="primary"
        className={`w-full lg:w-[500px] ${isLastStep ? "hidden" : "block"}`}
        onClick={onNext}
      >
        Next
      </Button>
      <Link href="/dashboard">
        <Button
          variant="primary"
          className={`w-full lg:w-[500px] ${isLastStep ? "block" : "hidden"}`}
          onClick={onBack}
          disabled={step === 0}
        >
          Finish
        </Button>
      </Link>
    </div>
  );
};

export default BottomBar;
