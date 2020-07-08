var acidic = "acidic";
var neutral = "neutral";
var alkaline = "alkaline";
var invalid = "invalid pH value"

function phAnalyzer(pH) {
  if(pH >= 1 && pH<=6) {
    return acidic;
  } else if (pH === 7) {
    return neutral
  } else if (pH >= 8 && pH<= 14) {
    return alkaline
  } else {
    return invalid
  }
}

phAnalyzerResult = phAnalyzer(1);

console.log(phAnalyzerResult);
