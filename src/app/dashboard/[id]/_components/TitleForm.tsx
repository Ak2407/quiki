"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ElementRef, useRef, useState } from "react";

const TitleForm = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("Scary Stories");

  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  const onSubmit = () => {
    setTitle(inputRef.current?.value);
    setIsEditing(!isEditing);
  };

  const onBlur = () => {
    formRef.current?.requestSubmit();
  };

  if (isEditing) {
    return (
      <form action={onSubmit} ref={formRef}>
        <Input defaultValue={title} onBlur={onBlur} ref={inputRef} autoFocus />
      </form>
    );
  }

  return (
    <Button
      className="bg-white text-black hover:bg-white/50 p-0 text-2xl shadow-none"
      onClick={() => setIsEditing(true)}
    >
      {title}
    </Button>
  );
};

export default TitleForm;
