"use server";

import { db } from "@/db";
import { videoData } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getAllVideos = async (userEmail: string | undefined) => {
  if (!userEmail) {
    throw new Error("User Email is required");
  }

  try {
    const allVideos = await db
      .select()
      .from(videoData)
      .where(eq(videoData.userEmail, userEmail));

    return allVideos;
  } catch (error) {
    console.error("Error fetching videos", error);
    throw new Error("Error fetching videos");
  }
};

export const getRecentlyMade = async (userEmail: string | undefined) => {
  if (!userEmail) {
    throw new Error("User Email is required");
  }

  try {
    const allVideos = await db
      .select()
      .from(videoData)
      .where(eq(videoData.userEmail, userEmail))
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
    const vid = await db
      .select()
      .from(videoData)
      .where(eq(videoData.id, videoId));

    if (vid.length === 0) {
      throw new Error("Video not found");
    }

    return vid[0];
  } catch (error) {
    console.error("Error fetching video", error);
    throw new Error("Error fetching video");
  }
};
