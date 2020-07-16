function createRepeatingLetter(word, numOfRepeats) {
  var newString = "";
  for (var i = 0; i < word.length; i++) {
    newString += word[i].repeat([numOfRepeats]);
  };
  return newString;
};

var repeatingSolution = createRepeatingLetter("John", 3);

console.log(repeatingSolution);

var repeatingSolutionTwo = createRepeatingLetter("car", 4);

console.log(repeatingSolutionTwo);

var repeatingSolutionThree = createRepeatingLetter("Howdy", 1);

console.log(repeatingSolutionThree);
