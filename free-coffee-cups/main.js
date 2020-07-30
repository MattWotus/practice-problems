function freeCoffeeCups(coffeeCups) {
  var division = coffeeCups / 6;
  var cupsAdded = Math.floor(division);
  var total = coffeeCups + cupsAdded;
  return total;
};

var solutionOne = freeCoffeeCups(13);
console.log(solutionOne);

var solutionTwo = freeCoffeeCups(6);
console.log(solutionTwo);

var solutionThree = freeCoffeeCups(5);
console.log(solutionThree);
