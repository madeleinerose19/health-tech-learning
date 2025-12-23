# Voice Sentiment Triage (Prototype)

This project explores how patient voice input could be analyzed to support
front-desk and clinical triage workflows.

It combines **speech transcription**, **text-based sentiment analysis**, and
**simulated voice tone features** to produce a structured triage signal
(e.g. urgency and sentiment).

This is a learning and prototyping project, not a production system.

---

## What This Project Does

The prototype demonstrates how incoming patient speech or messages could be
processed into structured signals that downstream systems (such as scheduling
or routing) could consume.

Specifically, it:

1. Accepts a patient message or transcript
2. Analyzes the text to infer sentiment and urgency
3. Analyzes simulated voice tone features (e.g. pitch, volume, speaking rate)
4. Fuses text and voice signals into a single triage result

Voice tone analysis is simulated using numeric inputs rather than live audio.

---

## Why This Exists

Medical practices receive a high volume of calls and messages that must be
manually reviewed to determine urgency.

This prototype explores how **inference-based models**, rather than
keyword rules, could help surface urgency signals earlier and more consistently.

---

## Example (Prototype Output)

Given a patient transcript and simulated voice features:

**Input (transcript)**  
> "My knee has been sore for a few weeks and I want to get it checked."

**Output (illustrative)**

```json
{
  "sentiment": "neutral",
  "urgency": "low",
  "confidence": 0.65,
  "rationale": "Non-urgent wording and calm vocal delivery."
}
