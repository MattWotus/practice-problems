function findLargestNum(arr) {
  let largestNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    };
  };
  return largestNum;
};

const solutionOne = findLargestNum([4, 5, 1, 3]);
console.log(solutionOne);

const solutionTwo = findLargestNum([300, 200, 600, 150]);
console.log(solutionTwo);

const solutionThree = findLargestNum([1000, 1001, 857, 1]);
console.log(solutionThree);
