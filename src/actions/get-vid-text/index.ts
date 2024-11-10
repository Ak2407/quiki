"use server";

import { google } from "@ai-sdk/google";
import { generateText } from "ai";

const model = google("gemini-1.5-flash");

type GenerateTextProps = {
  topic: string;
  language: string;
  duration: string;
};

export async function getVideoText({
  topic,
  language,
  duration,
}: GenerateTextProps) {
  const prompt = `Write a script to generate ${duration} video on topic : ${topic} in language ${language} along with Al image prompt in Realistic format for each scene and give me result in JSON format with imagePrompt and Content Text as field`;

  const { text } = await generateText({
    model,
    prompt,
  });
  return text;
}
