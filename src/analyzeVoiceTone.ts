export interface VoiceToneResult {
    stressScore: number; // 0–1
    features: {
      pitchVariance: number;
      volumeVariance: number;
      speakingRate: number;
    };
  }
  
  export function analyzeVoiceTone(
    audioMetrics: {
      pitch: number[];
      volume: number[];
      wordsPerMinute: number;
    }
  ): VoiceToneResult {
    const pitchVariance =
      Math.max(...audioMetrics.pitch) -
      Math.min(...audioMetrics.pitch);
  
    const volumeVariance =
      Math.max(...audioMetrics.volume) -
      Math.min(...audioMetrics.volume);
  
    const speakingRate = audioMetrics.wordsPerMinute;
  
    // Simple heuristic stress score
    let stressScore = 0;
  
    if (pitchVariance > 80) stressScore += 0.4;
    if (volumeVariance > 0.5) stressScore += 0.3;
    if (speakingRate > 160) stressScore += 0.3;
  
    stressScore = Math.min(1, stressScore);
  
    return {
      stressScore,
      features: {
        pitchVariance,
        volumeVariance,
        speakingRate,
      },
    };
  }
  