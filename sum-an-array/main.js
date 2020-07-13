function sumArray(numbersArray) {
  var sum = 0;
  for (var i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  };
  return sum
};

var sumResult = sumArray([1,2,3,4,5]);
console.log(sumResult);
