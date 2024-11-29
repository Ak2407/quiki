"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BottomBar from "./_components/BottomBar";
import CancelButton from "./_components/CancelButton";
import Topic from "./_components/Topic";
import Language from "./_components/Language";
import { steps } from "@/lib/constants";
import { useRouter } from "next/navigation";
import Duration from "./_components/Duration";
import { toast } from "sonner";
import axios from "axios";
import { useSession } from "next-auth/react";
import { v4 as uuidv4 } from "uuid";
import { addVideoData } from "@/actions/add-vid-data";
import Gender from "./_components/Gender";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Loader } from "lucide-react";
import { getVideo } from "@/actions/get-video";

const imageUrls = [
  "https://firebasestorage.googleapis.com/v0/b/quiki-1f9af.firebasestorage.app/o/quiki%2Fimages%2F1732291098615.png?alt=media&token=2f9b71e9-6827-44ea-b91e-d65516741ad2",
  "https://firebasestorage.googleapis.com/v0/b/quiki-1f9af.firebasestorage.app/o/quiki%2Fimages%2F1732291096596.png?alt=media&token=d2109d68-9561-4157-b8f1-980fca3d99e4",
  "https://firebasestorage.googleapis.com/v0/b/quiki-1f9af.firebasestorage.app/o/quiki%2Fimages%2F1732291096703.png?alt=media&token=3d5d1ba4-a1ef-49f4-8bcc-c3503e557977",
  "https://firebasestorage.googleapis.com/v0/b/quiki-1f9af.firebasestorage.app/o/quiki%2Fimages%2F1732291096802.png?alt=media&token=83f8e4b1-3b22-4ca0-84ff-4149b6938f54",
  "https://firebasestorage.googleapis.com/v0/b/quiki-1f9af.firebasestorage.app/o/quiki%2Fimages%2F1732291096917.png?alt=media&token=7ddeb093-09b6-4017-88bf-1092ee5a924b",
  "https://firebasestorage.googleapis.com/v0/b/quiki-1f9af.firebasestorage.app/o/quiki%2Fimages%2F1732291099296.png?alt=media&token=5b0dec42-14c2-4bd0-a369-b507b38158de",
  "https://firebasestorage.googleapis.com/v0/b/quiki-1f9af.firebasestorage.app/o/quiki%2Fimages%2F1732291103062.png?alt=media&token=67a57c11-578c-4967-bdac-d3f08271334d",
];

const audioUrl =
  "https://firebasestorage.googleapis.com/v0/b/quiki-1f9af.firebasestorage.app/o/quiki%2Faudio%2F1ff678f6-47a1-4c54-a3df-5b64ee86fbb0.mp3?alt=media&token=283c6f03-65e9-4b56-aee9-e07e5d3a51a5";

const captions = [
  {
    text: "Did",
    start: 280,
    end: 344,
    confidence: 0.99964,
    speaker: null,
  },
  {
    text: "you",
    start: 344,
    end: 440,
    confidence: 0.99985,
    speaker: null,
  },
  {
    text: "know",
    start: 440,
    end: 568,
    confidence: 0.9999,
    speaker: null,
  },
  {
    text: "the",
    start: 568,
    end: 728,
    confidence: 0.99896,
    speaker: null,
  },
  {
    text: "word",
    start: 728,
    end: 1064,
    confidence: 0.99364,
    speaker: null,
  },
  {
    text: "set",
    start: 1097,
    end: 1585,
    confidence: 0.93689,
    speaker: null,
  },
  {
    text: "has",
    start: 1705,
    end: 1961,
    confidence: 0.9997,
    speaker: null,
  },
  {
    text: "over",
    start: 1993,
    end: 2209,
    confidence: 0.9998,
    speaker: null,
  },
  {
    text: "400",
    start: 2257,
    end: 2825,
    confidence: 0.99974,
    speaker: null,
  },
  {
    text: "different",
    start: 2905,
    end: 3169,
    confidence: 0.99988,
    speaker: null,
  },
  {
    text: "meanings?",
    start: 3217,
    end: 3885,
    confidence: 0.99964,
    speaker: null,
  },
  {
    text: "Imagine",
    start: 4225,
    end: 4769,
    confidence: 0.99622,
    speaker: null,
  },
  {
    text: "a",
    start: 4817,
    end: 4977,
    confidence: 0.99979,
    speaker: null,
  },
  {
    text: "world",
    start: 5001,
    end: 5209,
    confidence: 0.99996,
    speaker: null,
  },
  {
    text: "where",
    start: 5257,
    end: 5489,
    confidence: 0.99995,
    speaker: null,
  },
  {
    text: "every",
    start: 5537,
    end: 5889,
    confidence: 0.9985,
    speaker: null,
  },
  {
    text: "set",
    start: 5977,
    end: 6345,
    confidence: 0.94062,
    speaker: null,
  },
  {
    text: "was",
    start: 6425,
    end: 6617,
    confidence: 0.99979,
    speaker: null,
  },
  {
    text: "a",
    start: 6641,
    end: 6777,
    confidence: 0.99943,
    speaker: null,
  },
  {
    text: "unique,",
    start: 6801,
    end: 7281,
    confidence: 0.93237,
    speaker: null,
  },
  {
    text: "vibrant",
    start: 7393,
    end: 7865,
    confidence: 0.77234,
    speaker: null,
  },
  {
    text: "dance",
    start: 7945,
    end: 8273,
    confidence: 0.99967,
    speaker: null,
  },
  {
    text: "move,",
    start: 8329,
    end: 8689,
    confidence: 0.99419,
    speaker: null,
  },
  {
    text: "a",
    start: 8777,
    end: 8977,
    confidence: 0.95993,
    speaker: null,
  },
  {
    text: "chaotic,",
    start: 9001,
    end: 9561,
    confidence: 0.98948,
    speaker: null,
  },
  {
    text: "beautiful",
    start: 9633,
    end: 10033,
    confidence: 0.84285,
    speaker: null,
  },
  {
    text: "ballet",
    start: 10089,
    end: 10385,
    confidence: 0.6511,
    speaker: null,
  },
  {
    text: "of",
    start: 10425,
    end: 10601,
    confidence: 0.99988,
    speaker: null,
  },
  {
    text: "definitions.",
    start: 10633,
    end: 11445,
    confidence: 0.99857,
    speaker: null,
  },
  {
    text: "The",
    start: 11785,
    end: 12121,
    confidence: 0.9997,
    speaker: null,
  },
  {
    text: "English",
    start: 12153,
    end: 12481,
    confidence: 0.62234,
    speaker: null,
  },
  {
    text: "language",
    start: 12553,
    end: 12889,
    confidence: 0.81367,
    speaker: null,
  },
  {
    text: "is",
    start: 12937,
    end: 13169,
    confidence: 0.99932,
    speaker: null,
  },
  {
    text: "constantly",
    start: 13217,
    end: 13713,
    confidence: 0.99977,
    speaker: null,
  },
  {
    text: "evolving,",
    start: 13769,
    end: 14337,
    confidence: 0.38819,
    speaker: null,
  },
  {
    text: "like",
    start: 14441,
    end: 14681,
    confidence: 0.9994,
    speaker: null,
  },
  {
    text: "a",
    start: 14713,
    end: 14833,
    confidence: 0.99987,
    speaker: null,
  },
  {
    text: "grumpy",
    start: 14849,
    end: 15305,
    confidence: 0.98892,
    speaker: null,
  },
  {
    text: "cloud",
    start: 15345,
    end: 15593,
    confidence: 0.6511,
    speaker: null,
  },
  {
    text: "perpetually",
    start: 15649,
    end: 16297,
    confidence: 0.28607,
    speaker: null,
  },
  {
    text: "shedding",
    start: 16361,
    end: 16833,
    confidence: 0.99524,
    speaker: null,
  },
  {
    text: "words.",
    start: 16889,
    end: 17525,
    confidence: 0.99147,
    speaker: null,
  },
  {
    text: "But",
    start: 17865,
    end: 18177,
    confidence: 0.99921,
    speaker: null,
  },
  {
    text: "even",
    start: 18201,
    end: 18385,
    confidence: 0.99994,
    speaker: null,
  },
  {
    text: "the",
    start: 18425,
    end: 18601,
    confidence: 0.99976,
    speaker: null,
  },
  {
    text: "smallest",
    start: 18633,
    end: 19057,
    confidence: 0.9999,
    speaker: null,
  },
  {
    text: "creature,",
    start: 19121,
    end: 19537,
    confidence: 0.9997,
    speaker: null,
  },
  {
    text: "like",
    start: 19601,
    end: 19777,
    confidence: 0.99806,
    speaker: null,
  },
  {
    text: "a",
    start: 19801,
    end: 19913,
    confidence: 0.99976,
    speaker: null,
  },
  {
    text: "determined",
    start: 19929,
    end: 20369,
    confidence: 0.46973,
    speaker: null,
  },
  {
    text: "ant,",
    start: 20417,
    end: 20793,
    confidence: 0.97061,
    speaker: null,
  },
  {
    text: "can",
    start: 20889,
    end: 21097,
    confidence: 0.99988,
    speaker: null,
  },
  {
    text: "carry",
    start: 21121,
    end: 21313,
    confidence: 0.99993,
    speaker: null,
  },
  {
    text: "the",
    start: 21329,
    end: 21433,
    confidence: 0.99991,
    speaker: null,
  },
  {
    text: "weight",
    start: 21449,
    end: 21681,
    confidence: 0.69639,
    speaker: null,
  },
  {
    text: "of",
    start: 21713,
    end: 21833,
    confidence: 0.99986,
    speaker: null,
  },
  {
    text: "its",
    start: 21849,
    end: 22049,
    confidence: 0.99863,
    speaker: null,
  },
  {
    text: "vast",
    start: 22097,
    end: 22401,
    confidence: 0.99845,
    speaker: null,
  },
  {
    text: "vocabulary.",
    start: 22473,
    end: 23657,
    confidence: 0.99827,
    speaker: null,
  },
  {
    text: "English",
    start: 23841,
    end: 24225,
    confidence: 0.95195,
    speaker: null,
  },
  {
    text: "is",
    start: 24265,
    end: 24417,
    confidence: 0.99209,
    speaker: null,
  },
  {
    text: "a",
    start: 24441,
    end: 24553,
    confidence: 0.99948,
    speaker: null,
  },
  {
    text: "linguistic",
    start: 24569,
    end: 25065,
    confidence: 0.95316,
    speaker: null,
  },
  {
    text: "melting",
    start: 25105,
    end: 25449,
    confidence: 0.9983,
    speaker: null,
  },
  {
    text: "pot,",
    start: 25497,
    end: 25999,
    confidence: 0.67912,
    speaker: null,
  },
  {
    text: "a",
    start: 26137,
    end: 26363,
    confidence: 0.98342,
    speaker: null,
  },
  {
    text: "mischievous",
    start: 26379,
    end: 26867,
    confidence: 0.6582,
    speaker: null,
  },
  {
    text: "goblin",
    start: 26931,
    end: 27347,
    confidence: 0.99579,
    speaker: null,
  },
  {
    text: "stew",
    start: 27411,
    end: 27691,
    confidence: 0.81188,
    speaker: null,
  },
  {
    text: "of",
    start: 27723,
    end: 27891,
    confidence: 0.99432,
    speaker: null,
  },
  {
    text: "borrowed",
    start: 27923,
    end: 28291,
    confidence: 0.96628,
    speaker: null,
  },
  {
    text: "words",
    start: 28323,
    end: 28595,
    confidence: 0.99989,
    speaker: null,
  },
  {
    text: "from",
    start: 28635,
    end: 28835,
    confidence: 0.99987,
    speaker: null,
  },
  {
    text: "across",
    start: 28875,
    end: 29099,
    confidence: 0.99992,
    speaker: null,
  },
  {
    text: "the",
    start: 29147,
    end: 29331,
    confidence: 0.99992,
    speaker: null,
  },
  {
    text: "globe.",
    start: 29363,
    end: 30067,
    confidence: 0.99941,
    speaker: null,
  },
  {
    text: "Each",
    start: 30251,
    end: 30595,
    confidence: 0.99964,
    speaker: null,
  },
  {
    text: "word",
    start: 30635,
    end: 30899,
    confidence: 0.99664,
    speaker: null,
  },
  {
    text: "whispers",
    start: 30947,
    end: 31395,
    confidence: 0.893,
    speaker: null,
  },
  {
    text: "a",
    start: 31435,
    end: 31611,
    confidence: 0.99968,
    speaker: null,
  },
  {
    text: "story",
    start: 31643,
    end: 31811,
    confidence: 0.99991,
    speaker: null,
  },
  {
    text: "of",
    start: 31843,
    end: 32011,
    confidence: 0.9998,
    speaker: null,
  },
  {
    text: "its",
    start: 32043,
    end: 32211,
    confidence: 0.99966,
    speaker: null,
  },
  {
    text: "origins,",
    start: 32243,
    end: 32875,
    confidence: 0.99926,
    speaker: null,
  },
  {
    text: "a",
    start: 32995,
    end: 33251,
    confidence: 0.98954,
    speaker: null,
  },
  {
    text: "testament",
    start: 33283,
    end: 33691,
    confidence: 0.99959,
    speaker: null,
  },
  {
    text: "to",
    start: 33723,
    end: 33891,
    confidence: 0.99992,
    speaker: null,
  },
  {
    text: "global",
    start: 33923,
    end: 34259,
    confidence: 0.99995,
    speaker: null,
  },
  {
    text: "interconnectedness.",
    start: 34347,
    end: 35627,
    confidence: 0.38335,
    speaker: null,
  },
  {
    text: "Imagine",
    start: 35811,
    end: 36371,
    confidence: 0.53089,
    speaker: null,
  },
  {
    text: "English",
    start: 36443,
    end: 36779,
    confidence: 0.99899,
    speaker: null,
  },
  {
    text: "as",
    start: 36827,
    end: 36987,
    confidence: 0.99624,
    speaker: null,
  },
  {
    text: "a",
    start: 37011,
    end: 37147,
    confidence: 0.99982,
    speaker: null,
  },
  {
    text: "constellation",
    start: 37171,
    end: 37803,
    confidence: 0.99702,
    speaker: null,
  },
  {
    text: "in",
    start: 37859,
    end: 38027,
    confidence: 0.99992,
    speaker: null,
  },
  {
    text: "the",
    start: 38051,
    end: 38187,
    confidence: 0.99979,
    speaker: null,
  },
  {
    text: "vast",
    start: 38211,
    end: 38491,
    confidence: 0.99235,
    speaker: null,
  },
  {
    text: "cosmos",
    start: 38563,
    end: 38979,
    confidence: 0.86453,
    speaker: null,
  },
  {
    text: "of",
    start: 39027,
    end: 39235,
    confidence: 0.99957,
    speaker: null,
  },
  {
    text: "language,",
    start: 39275,
    end: 39975,
    confidence: 0.72725,
    speaker: null,
  },
  {
    text: "each",
    start: 40275,
    end: 40611,
    confidence: 0.99934,
    speaker: null,
  },
  {
    text: "word",
    start: 40643,
    end: 40875,
    confidence: 0.99943,
    speaker: null,
  },
  {
    text: "a",
    start: 40915,
    end: 41139,
    confidence: 0.99543,
    speaker: null,
  },
  {
    text: "star",
    start: 41187,
    end: 41515,
    confidence: 0.99983,
    speaker: null,
  },
  {
    text: "twinkling",
    start: 41595,
    end: 42091,
    confidence: 0.99977,
    speaker: null,
  },
  {
    text: "with",
    start: 42163,
    end: 42371,
    confidence: 0.99968,
    speaker: null,
  },
  {
    text: "meaning,",
    start: 42403,
    end: 42859,
    confidence: 0.99945,
    speaker: null,
  },
  {
    text: "forming",
    start: 42947,
    end: 43363,
    confidence: 0.9997,
    speaker: null,
  },
  {
    text: "patterns",
    start: 43419,
    end: 43771,
    confidence: 0.99318,
    speaker: null,
  },
  {
    text: "that",
    start: 43803,
    end: 43971,
    confidence: 0.998,
    speaker: null,
  },
  {
    text: "connect",
    start: 44003,
    end: 44235,
    confidence: 0.99954,
    speaker: null,
  },
  {
    text: "us",
    start: 44275,
    end: 44475,
    confidence: 0.99865,
    speaker: null,
  },
  {
    text: "across",
    start: 44515,
    end: 44787,
    confidence: 0.99998,
    speaker: null,
  },
  {
    text: "time",
    start: 44851,
    end: 45075,
    confidence: 0.99998,
    speaker: null,
  },
  {
    text: "and",
    start: 45115,
    end: 45339,
    confidence: 0.99924,
    speaker: null,
  },
  {
    text: "space.",
    start: 45387,
    end: 45975,
    confidence: 0.99989,
    speaker: null,
  },
  {
    text: "Punctuation",
    start: 46275,
    end: 47011,
    confidence: 0.83443,
    speaker: null,
  },
  {
    text: "is",
    start: 47123,
    end: 47323,
    confidence: 0.99992,
    speaker: null,
  },
  {
    text: "the",
    start: 47339,
    end: 47491,
    confidence: 0.99989,
    speaker: null,
  },
  {
    text: "rollercoaster",
    start: 47523,
    end: 48147,
    confidence: 0.57348,
    speaker: null,
  },
  {
    text: "track",
    start: 48211,
    end: 48435,
    confidence: 0.9993,
    speaker: null,
  },
  {
    text: "of",
    start: 48475,
    end: 48603,
    confidence: 0.99995,
    speaker: null,
  },
  {
    text: "a",
    start: 48619,
    end: 48795,
    confidence: 0.99935,
    speaker: null,
  },
  {
    text: "sentence,",
    start: 48835,
    end: 49291,
    confidence: 0.56142,
    speaker: null,
  },
  {
    text: "guiding",
    start: 49403,
    end: 49747,
    confidence: 0.9998,
    speaker: null,
  },
  {
    text: "the",
    start: 49771,
    end: 49883,
    confidence: 0.99986,
    speaker: null,
  },
  {
    text: "reader",
    start: 49899,
    end: 50235,
    confidence: 0.99995,
    speaker: null,
  },
  {
    text: "through",
    start: 50275,
    end: 50523,
    confidence: 0.99983,
    speaker: null,
  },
  {
    text: "twists,",
    start: 50579,
    end: 51099,
    confidence: 0.62227,
    speaker: null,
  },
  {
    text: "turns,",
    start: 51227,
    end: 51723,
    confidence: 0.99971,
    speaker: null,
  },
  {
    text: "and",
    start: 51779,
    end: 51971,
    confidence: 0.99918,
    speaker: null,
  },
  {
    text: "exhilarating",
    start: 52003,
    end: 52603,
    confidence: 0.53715,
    speaker: null,
  },
  {
    text: "drops",
    start: 52659,
    end: 53027,
    confidence: 0.99858,
    speaker: null,
  },
  {
    text: "of",
    start: 53051,
    end: 53187,
    confidence: 0.99988,
    speaker: null,
  },
  {
    text: "meaningful",
    start: 53211,
    end: 54073,
    confidence: 0.3907,
    speaker: null,
  },
  {
    text: "without",
    start: 54199,
    end: 54509,
    confidence: 0.99914,
    speaker: null,
  },
  {
    text: "it,",
    start: 54557,
    end: 54813,
    confidence: 0.99965,
    speaker: null,
  },
  {
    text: "we'd",
    start: 54869,
    end: 55181,
    confidence: 0.83826,
    speaker: null,
  },
  {
    text: "be",
    start: 55213,
    end: 55357,
    confidence: 0.99998,
    speaker: null,
  },
  {
    text: "lost",
    start: 55381,
    end: 55541,
    confidence: 0.99997,
    speaker: null,
  },
  {
    text: "in",
    start: 55573,
    end: 55717,
    confidence: 0.99985,
    speaker: null,
  },
  {
    text: "a",
    start: 55741,
    end: 55853,
    confidence: 0.99969,
    speaker: null,
  },
  {
    text: "linguistic",
    start: 55869,
    end: 56445,
    confidence: 0.98665,
    speaker: null,
  },
  {
    text: "freefall.",
    start: 56485,
    end: 57157,
    confidence: 0.83405,
    speaker: null,
  },
  {
    text: "In",
    start: 57261,
    end: 57477,
    confidence: 0.99737,
    speaker: null,
  },
  {
    text: "a",
    start: 57501,
    end: 57661,
    confidence: 0.99976,
    speaker: null,
  },
  {
    text: "library",
    start: 57693,
    end: 58069,
    confidence: 0.65082,
    speaker: null,
  },
  {
    text: "where",
    start: 58117,
    end: 58325,
    confidence: 0.99989,
    speaker: null,
  },
  {
    text: "books",
    start: 58365,
    end: 58645,
    confidence: 0.99991,
    speaker: null,
  },
  {
    text: "come",
    start: 58685,
    end: 58861,
    confidence: 0.99993,
    speaker: null,
  },
  {
    text: "alive,",
    start: 58893,
    end: 59333,
    confidence: 0.93964,
    speaker: null,
  },
  {
    text: "the",
    start: 59429,
    end: 59661,
    confidence: 0.99978,
    speaker: null,
  },
  {
    text: "English",
    start: 59693,
    end: 59997,
    confidence: 0.56199,
    speaker: null,
  },
  {
    text: "books",
    start: 60061,
    end: 60277,
    confidence: 0.99934,
    speaker: null,
  },
  {
    text: "are",
    start: 60301,
    end: 60413,
    confidence: 0.99989,
    speaker: null,
  },
  {
    text: "the",
    start: 60429,
    end: 60557,
    confidence: 0.99988,
    speaker: null,
  },
  {
    text: "most",
    start: 60581,
    end: 60789,
    confidence: 0.99993,
    speaker: null,
  },
  {
    text: "boisterous",
    start: 60837,
    end: 61389,
    confidence: 0.98754,
    speaker: null,
  },
  {
    text: "debaters,",
    start: 61437,
    end: 62285,
    confidence: 0.6582,
    speaker: null,
  },
  {
    text: "constantly",
    start: 62405,
    end: 62925,
    confidence: 0.99959,
    speaker: null,
  },
  {
    text: "arguing",
    start: 62965,
    end: 63341,
    confidence: 0.99996,
    speaker: null,
  },
  {
    text: "about",
    start: 63373,
    end: 63613,
    confidence: 0.99992,
    speaker: null,
  },
  {
    text: "grammar,",
    start: 63669,
    end: 64253,
    confidence: 0.89896,
    speaker: null,
  },
  {
    text: "etymology,",
    start: 64349,
    end: 65205,
    confidence: 0.93642,
    speaker: null,
  },
  {
    text: "and",
    start: 65365,
    end: 65637,
    confidence: 0.99041,
    speaker: null,
  },
  {
    text: "the",
    start: 65661,
    end: 65797,
    confidence: 0.99962,
    speaker: null,
  },
  {
    text: "ever",
    start: 65821,
    end: 65957,
    confidence: 0.99988,
    speaker: null,
  },
  {
    text: "changing",
    start: 65981,
    end: 66533,
    confidence: 0.54318,
    speaker: null,
  },
  {
    text: "nature",
    start: 66589,
    end: 66805,
    confidence: 0.99862,
    speaker: null,
  },
  {
    text: "of",
    start: 66845,
    end: 66973,
    confidence: 0.99996,
    speaker: null,
  },
  {
    text: "their",
    start: 66989,
    end: 67141,
    confidence: 0.99992,
    speaker: null,
  },
  {
    text: "own",
    start: 67173,
    end: 67365,
    confidence: 0.99974,
    speaker: null,
  },
  {
    text: "language.",
    start: 67405,
    end: 68157,
    confidence: 0.53946,
    speaker: null,
  },
  {
    text: "Each",
    start: 68341,
    end: 68685,
    confidence: 0.99978,
    speaker: null,
  },
  {
    text: "keystroke",
    start: 68725,
    end: 69197,
    confidence: 0.82093,
    speaker: null,
  },
  {
    text: "on",
    start: 69221,
    end: 69333,
    confidence: 0.99979,
    speaker: null,
  },
  {
    text: "a",
    start: 69349,
    end: 69477,
    confidence: 0.6694,
    speaker: null,
  },
  {
    text: "typewriter",
    start: 69501,
    end: 70069,
    confidence: 0.96015,
    speaker: null,
  },
  {
    text: "is",
    start: 70117,
    end: 70277,
    confidence: 0.99987,
    speaker: null,
  },
  {
    text: "a",
    start: 70301,
    end: 70413,
    confidence: 0.9998,
    speaker: null,
  },
  {
    text: "tiny",
    start: 70429,
    end: 70749,
    confidence: 0.85686,
    speaker: null,
  },
  {
    text: "act",
    start: 70797,
    end: 70957,
    confidence: 0.9996,
    speaker: null,
  },
  {
    text: "of",
    start: 70981,
    end: 71165,
    confidence: 0.99986,
    speaker: null,
  },
  {
    text: "creation,",
    start: 71205,
    end: 71925,
    confidence: 0.85135,
    speaker: null,
  },
  {
    text: "a",
    start: 72085,
    end: 72381,
    confidence: 0.97822,
    speaker: null,
  },
  {
    text: "building",
    start: 72413,
    end: 72629,
    confidence: 0.99998,
    speaker: null,
  },
  {
    text: "block",
    start: 72677,
    end: 72941,
    confidence: 0.65035,
    speaker: null,
  },
  {
    text: "in",
    start: 72973,
    end: 73093,
    confidence: 0.99988,
    speaker: null,
  },
  {
    text: "the",
    start: 73109,
    end: 73237,
    confidence: 0.99988,
    speaker: null,
  },
  {
    text: "grand",
    start: 73261,
    end: 73533,
    confidence: 0.99238,
    speaker: null,
  },
  {
    text: "architecture",
    start: 73589,
    end: 74061,
    confidence: 0.44457,
    speaker: null,
  },
  {
    text: "of",
    start: 74093,
    end: 74237,
    confidence: 0.99997,
    speaker: null,
  },
  {
    text: "a",
    start: 74261,
    end: 74421,
    confidence: 0.99959,
    speaker: null,
  },
  {
    text: "sentence.",
    start: 74453,
    end: 75105,
    confidence: 0.9319,
    speaker: null,
  },
  {
    text: "Imagine",
    start: 75485,
    end: 75965,
    confidence: 0.89326,
    speaker: null,
  },
  {
    text: "a",
    start: 76005,
    end: 76157,
    confidence: 0.99981,
    speaker: null,
  },
  {
    text: "typewriter",
    start: 76181,
    end: 76685,
    confidence: 0.96628,
    speaker: null,
  },
  {
    text: "where",
    start: 76725,
    end: 76877,
    confidence: 0.99994,
    speaker: null,
  },
  {
    text: "the",
    start: 76901,
    end: 77037,
    confidence: 0.99978,
    speaker: null,
  },
  {
    text: "keys",
    start: 77061,
    end: 77365,
    confidence: 0.99939,
    speaker: null,
  },
  {
    text: "themselves",
    start: 77405,
    end: 77717,
    confidence: 0.99979,
    speaker: null,
  },
  {
    text: "are",
    start: 77781,
    end: 77981,
    confidence: 0.99989,
    speaker: null,
  },
  {
    text: "parts",
    start: 78013,
    end: 78237,
    confidence: 0.99891,
    speaker: null,
  },
  {
    text: "of",
    start: 78261,
    end: 78493,
    confidence: 0.99986,
    speaker: null,
  },
  {
    text: "speech,",
    start: 78549,
    end: 79021,
    confidence: 0.86425,
    speaker: null,
  },
  {
    text: "nouns,",
    start: 79133,
    end: 79733,
    confidence: 0.95353,
    speaker: null,
  },
  {
    text: "verbs,",
    start: 79829,
    end: 80397,
    confidence: 0.99595,
    speaker: null,
  },
  {
    text: "adjectives",
    start: 80501,
    end: 81229,
    confidence: 0.84703,
    speaker: null,
  },
  {
    text: "dancing",
    start: 81357,
    end: 81829,
    confidence: 0.99911,
    speaker: null,
  },
  {
    text: "together",
    start: 81877,
    end: 82157,
    confidence: 0.99975,
    speaker: null,
  },
  {
    text: "to",
    start: 82221,
    end: 82373,
    confidence: 0.99991,
    speaker: null,
  },
  {
    text: "form",
    start: 82389,
    end: 82541,
    confidence: 0.99999,
    speaker: null,
  },
  {
    text: "a",
    start: 82573,
    end: 82717,
    confidence: 0.99991,
    speaker: null,
  },
  {
    text: "masterpiece.",
    start: 82741,
    end: 83205,
    confidence: 0.50961,
    speaker: null,
  },
];

type ScriptItem = {
  contentText: string;
  imagePrompt: string;
};

type VidData = {
  title: string;
  topic: string;
  voice: string;
  language: string;
  script: ScriptItem[];
  audioUrl: string;
  imageList: string[];
  caption: string;
};

const CreatePage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [step, setStep] = useState<number>(0);
  const [selectedTopic, setSelectedTopic] = useState<string>("Scary Stories");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");
  const [selectedGender, setSelectedGender] = useState<string>("MALE");
  const [selectedDuration, setSelectedDuration] =
    useState<string>("45 to 60 seconds");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("Processing...");

  const [vidData, setVidData] = useState<VidData>({
    title: "",
    topic: selectedTopic,
    voice: selectedGender,
    language: selectedLanguage,
    script: [],
    audioUrl: "",
    imageList: [],
    caption: "",
  });

  const updateVidData = (newData: Partial<VidData>) => {
    setVidData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const onFinish = async () => {
    setIsDialogOpen(true);
    setDialogMessage("Generating Video Script...");
    // const data = {
    //   topic: selectedTopic,
    //   language: selectedLanguage,
    //   gender: selectedGender,
    //   duration: selectedDuration,
    // };
    // try {
    //   await axios.post("/api/get-vid-text", data).then((response) => {
    //     updateVidData({
    //       script: response.data.result,
    //       title: response.data.title,
    //     });
    //     GenerateAudio(response.data.result);
    //     toast.success("Video Script Generated Successfully");
    //   });
    // } catch (error) {
    //   console.log(error);
    //   toast.error("Error Generating Video Script");
    //   setIsDialogOpen(false);
    // }

    try {
      const videoData = await getVideo("7780eeb8-849c-43b4-b9b7-872976f09c69");
      if (videoData) {
        const video = await axios.post("/api/make-video", {
          captions,
          imageUrls,
          audioUrl,
        });
        console.log(video);
        toast.success("Video Generated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error Generating Video");
    } finally {
      setIsDialogOpen(false);
      router.push("/dashboard");
    }
  };

  const GenerateAudio = async (vidScript: ScriptItem[]) => {
    setDialogMessage("Generating Audio...");
    let script = "";
    vidScript.forEach((item) => {
      script = script + item.contentText + "";
    });

    const id = uuidv4();

    await axios
      .post("/api/get-audio", {
        script,
        id,
        gender: selectedGender,
        language: selectedLanguage,
      })
      .then((response) => {
        toast.success("Audio Generated Successfully");
        updateVidData({ audioUrl: response.data.result });
        GenerateCaption(response.data.result, vidScript);
      });
  };

  const GenerateCaption = async (
    audioFileUrl: string,
    vidScript: ScriptItem[],
  ) => {
    setDialogMessage("Generating Caption...");
    await axios.post("/api/get-caption", { audioFileUrl }).then((response) => {
      updateVidData({ caption: response.data.result });
      GenerateImages(vidScript);
      toast.success("Caption Generated Successfully");
    });
  };

  const GenerateImages = async (vidScript: ScriptItem[]) => {
    setDialogMessage("Generating Images...");
    try {
      const imagePromises = vidScript.map((item) =>
        axios.post("/api/get-vid-images", { prompt: item?.imagePrompt }),
      );

      const responses = await Promise.all(imagePromises);
      const images = responses.map((response) => response.data.result);

      toast.success("Images Generated Successfully");

      updateVidData({ imageList: images });
    } catch (error) {
      console.error("Error generating images:", error);
      toast.error("Error generating images");
      setIsDialogOpen(false);
    }
  };

  useEffect(() => {
    const { title, script, audioUrl, caption, imageList } = vidData;

    if (
      title.length > 0 &&
      script.length > 0 &&
      audioUrl &&
      caption &&
      imageList.length > 0
    ) {
      addVidData(vidData);
    }
  }, [vidData]);

  const addVidData = async (vidData: VidData) => {
    setDialogMessage("Saving Video Data...");
    try {
      const userEmail = session?.user?.email;
      await addVideoData(vidData, userEmail!);
      setDialogMessage("Video Generated Successfully");
      setTimeout(() => {
        setIsDialogOpen(false);
        router.push("/dashboard");
      }, 2000);
    } catch (error) {
      console.error("Error adding video data:", error);
      toast.error("Error adding video data");
      setIsDialogOpen(false);
    }
  };

  const fadeInFromBottom = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen p-10 pb-40 flex flex-col gap-2 items-center justify-center">
      <div className="w-full fixed top-0 left-0 p-2">
        <CancelButton />
      </div>
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step-0"
            {...fadeInFromBottom}
            className="flex flex-col gap-10"
          >
            <h1 className="text-2xl font-bold text-center">
              {steps[step].title}
            </h1>
            <Topic
              selectedTopic={selectedTopic}
              setSelectedTopic={setSelectedTopic}
            />
          </motion.div>
        )}
        {step === 1 && (
          <motion.div
            key="step-1"
            {...fadeInFromBottom}
            className="flex flex-col gap-10"
          >
            <h1 className="text-2xl font-bold text-center">
              {steps[step].title}
            </h1>
            <Language
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
            />
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            key="step-2"
            {...fadeInFromBottom}
            className="flex flex-col gap-10"
          >
            <h1 className="text-2xl font-bold text-center">
              {steps[step].title}
            </h1>
            <Gender
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
            />
          </motion.div>
        )}
        {step === 3 && (
          <motion.div
            key="step-3"
            {...fadeInFromBottom}
            className="flex flex-col gap-10"
          >
            <h1 className="text-2xl font-bold text-center">
              {steps[step].title}
            </h1>
            <Duration
              selectedDuration={selectedDuration}
              setSelectedDuration={setSelectedDuration}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="fixed bottom-0 left-0 right-0 w-full">
        <BottomBar step={step} setStep={setStep} onFinish={onFinish} />
      </div>
      <Dialog open={isDialogOpen} onOpenChange={() => {}}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogTitle></DialogTitle>
          <div className="flex flex-col items-center justify-center min-h-[200px] text-center">
            {dialogMessage !== "Video Generated Successfully" ? (
              <>
                <Loader className="h-8 w-8 animate-spin mb-4" />
                <p className="text-lg font-semibold">{dialogMessage}</p>
              </>
            ) : (
              <p className="text-lg font-semibold text-green-600">
                {dialogMessage}
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreatePage;
