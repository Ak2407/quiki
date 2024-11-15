import { AssemblyAI } from "assemblyai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { audioFileUrl } = await req.json();

  try {
    const client = new AssemblyAI({
      apiKey: process.env.ASSEMBLY_AI_API_KEY!,
    });

    const data = {
      audio: audioFileUrl,
    };

    const transcript = await client.transcripts.transcribe(data);

    return NextResponse.json({ Result: transcript.words });
  } catch (error) {
    console.error("Error getting the caption", error);
    return NextResponse.json(
      { error: "Failed to get caption" },
      { status: 500 },
    );
  }
}
