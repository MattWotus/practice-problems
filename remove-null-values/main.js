function removeNullValues(array) {
  var filtered = array.filter(function (el) {
    return el !== null;
  });
  return filtered;
};

var solutionOne = removeNullValues([3, 5, null, null, 87, "hello", "goodbye"]);
console.log(solutionOne);

var solutionTwo = removeNullValues([true, null, false, {}, null, 43, "node"]);
console.log(solutionTwo);

var solutionThree = removeNullValues([null, null, null, 7, null, "eight"]);
console.log(solutionThree);
