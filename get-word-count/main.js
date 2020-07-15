function getWordCount(string) {
  var str = string;
  str = str.replace(/(^\s*)|(\s*$)/gi, "");
  str = str.replace(/[ ]{2,}/gi, " ");
  str = str.replace(/\n /, "\n");
  return string.split(' ').length;
};

var solution = getWordCount("This is a sample sentence");

console.log(solution);
