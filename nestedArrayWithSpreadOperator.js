// Q:You have a nested array, and you want to flatten it to a single-level array using the spread operator

function flattenArray(arr) {
  let flattenedArray = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      flattenedArray.push(...flattenArray(item));
    } else {
      flattenedArray.push(item);
    }
  }

  return flattenedArray;
}

const nestedArray = [1, [2, [3, 4]], 5, [6]];
const flattenedArray = flattenArray(nestedArray);

console.log(flattenedArray);
