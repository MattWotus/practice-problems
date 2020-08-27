function spellChecker(userWords, correctWords) {
  const obj = {
    correct: [],
    incorrect: []
  };
  for (let i = 0; i < userWords.length; i++) {
    if (userWords[i] === correctWords[i]) {
      obj.correct.push(userWords[i])
    } else {
      obj.incorrect.push(userWords[i]);
    }
  }
  return obj;
}

const solutionOne = spellChecker(["boy", "duct", "ice cream", "sendwich"], ["boy", "duck", "ice cream", "sandwich"]);
console.log(solutionOne);

const solutionTwo = spellChecker(["jam", "breat", "sound"], ["jam", "bread", "sound"])
console.log(solutionTwo);

const solutionThree = spellChecker(["java", "CDS", "HTMO"], ["java", "CSS", "HTML"])
console.log(solutionThree);
