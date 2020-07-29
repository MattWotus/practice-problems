function isSantaComing(dateObject) {
  var month = dateObject.getMonth();
  var day = dateObject.getDate();
  if (month === 11 && day === 24) {
    return true;
  } else {
    return false;
  };
};

var solutionOne = isSantaComing(new Date(2001, 11, 24));
console.log(solutionOne);

var solutionTwo = isSantaComing(new Date(2018, 7, 4));
console.log(solutionTwo);

var solutionThree = isSantaComing(new Date(1995, 11, 23, 23, 59, 59));
console.log(solutionThree);
