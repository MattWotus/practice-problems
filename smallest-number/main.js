function smallestNumber(arr) {
  let smallestNumber = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNumber) {
      smallestNumber = arr[i];
    }
  }
  return smallestNumber;
}
