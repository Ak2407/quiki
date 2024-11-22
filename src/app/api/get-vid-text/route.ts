import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { NextRequest, NextResponse } from "next/server";

const model = google("gemini-1.5-flash");

export async function POST(req: NextRequest) {
  const { topic, language, duration } = await req.json();

  const prompt = `Generate a JSON array named "result" for a ${duration} video on the topic: ${topic} in language ${language}, with each element being an object containing "imagePrompt" and "contentText" fields. In the JSON, also include a "title" which is a short title for the story you are generating. The "imagePrompt" content should be in English, and "contentText" content should be in ${language}. The story you generate must be creative, unique, and explore diverse perspectives or subtopics within ${topic}. Add abstract elements, metaphorical scenarios, or unusual perspectives to make the story stand out. Use random aspects like surprising characters, locations, or twists to add variety. Output only the JSON object—no code blocks, no additional text, just the pure JSON response.`;

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
