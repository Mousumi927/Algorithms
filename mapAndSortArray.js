// Q: Write a function takes an array of numbers, doubles each number, and then sorts the resulting array in ascending order.

function doubleAndSort(arr) {
  const doubledArray = arr.map((num) => num * 2);
  const sortedArray = doubledArray.sort((a, b) => a - b);
  return sortedArray;
}

const originalArray = [5, 1, 3, 2, 4];
const sortedDoubledArray = doubleAndSort(originalArray);

console.log("Original array:", originalArray);
console.log("Sorted and doubled array:", sortedDoubledArray);
