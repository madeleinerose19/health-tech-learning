import { analyzeSentiment } from "./analyzeSentiment.ts"

console.log("Starting test...")

async function runTest() {
  const message = "My knee has been sore for a few weeks and I want to get it checked."


  console.log("Calling analyzeSentiment...")

  const result = await analyzeSentiment(message)

  console.log("Result received:")
  console.log(result)
}

runTest().catch((err) => {
  console.error("Error running test:", err)
})
