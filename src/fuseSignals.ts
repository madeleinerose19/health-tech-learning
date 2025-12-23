// src/fuseSignals.ts

import type {
    TextTriageResult,
    VoiceToneResult,
    VoiceTriageResult
  } from "./types.js"
  
  export function fuseSignals(
    text: TextTriageResult,
    voice: VoiceToneResult
  ): VoiceTriageResult {
    let urgency = text.urgency
    let confidence = 0.6
  
    // If voice stress is high, escalate urgency
    if (voice.stressScore >= 2) {
      urgency = "high"
      confidence += 0.25
    }
  
    // Moderate stress boosts confidence slightly
    if (voice.stressScore === 1) {
      confidence += 0.15
    }
  
    return {
      transcript: text.transcript,
      sentiment: text.sentiment,
      urgency,
      stressScore: voice.stressScore,
      confidence: Math.min(confidence, 0.95),
      explanation:
        `Text analysis suggested ${text.urgency} urgency. ` +
        `Voice stress score was ${voice.stressScore}, ` +
        `resulting in final urgency of ${urgency}.`
    }
  }
  