function accountNumberProtector(cardNumberString) {
  let protector = "";
  protector = "**" + cardNumberString.slice(12);
  return protector;
}

const solutionOne = accountNumberProtector("5543223485638832");
console.log(solutionOne);

const solutionTwo = accountNumberProtector("8934235477210943");
console.log(solutionTwo);

const solutionThree = accountNumberProtector("7513635499320192");
console.log(solutionThree);
