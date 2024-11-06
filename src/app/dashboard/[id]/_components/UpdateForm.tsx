"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type UpdateFormProps = {
  title: string;
  caption: string;
  script: string;
};

const UpdateForm = ({
  title: initialTitle,
  caption: initialCaption,
  script: initialScript,
}: UpdateFormProps) => {
  const [title, setTitle] = useState(initialTitle);
  const [caption, setCaption] = useState(initialCaption);
  const [script, setScript] = useState(initialScript);

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
