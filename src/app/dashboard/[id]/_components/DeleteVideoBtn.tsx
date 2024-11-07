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
import { useParams, useRouter } from "next/navigation";
import { deleteVideo } from "@/actions/delete-vid";
import { toast } from "sonner";
import { LoaderIcon } from "lucide-react";

const DeleteVideoBtn = () => {
  const router = useRouter();

  const params = useParams();
  const { id } = params;

  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const deleteVid = async () => {
    try {
      setLoading(true);
      await deleteVideo(id.toString());
      toast.success("Video deleted successfully!");
      router.push("/dashboard/library");
    } catch (error) {
      console.error("Error deleting video:", error);
      toast.error("Error deleting video!");
    } finally {
      setLoading(false);
    }
  };

  const content = (
    <>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Are you absolutely sure?</h2>
        <p className="text-sm text-muted-foreground">
          This action will delete this video from your account. This action is
          irreversible.
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
        <Button onClick={deleteVid} variant="destructive">
          Continue
        </Button>
      </div>
    </>
  );

  const triggerButton = (
    <Button variant="destructive" size="sm" disabled={loading}>
      {loading ? (
        <LoaderIcon className="animate-spin h-5 w-5 mr-2" />
      ) : (
        <h1>Delete</h1>
      )}
    </Button>
  );

  return isSmallScreen ? (
    <Drawer>
      <DrawerTrigger asChild>{triggerButton}</DrawerTrigger>
      <DrawerContent>
        <div className="p-4">{content}</div>
      </DrawerContent>
    </Drawer>
  ) : (
    <AlertDialog>
      <AlertDialogTrigger asChild>{triggerButton}</AlertDialogTrigger>
      <AlertDialogContent>{content}</AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteVideoBtn;
