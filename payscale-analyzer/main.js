function payscaleAnalyzer(payList) {
  var min = Math.min.apply(null, payList);
  var max = Math.max.apply(null, payList);
  var difference = max - min;
  return difference;
}

var solutionOne = payscaleAnalyzer([28, 34, 21, 39]);
console.log(solutionOne);

var solutionTwo = payscaleAnalyzer([18, 22, 19, 26]);
console.log(solutionTwo);

var solutionThree = payscaleAnalyzer([41.50, 27.25, 32.50, 29.60]);
console.log(solutionThree);
