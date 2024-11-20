"use server";

import { db } from "@/db";
import { videoData } from "@/db/schema";

type ScriptItem = {
  contentText: string;
  imagePrompt: string;
};

type VidData = {
  script: ScriptItem[];
  audioUrl: string;
  imageList: string[];
  caption: string;
};

export const addVideoData = async (vidData: VidData, userEmail: string) => {
  if (!userEmail) {
    throw new Error("User email is required");
  }

  try {
    const result = await db
      .insert(videoData)
      .values({
        script: vidData.script,
        audioUrl: vidData.audioUrl,
        imageList: vidData.imageList,
        captions: vidData.caption,
        createdBy: userEmail,
      })
      .returning({ id: videoData.id });

    return { result: result };
  } catch (error) {
    console.error("Error adding video data", error);
    throw new Error("Error adding video data");
  }
};
