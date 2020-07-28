function wordBuilder(wordToSpell) {
  var string = wordToSpell;
  var previousLetters = "";
  var array = [];
  for (var i = 0; i < string.length; i++) {
    previousLetters += string[i];
    array.push(previousLetters);
  };
  return array;
};

var SolutionOne = wordBuilder("JavaScript");
console.log(SolutionOne);

var SolutionTwo = wordBuilder("Moon");
console.log(SolutionTwo);

var SolutionThree = wordBuilder("Stars");
console.log(SolutionThree);
