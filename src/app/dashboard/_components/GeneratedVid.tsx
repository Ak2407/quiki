import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { trimText } from "@/lib/utils";
import { AudioLinesIcon, Volume2Icon, PlayCircleIcon } from "lucide-react";
import Link from "next/link";

type GeneratedVidProps = {
  videoId: string;
  title: string;
  topic: string;
  voice: string;
  language: string;
  createdAt: Date | null;
};

const GeneratedVid = ({
  videoId,
  title,
  topic,
  voice,
  language,
  createdAt,
}: GeneratedVidProps) => {
  return (
    <Link
      href={`/dashboard/${videoId}`}
      className="block w-full transition-transform duration-300 ease-in-out hover:scale-105"
    >
      <Card className="overflow-hidden h-[270px] max-h-[270px] w-[180px] max-w-[180px]">
        <div className="relative aspect-video bg-gradient-to-br from-purple-500 to-pink-500">
          <PlayCircleIcon className="absolute inset-0 m-auto text-white/80 w-12 h-12" />
        </div>
        <CardContent className="p-4 flex flex-col justify-evenly gap-2 ">
          <h2 className="text-base font-semibold mb-2">
            {trimText(title, 14)}
          </h2>
          <Badge variant="secondary" className="mb-3 w-fit">
            {topic}
          </Badge>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center space-x-2">
              <AudioLinesIcon className="w-4 h-4" />
              <span>{voice}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Volume2Icon className="w-4 h-4" />
              <span>{language}</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Created: {createdAt?.toLocaleDateString()}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default GeneratedVid;
