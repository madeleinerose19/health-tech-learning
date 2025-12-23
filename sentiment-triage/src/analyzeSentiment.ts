import OpenAI from "openai";
import type { SentimentResult } from "./types.ts";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function analyzeSentiment(
  text: string
): Promise<SentimentResult> {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are a medical front-desk triage assistant. " +
          "Classify patient messages by sentiment and urgency."
      },
      {
        role: "user",
        content: text
      }
    ],
    response_format: {
      type: "json_schema",
      json_schema: {
        name: "sentiment_triage",
        schema: {
          type: "object",
          properties: {
            sentiment: {
              type: "string",
              enum: ["positive", "neutral", "negative"]
            },
            urgency: {
              type: "string",
              enum: ["low", "medium", "high"]
            },
            explanation: {
              type: "string"
            }
          },
          required: ["sentiment", "urgency", "explanation"]
        }
      }
    }
  });

  return JSON.parse(
    response.choices[0].message.content ?? "{}"
  ) as SentimentResult;
}
