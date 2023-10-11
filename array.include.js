// Q: Using include method search for a number in an array.
//If the number exists in the array return True else false.

function includes(array, searchElement) {
  for (let element of array) if (element == searchElement) return true;
  return false;
}

let num = [1, 4, 5, 7, 3];
console.log(includes(numbers, 1));
