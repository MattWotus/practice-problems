function isTheAverageWhole(numbersArray) {
  var sum = 0;
  for (i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  };
  if (sum % numbersArray.length === 0) {
    return true;
  } else {
    return false;
  };
};


var solutionOne = isTheAverageWhole([1, 3, 4, 4]);

console.log(solutionOne);

var solutionTwo = isTheAverageWhole([3, 4]);

console.log(solutionTwo);

var solutionThree = isTheAverageWhole([5, 5, 5]);

console.log(solutionThree);
