function decimalPlaceCounter(stringNumber) {
  var str = stringNumber
  var decimal = str.indexOf(".");
  if (decimal > 0) {
    return str.length - decimal - 1;
  } else {
    return 0;
  }
};

var solution = decimalPlaceCounter("123.245");
console.log(solution);

var solutionTwo = decimalPlaceCounter("145");
console.log(solutionTwo);

var solutionThree = decimalPlaceCounter("23.00");
console.log(solutionThree);
