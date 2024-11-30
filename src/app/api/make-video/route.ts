import { NextResponse } from "next/server";
import ffmpeg from "fluent-ffmpeg";
import fs from "fs/promises";
import path from "path";
import fetch from "node-fetch";

export async function POST(req: Request) {
  const tempDir = path.join(process.cwd(), "public/videos/temp");
  const outputDir = path.join(process.cwd(), "public/videos");

  try {
    // Validate input
    const { captions, imageUrls, audioUrl } = await req.json();

    if (!imageUrls || !imageUrls.length || !audioUrl) {
      return NextResponse.json(
        { error: "Missing required inputs: imageUrls and audioUrl" },
        { status: 400 },
      );
    }

    // Ensure directories exist
    await fs.mkdir(tempDir, { recursive: true });
    await fs.mkdir(outputDir, { recursive: true });

    // Download images
    const imageFiles = await Promise.all(
      imageUrls.map(async (url: string, index: number) => {
        const imagePath = path.join(tempDir, `image${index + 1}.png`);
        try {
          const res = await fetch(url);
          if (!res.ok) throw new Error(`Failed to fetch image: ${url}`);
          const buffer = await res.arrayBuffer();
          await fs.writeFile(imagePath, Buffer.from(buffer));
          return imagePath;
        } catch (error) {
          console.error(`Error downloading image ${url}:`, error);
          throw error;
        }
      }),
    );

    // Download audio
    const audioPath = path.join(tempDir, "audio.mp3");
    const audioRes = await fetch(audioUrl);
    if (!audioRes.ok) throw new Error(`Failed to fetch audio: ${audioUrl}`);
    const audioBuffer = await audioRes.arrayBuffer();
    await fs.writeFile(audioPath, Buffer.from(audioBuffer));

    // Get audio duration (in seconds)
    const audioDuration = await new Promise<number>((resolve, reject) => {
      ffmpeg.ffprobe(audioPath, (err, metadata) => {
        if (err) {
          reject(new Error(`Failed to probe audio duration: ${err.message}`));
        } else {
          resolve(metadata.format.duration || 0);
        }
      });
    });

    // Calculate duration for each image
    const imageDuration = Math.floor(audioDuration / imageFiles.length);

    // Generate video with FFmpeg
    const outputPath = path.join(outputDir, "output.mp4");
    await new Promise((resolve, reject) => {
      // Create a file with image list for FFmpeg
      const imageListPath = path.join(tempDir, "image_list.txt");
      const imageListContent = imageFiles
        .map((file) => `file '${file}'\nduration ${imageDuration}`)
        .join("\n");

      fs.writeFile(
        imageListPath,
        imageListContent + `\nfile '${imageFiles[imageFiles.length - 1]}'`,
        "utf8",
      )
        .then(() => {
          ffmpeg()
            .input(imageListPath)
            .inputOptions(["-f", "concat"])
            .inputOptions(["-safe", "0"])
            .input(audioPath)
            .outputOptions(["-c:v", "libx264"])
            .outputOptions(["-pix_fmt", "yuv420p"])
            .outputOptions(["-c:a", "aac"])
            .outputOptions(["-shortest"])
            .output(outputPath)
            .on("start", (cmd) => console.log("FFmpeg command:", cmd))
            .on("stderr", (stderrLine) =>
              console.log("FFmpeg stderr:", stderrLine),
            )
            .on("error", (err) => {
              console.error("FFmpeg error:", err);
              reject(err);
            })
            .on("end", resolve)
            .run();
        })
        .catch(reject);
    });

    // Handle captions (this might require a separate pass or additional FFmpeg filter)
    if (captions && captions.length > 0) {
      console.warn("Captions processing is not implemented in this version");
    }

    // Clean up temporary files
    await Promise.all([
      ...imageFiles.map((file) => fs.unlink(file)),
      fs.unlink(audioPath),
    ]);

    return NextResponse.json({
      message: "Video created successfully!",
      videoPath: "/videos/output.mp4",
    });
  } catch (error) {
    console.error("Error generating video:", error);

    // Attempt to clean up temporary files in case of error
    try {
      await fs.rm(tempDir, { recursive: true, force: true });
    } catch (cleanupError) {
      console.error("Error cleaning up temporary directory:", cleanupError);
    }

    return NextResponse.json(
      {
        error:
          "Failed to generate video: " +
          (error instanceof Error ? error.message : String(error)),
      },
      { status: 500 },
    );
  }
}
