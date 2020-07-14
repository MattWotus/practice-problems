function meanCalculator(numbersArray) {
  var sum = null;
  var mean = null;
  for (i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
    mean = sum / numbersArray.length;
  };
  return mean
};

var meanSolution = meanCalculator([1, 2, 3, 4, 5]);
console.log(meanSolution);
