import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { NextRequest, NextResponse } from "next/server";

const model = google("gemini-1.5-flash");

export async function POST(req: NextRequest) {
  const { topic, language, duration } = await req.json();

  const prompt = `Generate a JSON array named "result" for a ${duration} video on the topic: ${topic} in language ${language}, with each element being an object containing "imagePrompt" and "contentText" fields. Output only the JSON object—no code blocks, no additional text, just the pure JSON response.`;

  try {
    const { text } = await generateText({
      model,
      prompt,
    });

    // Sanitize the response by removing code block markers
    let sanitizedText = text.trim();
    if (sanitizedText.startsWith("```")) {
      sanitizedText = sanitizedText.replace(/```(json)?/g, "").trim();
    }

    // Parse the sanitized JSON string
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
