"use server";

import { db } from "@/db";
import { videos } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getAllVideos = async (userId: string | undefined) => {
  if (!userId) {
    throw new Error("User ID is required");
  }

  try {
    const allVideos = await db
      .select()
      .from(videos)
      .where(eq(videos.userId, userId));

    return allVideos;
  } catch (error) {
    console.error("Error fetching videos", error);
    throw new Error("Error fetching videos");
  }
};

export const getRecentlyMade = async (userId: string | undefined) => {
  if (!userId) {
    throw new Error("User ID is required");
  }

  try {
    const allVideos = await db
      .select()
      .from(videos)
      .where(eq(videos.userId, userId))
      .limit(6);

    return allVideos;
  } catch (error) {
    console.error("Error fetching videos", error);
    throw new Error("Error fetching videos");
  }
};

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
