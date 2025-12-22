import re

def extract_intent(transcript):
    intent = None

    if "schedule" in transcript.lower():
        intent = "schedule_appointment"
    elif "check in" in transcript.lower():
        intent = "check_in"

    time_match = re.search(r"\b\d{1,2}(am|pm)\b", transcript.lower())
    time = time_match.group(0) if time_match else None

    provider_match = re.search(r"Dr\.?\s+[A-Z][a-z]+", transcript)
    provider = provider_match.group(0) if provider_match else None

    return {
        "intent": intent,
        "time": time,
        "provider": provider
    }

if __name__ == "__main__":
    with open("transcript.txt") as f:
        transcript = f.read()

    data = extract_intent(transcript)

    print("Extracted data:")
    print(data)
