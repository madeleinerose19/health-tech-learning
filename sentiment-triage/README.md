# Sentiment Triage

This project explores how incoming patient messages or calls could be
automatically analyzed to assist front-desk and clinical triage workflows.

The focus is on **inference-based classification**, not keyword matching.

---

## Problem

Medical practices receive a high volume of patient messages and calls.
Many require prioritization (urgent vs non-urgent), but this is currently
handled manually by staff.

---

## Approach

This prototype uses a **language model** to infer:

- Patient sentiment (positive / neutral / negative)
- Urgency level (low / medium / high)
- A short natural-language explanation

Unlike rules-based systems, this approach generalizes to unseen phrasing
and does not rely on enumerating keywords.

---

## Example

**Input**
"I’m really anxious and my chest hurts"

**Output**
```json
{
  "sentiment": "negative",
  "urgency": "high",
  "explanation": "Patient reports anxiety and chest pain, which may indicate an urgent medical concern."
}

