"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FrownIcon, MehIcon, SmileIcon } from "lucide-react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

type DeleteVideoModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function DeleteVideoModal({
  open,
  onClose,
}: DeleteVideoModalProps) {
  const [feedback, setFeedback] = useState("");
  const [sentiment, setSentiment] = useState<
    "sad" | "neutral" | "happy" | null
  >(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleSubmit = () => {
    console.log({ feedback, sentiment });
    // Here you would typically send the feedback to your server
    // Reset the form and close the modal/drawer
    setFeedback("");
    setSentiment(null);
    onClose();
  };

  const FeedbackContent = () => (
    <div className="grid gap-4 py-4">
      <Textarea
        placeholder="Your feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        className="min-h-[100px] max-h-[150px]"
      />
      <div className="flex justify-center space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSentiment("sad")}
          className={sentiment === "sad" ? "bg-red-100" : ""}
        >
          <FrownIcon className="h-4 w-4" />
          <span className="sr-only">Sad</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSentiment("neutral")}
          className={sentiment === "neutral" ? "bg-yellow-100" : ""}
        >
          <MehIcon className="h-4 w-4" />
          <span className="sr-only">Neutral</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSentiment("happy")}
          className={sentiment === "happy" ? "bg-green-100" : ""}
        >
          <SmileIcon className="h-4 w-4" />
          <span className="sr-only">Happy</span>
        </Button>
      </div>
      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={() => onClose()}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Leave Feedback</DialogTitle>
            <DialogDescription>
              We&apos;d love to hear what went well or how we can improve the
              product experience.
            </DialogDescription>
          </DialogHeader>
          <FeedbackContent />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Leave Feedback</DrawerTitle>
          <DrawerDescription>
            We&apos;d love to hear what went well or how we can improve the
            product experience.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
          <FeedbackContent />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
