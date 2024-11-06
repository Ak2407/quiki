"use server";

import { db } from "@/db";
import { videos } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getVideo = async (videoId: string | undefined) => {
  if (!videoId) {
    throw new Error("Video ID is required");
  }

  try {
    const vid = await db.select().from(videos).where(eq(videos.id, videoId));

    if (vid.length === 0) {
      throw new Error("Video not found");
    }

    return vid[0];
  } catch (error) {
    console.error("Error fetching video", error);
    throw new Error("Error fetching video");
  }
};
