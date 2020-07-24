function isWithinRange(number, rangeObject) {
  var number;
  var rangeObject;
  var min = rangeObject["min"];
  var max = rangeObject["max"];

  if (number >= min && number <= max) {
    return true;
  } else {
    return false;
  };
};

var solutionOne = isWithinRange(5, {min: 1, max: 9});
console.log(solutionOne);

var solutionTwo = isWithinRange(12, {min: 15, max: 29});
console.log(solutionTwo);

var solutionThree = isWithinRange(9, {min: 0, max: 9});
console.log(solutionThree);
