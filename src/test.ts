import { analyzeText } from "./analyzeText.js"
import { analyzeVoiceTone } from "./analyzeVoiceTone.js"
import { fuseSignals } from "./fuseSignals.js"

console.log("Starting fused triage test...")

async function runTest() {
  // 1. Analyze text
  const textResult = await analyzeText(
    "I'm in a lot of pain and my chest feels tight."
  )

  console.log("Text result:")
  console.log(textResult)

  // 2. Analyze voice tone (raw acoustic features)
  const voiceResult = analyzeVoiceTone({
    pitch: [180, 210, 260, 240, 300],
    volume: [0.4, 0.6, 0.8, 0.7, 0.9],
    wordsPerMinute: 210
  })

  console.log("Voice result:")
  console.log(voiceResult)

  // 3. Fuse signals
  const fusedResult = fuseSignals(textResult, voiceResult)

  console.log("FUSED RESULT:")
  console.log(fusedResult)
}

runTest().catch((err) => {
  console.error("Test failed:", err)
})
