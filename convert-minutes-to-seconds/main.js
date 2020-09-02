function convertMinutesToSeconds(timeToConvert) {
  const minutesNumber = parseInt(timeToConvert.slice(0, 2));
  const secondsNumber = parseInt(timeToConvert.slice(3));
  const seconds = (minutesNumber * 60) + secondsNumber;
  return seconds;
}

const solutionOne = convertMinutesToSeconds("15:34");
console.log(solutionOne);

const solutionTwo = convertMinutesToSeconds("02:45");
console.log(solutionTwo);

const solutionThree = convertMinutesToSeconds("08:21");
console.log(solutionThree);
