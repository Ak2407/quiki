import { Card, CardContent } from "@/components/ui/card";
import { trimText } from "@/lib/utils";
import Link from "next/link";

type GeneratedVidProps = {
  videoId: string;
  title: string;
  caption: string;
  createdAt: Date | null;
};

const GeneratedVid = async ({
  videoId,
  title,
  caption,
  createdAt,
}: GeneratedVidProps) => {
  return (
    <Link href={`/dashboard/${videoId}`} className="w-full lg:w-fit">
      <div className="w-full lg:w-fit ">
        <Card className="w-full lg:w-[300px] h-[150px] hover:bg-gray-50 transition-all duration-200 ease-in-out ">
          <CardContent className="p-4 space-y-6">
            <div className="space-y-2">
              <h1 className="text-lg font-medium ">{trimText(title, 20)}</h1>
              <p className="text-neutral-600 text-sm tracking-wide">
                {trimText(caption, 50)}
              </p>
            </div>
            <p className="text-neutral-500 text-xs">
              Created : {createdAt?.toDateString()}
            </p>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
};

export default GeneratedVid;
