"use server";

import textToSpeech from "@google-cloud/text-to-speech";
import fs from "fs";
import { NextResponse } from "next/server";
import util from "util";

type GenerateAudioProps = {
  script: string;
};

const client = new textToSpeech.TextToSpeechClient({
  apiKey: process.env.GOOGLE_TTS_KEY,
});

export async function getAudio({ script }: GenerateAudioProps) {
  const request = {
    input: { text: script },
    voice: { languageCode: "hi-IN", ssmlGender: "FEMALE" },

    audioConfig: { audioEncoding: "MP3" },
  };

  const [response] = await client.synthesizeSpeech(request);

  const writeFile = util.promisify(fs.writeFile);
  await writeFile("output.mp3", response.audioContent, "binary");

  console.log("Audio content written to file: output.mp3");

  return NextResponse.json({ Result: "Success" });
}
