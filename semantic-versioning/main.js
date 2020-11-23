function retrieveMajor(semver) {
  const major = semver.split(".")[0];
  return major;
}

function retrieveMinor(semver) {
  const minor = semver.split(".")[1];
  return minor;
}

function retrievePatch(semver) {
  const patch = semver.split(".")[2];
  return patch;
}

const SolutionOneMajor = retrieveMajor("6.1.9");
console.log(SolutionOneMajor);

const SolutionOneMinor = retrieveMinor("6.1.9");
console.log(SolutionOneMinor);

const SolutionOnePatch = retrievePatch("6.1.9");
console.log(SolutionOnePatch);

const SolutionTwoMajor = retrieveMajor("2.1.0");
console.log(SolutionTwoMajor);

const SolutionTwoMinor = retrieveMinor("2.1.0");
console.log(SolutionTwoMinor);

const SolutionTwoPatch = retrievePatch("2.1.0");
console.log(SolutionTwoPatch);
