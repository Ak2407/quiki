"use server";

import { db } from "@/db";
import { videos } from "@/db/schema";
import { eq } from "drizzle-orm";

export const deleteVideo = async (vidId: string) => {
  if (!vidId) {
    throw new Error("Video ID is required");
  }

  try {
    await db.delete(videos).where(eq(videos.id, vidId));

    return { success: true, message: "Video deleted successfully" };
  } catch (error) {
    console.error("Error deleting video", error);
    throw new Error("Error deleting video");
  }
};
