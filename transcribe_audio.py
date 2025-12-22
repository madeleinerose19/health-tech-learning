import whisper

AUDIO_FILE = "intake_audio.wav"

def transcribe():
    print("Loading Whisper model...")
    model = whisper.load_model("base")

    print("Transcribing audio...")
    result = model.transcribe(AUDIO_FILE)

    transcript = result["text"].strip()

    with open("transcript.txt", "w") as f:
        f.write(transcript)

    print("Transcription complete:")
    print(transcript)

if __name__ == "__main__":
    transcribe()
