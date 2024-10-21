import Link from "next/link";
import VidContainer from "./VidContainer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Recently = () => {
  return (
    <div className="flex flex-col gap-4 w-full sm:p-4 ">
      <div className="w-full space-y-4">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-xl font-medium">Recently Published </h1>
          <Link href="/dashboard/library">
            <Button variant="primary">Show More</Button>
          </Link>
        </div>
        <Separator className="w-full" />
      </div>
      <div className="flex justify-center sm:justify-start flex-wrap gap-6">
        <VidContainer url="https://delivery.copycopter.ai/lpexamples0823/one_compressed.mp4" />
        <VidContainer url="https://delivery.copycopter.ai/lpexamples0823/middle_compressed.mp4" />
        <VidContainer url="https://delivery.copycopter.ai/lpexamples0823/one_compressed.mp4" />
        <VidContainer url="https://delivery.copycopter.ai/lpexamples0823/middle_compressed.mp4" />
      </div>
    </div>
  );
};

export default Recently;
