import { NextResponse, NextRequest } from "next/server";
import Replicate from "replicate";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 },
      );
    }

    if (!process.env.REPLICATE_API_TOKEN) {
      return NextResponse.json(
        { error: "REPLICATE_API_TOKEN is not configured" },
        { status: 500 },
      );
    }

    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN,
    });

    const prediction = await replicate.predictions.create({
      version:
        "5599ed30703defd1d160a25a63321b4dec97101d98b4674bcc56e41f62f35637",
      input: {
        prompt: prompt,
        width: 1280,
        height: 1024,
      },
    });

    let result = await replicate.predictions.get(prediction.id);

    while (result.status !== "succeeded" && result.status !== "failed") {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
      result = await replicate.predictions.get(prediction.id);
      console.log("Status:", result.status);
    }

    if (result.status === "failed") {
      return NextResponse.json(
        { error: "Image generation failed" },
        { status: 500 },
      );
    }

    console.log("Generation complete:", result.output);

    return NextResponse.json({
      result: result.output,
      status: result.status,
    });
  } catch (error) {
    console.error("Error generating image:", error);
    return NextResponse.json(
      { error: "Failed to generate image", details: error },
      { status: 500 },
    );
  }
}
