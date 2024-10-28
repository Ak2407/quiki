"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { cn } from "@/lib/utils";

const UpdateForm = () => {
  const [title, setTitle] = useState("Scary Stories");
  const [caption, setCaption] = useState(
    "Dive into Emma's spine-tingling adventure as she faces the shadows lurking in",
  );
  const [script, setScript] = useState(
    "This haunted tale will keep you up at night, trembling under your blankets. In the darkness of the old house, something sinister lurks—a whisper in the shadows that beckons the unwary. Emma, our brave protagonist, stumbled upon this decrepit structure during her search for peace. Instead, she found only chilling silence and the scent of decay. As she stepped inside, the floorboards creaked beneath her weight as if protesting her intrusion. The air turned ice-cold, wrapping around her like a suffocating shroud. A portrait hung crookedly on the wall; its eyes seemed to follow her every move. Emma",
  );

  const limits = {
    title: 100,
    caption: 200,
    script: 1200,
  };

  const getCharacterCount = (text: string, limit: number) => {
    const remaining = limit - text.length;
    return {
      count: text.length,
      remaining,
      isExceeded: remaining < 0,
    };
  };

  const renderInput = (
    value: string,
    setValue: (value: string) => void,
    label: string,
    limit: number,
    isTextarea = false,
  ) => {
    const { count, isExceeded } = getCharacterCount(value, limit);
    const InputComponent = isTextarea ? Textarea : Input;

    return (
      <div>
        <label className="text-sm font-medium text-muted-foreground mb-2 block">
          {label}
        </label>
        <InputComponent
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={cn(
            "mb-1",
            isExceeded &&
              "border border-red-500 text-red-500 bg-red-50 placeholder:text-red-300",
            isTextarea && "min-h-[200px]",
          )}
        />
        <div className="flex justify-between items-center text-sm">
          {label === "SCRIPT" && (
            <span className="text-blue-500">
              Note: We recommend to verify AI generated scripts for accuracy.
            </span>
          )}
          <span
            className={cn(
              "text-right",
              isExceeded ? "text-red-500" : "text-muted-foreground",
            )}
          >
            {count} / {limit}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {renderInput(title, setTitle, "TITLE", limits.title)}
      {renderInput(caption, setCaption, "CAPTION", limits.caption)}
      {renderInput(script, setScript, "SCRIPT", limits.script, true)}

      <Button className="w-full bg-sky-700 hover:bg-sky-600">
        Update Video
      </Button>
    </div>
  );
};

export default UpdateForm;
