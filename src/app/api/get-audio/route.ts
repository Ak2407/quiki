import { NextRequest, NextResponse } from "next/server";

import textToSpeech from "@google-cloud/text-to-speech";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../../firebase.config";

const client = new textToSpeech.TextToSpeechClient({
  apiKey: process.env.GOOGLE_TTS_KEY,
});

export async function POST(req: NextRequest) {
  const { script, id } = await req.json();

  const storageRef = ref(storage, "quiki/" + id + ".mp3");

  try {
    const request = {
      input: { text: script },
      voice: { languageCode: "hi-IN", ssmlGender: "FEMALE" },

      audioConfig: { audioEncoding: "MP3" },
    };

    const [response] = await client.synthesizeSpeech(request);

    const audioBuffer = Buffer.from(response.audioContent, "binary");

    await uploadBytes(storageRef, audioBuffer, { contentType: "audio/mp3" });

    const downloadUrl = await getDownloadURL(storageRef);

    console.log(downloadUrl);

    return NextResponse.json({ Result: downloadUrl });
  } catch (error) {
    console.error("Error getting the script audio", error);
    return NextResponse.json(
      { error: "Failed to get script audio" },
      { status: 500 },
    );
  }
}