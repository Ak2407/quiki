import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GhostIcon, MailIcon, TwitterIcon } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex mt-10 lg:mt-40 items-center justify-center p-4">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-sky-700">
            Get in Touch
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-gray-600">
              Have a question or want to work together? Fill out the form or
              reach out to us directly.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sky-700">
                <TwitterIcon className="h-5 w-5" />
                <a
                  href="https://x.com/DevAxit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @DevAxit
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sky-700">
                <MailIcon className="h-5 w-5" />
                <a
                  href="mailto:akshu.24gupta@gmail.com"
                  className="hover:underline"
                >
                  akshu.24gupta@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sky-700">
                <GhostIcon className="h-5 w-5" />
                <a
                  href="https://www.akshit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  www.akshit.app
                </a>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                className="min-h-[100px]"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-sky-700 text-white hover:bg-sky-800"
            >
              Send Mail
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
