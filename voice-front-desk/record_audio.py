import sounddevice as sd
from scipy.io.wavfile import write

FILENAME = "intake_audio.wav"
DURATION_SECONDS = 5
SAMPLE_RATE = 44100

def record_audio():
    print("Recording started. Please speak clearly...")
    
    audio = sd.rec(
        int(DURATION_SECONDS * SAMPLE_RATE),
        samplerate=SAMPLE_RATE,
        channels=1
    )
    sd.wait()
    
    write(FILENAME, SAMPLE_RATE, audio)
    print(f"Recording saved to {FILENAME}")

if __name__ == "__main__":
    record_audio()
