"use server";

import { db } from "@/db";
import { videos, updateVideoSchema, UpdateVideoFormValues } from "@/db/schema";
import { eq } from "drizzle-orm";

export const updateVideo = async (vidData: UpdateVideoFormValues) => {
  if (!vidData.id) {
    throw new Error("Video ID is required");
  }

  const validatedData = updateVideoSchema.parse(vidData);

  try {
    await db

      .update(videos)
      .set({
        title: validatedData.title,
        caption: validatedData.caption,
        script: validatedData.script,
      })
      .where(eq(videos.id, validatedData.id));

    return { success: true, message: "Video updated successfully" };
  } catch (error) {
    console.error("Error updating video", error);
    throw new Error("Error updating video");
  }
};
