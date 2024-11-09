"use client";

import { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const CancelButton = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleClick = () => {
    setIsLoading(true);
    router.push("/dashboard");
  };

  const content = (
    <>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Are you absolutely sure?</h2>
        <p className="text-sm text-muted-foreground">
          This action cannot be undone. All your unsaved progress will be
          deleted if you wish to go back.
        </p>
      </div>
      <div className="flex justify-end gap-3">
        {isSmallScreen ? (
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        ) : (
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        )}
        <Button
          variant="destructive"
          onClick={handleClick}
          disabled={isLoading}
        >
          {isLoading ? (
            <LoaderIcon className="animate-spin h-5 w-full mr-2" />
          ) : (
            "Continue"
          )}
        </Button>
      </div>
    </>
  );

  return isSmallScreen ? (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className="p-2 hover:underline underline-offset-4"
        >
          Back To Dashboard
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="p-4">{content}</div>
      </DrawerContent>
    </Drawer>
  ) : (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          className="p-2 hover:underline underline-offset-4"
        >
          Back To Dashboard
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>{content}</AlertDialogContent>
    </AlertDialog>
  );
};

export default CancelButton;
