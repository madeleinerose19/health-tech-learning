export type Sentiment = "positive" | "neutral" | "negative"
export type Urgency = "low" | "medium" | "high"

/**
 * Result from text-only (LLM) analysis
 */
export interface TextTriageResult {
  transcript: string
  sentiment: Sentiment
  urgency: Urgency
  explanation: string
}

/**
 * Result from voice tone / acoustic analysis
 */
export interface VoiceToneResult {
  stressScore: number
  features: {
    pitchVariance: number
    volumeVariance: number
    speakingRate: number
  }
}

/**
 * Final fused triage decision
 * (text + voice + confidence)
 */
export interface VoiceTriageResult {
  transcript: string
  sentiment: Sentiment
  urgency: Urgency
  stressScore: number
  confidence: number
  explanation: string
}
