import { NextRequest, NextResponse } from "next/server";

import textToSpeech from "@google-cloud/text-to-speech";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../../firebase.config";

const languageCodes = {
  English: "en-US",
  Czech: "cs-CZ",
  Danish: "da-DK",
  Dutch: "nl-NL",
  French: "fr-FR",
  German: "de-DE",
  Greek: "el-GR",
  Hindi: "hi-IN",
  Indonesian: "id-ID",
  Italian: "it-IT",
  Japanese: "ja-JP",
  Norwegian: "nb-NO",
  Polish: "pl-PL",
  Portuguese: "pt-PT",
  Russian: "ru-RU",
  Spanish: "es-ES",
  Swedish: "sv-SE",
  Turkish: "tr-TR",
  Ukrainian: "uk-UA",
};

const client = new textToSpeech.TextToSpeechClient({
  apiKey: process.env.GOOGLE_TTS_KEY,
});

export async function POST(req: NextRequest) {
  const { script, id, gender, language } = await req.json();

  const storageRef = ref(storage, "quiki/audio/" + id + ".mp3");

  try {
    const request = {
      input: { text: script },
      voice: { languageCode: languageCodes[language], ssmlGender: gender },

      audioConfig: { audioEncoding: "MP3" },
    };

    const [response] = await client.synthesizeSpeech(request);

    const audioBuffer = Buffer.from(response.audioContent, "binary");

    await uploadBytes(storageRef, audioBuffer, { contentType: "audio/mp3" });

    const downloadUrl = await getDownloadURL(storageRef);

    console.log(downloadUrl);

    return NextResponse.json({ result: downloadUrl });
  } catch (error) {
    console.error("Error getting the script audio", error);
    return NextResponse.json(
      { error: "Failed to get script audio" },
      { status: 500 },
    );
  }
}
