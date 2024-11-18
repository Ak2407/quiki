import { NextResponse, NextRequest } from "next/server";
import Replicate from "replicate";
import axios from "axios";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { storage } from "../../../../firebase.config";

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
        height: 1280,
        width: 1024,
      },
    });

    let result = await replicate.predictions.get(prediction.id);

    while (result.status !== "succeeded" && result.status !== "failed") {
      await new Promise((resolve) => setTimeout(resolve, 1000));
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

    //Save to firebase
    console.log("Saving to firebase");

    const base64Image =
      "data:image/png;base64," + (await ConvertImage(result.output));
    const fileName = "quiki/images/" + Date.now() + ".png";
    const storageRef = ref(storage, fileName);

    await uploadString(storageRef, base64Image, "data_url");

    const downloadUrl = await getDownloadURL(storageRef);
    console.log("Download URL:", downloadUrl);

    return NextResponse.json({
      result: downloadUrl,
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

const ConvertImage = async (imageUrl: string) => {
  try {
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });

    const base64Image = Buffer.from(response.data).toString("base64");

    return base64Image;
  } catch (error) {
    console.error("Error converting image:", error);
  }
};
