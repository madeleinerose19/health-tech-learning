# Voice Front Desk Intake (Prototype)

This is a prototype voice-based intake system for medical front desks.

It records patient speech, transcribes it using Whisper, and extracts structured scheduling intent.

## Overview

Medical practices spend significant staff time handling routine phone calls.
This prototype demonstrates how voice automation could handle basic appointment intake.

## Pipeline

1. Record audio from a microphone
2. Transcribe speech to text
3. Extract structured intent (appointment, time, provider)

## Example

Patient says:

"Hi, I’m calling to schedule my 2pm appointment with Dr. Rose."

Extracted output:

- Intent: schedule_appointment  
- Time: 2pm  
- Provider: Dr. Rose

## Files

- `record_audio.py` – records microphone input
- `transcribe_audio.py` – transcribes audio with Whisper
- `extract_intent.py` – extracts structured intent
- `intake_audio.wav` – sample recording
- `transcript.txt` – transcription output

## Status

Early proof-of-concept for learning and experimentation.
