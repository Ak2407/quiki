import { NextResponse } from "next/server";
import ffmpeg from "fluent-ffmpeg";
import fs from "fs/promises";
import path from "path";
import fetch from "node-fetch";

export async function POST(req: Request) {
  try {
    const { captions, imageUrls, audioUrl } = await req.json();

    // Ensure directories exist
    const tempDir = path.join(process.cwd(), "src/app/videos/temp");
    const outputDir = path.join(process.cwd(), "src/app/videos");
    await fs.mkdir(tempDir, { recursive: true });
    await fs.mkdir(outputDir, { recursive: true });

    // Download images and audio
    const imageFiles = await Promise.all(
      imageUrls.map(async (url: string, index: number) => {
        const imagePath = path.join(tempDir, `image${index + 1}.png`);
        const res = await fetch(url);
        const buffer = await res.arrayBuffer();
        await fs.writeFile(imagePath, Buffer.from(buffer));
        return imagePath;
      }),
    );

    const audioPath = path.join(tempDir, "audio.mp3");
    const audioRes = await fetch(audioUrl);
    const audioBuffer = await audioRes.arrayBuffer();
    await fs.writeFile(audioPath, Buffer.from(audioBuffer));

    // Convert captions to SRT
    const captionsPath = path.join(tempDir, "captions.srt");
    const srtContent = jsonToSRT(captions);
    await fs.writeFile(captionsPath, srtContent);

    // Generate video with FFmpeg
    const outputPath = path.join(outputDir, "output.mp4");

    await new Promise((resolve, reject) => {
      ffmpeg()
        .input(`concat:${imageFiles.join("|")}`)
        .input(audioPath)
        .outputOptions("-vf", `subtitles=${captionsPath}`)
        .outputOptions("-c:v", "libx264")
        .outputOptions("-pix_fmt", "yuv420p")
        .outputOptions("-preset", "medium")
        .outputOptions("-crf", "23")
        .outputOptions("-movflags", "+faststart")
        .output(outputPath)
        .on("end", resolve)
        .on("error", reject)
        .run();
    });

    // Clean up temporary files
    for (const file of [...imageFiles, audioPath, captionsPath]) {
      await fs.unlink(file);
    }

    return NextResponse.json({
      message: "Video created successfully!",
      videoPath: "/videos/output.mp4",
    });
  } catch (error) {
    console.error("Error generating video:", error);
    return NextResponse.json(
      { error: "Failed to generate video" },
      { status: 500 },
    );
  }
}

// Helper: Convert JSON captions to SRT format
function jsonToSRT(
  captions: Array<{ start: number; end: number; text: string }>,
): string {
  return captions
    .map((caption, index) => {
      const startTime = msToSRTTime(caption.start);
      const endTime = msToSRTTime(caption.end);
      return `${index + 1}\n${startTime} --> ${endTime}\n${caption.text}\n`;
    })
    .join("\n\n");
}

// Helper: Convert milliseconds to SRT timestamp
function msToSRTTime(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = ms % 1000;

  return (
    [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0"),
    ].join(":") +
    "," +
    milliseconds.toString().padStart(3, "0")
  );
}
