import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  FileText,
  Mic2,
  Globe,
  Image as ImageIcon,
  Share2,
  Wand2,
} from "lucide-react";
import Link from "next/link";

const Features = () => {
  return (
    <div
      className="flex flex-col gap-10 items-center justify-center mx-auto p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-sky-900 to-sky-800 "
      id="features"
    >
      <div className="text-center mb-8 text-white">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Features offered
        </h1>
        <p className="text-sm sm:text-xl text-white">
          Apart from being the easy to use AI video generator, Quiki has a lot
          of features to make your videos stand out.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto lg:w-[80%]">
        {/* Main Feature */}
        <Card className="row-span-2 sm:col-span-2 flex flex-col justify-between p-4 sm:p-6 bg-sky-700/30 backdrop-blur-md border border-sky-600/50 text-white shadow-lg">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              AI-Powered Script Generation
            </h3>
            <p className="mb-4 text-sm sm:text-base text-sky-100">
              Generate compelling scripts automatically using our advanced AI,
              create your own, or simply provide a link to an article for
              instant script creation.
            </p>
          </div>
          <Link href="/dashboard">
            <Button
              variant="secondary"
              className="self-start bg-sky-600 hover:bg-sky-500 text-white border-none"
            >
              Start Creating <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </Card>

        {/* Script Generation Options */}
        <Card className="p-4 sm:p-6 flex flex-col justify-between bg-sky-700/20 backdrop-blur-md border border-sky-600/30 text-white">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg sm:text-xl font-semibold">
              Multi-Source Scripting
            </h3>
            <FileText className="h-6 w-6 text-sky-300" />
          </div>
          <p className="text-xs sm:text-sm text-sky-100">
            Generate scripts from AI, manual input, or article links for
            versatile content creation.
          </p>
        </Card>

        {/* Voice Options */}
        <Card className="p-4 sm:p-6 flex flex-col justify-between bg-sky-700/20 backdrop-blur-md border border-sky-600/30 text-white">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg sm:text-xl font-semibold">10+ AI Voices</h3>
            <Mic2 className="h-6 w-6 text-sky-300" />
          </div>
          <p className="text-xs sm:text-sm text-sky-100">
            Choose from a diverse range of over 10 AI-generated voices for your
            videos.
          </p>
        </Card>

        {/* Language Support */}
        <Card className="p-4 sm:p-6 flex flex-col justify-between bg-sky-700/20 backdrop-blur-md border border-sky-600/30 text-white">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg sm:text-xl font-semibold">
              29 Languages Supported
            </h3>
            <Globe className="h-6 w-6 text-sky-300" />
          </div>
          <p className="text-xs sm:text-sm text-sky-100">
            Create videos in 29 different languages, expanding your global
            reach.
          </p>
        </Card>

        {/* AI Realistic Images */}
        <Card className="p-4 sm:p-6 flex flex-col justify-between bg-sky-700/20 backdrop-blur-md border border-sky-600/30 text-white">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg sm:text-xl font-semibold">
              AI Realistic Images
            </h3>
            <ImageIcon className="h-6 w-6 text-sky-300" />
          </div>
          <p className="text-xs sm:text-sm text-sky-100">
            Generate stunning, lifelike images with our advanced AI for visually
            compelling videos.
          </p>
        </Card>

        {/* Social Media Integration */}
        <Card className="p-4 sm:p-6 flex flex-col justify-between bg-sky-700/20 backdrop-blur-md border border-sky-600/30 text-white">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg sm:text-xl font-semibold">
              Social Media Integration
            </h3>
            <Share2 className="h-6 w-6 text-sky-300" />
          </div>
          <p className="text-xs sm:text-sm text-sky-100">
            Easily post your created videos directly to social media platforms
            or export for custom use.
          </p>
        </Card>

        {/* AI Enhancement */}
        <Card className="sm:col-span-2 p-4 sm:p-6 flex justify-between items-center bg-sky-700/30 backdrop-blur-md border border-sky-600/50 text-white">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              AI-Powered Enhancement
            </h3>
            <p className="text-xs sm:text-sm text-sky-100">
              Automatically improve video quality, adjust pacing, and optimize
              content for maximum engagement.
            </p>
          </div>
          <Wand2 className="h-8 w-8 sm:h-12 sm:w-12 text-sky-300" />
        </Card>
      </div>
    </div>
  );
};

export default Features;
