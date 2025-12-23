// src/analyzeText.ts
import OpenAI from "openai";
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});
export async function analyzeText(transcript) {
    const response = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "system",
                content: "You are a medical front-desk triage assistant. " +
                    "Given a patient message, infer sentiment and urgency. " +
                    "Respond in JSON with fields: sentiment, urgency, explanation."
            },
            {
                role: "user",
                content: transcript
            }
        ]
    });
    const content = response.choices[0].message.content;
    // VERY simple parsing for prototype purposes
    // (You already discussed JSON-only schema as the next upgrade)
    const sentiment = content.includes("negative") ? "negative" :
        content.includes("positive") ? "positive" :
            "neutral";
    const urgency = content.includes("high") ? "high" :
        content.includes("medium") ? "medium" :
            "low";
    return {
        transcript,
        sentiment,
        urgency,
        explanation: content
    };
}
