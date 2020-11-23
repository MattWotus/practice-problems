function getFillings(sandwich) {
  const newArray = sandwich.slice(1, sandwich.length - 1);
  return newArray;
}

const solutionOne = getFillings(["bread", "ham", "cheese", "ham", "bread"]);
console.log(solutionOne);

const solutionTwo = getFillings(["bread", "sausage", "tomato", "bread"]);
console.log(solutionTwo);

const solutionThree = getFillings(["bread", "lettuce", "bacon", "tomato", "bread"]);
console.log(solutionThree);
