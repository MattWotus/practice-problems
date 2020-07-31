function oddUpEvenDown(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      array[i]--
    } else {
      array[i]++
    };
  };
  return array;
};

var solutionOne = oddUpEvenDown([1, 2, 3, 4, 5]);
console.log(solutionOne);

var solutionTwo = oddUpEvenDown([23, 15, 18, 14, 32]);
console.log(solutionTwo);

var solutionThree = oddUpEvenDown([72, 212, 77, 124, 53]);
console.log(solutionThree);
