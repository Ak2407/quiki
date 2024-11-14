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
  const prompt = `Generate a JSON array named "result" for a ${duration} video on the topic: ${topic} in language ${language}, with each element being an object containing "imagePrompt" and "contentText" fields. Output only the JSON object—no code blocks, no additional text, just the pure JSON response.`;

  const { text } = await generateText({
    model,
    prompt,
  });

  return JSON.parse(text);
}
