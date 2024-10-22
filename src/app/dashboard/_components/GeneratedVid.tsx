import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const GeneratedVid = () => {
  return (
    <Link href="/dashboard/create" className="w-full lg:w-fit">
      <div className="w-full lg:w-fit ">
        <Card className="w-full lg:w-[300px] h-[150px] hover:bg-gray-50 transition-all duration-200 ease-in-out ">
          <CardContent className="p-4 space-y-6">
            <div className="space-y-2">
              <h1 className="text-lg font-medium ">Egyptian History</h1>
              <p className="text-neutral-600 text-sm tracking-wide">
                How the ancient Egyptians lived and what they built
              </p>
            </div>
            <p className="text-neutral-500 text-xs">Created Oct 10, 2024</p>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
};

export default GeneratedVid;
