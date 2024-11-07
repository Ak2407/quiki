"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { getVideo } from "@/actions/get-video";
import { Skeleton } from "@/components/ui/skeleton";
import { useParams } from "next/navigation";
import VideoCard from "./VideoCard";
import { UpdateVideoFormValues, updateVideoSchema } from "@/db/schema";
import { LoaderIcon } from "lucide-react";
import { updateVideo } from "@/actions/update-video";
import { toast } from "sonner";

export default function UpdateForm() {
  const params = useParams();
  const { id } = params;
  const [vidUrl, setVidUrl] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const form = useForm<UpdateVideoFormValues>({
    resolver: zodResolver(updateVideoSchema),
    defaultValues: {
      id: id.toString(),
      title: "",
      caption: "",
      script: "",
    },
  });

  useEffect(() => {
    const fetchVideo = async () => {
      const video = await getVideo(id.toString());
      form.reset({
        id: id.toString(),
        title: video.title,
        caption: video.caption,
        script: video.script,
      });
      setVidUrl(video.videoUrl);
      setIsLoading(false);
    };
    fetchVideo();
  }, [id, form]);

  const onSubmit = async (data: UpdateVideoFormValues) => {
    try {
      setIsFormSubmitted(true);
      await updateVideo(data);
      toast.success("Video updated successfully!");
    } catch (error) {
      console.error("Error updating video:", error);
      toast.error("Error updating video!");
    } finally {
      setIsFormSubmitted(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-10 mx-auto px-4 py-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Skeleton className="h-[400px] mx-auto w-60" />
            <Skeleton className="h-[40px] mx-auto w-60" />
          </div>
          <div className="space-y-6">
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-60 w-full" />
            <Skeleton className="h-[40px] mx-auto w-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {vidUrl && <VideoCard src={vidUrl} />}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>TITLE</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className={cn(
                      field.value.length > 100 && "border-red-500 text-red-500",
                      form.formState.errors.title && "border-red-500",
                    )}
                  />
                </FormControl>
                <div className="flex justify-between items-center text-sm">
                  <FormMessage />
                  <span
                    className={cn(
                      "text-right",
                      field.value.length > 100 || form.formState.errors.title
                        ? "text-red-500"
                        : "text-muted-foreground",
                    )}
                  >
                    {field.value.length} / 100
                  </span>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="caption"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CAPTION</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className={cn(
                      field.value.length > 200 && "border-red-500 text-red-500",
                      form.formState.errors.caption && "border-red-500",
                    )}
                  />
                </FormControl>
                <div className="flex justify-between items-center text-sm">
                  <FormMessage />
                  <span
                    className={cn(
                      "text-right",
                      field.value.length > 200 || form.formState.errors.caption
                        ? "text-red-500"
                        : "text-muted-foreground",
                    )}
                  >
                    {field.value.length} / 200
                  </span>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="script"
            render={({ field }) => (
              <FormItem>
                <FormLabel>SCRIPT</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    className={cn(
                      "min-h-[200px]",
                      field.value.length > 1200 &&
                        "border-red-500 text-red-500",
                      form.formState.errors.script && "border-red-500",
                    )}
                  />
                </FormControl>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-blue-500">
                    Note: We recommend verifying AI-generated scripts for
                    accuracy.
                  </span>
                  <span
                    className={cn(
                      "text-right",
                      field.value.length > 1200 || form.formState.errors.script
                        ? "text-red-500"
                        : "text-muted-foreground",
                    )}
                  >
                    {field.value.length} / 1200
                  </span>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            variant="primary"
            className="w-full bg-sky-700 hover:bg-sky-600"
            type="submit"
            disabled={isFormSubmitted}
          >
            {isFormSubmitted ? (
              <LoaderIcon className="animate-spin h-5 w-5 mr-2" />
            ) : (
              <h1>Update Video</h1>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
