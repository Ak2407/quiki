import Link from "next/link";
import GeneratedVid from "./GeneratedVid";

import { Card, CardContent } from "@/components/ui/card";
import HeaderBar from "./HeaderBar";

const Recently = () => {
  return (
    <div className="flex flex-col gap-4 w-full sm:p-4 ">
      <HeaderBar title="Recently Created" />
      <div className="flex flex-col lg:flex-row justify-center sm:justify-start flex-wrap gap-6">
        <GeneratedVid />
        <GeneratedVid />
        <GeneratedVid />
        <GeneratedVid />
        <GeneratedVid />
        <GeneratedVid />
        <Link href="/dashboard/library">
          <Card className="w-full  lg:w-[300px] h-[150px] hover:bg-gray-50 border-2 border-dashed transition-all duration-200 ease-in-out ">
            <CardContent className="p-4 flex items-center justify-center h-full w-full ">
              <h1 className="text-xl text-neutral-500">Show More +</h1>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Recently;
