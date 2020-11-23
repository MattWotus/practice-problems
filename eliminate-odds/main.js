function noOdds(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArray.push(arr[i]);
    };
  };
  return newArray;
}

const solutionOne = noOdds([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(solutionOne);

const solutionTwo = noOdds([43, 65, 23, 89, 53, 9, 6]);
console.log(solutionTwo);

const solutionThree = noOdds([718, 991, 449, 644, 380, 440]);
console.log(solutionThree);
