import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { NextRequest, NextResponse } from "next/server";

const model = google("gemini-1.5-flash");

export async function POST(req: NextRequest) {
  const { topic, language, duration } = await req.json();

  const prompt = `Generate a JSON array named "result" for a ${duration} video on the topic: ${topic} in language ${language}, with each element being an object containing "imagePrompt" and "contentText" fields. The imagePrompt content should be in english and contentText content should be in the ${language}. Also make the story you are generating on ${topic} be unique and different , take some abstract topics and make story on it. should be Output only the JSON object—no code blocks, no additional text, just the pure JSON response.`;

  try {
    const { text } = await generateText({
      model,
      prompt,
    });

    let sanitizedText = text.trim();
    if (sanitizedText.startsWith("```")) {
      sanitizedText = sanitizedText.replace(/```(json)?/g, "").trim();
    }

    const output = JSON.parse(sanitizedText);

    return NextResponse.json(output);
  } catch (error) {
    console.error("Error generating video script", error);
    return NextResponse.json(
      { error: "Failed to generate video script" },
      { status: 500 },
    );
  }
}
