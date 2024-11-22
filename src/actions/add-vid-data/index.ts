"use server";

import { db } from "@/db";
import { videoData } from "@/db/schema";

type ScriptItem = {
  contentText: string;
  imagePrompt: string;
};

type VidData = {
  title: string;
  topic: string;
  voice: string;
  language: string;
  script: ScriptItem[];
  audioUrl: string;
  imageList: string[];
  caption: string;
};

export const addVideoData = async (vidData: VidData, userEmail: string) => {
  if (!userEmail) {
    throw new Error("User Email is required");
  }

  try {
    const result = await db
      .insert(videoData)
      .values({
        title: vidData.title,
        topic: vidData.topic,
        voice: vidData.voice,
        language: vidData.language,
        script: vidData.script,
        audioUrl: vidData.audioUrl,
        imageList: vidData.imageList,
        captions: vidData.caption,
        userEmail: userEmail,
      })
      .returning({ id: videoData.id });

    return { result: result };
  } catch (error) {
    console.error("Error adding video data", error);
    throw new Error("Error adding video data");
  }
};
