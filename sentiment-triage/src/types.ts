export type Sentiment = "positive" | "neutral" | "negative"

export type Urgency = "low" | "medium" | "high"

export interface SentimentResult {
  sentiment: Sentiment
  urgency: Urgency
  explanation: string
}
