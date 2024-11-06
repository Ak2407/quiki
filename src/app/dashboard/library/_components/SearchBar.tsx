"use client";

import * as React from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type SearchBarProps = {
  title: string;
  id: string;
};

export function SearchBar({ videos }: { videos: SearchBarProps[] }) {
  const router = useRouter();

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const onSelect = (id: string) => {
    setOpen(false);
    router.push(`/dashboard/${id}`);
  };

  return (
    <>
      <Button
        variant="outline"
        className="w-[80%] sm:w-[300px] rounded-lg "
        onClick={() => setOpen(true)}
      >
        <span className="flex w-full items-center justify-between text-sm text-neutral-600 ">
          <p>Search for your video... </p>

          <kbd className="hidden sm:inline-flex pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Video Titles">
            {videos.map((vid) => (
              <CommandItem
                key={vid.id}
                onSelect={() => {
                  onSelect(vid.id);
                }}
              >
                {vid.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
