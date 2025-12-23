// src/testVoiceTone.ts
import { analyzeVoiceTone } from "./analyzeVoiceTone.js";

const result = analyzeVoiceTone({
  pitch: [180, 260, 240, 300],
  volume: [0.3, 0.9, 0.7],
  wordsPerMinute: 190,
});

console.log(result);
