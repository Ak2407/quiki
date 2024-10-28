"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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

const CancelButton = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Adjust this value as needed
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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
        <Link href="/dashboard">
          <Button variant="destructive">Continue</Button>
        </Link>
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
