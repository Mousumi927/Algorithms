// Q: Double the integer given in an array:

function doubleInteger() {
  const myArray = [2, 5, 7, 8, 3, 34];
  for (i = 0; i < myArray.length; i++) {
    myArray[i] = myArray[i] * 2;
  }
  return myArray;
}
console.log(doubleInteger());
