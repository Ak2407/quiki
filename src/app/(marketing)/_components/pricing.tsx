import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <div className="w-full bg-gradient-to-br from-sky-900 to-sky-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Choose the Perfect Plan for Your Video Creation Needs
          </h2>
          <p className="mt-4 text-xl text-sky-100">
            From free monthly videos to professional-grade content, we have a
            plan that is right for you.
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
          {/* Free Plan */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-sky-900">
                Free
              </CardTitle>
              <CardDescription className="text-sky-700">
                For casual users and beginners
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-4xl font-bold text-sky-900 mb-4">
                $0
                <span className="text-xl font-normal text-sky-700">/month</span>
              </div>
              <ul className="space-y-2">
                <Feature>1 free video per month</Feature>
                <Feature>2 AI voices</Feature>
                <Feature>5 languages</Feature>
                <Feature>Basic AI image generation</Feature>
                <Feature>480p video quality</Feature>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">
                Get Started
              </Button>
            </CardFooter>
          </Card>

          {/* Basic Plan */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-sky-900">
                Basic
              </CardTitle>
              <CardDescription className="text-sky-700">
                For individuals and small projects
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-4xl font-bold text-sky-900 mb-4">
                $19
                <span className="text-xl font-normal text-sky-700">/month</span>
              </div>
              <ul className="space-y-2">
                <Feature>Up to 10 videos per month</Feature>
                <Feature>5 AI voices</Feature>
                <Feature>10 languages</Feature>
                <Feature>Basic AI image generation</Feature>
                <Feature>720p video quality</Feature>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">
                Choose Basic
              </Button>
            </CardFooter>
          </Card>

          {/* Pro Plan */}
          <Card className="flex flex-col border-sky-500 border-2">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-sky-900">
                Pro
              </CardTitle>
              <CardDescription className="text-sky-700">
                For professionals and growing businesses
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-4xl font-bold text-sky-900 mb-4">
                $49
                <span className="text-xl font-normal text-sky-700">/month</span>
              </div>
              <ul className="space-y-2">
                <Feature>Up to 50 videos per month</Feature>
                <Feature>All 10+ AI voices</Feature>
                <Feature>All 29 languages</Feature>
                <Feature>Advanced AI image generation</Feature>
                <Feature>1080p video quality</Feature>
                <Feature>Priority support</Feature>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">
                Upgrade to Pro
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center">
      <Check className="h-5 w-5 text-sky-500 mr-2" />
      <span className="text-sky-800">{children}</span>
    </li>
  );
}
