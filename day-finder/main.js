function dayFinder(stringDate) {
  const newDate = new Date(stringDate);
  const dayNumber = newDate.getDay();
  switch (dayNumber) {
    case 0:
      return 'Sunday';
      break;
    case 1:
      return 'Monday';
      break;
    case 2:
      return 'Tuesday';
      break;
    case 3:
      return 'Wednesday';
      break;
    case 4:
      return 'Thursday';
      break;
    case 5:
      return 'Friday';
      break;
    case 6:
      return 'Saturday';
  }
}

const solutionOne = dayFinder("05/22/1946");
console.log(solutionOne);

const solutionTwo = dayFinder("01/20/2001");
console.log(solutionTwo);

const solutionThree = dayFinder("03/15/1988");
console.log(solutionThree);
