function zipCodeValidator(zipToValidate) {
  var number = /^\d+$/.test(zipToValidate);
  var space = /\s/.test(zipToValidate);
  var length = zipToValidate.length;
  if (number === true && space === false && length <= 5) {
    return true;
  } else {
    return false;
  };
};

var solutionOne = zipCodeValidator("21594");
console.log(solutionOne);

var solutionTwo = zipCodeValidator("3Eds32");
console.log(solutionTwo);

var solutionThree = zipCodeValidator("9123465");
console.log(solutionThree);
